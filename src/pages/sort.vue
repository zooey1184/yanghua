<template lang="html">
<page title="本周排行" :state="pageState">
  <div class="">
    <div style="padding: 10px 0;" v-if="rankList.length>0">
      <list name="toastSlideUp" v-if="pageState=='success'">
        <item :title="item.nickname" :sort="index+1" :point="(`${item.energySize}点`)" v-for="(item, index) in rankList" :key="index">
          <img :src="item.avatar" @click="test" v-if="avatarFn(item.avatar)" alt="">
        </item>
      </list>
    </div>

    <tip-page v-else title="暂无排行记录">
      <!-- <div slot="tip">
        <p>暂无排行记录
          <span @click="lastWeekRank" style="color: blue">查看上周</span>
        </p>
      </div> -->
    </tip-page>
  </div>
</page>
</template>

<script>
import {path} from '@/api/yanghua'

export default {
  data: ()=> ({
    pageState: 'loading',
    rankList: [],
    preImg: '//p8jtbvrrf.bkt.clouddn.com/'
  }),
  components: {
    list: ()=> import ('@/components/List/List.vue'),
    item: ()=> import ('@/components/List/item.vue'),
    tipPage: ()=> import ('@/components/PageWrap/tipPage.vue')
  },
  methods: {
    getData() {
      let self = this
      this.$ajax({
        url: path().currentWeekRank,
        type: 'get',
        success: r=> {
          console.log(r);
          if(r.code===0) {
            self.rankList = r.data
            setTimeout(()=> {
              self.pageState = 'success'
            }, 50)
          }
        }
      })
    },
    lastWeekRank() {
      let self = this
      this.$ajax({
        url: path().lastWeekRank,
        type: 'get',
        success: r=> {
          console.log(r);
          if(r.code===0) {
            self.rankList = r.data
            setTimeout(()=> {
              self.pageState = 'success'
            }, 50)
          }
        }
      })
    },
    test() {
      window.localStorage.setItem('reload', 'true')
      window.history.back()
    },
    avatarFn(img) {
      let a = true
      if(!img.match(/(jpg|jpeg|png|gif)/g)) {
        a = false
      }else {
        a = true
      }
      return a
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="less">

</style>
