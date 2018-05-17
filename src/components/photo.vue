<template lang="html">
  <div class="photo_wrap">
    <div class="photo_contain">
      <bg></bg>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
  },
  props: {
    day: String,
  }
}
</script>

<style lang="less">
.photo_wrap {
  position: relative;
  width: 66%;
  height: 280px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  .photo_contain {
    width: 90%;
    left: 5%;
    position: absolute;
    height: 200px;
  }
}
</style>
