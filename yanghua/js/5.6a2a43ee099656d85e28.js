webpackJsonp([5],{IHrE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3nZU"),o=(n("vR+E"),{components:{bg:function(){return n.e(8).then(n.bind(null,"FwV9"))},modal:function(){return n.e(9).then(n.bind(null,"Ol9X"))},seed:function(){return n.e(16).then(n.bind(null,"984f"))}},data:function(){return{preImg:"//p8jtbvrrf.bkt.clouddn.com",showModal:!1,count_seed:20,plantList:[],plant_active:0,currentName:"",plantId:null,flowerpot_list:[],flowerpot_active:0,flowerpotId:null,mySwiper:null,showPlant:!0,img:""}},methods:{swiper:function(){var t=this,e=new Swiper(".swiper-container",{on:{slideChangeTransitionEnd:function(){t.plant_active=this.snapIndex,t.currentName=t.plantList[this.snapIndex].name,t.img="//p8jtbvrrf.bkt.clouddn.com/"+t.plantList[this.snapIndex].primaryImage}}});this.mySwiper=e},nextFn:function(){this.mySwiper.slideNext()},preFn:function(){this.mySwiper.slidePrev()},showFlowerPot:function(){this.showModal=!0},choose_potFn:function(t){console.log(t),this.flowerpotId=t},choose_plantFn:function(t){console.log(t),this.showPlant=!1,this.plantId=t},plant_listFn:function(){var t=this,e=this;this.$ajax({url:Object(i.a)().plant_list,type:"get",success:function(n){console.log(n),0===n.code&&(e.plantList=n.data,setTimeout(function(){t.swiper()},50),e.currentName=n.data[0].name,e.img="//p8jtbvrrf.bkt.clouddn.com/"+n.data[0].primaryImage,e.plantId=n.data[0].id)}})},seed_listFn:function(){var t=this,e={uid:window.localStorage.getItem("uid")};this.$ajax({url:Object(i.a)(e).seed,type:"get",success:function(e){console.log(e),0===e.code&&(t.count_seed=e.data)}})},imgFn:function(){console.log("点击到图片了")},submit_Fn:function(){var t=this,e={uid:window.localStorage.getItem("uid"),plantId:this.plantId};this.$ajax({url:Object(i.a)(e).adopt,success:function(e){console.log(e),0===e.code?(t.$toast.show({position:"middle",type:"success",message:"领养成功"}),setTimeout(function(){window.localStorage.setItem("reload","true"),t.$router.push("/index")},1e3)):10===e.code?(t.$toast.show(e.userMessage),window.localStorage.setItem("reload","true"),setTimeout(function(){t.$router.push("/index")},1500)):t.$toast.show(e.userMessage)}})}},mounted:function(){this.plant_listFn(),this.seed_listFn()}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("page",{attrs:{title:"领养"}},[n("div",[n("bg"),t._v(" "),n("div",{staticClass:"seed_pane"},[n("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_zhongzi.png",alt:""},on:{click:function(e){return e.preventDefault(),t.imgFn(e)}}}),t._v(" "),n("p",[t._v(t._s(t.count_seed))])]),t._v(" "),n("div",{ref:"swiper",staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.plantList,function(e,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("seed",{attrs:{title:e.name,needSeed:e.needSeed>0?""+e.needSeed:"免费",acquiredSeed:e.acquiredSeed},nativeOn:{click:function(n){t.choose_plantFn(e.id)}}})],1)}))]),t._v(" "),n("div",{staticClass:"next_pane"},[t.plant_active>0?n("img",{staticClass:"rotate_arrow",attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_next.png",alt:""},on:{click:function(e){return e.preventDefault(),t.preFn(e)}}}):t._e(),t._v(" "),t.plant_active<t.plantList.length-1?n("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_next.png",alt:""},on:{click:function(e){return e.preventDefault(),t.nextFn(e)}}}):t._e()]),t._v(" "),n("div",{staticClass:"flower_wrap"},[n("img",{attrs:{src:t.img,alt:""},on:{click:function(e){return e.preventDefault(),t.imgFn(e)}}})]),t._v(" "),n("button",{staticClass:"submit_btn",on:{click:t.submit_Fn}},[t._v("领养")])],1)]),t._v(" "),n("modal",{attrs:{showModal:t.showModal,name:"slideHalf"},on:{modal:function(e){t.showModal=!1}}},[n("div",{staticClass:"flowerpot_modal"},t._l(t.flowerpot_list,function(e,i){return n("div",{key:i,staticClass:"pot_wrap",on:{click:function(n){t.choose_potFn(e.id)}}},[n("img",{attrs:{src:t.preImg+"/"+e.icon,alt:""}})])}))])],1)},staticRenderFns:[]};var a=n("Z0/y")(o,s,!1,function(t){n("YkP0")},"data-v-023475a5",null);e.default=a.exports},YkP0:function(t,e){}});