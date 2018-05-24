<template lang="html">
<div class="">
  <page bgWrap="#ddd" title="养花" :state="pageState">
    <div>
      <bg :day="day" v-if="pageData">
        <plant
          :water="needWater"
          :seed="finished"
          @seed="seedFn"
          @water="waterTipFn"
          :plantId="pageData.plantId"
          :growStage="pageData.growStage">
          <img slot="flower" @click.prevent="touchImg" :src="(`${preImg}/${img}`)" alt="">
        </plant>
        <!-- <plant :water="true" :seed="false" @water="waterTipFn"></plant> -->
      </bg>
      <div class="sun_wrap" v-if="pageData">
        <energy :state='item.isAcquire!=0' :point="item.size" :energyId="item.id" :userPlantId="item.userPlantId" :index='index' v-for="(item, index) in pageData.energyList" :key="index"></energy>
        <!-- <energy ></energy> -->
      </div>

      <div class="count_pane" @click="$router.push('/sort')" v-if="pageData">
        <p>{{pageData.totalEnergy}}</p>
        <button class="sort_btn">排行</button>
      </div>
      <img class="camera" @click.prevent="cameraFn" src="//p8jtbvrrf.bkt.clouddn.com/icon_camera.png" alt="">
      <img class="photo" @click.prevent="$router.push('/photo')" src="//p8jtbvrrf.bkt.clouddn.com/icon_pic.png" alt="">

      <transition name='rightOffset'>
        <div class="water_grass" v-if="action_water=='enter'">
          <div class="water_glass">
            <img @click.prevent="waterFn" src="//p8jtbvrrf.bkt.clouddn.com/pic_water.png" alt="">
          </div>

        </div>
      </transition>
    </div>
  </page>

  <modal :showModal="showModal">
    <div class="water_modal">
      <water-tip :title="currentName" :desc="water_desc" :barData="barData" @iclose="waterClose"></water-tip>
    </div>
  </modal>
  <modal :showModal="showPhoto" name="toastSlideUp" background="rgba(255, 255, 255, 0.3)">
    <div class="modal_wrap" style="width: 55%; height:46%">
      <photo v-if="pageData" :day="day" :showClose="true" :time="photo.time" @save="savePhoto" @close="showPhoto=false" :title="photo.title">
        <img @click.prevent="imgFn" :src="(`${preImg}/${pageData.plantImage}`)" alt="">
      </photo>
    </div>
  </modal>

  <modal :showModal="showAward" background="rgba(255, 255, 255, 0.3)">
    <div class="modal_wrap award_modal" style="width: 80%;">
      <award :sort="1" @callback="showAward=false" @confirm="showAward=false"></award>
    </div>
  </modal>
</div>
</template>

<script>
import {timeFormate, preload, getUrlData} from '@/common/js/base'
import {path} from '@/api/yanghua'

export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
    modal: ()=> import ('@/components/modal.vue'),
    energy: ()=> import ('@/components/energy.vue'),
    waterTip: ()=> import ('@/components/waterTip.vue'),
    photo: ()=> import ('@/components/photo.vue'),
    plant: ()=> import ('@/components/plant.vue'),
    award: ()=> import ('@/components/award.vue'),
  },
  data: ()=> ({
    showModal: false,
    showPhoto: false,
    showAward: false,
    preImg: '//p8jtbvrrf.bkt.clouddn.com',
    img: '',
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
    pageData: null,
    energy: null,
    currentName: '',
    barData: [],
    water_desc: null
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
      console.log(this.$route.query);
      let r = this.$route.query
      if(r.uid || r.zooey=='z') {
        window.localStorage.setItem('uid', r.uid)
        let data = {
          uid: r.uid,
          nickname: r.nickname,
          avatar: r.avatar
        }
        if(r.zooey=='z') {
          data = {
            uid: "huangpu",
            nickname: "huangpu",
            avatar: "//oo6gk8wuu.bkt.clouddn.com/normal.png"
          }
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
      }else {
        this.$toast.show('链接不正确哦')
      }
    },
    // 植物详情
    plant_detail() {
      let r = this.$route.query
      let data = {
        uid: r.uid || window.localStorage.getItem('uid')
      }
      let self = this
      this.$ajax({
        url: path(data).detail,
        type: 'get',
        success: r=> {
          if(r.code===0) {
            if(r.data) {
              self.pageData = r.data
              // window.localStorage.setItem('uid', r.data.uid)
              window.localStorage.setItem('userPlantId', r.data.userPlantId)

              self.idChangePlant(r.data.plantId)
              if(r.data.needWater===0) {
                self.needWater = false
                self.img = r.data.plantImage
              }else {
                self.needWater = true
                self.img = r.data.plantCryImage
              }
              if(r.data.finished===0) {
                self.finished = false
              }else {
                self.finished = true
              }
            }else {
              self.$router.push('/adopt')
            }
          }else {
            self.$toast.show(r.userMessage || "请求出错啦")
          }
        }
      })
    },
    waterTipFn() {
      let self = this
      self.$toast.show({
        message: '主人我需要喝水啦',
        position: 'middle'
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
        success: r=> {
          if(r.code===0) {
            self.plant_detail()
            self.$toast.show({
              position: 'middle',
              type: 'success',
              message: '灌溉成功！'
            })
            let v = r.data.currentTimes/r.data.totalTimes*100
            self.water_desc = r.data.totalTimes-r.data.currentTimes

            self.barData = [{
              bg: '#f72f53',
              value: v,
              total: r.data.totalEnergy,
              part: r.data.currentEnergy
            }]

            setTimeout(()=> {
              self.showModal = true
            }, 20)
            // self.plant_detail()
          }else {
            self.$toast.show(r.userMessage || '还不能浇水哦')
          }
        }
      })
      console.log(data);
    },
    waterClose() {
      this.showModal=false
      // this.plant_detail()
    },
    imgFn() {
      console.log('点击到图片了');
    },
    touchImg() {
      console.log('hello');
      if(!this.needWater) {
        this.img = this.pageData.plantTouchImage
        setTimeout(()=> {
          this.img = this.pageData.plantImage
        }, 1500)
      }
    },
    idChangePlant(id) {
      if(id===10) {
        this.currentName = '仙人掌'
      }
      if(id===11) {
        this.currentName = '向日葵'
      }
    },
    seedFn() {
      let self = this
      let data = {
        uid: this.pageData.uid,
        userPlantId: this.pageData.userPlantId
      }
      this.$ajax({
        url: path(data).harvest_seed,
        success: r=> {
          if(r.code===0) {
            self.$toast.show({
              position: 'middle',
              type: 'success',
              message: '收获成功！'
            })
            self.plant_detail()
          }else {
            self.$toast.show(r.userMessage)
          }
        }
      })
    },
    savePhoto() {
      let self = this
      this.showPhoto = false
      let data = {
        uid: window.localStorage.getItem('uid')
      }
      this.$ajax({
        url: path(data).album_picture,
        success: r=> {
          if(r.code===0) {
            self.$toast.show({
              message: '已保存',
              type: 'success',
              position: 'middle'
            })
          }else {
            self.$toast.show(r.userMessage || '请稍后保存')
          }
        }
      })
    },
    showDialog() {
      let self = this
      let data = {
        uid: window.localStorage.getItem('uid')
      }
      this.$ajax({
        url: path(data).showDialog,
        type: 'get',
        success: r=> {
          if(r.code===0) {
            if(r.data>0) {
              setTimeout(()=> {
                self.showAward = true
              }, 600)
            }else {
              self.showAward = false
            }
          }
        }
      })
    }
  },
  created() {
    let self = this
    let r = this.$route.query
    if(r.uid) {
      window.localStorage.setItem('uid', r.uid)
    }

    this.getDay()
    this.userUpdate()
    this.showDialog()
    setTimeout(()=> {
      this.action_water = 'enter'
    }, 800)
    window.reload = function() {
      self.plant_detail()
    }
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
  z-index: 15;
}
.modal_wrap {
  position: relative;
  width: 80%;
  background: #fff;
}
.water_modal {
  position: relative;
  width: 80%;
  // background: #fff;
}
.award_modal {
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
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
  z-index: 15;
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
  z-index: 15;
}
.photo {
  position: absolute;
  width: 42px;
  right: 10px;
  top: 140px;
  z-index: 15;
}

.plant_panes {
  // position: absolute;
  // left: 35%;
  // bottom: 10%;
  // width: 120px;
  // height: 180px;
}
.home_plant {
  // width: 200px;
}
.water_grass {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s ease-out;
  z-index: 20;
  .water_glass {
    width: 50px;
    height: 50px;
    background: #9cd5ff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
