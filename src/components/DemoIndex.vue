<template>
  <div>
  <div>
  <el-table
    :data="tableData"
    :span-method="arraySpanMethod"
    border
    style="width:901px;margin-left: 100px"
    >
    <el-table-column
      prop="id"
      label="编号"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      label="数量"
      width="180"
      align="center">
      <template slot-scope="scope">
        <!--@change="handleChange(scope.$index)" :min="1" :max="10"-->
      <el-input-number v-model="tableData[scope.$index].countNum" @change="handleChange(scope.$index)" size="mini" :min="0"  label="描述文字"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column
      label="总价"
      width="180"
      align="center">
      <template slot-scope="scope">
        <!--   (tableData[scope.$index].countNum) * (tableData[scope.$index].price)-->
        <label>{{tableData[scope.$index].totalPrice}}</label>
      </template>
    </el-table-column>
  </el-table>

  </div>
    <div style="height: 50px;">
    </div>
      <div style="width: 300px;margin-left: 100px;">
        <div style="display: inline">
          <el-input
            placeholder="请输入内容"
            v-model="inputContent"
            size="small"
            style="width:200px;"
            clearable>
          </el-input>
        </div>
        <div style="display: inline">
          <el-button type="primary" icon="el-icon-plus" style="width: 80px" size="small" v-on:click="addRow">添加</el-button>
        </div>
        <div>
          <li is="liComponent"
              v-for="(data, index) in ulData"
              v-bind:key= "data.id"
              v-bind:content= "data.content"
              v-on:remove= "ulData.splice(index, 1)"
              style="margin-top:5px ;list-style: none;width: 500px"
          >

          </li>
        </div>
   </div>
  </div>
</template>

<script>
// const liComponent = {template: '#tem1'}
// import liComponent from './liComponent.vue'
export default {
  name: 'DemoIndex',
  data () {
    return {
      inputContent: '',
      ulData: [{
        id: 1,
        content: '测试内容1 2019-01-15'
      }, {
        id: 2,
        content: '测试内容2 2019-01-15'
      }],
      tableData: [{
        id: 1,
        name: 'apple',
        price: '3',
        countNum: 1,
        totalPrice: '0'
      }, {
        id: 2,
        name: 'pear',
        price: '4',
        countNum: 1,
        totalPrice: '0'
      }, {
        id: 3,
        name: 'banana',
        price: '5',
        countNum: 1,
        totalPrice: '0'
      }, {
        id: ''
      }]
    }
  },
  mounted: function () {
    let totalAllPrice = 0
    let data = this.tableData
    for (let index in this.tableData) {
      this.tableData[index].totalPrice = this.tableData[index].countNum * this.tableData[index].price
      if (data[index].totalPrice) {
        totalAllPrice += parseInt(data[index].totalPrice)
      }
    }
    this.tableData[this.tableData.length - 1].id = '总价：￥' + totalAllPrice
  },
  methods: {
    arraySpanMethod ({row, column, rowIndex, columnIndex}) {
      if (rowIndex === (this.tableData.length - 1) && columnIndex === 0) {
        return [1, 5]
      }
    },

    handleChange (rowIndex) {
      this.tableData[rowIndex].totalPrice = this.tableData[rowIndex].countNum * this.tableData[rowIndex].price
      let totalAllPrice = 0
      for (let item of this.tableData) {
        if (item.totalPrice) {
          totalAllPrice += parseInt(item.totalPrice)
        }
      }
      this.tableData[this.tableData.length - 1].id = '总价：￥' + totalAllPrice
    },
    addRow () {
      let nextId = 0
      if (this.ulData.length === 0) {
        nextId = 1
      } else {
        nextId = this.ulData[this.ulData.length - 1].id + 1
      }
      if (this.inputContent.trim() === '') {
        this.$message.error('内容为空不能添加哦~')
      } else {
        this.ulData.push({
          id: nextId,
          content: this.inputContent
        })
      }
      this.inputContent = ''
    }
  },
  components: {
    // liComponent: {
    //   liComponent
    // }
    liComponent: {
    // template: '#tem1'
      template: '<li>' +
      '          <el-row :gutter="12"  style="width: 750px ; height: 80px;">' +
      '            <el-col :span="8" style="height: 80px;" >' +
      '              <el-card shadow="always" style="width: 300px;height: 80px;display: flex;align-items: center;">' +
      '                {{content}}' +
      '              </el-card>' +
      '            </el-col>' +
      '            <el-col :span="3" style="height: 80px;  display: flex;align-items: center;" >' +
      '               <el-button type="danger" icon="el-icon-delete" circle v-on:click="$emit(\'remove\')">' +
      '               </el-button>' +
      '            </el-col>' +
      '        </el-row>' +
      '        </li>',
      props: ['content']
    }
  }
}
</script>

<style scoped>
</style>
