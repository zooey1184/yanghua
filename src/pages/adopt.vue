<template lang="html">
<div class="">
  <page title="领养">
    <div>
      <bg></bg>
      <!-- seed -->
      <div class="seed_pane">
        <img src="//p8jtbvrrf.bkt.clouddn.com/icon_zhongzi.png" alt="">
        <p>{{count_seed}}</p>
      </div>

      <div class="swiper_container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <seed title="仙人掌"></seed>
          </div>
        </div>
      </div>

      <div class="flower_wrap">
        <img src="//p8jtbvrrf.bkt.clouddn.com/xrk_l_a.gif" alt="">
        <div class="click_change" @click="showFlowerPot">
          <p>点击更换花瓶</p>
        </div>
      </div>
    </div>
  </page>
  <modal :showModal="showModal" name="slide" @close="showModal=false" @modal="showModal=false">
    <div class="flowerpot_modal">
      hello
    </div>
  </modal>
</div>
</template>

<script>
import {path} from '@/api/yanghua'

export default {
  components: {
    bg: ()=> import ('@/components/bgPane.vue'),
    modal: ()=> import ('@/components/modal.vue'),
    seed: ()=> import ('@/components/adoptSeed.vue')
  },
  data: ()=> ({
    showModal: false,
    count_seed: 20
  }),
  methods: {
    swiper() {
      let self = this
      let mySwiper = new Swiper('.swiper_container', {
        // width: clientRect().w,
      })
    },
    showFlowerPot() {
      this.showModal = true
    }
  },
  mounted() {
    setTimeout(()=> {
      this.swiper()
    }, 50)
    let data = {a: "aa", b: "bb", d: "www", c: 'cc'}
    console.log(path(data).adopt);
  }
}
</script>

<style scoped lang="less">
.seed_pane {
  position: absolute;
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
// swiper
.swiper_container {
  margin-top: 100px;
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
