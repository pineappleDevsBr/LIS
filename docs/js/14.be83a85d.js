(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{d18f:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"o-forgot"},[r("div",{staticClass:"a-title -white o-forgot_title"},[t._v(t._s(t.$t("forgot.title")))]),r("div",{staticClass:"a-text -white"},[t._v("\n    "+t._s(t.$t("forgot.info"))+"\n  ")]),r("q-form",{staticClass:"q-gutter-md column",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("q-input",{staticClass:"primary-error",attrs:{dark:"",color:"white","label-color":"white",error:t.$v.form.email.$error,"error-message":t.$t("forgot.errors.required"),label:t.$t("forgot.email")},on:{blur:t.$v.form.email.$touch},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),r("q-btn",{staticClass:"bg-white o-forgot_btn",attrs:{rounded:"","no-caps":"",outline:"",color:"primary",size:"lg",type:"submit",label:t.$t("forgot.btn")}}),r("router-link",{staticClass:"q-mt-md text-white a-link",attrs:{to:{name:"login"}}},[t._v("\n    "+t._s(t.$t("forgot.backToLogin"))+"\n  ")])],1)],1)},a=[],i=r("967e"),n=r.n(i),s=(r("96cf"),r("fa84")),l=r.n(s),m=r("b5ae"),c=r("4360"),u={name:"login",data:function(){return{isPwd:!0,form:{email:""}}},validations:{form:{email:{required:m["required"],email:m["email"]}}},methods:{submit:function(){var t=this;return l()(n.a.mark((function e(){var r,o;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r={email:t.form.email},t.$v.form.$touch(),t.$v.form.$error){e.next=9;break}return t.$q.loading.show(),e.next=6,Object(c["a"])().dispatch("auth/forgot",r);case 6:o=e.sent,o.status?(t.$q.notify({color:"positive",message:t.$i18n.t("forgot.sendEmail"),icon:"email"}),t.$router.push({name:"welcome"})):t.$q.notify({color:"negative",message:t.$i18n.t("errorFilter.user.".concat(o.error.response.status)),icon:"report_problem"}),t.$q.loading.hide();case 9:case"end":return e.stop()}}),e)})))()}}},f=u,d=r("2877"),g=r("eebe"),p=r.n(g),$=r("9989"),b=r("0378"),h=r("27f9"),v=r("9c40"),w=Object(d["a"])(f,o,a,!1,null,null,null);e["default"]=w.exports;p()(w,"components",{QPage:$["a"],QForm:b["a"],QInput:h["a"],QBtn:v["a"]})}}]);