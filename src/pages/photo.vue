<template lang="html">
<page title="相册">
  <div style="width: 100%">
    <div class="photo_wrap">
      <div class="photo_item" :style="{height: `${itemRect()}px`}">
        <photo></photo>
      </div>
      <div class="photo_item" :style="{height: `${itemRect()}px`}">
        <photo></photo>
      </div>
    </div>
  </div>
</page>
</template>

<script>
import {clientRect} from '@/common/js/base'
import {path} from '@/api/yanghua'

export default {
  components: {
    photo: ()=> import ('@/components/photo.vue')
  },
  methods: {
    itemRect() {
      let r = clientRect()
      let h = r.h*0.4
      return h
    }

  }
}
</script>

<style lang="less">
.photo_wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  .photo_item {
    position: relative;
    width: 44%;
    height: 230px;
    margin: 8px;
  }
}

</style>
