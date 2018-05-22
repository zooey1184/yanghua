<template lang="html">
<page title="相册" bgWrap="#d7b48e">
  <div style="width: 100%">
    <div class="photo_wrap">
      <div class="photo_item" :style="{height: `${itemRect()}px`}" v-for="(item, index) in photoList" :key="index">
        <photo :title="cameraFn(item.createAt).week" :time="cameraFn(item.createAt).day">
          <img :src="(`${preImg}/${item.plantImage}`)" alt="">
        </photo>
      </div>
    </div>
  </div>
</page>
</template>

<script>
import {clientRect, timeFormate} from '@/common/js/base'
import {path} from '@/api/yanghua'

export default {
  components: {
    photo: ()=> import ('@/components/photo.vue')
  },
  data: ()=> ({
    photoList: [],
    preImg: '//p8jtbvrrf.bkt.clouddn.com'
  }),
  methods: {
    itemRect() {
      let r = clientRect()
      let h = r.h*0.4
      return h
    },
    getData() {
      let self = this
      let data = {
        uid: window.localStorage.getItem('uid')
      }
      this.$ajax({
        url: path(data).album_list,
        type: 'get',
        success: r=> {
          if(r.code===0) {
            console.log(r);
            self.photoList = r.data
          }
        }
      })
    },
    cameraFn(t) {
      let f = timeFormate(t)
      let d = f.formate()
      let w = f.week()
      return {
        day: d,
        week: w
      }
    },
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="less">
.photo_wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  .photo_item {
    position: relative;
    width: 44%;
    height: 230px;
    margin: 8px;
  }
}

</style>
