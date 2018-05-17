<template lang="html">
<div class="">
  <page>
    <div>
      <bg></bg>
      <div class="sun_wrap">
        <!-- <energy :state='false' point="6600" :time="12"></energy> -->
      </div>

    </div>
  </page>
  <modal :showModal="showModal">
    <div class="">
      hello
    </div>
  </modal>
</div>
</template>

<script>
export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
    modal: ()=> import ('@/components/modal.vue'),
    energy: ()=> import ('@/components/energy.vue')
  },
  data: ()=> ({
    showModal: false
  })
}
</script>

<style lang="less">
.sun_wrap {
  position: relative;
  left: 80px;
  top: 40px;
  animation: linearUP 2s linear infinite;
}
</style>
