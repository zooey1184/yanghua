webpackJsonp([4],{"2NXm":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("vR+E"),s=e("3nZU"),o={components:{bg:function(){return e.e(8).then(e.bind(null,"FwV9"))},modal:function(){return e.e(9).then(e.bind(null,"Ol9X"))},energy:function(){return e.e(13).then(e.bind(null,"3Bmr"))},waterTip:function(){return e.e(11).then(e.bind(null,"MY4a"))},photo:function(){return e.e(10).then(e.bind(null,"oKJk"))},plant:function(){return e.e(12).then(e.bind(null,"P1NO"))},award:function(){return e.e(15).then(e.bind(null,"fewE"))}},data:function(){return{showModal:!1,showPhoto:!1,showAward:!1,preImg:"//p8jtbvrrf.bkt.clouddn.com",day:"day",pageState:"loading",photo:{time:"",title:"仙人掌"},action:"fade",action_water:"none",needWater:!1,finished:!1,pageData:null,energy:null,currentName:"",barData:[],water_desc:null}},methods:{getDay:function(){var t=(new Date).getHours();this.day=t>5&&t<18?"day":"night"},cameraFn:function(){this.showPhoto=!0;var t=Object(n.b)().formate();this.photo.time=t,this.photo.title=Object(n.b)().week()},userUpdate:function(){console.log(this.$route.query);var t=this.$route.query;if(t.uid||"z"==t.zooey){window.localStorage.setItem("uid",t.uid);var a={uid:t.uid,nickname:t.nickname,avatar:t.avatar};"z"==t.zooey&&(a={uid:"huangpu",nickname:"huangpu",avatar:"//oo6gk8wuu.bkt.clouddn.com/normal.png"});var e=this;this.$ajax({url:Object(s.a)(a).update,success:function(t){0===t.code?(e.pageState="success",e.plant_detail()):(e.pageState="error",e.$toast.show(t.message))}})}else this.$toast.show("链接不正确哦")},plant_detail:function(){var t={uid:this.$route.query.uid||window.localStorage.getItem("uid")},a=this;this.$ajax({url:Object(s.a)(t).detail,type:"get",success:function(t){0===t.code?t.data?(a.pageData=t.data,window.localStorage.setItem("userPlantId",t.data.userPlantId),a.idChangePlant(t.data.plantId),0===t.data.needWater?a.needWater=!1:a.needWater=!0,0===t.data.finished?a.finished=!1:a.finished=!0):a.$router.push("/adopt"):a.$toast.show(t.userMessage||"请求出错啦")}})},waterTipFn:function(){this.$toast.show({message:"主人我需要喝水啦",position:"middle"})},waterFn:function(){var t=this,a={uid:t.pageData.uid,userPlantId:t.pageData.userPlantId};this.$ajax({url:Object(s.a)(a).watering,success:function(a){if(0===a.code){t.plant_detail(),t.$toast.show({position:"middle",type:"success",message:"灌溉成功！"});var e=a.data.currentTimes/a.data.totalTimes*100;t.water_desc=a.data.totalTimes-a.data.currentTimes,t.barData=[{bg:"#f72f53",value:e,total:a.data.totalEnergy,part:a.data.currentEnergy}],setTimeout(function(){t.showModal=!0},20)}else t.$toast.show(a.userMessage||"还不能浇水哦")}}),console.log(a)},waterClose:function(){this.showModal=!1},imgFn:function(){console.log("点击到图片了")},idChangePlant:function(t){10===t&&(this.currentName="仙人掌"),11===t&&(this.currentName="向日葵")},seedFn:function(){var t=this,a={uid:this.pageData.uid,userPlantId:this.pageData.userPlantId};this.$ajax({url:Object(s.a)(a).harvest_seed,success:function(a){0===a.code?(t.$toast.show({position:"middle",type:"success",message:"收获成功！"}),t.plant_detail()):t.$toast.show(a.userMessage)}})},savePhoto:function(){var t=this;this.showPhoto=!1;var a={uid:window.localStorage.getItem("uid")};this.$ajax({url:Object(s.a)(a).album_picture,success:function(a){0===a.code?t.$toast.show({message:"已保存",type:"success",position:"middle"}):t.$toast.show(a.userMessage||"请稍后保存")}})},showDialog:function(){var t=this,a={uid:window.localStorage.getItem("uid")};this.$ajax({url:Object(s.a)(a).showDialog,type:"get",success:function(a){0===a.code&&(a.data>0?setTimeout(function(){t.showAward=!0},600):t.showAward=!1)}})}},created:function(){var t=this,a=this,e=this.$route.query;e.uid&&window.localStorage.setItem("uid",e.uid),this.getDay(),this.userUpdate(),this.showDialog(),setTimeout(function(){t.action_water="enter"},800),window.reload=function(){a.plant_detail()}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("page",{attrs:{bgWrap:"#ddd",title:"养花",state:t.pageState}},[e("div",[t.pageData?e("bg",{attrs:{day:t.day}},[e("plant",{attrs:{water:t.needWater,seed:t.finished,plantId:t.pageData.plantId,growStage:t.pageData.growStage},on:{seed:t.seedFn,water:t.waterTipFn}},[e("img",{attrs:{slot:"flower",src:t.preImg+"/"+t.pageData.plantImage,alt:""},on:{click:function(a){return a.preventDefault(),t.imgFn(a)}},slot:"flower"})])],1):t._e(),t._v(" "),t.pageData?e("div",{staticClass:"sun_wrap"},t._l(t.pageData.energyList,function(t,a){return e("energy",{key:a,attrs:{state:0!=t.isAcquire,point:t.size,energyId:t.id,userPlantId:t.userPlantId,index:a}})})):t._e(),t._v(" "),t.pageData?e("div",{staticClass:"count_pane",on:{click:function(a){t.$router.push("/sort")}}},[e("p",[t._v(t._s(t.pageData.totalEnergy))]),t._v(" "),e("button",{staticClass:"sort_btn"},[t._v("排行")])]):t._e(),t._v(" "),e("img",{staticClass:"camera",attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_camera.png",alt:""},on:{click:function(a){return a.preventDefault(),t.cameraFn(a)}}}),t._v(" "),e("img",{staticClass:"photo",attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_pic.png",alt:""},on:{click:function(a){a.preventDefault(),t.$router.push("/photo")}}}),t._v(" "),e("transition",{attrs:{name:"rightOffset"}},["enter"==t.action_water?e("div",{staticClass:"water_grass"},[e("div",{staticClass:"water_glass"},[e("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/pic_water.png",alt:""},on:{click:function(a){return a.preventDefault(),t.waterFn(a)}}})])]):t._e()])],1)]),t._v(" "),e("modal",{attrs:{showModal:t.showModal}},[e("div",{staticClass:"water_modal"},[e("water-tip",{attrs:{title:t.currentName,desc:t.water_desc,barData:t.barData},on:{iclose:t.waterClose}})],1)]),t._v(" "),e("modal",{attrs:{showModal:t.showPhoto,name:"toastSlideUp",background:"rgba(255, 255, 255, 0.3)"}},[e("div",{staticClass:"modal_wrap",staticStyle:{width:"55%",height:"46%"}},[t.pageData?e("photo",{attrs:{day:t.day,showClose:!0,time:t.photo.time,title:t.photo.title},on:{save:t.savePhoto,close:function(a){t.showPhoto=!1}}},[e("img",{attrs:{src:t.preImg+"/"+t.pageData.plantImage,alt:""},on:{click:function(a){return a.preventDefault(),t.imgFn(a)}}})]):t._e()],1)]),t._v(" "),e("modal",{attrs:{showModal:t.showAward,background:"rgba(255, 255, 255, 0.3)"}},[e("div",{staticClass:"modal_wrap award_modal",staticStyle:{width:"80%"}},[e("award",{attrs:{sort:1},on:{callback:function(a){t.showAward=!1},confirm:function(a){t.showAward=!1}}})],1)])],1)},staticRenderFns:[]};var r=e("Z0/y")(o,i,!1,function(t){e("s9E4")},null,null);a.default=r.exports},s9E4:function(t,a){}});