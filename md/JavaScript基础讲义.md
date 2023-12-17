# JavaScript基础讲义

## 一. JavaScript简介

JavaScript是由Netscape（网景）公妍发出来的一种在它的Navigator浏览器上执行的程序语言。
JavaScript是一种基于对象(object-based)和事件驱动(Event Driven)的简单的并具有安全性能的脚本语言。
JavaScript组成



1.ECMAScript:lavaScript的核心
2.文档对象模型(DOM):DOM（文档对象模型）是HTML和XML的应用程序接口(AP).DOM将把整个页面规划成油节点层级构成的文档
3.浏览器对象横型(BOM)对浏览器窗口进行访问和操作
扩展：JScript:微软推出的类似avaScript的语言

### 1.1 JS的作用

```html
HTML是页面骨架
CSS是页面衣服    
JS是页面灵魂
JS的作用:使得页面可以与用户进行交互    
```

### 1.2 JS发展史

从ECMA Script1.0一直到ECMA Script6.0(目前使用)
注意:IDEA默认使用的是ECMA Script5.0 我们需要改成6.0(一会介绍)    

    从ECMA Script1.0一直到ECMA Script6.0(目前使用)
    注意:IDEA默认使用的是ECMA Script5.0 我们需要改成6.0(一会介绍)    

### 1.3 JS的特点

1脚本语言
脚本语言是一种简单的程序，是由一些ASC川字符构成，可以使用任何一种文本编相器偏写。一些程序语言(如C、C++、Jva等)都必须经过编译，将源代码编译成二进制的可执行文件之后才能运行，而脚本语言不需要事先编译，只要有一个与其相适应的解释器就可以执行，
脚本语言是指在wb浏览器内有解释器解释执行的编程语言，每次运行程序的时候，解释器会把程序代码图译成可执行的格式。	

2基于对象的语言

面向对象有三大特点(封装，继承，多态)却一不可。
通常·基于对象”是使用对象，但无法利用现有对象模板产生新的对象类型，也就是说"基于对象“没有继承的特点。没有继承的概念也就无从谈论"多态”
3.事件驱动：
在网页中执行了某种操作的动作，被称为“事件~(vet),比如按下鼠标、移动窗口、选择菜单等都可以视为事件。当事件发生后，可能会引起相应的事件响应。
4.简单性
变量类型是采用弱类型，并未使用严格的数据类型。
var a,b,c a=123;a='abc";a=true;
5.安全性
lavaScript不能访问本地的硬盘，不能将数据存入到服务器上，不能对网络文档进行修改和制除，只能通过浏览器实现信息浏览或动态交互
6跨平台性
JavaScript依赖于浏览器本身，与操作平台无关，
只要计算机安装了支特avaScript的浏览器(装有avaScript解释器)，
JavaScript程序就可以正确执行，
缺点
名种浏览器支持JavaScript的程度是不一样的，支持和不完全支持javaScript的浏览器在浏览同一个带有JavaScript脚本的网页时，效果会有一定的差距，有时甚至会显示不出来
JavaScript和Java的区别
区别1：公司不同，前身不同
JavaScript是Netscape公司的产品，是为了扩展Netscape Navigator功能而开发的一种可以嵌入Wb页面中的基于对象和事件驱动的解程性语言，它的前身是Live Script;
Jva是SUN公司准出的新一代面向对象的程序设计语言，特别适合于Internet应用程序开发：Java的前身是Oak语言。

    a.JS不是编译型语言,是解释性语言(写完JS代码,不需要编译,直接交给浏览器,由浏览器就可以解释运行)
    b.JS是弱类型语言,Java是强类型语言
        JS定义变量时,统一使用关键字 let 变量名 = 值; 变量具体的类型,由赋的值决定	

### 1.4 JS的组成

```
a.ECMA Script: JS的核心(基础)语法
b.BOM 浏览器对象模型(主要用于操作浏览器相关)
c.DOM 文档对象模型(主要用于操作当前页面相关) 
```

语法

### 1.5输入输出

输入

```javascript
prompt('请输入')
```



弹框警示框输出

```
alert(输出'内容')
```

控制台输出

```
consol.log('控制台输出')
```

### 1.6注释

1.单行注释
ctrl + /
2.多行注释
默认的快捷键shift+alt+a
2.多行注释
vscode中修改多行注释的快捷键：ctrl shift +/

### 1.5数据类型

数值型：整数和浮点数统称为数值。例如85或3.1415926等。
字符串型：由0个，1个或多个字符组成的序列。在JavaScript中，用双引号或单引
号括起来表示，如您好°、学习JavaScript'等。·逻辑（布尔）型：用tue或false来表示，
空(u)值：表示没有值，用于定义空的成不存在的引用。要注意，空值不等同于
空字符串“或0.
·未定义(unde饰ned)值：它也是一个保留字。表示变量虽然已经声明，但却没有
赋值。
除了以上五种基本的数据类型之外，JavaScript还支持复合数据类型，复合数据类型猪对象和数组两种。

       变量
JavaScript中的变量是没有类型或者说是弱类型的，变量可以是任何一种数据类型，
变量定义
var up,down,left,right;
也可以直接给它赋值，但不建议如此。如下：
X=3;
注意：变量是蜀类型，但是常量还是有数据类型的
注意：代码区分大小写：分号可以省略，但不建议省略



在ES5的时候，我们认知的数据类型确实是 6种：Number、String、Boolean、undefined、object、Null。

ES6 中新增了一种 Symbol 。这种类型的对象永不相等，即始创建的时候传入相同的值，可以解决属性名冲突的问题，做为标记。

谷歌67版本中还出现了一种 bigInt。是指安全存储、操作大整数。（但是很多人不把这个做为一个类型）。

{ } 、[ ] 输出 object。

  console.log( ) 输出 function。

| String    | String    | 字符串               |
| --------- | --------- | -------------------- |
| Number    | Number    | 数据类型             |
| Boolean   | Boolean   | 布尔型               |
| Undefined | Undefined | 没有初始化、定义的值 |
| Null      | Object    | 不存在的对象         |
| NaN       | Number    | Number 中的特殊数值  |
| Object    | Function  |                      |

typeof 操作符

toString ( )   

  作用：其他类型转成 string 的方法

  支持：number、boolean、string、object 

  不支持：null 、undefined

toLocaleString ( )

   把数组转成本地字符串 

#### 字符串

创建

```js
var str1 = '';

var str2 = "";
```

转义字符

```javascript
var str = '第一行\n第二行\n第三行';

console.log(str); // 将会输出换行的字符串

```

通常转义字符都是通过 `\` 开头的。

同理，如果需要在双引号包裹的字符串中使用双引号，或者单引号包裹的字符串中使用单引号，就需要对引号进行转义。

```
var str = '我\'要\'显\'示\'一\'堆\'单\'引\'号';
```

| \'   | 单引号 |
| ---- | ------ |
| \"   | 双引号 |
| \&   | 和号   |
| \\   | 反斜杠 |
| \n   | 换行符 |
| \r   | 回车符 |
| \t   | 制表符 |
| \b   | 退格符 |
| \f   | 换页符 |

console.log(str); // 将会输出换行的字符串

##### 方法

###### 访问

**字符串是无法修改的**，只能进行访问。

```
var str = '我是字符串';

console.log(str); // 输出："我是字符串"
#这是直接访问整个字符串，还可以访问中间某一个字符。
var str = '一二三四五六七，7654321';

// 获取第一个字符
console.log(str[0]); // 输出："一"

// 获取最后一个字符
console.log(str[str.length - 1]); // 输出："1"
console.log(str.split('').pop()); // 输出："1"
通过字符串[下标]的形式可以访问到某一个字符，这种访问通常会用在字符串遍历上。
```

字符串长度

```
var string = '1234567';

var len = string.length;

console.log(len); // 输出：7

```

拼接

```
var str1 = '我是';
var str2 = '小明';

console.log(str1 + str2);
```



console.log(str); // 输出："我是字符串"

#### js引入方式

- （1）外部JavaScript

  外部JavaScript，指的是把HTML代码和JavaScript代码单独放在不同文件中，然后在HTML文档中使用“script标签”来引入JavaScript代码。

  外部JavaScript是最理想的JavaScript引入方式。在实际开发中，为了提升网站的性能和可维护性，一般都是使用外部JavaScript。

  ```html
  <!DOCTYPE html> 
  <html>
  <head>
      <meta charset="utf-8" />
      <title></title>
      <!--1、在head中引入-->
      <script src="index.js"></script>
  </head>
  <body>
      <!--2、在body中引入-->
      <script src="index.js"></script>
  </body>
  </html>
  ```

  

- （2）内部JavaScript

内部JavaScript，指的是把HTML代码和JavaScript代码放在同一个文件中。其中JavaScript代码写在<script></script>标签对内。

```html
<!DOCTYPE html> 
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <!--1、在head中引入-->
    <script>
        ……
    </script>
</head>
<body>
    <!--2、在body中引入-->
    <script>
        ……
    </script>
</body>
</html>
```



- （3）元素事件JavaScript

元素属性JavaScript，指的是在元素的“事件属性”中直接编写JavaScript或调用函数。

```html
<!DOCTYPE html> 
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <input type="button" value="按钮" onclick="alert('绿叶学习，给你初恋般的感觉')"/>
</body>
</html>
```



确认测试(Validation Testing)
确认测试又称有效性测试。任务是验证软件的功能和性能及其它特性是否与用户的要求一致。
对软件的功能和性能要求在软件需求规格说明书中已经明确规定。它包含的信息就是软件确认测试的基础

#### js变量声明

变量是程序在内存中申请的一块用来存放数据的空间。例如，程序在内存中保存字符串“小明”和“小张”，如图1所示。在图1中，我们可以将内存想象成一个酒店，当需要人住酒店时，就需要在酒店里预订一个房间。由于酒店里有大量的房间，为了准确地找到某一个房间， 需要给每个房间分配一个房间号。

同样地，内存中的每个变量需要进行命名，才可以找到某一个变量，因此，图1中的两个变量分别被命名为pl和p2。

```javascript
var age;   //声明一个名称为age的变量
```

使用var关键字声明变量后，计算机会自动为变量分配内存空间。age是自定义的变量名，通过变量名就可以访问变量在内存中分配的空间。

**变量赋值**

变量声明出来后，是没有值的，所以接下来就要为它赋值，示例代码如下

```javascript
var age;	//声明变量
age = 10;	//为变量赋值

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 声明和赋值</title>
</head>
<body>
  
  <script> 
    // 声明(定义)变量有两部分构成：声明关键字、变量名（标识）
    // let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语
    // age 即变量的名称，也叫标识符
    let age;
    // 赋值，将 18 这个数据存入了 age 这个“容器”中
    age = 18;
    // 这样 age 的值就成了 18
    document.write(age);
    
    // 也可以声明和赋值同时进行
    let str = 'hello world!';
    alert(str);
  </script>
</body>
</html>

var a;         //声明一个变量 a
var b,c,d;     //同时申明多个变量时，变量名之间用逗号隔开

console.log(a); 　　//在控制台显示变量a的值,输出为undefined
document.write(a); //在网页上打印变量a的值,输出为undefined
```

变量输出

```javascript
alert(age);	//使用alert()警告框输出age的值
console.log(age);	//将age的值输出到控制台中
```

变量关键字

JavaScript 使用专门的关键字 let 和 var 来声明（定义）变量，在使用时需要注意一些细节：

以下是使用 let 时的注意事项：

    允许声明和赋值同时进行
    不允许重复声明
    允许同时声明多个变量并赋值
    JavaScript 中内置的一些关键字不能被当做变量名

以下是使用 var 时的注意事项：

    允许声明和赋值同时进行
    允许重复声明
    允许同时声明多个变量并赋值

大部分情况使用 let 和 var 区别不大，但是 let 相较 var 更严谨，因此推荐使用 let，后期会更进一步介绍二者间的区别。

变量名规则

1. 只能是字母、数字、下划线、$，且不能能数字开头
2. 字母区分大小写，如 Age 和 age 是不同的变量
3. JavaScript 内部已占用于单词（关键字或保留字）不允许使用
4. 尽量保证变量具有一定的语义，见字知义

变量作用范围

##### let 和 const 定义

- let 在let 命令所在的代码块内声明局部变量。
- const 声明只读的常量值不能改变，不支持二次写值。

```javascript
const PI = 3.141592653589793; // 声明时必须进行初始化，且初始化后值不可再修改：
PI = 3.14;      // 报错 二次赋值
PI = PI + 10;   // 报错 二次赋值

```

const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用 const 定义的对象或者数组，其实是可变的。下面的代码并不会报错：

```javascript
// 创建常量对象
const car = {type:"Fiat", model:"500", color:"white"};
// 修改属性:
car.color = "red";
// 添加属性
car.owner = "Johnson";
// 但是我们不能对常量对象重新赋值：
car = {type:"Volvo", model:"EX60", color:"red"};    // 错误
```

```javascript
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>let 和 const 定义</title> 
</head>
<body>

<p>全局变量在任何脚本和函数内均可访问。</p>
<p id="demo"></p>
<script>
var carName = "Volvo";
myFunction();
function myFunction() 
{
    document.getElementById("demo").innerHTML =
		"我可以显示 " + carName;
}
</script>

</body>
</html>
```

Block Scope (块级作用域)

函数内使用 var 声明的变量只能在函数内容访问，如果不使用 var 则是全局变量。

使用 var 关键字重新声明变量会带来问题,在块中重新声明变量也会重新声明块外的变量：

```javascript
var x = 10;
// 这里输出 x 为 10
{ 
    var x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 2

```



let 关键字就可以解决这个问题，因为它只在 let 命令所在的代码块 {} 内有效。

```javascript
var x = 10;
// 这里输出 x 为 10
{ 
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10

```



- 以下这段代码中作用域外的i输出始终为5，而作用域内i则不断变化

```javascript
let i = 5;
for (let i = 0; i < 10; i++) {
    // 一些代码...
    // 这里 i 递增
}
// 这里输出 i 为 5
```

局部变量

在函数体内使用 var 和 let 关键字声明的变量有点类似。它们的作用域都是局部的:

```javascript
// 使用 var
function myFunction() {
    var carName = "Volvo";   // 局部作用域
}

// 使用 let
function myFunction() {
    let carName = "Volvo";   //  局部作用域
}
```

命令规则

```js
1、变量命名必须以字母、下划线”_”或者”$”为开头。其他字符可以是字母、_、美元符号或数字。
2、变量名中不允许使用空格和其他标点符号，首个字不能为数字。
3、变量名长度不能超过255个字符。
4、变量名区分大小写。(javascript是区分大小写的语言)
5、变量名必须放在同一行中
6、不能使用脚本语言中保留的关键字、保留字、true、false 和 null 作为标识符。
截止到目前为止JS描述了一组具有特定用途的关键字，一般用于控制语句的开始或结束,或者用于执行特定的操作等。关键字也是语言保留的，不能用作标识符。if for switch  case  break  continue  while  var  function
```

变量的定义

### 1、const

const定义的js变量是一个常量。不可以修改（相当于只读不可写入），而且必须初始化（给const一个初始值，不能为空），

>  注：const不能改变值，如果改变值。**浏览器也不会报错，只会默默的失败，**（出自ECMAscript 6入门）
>  

const的值不能在同一函数内重复声明，否则两个都会报错。

```js
const a = 5； //5被定义之后就不能改变，5这个位置不能为空

const a ；//错误，必须初始化
```

### 2、var

var是常用的定义变量， var 定义变量 如果没有初始化值会输出underfined，不会报错 

全局

**var定义的变量在函数作用域中，也就是说这个变量可以在方法外部调用，**



### 3.let

let是es6中出的标准 let定义的变量是块级作用域，只在let所在行数内有效，函数外无法使用变量。

相当于局部变量，一个函数中不能重复使用let定义相同的变量名，否则会报错

let也不会像var那样发生变量提升

let定义变量需要先声明在使用，否则会出现错误。 



 在此函数中。在这个函数中没有使用let声明foo就使用了，没有找到foo所以返回referenceError，

### 4、直接赋值

```js
a = a；
```

这种方法是不规范的，不推荐使用，大家知道有这个点就好了。

>  注：直接赋值，不声明变量，定义的变量属于全局变量，在全局范围内可以使用。

## 数据类型

>   网上关于js数据类型的文章比较多，我这里主要参考js高级程序设计写的 数据类型主要分为原始值和引用值，其中原始值是不能改变的，引用值是可以改变的 原始值有：    数值型：number（凡是数字都是数值型，不区分整数和小数）      字符串：string（凡是引号包裹起来的内容全部都是字符串）     布尔：boolean（true、false）      未定义型：undefined 引用值有： 对象类型：object（特殊取值null） 引用数据类型bject包括  ：object，array，function，data 引用值是可以改变的
>  

### 1、number 数值

1.number包含整数和浮点数，在控制台中，浮点数会自动转化为整数

```js
var num = 2.00
  console.log(num) // 输出：2，自动转换为了整数
```

2.浮点数的最高精度是17位

### 2.string字符串

>  1.字符串类型中的单双引号作用一样 2.字符串有length属性，可以取得字符串的长度 3.字符串是不可改变的，所谓的改变字符串是销毁原来的字符串创建了新的字符串，并不是改变原来的字符串。 4.字符串转换，这点在文章末尾写到。
>  

### 3.boolean布尔值

>  1。布尔值只有true和false两个值。true不一定等于1 false不一定等于0 看具体情况 2.  区分大小写，小写额true和false是布尔值，大写的False和True只是标识符不是布尔值  Boolean（）转型函数，把某个值转化成为Boolean值
>  

### 4.Undefined

>  声明变量未定义，变量值等于Undefined 调用函数时没有对应参数提供，参数值等于Undefined 对象没有赋值的属性，该属性值为Undefined 函数没有返回值，默认为Undefined
>  

### 5.null

null表示为空的引用

>  null通常用来占位 null不等于任何值，包括null本身 null在用typeof操作符去检查的时候，类型是object，（是指上是一个空指针）
>  

### 6.object引用数据类型





调试(Debug)
软件调试是在进行了成功的测试之后才开始的工作它与软件测试不同，调试的任务是进一步诊断和改正程序中潜在的错误。
调试活动由两部分组成：
确定程序中可疑错误的确切性质和位置。
对程序(设计，编码)进行修改，排除这个错误。

调试的步骤
(1)从错误的外部表现形式入手，确定程序中出错位置；
(2)研究有关部分的程序，找出错误的内在原因；
(3)修改设计和代码，以排除这个错误；
(4)重复进行暴露了这个错误的原始测试或某些有关测试。



几种主要的调试方法
调试的关键在于推断程序内部的错误位置及原因。可以采用以下方法：
强行排错
这种调试方法目前使用较多，效率较低。它不需要过多的思考，比较省脑筋。

回溯法调试
这是在小程序中常用的一种有效的调试方法。一旦发现了错误，人们先分析错误征兆，确定最先发现“症状”的位置。然后，人工沿程序的控制流程，向回追踪源程序代码，直到找到错误根源或确定错误产生的范围。

调试的步骤
(1)从错误的外部表现形式入手，确定程序中出错位置：
(2)研究有关部分的程序，找出错误的内在原因：
(3)修改设计和代码，以排除这个错误：
(4)重复进行暴露了这个错误的原始测试或某些有关测试。

几种主要的调试方法
调试的关键在于推断程序内部的错误位置及原因。可以采用以下方法：
强行排错
这种调试方法目前使用较多，效率较低。它不需要过多的思考，比较省脑筋。



归纳法调试
归纳法调试的基本思想是：从一些线索（错误着手，通过分析它们之间的关系来找出错误。常以3W1H形式组织可用的数据：
“What”列出一般现象；
“Where'”说明发现现象的地点；
“When”列出现象发生时所有已知情况；
“How”
说明现象的范围和量级；

演绎法调试
演绎法是一种从一般原理或前提出发，经过排除和精化
的过程来推导出结论的思考方法。

