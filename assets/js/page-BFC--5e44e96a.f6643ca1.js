(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{430:function(t,_,v){"use strict";v.r(_);var l=v(3),o=Object(l.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),v("h2",{attrs:{id:"_1-定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[t._v("#")]),t._v(" 1. 定义")]),t._v(" "),v("p",[t._v("BFC：Block Formatting Context（块级格式化上下文）")]),t._v(" "),v("p",[t._v("在解释什么什么是 BFC 之前，需要先介绍 Box、Formatting Context 的概念。")]),t._v(" "),v("h3",{attrs:{id:"_1-1-box：css-布局的基本单位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-box：css-布局的基本单位"}},[t._v("#")]),t._v(" 1.1 Box：CSS 布局的基本单位")]),t._v(" "),v("p",[t._v("Box 是 CSS 布局的对象和基本单位，直观来说，一个页面有很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。不同的 Box，会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此 Box 内的元素会以不同的方式渲染。")]),t._v(" "),v("p",[t._v("常见盒子：")]),t._v(" "),v("ul",[v("li",[t._v("block-level box："),v("code",[t._v("display")]),t._v(" 属性为 "),v("code",[t._v("block")]),t._v("、"),v("code",[t._v("list-item")]),t._v("、"),v("code",[t._v("table")]),t._v(" 的元素，会生成 block-level box")]),t._v(" "),v("li",[t._v("inline-level box："),v("code",[t._v("display")]),t._v(" 属性为 "),v("code",[t._v("inline")]),t._v("、"),v("code",[t._v("inline-block")]),t._v("、"),v("code",[t._v("inline-table")]),t._v(" 的元素，会生成 inline-level box")]),t._v(" "),v("li",[t._v("run-in box：CSS3 特有")])]),t._v(" "),v("p",[t._v("PS：这里的 Box 即指盒模型，关于盒模型的具体内容可以查看"),v("RouterLink",{attrs:{to:"/frontend-basics/css/box-model/",title:"盒模型"}},[t._v("盒模型")]),t._v("章节")],1),t._v(" "),v("h3",{attrs:{id:"_1-2-formatting-context"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-formatting-context"}},[t._v("#")]),t._v(" 1.2 Formatting Context")]),t._v(" "),v("p",[t._v("Formatting Context 是 W3C CSS2.1 规范中的一个概念。他是页面的一块渲染区域，并且有一套渲染规则，它决定了其子元素如何定位，以及和其他元素的关系和相互作用。")]),t._v(" "),v("p",[t._v("最常见的 Formatting Context 有 Block formatting context 和 Inline formatting context。")]),t._v(" "),v("ul",[v("li",[t._v("块级格式化上下文（Block Formatting Context）（BFC）")]),t._v(" "),v("li",[t._v("行内格式化上下文（Inline Formatting Context）（IFC）")]),t._v(" "),v("li",[t._v("自适应格式化上下文（Flex Formatting Context）（FFC）（CSS3 新增）")]),t._v(" "),v("li",[t._v("网格布局格式化上下文（GridLayout Formatting Context）（GFC）（CSS3 新增）")])]),t._v(" "),v("h2",{attrs:{id:"_2-bfc-布局规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-bfc-布局规则"}},[t._v("#")]),t._v(" 2. BFC 布局规则")]),t._v(" "),v("ul",[v("li",[t._v("属于同一个 BFC 的两个相邻 Box 在垂直方向排列时，垂直方向的外边距会发生重叠，它们在垂直方向的距离由 margin 决定，取最大值。（如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中）")]),t._v(" "),v("li",[t._v("BFC 的区域不会与浮动盒子重叠（清除浮动原理）。")]),t._v(" "),v("li",[t._v("计算 BFC 的高度时，浮动元素也参与计算。")])]),t._v(" "),v("h2",{attrs:{id:"_3-哪些元素会生成-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-哪些元素会生成-bfc"}},[t._v("#")]),t._v(" 3. 哪些元素会生成 BFC")]),t._v(" "),v("p",[t._v("只要元素满足下面任一条件即可触发 BFC 特性：")]),t._v(" "),v("ul",[v("li",[t._v("body 根元素")]),t._v(" "),v("li",[t._v("浮动元素（float 属性不为 none）")]),t._v(" "),v("li",[t._v("绝对定位元素（position 属性为 absolute 或 fixed）")]),t._v(" "),v("li",[t._v("内联块（display 属性为 inline-block）")]),t._v(" "),v("li",[t._v("表格单元格（display 属性为 table-cell，HTML 表格单元格默认属性）")]),t._v(" "),v("li",[t._v("表格标题（display 属性为 table-caption，HTML 表格单元格默认属性）")]),t._v(" "),v("li",[t._v("具有 overflow 且值不是 visible 的块元素")]),t._v(" "),v("li",[t._v("弹性盒子（display 属性为 flex 或 inline-flex）")]),t._v(" "),v("li",[t._v("display: flow-root（CSS 新增的属性，专门用来触发BFC，但浏览器兼容性差）")]),t._v(" "),v("li",[t._v("column-span: all（原本的作用是让元素横跨所有列。该属性总是会创建一个新的格式化上下文，即便具有 column-span: all 的元素并不被包裹在一个多列容器中）")])])])}),[],!1,null,null,null);_.default=o.exports}}]);