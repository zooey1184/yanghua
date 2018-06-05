<template slot-scope="props">
  <div class="">
    <transition :name="name">
      <div class="list_item_wrap" v-show="showItem" :class="{underline: showUnderLine}" :style="{transitionDelay: animateSec, height: `${height}px` }">
        <div class="sort_left">
          <div class="">
            <div class="sort_img_p" v-if="sort<4">
              <img v-if="sort==1" src="//p8jtbvrrf.bkt.clouddn.com/icon_fir.png" alt="">
              <img v-if="sort==2" src="//p8jtbvrrf.bkt.clouddn.com/icon_sec.png" alt="">
              <img v-if="sort==3" src="//p8jtbvrrf.bkt.clouddn.com/icon_thir.png" alt="">
            </div>
            <p v-else class="sort_img_p">{{sort}}</p>
          </div>
          <div class="header">
            <slot>
              <img style="width: 80%; height: 80%; position: relative; left: 10%; top: 10%" src="//oo6gk8wuu.bkt.clouddn.com/default_head.png" alt="">
            </slot>
          </div>
          <p>{{title}}</p>
        </div>
        <div class="point">
          <p>{{point}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "list-item",
  props: {
    title: [String, Number],
    sort: Number,
    point: [String, Number],
    showUnderLine: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 48
    },
    line: {
      type: String,
      default: 'part'
    },
    lineOffsetLeft: {
      type: Number,
      default: 0
    },
    lineOffsetRight: {
      type: Number,
      default: 0
    }
  },
  data: ()=> ({
    node: null,
    color: "#ff7800",
    pickColor: '#868686',
    currentIndex: null,
    name: "fade",
    showItem: false,
  }),
  computed: {
    getState: function() {
      return this.state
    },
    getUnderLine: function() {
      let show = false
      let node = this.$parent.$children.length
      let i = this.getIndex()
      if(node-1>i) {
        show = true
      }else {
        show = false
      }
      return show
    },
    animateSec: function() {
      let i = this.getIndex()
      let s = `${i/10}s`
      return s
    }
  },
  methods: {
    getAttr() {
      let attr = this.$parent.$attrs
      if(!!attr.color) {
        this.color = attr.color
      }
      if(!!attr.name) {
        this.name = attr.name
      }
      if(!!attr.pickColor) {
        this.pickColor = attr.pickColor
      }
    },
    getNode() {
      this.node = this.$parent.$children.length
    },
    getIndex() {
      let node = this.$parent.$children.length
      let frist = 0
      let current = this._uid
      if(node>0) {
        if(!!this.$attrs.index) {
          current = this.$attrs.index
        }else {
          let uid = this.$parent.$children[0]._uid
          frist = uid
        }
      }
      let index = current-frist
      return index
    },
    // 自执行动画
    showFn() {
      setTimeout(()=> {
        this.showItem = true
      }, 10)
    }
  },
  mounted() {
    this.showFn()
    this.getAttr()
    this.getNode()
    this.getIndex()
    if(this.line=='full') {
      document.styleSheets[0].addRule('.underline:after',`left: ${this.lineOffsetLeft}px !important`);
      document.styleSheets[0].addRule('.underline:after', `right: ${this.lineOffsetRight}px !important`);
    }
  }
}
</script>

<style lang="less">
.list_item_wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  background: #fff;
  padding: 0 12px;
  .sort_img_p {
    width: 30px;
    text-align: center;
    margin-right: 10px;
    img {
      width: 30px;
    }
  }
}
.sort_left {
  display: flex;
  align-items: center;
  .header {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    overflow: hidden;
    margin-right: 15px;
    // background: #ddd;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
/* 下划线 */
.underline {
  position: relative;
}
.underline::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 72px;
  height: 1px;
  right: 12px;
  transform: scaleY(1);
  transform-origin: 0 0;
  background: #ededed
}
</style>
