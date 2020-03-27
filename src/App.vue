<template>
  <div id="app">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/create" icon="plus">
        发布
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 10rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
