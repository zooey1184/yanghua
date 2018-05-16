<template lang="html">
<div class="">
  <page>
    <bg></bg>
  </page>
  <!-- <modal-pane></modal-pane> -->
</div>
</template>

<script>
export default {
  components: {
    page: ()=> import ('@/components/PageWrap/PageWrap.vue'),
    bg: ()=> import ('@/components/bgPane.vue'),
  }
}
</script>

<style lang="less">
</style>
