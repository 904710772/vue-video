webpackJsonp([3],{Fk7a:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},i=n("VU/8")({name:"app"},a,!1,function(e){n("Fk7a")},null,null).exports,l=n("/ocq");n("gORT");o.default.use(l.a);var u=[{path:"/",redirect:{name:"helloworld"}},{path:"/helloworld",name:"helloworld",component:function(e){new Promise(function(e){e()}).then(function(){var t=[n("gORT")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{cnTitle:"首页",enTitle:"首页"}},{path:"/videoPage",name:"videoPage",component:function(e){n.e(0).then(function(){var t=[n("eMhm")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{cnTitle:"视频页",enTitle:"视频页"}},{path:"*",name:"404",component:function(e){n.e(1).then(function(){var t=[n("thLP")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{cnTitle:"404页面",enTitle:"404页面"}}],c=new l.a({history:!0,routes:u}),r=n("Wh0R"),s=n.n(r);n("dsV6");o.default.use(s.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:c,template:"<App/>",components:{App:i}})},dsV6:function(e,t){},gORT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("ul",e._l(e.list,function(t,o){return n("li",{key:o,on:{click:function(t){e.goto()}}},[e._v(e._s(t))])}))])},staticRenderFns:[]},a=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",list:["video"]}},methods:{goto:function(){this.$router.push({path:"/videoPage"})}}},o,!1,function(e){n("zayd")},"data-v-5a409202",null);t.default=a.exports},zayd:function(e,t){}},["NHnr"]);