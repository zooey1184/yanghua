<template lang="html">
  <div class="adopt_seed_wrap">
    <p class="title">{{title}}</p>
    <img class="pic" v-if="showId===0" src="//p8jtbvrrf.bkt.clouddn.com/pic_wenhao.png" alt="">
    <img class="pic" v-if="showId===1" src="//p8jtbvrrf.bkt.clouddn.com/pic_xiangrikui.png" alt="">
    <img class="pic" v-if="showId===2" src="//p8jtbvrrf.bkt.clouddn.com/pic_xianrenzhang.png" alt="">
    <div class="group">
      <div class="item">
        <p>需要种子</p>
        <div class="seed">
          <img src="//p8jtbvrrf.bkt.clouddn.com/icon_zhongzi.png" alt="">
          <p>免费</p>
        </div>
      </div>
      <div class="item">
        <p>收获种子</p>
        <div class="seed">
          <img src="//p8jtbvrrf.bkt.clouddn.com/icon_zhongzi.png" alt="">
          <p>X 1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=> ({
    showId: 0,      // 0：问号， 1：向日葵， 2：仙人掌
  }),
  props: {
    title: String,
    haved: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    haved: function(n, o) {
      this.exchange()
    }
  },
  methods: {
    exchange() {
      if(this.haved) {
        if(this.title.match(/向日葵/g)) {
          this.showId = 1
        }else {
          this.showId =2
        }
      }else {
        this.showId = 0
      }
    }
  },
  mounted() {
    this.exchange()
  }
}
</script>

<style lang="less">
.adopt_seed_wrap {
  width: 70%;
  display: block;
  margin: 0 auto;
  height: 160px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 5px;
  color: #999;
  box-shadow: 2px 3px 7px #bbb;
  .title {
    text-align: center;
    font-size: 16px;
    font-family: "微软雅黑";
    font-weight: 300;
    padding: 10px 0;
    padding-top: 10px;
  }
  .pic {
    width: 60px;
    display: block;
    margin: 10px auto;
  }
  .group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
    .item {
      width: 50%;
      display: inline-block;
      text-align: center;
    }
    .seed {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      img {
        width: 15px;
        margin-right: 5px;
        margin-left: -5px;
      }
    }
  }
}
</style>
