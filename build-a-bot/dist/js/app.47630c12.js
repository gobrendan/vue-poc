(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],p=0,u=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],r=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=r,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("85ec"),n=s.n(r);n.a},"060a":function(e,t,s){e.exports=s.p+"img/head-big-eye.9f2f3f06.png"},"0f71":function(e,t,s){e.exports=s.p+"img/torso-pouch.8e3ce338.png"},"133e":function(e,t,s){e.exports=s.p+"img/head-surveillance.33848bc6.png"},"1afe":function(e,t,s){e.exports=s.p+"img/build-a-bot-logo.bdca6725.png"},"1da9":function(e,t,s){e.exports=s.p+"img/head-friendly.365bb3bc.png"},2938:function(e,t,s){e.exports=s.p+"img/base-single-wheel.f1c9d0f1.png"},"2a20":function(e,t,s){e.exports=s.p+"img/arm-articulated-claw.075c1fa9.png"},"33f7":function(e,t,s){e.exports=s.p+"img/head-shredder.d2fba911.png"},"357f":function(e,t,s){e.exports=s.p+"img/arm-stubby-claw.eae016b3.png"},3606:function(e,t,s){e.exports=s.p+"img/robot-home.90d11f5b.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),s("main",[s("RobotBuilder")],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("nav",[r("ul",[r("li",{staticClass:"nav-item"},[r("img",{staticClass:"logo",attrs:{src:s("6649")}}),e._v(" Build-a-Bot ")])])])])}],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("button",{staticClass:"add-to-cart",on:{click:function(t){return e.addToCart()}}},[e._v("Add to Cart")]),s("div",{staticClass:"top-row"},[s("div",{staticClass:"top part"},[s("div",{staticClass:"robot-name"},[e._v(" "+e._s(e.selectedRobot.head.title)+" "),e.selectedRobot.head.onSale?s("span",{staticClass:"sale"},[e._v("Sale!")]):e._e()]),s("img",{attrs:{src:e.selectedRobot.head.src,title:"head"}}),s("button",{staticClass:"prev-selector",on:{click:function(t){return e.selectPreviousHead()}}},[e._v("◄")]),s("button",{staticClass:"next-selector",on:{click:function(t){return e.selectNextHead()}}},[e._v("►")])])]),s("div",{staticClass:"middle-row"},[s("div",{staticClass:"left part"},[s("img",{attrs:{src:e.selectedRobot.leftArm.src,title:"left arm"}}),s("button",{staticClass:"prev-selector",on:{click:function(t){return e.selectPreviousLeftArm()}}},[e._v("▲")]),s("button",{staticClass:"next-selector",on:{click:function(t){return e.selectNextLeftArm()}}},[e._v("▼")])]),s("div",{staticClass:"center part"},[s("img",{attrs:{src:e.selectedRobot.torso.src,title:"center part"}}),s("button",{staticClass:"prev-selector",on:{click:function(t){return e.selectPreviousTorso()}}},[e._v("◄")]),s("button",{staticClass:"next-selector",on:{click:function(t){return e.selectNextTorso()}}},[e._v("►")])]),s("div",{staticClass:"right part"},[s("img",{attrs:{src:e.selectedRobot.rightArm.src,title:"right arm"}}),s("button",{staticClass:"prev-selector",on:{click:function(t){return e.selectPreviousRightArm()}}},[e._v("▲")]),s("button",{staticClass:"next-selector",on:{click:function(t){return e.selectNextRightArm()}}},[e._v("▼")])])]),s("div",{staticClass:"bottom-row"},[s("div",{staticClass:"bottom part"},[s("img",{attrs:{src:e.selectedRobot.base.src,title:"bottom part"}}),s("button",{staticClass:"prev-selector",on:{click:function(t){return e.selectPreviousBase()}}},[e._v("◄")]),s("button",{staticClass:"next-selector",on:{click:function(t){return e.selectNextBase()}}},[e._v("►")])])]),s("div",[s("h1",[e._v("Cart")]),s("table",[e._m(0),s("tbody",e._l(e.cart,(function(t,r){return s("tr",{key:r},[s("td",[e._v(" "+e._s(t.head.title)+" ")]),s("td",{staticClass:"cost"},[e._v(" "+e._s(t.cost)+" ")])])})),0)])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",{staticClass:"robot-title"},[e._v(" Robot ")]),s("th",{staticClass:"cost"},[e._v(" Cost ")])])])}],c=(s("99af"),s("2909")),l=s("c56a"),d={heads:[{id:1,description:"A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",title:"Large Cyclops",src:l("./head-big-eye.png"),type:"heads",cost:1225.5},{id:2,description:"A friendly robot head with two eyes and a smile -- great for domestic use.",title:"Friendly Bot",src:l("./head-friendly.png"),cost:945,type:"heads",onSale:!0},{id:3,description:"A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",title:"Shredder",src:l("./head-shredder.png"),type:"heads",cost:1275.5},{id:4,description:"A simple single-eyed head -- simple and inexpensive.",title:"Small Cyclops",src:l("./head-single-eye.png"),type:"heads",cost:750},{id:5,description:"A robot head with three oscillating eyes -- excellent for surveillance.",title:"Surveillance Bot",src:l("./head-surveillance.png"),type:"heads",cost:1255.5}],arms:[{id:1,description:"An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",title:"Articulated",src:l("./arm-articulated-claw.png"),type:"arms",cost:275},{id:2,description:"An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",title:"Two Clawed",src:l("./arm-dual-claw.png"),type:"arms",cost:285},{id:3,description:"A telescoping arm with a grabber.",title:"Grabber",src:l("./arm-grabber.png"),type:"arms",cost:205.5},{id:4,description:"An arm with a propeller -- good for propulsion or as a cooling fan.",title:"Propeller",src:l("./arm-propeller.png"),type:"arms",cost:230,onSale:!0},{id:5,description:"A short and stubby arm with a claw -- simple, but cheap.",title:"Stubby Claw",src:l("./arm-stubby-claw.png"),type:"arms",cost:125}],torsos:[{id:1,description:"A torso that can bend slightly at the waist and equiped with a heat guage.",title:"Flexible Gauged",src:l("./torso-flexible-gauged.png"),type:"torsos",cost:1575},{id:2,description:"A less flexible torso with a battery gauge.",title:"Gauged",src:l("./torso-gauged.png"),type:"torsos",cost:1385},{id:2,description:"A simple torso with a pouch for carrying items.",title:"Gauged",src:l("./torso-pouch.png"),type:"torsos",cost:785,onSale:!0}],bases:[{id:1,description:"A two wheeled base with an accelerometer for stability.",title:"Double Wheeled",src:l("./base-double-wheel.png"),type:"bases",cost:895},{id:2,description:"A rocket base capable of high speed, controlled flight.",title:"Rocket",src:l("./base-rocket.png"),type:"bases",cost:1520.5},{id:3,description:"A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",title:"Single Wheeled",src:l("./base-single-wheel.png"),type:"bases",cost:1190.5},{id:4,description:"A spring base - great for reaching high places.",title:"Spring",src:l("./base-spring.png"),type:"bases",cost:1190.5},{id:5,description:"An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",title:"Triple Wheeled",src:l("./base-triple-wheel.png"),type:"bases",cost:700.5}]},p=d;function u(e,t){var s=e-1;return s<0?t-1:s}function g(e,t){var s=e+1;return s>t-1?0:s}var h={name:"RobotBuilder",data:function(){return{availableParts:p,card:[],selectedHeadIndex:0,selectedLeftArmIndex:0,selectedTorsoIndex:0,selectedRightArmIndex:0,selectedBaseIndex:0}},computed:{selectedRobot:function(){return{head:p.heads[this.selectedHeadIndex],leftArm:p.arms[this.selectedLeftArmIndex],rightArm:p.arms[this.selectedRightArmIndex],base:p.bases[this.selectedBaseIndex],torso:p.torsos[this.selectedTorsoIndex]}}},methods:{addToCart:function(){var e=this.selectedRobot,t=e.head.cost+e.leftArm.cost+e.torso.cost+e.rightArm.cost+e.base.cost;this.cart.push(Object.assign.apply(Object,Object(c["a"])(e).concat([{cost:t}])))},selectNextHead:function(){this.selectedHeadIndex=g(this.selectedHeadIndex,p.heads.length)},selectPreviousHead:function(){this.selectedHeadIndex=u(this.selectedHeadIndex,p.heads.length)},selectNextLeftArm:function(){this.selectedLeftArmIndex=g(this.selectedLeftArmIndex,p.arms.length)},selectPreviousLeftArm:function(){this.selectedLeftArmIndex=u(this.selectedLeftArmIndex,p.arms.length)},selectNextTorso:function(){this.selectedTorsoIndex=g(this.selectedTorsoIndex,p.torsos.length)},selectPreviousTorso:function(){this.selectedTorsoIndex=u(this.selectedTorsoIndex,p.torsos.length)},selectNextRightArm:function(){this.selectedRightArmIndex=g(this.selectedRightArmIndex,p.arms.length)},selectPreviousRightArm:function(){this.selectedRightArmIndex=u(this.selectedRightArmIndex,p.arms.length)},selectNextBase:function(){this.selectedBaseIndex=g(this.selectedBaseIndex,p.bases.length)},selectPreviousBase:function(){this.selectedBaseIndex=u(this.selectedBaseIndex,p.bases.length)}}},f=h,b=(s("c894"),s("2877")),m=Object(b["a"])(f,a,i,!1,null,null,null),v=m.exports,x={name:"App",components:{RobotBuilder:v}},y=x,w=(s("034f"),Object(b["a"])(y,n,o,!1,null,null,null)),A=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(A)}}).$mount("#app")},6649:function(e,t,s){e.exports=s.p+"img/build-a-bot-logo.bdca6725.png"},"66a9":function(e,t,s){e.exports=s.p+"img/base-double-wheel.73d374e0.png"},"6ea2":function(e,t,s){},"82f7":function(e,t,s){e.exports=s.p+"img/base-triple-wheel.19f89a52.png"},"85ec":function(e,t,s){},"88be":function(e,t,s){e.exports=s.p+"img/base-rocket.43ec06c7.png"},"8cdf":function(e,t,s){e.exports=s.p+"img/head-single-eye.b667db0d.png"},bea8:function(e,t,s){e.exports=s.p+"img/arm-grabber.2615bef6.png"},bec3:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},c56a:function(e,t,s){var r={"./arm-articulated-claw.png":"2a20","./arm-dual-claw.png":"ec5f","./arm-grabber.png":"bea8","./arm-propeller.png":"d674","./arm-stubby-claw.png":"357f","./base-double-wheel.png":"66a9","./base-rocket.png":"88be","./base-single-wheel.png":"2938","./base-spring.png":"e262","./base-triple-wheel.png":"82f7","./build-a-bot-logo.png":"1afe","./head-big-eye.png":"060a","./head-friendly.png":"1da9","./head-shredder.png":"33f7","./head-single-eye.png":"8cdf","./head-surveillance.png":"133e","./logo.png":"bec3","./robot-home.png":"3606","./torso-flexible-gauged.png":"d625","./torso-gauged.png":"d718","./torso-pouch.png":"0f71"};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id="c56a"},c894:function(e,t,s){"use strict";var r=s("6ea2"),n=s.n(r);n.a},d625:function(e,t,s){e.exports=s.p+"img/torso-flexible-gauged.1d488f6c.png"},d674:function(e,t,s){e.exports=s.p+"img/arm-propeller.dcbaadae.png"},d718:function(e,t,s){e.exports=s.p+"img/torso-gauged.d2372dd6.png"},e262:function(e,t,s){e.exports=s.p+"img/base-spring.67923477.png"},ec5f:function(e,t,s){e.exports=s.p+"img/arm-dual-claw.2f871e53.png"}});
//# sourceMappingURL=app.47630c12.js.map