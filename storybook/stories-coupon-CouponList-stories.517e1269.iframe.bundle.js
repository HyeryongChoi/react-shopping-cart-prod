"use strict";(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[853],{"./src/stories/coupon/CouponList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defatul:function(){return Defatul},__namedExportsOrder:function(){return __namedExportsOrder}});var _Defatul$parameters,_Defatul$parameters2,_Defatul$parameters2$,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"ShoppingCart/coupon/CouponList",component:__webpack_require__("./src/components/coupon/CouponList.tsx").Z,tags:["autodocs"]};__webpack_exports__.default=meta;var Defatul={args:{totalProductsPrice:5e6,rateCoupons:[{id:1,name:"가입 축하 5% 할인 쿠폰",discountRate:5,expiredDate:"2023-05-05",minOrderPrice:5e6},{id:2,name:"10% 할인 쿠폰",discountRate:10,expiredDate:"2023-05-05",minOrderPrice:6e6}],fixedCoupons:[{id:3,name:"3000원 할인 쿠폰",discountPrice:3e3,expiredDate:"2023-05-05",minOrderPrice:6e6},{id:4,name:"10000원 할인 쿠폰",discountPrice:1e4,expiredDate:"2023-05-05",minOrderPrice:5e6}]}};Defatul.parameters=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Defatul.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Defatul$parameters=Defatul.parameters)||void 0===_Defatul$parameters?void 0:_Defatul$parameters.docs),{},{source:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    totalProductsPrice: 5000000,\n    rateCoupons: [{\n      id: 1,\n      name: '가입 축하 5% 할인 쿠폰',\n      discountRate: 5,\n      expiredDate: '2023-05-05',\n      minOrderPrice: 5000000\n    }, {\n      id: 2,\n      name: '10% 할인 쿠폰',\n      discountRate: 10,\n      expiredDate: '2023-05-05',\n      minOrderPrice: 6000000\n    }],\n    fixedCoupons: [{\n      id: 3,\n      name: '3000원 할인 쿠폰',\n      discountPrice: 3000,\n      expiredDate: '2023-05-05',\n      minOrderPrice: 6000000\n    }, {\n      id: 4,\n      name: '10000원 할인 쿠폰',\n      discountPrice: 10000,\n      expiredDate: '2023-05-05',\n      minOrderPrice: 5000000\n    }]\n  }\n}"},null===(_Defatul$parameters2=Defatul.parameters)||void 0===_Defatul$parameters2||null===(_Defatul$parameters2$=_Defatul$parameters2.docs)||void 0===_Defatul$parameters2$?void 0:_Defatul$parameters2$.source)})});var __namedExportsOrder=["Defatul"]},"./src/components/common/Price.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Price}});var _templateObject,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Price(_ref){var _ref$price=_ref.price,price=void 0===_ref$price?0:_ref$price,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"inherit":_ref$color,tag=_ref.tag,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$isDiscount=_ref.isDiscount,isDiscount=void 0!==_ref$isDiscount&&_ref$isDiscount;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Style.Wrapper,{className:size,color:color,"aria-label":"".concat(label," 가격 ").concat(price,"원"),children:[tag&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:tag}),isDiscount?"-":"",price.toLocaleString("ko-KR"),"원"]})}var Style={Wrapper:styled_components__WEBPACK_IMPORTED_MODULE_1__.zo.p(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n    display: flex;\n    justify-content: space-between;\n\n    &.small {\n      font-size: 10px;\n    }\n\n    &.medium {\n      font-size: 16px;\n    }\n\n    &.large {\n      font-size: 20px;\n    }\n\n    &.extra-large {\n      font-size: 30px;\n    }\n\n    color: ",";\n  "])),(function(_ref2){return _ref2.color}))};try{Price.displayName="Price",Price.__docgenInfo={description:"",displayName:"Price",props:{price:{defaultValue:{value:"0"},description:"",name:"price",required:!1,type:{name:"number"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extra-large"'}]}},color:{defaultValue:{value:"inherit"},description:"",name:"color",required:!1,type:{name:"string"}},tag:{defaultValue:null,description:"",name:"tag",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},isDiscount:{defaultValue:{value:"false"},description:"",name:"isDiscount",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Price.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"src/components/common/Price.tsx#Price"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/coupon/CouponItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CouponItem}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_Price__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Price.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CouponItem(_ref){var totalProductsPrice=_ref.totalProductsPrice,couponItemInfo=_ref.couponItemInfo,handleCouponSelect=_ref.handleCouponSelect,id=couponItemInfo.id,name=couponItemInfo.name,expiredDate=couponItemInfo.expiredDate,minOrderPrice=couponItemInfo.minOrderPrice;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Style.Container,{onClick:function selectCoupon(){if("discountPrice"in couponItemInfo)handleCouponSelect({couponId:id,discountPrice:couponItemInfo.discountPrice,minOrderPrice:minOrderPrice});else if("discountRate"in couponItemInfo){var discountPrice=totalProductsPrice*(couponItemInfo.discountRate/100);handleCouponSelect({couponId:id,discountPrice:discountPrice,minOrderPrice:minOrderPrice})}},disabled:totalProductsPrice<minOrderPrice,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Style.Title,{children:["discountPrice"in couponItemInfo&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:couponItemInfo.discountPrice,size:"extra-large"}),"discountRate"in couponItemInfo&&"".concat(couponItemInfo.discountRate,"%")]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Style.Name,{children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Style.Detail,{className:"min-order-price",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"최소 주문금액:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:minOrderPrice,size:"small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"(배송비 제외)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Style.Detail,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"사용기한: "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{children:["~",expiredDate]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Style.Image,{src:"".concat(".","/assets/huchu.png"),alt:""})]})}var Style={Container:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.button(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    width: 300px;\n    height: 150px;\n\n    position: relative;\n    padding: 10px;\n    border-radius: 7px;\n    background-color: var(--grey-100);\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    overflow: hidden;\n\n    text-align: start;\n\n    &:hover {\n      transition: transform 0.3s ease;\n      transform: scale(1.01);\n    }\n\n    &:disabled * {\n      color: var(--grey-300);\n    }\n\n    &:disabled .min-order-price * {\n      color: red;\n    }\n  "]))),Title:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    font-size: 30px;\n    color: #1c8fed;\n    margin-bottom: 10px;\n  "]))),Name:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.p(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    max-width: 200px;\n    margin-bottom: 10px;\n    overflow: hidden;\n\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  "]))),Detail:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.p(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    display: flex;\n    gap: 3px;\n\n    font-size: 10px;\n    color: var(--grey-300);\n  "]))),Image:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.img(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    width: 155px;\n\n    position: absolute;\n    top: 30%;\n    left: 63%;\n  "])))};try{CouponItem.displayName="CouponItem",CouponItem.__docgenInfo={description:"",displayName:"CouponItem",props:{totalProductsPrice:{defaultValue:null,description:"",name:"totalProductsPrice",required:!0,type:{name:"number"}},couponItemInfo:{defaultValue:null,description:"",name:"couponItemInfo",required:!0,type:{name:"RateCouponInfo | FixedCouponInfo"}},handleCouponSelect:{defaultValue:null,description:"",name:"handleCouponSelect",required:!0,type:{name:"({ couponId, discountPrice, minOrderPrice }: Record<string, number>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/coupon/CouponItem.tsx#CouponItem"]={docgenInfo:CouponItem.__docgenInfo,name:"CouponItem",path:"src/components/coupon/CouponItem.tsx#CouponItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/coupon/CouponList.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CouponList}});var _templateObject,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_CouponItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/coupon/CouponItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CouponList(_ref){var totalProductsPrice=_ref.totalProductsPrice,rateCoupons=_ref.rateCoupons,fixedCoupons=_ref.fixedCoupons,handleCouponSelect=_ref.handleCouponSelect;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Style.Container,{children:[rateCoupons.map((function(rateCoupon){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_CouponItem__WEBPACK_IMPORTED_MODULE_0__.Z,{totalProductsPrice:totalProductsPrice,couponItemInfo:rateCoupon,handleCouponSelect:handleCouponSelect})},rateCoupon.id)})),fixedCoupons.map((function(fixedCoupon){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_CouponItem__WEBPACK_IMPORTED_MODULE_0__.Z,{totalProductsPrice:totalProductsPrice,couponItemInfo:fixedCoupon,handleCouponSelect:handleCouponSelect})},fixedCoupon.id)}))]})}var Style={Container:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.ul(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    gap: 20px;\n  "])))};try{CouponList.displayName="CouponList",CouponList.__docgenInfo={description:"",displayName:"CouponList",props:{totalProductsPrice:{defaultValue:null,description:"",name:"totalProductsPrice",required:!0,type:{name:"number"}},rateCoupons:{defaultValue:null,description:"",name:"rateCoupons",required:!0,type:{name:"RateCouponInfo[]"}},fixedCoupons:{defaultValue:null,description:"",name:"fixedCoupons",required:!0,type:{name:"FixedCouponInfo[]"}},handleCouponSelect:{defaultValue:null,description:"",name:"handleCouponSelect",required:!0,type:{name:"({ couponId, discountPrice, minOrderPrice }: Record<string, number>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/coupon/CouponList.tsx#CouponList"]={docgenInfo:CouponList.__docgenInfo,name:"CouponList",path:"src/components/coupon/CouponList.tsx#CouponList"})}catch(__react_docgen_typescript_loader_error){}}}]);