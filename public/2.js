(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){"use strict";function r(t,e,n,r,a,i,o,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},24:function(t,e,n){var r=n(94);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(t.exports=r.locals)},4:function(t,e,n){"use strict";var r=n(8),a=n.n(r);e.a=function(t){a.a.get("user-token")||(window.location.href="/login");var e=JSON.parse(a.a.get("user"));if(e.role==t||"admin"==e.role)return!0;window.location.href="/"}},44:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(4),i=n(3),o=n.n(i),s={name:"patientsReports",components:{app:r.a},props:["patients"],data:function(){return{search:"",headers:[{text:"Number",align:"start",sortable:!0,value:"PNumber"},{text:"Name",value:"Name"},{text:"Mobile",value:"mobile"},{text:"Age",value:"Age"},{text:"Gender",value:"Gender"},{text:"Admission Date",value:"AdmissionDate"},{text:"Actions",value:"id",align:"center"}]}},methods:{SearchPatient:function(){var t=this,e=this.$cookie.get("user-token"),n={headers:{Authorization:"Bearer ".concat(e)}};o.a.post("/patient/search",{Search:this.search},n).then((function(e){e.data.status&&(t.patients=e.data.Patient)}))}},created:function(){Object(a.a)("user")}},c=(n(93),n(0)),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-card-title",[n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:t.SearchPatient},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.patients},scopedSlots:t._u([{key:"item.id",fn:function(e){var r=e.item;return[n("inertia-link",{attrs:{href:"/report/"+r.id}},[n("v-btn",{attrs:{small:"",color:"success"}},[t._v("print")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"7a8138a7",null);e.default=l.exports},5:function(t,e,n){"use strict";var r={props:{source:String},data:function(){return{username:"",role:"",drawer:null,items:[{icon:"mdi-account-multiple",text:"Patients",url:"/patient"},{icon:"mdi mdi-printer",text:"Reports",url:"/report"},{icon:"mdi-account-key",text:"Users",url:"/User",role:"admin"}]}},created:function(){var t=JSON.parse(this.$cookie.get("user"));this.username=t.name,this.role=t.role},methods:{logout:function(){this.$cookie.delete("user"),this.$cookie.delete("user-token"),window.location.href="/login"}}},a=(n(65),n(0)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return["user"==t.role&&"admin"!=e.role||"admin"==t.role?n("inertia-link",{key:e.text,staticClass:"linkStyle",attrs:{href:e.url}},[n("v-list-item",[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)],1):t._e()]}))],2)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"400px"}},[n("span",{staticClass:"hidden-sm-and-down"},[t._v("Case Report For COVID-19 Patients")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"primary",label:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-account-circle-outline")]),t._v("\n    "+t._s(t.username)+"\n  ")],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.logout}},[n("v-icon",[t._v("mdi-logout")])],1)],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"left",justify:"left"}},[t._t("default")],2)],1)],1),t._v(" "),n("inertia-link",{attrs:{href:"/patient/create"}},[n("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],1)}),[],!1,null,null,null);e.a=i.exports},65:function(t,e,n){"use strict";var r=n(9);n.n(r).a},66:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"\n.linkStyle{\n  text-decoration: none;\n}\n.v-form{\n    width: 100%;\n}\n",""])},9:function(t,e,n){var r=n(66);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(t.exports=r.locals)},93:function(t,e,n){"use strict";var r=n(24);n.n(r).a},94:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"\n.largeItem[data-v-7a8138a7] {\n  font-size: 20px;\n}\n",""])}}]);