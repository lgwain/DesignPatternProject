(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0870426"],{8873:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"confirmOrder"},[e("div",{staticClass:"confirmOrder-header"},[e("div",{staticClass:"header-content"},[t._m(0),e("p",[t._v("确认订单")]),e("router-link",{attrs:{to:""}})],1)]),e("div",{staticClass:"content"},[e("div",{staticClass:"section-address"},[e("p",{staticClass:"title"},[t._v("收货地址")]),e("div",{staticClass:"address-body"},[e("ul",[t._l(t.address,(function(s){return e("li",{key:s.id,class:s.id==t.confirmAddress?"in-section":""},[e("h2",[t._v(t._s(s.name))]),e("p",{staticClass:"phone"},[t._v(t._s(s.phone))]),e("p",{staticClass:"address"},[t._v(t._s(s.address))])])})),t._m(1)],2)])]),e("div",{staticClass:"section-goods"},[e("p",{staticClass:"title"},[t._v("商品及优惠券")]),e("div",{staticClass:"goods-list"},[e("ul",t._l(t.getCheckGoods,(function(s){return e("li",{key:s.id},[e("img",{attrs:{src:t.$target+s.productImg}}),e("span",{staticClass:"pro-name"},[t._v(t._s(s.productName))]),e("span",{staticClass:"pro-price"},[t._v(t._s(s.price)+"元 x "+t._s(s.num))]),e("span",{staticClass:"pro-status"}),e("span",{staticClass:"pro-total"},[t._v(t._s(s.price*s.num)+"元")])])})),0)])]),t._m(2),t._m(3),e("div",{staticClass:"section-count"},[e("div",{staticClass:"money-box"},[e("ul",[e("li",[e("span",{staticClass:"title"},[t._v("商品件数：")]),e("span",{staticClass:"value"},[t._v(t._s(t.getCheckNum)+"件")])]),e("li",[e("span",{staticClass:"title"},[t._v("商品总价：")]),e("span",{staticClass:"value"},[t._v(t._s(t.getTotalPrice)+"元")])]),t._m(4),t._m(5),t._m(6),e("li",{staticClass:"total"},[e("span",{staticClass:"title"},[t._v("应付总额：")]),e("span",{staticClass:"value"},[e("span",{staticClass:"total-price"},[t._v(t._s(t.getTotalPrice))]),t._v("元 ")])])])])]),e("div",{staticClass:"section-bar"},[e("div",{staticClass:"btn"},[e("router-link",{staticClass:"btn-base btn-return",attrs:{to:"/shoppingCart"}},[t._v("返回购物车")]),e("a",{staticClass:"btn-base btn-primary",attrs:{href:"javascript:void(0);"},on:{click:t.addOrder}},[t._v("结算")])],1)])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("i",{staticClass:"el-icon-s-order"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"add-address"},[e("i",{staticClass:"el-icon-circle-plus-outline"}),e("p",[t._v("添加新地址")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section-shipment"},[e("p",{staticClass:"title"},[t._v("配送方式")]),e("p",{staticClass:"shipment"},[t._v("包邮")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section-invoice"},[e("p",{staticClass:"title"},[t._v("发票")]),e("p",{staticClass:"invoice"},[t._v("电子发票")]),e("p",{staticClass:"invoice"},[t._v("个人")]),e("p",{staticClass:"invoice"},[t._v("商品明细")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"title"},[t._v("活动优惠：")]),e("span",{staticClass:"value"},[t._v("-0元")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"title"},[t._v("优惠券抵扣：")]),e("span",{staticClass:"value"},[t._v("-0元")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"title"},[t._v("运费：")]),e("span",{staticClass:"value"},[t._v("0元")])])}],r=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("d3b7"),e("159b"),e("ade3")),c=e("2f62");function n(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?n(Object(e),!0).forEach((function(s){Object(r["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var o={name:"",data:function(){return{confirmAddress:1,address:[{id:1,name:"陈同学",phone:"13580018623",address:"广东 广州市 白云区 江高镇 广东白云学院"},{id:2,name:"陈同学",phone:"13580018623",address:"广东 茂名市 化州市 杨梅镇 ***"}]}},created:function(){this.getCheckNum<1&&(this.notifyError("请勾选商品后再结算"),this.$router.push({path:"/shoppingCart"}))},computed:l({},Object(c["c"])(["getCheckNum","getTotalPrice","getCheckGoods"])),methods:l({},Object(c["b"])(["deleteShoppingCart"]),{addOrder:function(){var t=this;this.$axios.post("/api/user/order/addOrder",{user_id:this.$store.getters.getUser.user_id,products:this.getCheckGoods}).then((function(s){var e=t.getCheckGoods;switch(s.data.code){case"001":for(var a=0;a<e.length;a++){var i=e[a];t.deleteShoppingCart(i.id)}t.notifySucceed(s.data.msg),t.$router.push({path:"/order"});break;default:t.notifyError(s.data.msg)}})).catch((function(t){return Promise.reject(t)}))}})},d=o,p=(e("f43d"),e("2877")),u=Object(p["a"])(d,a,i,!1,null,"2d1e127a",null);s["default"]=u.exports},9613:function(t,s,e){},f43d:function(t,s,e){"use strict";var a=e("9613"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-e0870426.bf7d7932.js.map