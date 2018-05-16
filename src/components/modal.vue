<template>
  <div class="">
    <transition name="fade">
      <div class="modal_full_page" v-if="showModal" @click="colseF($event)" :style="{background: background}"></div>
    </transition>
    <transition :name="name">
      <div class="contain_bg_wrap" v-if="showModal" @click.stop="toggleFn($event)">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    animationName: 'bounce',
    showModalData: true,
  }),
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: 'bounce'
    },
    background: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)"
    }
  },
  methods: {
    colseF() {
      this.$emit('close')
    },
    toggleFn($event){
      if (!$event.target.classList.contains('contain_bg_wrap')) {
        return;
      }
      this.$emit('modal')
    }
  },
}
</script>

<style scoped lang='less'>
@color-t: transparent;
.full_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: @color-t
}
/*@import url("../animation/common.css");*/
.modal_full_page {
  .full_bg;
  z-index: 98
}
.contain_bg_wrap {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  .full_bg;
}
/*淡入淡出*/
.fade-enter-active, .fade-leave-active {
  transition: all .35s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/*bounce*/
.bounce-enter-active, .bounce-leave-active {
  transition: all 0.3s ease;
}
.bounce-enter, .bounce-leave-to {
  transform: scale(1.5);
  opacity: 0;
}
</style>
