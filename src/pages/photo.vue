<template lang="html">
<page title="相册">
  <div class="">
    hello
  </div>
</page>
</template>

<script>
import history from '@/common/mixins/common'

export default {
  mixins: [history],
  data: ()=> ({
    action: 'backward'
  }),

}
</script>

<style lang="less">
</style>
