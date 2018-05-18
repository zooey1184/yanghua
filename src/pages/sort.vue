<template lang="html">
<page title="本周排行" :state="pageState">
  <div class="">
    <list name="toastSlideUp" v-if="pageState=='success'">
      <item title="hello" :sort="3" point="12点"></item>
      <item title="hello" :sort="4" point="12点"></item>

    </list>
  </div>
</page>
</template>

<script>
import history from '@/common/mixins/common'

export default {
  data: ()=> ({
    pageState: 'loading'
  }),
  mixins: [history],
  components: {
    list: ()=> import ('@/components/List/List.vue'),
    item: ()=> import ('@/components/List/item.vue')
  },
  created() {
    setTimeout(()=> {
      this.pageState = 'success'
    }, 500)
  }
}
</script>

<style lang="less">

</style>
