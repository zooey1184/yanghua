<template>
  <div id="app">
    <transition :name="(`router-${page_dir}`)">
      <keep-alive>
        <router-view ref="view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'
import history from '@/common/mixins/history'

export default {
  name: 'App',
  computed: {
    // ...mapGetters([
    //   'get_pageAction'
    // ])
  },
  data: ()=> ({
    page_dir: 'fade'
  }),
  methods: {
    // ...mapActions([
    //   'set_pageAction'
    // ])
  },
  watch: {
    '$route': function(to, from) {
      let self = this
      if(to.path=='/index') {
        document.title = '养花'
      }
      let s = window.sessionStorage
      let r = (s.route && (typeof(JSON.parse(s.route))=='object') && JSON.parse(s.route).length>0)?JSON.parse(s.route):[]
      if( from.path=='/' && (!to.path || to.path=='/') ) {
        // 初始进入首页'/'的情况  一般走不到这一步
        r = ["/"]
      }else if(from.path=='/' && to.path!='/') {
        // 初始从'/'到其他路由
        if(r.length==0) {
          r = ["/"]
        }
      }else {
        let len = r.length
        if(len>0) {
          if(r[len-1]==to.path) {
            // back
            r.pop()
            // self.set_pageAction('backward')
            self.page_dir = 'backward'
          }else {
            // go
            r.push(from.path)
            // self.set_pageAction('forward')
            self.page_dir = 'forward'
          }
        }else {
          r = []
          self.page_dir = 'forward'
          console.log('can not back');
        }
      }
      window.sessionStorage.setItem('route', JSON.stringify(r))
      if(to.path=='/index') {
        setTimeout(()=> {
          if(window.reload) {
            window.reload()
          }else {
            window.location.reload()
          }
        }, 700)
      }else {
        let c = to.name
        if(c=='photo') {
          setTimeout(()=> {
            if(window.photo) {
              window.photo()
            }else {
              window.location.reload()
            }
          }, 700)
        }

      }
    }
  }
}
</script>

<style lang='less'>
@import url("./common/css/reset.less");
@import url("./common/css/animate.less");
@import url("./common/css/animation.less");
@import url("./common/css/page.less");
* {
  margin: 0;
  padding: 0;
}

</style>
