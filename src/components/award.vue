<template lang="html">
  <div class="">
    <div class="header_title">
      <img v-if="sort==1" src="//p8jtbvrrf.bkt.clouddn.com/icon_fir.png" alt="">
      <img v-if="sort==2" src="//p8jtbvrrf.bkt.clouddn.com/icon_sec.png" alt="">
      <img v-if="sort>=3" src="//p8jtbvrrf.bkt.clouddn.com/icon_thir.png" alt="">

    </div>
    <p class="title">第{{sort}}名</p>
    <div class="desc" v-if="sort<4">
      <p>恭喜您上周好友排名获得第{{sort}}名，请提交联系方式并保持电话畅通，将会有神秘礼品赠送</p>
      <input type="text" v-model="name" placeholder="姓名">
      <input type="text" v-model="phone" placeholder="联系电话">
      <button class="btn" @click="submitFn">提交</button>
    </div>
    <div class="desc" v-else>
      <p>恭喜您上周好友排名获得第{{sort}}名，请继续努力</p>
      <button class="btn" @click="confn">提交</button>
    </div>
  </div>
</template>

<script>
import {path } from '@/api/yanghua'

export default {
  data: ()=> ({
    phone: '',
    name: ''
  }),
  props: {
    sort: [String, Number]
  },
  methods: {
    submitFn() {
      let self = this
      let data = {
        uid: window.localStorage.getItem('uid'),
        name: this.name,
        phone: this.phone
      }
      if(this.phone.match(/^1\d{10}$/g)) {
        if(this.name!="") {
          this.$ajax({
            url: path(data).address_add,
            success: r=> {
              if(r.code===0) {
                self.$emit('callback')
                self.$toast.show({
                  msg: '提交成功！',
                  position: 'middle',
                  type: success
                })
              }else {
                self.$toast.show(r.userMessage)
              }
            }
          })
        }else {
          this.$toast.show("姓名不能为空哦")
        }
      }else {
        self.$toast.show('电话号码不正确')
      }
    },
    confn() {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="less">
.color_linear {
  background: -webkit-linear-gradient(left, #f72f53, #ff7458);
  background: -o-linear-gradient(right, #f72f53, #ff7458);
  background: -moz-linear-gradient(right, #f72f53, #ff7458);
  background: linear-gradient(to right, #f72f53, #ff7458);
  &:active {
    opacity: 0.8
  }
}
.header_title {
  img {
    display: block;
    width: 50px;
    margin: 0 auto;
  }

}
.title {
  color: #333;
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
}
.desc {
  padding-top: 10px;
  p {
    color: #999;
    font-size: 14px;
    line-height: 18px;
  }
  input {
    display: block;
    margin: 10px auto;
    outline: none;
    border: none;
    width: 100%;
    height: 30px;
    background: #eaeaea;
    border-radius: 3px;
    padding: 0 10px;
    box-sizing: border-box;

  }
  .btn {
    .color_linear;
    width: 60px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    border-radius: 30px;
    border: none;
    outline: none;
    display: block;
    margin: 5px auto;
    margin-top: 10px;
    color: #fff;
  }
}
</style>
