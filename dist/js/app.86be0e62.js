(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"077e":function(t,e,a){},"0c9a":function(t,e,a){t.exports=a.p+"img/kor_string_similarity01.e0d96332.png"},"1ec9":function(t,e,a){"use strict";var n=a("bf96"),i=a.n(n);i.a},"1ed3":function(t,e,a){t.exports=a.p+"img/profile_img_01.b28f45fd.png"},3581:function(t,e,a){t.exports=a.p+"img/tobi01.5b584d8f.png"},"379d":function(t,e,a){t.exports=a.p+"img/under_construction.02e75c06.png"},"3fec":function(t,e,a){},"42d0":function(t,e,a){"use strict";var n=a("74ad"),i=a.n(n);i.a},"55a1":function(t,e,a){"use strict";var n=a("d125"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-card",[a("NavBar"),a("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-7","max-width":"100vw",height:"100vh"}},[a("div",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersectHome,options:{threshold:[0,.001,.5,.999,1]}},expression:"{\n        handler: onIntersectHome,\n        options: {\n          threshold: [0, 0.001, 0.5, 0.999, 1.0]\n        }\n      }"}],staticClass:"component-wrapper",attrs:{id:"home-page"}},[a("Home")],1),a("div",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersectAbout,options:{threshold:[0,1e-10,.001,.5,.999,.99999999999,1]}},expression:"{\n        handler: onIntersectAbout,\n        options: {\n          threshold: [0, 0.0000000001, 0.001, 0.5, 0.999, 0.99999999999, 1.0]\n        }\n      }"}],staticClass:"component-wrapper upper",attrs:{id:"about-page"}},[a("About")],1),a("div",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersectProjects,options:{threshold:[0,.001,.5,.999,1]}},expression:"{\n          handler: onIntersectProjects,\n          options: {\n            threshold: [0, 0.001, 0.5, 0.999, 1.0]\n          }\n      }"}],staticClass:"component-wrapper upper",attrs:{id:"projects-page"}},[a("Projects")],1),a("div",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersectDesign,options:{threshold:[0,.001,.5,.999,1]}},expression:"{\n          handler: onIntersectDesign,\n          options: {\n            threshold: [0, 0.001, 0.5, 0.999, 1.0]\n          }\n      }"}],staticClass:"component-wrapper upper",attrs:{id:"design-page"}},[a("Design")],1)])],1),a("NavDrawer"),a("NavButton")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{absolute:"",color:"#EFEBE9","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[a("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),a("v-toolbar-title",[a("v-btn",{attrs:{text:"",href:"#home-page",target:"_self"}},[a("span",{staticClass:"font-weight-light"},[t._v("Jaeyoung")]),a("span",[t._v("Lee")])])],1),a("v-spacer"),a("div",{staticClass:"d-none d-lg-block"},[a("v-btn",{attrs:{href:"#home-page",target:"_self",text:""}},[a("span",{staticClass:"mr-2",class:this.$store.state.isIntersectingHome?"active-btn":"deactive-btn"},[t._v("main")])]),a("v-btn",{attrs:{href:"#about-page",target:"_self",text:""}},[a("span",{staticClass:"mr-2",class:this.$store.state.isIntersectingAbout?"active-btn":"deactive-btn"},[t._v("about")])]),a("v-btn",{attrs:{href:"#projects-page",target:"_self",text:""}},[a("span",{staticClass:"mr-2",class:this.$store.state.isIntersectingProjects?"active-btn":"deactive-btn"},[t._v("projects")])])],1)],1)},o=[],c={data:function(){return{collapseOnScroll:!0,activeColor:"red"}},methods:{toggleDrawer:function(){this.$store.state.drawer=!this.$store.state.drawer,console.log("hi")}}},l=c,d=(a("6052"),a("2877")),u=a("6544"),v=a.n(u),p=a("40dc"),m=a("5bc1"),g=a("8336"),f=a("2fa4"),h=a("2a7f"),b=Object(d["a"])(l,r,o,!1,null,"11cfbd8a",null),_=b.exports;v()(b,{VAppBar:p["a"],VAppBarNavIcon:m["a"],VBtn:g["a"],VSpacer:f["a"],VToolbarTitle:h["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{id:"app-bar",absolute:"",color:"transparent","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[a("v-app-bar-nav-icon",{staticStyle:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),a("v-toolbar-title",[a("v-btn",{attrs:{href:"/",target:"_self",text:""}},[a("span",{staticClass:"font-weight-light"},[t._v("Jaeyoung")]),a("span",[t._v("Lee")])])],1),a("v-spacer"),a("div",{staticClass:"d-none d-lg-block"},[a("v-btn",{attrs:{href:"/about",target:"_self",text:""}},[a("span",{staticClass:"mr-2"},[t._v("about")])]),a("v-btn",{attrs:{href:"/projects",target:"_self",text:""}},[a("span",{staticClass:"mr-2"},[t._v("projects")])]),a("v-btn",{attrs:{href:"/about",target:"_self",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Design")])])],1)],1)},x=[],w={data:function(){return{collapseOnScroll:!0}},methods:{toggleDrawer:function(){this.$store.state.drawer=!this.$store.state.drawer}}},k=w,C=(a("6906"),Object(d["a"])(k,y,x,!1,null,"e7569a62",null)),V=C.exports;v()(C,{VAppBar:p["a"],VAppBarNavIcon:m["a"],VBtn:g["a"],VSpacer:f["a"],VToolbarTitle:h["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{color:"#EFEBE9",absolute:"",temporary:""},model:{value:t.$store.state.drawer,callback:function(e){t.$set(t.$store.state,"drawer",e)},expression:"$store.state.drawer"}},[n("v-list-item",[n("v-list-item-avatar",[n("img",{attrs:{src:a("1ed3"),alt:"Jaeyoung Lee"}})]),n("v-list-item-content",[n("v-list-item-title",[n("span",{staticClass:"font-weight-light",staticStyle:{"text-transform":"uppercase","letter-spacing":"2px"}},[t._v("Jaeyoung")]),n("span",{staticStyle:{"text-transform":"uppercase","letter-spacing":"2px"}},[t._v("Lee")])])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",ripple:"",href:e.link,target:"_self"}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[n("span",[t._v(t._s(e.title))])])],1)],1)})),1)],1)},j=[],I={name:"NavDrawer",data:function(){return{items:[{title:"Home",icon:"mdi-home",link:"#home-page",isActive:!1},{title:"About",icon:"mdi-information",link:"#about-page",isActive:this.$store.state.isIntersectingAbout},{title:"Projects",icon:"mdi-view-dashboard",link:"#projects-page",isActive:this.$store.state.isIntersectingProjects},{title:"Design",icon:"mdi-image",link:"#about-page",isActive:!1}]}}},A=I,P=a("ce7e"),L=a("132d"),D=a("8860"),T=a("da13"),E=a("8270"),O=a("5d23"),B=a("34c3"),N=a("f774"),M=Object(d["a"])(A,S,j,!1,null,null,null),H=M.exports;v()(M,{VDivider:P["a"],VIcon:L["a"],VList:D["a"],VListItem:T["a"],VListItemAvatar:E["a"],VListItemContent:O["a"],VListItemIcon:B["a"],VListItemTitle:O["c"],VNavigationDrawer:N["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-btn-wrapper"},[a("span",[a("v-btn",{attrs:{color:"#b39377",fab:"",dark:!0,"x-small":!this.$store.state.isIntersectingHome,small:this.$store.state.isIntersectingHome,color:this.$store.state.isIntersectingHome?"#cfb997":"#e0d0b9",href:"#home-page"}},[a("v-icon",[t._v("mdi-home")])],1)],1),a("span",[a("v-btn",{attrs:{color:"#b39377",fab:"",dark:!0,"x-small":!this.$store.state.isIntersectingAbout,small:this.$store.state.isIntersectingAbout,color:this.$store.state.isIntersectingAbout?"#cfb997":"#e0d0b9",href:"#about-page"}},[a("v-icon",[t._v("mdi-information")])],1)],1),a("span",[a("v-btn",{attrs:{color:"#b39377",fab:"",dark:!0,"x-small":!this.$store.state.isIntersectingProjects,small:this.$store.state.isIntersectingProjects,color:this.$store.state.isIntersectingProjects?"#cfb997":"#e0d0b9",href:"#projects-page"}},[a("v-icon",[t._v("mdi-view-dashboard")])],1)],1),a("span",[a("v-btn",{attrs:{color:"#b39377",fab:"",dark:!0,"x-small":!this.$store.state.isIntersectingDesign,small:this.$store.state.isIntersectingDesign,color:this.$store.state.isIntersectingDesign?"#cfb997":"#e0d0b9",href:"#design-page"}},[a("v-icon",[t._v("mdi-image")])],1)],1)])},R=[],F={methods:{handleBtnClick:function(){console.log("hi")}}},z=F,G=(a("9fb0"),Object(d["a"])(z,J,R,!1,null,"24d48c74",null)),Q=G.exports;v()(G,{VBtn:g["a"],VIcon:L["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"content"}},[n("div",{staticClass:"upper name_txt ma-3"},[t._m(0),n("TypeAnimation")],1),n("div",{staticClass:"text-center"},t._l(t.etc,(function(e,a){return n("v-chip",{key:a,staticClass:"ma-1 upper",staticStyle:{"font-size":"0.7rem","letter-spacing":"1px"},attrs:{small:t.$vuetify.breakpoint.xsOnly}},[n("v-icon",{attrs:{"x-small":t.$vuetify.breakpoint.xsOnly,left:"",color:e.color}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),1),n("div",{staticClass:"intro_txt pl-10 pr-10 mb-n10",style:t.$vuetify.breakpoint.xsOnly?"max-width: 100vw; margin-bottom: 10rem;":"max-width: 50vw;"},[t.$vuetify.breakpoint.xsOnly?t._e():n("v-icon",{staticClass:"mb-7"},[t._v("mdi-format-quote-open")]),t._v(" Welcome to my personal website! "),t.$vuetify.breakpoint.xsOnly?t._e():n("v-icon",{staticClass:"mb-7"},[t._v("mdi-format-quote-close")])],1),n("div",{class:t.$vuetify.breakpoint.xsOnly?"mt-10":""},[n("v-img",{staticClass:"mt-n10",staticStyle:{margin:"0 auto"},attrs:{src:a("8b9e"),eager:"",contain:"","max-width":t.$vuetify.breakpoint.xsOnly?"95vw":"60vw"}})],1)])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{"font-weight":"200","border-bottom":"1px solid #757575","padding-bottom":"5px"}},[t._v(" Jaeyoung "),a("span",{staticStyle:{"font-weight":"400"}},[t._v("Lee")])])}],W=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"space-around"}}),a("v-carousel",{attrs:{cycle:"",interval:"6000",height:"400","hide-delimiter-background":"","show-arrows-on-hover":"","delimiter-icon":"mdi-minus"}},t._l(t.slides,(function(e,n){return a("v-carousel-item",{key:n},[a("v-sheet",{attrs:{color:t.colors[n],height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"display-3"},[t._v(t._s(e)+" Slide")])])],1)],1)})),1)],1)}),Y=[],K={data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},X=K,Z=a("5e66"),tt=a("3e35"),et=a("0fd9"),at=a("8dd9"),nt=Object(d["a"])(X,W,Y,!1,null,null,null),it=nt.exports;v()(nt,{VCarousel:Z["a"],VCarouselItem:tt["a"],VRow:et["a"],VSheet:at["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",t._b({attrs:{fixed:"",padless:t.padless}},"v-footer",t.localAttrs,!1),[a("v-card",{staticClass:"lighten-1",attrs:{flat:"",tile:"",height:"60px",width:"100%"}})],1)},rt=[],ot={data:function(){return{icons:["mdi-home","mdi-email","mdi-calendar","mdi-delete"],items:["default","absolute","fixed"],padless:!1,variant:"default"}},computed:{localAttrs:function(){var t={};return"default"===this.variant?(t.absolute=!1,t.fixed=!1):t[this.variant]=!0,t}}},ct=ot,lt=a("b0af"),dt=a("553a"),ut=Object(d["a"])(ct,st,rt,!1,null,null,null),vt=ut.exports;v()(ut,{VCard:lt["a"],VFooter:dt["a"]});var pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo"},[a("span",{staticClass:"demo-item"},[a("span",{staticClass:"demo-item_inner"},[t._v("Fullstack developer")])]),a("span",{staticClass:"demo-item"},[a("span",{staticClass:"demo-item_inner"},[t._v("Software Engineer")])]),a("span",{staticClass:"demo-item"},[a("span",{staticClass:"demo-item_inner"},[t._v("Data Scientist")])])])}],gt=(a("5ea9"),{}),ft=Object(d["a"])(gt,pt,mt,!1,null,"5d6de6a1",null),ht=ft.exports;window.$=a("1157"),window.JQuery=a("1157");var bt={name:"home",components:{MainCarousel:it,WindowFooter:vt,TypeAnimation:ht},data:function(){return{xPos:0,yPos:0,etc:[{title:"Programming",color:"#4c75a3",icon:"mdi-account-group",rating:""},{title:"Algorithm",color:"#4c75a3",icon:"mdi-voice",rating:""},{title:"Design",color:"#4c75a3",icon:"mdi-party-popper",rating:""}]}},methods:{someMethod:function(t){t.pageX,t.pageY;var e=25,a=e/$(window).height(),n=e/$(window).width(),i=t.pageX-$(window).width()/2,s=t.pageY-$(window).height()/2;this.xPos=n*i*-1-25,this.yPos=a*s*-1-50},getPos:function(t){return"".concat(this.xPos,"px ").concat(this.yPos,"px")}}},_t=bt,yt=(a("7adc"),a("cc20")),xt=a("adda"),wt=Object(d["a"])(_t,U,q,!1,null,"6f8f121c",null),kt=wt.exports;v()(wt,{VChip:yt["a"],VIcon:L["a"],VImg:xt["a"]});var Ct=a("f820"),Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back",class:t.$vuetify.breakpoint.xsOnly?"back pa-5":"back"},[a("v-container",{attrs:{"fill-height":"",fluid:"","justify-center":"","align-center":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-flex",{staticClass:"pt-10",attrs:{shrink:"",xs11:"",md8:"","justify-center":""}},[a("div",{staticClass:"cat_title"},[t._v("Projects")]),a("ProjectCard"),a("v-sheet",{staticClass:"px-3 pt-3 pb-n10",attrs:{color:"transparent"}},[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}})],1),a("v-sheet",{staticClass:"tbu-text",staticStyle:{"text-align":"center","margin-bottom":"3rem",display:"block"},attrs:{"justify-center":"",color:"transparent"}},[a("span",[t._v("More projects will be updated soon!")])])],1)],1)],1)],1)],1)},St=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},t._l(t.cardsData,(function(e,i){return n("v-flex",{key:i,attrs:{xs12:"",md4:"","pa-5":""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var s=i.hover;return[n("v-card",{staticClass:"mx-auto",attrs:{elevation:s?12:2,"max-width":"350",pa10:""}},[n("v-img",{staticClass:"black--text align-end",attrs:{"aspect-ratio":"1",height:"200px",contain:"",src:e.main_img,"lazy-src":a("1ed3"),gradient:"to top right, rgba(100,115,201,.1), rgba(25,32,72,.2)"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),n("v-card-title",[t._v(t._s(e.title_txt))]),n("v-card-subtitle",{staticClass:"pb-1"},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("Keywords:")]),t._v(" "+t._s(e.dev_stacks)+" ")]),n("v-card-text",{staticClass:"text--primary mb-n5"},t._l(e.main_txt_arr,(function(e,a){return n("div",{key:a},[t._v(t._s(e))])})),0),n("v-card-actions",[n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(t){e.show=!e.show}}},[t._v("Related Link")]),n("v-overlay",{attrs:{opacity:"0.80",zIndex:"5",value:e.show}},[n("div",{staticStyle:{height:"100vh",width:"100vw","text-align":"center"},on:{click:function(t){e.show=!1}}}),n("div",{attrs:{id:"overlay-center-wrapper"}},[n("span",[t._v(" Link to "),n("v-icon",{attrs:{"x-large":""}},[t._v(t._s(e.link_icon))])],1),n("span",[n("v-btn",{attrs:{"ma-2":"","x-large":"",rounded:"",outlined:"",color:"white",href:e.related_link}},[t._v("Sure!")]),n("v-btn",{attrs:{"ma-2":"","x-large":"",rounded:"",outlined:"",color:"white"},on:{click:function(t){e.show=!1}}},[t._v("Nope!")])],1)])])],1)],1)]}}],null,!0)})],1)})),1)},It=[],$t={data:function(){return{cardsData:[{title_txt:"kor-string-similarity",dev_stacks:"Javascript, Node.js",main_txt_arr:["Sørensen–Dice coefficient and NphoEd(Normallized phoneme-based metric)-based string similarity calculating NPM module."],main_img:a("0c9a"),show:!1,hover:!1,related_link:"https://www.npmjs.com/package/kor-string-similarity",link_icon:"mdi-npm-variant-outline"},{title_txt:"Paper plane",dev_stacks:"Vue.js, Vuex, Node.js, Express.js, ElementUI",main_txt_arr:["Memo-based Social diary SPA build with Vue.js, Vuex, and Element UI."],main_img:a("e590"),show:!1,hover:!1,related_link:"https://github.com/osam2019/WEB_PaperPlane_Solo",link_icon:"mdi-github-circle"},{title_txt:"Trouble on Beryl Isle",dev_stacks:"Unity, C#, Blender, Substance Designer",main_txt_arr:["Third-person action adventure video game developed using Unity C# and 3D design tools."],main_img:a("3581"),show:!1,hover:!1,related_link:"https://vgdev.gtorg.gatech.edu/game/trouble-on-beryl-isle/",link_icon:"mdi-application"}]}}},At=$t,Pt=(a("74ae"),a("99d9")),Lt=a("0e8f"),Dt=a("ce87"),Tt=a("a722"),Et=a("a797"),Ot=a("490a"),Bt=Object(d["a"])(At,jt,It,!1,null,"700c4b46",null),Nt=Bt.exports;v()(Bt,{VBtn:g["a"],VCard:lt["a"],VCardActions:Pt["a"],VCardSubtitle:Pt["b"],VCardText:Pt["c"],VCardTitle:Pt["d"],VFlex:Lt["a"],VHover:Dt["a"],VIcon:L["a"],VImg:xt["a"],VLayout:Tt["a"],VOverlay:Et["a"],VProgressCircular:Ot["a"],VRow:et["a"]});var Mt={components:{MainCarousel:it,ProjectCard:Nt}},Ht=Mt,Jt=(a("d4d0"),a("a523")),Rt=a("3129"),Ft=Object(d["a"])(Ht,Vt,St,!1,null,"0a943ca7",null),zt=Ft.exports;v()(Ft,{VContainer:Jt["a"],VFlex:Lt["a"],VLayout:Tt["a"],VRow:et["a"],VSheet:at["a"],VSkeletonLoader:Rt["a"]});var Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back pa-10"},[n("v-content",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"","pb-10":""}},[n("v-flex",{attrs:{shrink:"",xs11:"",md10:""}},[n("v-row",[n("span",{staticClass:"cat_title"},[t._v("Design")])]),n("v-row",{staticClass:"ma-5 cat_subsubtitle",staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[n("v-img",{attrs:{src:a("379d"),"max-height":"400",contain:""}})],1),n("v-row",{staticClass:"mb-2 cat_subsubtitle",staticStyle:{"text-align":"center"},attrs:{justify:"center"}}),n("v-row",{staticClass:"ma-5 cat_subsubtitle",staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[n("span",{staticStyle:{"font-size":"0.75rem"}},[t._v("Design Page is under construction")])]),n("v-row",{staticClass:"mb-2",staticStyle:{"text-align":"center"},attrs:{justify:"center"}})],1)],1)],1)],1)],1)},Qt=[],Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[a("v-icon",[t._v("mdi-home")])],1)])},qt=[],Wt=(a("42d0"),{}),Yt=Object(d["a"])(Wt,Ut,qt,!1,null,"f57f0c4a",null),Kt=Yt.exports;v()(Yt,{VIcon:L["a"]});var Xt={components:{MainCarousel:it,ProjectCard:Nt,HoriAnimation:Kt},data:function(){return{image:{under_construction:a("379d")}}}},Zt=Xt,te=(a("1ec9"),a("a75b")),ee=Object(d["a"])(Zt,Gt,Qt,!1,null,"a8afb84c",null),ae=ee.exports;v()(ee,{VContainer:Jt["a"],VContent:te["a"],VFlex:Lt["a"],VImg:xt["a"],VLayout:Tt["a"],VRow:et["a"]});var ne={name:"App",components:{NavBar:_,TransparentNavBar:V,NavButton:Q,NavDrawer:H,Home:kt,About:Ct["default"],Projects:zt,Design:ae},data:function(){return{offsetTop:0}},methods:{onScroll:function(t){this.isUserScrolling=window.scrollY>0,this.offsetTop=t.target.scrollTop,console.log(this.offsetTop)},onIntersectHome:function(t,e){this.$store.state.isIntersectingHome=t[0].intersectionRatio>.001,this.intersectLogTest(t[0])},onIntersectAbout:function(t,e){this.$store.state.isIntersectingAbout=t[0].intersectionRatio>.001,this.intersectLogTest(t[0])},onIntersectProjects:function(t,e){this.$store.state.isIntersectingProjects=t[0].intersectionRatio>.001,this.intersectLogTest(t[0])},onIntersectDesign:function(t,e){this.$store.state.isIntersectingDesign=t[0].intersectionRatio>.001,this.intersectLogTest(t[0])},intersectLogTest:function(t){}}},ie=ne,se=(a("55a1"),a("7496")),re=a("269a"),oe=a.n(re),ce=a("90a2"),le=Object(d["a"])(ie,i,s,!1,null,"690dcc40",null),de=le.exports;v()(le,{VApp:se["a"],VCard:lt["a"],VSheet:at["a"]}),oe()(le,{Intersect:ce["a"]});a("d3b7");var ue=a("8c4f");n["a"].use(ue["a"]);var ve=[{path:"/",alias:"/home",name:"home",component:kt},{path:"/about",name:"about",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}},{path:"/projects",name:"projects",component:zt}],pe=new ue["a"]({mode:"history",base:"/",routes:ve}),me=pe,ge=a("2f62");n["a"].use(ge["a"]);var fe=new ge["a"].Store({state:{drawer:!1,isIntersectingHome:!1,isIntersectingAbout:!1,isIntersectingProjects:!1,isIntersectingDesign:!1},mutations:{},actions:{},modules:{}}),he=(a("5363"),a("d1e78"),a("f309"));n["a"].use(he["a"]);var be=new he["a"]({icons:{iconfont:"mdiSvg"}}),_e=(a("a0a0"),a("a45e")),ye=a.n(_e);window.$=a("1157"),window.JQuery=a("1157"),n["a"].config.productionTip=!1,n["a"].use(ye.a),new n["a"]({router:me,store:fe,vuetify:be,render:function(t){return t(de)}}).$mount("#app")},"5b12":function(t,e,a){},"5b18":function(t,e,a){"use strict";var n=a("72bd"),i=a.n(n);i.a},"5ea9":function(t,e,a){"use strict";var n=a("d51d"),i=a.n(n);i.a},6052:function(t,e,a){"use strict";var n=a("c717"),i=a.n(n);i.a},6906:function(t,e,a){"use strict";var n=a("fb09"),i=a.n(n);i.a},"72bd":function(t,e,a){},"73cf":function(t,e,a){},"74ad":function(t,e,a){},"74ae":function(t,e,a){"use strict";var n=a("d136"),i=a.n(n);i.a},"7adc":function(t,e,a){"use strict";var n=a("077e"),i=a.n(n);i.a},"7e26":function(t,e,a){"use strict";var n=a("73cf"),i=a.n(n);i.a},"8b9e":function(t,e,a){t.exports=a.p+"img/main_img01.86f6aeb0.png"},"9fb0":function(t,e,a){"use strict";var n=a("5b12"),i=a.n(n);i.a},a9ad3:function(t,e,a){},bccb:function(t,e,a){"use strict";var n=a("3fec"),i=a.n(n);i.a},bf96:function(t,e,a){},c19d:function(t,e,a){},c717:function(t,e,a){},cf4e:function(t,e,a){"use strict";var n=a("c19d"),i=a.n(n);i.a},d125:function(t,e,a){},d136:function(t,e,a){},d4d0:function(t,e,a){"use strict";var n=a("a9ad3"),i=a.n(n);i.a},d51d:function(t,e,a){},e590:function(t,e,a){t.exports=a.p+"img/paperplane01.b22115e4.png"},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back",attrs:{id:"app"}},[n("v-content",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"","pb-10":""}},[n("v-flex",{attrs:{shrink:"",xs10:"",md9:""}},[n("v-row",[n("span",{staticClass:"cat_title"},[t._v("About")])]),n("v-row",[n("span",{staticClass:"cat_subtitle"},[t._v("About & Contacts")])]),n("v-row",[n("v-col",{staticStyle:{"text-align":"center"},attrs:{xs12:"",md6:""}},[n("v-avatar",{attrs:{tile:"",size:"250"}},[n("img",{attrs:{src:a("1ed3"),alt:"John"}})])],1),n("v-col",{staticStyle:{"text-align":"center"},attrs:{xs12:"",md6:""}},[n("p",{staticClass:"contacts"},[n("span",{staticClass:"ma-1",staticStyle:{"letter-spacing":"4px","font-size":"2rem"}},[t._v(" JAEYOUNG "),n("span",{staticStyle:{"font-weight":"400"}},[t._v("LEE")])]),n("span",[n("v-chip",{staticClass:"ma-1",attrs:{color:"grey lighten-1","text-color":"white"}},[n("v-avatar",[n("v-icon",{attrs:{small:""}},[t._v("mdi-email")])],1),t._v("jaeleeps@gmail.com ")],1),n("v-chip",{staticClass:"ma-1",attrs:{color:"grey lighten-1","text-color":"white"}},[n("v-avatar",[n("v-icon",{attrs:{small:""}},[t._v("mdi-cellphone-android")])],1),t._v("8210-2309-4277 ")],1)],1),n("span",{staticStyle:{"margin-top":"0.5rem"}},t._l(t.contacts_btn,(function(e,a){return n("span",{key:a,staticClass:"ma-1"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[n("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:e.contact_color,href:e.contact_url}},i),[n("v-icon",[t._v(t._s(e.contact_icon))])],1)]}}],null,!0)},[n("span",[t._v(t._s(e.contact_txt))])])],1)})),0)])])],1),n("v-row",{staticClass:"mb-2 cat_subsubtitle",staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[n("span",{staticStyle:{"font-size":"0.75rem"}},[t._v(" click to know more about me ")])]),n("v-row",{staticClass:"mb-2",staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[n("DownArrow")],1),n("v-divider"),n("v-row",{staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[n("v-btn",{attrs:{color:this.show_exp?"grey lighten-1":"grey darken-4",text:""},on:{click:function(e){return t.handleShowExp()}}},[t._v("Experiences")]),n("v-icon",[t._v("mdi-slash-forward ")]),n("v-btn",{attrs:{color:this.show_skills?"grey lighten-1":"grey darken-4",text:""},on:{click:function(e){return t.handleShowSkills()}}},[t._v("Skills")])],1),n("v-divider",{staticClass:"mb-5"}),n("transition",{attrs:{name:"fade"}},[n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.show_exp,expression:"show_exp"}]},[n("span",{staticClass:"cat_subtitle"},[t._v("Academics & Work Experiences")]),n("div",{staticClass:"ml-n10 mt-5"},[n("AboutTimeline"),n("v-sheet",{staticStyle:{"text-align":"center","margin-top":"2rem"},attrs:{color:"transparent"}},[n("v-btn",{staticClass:"ma-5",attrs:{fab:"",outlined:"",text:"",color:"grey darken-1"},on:{click:function(e){return t.handleShowExp()}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-btn",{staticClass:"ma-5",attrs:{fab:"",outlined:"",text:""},on:{click:function(e){return t.handleShowSkills()}}},[t._v("skiils")])],1)],1)])],1),n("transition",{attrs:{name:"fade"}},[n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.show_skills,expression:"show_skills"}]},[n("v-layout",{attrs:{"flex-wrap":""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("p",{staticClass:"about-para"},[n("span",{staticClass:"cat_subtitle"},[t._v("Skills")])])]),n("v-flex",{attrs:{xs12:"",md6:""}},[n("span",{staticClass:"cat_subsubtitle ma-5"},[t._v("Programming")]),n("SkillsCard",{staticStyle:{margin:"1rem"},attrs:{skill_type:"programming"}})],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("span",{staticClass:"cat_subsubtitle ma-5"},[t._v("Design & Modeling")]),n("SkillsCard",{staticStyle:{margin:"1rem"},attrs:{skill_type:"design"}})],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("span",{staticClass:"cat_subsubtitle ma-5"},[t._v("Language")]),n("SkillsCard",{staticStyle:{margin:"1rem"},attrs:{skill_type:"language"}})],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("span",{staticClass:"cat_subsubtitle ma-5"},[t._v("ETC")]),n("SkillsCard",{staticStyle:{margin:"1rem"},attrs:{skill_type:"etc"}})],1),n("v-flex",{attrs:{xs12:"",md12:""}},[n("v-sheet",{staticStyle:{"text-align":"center","margin-top":"2rem"},attrs:{color:"transparent"}},[n("v-btn",{staticClass:"ma-5",attrs:{fab:"",outlined:"",text:"",color:"grey darken-1"},on:{click:function(e){return t.handleShowSkills()}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-btn",{staticClass:"ma-5",attrs:{fab:"",outlined:"",text:""},on:{click:function(e){return t.handleShowExp()}}},[t._v("Exp")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-4"},[a("v-card-text",t._l(t.getTypes(),(function(e,n){return a("v-menu",{key:n,attrs:{bottom:"",right:"",transition:"scale-transition",origin:"top left"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-chip",t._g({staticClass:"ma-2",attrs:{pill:""}},i),[a("v-icon",{attrs:{left:"",color:e.color}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)]}}],null,!0)},[a("v-card",{attrs:{width:"300"}},[a("v-list",{attrs:{dark:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.menu=!1}}},[a("v-icon",[t._v("mdi-close-circle")])],1)],1)],1)],1),a("v-list",[a("v-list-item",{on:{click:function(){}}},[a("span",{staticClass:"lang-description"},[t._v(" "+t._s(e.rating)+" ")])])],1)],1)],1)})),1)],1)},r=[],o={props:["skill_type"],methods:{getTypes:function(){return"programming"==this.skill_type?this.programming:"design"==this.skill_type?this.design:"language"==this.skill_type?this.language:"etc"==this.skill_type?this.etc:void 0}},data:function(){return{programming:[{title:"Javascript",color:"warning",icon:"mdi-language-javascript",rating:5},{title:"Java",color:"red",icon:"mdi-language-java",rating:5},{title:"Python",color:"primary",icon:"mdi-language-python",rating:5},{title:"HTML/CSS",color:"amber",icon:"mdi-language-html5",rating:5},{title:"Vue.js",color:"teal darken-4",icon:"mdi-vuejs",rating:"Vuetify"},{title:"React.js",color:"purple",icon:"mdi-react",rating:5},{title:"Node.js",color:"green",icon:"mdi-nodejs",rating:5},{title:"SQL, MongoDB",color:"primary",icon:"mdi-database",rating:"Able to design a basic DB using MySQL and MongoDB and connect it to fron-end webpage "},{title:"C++",color:"indigo",icon:"mdi-language-cpp",rating:5},{title:"Go Lang",color:"teal accent-3",icon:"mdi-language-go",rating:"신여진 병신"},{title:"Unity",color:"grey darken-4",icon:"mdi-unity",rating:""}],design:[{title:"Adobe Photoshop",color:"blue",icon:"mdi-adobe",rating:""},{title:"Adobe Illustrator",color:"orange",icon:"mdi-adobe",rating:""},{title:"Adobe InDesign",color:"deep-purple",icon:"mdi-adobe",rating:""},{title:"Blender",color:"orange",icon:"mdi-blender-software",rating:""},{title:"Substance Designer",color:"deep-orange",icon:"mdi-hexagon",rating:""},{title:"Rhino",color:"red",icon:"mdi-video-3d",rating:""}],language:[{title:"Korean",color:"blue",icon:"mdi-alpha-k-circle",rating:"Native"},{title:"English",color:"green",icon:"mdi-alpha-e-circle",rating:"Native"},{title:"Chinese",color:"red",icon:"mdi-alpha-c-circle",rating:""}],etc:[{title:"Leadership",color:"red",icon:"mdi-account-group",rating:""},{title:"Public Speaking/Presentation",color:"deep-purple",icon:"mdi-voice",rating:""},{title:"Event Organizing",color:"light-blue",icon:"mdi-party-popper",rating:""},{title:"Marketing/Advertisement",color:"green",icon:"mdi-shopping",rating:""}]}}},c=o,l=(a("5b18"),a("2877")),d=a("6544"),u=a.n(d),v=a("8336"),p=a("b0af"),m=a("99d9"),g=a("cc20"),f=a("132d"),h=a("8860"),b=a("da13"),_=a("1800"),y=a("8270"),x=a("5d23"),w=a("e449"),k=Object(l["a"])(c,s,r,!1,null,"2138adb0",null),C=k.exports;u()(k,{VBtn:v["a"],VCard:p["a"],VCardText:m["c"],VChip:g["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemAction:_["a"],VListItemAvatar:y["a"],VListItemContent:x["a"],VListItemTitle:x["c"],VMenu:w["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-4"},[a("v-card-text",t._l(t.tags,(function(e,n){return a("v-menu",{key:n,attrs:{bottom:"",right:"",transition:"scale-transition",origin:"top left"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-chip",t._g({staticClass:"ma-2",attrs:{pill:""}},i),[a("v-icon",{attrs:{left:"",color:e.color}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)]}}],null,!0)},[a("v-card",{attrs:{width:"300"}},[a("v-list",{attrs:{dark:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))]),a("v-list-item-subtitle",[t._v(t._s(e.rating))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.menu=!1}}},[a("v-icon",[t._v("mdi-close-circle")])],1)],1)],1)],1)],1)],1)})),1)],1)},S=[],j={data:function(){return{tags:[{title:"Adobe Photoshop",color:"blue",icon:"mdi-adobe",rating:""},{title:"Adobe Illustrator",color:"orange",icon:"mdi-adobe",rating:""},{title:"Adobe InDesign",color:"deep-purple",icon:"mdi-adobe",rating:""},{title:"Blender",color:"orange",icon:"mdi-blender-software",rating:""},{title:"Substance Designer",color:"deep-orange",icon:"mdi-hexagon",rating:""},{title:"Rhino",color:"red",icon:"mdi-video-3d",rating:""}]}}},I=j,$=Object(l["a"])(I,V,S,!1,null,null,null),A=$.exports;u()($,{VBtn:v["a"],VCard:p["a"],VCardText:m["c"],VChip:g["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemAction:_["a"],VListItemAvatar:y["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMenu:w["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-4"},[a("v-card-text",t._l(t.getTypes(),(function(e,n){return a("v-menu",{key:n,attrs:{bottom:"",right:"",transition:"scale-transition",origin:"top left"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-chip",t._g({staticClass:"ma-2",attrs:{pill:""}},i),[a("v-icon",{attrs:{left:"",color:e.color}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)]}}],null,!0)},[a("v-card",{attrs:{width:"300"}},[a("v-list",{attrs:{dark:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.menu=!1}}},[a("v-icon",[t._v("mdi-close-circle")])],1)],1)],1)],1),a("v-list",[a("v-list-item",{on:{click:function(){}}},[a("span",{staticClass:"lang-description"},[t._v(" "+t._s(e.rating)+" ")])])],1)],1)],1)})),1)],1)},L=[],D={props:["skill_type"],methods:{getTypes:function(){if("programming"==this.skill_type)return this.programming}},data:function(){return{programming:[{title:"Javascript",color:"warning",icon:"mdi-language-javascript",rating:5},{title:"Java",color:"red",icon:"mdi-language-java",rating:5},{title:"Python",color:"primary",icon:"mdi-language-python",rating:5},{title:"HTML/CSS",color:"amber",icon:"mdi-language-html5",rating:5},{title:"Vue.js",color:"teal darken-4",icon:"mdi-vuejs",rating:"Vuetify"},{title:"React.js",color:"purple",icon:"mdi-react",rating:5},{title:"Node.js",color:"green",icon:"mdi-nodejs",rating:5},{title:"SQL, MongoDB",color:"primary",icon:"mdi-database",rating:"Able to design a basic DB using MySQL and MongoDB and connect it to fron-end webpage "},{title:"C++",color:"indigo",icon:"mdi-language-cpp",rating:5},{title:"Go Lang",color:"primary",icon:"mdi-language-python",rating:5},{title:"Unity",color:"primary",icon:"mdi-unity",rating:5}],design:[{title:"Adobe Photoshop",color:"blue",icon:"mdi-adobe",rating:""},{title:"Adobe Illustrator",color:"orange",icon:"mdi-adobe",rating:""},{title:"Adobe InDesign",color:"deep-purple",icon:"mdi-adobe",rating:""},{title:"Blender",color:"orange",icon:"mdi-blender-software",rating:""},{title:"Substance Designer",color:"deep-orange",icon:"mdi-hexagon",rating:""},{title:"Rhino",color:"red",icon:"mdi-video-3d",rating:""}]}}},T=D,E=(a("bccb"),Object(l["a"])(T,P,L,!1,null,"b0d85250",null)),O=E.exports;u()(E,{VBtn:v["a"],VCard:p["a"],VCardText:m["c"],VChip:g["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemAction:_["a"],VListItemAvatar:y["a"],VListItemContent:x["a"],VListItemTitle:x["c"],VMenu:w["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.xsOnly}},t._l(t.academics_data,(function(e,n){return a("v-timeline-item",{key:n,attrs:{color:"grey lighten-2",small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{domProps:{textContent:t._s(e.year)}})]},proxy:!0}],null,!0)},[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"title",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{staticStyle:{"font-weight":"600"},domProps:{textContent:t._s(e.cat_subtitle)}}),t._l(e.info,(function(e){return a("v-card-text",{key:e.length,staticStyle:{"padding-top":"0px","padding-bottom":"8px"},domProps:{textContent:t._s(e)}})}))],2)],1)})),1)},N=[],M={data:function(){return{academics_data:[{year:"2014~2017",title:"Hankuk Academy of Foreign Studides",cat_subtitle:"International Div. Class of 2017",info:[" Major in Chinese Language","GPA: 3.88/4.0"]},{year:"2017~",title:"Georgia Institue of Technology",cat_subtitle:"Bachelor of Science in Computer Science",info:["Minor in Industrial Design","Major GPA: 4.0/4.0","Overall GPA: 3.86/4.0"]},{year:"2018",title:"Naver D2 - Campus Q",cat_subtitle:"Node.js Developer",info:["CampusQ was a chatbot-integrated education platform developing start-up which won Naver D2 Campus Tech Attack Program and later became the foundation of Bloomchat(bloomchat.app)."]}]}}},H=M,J=a("8414"),R=a("1e06"),F=Object(l["a"])(H,B,N,!1,null,null,null),z=F.exports;u()(F,{VCard:p["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VTimeline:J["a"],VTimelineItem:R["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"arrow bounce"},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-chevron-down")])],1)},Q=[],U=(a("cf4e"),{}),q=Object(l["a"])(U,G,Q,!1,null,"436e0e8f",null),W=q.exports;u()(q,{VIcon:f["a"]});var Y={components:{DesignSkillsCard:A,ProgrammingSkillsCard:O,SkillsCard:C,AboutTimeline:z,DownArrow:W},methods:{handleShowExp:function(){return this.show_exp=!this.show_exp,console.log(this.show_exp),1==this.show_skills&&(this.show_skills=!1),0},handleShowSkills:function(){return this.show_skills=!this.show_skills,1==this.show_exp&&(this.show_exp=!1),0}},data:function(){return{skill_type:"",show_exp:!1,show_skills:!1,contacts_btn:[{contact_icon:"mdi-linkedin",contact_color:"#2867B2",contact_txt:"Link in LinkedIn",contact_url:"https://www.linkedin.com/in/jaeyoung-lee/"},{contact_icon:"mdi-github-circle",contact_color:"#333",contact_txt:"Link in Github",contact_url:"https://github.com/jaeleeps"},{contact_icon:"mdi-npm-variant-outline",contact_color:"#cc3534",contact_txt:"Link in NPM",contact_url:"https://www.npmjs.com/package/kor-string-similarity"}]}}},K=Y,X=(a("7e26"),a("8212")),Z=a("62ad"),tt=a("a523"),et=a("a75b"),at=a("ce7e"),nt=a("0e8f"),it=a("a722"),st=a("0fd9"),rt=a("8dd9"),ot=a("3a2f"),ct=Object(l["a"])(K,n,i,!1,null,"2fb76d36",null);e["default"]=ct.exports;u()(ct,{VAvatar:X["a"],VBtn:v["a"],VChip:g["a"],VCol:Z["a"],VContainer:tt["a"],VContent:et["a"],VDivider:at["a"],VFlex:nt["a"],VIcon:f["a"],VLayout:it["a"],VRow:st["a"],VSheet:rt["a"],VTooltip:ot["a"]})},fb09:function(t,e,a){}});
//# sourceMappingURL=app.86be0e62.js.map