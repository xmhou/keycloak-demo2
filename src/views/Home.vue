<template>
  <div class="home">
    <h1>首页</h1>
    <van-list finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.id" @click="toDetail(item.id)">
        <div class="news">
          <div class="left">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.briefIntro}}</p>
            <p class="createTime">{{item.createTime}}</p>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<style>
  .news {
    display: flex;
    font-size: 16px;
  }
  .news .left {
    width: 300px;
    height: 180px;
  }
  .news .left img {
    width: 100%;
  }
  .news .right {

  }
</style>
<script>
// @ is an alias to /src
  import { List, Cell} from 'vant';
  export default {
    name: 'Home',
    components: {
      [List.name]: List,
      [Cell.name]: Cell
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false
      }
    },
    methods: {
      onLoad() {
        let _this = this;
        console.log("huoqu")
        fetch("/api/getList")
          .then(res => res.json())
          .then(res => {
            console.log(res)
            _this.list = res.data;
            // _this.loading = true;
            // _this.finished = true;
            
          })
        
      },
      toDetail(id) {
        this.$router.push("/detail/" + id)
      }
    }
  }
</script>
