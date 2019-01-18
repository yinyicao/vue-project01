<template>
  <div>
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
      }]
    }
  },
  methods: {
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
    liComponent: {
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
