webpackJsonp([15],{QoJ3:function(t,e){},fewE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("3nZU"),o={data:function(){return{phone:"",name:""}},props:{sort:[String,Number]},methods:{submitFn:function(){var t=this,e={uid:window.localStorage.getItem("uid"),name:this.name,phone:this.phone};this.phone.match(/^1\d{10}$/g)?""!=this.name?this.$ajax({url:Object(s.a)(e).address_add,success:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){0===e.code?(t.$emit("callback"),t.$toast.show({msg:"提交成功！",position:"middle",type:success})):t.$toast.show(e.userMessage)})}):this.$toast.show("姓名不能为空哦"):t.$toast.show("电话号码不正确")},confn:function(){this.$emit("confirm")}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"header_title"},[1==t.sort?n("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_fir.png",alt:""}}):t._e(),t._v(" "),2==t.sort?n("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_sec.png",alt:""}}):t._e(),t._v(" "),t.sort>=3?n("img",{attrs:{src:"//p8jtbvrrf.bkt.clouddn.com/icon_thir.png",alt:""}}):t._e()]),t._v(" "),n("p",{staticClass:"title"},[t._v("第"+t._s(t.sort)+"名")]),t._v(" "),t.sort<4?n("div",{staticClass:"desc"},[n("p",[t._v("恭喜您上周好友排名获得第"+t._s(t.sort)+"名，请提交联系方式并保持电话畅通，将会有神秘礼品赠送")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"联系电话"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn",on:{click:t.submitFn}},[t._v("提交")])]):n("div",{staticClass:"desc"},[n("p",[t._v("恭喜您上周好友排名获得第"+t._s(t.sort)+"名，请继续努力")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.confn}},[t._v("提交")])])])},staticRenderFns:[]};var i=n("Z0/y")(o,a,!1,function(t){n("QoJ3")},null,null);e.default=i.exports}});