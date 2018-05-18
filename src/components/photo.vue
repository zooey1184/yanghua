<template lang="html">
  <div class="photo_wrap">
    <div class="photo_contain">
      <bg :day="day"></bg>
    </div>
    <div class="desc">
      <div class="">
        <p>{{title}}</p>
        <p>{{time}}</p>
      </div>
      <button class="save_btn">保存</button>
    </div>

    <img class="modal_close_water" src="//p8jtbvrrf.bkt.clouddn.com/icon_close.png" alt="">
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
  },
  data: ()=> ({
    day_state: 'day'
  })
}
</script>

<style lang="less">
.photo_wrap {
  position: relative;
  width: 66%;
  height: 280px;
  background: #fff;
  color: #333;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  .photo_contain {
    width: 94%;
    margin: 0 auto;
    position: relative;
    height: 220px;
  }
  .desc {
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
}
</style>
