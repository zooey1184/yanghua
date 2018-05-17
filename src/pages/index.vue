<template lang="html">
<div class="">
  <page>
    <div>
      <!-- <bg :day="day"></bg> -->
      <div class="sun_wrap">
        <!-- <energy :state='false' point="6600" :time="12"></energy> -->
      </div>

      <div class="count_pane">
        666
        <!-- <button class="sort_btn">排行</button> -->
      </div>
    </div>
  </page>
  <modal :showModal="showModal" @modal="showModal=false">
    <div class="modal_wrap">
      <!-- <water-tip title="向日葵"></water-tip> -->
    </div>
  </modal>
  <modal :showModal="showPhoto" @modal="showPhoto=false" background="rgba(255, 255, 255, 0)">
    <div class="modal_wrap">
      <photo></photo>
    </div>
  </modal>
</div>
</template>

<script>
export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
    modal: ()=> import ('@/components/modal.vue'),
    energy: ()=> import ('@/components/energy.vue'),
    waterTip: ()=> import ('@/components/waterTip.vue'),
    photo: ()=> import ('@/components/photo.vue')
  },
  data: ()=> ({
    showModal: false,
    showPhoto: true,
    day: 'day'
  }),
  methods: {
    getDay() {
      let d = new Date()
      let t = d.getHours()
      if(t>5 && t<15) {
        this.day = 'day'
      }else {
        this.day = 'night'
      }
    }
  },
  created() {
    this.getDay()
  }
}
</script>

<style lang="less">
@import url('../init/init.less');
.sun_wrap {
  position: relative;
  left: 80px;
  top: 40px;
  animation: linearUP 2s linear infinite;
}
.modal_wrap {
  position: relative;
  width: 80%;
}
.count_pane {
  position: absolute;
  right: 0;
  top: 60px;
  width: 80px;
  background: #fff;
  border-radius: 30px;
  height: 30px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  font-size: 13px;
  button {
    .color_linear;
    color: #fff;
    border: none;
    border-radius: 20px;
    width: 40px;
    outline: none;
  }
}
</style>
