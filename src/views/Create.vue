<template>
  <div class="about">
    <van-uploader v-model="img"/>
    <van-field v-model="title" label="标题" />
    <van-field v-model="briefIntro" label="简介" />
    <van-field v-model="content" rows="1" autosize label="内容" type="textarea" placeholder="请输入内容" />
    <van-button type="primary" class="submit" @click="addNews">提交</van-button>
  </div>
</template>
<style>
  .submit {
    position: absolute;
    left: 0;
    bottom: 2rem;
    width: 100%;
  }
</style>
<script>
  import { Uploader, Field, Button } from 'vant';
  export default {
    components: {
      [Uploader.name]: Uploader,
      [Field.name]: Field,
      [Button.name]: Button,
    },
    data() {
      return {
        title: '',
        briefIntro: "",
        content: "",
        img: []
      }
    },
    methods: {
      afterRead(file) {
        this.img.push(file.content);
      },
      addNews() {
        let _this = this;
        let _data = {
          title: this.title,
          briefIntro: this.briefIntro,
          content: this.content,
          img: this.img[0].content
        }
        fetch("/api/add", {
          method: 'POST',//post请求 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(_data)
        }).then(res => res.json())
        .then(res => {
          console.log('add', res)
          if(res.status == 200) {
            alert("文章上传成功");
            _this.$router.push("/");
          }else {
            alert("失败！" + res.errorMsg)
          }
        })
      }
    }
  }
</script>
