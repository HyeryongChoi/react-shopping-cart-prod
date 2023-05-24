"use strict";(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[856],{"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./src/stories/cart/CartList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CartList_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),atoms=__webpack_require__("./src/recoil/atoms.ts"),selectors=__webpack_require__("./src/recoil/selectors.ts"),constants=__webpack_require__("./src/constants/index.ts"),useCart=__webpack_require__("./src/hooks/useCart.ts"),CartItem=__webpack_require__("./src/components/cart/CartItem.tsx"),TotalPayment=__webpack_require__("./src/components/cart/TotalPayment.tsx"),Button=__webpack_require__("./src/components/common/Button.tsx"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["itemId","handleCheckedItem"];function Checkbox(_ref){var itemId=_ref.itemId,handleCheckedItem=_ref.handleCheckedItem,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(Style.Checkbox,(0,objectSpread2.Z)({type:"checkbox",onChange:function onChange(){return handleCheckedItem(itemId)}},props))}var CartList_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,Style={Checkbox:styled_components_browser_esm.zo.input(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    width: 20px;\n    height: 20px;\n\n    cursor: pointer;\n  "])))};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{itemId:{defaultValue:null,description:"",name:"itemId",required:!0,type:{name:"number"}},handleCheckedItem:{defaultValue:null,description:"",name:"handleCheckedItem",required:!0,type:{name:"(id: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/common/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,CartList_Style={Container:styled_components_browser_esm.zo.div(CartList_templateObject||(CartList_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  "]))),CartItemsAndPaymentContainer:styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n\n    margin-top: 20px;\n\n    /* 태블릿, 모바일 */\n    @media screen and (max-width: 991px) {\n      flex-direction: column;\n      align-items: center;\n    }\n  "]))),CartItemsContainer:styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    width: 550px;\n\n    border-top: 4px solid var(--grey-200);\n    margin-right: 80px;\n\n    /* 태블릿 */\n    @media screen and (max-width: 991px) {\n      width: 708px;\n      margin-right: 0;\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 315px;\n    }\n  "]))),CartItems:styled_components_browser_esm.zo.ul(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    width: 550px;\n    max-height: 540px;\n    overflow-y: scroll;\n\n    /* 태블릿, 모바일 */\n    @media screen and (max-width: 991px) {\n      width: 708px;\n      margin-right: 0;\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 315px;\n      margin-right: 0;\n    }\n  "]))),ProductContainer:styled_components_browser_esm.zo.li(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n\n    height: 180px;\n\n    padding: 20px;\n    border-bottom: 1px ridge;\n  "]))),CheckBoxWrapper:styled_components_browser_esm.zo.div(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    margin-right: 20px;\n    border-radius: 2px;\n  "]))),TotalCheckboxAndDeleteButtonContainer:styled_components_browser_esm.zo.div(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    align-items: center;\n\n    padding: 20px;\n    margin-right: 20px;\n  "]))),TotalCheckbox:styled_components_browser_esm.zo.input(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n    width: 20px;\n    height: 20px;\n\n    margin-right: 20px;\n\n    cursor: pointer;\n  "]))),TotalSelectCaption:styled_components_browser_esm.zo.label(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    width: 90px;\n\n    font-size: 12px;\n\n    cursor: pointer;\n  "]))),Span:styled_components_browser_esm.zo.span(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n    margin: 0 5px;\n\n    color: var(--grey-200);\n  "])))},CartList_stories={title:"ShoppingCart/cart/CartList",component:function CartList(){var _useCart=(0,useCart.j)(),cartList=_useCart.cartList,deleteFromCart=_useCart.deleteFromCart,cartItemIds=cartList.map((function(cartItem){return cartItem.id})),_useRecoilState=(0,es.FV)((0,atoms.FF)(cartItemIds)),_useRecoilState2=(0,slicedToArray.Z)(_useRecoilState,2),checkedItemIds=_useRecoilState2[0],setCheckedItemIds=_useRecoilState2[1],_useState=(0,react.useState)(!0),_useState2=(0,slicedToArray.Z)(_useState,2),isAllChecked=_useState2[0],setIsAllChecked=_useState2[1],totalProductsPrice=(0,es.sJ)(selectors.W3),handleCheckedItem=function handleCheckedItem(id){checkedItemIds.includes(id)?setCheckedItemIds((function(prev){return prev.filter((function(itemId){return itemId!==id}))})):setCheckedItemIds((function(prev){return[].concat((0,toConsumableArray.Z)(prev),[id])}))};return(0,react.useEffect)((function(){cartList.length!==checkedItemIds.length?!0===isAllChecked&&setIsAllChecked(!1):setIsAllChecked(!0)}),[cartList,checkedItemIds,isAllChecked]),(0,jsx_runtime.jsxs)(CartList_Style.Container,{children:[(0,jsx_runtime.jsxs)("h2",{children:["든든배송 상품(",cartList.length,"개)"]}),(0,jsx_runtime.jsxs)(CartList_Style.CartItemsAndPaymentContainer,{children:[(0,jsx_runtime.jsxs)(CartList_Style.CartItemsContainer,{children:[cartList.length?(0,jsx_runtime.jsx)(CartList_Style.CartItems,{children:cartList.map((function(cartItemInfo){return(0,jsx_runtime.jsxs)(CartList_Style.ProductContainer,{children:[(0,jsx_runtime.jsx)(CartList_Style.CheckBoxWrapper,{children:(0,jsx_runtime.jsx)(Checkbox,{id:"".concat(cartItemInfo.product.name,"-checkbox"),checked:checkedItemIds.includes(cartItemInfo.id),itemId:cartItemInfo.id,handleCheckedItem:handleCheckedItem})}),(0,jsx_runtime.jsx)(CartItem.Z,{cartItemInfo:cartItemInfo,deleteCheckedItem:setCheckedItemIds})]},cartItemInfo.id)}))}):(0,jsx_runtime.jsx)(CartList_Style.Span,{children:"장바구니에 담긴 상품이 없습니다."}),(0,jsx_runtime.jsxs)(CartList_Style.TotalCheckboxAndDeleteButtonContainer,{children:[(0,jsx_runtime.jsx)(CartList_Style.TotalCheckbox,{id:"total-checkbox",type:"checkbox",checked:isAllChecked,onChange:function handleAllChecked(){if(isAllChecked)return setCheckedItemIds([]),void setIsAllChecked(!1);setCheckedItemIds(cartList.map((function(cartItem){return cartItem.id}))),setIsAllChecked(!0)}}),(0,jsx_runtime.jsxs)(CartList_Style.TotalSelectCaption,{htmlFor:"total-checkbox",children:["전체선택 (","".concat(checkedItemIds.length,"/").concat(cartList.length),")"]}),(0,jsx_runtime.jsx)(CartList_Style.Span,{"aria-hidden":!0,children:"|"}),(0,jsx_runtime.jsx)(Button.Z,{designType:"text",fontSize:"12px",color:"black",onClick:function deleteCheckedItems(){checkedItemIds.forEach((function(itemId){return deleteFromCart(itemId)})),setCheckedItemIds([])},children:"선택삭제"})]})]}),(0,jsx_runtime.jsx)(TotalPayment.Z,{totalProductsPrice:totalProductsPrice,deliveryFee:constants._e})]})]})},tags:["autodocs"]},Default={};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/cart/CartItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return CartItem}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_hooks_useCart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/useCart.ts"),_assets_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/svg/index.ts"),_common_Price__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/Price.tsx"),_Stepper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Stepper.tsx"),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CartItem(_ref){var cartItemInfo=_ref.cartItemInfo,deleteCheckedItem=_ref.deleteCheckedItem,_cartItemInfo$product=cartItemInfo.product,name=_cartItemInfo$product.name,price=_cartItemInfo$product.price,imageUrl=_cartItemInfo$product.imageUrl,_useCart=(0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_0__.j)(cartItemInfo.product),updateProductQuantity=_useCart.updateProductQuantity,deleteFromCart=_useCart.deleteFromCart;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Style.Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Style.ImageAndNameContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.ProductImageWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.ProductImage,{src:imageUrl,alt:name})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.ProductName,{htmlFor:"".concat(name,"-checkbox"),children:name})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Style.TrashCanIConAndStepperAndPriceContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Style.DeleteCartItemButton,{onClick:function handleDeleteCartItem(){deleteCheckedItem((function(prev){return prev.filter((function(itemId){return itemId!==cartItemInfo.id}))})),deleteFromCart()},"aria-label":"장바구니에서 ".concat(name," 상품 삭제"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_svg__WEBPACK_IMPORTED_MODULE_1__.Ms,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Stepper__WEBPACK_IMPORTED_MODULE_3__.Z,{quantity:cartItemInfo.quantity,minQuantity:1,maxQuantity:_constants__WEBPACK_IMPORTED_MODULE_4__.c5.MAX_COUNT,updateQuantity:updateProductQuantity}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_2__.Z,{price:price*(null==cartItemInfo?void 0:cartItemInfo.quantity),label:"".concat(name," ").concat(cartItemInfo.quantity,"개")})]})]})}var Style={Container:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    display: flex;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      flex-direction: column;\n      position: relative;\n    }\n  "]))),ImageAndNameContainer:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    display: flex;\n  "]))),ProductImageWrapper:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    width: 130px;\n    height: 130px;\n\n    position: relative;\n    overflow: hidden;\n    margin-right: 20px;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 100px;\n      height: 100px;\n    }\n  "]))),ProductImage:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.img(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    width: 100%;\n    height: 100%;\n\n    position: absolute;\n    object-fit: cover;\n  "]))),ProductName:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.label(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    width: 135px;\n\n    font-size: 18px;\n    color: var(--grey-400);\n\n    cursor: pointer;\n\n    /* 태블릿 */\n    @media screen and (max-width: 991px) {\n      width: 308px;\n    }\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      width: 105px;\n      margin-right: 25px;\n\n      font-size: 14px;\n    }\n  "]))),TrashCanIConAndStepperAndPriceContainer:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.div(_templateObject6||(_templateObject6=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    width: 170px;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      flex-direction: row;\n      justify-content: none;\n      align-items: none;\n\n      margin-top: 20px;\n    }\n  "]))),DeleteCartItemButton:styled_components__WEBPACK_IMPORTED_MODULE_6__.zo.button(_templateObject7||(_templateObject7=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(["\n    all: unset;\n\n    cursor: pointer;\n\n    /* 모바일 */\n    @media screen and (max-width: 767px) {\n      position: absolute;\n      top: 0;\n      right: 0;\n    }\n  "])))};try{CartItem.displayName="CartItem",CartItem.__docgenInfo={description:"",displayName:"CartItem",props:{cartItemInfo:{defaultValue:null,description:"",name:"cartItemInfo",required:!0,type:{name:"CartItemInfo"}},deleteCheckedItem:{defaultValue:null,description:"",name:"deleteCheckedItem",required:!0,type:{name:"Dispatch<SetStateAction<number[]>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cart/CartItem.tsx#CartItem"]={docgenInfo:CartItem.__docgenInfo,name:"CartItem",path:"src/components/cart/CartItem.tsx#CartItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/cart/TotalPayment.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return TotalPayment}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_Price__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Price.tsx"),_common_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TotalPayment(_ref){var totalProductsPrice=_ref.totalProductsPrice,deliveryFee=_ref.deliveryFee,totalOrderPrice=totalProductsPrice+deliveryFee;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Style.TotalPaymentContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Style.TitleBox,{children:"결제예상금액"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Style.PriceAndOrderButtonContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Style.PriceContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:totalProductsPrice,tag:"총 상품가격"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:deliveryFee,tag:"총 배송비"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Price__WEBPACK_IMPORTED_MODULE_0__.Z,{price:totalOrderPrice,tag:"총 주문금액"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{designType:"rectangle",bgColor:"var(--grey-500)",color:"var(--grey-100)",fontSize:"20px",children:"주문하기"})]})]})}var Style={TotalPaymentContainer:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    width: 300px;\n    height: fit-content;\n    border: 1px solid var(--grey-300);\n  "]))),TitleBox:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    padding: 25px;\n\n    font-size: 20px;\n  "]))),PriceAndOrderButtonContainer:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    border-top: 1px solid var(--grey-300);\n    padding: 25px;\n  "]))),PriceContainer:styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 30px;\n  "])))};try{TotalPayment.displayName="TotalPayment",TotalPayment.__docgenInfo={description:"",displayName:"TotalPayment",props:{totalProductsPrice:{defaultValue:null,description:"",name:"totalProductsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cart/TotalPayment.tsx#TotalPayment"]={docgenInfo:TotalPayment.__docgenInfo,name:"TotalPayment",path:"src/components/cart/TotalPayment.tsx#TotalPayment"})}catch(__react_docgen_typescript_loader_error){}}}]);