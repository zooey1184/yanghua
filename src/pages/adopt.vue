<template lang="html">
<div class="">
  <page title="领养">
    <div>
      <bg></bg>
      <div class="seed_pane">
        <img @click.prevent="imgFn" src="//p8jtbvrrf.bkt.clouddn.com/icon_zhongzi.png" alt="">
        <p>{{count_seed}}</p>
      </div>

      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in plantList" :key="index">
            <seed :title="item.name" :needSeed="item.needSeed>0?`${item.needSeed}`:'免费'" :acquiredSeed="item.acquiredSeed"  @click.native="choose_plantFn(item.id)"></seed>
          </div>
        </div>
      </div>
      <div class="next_pane">
        <img src="//p8jtbvrrf.bkt.clouddn.com/icon_next.png" class="rotate_arrow" @click.prevent="preFn" v-if="plant_active>0" alt="">
        <img src="//p8jtbvrrf.bkt.clouddn.com/icon_next.png" @click.prevent="nextFn" v-if="plant_active<plantList.length-1" alt="">
      </div>
      <div class="flower_wrap">
        <img @click.prevent="imgFn" :src="img" alt="">
        <!-- <img v-if="currentName=='向日葵'" src="" alt="">
        <img v-if="currentName=='仙人掌'" src="//p8jtbvrrf.bkt.clouddn.com/7172CE35D5D38898A5CC5B21B1EF498B.gif" alt=""> -->
        <!-- <div class="click_change" @click="showFlowerPot">
          <p>点击更换花瓶</p>
        </div> -->
      </div>

      <button class="submit_btn" @click="submit_Fn">领养</button>
    </div>
  </page>
  <modal :showModal="showModal" name="slideHalf" @modal="showModal=false">
    <div class="flowerpot_modal" >
      <div v-for="(item, index) in flowerpot_list" :key="index" class="pot_wrap" @click="choose_potFn(item.id)">
        <img :src="(`${preImg}/${item.icon}`)" alt="">
      </div>
    </div>
  </modal>
</div>
</template>

<script>
import {path} from '@/api/yanghua'
import {clientRect} from '@/common/js/base'

export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
    modal: ()=> import ('@/components/modal.vue'),
    seed: ()=> import ('@/components/adoptSeed.vue')
  },
  data: ()=> ({
    preImg: '//p8jtbvrrf.bkt.clouddn.com',
    showModal: false,
    count_seed: 20,
    plantList: [],
    plant_active: 0,
    currentName: '',
    plantId: null,
    flowerpot_list: [],
    flowerpot_active: 0,
    flowerpotId: null,
    mySwiper: null,
    showPlant: true,
    img: ''
  }),
  methods: {
    swiper() {
      let self = this
      let mySwiper = new Swiper('.swiper-container', {
        on:{
          slideChangeTransitionEnd: function() {
            self.plant_active = this.snapIndex
            self.currentName = self.plantList[this.snapIndex].name
            self.img = `//p8jtbvrrf.bkt.clouddn.com/${self.plantList[this.snapIndex].primaryImage}`
          }
        }
      })
      this.mySwiper = mySwiper
    },
    nextFn() {
      let n = this.mySwiper
      n.slideNext()
    },
    preFn() {
      let n = this.mySwiper
      n.slidePrev()
    },
    showFlowerPot() {
      this.showModal = true
    },
    choose_potFn(id) {
      console.log(id);
      this.flowerpotId = id
    },
    choose_plantFn(id) {
      console.log(id);
      this.showPlant = false
      this.plantId = id
    },
    plant_listFn() {
      let self = this
      this.$ajax({
        url: path().plant_list,
        type: 'get',
        success: r=> {
          console.log(r);
          if(r.code===0) {
            self.plantList = r.data
            setTimeout(()=> {
              this.swiper()
            }, 50)
            self.currentName = r.data[0].name
            self.img = `//p8jtbvrrf.bkt.clouddn.com/${r.data[0].primaryImage}`
            self.plantId = r.data[0].id
          }
        }
      })
    },
    seed_listFn() {
      let self = this
      let data = {
        uid: window.localStorage.getItem('uid')
      }
      this.$ajax({
        url: path(data).seed,
        type: 'get',
        success: r=> {
          console.log(r);
          if(r.code===0) {
            self.count_seed  = r.data
          }
        }
      })
    },
    imgFn() {
      console.log('点击到图片了');
    },
    submit_Fn() {
      let self = this
      let data = {
        uid: window.localStorage.getItem('uid'),
        plantId: this.plantId
      }
      this.$ajax({
        url: path(data).adopt,
        success: r=> {
          console.log(r);
          if(r.code===0) {
            self.$toast.show({
              position: 'middle',
              type: 'success',
              message: '领养成功'
            })
            setTimeout(()=> {
              window.localStorage.setItem('reload', 'true')
              self.$router.push('/index')
            }, 1000)

          }else if(r.code===10) {
            self.$toast.show(r.userMessage)
            window.localStorage.setItem('reload', 'true')
            setTimeout(()=> {
              self.$router.push('/index')
            }, 1500)
          }else {
            self.$toast.show(r.userMessage)
          }
        }
      })
    }
  },
  mounted() {

    this.plant_listFn()
    this.seed_listFn()
  }
}
</script>

<style scoped lang="less">
@import url('../init/init.less');
.seed_pane {
  position: relative;
  left: 12px;
  top: 30px;
  width: 70px;
  font-size: 13px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  height: 25px;
  background: #fff;
  img {
    width:25px;
    margin-right: 15px;
  }
}
.submit_btn {
  position: absolute;
  right: 20px;
  bottom: 30px;
  width: 80px;
  height: 35px;
  .color_linear;
  color: #fff;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 30px;
  z-index: 20
}
// swiper
.swiper-container {
  margin-top: 100px;
}
.next_pane {
  position: relative;
  width: 80px;
  height: 32px;
  border-radius: 30px;
  display: block;
  margin: 0 auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  box-shadow: 1px 4px 4px #ddd;
  z-index: 20;
  &:active {
    opacity: 0.8;
  }
  img {
    width: 20px;
    text-align: center;
  }
  .rotate_arrow {
    transform: rotate(180deg);
  }
}
// flower
.flower_wrap {
  position: absolute;
  left: 57%;
  transform: translateX(-50%);
  width: 70%;
  bottom: 5%;
  img {
    width: 100%;
  }
  .click_change {
    position: absolute;
    bottom: 23%;
    font-size: 13px;
    width: 100%;
    text-align: center;
    color: #fff;
  }
}

// modal
.flowerpot_modal {
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: 0;
  overflow-x: auto;
  overflow-y: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  .pot_wrap {
    position: relative;
    padding: 5px 10px;
    &:active {
      background: #efefef
    }
  }
  img {
    width: 50px;
  }
}

</style>
