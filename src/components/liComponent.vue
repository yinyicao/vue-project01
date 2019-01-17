<template id="li">
  <li>
    <el-row :gutter="12"  style="width: 750px ; height: 80px;">
      <el-col :span="8" style="height: 80px;" >
        <el-card shadow="always" style="width: 300px;height: 80px;display: flex;align-items: center;">
          {{content}}
        </el-card>
      </el-col>
      <el-col :span="3" style="height: 80px;  display: flex;align-items: center;" >
        <el-button type="danger" icon="el-icon-delete" circle v-on:click="$emit(remove)">
        </el-button>
      </el-col>
    </el-row>
  </li>
</template>

<script>
export default {
  name: 'liComponent',
  comments: {
    liComponent: {
      template: '#li',
      props: ['content']
    }
  }
}
</script>

<style scoped>

</style>
