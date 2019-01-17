<template>
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
</template>

<script>
export default {
  name: 'TableComponent',
  data () {
    return {
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
    }
  }
}
</script>

<style scoped>

</style>
