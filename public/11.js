(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{0:function(t,e,i){"use strict";function s(t,e,i,s,n,r,o,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),s&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=a?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}i.d(e,"a",(function(){return s}))},11:function(t,e,i){var s=i(70);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(2)(s,n);s.locals&&(t.exports=s.locals)},31:function(t,e,i){"use strict";i.r(e);var s={name:"CurrentMedications",props:["CurrentMedicationsDetails"],data:function(){return{isOtherNotSelected:!0}},methods:{chooseOthers:function(t){t?this.isOtherNotSelected=!1:(this.isOtherNotSelected=!0,CurrentMedicationsDetails.Others="")}}},n=(i(69),i(0)),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-form",[i("v-container",{staticClass:"BoundriesArea"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("h2",[t._v("Current Medications:-")])]),t._v(" "),i("v-col",{attrs:{cols:"3"}},[i("v-switch",{attrs:{label:"Hydroxychloroquine"},model:{value:t.CurrentMedicationsDetails.Hydroxychloroquine,callback:function(e){t.$set(t.CurrentMedicationsDetails,"Hydroxychloroquine",e)},expression:"CurrentMedicationsDetails.Hydroxychloroquine"}})],1),t._v(" "),i("v-col",{attrs:{cols:"3"}},[i("v-switch",{attrs:{label:"Azithromycin"},model:{value:t.CurrentMedicationsDetails.Azithromycin,callback:function(e){t.$set(t.CurrentMedicationsDetails,"Azithromycin",e)},expression:"CurrentMedicationsDetails.Azithromycin"}})],1),t._v(" "),i("v-col",{attrs:{cols:"3"}},[i("v-switch",{attrs:{label:"Antiviral"},model:{value:t.CurrentMedicationsDetails.Antiviral,callback:function(e){t.$set(t.CurrentMedicationsDetails,"Antiviral",e)},expression:"CurrentMedicationsDetails.Antiviral"}})],1),t._v(" "),i("v-col",{attrs:{cols:"3"}},[i("v-switch",{attrs:{label:"Other Antibiotics"},model:{value:t.CurrentMedicationsDetails.OtherAntibiotics,callback:function(e){t.$set(t.CurrentMedicationsDetails,"OtherAntibiotics",e)},expression:"CurrentMedicationsDetails.OtherAntibiotics"}})],1),t._v(" "),i("v-col",{attrs:{cols:"3"}},[i("v-switch",{attrs:{label:"Antipyretic"},model:{value:t.CurrentMedicationsDetails.Antipyretic,callback:function(e){t.$set(t.CurrentMedicationsDetails,"Antipyretic",e)},expression:"CurrentMedicationsDetails.Antipyretic"}})],1),t._v(" "),i("v-col",{attrs:{cols:"3"}},[i("v-switch",{attrs:{label:"Others"},on:{change:t.chooseOthers}})],1),t._v(" "),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{class:{isOtherNotSelectedClass:t.isOtherNotSelected},attrs:{label:"Other Medications"},model:{value:t.CurrentMedicationsDetails.Others,callback:function(e){t.$set(t.CurrentMedicationsDetails,"Others",e)},expression:"CurrentMedicationsDetails.Others"}})],1)],1)],1)],1)}),[],!1,null,"1702192c",null);e.default=r.exports},69:function(t,e,i){"use strict";var s=i(11);i.n(s).a},70:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"\n.isOtherNotSelectedClass[data-v-1702192c] {\r\n  display: none;\n}\r\n",""])}}]);