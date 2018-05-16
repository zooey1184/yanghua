<template lang="html">
<page title="本周排行">
  <div class="">
    <list name="toastSlideUp">
      <item title="hello" :sort="3" point="12点"></item>
      <item title="hello" :sort="4" point="12点"></item>

    </list>
  </div>
</page>
</template>

<script>
export default {
  components: {
    list: ()=> import ('@/components/List/List.vue'),
    item: ()=> import ('@/components/List/item.vue')
  }
}
</script>

<style lang="less">

</style>
