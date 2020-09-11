(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{384:function(t,a,s){"use strict";s.r(a);var _=s(25),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("最新的 ECMAScript 标准定义了 8 种数据类型:")]),t._v(" "),s("ul",[s("li",[t._v("7 种基本数据类型：\n"),s("ul",[s("li",[t._v("Undefined")]),t._v(" "),s("li",[t._v("Null")]),t._v(" "),s("li",[t._v("Boolean")]),t._v(" "),s("li",[t._v("Number")]),t._v(" "),s("li",[t._v("BigInt（ECMAScript 2020）")]),t._v(" "),s("li",[t._v("String")]),t._v(" "),s("li",[t._v("Symbol（ECMAScript 2015）")])])]),t._v(" "),s("li",[t._v("1 种复杂数据类型：\n"),s("ul",[s("li",[t._v("Object")])])])]),t._v(" "),s("h2",{attrs:{id:"_1-使用-typeof-操作符判断数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-typeof-操作符判断数据类型"}},[t._v("#")]),t._v(" 1. 使用 typeof 操作符判断数据类型")]),t._v(" "),s("p",[s("code",[t._v("typeof")]),t._v(" 用于检测给定变量的数据类型，对一个值使用 "),s("code",[t._v("typeof")]),t._v(" 操作符会返回一个表示操作数的类型的字符串。但 "),s("code",[t._v("typeof")]),t._v(" 的运算结果，与运行时类型的规定有很多不一致的地方。")]),t._v(" "),s("p",[t._v("我们可以看下表来对照一下。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("示例表达式")]),t._v(" "),s("th",[t._v("typeof 结果")]),t._v(" "),s("th",[t._v("运行时类型行为")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("void(0)")]),t._v(" "),s("td",[t._v('"undefined"')]),t._v(" "),s("td",[t._v("Undefined")])]),t._v(" "),s("tr",[s("td",[t._v("null")]),t._v(" "),s("td",[t._v('"object"')]),t._v(" "),s("td",[t._v("Null")])]),t._v(" "),s("tr",[s("td",[t._v("true")]),t._v(" "),s("td",[t._v('"boolean"')]),t._v(" "),s("td",[t._v("Boolean")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v('"number"')]),t._v(" "),s("td",[t._v("Number")])]),t._v(" "),s("tr",[s("td",[t._v("9007199254740992n")]),t._v(" "),s("td",[t._v('"bigint"')]),t._v(" "),s("td",[t._v("BigInt")])]),t._v(" "),s("tr",[s("td",[t._v('"ok"')]),t._v(" "),s("td",[t._v('"string"')]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v('Symbol("a")')]),t._v(" "),s("td",[t._v('"symbol"')]),t._v(" "),s("td",[t._v("Symbol")])]),t._v(" "),s("tr",[s("td",[t._v("(function(){})")]),t._v(" "),s("td",[t._v('"function"')]),t._v(" "),s("td",[t._v("Function object")])]),t._v(" "),s("tr",[s("td",[t._v("{}")]),t._v(" "),s("td",[t._v('"object"')]),t._v(" "),s("td",[t._v("Any other object")])])])]),t._v(" "),s("p",[t._v("在表格中，多数项是对应的，但是请注意 "),s("code",[t._v("object —— Null")]),t._v(" 和 "),s("code",[t._v("function —— Object")]),t._v(" 是特例，我们理解类型的时候需要特别注意这个区别。")]),t._v(" "),s("p",[t._v("此外，由于 "),s("code",[t._v("typeof")]),t._v(" 是一个操作符而不是函数，后面可加括号也可省略。")]),t._v(" "),s("h2",{attrs:{id:"_2-8-种数据类型介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-种数据类型介绍"}},[t._v("#")]),t._v(" 2. 8 种数据类型介绍")]),t._v(" "),s("h3",{attrs:{id:"_2-1-undefined-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-undefined-类型"}},[t._v("#")]),t._v(" 2.1 Undefined 类型")]),t._v(" "),s("p",[t._v("Undefined 类型只有一个值，即特殊的 "),s("code",[t._v("undefined")]),t._v("。"),s("br"),t._v("\n在使用 "),s("code",[t._v("var")]),t._v(" 声明变量但未对其加以初始化时，这个变量的值就是 "),s("code",[t._v("undefined")]),t._v("；")]),t._v(" "),s("p",[t._v("对未初始化和未声明的变量执行 "),s("code",[t._v("typeof")]),t._v(" 操作符都会返回 "),s("code",[t._v("undefined")]),t._v(" 值。")]),t._v(" "),s("p",[s("strong",[t._v("显示地初始化变量是明智的选择")]),t._v("，这样当 "),s("code",[t._v("typeof")]),t._v(" 操作符返回 "),s("code",[t._v('"undefined"')]),t._v(" 值时，我们就知道被检测地变量还没有被声明，而不是尚未初始化。（—— 出自红宝书）")]),t._v(" "),s("h3",{attrs:{id:"_2-2-null-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-null-类型"}},[t._v("#")]),t._v(" 2.2 Null 类型")]),t._v(" "),s("p",[t._v("Null 类型也只有一个值，即特殊的 "),s("code",[t._v("null")]),t._v("。"),s("br"),t._v("\n从逻辑角度来看，"),s("code",[t._v("null")]),t._v(" 值表示一个"),s("strong",[t._v("空对象指针")]),t._v("，所以使用 "),s("code",[t._v("typeof")]),t._v(" 操作符检测 "),s("code",[t._v("null")]),t._v(" 值时会返回 "),s("code",[t._v('"object"')]),t._v("。")]),t._v(" "),s("p",[t._v("如果定义的变量准备在将来"),s("strong",[t._v("用于保存对象")]),t._v("，那么最好将该变量初始化为 "),s("code",[t._v("null")]),t._v(" 而不是其他值。这样一来，只要直接检查相应的变量是否等于 "),s("code",[t._v("null")]),t._v(" 值就可以知道它是否已经保存了一个对象的引用。（—— 出自红宝书）")]),t._v(" "),s("p",[t._v("实际上，"),s("code",[t._v("undefined")]),t._v(" 值是派生自 "),s("code",[t._v("null")]),t._v(" 值的，因此 "),s("code",[t._v("null == undefined")]),t._v(" 会返回 "),s("code",[t._v("true")]),t._v("，但 "),s("code",[t._v("null === undefined")]),t._v(" 则返回 "),s("code",[t._v("false")]),t._v(" 了。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-boolean-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-boolean-类型"}},[t._v("#")]),t._v(" 2.3 Boolean 类型")]),t._v(" "),s("p",[t._v("Boolean 类型只有两个字面值："),s("code",[t._v("true")]),t._v(" 和 "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_2-4-number-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-number-类型"}},[t._v("#")]),t._v(" 2.4 Number 类型")]),t._v(" "),s("p",[t._v("Number 类型使用 "),s("a",{attrs:{href:"https://baike.baidu.com/item/IEEE%20754/3869922?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEEE754"),s("OutboundLink")],1),t._v(" 格式来表示整数和浮点数值。")]),t._v(" "),s("h4",{attrs:{id:"（1）浮点数值的整数化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）浮点数值的整数化"}},[t._v("#")]),t._v(" （1）浮点数值的整数化")]),t._v(" "),s("p",[t._v("因为保存浮点数值需要得内存空间是保存整数值的两倍，所以凡是可以「整数化」的浮点数都会被转换为整数值，例如："),s("code",[t._v("1.")]),t._v(" 和 "),s("code",[t._v("1.0")]),t._v(" 都会被解析为 "),s("code",[t._v("1")]),t._v("。")]),t._v(" "),s("p",[t._v("对于那些极大或极小的数值，可以用 e 表示法（即科学计数法）表示的浮点数值表示。（用 e 表示法表示的数值等于 e 前面的数值乘以 10 的指数次幂）")]),t._v(" "),s("h4",{attrs:{id:"（2）数值范围限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）数值范围限制"}},[t._v("#")]),t._v(" （2）数值范围限制")]),t._v(" "),s("p",[t._v("JavaScript 能够表示的"),s("strong",[t._v("最小数值")]),t._v("为 "),s("code",[t._v("Number.MIN_VALUE")]),t._v("，在大多数浏览器中这个值是 "),s("code",[t._v("5e-324")]),t._v("；"),s("br"),t._v("\nJavaScript 能够表示的"),s("strong",[t._v("最大数值")]),t._v("为 "),s("code",[t._v("Number.MAX_VALUE")]),t._v("，在大多数浏览器中这个值是 "),s("code",[t._v("1.7976931348623157e+308")]),t._v("。")]),t._v(" "),s("p",[t._v("超出范围的正数会被转换成 "),s("code",[t._v("Infinity")]),t._v("（正无穷），超出范围的负数会被转换成 "),s("code",[t._v("-Infinity")]),t._v("（负无穷）。")]),t._v(" "),s("p",[t._v("可以使用 "),s("code",[t._v("isFinite()")]),t._v(" 函数判断括号里的参数是否位于最小与最大数值之间。")]),t._v(" "),s("h4",{attrs:{id:"（3）特殊的-nan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）特殊的-nan"}},[t._v("#")]),t._v(" （3）特殊的 NaN")]),t._v(" "),s("p",[s("code",[t._v("NaN")]),t._v("，即非数值（Not a Number）是一个特殊的数值。它有两个特点：一是任何涉及 "),s("code",[t._v("NaN")]),t._v(" 的操作都会返回 "),s("code",[t._v("NaN")]),t._v("，二是 "),s("code",[t._v("NaN")]),t._v(" 与任何值都不相等，包括 "),s("code",[t._v("NaN")]),t._v(" 本身。")]),t._v(" "),s("p",[t._v("可以通过 "),s("code",[t._v("isNaN()")]),t._v(" 函数来确认括号里的参数是否「不是数值」，需要注意的是，"),s("code",[t._v("isNaN()")]),t._v(" 在接收到一个参数后，会尝试将这个值转换为数值，某些不是数值的值会直接转换为数值，例如字符串 "),s("code",[t._v('"10"')]),t._v(" 或 "),s("code",[t._v("Boolean")]),t._v(" 值。")]),t._v(" "),s("h4",{attrs:{id:"（4）数值转换函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（4）数值转换函数"}},[t._v("#")]),t._v(" （4）数值转换函数")]),t._v(" "),s("p",[t._v("有 3 个函数可以把非数值转换为数值："),s("code",[t._v("Number()")]),t._v("、"),s("code",[t._v("parseInt()")]),t._v(" 和 "),s("code",[t._v("parseFloat()")]),t._v("。")]),t._v(" "),s("p",[t._v("由于 "),s("code",[t._v("Number()")]),t._v(" 函数在转换字符串时比较复杂而且不够合理，因此更常用过的是另外两个函数。（—— 出自红宝书）")]),t._v(" "),s("p",[s("code",[t._v("parseInt()")]),t._v(" 在转换时可以拥有第二个参数：转换时使用的基数（即多少进制），建议无论在什么情况下都明确指定基数。（—— 出自红宝书）")]),t._v(" "),s("p",[s("code",[t._v("parseFloat()")]),t._v(" 只解析十进制值，因此它没有用第二个参数指定基数的用法。另外如果字符串没有小数点，或者小数点后都是零，"),s("code",[t._v("parseFloat()")]),t._v(" 会返回整数。")]),t._v(" "),s("p",[s("strong",[t._v("转换规则")]),t._v("：这 3 个函数都会忽略字符串前面的空格，直至找到第一个非空格字符。如果第一个字符不是数字字符或负号，就会返回 "),s("code",[t._v("NaN")]),t._v("，直到解析完所有后续字符或者遇到了一个非数字字符。"),s("br"),t._v("\n区别是 "),s("code",[t._v("parseInt()")]),t._v(" 转换过程中，小数点不是有效的数字字符；而 "),s("code",[t._v("parseFloat()")]),t._v(" 转换过程中，第一个小数点是有效的，后面的小数点是无效的，从第二个小数点开始的后面所有字符会被忽略。")]),t._v(" "),s("h3",{attrs:{id:"_2-5-bigint-类型（ecmascript-2020）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-bigint-类型（ecmascript-2020）"}},[t._v("#")]),t._v(" 2.5 BigInt 类型（ECMAScript 2020）")]),t._v(" "),s("p",[t._v("BigInt 类型是在 ECMAScript 2020（ES11）引入的新特性。")]),t._v(" "),s("p",[t._v("JavaScript 中能够精确表达的最大数字是 "),s("code",[t._v("2^53 - 1")]),t._v("，即 "),s("code",[t._v("Number.MAX_SAFE_INTEGER")]),t._v("，如果超过了这个范围，运算结果就不再准确了。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_SAFE_INTEGER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9007199254740991")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9007199254740992")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9007199254740992")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9007199254740994")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("而新的 BigInt 数据类型可以解决这个问题，它能够创建更大的数字。")]),t._v(" "),s("p",[t._v("通过在数字末尾加上字母 "),s("code",[t._v("n")]),t._v("，就可以将它转换成 BigInt。但要注意，我们无法将标准数字与 BigInt 数字混合在一起计算，否则将抛出 TypeError。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bigNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000000000000000000000000000n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bigNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 200000000000000000000000000000n")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bigNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError: Cannot mix BigInt and other types, use explicit conversions")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"_2-6-string-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-string-类型"}},[t._v("#")]),t._v(" 2.6 String 类型")]),t._v(" "),s("p",[t._v("String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，即字符串。")]),t._v(" "),s("p",[s("strong",[t._v("数值转换字符串")])]),t._v(" "),s("p",[t._v("要把一个值转换为一个字符串有两种方式：")]),t._v(" "),s("p",[t._v("第一种，几乎每个值都有的 "),s("code",[t._v("toString()")]),t._v(" 方法（除了 "),s("code",[t._v("null")]),t._v(" 和 "),s("code",[t._v("undefined")]),t._v("）。其中数值型字符串在调用该方法时，可以传递一个参数——输出数值的基数（默认是十进制）。")]),t._v(" "),s("p",[t._v("第二种，"),s("code",[t._v("String()")]),t._v(" 函数，它在转换过程中，如果值有 "),s("code",[t._v("toString()")]),t._v(" 方法，则调用该方法（没有参数）；如果值是 "),s("code",[t._v("null")]),t._v("，则返回 "),s("code",[t._v('"null"')]),t._v("；如果值是 "),s("code",[t._v("undefined")]),t._v("，则返回 "),s("code",[t._v('"undefined"')]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_2-7-symbol-类型（ecmascript-2015）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-symbol-类型（ecmascript-2015）"}},[t._v("#")]),t._v(" 2.7 Symbol 类型（ECMAScript 2015）")]),t._v(" "),s("p",[t._v("Symbol 类型是在 ECMAScript 2015（ES6）引入的新特性。")]),t._v(" "),s("p",[t._v("ES5 的对象属性名都是字符串，这容易造成属性名的冲突。因此 ES6 引入了一种新的基本数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，")]),t._v(" "),s("p",[t._v("关于 Symbol 的知识点可以参考阮一峰老师编写的《ES6标准入门（第3版）》中 "),s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/symbol",title:"Symbol - ECMAScript 6入门",target:"_blank",rel:"noopener noreferrer"}},[t._v("Symbol"),s("OutboundLink")],1),t._v(" 章节。")]),t._v(" "),s("h3",{attrs:{id:"_2-8-object-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-object-类型"}},[t._v("#")]),t._v(" 2.8 Object 类型")]),t._v(" "),s("p",[t._v("JavaScript 中的对象是一组数据和功能的集合。对象可以通过执行 "),s("code",[t._v("new")]),t._v(" 操作符后跟要创建的对象类型的名称来创建。")]),t._v(" "),s("p",[t._v("简单说，对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[t._v("1.《JavaScript高级程序设计（第3版）》"),s("br"),t._v("\n2.《ES6标准入门（第3版）》"),s("br"),t._v("\n2. "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures",title:"JavaScript 数据类型和数据结构",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN：JavaScript 数据类型和数据结构"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);