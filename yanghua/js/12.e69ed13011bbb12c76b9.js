webpackJsonp([12],{P1NO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{img:"",state:"a",level:null,type:""}},props:{seed:{type:Boolean,default:!1},water:{type:Boolean,default:!1},plantId:{type:[String,Number],default:10},growStage:{type:[String,Number],default:1}},watch:{water:function(t,e){var a=this.plantState(),n=this.plantType(),i=this.plantLevel();this.img="//p8jtbvrrf.bkt.clouddn.com/"+n+"_"+i+"_"+a+".gif"}},methods:{watering:function(){this.$emit("water")},seedFn:function(){this.$emit("seed")},plantType:function(){var t=10;return 10==this.plantId?t="xrz":11==this.plantId&&(t="xrk"),this.type=t,t},plantLevel:function(){var t="l";return t=1==this.growStage?"l":2==this.growStage?"m":"h",this.level=t,t},plantState:function(){var t="a";return t=this.water?"b":"a",this.state=t,t},touchPlant:function(){var t=this;"a"==this.state&&(this.state="c",setTimeout(function(){t.state="a"},1e3))}},created:function(){var t=this.plantType(),e=this.plantLevel();this.plantState();this.img="//p8jtbvrrf.bkt.clouddn.com/"+t+"_"+e+"_"+this.state+".gif"}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plant__wrap"},[a("div",{staticClass:"flower"},[t._t("flower",[a("img",{attrs:{src:t.img,alt:""},on:{touchstart:t.touchPlant}})]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.seed?a("div",{staticClass:"tip",on:{click:t.seedFn}},[a("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/pic_hand.png",alt:""}})]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.water?a("div",{staticClass:"tip",on:{click:t.watering}},[a("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/pic_nowater.png",alt:""}})]):t._e()])],2)])},staticRenderFns:[]};var r=a("Z0/y")(n,i,!1,function(t){a("aqxO")},null,null);e.default=r.exports},aqxO:function(t,e){}});