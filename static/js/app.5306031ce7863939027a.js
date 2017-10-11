webpackJsonp([0],{QIjP:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"demo"}},[i("div",{staticClass:"example-text"},[t._v("\n    Here is an example of a tooltip with absolute placement.\n  ")]),t._v(" "),i("div",{staticClass:"example"},[i("tip",{attrs:{position:"auto-center"}},[i("div",{staticClass:"trigger"},[t._v("Hover")]),t._v(" "),i("span",{attrs:{slot:"tip"},slot:"tip"},[t._v("\n        Some additional content! "),i("strong",[t._v("HTML")]),t._v(" can be "),i("i",[t._v("used")]),t._v(" here..\n      ")])])],1),t._v(" "),i("div",{staticClass:"example-text"},[t._v("\n    Here is an example of a tooltip with fixed placement.\n  ")]),t._v(" "),i("div",{staticClass:"example"},[i("tip",{attrs:{fixed:!0,position:"auto-center",width:250}},[i("div",{staticClass:"trigger"},[t._v("Hover")]),t._v(" "),i("span",{attrs:{slot:"tip"},slot:"tip"},[t._v("\n        I am fixed to the page. Useful when trying to display outside of a\n        container with complicated css scrolling or positioning.\n      ")])])],1),t._v(" "),i("div",{staticClass:"example-text"},[t._v("\n    These tooltips use an auto position.\n  ")]),t._v(" "),i("div",{staticClass:"example-table"},[i("div",{staticClass:"example-row"},[i("div",{staticClass:"example-cell"},[i("tip",{attrs:{position:"auto-auto"}},[i("div",{staticClass:"trigger"},[t._v("Hover")]),t._v(" "),i("span",{attrs:{slot:"tip"},slot:"tip"},[t._v("\n            This tooltip is on the right.\n          ")])])],1),t._v(" "),i("div",{staticClass:"example-cell"},[i("tip",{attrs:{position:"auto-auto"}},[i("div",{staticClass:"trigger"},[t._v("Hover")]),t._v(" "),i("span",{attrs:{slot:"tip"},slot:"tip"},[t._v("\n            This tooltip is in the center.\n          ")])])],1),t._v(" "),i("div",{staticClass:"example-cell"},[i("tip",{attrs:{position:"auto-auto"}},[i("div",{staticClass:"trigger"},[t._v("Hover")]),t._v(" "),i("span",{attrs:{slot:"tip"},slot:"tip"},[t._v("\n            This tooltip is on the left.\n          ")])])],1)])])])},s=[];o._withStripped=!0;var n={render:o,staticRenderFns:s};e.a=n},Ri2j:function(t,e,i){"use strict";e.a={props:{position:{type:String,default:"auto-auto"},width:{type:Number,default:150},fixed:{type:Boolean,default:!1},offsetX:{type:Number,default:0},offsetY:{type:Number,default:0}},data:function(){return{hovered:!1,autoVertical:null,autoHorizontal:null,rect:null}},computed:{positionSplit:function(){return this.position.split("-")},positionVertical:function(){return this.positionSplit[0]},positionHorizontal:function(){return this.positionSplit[1]},vertical:function(){return"auto"!==this.positionVertical?this.positionVertical:this.autoVertical},horizontal:function(){return"auto"!==this.positionHorizontal?this.positionHorizontal:this.autoHorizontal},classes:function(){return["vt",this.fixed?"vt-fixed":null,this.vertical?"vt-"+this.vertical:null,this.horizontal?"vt-"+this.horizontal:null]},tipStyle:function(){return{width:this.width+"px"}},anchorStyle:function(){return this.rect&&this.hovered?this.fixed?{width:this.rect.width+"px",height:this.rect.height+"px",top:this.rect.top+this.offsetY+"px",left:this.rect.left+this.offsetY+"px",position:"fixed"}:{width:this.rect.width+"px",height:this.rect.height+"px",top:this.offsetY+"px",left:this.offsetY+"px",position:"absolute"}:{display:"none"}}},methods:{updateDimensions:function(t){t.clientY>document.documentElement.clientHeight/2?this.autoVertical="top":this.autoVertical="bottom",t.clientX<document.documentElement.clientWidth*(1/3)?this.autoHorizontal="right":t.clientX>document.documentElement.clientWidth*(2/3)?this.autoHorizontal="left":this.autoHorizontal="center",this.rect=this.$refs.trigger.getBoundingClientRect()},mouseEnter:function(t){this.updateDimensions(t),this.hovered=!0},mouseLeave:function(){this.hovered=!1}}}},S8VD:function(t,e,i){"use strict";function o(t){a||i("i6pJ")}var s=i("gxQM"),n=i("QIjP"),a=!1,r=i("VU/8"),l=o,u=r(s.a,n.a,l,"data-v-34adf496",null);u.options.__file="demo/Demo.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] Demo.vue: functional components are not supported with templates, they should use render functions."),e.a=u.exports},Sczw:function(t,e,i){"use strict";function o(t){a||i("rMVt")}var s=i("Ri2j"),n=i("eZIJ"),a=!1,r=i("VU/8"),l=o,u=r(s.a,n.a,l,"data-v-bc4ed894",null);u.options.__file="src/components/Tip.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] Tip.vue: functional components are not supported with templates, they should use render functions."),e.a=u.exports},"X+yM":function(t,e){},eZIJ:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{class:t.classes,on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}},[i("span",{ref:"trigger",staticClass:"vt-trigger"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"vt-tip-anchor",style:t.anchorStyle},[i("transition",{attrs:{name:"vt-tip-fade"}},[t.hovered?i("span",{staticClass:"vt-tip",style:t.tipStyle},[i("span",{staticClass:"vt-content"},[t._t("tip")],2)]):t._e()]),t._v(" "),i("transition",{attrs:{name:"vt-arrow-fade"}},[t.hovered?i("span",{staticClass:"vt-arrow"}):t._e()])],1)])},s=[];o._withStripped=!0;var n={render:o,staticRenderFns:s};e.a=n},gxQM:function(t,e,i){"use strict";var o=i("lVK7");e.a={components:{Tip:o.a}}},i6pJ:function(t,e){},iXgl:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("7+uW"),s=i("S8VD");o.a.config.productionTip=!1,new o.a({el:"#app",template:"<Demo/>",components:{Demo:s.a}})},lVK7:function(t,e,i){"use strict";var o=i("Sczw"),s=i("X+yM");i.n(s);i.d(e,"a",function(){return o.a});o.a},rMVt:function(t,e){}},["iXgl"]);
//# sourceMappingURL=app.5306031ce7863939027a.js.map