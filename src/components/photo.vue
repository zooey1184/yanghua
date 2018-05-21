<template lang="html">
  <div class="photo__wrap">
    <div class="photo_contain">
      <bg :day="day"></bg>
      <div class="slot_plant">
        <slot></slot>
      </div>
    </div>
    <div class="desc">
      <div class="">
        <p>{{title}}</p>
        <p>{{time}}</p>
      </div>
      <button class="save_btn"  v-if="showClose">保存</button>
    </div>
    <img class="modal_close_water" v-if="showClose" @click="closeFn" src="//p8jtbvrrf.bkt.clouddn.com/icon_close.png" alt="">
  </div>
</template>

<script>
export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
  },
  props: {
    day: String,
    title: String,
    level: [String, Number],
    flowerpot: [String, Number],
    time: [String, Number],
    showClose: {
      type: Boolean,
      default: false
    }
  },
  data: ()=> ({
    day_state: 'day'
  }),
  methods: {
    closeFn() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less">
@import url("../init/init.less");
.photo__wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #333;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px #eee;
  display: block;
  margin: 0 auto;
  .photo_contain {
    width: 95%;
    margin: 0 auto;
    position: relative;
    height: 78%;
    .slot_plant {
      position: absolute;
      width: 35%;
      height: 35%;
      left: 35%;
      bottom: 10%;
      background: #ddd
    }
  }
  .desc {
    margin-top: 15px;
    color: #333;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .modal_close_water {
    width: 30px;
    position: absolute;
    right: -10px;
    top: -10px;
  }
  .save_btn {
    width: 50px;
    font-size: 12px;
    color: #fff;
    border-radius: 30px;
    height: 25px;
    .color_linear;
    border: none;
    outline: none;
    margin-right: 3px;
  }
}
</style>
