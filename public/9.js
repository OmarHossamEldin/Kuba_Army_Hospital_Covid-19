(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{0:function(t,e,i){"use strict";function s(t,e,i,s,a,n,o,l){var c,r="function"==typeof t?t.options:t;if(e&&(r.render=e,r.staticRenderFns=i,r._compiled=!0),s&&(r.functional=!0),n&&(r._scopeId="data-v-"+n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},r._ssrRegister=c):a&&(c=l?function(){a.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(r.functional){r._injectStyles=c;var v=r.render;r.render=function(t,e){return c.call(e),v(t,e)}}else{var d=r.beforeCreate;r.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:r}}i.d(e,"a",(function(){return s}))},10:function(t,e,i){var s=i(68);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(2)(s,a);s.locals&&(t.exports=s.locals)},18:function(t,e,i){"use strict";var s={props:["label","dateInput"],methods:{ChangeDate:function(t){this.$emit("dateChanged",t)}},computed:{fromDateDisp:function(){return this.dateInput}}},a=i(0),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-text-field",t._g({attrs:{label:t.label,readonly:"",value:t.dateInput}},s))]}}]),model:{value:t.fromDateMenu,callback:function(e){t.fromDateMenu=e},expression:"fromDateMenu"}},[t._v(" "),i("v-date-picker",{attrs:{locale:"en-in","no-title":""},on:{input:function(e){t.fromDateMenu=!1},change:t.ChangeDate},model:{value:t.dateInput,callback:function(e){t.dateInput=e},expression:"dateInput"}})],1)],1)}),[],!1,null,null,null);e.a=n.exports},27:function(t,e,i){"use strict";i.r(e);var s={name:"bottom",components:{DatePicker:i(18).a},props:["stepCo","InvestigationsDetails"],data:function(){return{isOtherNotSelected:!0}},methods:{chooseOthers:function(t){t?this.isOtherNotSelected=!1:(this.isOtherNotSelected=!0,previousMedicationsDetails.Others="")},onDateChanged:function(t){this.InvestigationsDetails.DateofDischarge=t}}},a=(i(67),i(0)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"BoundriesArea"},[i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{label:"24 hr Holter"},model:{value:t.InvestigationsDetails.HrHolter24,callback:function(e){t.$set(t.InvestigationsDetails,"HrHolter24",e)},expression:"InvestigationsDetails.HrHolter24"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{label:"CXR"},model:{value:t.InvestigationsDetails.CXR,callback:function(e){t.$set(t.InvestigationsDetails,"CXR",e)},expression:"InvestigationsDetails.CXR"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{label:"CT chest"},model:{value:t.InvestigationsDetails.CTChest,callback:function(e){t.$set(t.InvestigationsDetails,"CTChest",e)},expression:"InvestigationsDetails.CTChest"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-text-field",{attrs:{label:"Complications"},model:{value:t.InvestigationsDetails.Complications,callback:function(e){t.$set(t.InvestigationsDetails,"Complications",e)},expression:"InvestigationsDetails.Complications"}})],1),t._v(" "),"Dis"==t.stepCo?i("v-col",{attrs:{cols:"3"}},[i("DatePicker",{attrs:{label:"Date of Discharge",dateInput:t.InvestigationsDetails.DateofDischarge},on:{dateChanged:t.onDateChanged}})],1):t._e(),t._v(" "),"Dis"==t.stepCo?i("v-col",{attrs:{cols:"9"}},[i("v-text-field",{attrs:{label:"Discharge Status"},model:{value:t.InvestigationsDetails.DischargeStatus,callback:function(e){t.$set(t.InvestigationsDetails,"DischargeStatus",e)},expression:"InvestigationsDetails.DischargeStatus"}})],1):t._e()],1),t._v(" "),"Dis"==t.stepCo?i("v-row",{staticClass:"BoundriesArea"},[i("v-col",{attrs:{cols:"12"}},[i("h2",[t._v("Medications at Discharge:-")])]),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-switch",{attrs:{label:"Hydroxychloroquine"},model:{value:t.InvestigationsDetails.MedicationsAtDischarge.Hydroxychloroquine,callback:function(e){t.$set(t.InvestigationsDetails.MedicationsAtDischarge,"Hydroxychloroquine",e)},expression:"InvestigationsDetails.MedicationsAtDischarge.Hydroxychloroquine"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-switch",{attrs:{label:"Azithromycin"},model:{value:t.InvestigationsDetails.MedicationsAtDischarge.Azithromycin,callback:function(e){t.$set(t.InvestigationsDetails.MedicationsAtDischarge,"Azithromycin",e)},expression:"InvestigationsDetails.MedicationsAtDischarge.Azithromycin"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-switch",{attrs:{label:"Antiviral"},model:{value:t.InvestigationsDetails.MedicationsAtDischarge.Antiviral,callback:function(e){t.$set(t.InvestigationsDetails.MedicationsAtDischarge,"Antiviral",e)},expression:"InvestigationsDetails.MedicationsAtDischarge.Antiviral"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-switch",{attrs:{label:"Other Antibiotics"},model:{value:t.InvestigationsDetails.MedicationsAtDischarge.OtherAntibiotics,callback:function(e){t.$set(t.InvestigationsDetails.MedicationsAtDischarge,"OtherAntibiotics",e)},expression:"InvestigationsDetails.MedicationsAtDischarge.OtherAntibiotics"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-switch",{attrs:{label:"Antipyretic"},model:{value:t.InvestigationsDetails.MedicationsAtDischarge.Antipyretic,callback:function(e){t.$set(t.InvestigationsDetails.MedicationsAtDischarge,"Antipyretic",e)},expression:"InvestigationsDetails.MedicationsAtDischarge.Antipyretic"}})],1),t._v(" "),i("v-col",{attrs:{cols:"4"}},[i("v-switch",{attrs:{label:"Others"},on:{change:t.chooseOthers}})],1),t._v(" "),i("v-col",{attrs:{cols:"8"}},[i("v-text-field",{class:{isOtherNotSelectedClass:t.isOtherNotSelected},attrs:{label:"Other Medications"},model:{value:t.InvestigationsDetails.MedicationsAtDischarge.OtheriInfo,callback:function(e){t.$set(t.InvestigationsDetails.MedicationsAtDischarge,"OtheriInfo",e)},expression:"InvestigationsDetails.MedicationsAtDischarge.OtheriInfo"}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=n.exports},67:function(t,e,i){"use strict";var s=i(10);i.n(s).a},68:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"\n.isOtherNotSelectedClass {\n  display: none;\n}\n",""])}}]);