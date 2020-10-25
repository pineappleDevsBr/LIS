(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0e50":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:t.persistent},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[s("q-card",{staticClass:"m-card -limit"},[s("q-card-section",{staticClass:"row items-center"},[s("span",{staticClass:"q-ml-sm",domProps:{innerHTML:t._s(t.title)}})]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{staticClass:"a-btn -dark",attrs:{flat:"",rounded:"",label:t.$t("dlg.yes")},on:{click:function(e){return t.close(!0)}}}),s("q-btn",{staticClass:"a-btn -dark",attrs:{flat:"",rounded:"",label:t.$t("dlg.no")},on:{click:function(e){return t.close(!1)}}})],1)],1)],1)},i=[],r={name:"dlg-confirm",props:{isOpen:Boolean,persistent:Boolean,title:String},methods:{close:function(t){this.$emit("close",t)}}},o=r,n=s("2877"),c=s("eebe"),l=s.n(c),p=s("24e8"),m=s("f09f"),f=s("a370"),d=s("4b7e"),u=s("9c40"),w=Object(n["a"])(o,a,i,!1,null,null,null);e["a"]=w.exports;l()(w,"components",{QDialog:p["a"],QCard:m["a"],QCardSection:f["a"],QCardActions:d["a"],QBtn:u["a"]})},c5cd:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"o-profile"},[s("div",{staticClass:"m-profile_info"},[s("div",[t.getUser.nickname?s("img",{staticClass:"m-profile_avatar",attrs:{src:"https://api.adorable.io/avatars/75/"+this.getUser.avatar,alt:"avatar adorable"}}):s("q-skeleton",{staticClass:"m-skeleton_avatar -md -center",attrs:{type:"QAvatar"}})],1),s("div",[t.getUser.nickname?s("p",{staticClass:"m-profile_username"},[t._v(t._s(t.getUser.nickname))]):s("q-skeleton",{staticClass:"m-skeleton_title -high",attrs:{type:"text"}})],1),s("q-btn",{staticClass:"m-profile_edit",attrs:{"no-caps":"",flat:"",label:t.$t("profile.editData")},on:{click:function(e){t.openSettings=!0}}})],1),s("div",{staticClass:"m-profile_achievements"},[s("h2",{staticClass:"m-profile_title"},[t._v(t._s(t.$t("profile.notifications.title")))]),s("div",{staticClass:"a-text"},[t._v("\n      "+t._s(t.$t("profile.notifications.text"))+"\n    ")])]),s("settings",{attrs:{settings:t.openSettings},on:{closeSettings:t.closeSettings}})],1)},i=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),o=s.n(r),n=s("967e"),c=s.n(n),l=(s("96cf"),s("fa84")),p=s.n(l),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}},[s("div",{staticClass:"o-modal bg-white",class:{"q-dark":t.$q.dark.isActive}},[s("div",{staticClass:"o-modal_header bg-primary",class:{"q-dark":t.$q.dark.isActive}},[s("h2",{staticClass:"o-modal_title"},[t._v(t._s(t.$t("profile.settings.header")))]),s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){t.isCloseSettings.open=!0}}})],1),s("div",{staticClass:"o-modal_content"},[s("h2",{staticClass:"m-settings_title"},[t._v(t._s(t.$t("profile.settings.account")))]),s("q-card",{staticClass:"m-card m-settings_card"},[s("q-card-section",{staticClass:"m-settings_info",on:{click:function(e){t.selectAvatar=!0}}},[s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.$t("profile.settings.avatar")))]),s("img",{staticClass:"m-profile_avatar -small",attrs:{src:""+t.avatar_path,alt:"avatar adorable"}})])],1),s("q-card",{staticClass:"m-card m-settings_card"},[s("q-card-section",{staticClass:"m-settings_info",on:{click:function(e){return t.openDlg("nickname","Nickname",t.getUser.nickname)}}},[s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.$t("profile.settings.nickname")))]),s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.nickname))])])],1),s("q-card",{staticClass:"m-card m-settings_card"},[s("q-card-section",{staticClass:"m-settings_info",on:{click:function(e){return t.openDlg("name","Nome",t.getUser.name)}}},[s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.$t("profile.settings.name")))]),s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.name))])])],1),s("q-card",{staticClass:"m-card m-settings_card"},[s("q-card-section",{staticClass:"m-settings_info",on:{click:function(e){t.changePassword.isOpen=!0}}},[s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.$t("profile.settings.password")))]),s("q-input",{attrs:{borderless:"",disable:"",type:"password"},model:{value:t.secretPass,callback:function(e){t.secretPass=e},expression:"secretPass"}})],1)],1)],1),s("div",{staticClass:"m-settings_notification"},[s("h2",{staticClass:"m-settings_title"},[t._v(t._s(t.$t("profile.settings.notifications")))]),s("q-card",{staticClass:"m-card m-settings_card"},[s("q-card-section",{staticClass:"m-settings_info -between"},[s("p",{staticClass:"m-settings_info-notifications"},[t._v(t._s(t.$t("profile.settings.update")))]),s("q-toggle",{attrs:{color:"primary"},model:{value:t.notifications.update,callback:function(e){t.$set(t.notifications,"update",e)},expression:"notifications.update"}})],1)],1),s("q-card",{staticClass:"m-card m-settings_card"},[s("q-card-section",{staticClass:"m-settings_info -between"},[s("p",{staticClass:"m-settings_info-notifications"},[t._v(t._s(t.$t("profile.settings.changeData")))]),s("q-toggle",{attrs:{color:"primary"},model:{value:t.notifications.changeData,callback:function(e){t.$set(t.notifications,"changeData",e)},expression:"notifications.changeData"}})],1)],1)],1),s("div",{staticClass:"m-settings_notification"},[s("h2",{staticClass:"m-settings_title"},[t._v(t._s(t.$t("profile.settings.about")))]),s("q-card",{staticClass:"m-card m-settings_card",on:{click:function(e){t.tutorialOpen=!0}}},[s("q-card-section",{staticClass:"m-settings_info"},[s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.$t("profile.settings.tutorials")))])])],1),s("q-card",{staticClass:"m-card m-settings_card",on:{click:function(e){t.termsOpen=!0}}},[s("q-card-section",{staticClass:"m-settings_info"},[s("p",{staticClass:"m-settings_info-account -full"},[t._v(t._s(t.$t("profile.settings.terms")))])])],1),s("q-card",{staticClass:"m-card m-settings_card",on:{click:function(e){t.creditsOpen=!0}}},[s("q-card-section",{staticClass:"m-settings_info"},[s("p",{staticClass:"m-settings_info-account"},[t._v(t._s(t.$t("profile.settings.credits")))])])],1)],1),s("div",{staticClass:"m-settings_actions"},[s("q-btn",{staticClass:"m-settings_actions-item",attrs:{"no-caps":"",rounded:"",label:t.$t("profile.settings.save")},on:{click:t.closeSettings}}),s("q-btn",{staticClass:"m-settings_actions-item",attrs:{"no-caps":"",rounded:"",label:t.$t("profile.settings.changeAccount")},on:{click:t.loggout}})],1),s("q-dialog",{model:{value:t.selectAvatar,callback:function(e){t.selectAvatar=e},expression:"selectAvatar"}},[s("changeAvatar",{on:{selectedAvatar:t.selectedAvatar}})],1),s("changePassword",{attrs:{isOpen:t.changePassword.isOpen},on:{close:t.closePassword}}),s("credits",{attrs:{credits:t.creditsOpen},on:{close:t.close}}),s("terms",{attrs:{terms:t.termsOpen},on:{close:t.close}}),s("tutorial",{attrs:{tutorial:t.tutorialOpen},on:{close:t.close}}),s("qprompt",{attrs:{prompt:t.prompt},on:{isClose:t.isClose}}),s("closeSettings",{attrs:{persistent:t.isCloseSettings.presistent,title:t.isCloseSettings.title,isOpen:t.isCloseSettings.open},on:{close:t.closeWithoutSave}})],1)])},f=[],d=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:""},model:{value:t.prompt.isOpen,callback:function(e){t.$set(t.prompt,"isOpen",e)},expression:"prompt.isOpen"}},[s("q-card",{staticStyle:{"min-width":"350px"}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v(t._s(t.prompt.title))])]),s("q-card-section",{staticClass:"q-pt-none"},[s("q-input",{attrs:{dense:"",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.isClose(t.prompt.value)}},model:{value:t.prompt.value,callback:function(e){t.$set(t.prompt,"value",e)},expression:"prompt.value"}})],1),s("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("dlg.cancel")},on:{click:function(e){return t.isClose()}}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("dlg.change")},on:{click:function(e){return t.isClose(t.prompt.value)}}})],1)],1)],1)}),u=[],w={name:"qprompt",props:{prompt:Object},methods:{isClose:function(t){t&&this.$emit("isClose",{type:this.prompt.type,newValue:this.prompt.value})}}},h=w,_=s("2877"),v=s("eebe"),g=s.n(v),b=s("24e8"),k=s("f09f"),C=s("a370"),y=s("27f9"),O=s("4b7e"),$=s("9c40"),x=s("7f67"),P=Object(_["a"])(h,d,u,!1,null,null,null),q=P.exports;g()(P,"components",{QDialog:b["a"],QCard:k["a"],QCardSection:C["a"],QInput:y["a"],QCardActions:O["a"],QBtn:$["a"]}),g()(P,"directives",{ClosePopup:x["a"]});var j=s("0e50"),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"m-changeAvatar"},[s("q-card-section",{staticClass:"m-changeAvatar_header"},[s("h2",{staticClass:"o-modal_title"},[t._v(t._s(t.$t("profile.settings.changeAvatar.title")))]),s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$emit("selectedAvatar")}}})],1),s("q-card-section",{staticClass:"m-changeAvatar_content"},[s("figure",{staticClass:"m-changeAvatar_item"},[s("img",{attrs:{src:""+t.avatar_path}})])]),s("q-card-actions",{staticClass:"text-primary",attrs:{align:"center"}},[s("q-btn",{attrs:{flat:"",label:t.$t("profile.settings.changeAvatar.new")},on:{click:t.random}}),s("q-btn",{attrs:{flat:"",label:t.$t("profile.settings.changeAvatar.choice")},on:{click:t.selectedAvatar}})],1)],1)},T=[],Q=(s("6b54"),s("2f62"));function A(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?A(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var F={name:"changeAvatar",data:function(){return{avatar:null}},props:{selectAvatar:Boolean},methods:{selectedAvatar:function(){this.$emit("selectedAvatar",{avatar:this.avatar})},random:function(){this.avatar="lis_avatarGenerator-".concat(Math.random().toString(36).substr(2,4),".png")}},computed:D(D({},Object(Q["b"])("user",["getUser"])),{},{avatar_path:function(){return"https://api.adorable.io/avatars/75/".concat(this.avatar)}}),created:function(){this.avatar=this.getUser.avatar}},B=F,E=Object(_["a"])(B,S,T,!1,null,null,null),I=E.exports;g()(E,"components",{QCard:k["a"],QCardSection:C["a"],QBtn:$["a"],QCardActions:O["a"]});var U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[s("q-card",{staticClass:"m-card"},[s("q-card-section",[s("q-input",{staticStyle:{"padding-bottom":"20px"},attrs:{color:"primary",type:t.isPwd?"password":"text",label:t.$t("profile.settings.changePassword.current")},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.currentPassword,callback:function(e){t.currentPassword=e},expression:"currentPassword"}}),s("q-input",{attrs:{color:"primary",type:t.isPwdNew?"password":"text",rules:[function(e){return null!==t.pattern.exec(e)||t.$t("access.personalData.errors.notStrong")}],"lazy-rules":"",label:t.$t("profile.settings.changePassword.new"),hint:t.$t("access.personalData.strongPassword")},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwdNew?"visibility_off":"visibility"},on:{click:function(e){t.isPwdNew=!t.isPwdNew}}})]},proxy:!0}]),model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}}),s("q-input",{attrs:{color:"primary",type:t.isPwdConfirm?"password":"text",error:t.$v.confirmPassword.$error,"error-message":t.$t("reset.errors.same"),label:t.$t("profile.settings.changePassword.confirm")},on:{blur:t.$v.confirmPassword.$touch},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwdConfirm?"visibility_off":"visibility"},on:{click:function(e){t.isPwdConfirm=!t.isPwdConfirm}}})]},proxy:!0}]),model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),s("q-card-actions",{attrs:{align:"left"}},[s("q-btn",{staticClass:"a-btn_actions",attrs:{flat:"",label:t.$t("profile.settings.changePassword.change")},on:{click:t.save}}),s("q-btn",{staticClass:"a-btn_actions",attrs:{flat:"",label:t.$t("profile.settings.changePassword.cancel")},on:{click:t.close}})],1)],1)],1)},N=[],z=s("b5ae"),M=s("4360");function H(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function L(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?H(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var V={name:"changePassword",props:{isOpen:Boolean},data:function(){return{pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,step:1,currentPassword:"",newPassword:"",confirmPassword:"",isPwd:!0,isPwdNew:!0,isPwdConfirm:!0}},validations:{confirmPassword:{sameAsPassword:Object(z["sameAs"])("newPassword")}},methods:{close:function(){this.$emit("close")},save:function(){var t=this;return p()(c.a.mark((function e(){var s,a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$error){e.next=7;break}return s={email:t.getUser.email,password:t.currentPassword},e.next=5,Object(M["a"])().dispatch("auth/login",s);case 5:a=e.sent,a.status?t.$emit("close",t.newPassword):t.$q.notify({color:"negative",message:t.$t("profile.settings.changePassword.incorrectPassword"),icon:"report_problem"});case 7:case"end":return e.stop()}}),e)})))()}},computed:L({},Object(Q["b"])("user",["getUser"]))},J=V,W=s("0016"),G=Object(_["a"])(J,U,N,!1,null,null,null),Z=G.exports;g()(G,"components",{QDialog:b["a"],QCard:k["a"],QCardSection:C["a"],QInput:y["a"],QIcon:W["a"],QCardActions:O["a"],QBtn:$["a"]});var K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.credits,callback:function(e){t.credits=e},expression:"credits"}},[s("div",{staticClass:"o-modal bg-white",class:{"q-dark":t.$q.dark.isActive}},[s("div",{staticClass:"o-modal_header bg-primary",class:{"q-dark":t.$q.dark.isActive}},[s("h2",{staticClass:"o-modal_title"},[t._v(t._s(t.$t("profile.credits.header")))]),s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:t.closeCredits}})],1),s("div",{staticClass:"o-modal_content m-credits"},[s("div",{staticClass:"a-text m-credits_text"},[t._v("\n      "+t._s(t.$t("profile.credits.text"))+"\n    ")]),s("div",{staticClass:"a-title -sub m-credits_title"},[t._v(t._s(t.$t("profile.credits.icons")))]),t._l(t.icons,(function(e){return s("div",{key:e.id,staticClass:"m-credits_icons"},[s("img",{staticClass:"m-credits_image",attrs:{src:"statics/credits/icons/"+e.name+".svg",alt:""}}),s("span",{staticClass:"m-credits_credit",domProps:{innerHTML:t._s(e.credit)}})])})),s("div",{staticClass:"a-title -sub m-credits_title"},[t._v(t._s(t.$t("profile.credits.vectors")))]),t._l(t.illustrations,(function(e){return s("div",{key:e.id,staticClass:"m-credits_icons"},[s("img",{staticClass:"m-credits_image -big",attrs:{src:"statics/credits/illustrations/"+e.name+".png",alt:""}}),s("span",{staticClass:"m-credits_credit",domProps:{innerHTML:t._s(e.credit)}})])}))],2)])])},R=[],X={name:"Credits",props:{credits:Boolean},data:function(){return{icons:[{name:"quiz",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"listening",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"complete",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"reading",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"store",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"coin",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"xp",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"money",credit:'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"gift",credit:'Icons made by <a target="_blank" href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"chest",credit:'Icons made by <a href="http://www.freepik.com/?__hstc=57440181.7da679d752ce8070e205f0e2b5bcfbaf.1588870482103.1588881599814.1589226674363.3&__hssc=57440181.5.1589226674363&__hsfp=4091394235" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"hub",credit:'Icons made by <a href="http://www.freepik.com/?__hstc=57440181.7da679d752ce8070e205f0e2b5bcfbaf.1588870482103.1588881599814.1589226674363.3&__hssc=57440181.5.1589226674363&__hsfp=4091394235" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'},{name:"settings",credit:'Icons made by <a href="http://www.freepik.com/?__hstc=57440181.7da679d752ce8070e205f0e2b5bcfbaf.1588870482103.1588881599814.1589226674363.3&__hssc=57440181.5.1589226674363&__hsfp=4091394235" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'}],illustrations:[{name:"welcome",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/school">School vector created by freepik - www.freepik.com</a>'},{name:"acess-step-1",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>'},{name:"acess-step-2",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>'},{name:"acess-step-3",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/illustration">Illustration vector created by stories - www.freepik.com</a>'},{name:"login",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>'},{name:"forgot",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by stories - www.freepik.com</a>'},{name:"reset",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/people">People vector created by stories - www.freepik.com</a>'},{name:"without-internet",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/design">Design vector created by freepik - www.freepik.com</a>'},{name:"error-404",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/business">Business vector created by pikisuperstar - www.freepik.com</a>'},{name:"e-mail_welcome",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/people">People vector created by freepik - www.freepik.com</a>'},{name:"home-modal-tutorial",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/school">School vector created by freepik - www.freepik.com</a>'},{name:"hub-modal-convite",credit:'<a target="_blank" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>'}]}},methods:{closeCredits:function(){this.$emit("close")}}},Y=X,tt=Object(_["a"])(Y,K,R,!1,null,null,null),et=tt.exports;g()(tt,"components",{QDialog:b["a"],QBtn:$["a"]});var st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[s("div",{staticClass:"o-modal bg-white",class:{"q-dark":t.$q.dark.isActive}},[s("div",{staticClass:"o-modal_header bg-primary",class:{"q-dark":t.$q.dark.isActive}},[s("h2",{staticClass:"o-modal_title"},[t._v(t._s(t.$t("profile.terms.header")))]),s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:t.closeTerms}})],1),s("div",{staticClass:"o-modal_content m-terms"},[s("q-card",{staticClass:"m-card"},[s("q-card-section",[s("h2",{staticClass:"a-title -primary -left"},[t._v(t._s(t.$t("profile.terms.privacyPolicy")))]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.privacyText1"))+"\n        ")]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.privacyText2"))+"\n        ")]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.privacyText3"))+"\n        ")]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.privacyText4"))+"\n        ")]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.privacyText5"))+"\n        ")]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.privacyText6"))+"\n        ")]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.privacyText7"))+"\n        ")]),s("h2",{staticClass:"a-title -primary -left"},[t._v(t._s(t.$t("profile.terms.cookiesPolicy")))]),s("h3",{staticClass:"a-title -primary -left -light"},[t._v(t._s(t.$t("profile.terms.cookiesTitle1")))]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.cookiesText1"))+"\n        ")]),s("h3",{staticClass:"a-title -primary -left -light"},[t._v(t._s(t.$t("profile.terms.cookiesTitle2")))]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.cookiesText2"))+"\n        ")]),s("h3",{staticClass:"a-title -primary -left -light"},[t._v(t._s(t.$t("profile.terms.cookiesTitle3")))]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.cookiesText3"))+"\n        ")]),s("h3",{staticClass:"a-title -primary -left -light"},[t._v(t._s(t.$t("profile.terms.cookiesTitle4")))]),s("ul",{staticClass:"a-text m-terms_text"},[s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText4")))]),s("p",[t._v(t._s(t.$t("profile.terms.cookiesText5")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText6")))]),s("p",[t._v(t._s(t.$t("profile.terms.cookiesText7")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText8")))]),s("p",[t._v(t._s(t.$t("profile.terms.cookiesText9")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText10")))]),s("p",[t._v(t._s(t.$t("profile.terms.cookiesText11")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText12")))]),s("p",[t._v(t._s(t.$t("profile.terms.cookiesText13")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText14")))]),s("p",[t._v(t._s(t.$t("profile.terms.cookiesText15")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText16")))]),s("p",[t._v(t._s(t.$t("profile.terms.cookiesText17")))])])]),s("h3",{staticClass:"a-title -primary -left -light"},[t._v(t._s(t.$t("profile.terms.cookiesTitle5")))]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.cookiesText18"))+"\n        ")]),s("ul",{staticClass:"a-text m-terms_text"},[s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText21")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText22")))])]),s("li",{staticClass:"m-terms_list-item"},[s("p",[t._v(t._s(t.$t("profile.terms.cookiesText23")))])])]),s("h3",{staticClass:"a-title -primary -left -light"},[t._v(t._s(t.$t("profile.terms.cookiesTitle6")))]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.cookiesText24"))+"\n        ")]),s("p",{staticClass:"a-text m-terms_text"},[t._v("\n          "+t._s(t.$t("profile.terms.cookiesText25"))+" "),s("strong",[t._v(t._s(t.$t("profile.terms.cookiesText26")))]),t._v(".\n        ")])])],1)],1)])])},at=[],it={name:"Terms",props:{terms:Boolean},methods:{closeTerms:function(){this.$emit("close")}}},rt=it,ot=Object(_["a"])(rt,st,at,!1,null,null,null),nt=ot.exports;g()(ot,"components",{QDialog:b["a"],QBtn:$["a"],QCard:k["a"],QCardSection:C["a"]});var ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.tutorial,callback:function(e){t.tutorial=e},expression:"tutorial"}},[s("div",{staticClass:"o-modal bg-white",class:{"q-dark":t.$q.dark.isActive}},[s("div",{staticClass:"o-modal_header bg-primary",class:{"q-dark":t.$q.dark.isActive}},[s("h2",{staticClass:"o-modal_title"},[t._v(t._s(t.$t("profile.tutorials.title")))]),s("q-btn",{attrs:{flat:"",icon:"close"},on:{click:t.closeTutorial}})],1),s("div",{staticClass:"o-modal_content m-tutorials"},t._l(t.getTutorials,(function(e){return s("q-card",{key:e.id,staticClass:"m-card m-tutorials_tutorial"},[s("q-card-section",{staticClass:"m-tutorials_video"},[s("q-video",{attrs:{ratio:16/9,src:e.link}})],1),s("q-card-section",[s("h3",{staticClass:"m-tutorials_video-title"},[t._v(t._s(e.name))])])],1)})),1)])])},lt=[];function pt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function mt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):pt(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var ft={name:"tutorial",props:{tutorial:Boolean},methods:{closeTutorial:function(){this.$emit("close")}},computed:mt({},Object(Q["b"])("tutorials",["getTutorials"])),mounted:function(){return p()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(M["a"])().dispatch("tutorials/getTutorials");case 2:case"end":return t.stop()}}),t)})))()}},dt=ft,ut=s("6ac0"),wt=Object(_["a"])(dt,ct,lt,!1,null,null,null),ht=wt.exports;function _t(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function vt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):_t(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}g()(wt,"components",{QDialog:b["a"],QBtn:$["a"],QCard:k["a"],QCardSection:C["a"],QVideo:ut["a"]});var gt={name:"Settings",components:{qprompt:q,changeAvatar:I,changePassword:Z,credits:et,terms:nt,tutorial:ht,closeSettings:j["a"]},props:{settings:Boolean},data:function(){return{creditsOpen:!1,termsOpen:!1,tutorialOpen:this.$route.params.view,notifications:{update:!1,changeData:!0},prompt:{isOpen:!1,type:"",title:"",value:""},isCloseSettings:{open:!1,persistent:!0,title:this.$t("profile.settings.close")},secretPass:"*****************",selectAvatar:!1,changePassword:{isOpen:!1},name:null,nickname:null,password:null,avatar:null}},methods:{loggout:function(){Object(M["a"])().dispatch("auth/logout"),this.$router.push({name:"login"})},openDlg:function(t,e,s){this.prompt.isOpen=!0,this.prompt.type=t,this.prompt.title=e,this.prompt.value=s},isClose:function(t){var e=t.type,s=t.newValue;"name"===e?this.name=s:"nickname"===e&&(this.nickname=s)},closePassword:function(t){this.changePassword.isOpen=!1,t&&(this.password=t)},selectedAvatar:function(t){this.selectAvatar=!1,void 0!==t&&(this.avatar=t.avatar)},closeSettings:function(){var t=this;return p()(c.a.mark((function e(){var s;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={},s={name:t.name,nickname:t.nickname,avatar:t.avatar},t.password&&(s={password:t.password}),e.next=5,Object(M["a"])().dispatch("user/updateUser",s);case 5:t.$emit("closeSettings");case 6:case"end":return e.stop()}}),e)})))()},close:function(){this.creditsOpen=!1,this.termsOpen=!1,this.tutorialOpen=!1},closeWithoutSave:function(t){t&&this.$emit("closeSettings"),this.isCloseSettings.open=!1}},computed:vt(vt({},Object(Q["b"])("user",["getUser"])),{},{avatar_path:function(){return"https://api.adorable.io/avatars/75/".concat(this.avatar)}}),mounted:function(){this.name=this.getUser.name,this.nickname=this.getUser.nickname,this.avatar=this.getUser.avatar}},bt=gt,kt=s("9564"),Ct=Object(_["a"])(bt,m,f,!1,null,null,null),yt=Ct.exports;function Ot(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function $t(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?Ot(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Ot(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}g()(Ct,"components",{QDialog:b["a"],QBtn:$["a"],QCard:k["a"],QCardSection:C["a"],QInput:y["a"],QToggle:kt["a"]});var xt={name:"Profile",components:{settings:yt},data:function(){return{avatar:"",title:"",openSettings:this.$route.params.view}},methods:{closeSettings:function(){var t=this;return p()(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(M["a"])().dispatch("user/getUser");case 2:t.openSettings=!1;case 3:case"end":return e.stop()}}),e)})))()}},computed:$t({},Object(Q["b"])("user",["getUser"])),mounted:function(){return p()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(M["a"])().dispatch("user/getUser");case 2:case"end":return t.stop()}}),t)})))()}},Pt=xt,qt=s("293e"),jt=Object(_["a"])(Pt,a,i,!1,null,null,null);e["default"]=jt.exports;g()(jt,"components",{QSkeleton:qt["a"],QBtn:$["a"]})}}]);