(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{0:function(t,e,n){"use strict";function o(t,e,n,o,s,a,r,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=i?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},51:function(t,e,n){"use strict";n.r(e);var o=n(3),s=n.n(o),a={props:{source:String},data:function(){return{show2:!1,username:"",password:""}},methods:{login:function(){var t=this;s.a.post("/login-page",{username:this.username,password:this.password}).then((function(e){console.log(e.data),1==e.data.status?(t.$cookie.set("user-token",e.data.token),t.$cookie.set("user",JSON.stringify(e.data.user)),window.location.href="/"):alert("data is wrong")}))}}},r=n(0),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[t._v("COVID-19")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Username",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password",name:"input-10-2",label:"Password",value:"","prepend-icon":"mdi-lock"},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.login}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);