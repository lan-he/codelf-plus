(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6121782a"],{"0218":function(t,e,a){t.exports=a.p+"img/icon7.610f3e00.png"},"03c0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nftgame"},[t._m(0),a("ul",{staticClass:"nftgamelist"},t._l(t.nftgame,(function(e,s){return a("li",{key:s},[a("img",{attrs:{src:e.imgsrc,alt:""}}),a("div",{staticClass:"right"},[a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",[t._v("Type: "+t._s(e.type))]),a("p",[t._v("Company: "+t._s(e.company))]),a("p",[t._v("State: "+t._s(e.state))]),a("p",[t._v("Platform: "+t._s(e.platform))]),a("div",{staticClass:"btn"},[a("div",[a("button",{staticClass:"view",on:{click:function(e){return t.gogamedetail()}}},[t._v("View")])]),t._m(1,!0)])])])})),0)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game-title"},[a("span",[t._v("NFT Games")]),a("p",[t._v(" More "),a("i",{staticClass:"el-icon-right"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"download"},[t._v("Download")])])}],i={name:"nftgame",data:function(){return{nftgame:[{imgsrc:a("1138"),name:"Game Name",company:"ESPN",state:"Test",type:"PVP",platform:"MAC/PC"},{imgsrc:a("e016"),name:"Game Name",company:"ESPN",state:"Test",type:"PVP",platform:"MAC/PC"},{imgsrc:a("87d4"),name:"Game Name",company:"ESPN",state:"Test",type:"PVP",platform:"MAC/PC"},{imgsrc:a("30f6"),name:"Game Name",company:"ESPN",state:"Test",type:"PVP",platform:"MAC/PC"}]}},methods:{gogamedetail:function(){this.$router.push("/Games/detail")}}},r=i,p=(a("b36d"),a("2877")),o=Object(p["a"])(r,s,n,!1,null,"14c581d4",null);e["a"]=o.exports},1138:function(t,e,a){t.exports=a.p+"img/NFT-01.4b71bbdc.png"},1603:function(t,e,a){t.exports=a.p+"img/icon4.63ccf12e.png"},1961:function(t,e,a){t.exports=a.p+"img/icon3.c27a6889.png"},"2b8d":function(t,e,a){t.exports=a.p+"img/icon5.1a55a400.png"},"30f6":function(t,e,a){t.exports=a.p+"img/NFT-04.1882419f.png"},"338a":function(t,e,a){t.exports=a.p+"img/icon6.85242a4d.png"},"7a44":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"games"},[a("Header"),a("main",[a("div",{staticClass:"gamelist"},[t._m(0),a("ul",{staticClass:"listgame"},t._l(t.gamelist,(function(e,s){return a("li",{key:s},[a("img",{attrs:{src:e.imgsrc,alt:""}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"property"},[t._v(t._s(e.property))]),a("button",{on:{click:function(e){return t.gogamedetail()}}},[t._v("View")]),"Hot"===e.type?a("div",{class:"Hot"===e.type?"hot top-right":""},[t._v(" "+t._s(e.type)+" ")]):t._e(),"Free"===e.type?a("div",{class:"Free"===e.type?"free top-right":""},[t._v(" "+t._s(e.type)+" ")]):t._e(),"New"===e.type?a("div",{class:"New"===e.type?"new top-right":""},[t._v(" "+t._s(e.type)+" ")]):t._e()])})),0),t._m(1),a("ul",{staticClass:"listgame"},t._l(t.gamelist1,(function(e,s){return a("li",{key:s},[a("img",{attrs:{src:e.imgsrc,alt:""}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"property"},[t._v(t._s(e.property))]),a("button",{on:{click:function(e){return t.gogamedetail()}}},[t._v("View")]),"Hot"===e.type?a("div",{class:"Hot"===e.type?"hot top-right":""},[t._v(" "+t._s(e.type)+" ")]):t._e(),"Free"===e.type?a("div",{class:"Free"===e.type?"free top-right":""},[t._v(" "+t._s(e.type)+" ")]):t._e(),"New"===e.type?a("div",{class:"New"===e.type?"new top-right":""},[t._v(" "+t._s(e.type)+" ")]):t._e()])})),0),a("Nftgame")],1)]),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game-title"},[a("span",[t._v("IAA Games")]),a("p",[t._v(" More "),a("i",{staticClass:"el-icon-right"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game-title"},[a("span",[t._v("Competitive Games")]),a("p",[t._v(" More "),a("i",{staticClass:"el-icon-right"})])])}],i=a("d970"),r=a("397a"),p=a("03c0"),o={name:"games",data:function(){return{gamelist:[{imgsrc:a("cf05"),name:"Tank Hero",property:"property",type:"Hot"},{imgsrc:a("df21"),name:"Tank Hero",property:"property",type:"Free"},{imgsrc:a("1961"),name:"Tank Hero",property:"property",type:"New"},{imgsrc:a("1603"),name:"Tank Hero",property:"property"}],gamelist1:[{imgsrc:a("2b8d"),name:"Tank Hero",property:"property",type:"Hot"},{imgsrc:a("338a"),name:"Tank Hero",property:"property",type:"Free"},{imgsrc:a("0218"),name:"Tank Hero",property:"property"},{imgsrc:a("fbf2"),name:"Tank Hero",property:"property"}]}},methods:{gogamedetail:function(){this.$router.push("/Games/detail")}},components:{Header:i["a"],Footer:r["a"],Nftgame:p["a"]}},c=o,m=(a("e928"),a("2877")),l=Object(m["a"])(c,s,n,!1,null,"332828e6",null);e["default"]=l.exports},"87d4":function(t,e,a){t.exports=a.p+"img/NFT-02.9b6f0f62.png"},a8fc:function(t,e,a){},b36d:function(t,e,a){"use strict";a("c419")},c419:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/icon1.80c81907.png"},df21:function(t,e,a){t.exports=a.p+"img/icon2.a4cbdadd.png"},e016:function(t,e,a){t.exports=a.p+"img/NFT-03.f6a818f1.png"},e928:function(t,e,a){"use strict";a("a8fc")},fbf2:function(t,e,a){t.exports=a.p+"img/icon8.5859f49d.png"}}]);
//# sourceMappingURL=chunk-6121782a.0d5628d6.js.map