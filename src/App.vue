<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="双向绑定" name="first">
          <router-view/>
      </el-tab-pane>
      <el-tab-pane label="动态加行" name="second">
          <router-view/>
      </el-tab-pane>
    </el-tabs>
    <!--<router-link to="/addRowComponent" tag="button">Go to AddRowComponent</router-link>-->
    <!--<router-link to="/tableComponent" tag="button">Go to TableComponent</router-link>-->
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      if (tab.$el.id === 'pane-first') {
        this.$router.push({ path: '/tableComponent' })
      } else {
        this.$router.push({ path: '/addRowComponent' })
      }
      // console.log(tab.$el, event)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
