<template lang="html">
<div class="">
  <page bgWrap="#fff" title="养花" :state="pageState">
    <div>
      <bg :day="day">
        <plant :water="needWater" :seed="finished"></plant>
      </bg>
      <div class="sun_wrap">
        <energy :state='false' point="6600" :index='0' :time="12"></energy>
        <energy :state='false' point="6600" :index='1' :time="12"></energy>
        <energy :state='false' point="6600" :index='2' :time="12"></energy>
      </div>

      <div class="count_pane" @click="$router.push('/sort')">
        <p>666</p>
        <button class="sort_btn">排行</button>
      </div>
      <img class="camera" @click="cameraFn" src="//p8jtbvrrf.bkt.clouddn.com/icon_camera.png" alt="">
      <img class="photo" @click="$router.push('/photo')" src="//p8jtbvrrf.bkt.clouddn.com/icon_pic.png" alt="">

      <transition name='rightOffset'>
        <div class="water_grass" @click="waterFn" v-if="action_water=='enter'">
          <img src="//p8jtbvrrf.bkt.clouddn.com/pic_water.png" alt="">
        </div>
      </transition>
    </div>
  </page>

  <modal :showModal="showModal">
    <div class="modal_wrap">
      <water-tip title="向日葵" @iclose="showModal=false"></water-tip>
    </div>
  </modal>
  <modal :showModal="showPhoto" name="toastSlideUp" background="rgba(255, 255, 255, 0.3)">
    <div class="modal_wrap" style="width: 55%; height:46%">
      <photo day="day" :showClose="true" :time="photo.time" @close="showPhoto=false" :title="photo.title"></photo>
    </div>
  </modal>
</div>
</template>

<script>
import {timeFormate, preload} from '@/common/js/base'
import {path} from '@/api/yanghua'

export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
    modal: ()=> import ('@/components/modal.vue'),
    energy: ()=> import ('@/components/energy.vue'),
    waterTip: ()=> import ('@/components/waterTip.vue'),
    photo: ()=> import ('@/components/photo.vue'),
    plant: ()=> import ('@/components/plant.vue')
  },
  data: ()=> ({
    showModal: false,
    showPhoto: false,
    day: 'day',
    pageState: 'loading',
    photo: {
      time: '',
      title: '仙人掌'
    },
    action: 'fade',
    action_water: 'none',
    needWater: false,
    finished: false,
    pageData: null
  }),
  methods: {
    // 获取昼夜
    getDay() {
      let d = new Date()
      let t = d.getHours()
      if(t>5 && t<18) {
        this.day = 'day'
      }else {
        this.day = 'night'
      }
    },
    // 显示照相
    cameraFn() {
      this.showPhoto = true
      let t = timeFormate().formate()
      this.photo.time = t
      this.photo.title = timeFormate().week()
    },
    // 创建用户
    userUpdate() {
      let data = {
        userId: 'huangpu',
        nickname: 'huangpu',
        avatar: '//p8jtbvrrf.bkt.clouddn.com/icon_pic.png'
      }
      let self = this
      this.$ajax({
        url: path(data).update,
        success: r=> {
          if(r.code===0) {
            self.pageState = 'success'
            self.plant_detail()
          }else {
            self.pageState = 'error'
            self.$toast.show(r.message)
          }
        }
      })
    },
    // 植物详情
    plant_detail() {
      let data = {
        uid: 'huangpu'
      }
      let self = this
      this.$ajax({
        url: path(data).detail,
        type: 'get',
        success: r=> {
          if(r.code===0) {
            self.pageData = r.data
            if(r.data.needWater===0) {
              self.needWater = false
            }else {
              self.needWater = true
            }
            if(r.data.finished===0) {
              self.finished = false
            }else {
              self.finished = true
            }
          }
        }
      })
    },
    // 浇水
    waterFn() {
      let self = this
      let data = {
        uid: self.pageData.uid,
        userPlantId: self.pageData.userPlantId
      }
      this.$ajax({
        url: path(data).watering,
        data: data,
        success: r=> {
          if(r.code===0) {
            self.showModal = true
          }else {
            self.$toast.show(r.userMessage || '还不能浇水哦')
          }
        }
      })
    }
  },
  created() {
    this.getDay()
    this.userUpdate()
    setTimeout(()=> {
      this.action_water = 'enter'
    }, 800)
  }
}
</script>

<style lang="less">
@import url('../init/init.less');
.sun_wrap {
  position: relative;
  width: 80%;
  top: 20px;
  left: 20%;
  display: flex;
}
.modal_wrap {
  position: relative;
  width: 80%;
}
.count_pane {
  position: absolute;
  right: 0;
  top: 60px;
  width: 80px;
  background: #fff;
  border-radius: 30px;
  height: 30px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 13px;
  button {
    .color_linear;
    color: #fff;
    border: none;
    border-radius: 20px;
    width: 40px;
    outline: none;
    padding: 5px;
  }
}
.camera {
  position: absolute;
  width: 40px;
  right: 10px;
  top: 100px;
}
.photo {
  position: absolute;
  width: 42px;
  right: 10px;
  top: 140px;
}

.plant_panes {
  // position: absolute;
  // left: 35%;
  // bottom: 10%;
  // width: 120px;
  // height: 180px;
}
.water_grass {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s ease-out;
  img {
    width: 60%;
    display: block;
    margin: 0 auto;
  }
  &:active {
    opacity: .8
  }
}
.to_plant {
  transform: scale(0);
  opacity: 0
}
.from_right {
  right: 20px;
}
</style>
