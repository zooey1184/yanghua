webpackJsonp([4],{"Puu/":function(t,e){},hJJH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("3nZU"),i={data:function(){return{pageState:"loading",rankList:[],preImg:"//p8jtbvrrf.bkt.clouddn.com/"}},components:{list:function(){return n.e(17).then(n.bind(null,"wWYc"))},item:function(){return n.e(15).then(n.bind(null,"QJE8"))},tipPage:function(){return n.e(14).then(n.bind(null,"RCCJ"))}},methods:{getData:function(){var t=this;this.$ajax({url:Object(a.a)().currentWeekRank,type:"get",success:function(e){console.log(e),0===e.code&&(t.rankList=e.data,setTimeout(function(){t.pageState="success"},50))}})},lastWeekRank:function(){var t=this;this.$ajax({url:Object(a.a)().lastWeekRank,type:"get",success:function(e){console.log(e),0===e.code&&(t.rankList=e.data,setTimeout(function(){t.pageState="success"},50))}})},test:function(){window.localStorage.setItem("reload","true"),window.history.back()},avatarFn:function(t){var e=!0;try{e=!!t.match(/(jpg|jpeg|png|gif)/g)}catch(t){e=!1}finally{return e}}},created:function(){this.getData()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",{attrs:{title:"本周排行",state:t.pageState}},[n("div",{},[t.rankList.length>0?n("div",{staticStyle:{padding:"10px 0"}},["success"==t.pageState?n("list",{attrs:{name:"rightOffset"}},t._l(t.rankList,function(e,a){return n("item",{key:a,attrs:{title:e.nickname,sort:a+1,point:e.energySize+"点"}},[t.avatarFn(e.avatar)?n("img",{attrs:{src:e.avatar,alt:""},on:{click:t.test}}):t._e()])})):t._e()],1):n("tip-page",{attrs:{title:"暂无排行记录"}})],1)])},staticRenderFns:[]};var s=n("Z0/y")(i,r,!1,function(t){n("Puu/")},null,null);e.default=s.exports}});