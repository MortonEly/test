# javaweb

## 介绍

### 网页：展现数据

## css

##### 导入方式

1.内联样式：在标签内部使用stye属性，属性值是css属性键值对

<div style="color:red">Hello CSS~</div>
2.内部样式：定义<style>标签，在标签内部定义css样式

<style>
    span {
        color: blue
    }
</style>
<span> hello css</span>

外部样式：定义ink标签，引入外部的css文件
<link rel="stylesheet" href="demo.css">

demo.css:

div{
color: yellow;
}

##### 选择器

概念：选择器是选取需设置样式的元素（标签）

###### 分类

1. 元素

   div{
   color : red;

   }

2. id

   #name{
   color: red;

   }

   <div id="name">
       hello css
   </div>

3. 类

   .cls {

   color :red;

   }

   <div class ="cls">
       hello css
   </div>

   










数据库：存储和管理数据

## JavaWeb程序：逻辑处理

### 概念

JavaScript是一门跨平台、面向对象的脚本语言，来控制网页行为的，它能使网页可交互

JavaScript和Java是完全不同的语言，不论是概念还是设计。但是基础语法类似

JavaScript(简称：JS)在1995年由Brendan Eich发明，并于1997年成为-部ECMA标准，

ECMAScript6(ES6)是最新的JavaScript版本（发布于2015年）.

#### 引入方式

1,内部脚本：将S代码定义在HTML页面中

在HTML中，JavaScript代码必须位于<script>与</script>标签之间

<script>
    alert("hello JavaScript")
</script>

在HTML文档中可以在任意地方，放置任意数量的<script>,
一般把脚本置于<body>元素的底部，可改善显示速度，因为脚本执行会拖慢显示

2.外部脚本：将S代码定义在外部S文件中，然后引入到HTML页面中

		·外部文件：demo.js alert("hello JS~");
	     ·引入外部js文件<script src="./js/demo.js"></script>
	     外部脚本不能包含<scr1pt>标签
	<script>)标签不能自闭合
#### 书写语法

区分大小写：

与a一样，变量名、函数名以及其他一切东西都是区分大小写的每行结尾的分号可有可无
注释：
单行注释：∥注释内容
多行注释：·注释内容小
大括号表示代码块

##### 输出语句

1. 使用window.alert()写入警告框
   
   - window.alert(hello JS~)://弹出警告框
   
2. 使用document,write()写入HTML输出
   
   - document..write(hello JS-"):/∥g入HTML 
   
3. 使用console.log()写入浏览器控制台
   
   - console.log("hello JS-"):/写入控制台

###### 变量

<script>
    ver test =20;
    alert(test);
    /*
    var :
    1.全局变量
    2.变量可重复定义， 
    */
</script>

JavaScript是一门弱类型语言，变量可以存放不同类型的值变量名需要遵循如下规则：

- ​	组成字符可以是任何字母、数字、下划线(_)或美元符号（$）

- ​	 数字不能开头

- ​	建议使用驼蜂命名

   ECMAScript6新增了Iet关键字来定义变量。它的用法类似于var,但是所声明的变量，只在let关键字所在的代得块内有效，且不允许重复声明

	ECMAScript6新增了const关键字，用来声明一个只读的常量.一旦声明，常量的值就不能改变
	
###### 数据类型

JavaScript中分为：原始类型和引用类型5种原始类型：

- number:数字(整数、小数、NaN(Not a Number)

- string:字符、字符串，单双引皆可

- boolean:布尔。true,false

- nul:对象为空

- undefined:当声明的变量未初始化时，该变量的默认值是undefined

使用typeof运算符可以获取数据类型alert(typeof age):

###### 运算符

一元运算符：+，一
算术运算符：+，，·，/，%
赋值运算符：=，+=，=…
关系运算符：>，<，>=，<=，==，===，
逻辑运算符：&&，||，！
三元运算符：条件表达式？true_value:false_value

###### 流程控制语句

if
switch: 
for: 
while: 
do…while:



## JavaScript对象

#### array

JavaScript Array对像用于定义数组
定义
var变量名=new Array(元素列表：方式一 var arr=new Array(1,2,3):
var变量名=元素列表：方式二 var arr=[1,2,3
访问
arr[索引]=值；
arr[0]=1;
注意：js数组类似于Java集合，长度，类型都可变

#### String

##### 定义

var变量名=new String(s):方式一 var str new String("hello"):
var变量名=s;方式二var str "hello";var str ='hello';

##### 属性

length子符的长度

##### 方法

charAt（）返回在指定位置的字符。
IndexOf（）检索字符串，

#### 自定义对象

·格式
var对像名称={
属性名称1：属性值1,
属性名称2：属性值2
函数名称：function（形参列表）

}；

示例
var person ={
name:"zhangsan",
age:23,
eat:function (）{

alert(干饭~")：
}
}；

BOM

#### Window:浏览器窗口对象

获取：直接使用window,其中window.可以省略window.alert("abc"):
属性：获取其他BOM对象

history对H相stoy对的只读写用。
Navigator对Navigator对像的只i读智用。
Screen对Screen对的只读写引用。
location用于窗口或框架的Location对象

##### 方法

alert（）是示带有一段消息和一个确认按的馨告框
confirm（）显示带有一段涌息以及确认按铝和消按招的对话框。
setInterval（）按照指定的周期以毫秒计）来调用函数或计算表达式
setTimeout（）在指定的毫秒数后调用故或计算表达式

##### History:历史记录

获取：使用window.history获取，其中window.可以省略window.history.方法()：
history.方法()：

back（）载history列表中的前一个URL.
forward（）载history列表中的下一个URL.

##### loacation

获取：使用window.locatio获取，其中window.可以省略
window.location..方法():
location.方法():
属性
hrer设置或返回完整密的URL

#### DOM

Document Object Model文档对像模型将标记语言的各个组成部分封装为对象

DOM是W3C（万维网联盟）的标准

DOM定义了访问HTML和XML文档的标准：

W3CDOM标准被分为3个不同的部分：

##### 1.核心DOM:针对任何结构化文档的标准模型

- ​	Document:整个文档对象
- ​	Element:元素对象
- ​	Attribute:属性对象
- ​	Text:文本对象
- ​	Comment:注释对象

##### 2,XML DOM:针对XML文档的标准模型

##### 3.HTML DOM:针对HTML文档的标准模型

Image:<img>
Button <input type='button'>

Element:元素对象

获取：使用Document>对象的方法来获取

1.getElementByld:根据id属性值获取，返回一个Element对像

2.getElementsByTagName:根据标签名称获取，返回Elementi对像数组

3.getElementsByName:根据name属性值获取，返回Element对像数组

4.getElementsByClassName:根据class属性值获取，返回Element对象数组

#### 事件监听

·事件：HTML事件是发生在HTML元素上的“事情”。比如：

- ·按钮被点击
- ·鼠标移动到元素之上
- ·按下键盘按键

·事件监听：JavaScript可以在事件被侦测到时执行代码

##### 方法

事件绑定有两种方式：
·方式一：通过HTML标签中的事件属性进行绑定

<input type="button"onclick='on（）'>

function on{

alet我被点了")

};

方式二：通过DOM元素属性绑定

<input type="button"id="btn">

document.getElementByld("btn").onclick function(){

alert(我被点了");
}

##### 事件类型

表单验证

当输入框失去焦点时，验证输入内容是否符合要求
当点击注册按钮时，判断所有输入框的内容是否都符合要求，如果不合符则阻止表单提交



DOM
Dow(Document object Mode1):文档对象模型
·其实就是操作htm1中的标签的一些能力
·我们可以操作那些内容
	获取一个元素
	移除一个元素
	创建一个元素
	向页面里面添加一个元素
	给元素绑定一些事件
	获取元素的属性
	给元素添加一些css样式

Dom的核心对象就是docuemnt对像
document对象是浏览器内置的一个对象，里面存储着专门用来操作元素的各种方法
·DoM:页面中的标签，我们通过js获取到以后，就把这个对象叫做DOM对象



## web核心   

###    JavaWeb技术栈

#### 软件架构

#### B/S架构：

Browser/Server,浏览器/服务器架构模式，它的特点是，客户端只需要浏览器，应用程序的逻辑和数
据都存储在服务器端。浏览器只需要请求服务器，获取Wb资源，服务器把Web资源发送给浏览器即可

是Browser/Server这两个单词的首字母，指的是浏览器服务器，是WEB兴起后的一种架构。

解释：现在所有的网站都是BS架构，较为常见的例子有知乎、百度、网易云音乐Web等等，所有只需要通过浏览器即可使用。

优点：第一，更新简洁：如果需要更新内容了，对开发人员而言需要更改服务器的内容，但是对用户而言只需要刷新浏览器即可。第二，多设备同步：所有数据都在网上，只要能够使用浏览器即可登录使用。

缺点：第一，性能较低：相比于客户端应用性能较低，但是随着硬件性能的提升，这个差距在缩小。第二，浏览器兼容：处理低版本的浏览器显示问题一直是开发人员头疼的问题之一，移动设备兼容性较好，ie6已经越来越少人用了。

####  CS:客户端聚务器架构横式



CS架构

是Client/Service这两个单词的首字母，指的是客户端服务器架构的意思，很多常见的软件都是这种架构。

解释：对于CS架构，最为常见的例子就是网络游戏，比如LOL、WOW如果不联网无法使用，你在软件内的所有操作通过互联网能够传递到其他的玩家身上。

优点：第一，性能较高：可以将一部分的计算机工作放在客户端上，这样服务器只需要处理数据即可。第二，界面炫酷：客户端可以使用更多系统提供的效果，做出更为炫目的效果。

缺点：第一，更新软件：如果推出了新版本，不更新客户端无法登录使用（一部分）。第二，不同设备访问：如果使用其他的电脑，没有安装客户端的话就无法登录软件。



静态资源：HTML、CSS、JavaScript、图片等。负责页面展现
动态资源：Servlet、JSP等。负责逻辑处理
数据库：负责存储数据
HTTP协议：定义通信规则
Wb服务器：负责解析HTTP协议，解析请求数据，并发送响应数据

### web服务器

1、Web服务器一般指网站服务器，我们常见的www服务器最为网络上最常见的web服务器，作为网民上网时向浏览器发出一些请求的一种程序。web服务器同时是一种比较被动的程序，只有你在上网的时候发出指令，这时服务器才会响应。

1.Microsoft IIS

IIS是目前最流行的Web服务器产品之一，很多著名的网站都是建立在IIS 的平台上。它是一种Web(网页)服务组件，其中包括Web服务器、FTP服务器、NNTP服务器和SMTP服务器，分别用于网页浏览、文件传输、新闻服务和邮件发送等方面，它使得在网络(包括互联网和局域网)上发布信息变得轻而易举。同时，它还提供一个Internet数据库连接器，可以实现对数据库的查询和更新。

2.Apache

目前Apache仍然是世界使用最多的Web服务器软件。世界上很多著名的网站都是Apache的产物，它的成功之处主要在于它的源代码开放、有一支强大的开发团队、支持跨平台的应用（可以运行在几乎所有的Unix、Windows、Linux系统平台上）以及它的可移植性等方面。Apache具有简单、速度快、性能稳定等特点，并可做代理服务器来使用。

3.Kangle

Kangle Web服务器是一款多功能、安全稳定、易操作的高性能Web服务器和反向代理服务器软件。此外，Kangle也是一款专为做虚拟主机研发的Web服务器。实现虚拟主机独立进程、独立身份运行。用户之间安全隔离，一个用户出问题不影响其他用户。支持PHP、ASP、ASP.NET、Java、Ruby等多种动态开发语言。

4.Tomcat

Tomcat服务器是一个免费的开放源代码的Web应用服务器，属于轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP程序的首选。

5.Zeus

Zeus是一个运行于Unix下的非常优秀的Web服务器，据说性能超过Apache，是效率最高的Web服务器之一。

6.Nginx

Nginx不仅是一个小巧且高效的HTTP服务器，也可以做一个高效的负载均衡反向代理，通过它接受用户的请求并分发到多个Mongrel进程可以极大提高Rails应用的并发能力。

### Tomcat

#### 基本概念

#### web开发

web，网页的意思，www.baidu.com

#### 静态web

​    html，css
​    提供给所有人看的数据，始终不会变化！

- web页面无法动态更新，所有用户看到的都是同一个页面
  - 轮播图，点击特效：**伪动态**
  - JavaScript (实际开发中，用的最多)
  - VBScript
- 它无法和数据库交互（数据无法持久化，无法交互）

#### 动态web

​    淘宝，几乎是所有的网站；(千人千面)
​    提供给所有人看的数据，始终会变化，每个人在不同的时间，地点看到的信息各不相同。
​    技术栈：ServLet/JSP，ASP，PHP

在 Java 中，动态 web 资源开发的技术统称为 JavaWeb



### Web 应用程序

什么是程序

Web 应用程序：可以提供浏览器访问的程序；（提供DOS命令访问的程序，CS架构。😖）

a.html、b.html…多个web资源，这些资源可以被外界访问，对外界提供服务。
在互联网上能够访问到的任何一个页面或者资源，都存在于世界的某一个角落的计算机上。
资源是真实存在的，URL(统一资源定位符)，网络世界的通讯地址。
URL，这些统一的web资源会被放在同一个文件夹下，
通过 web 应用程序，（Tomcat服务器）来提供。
一个web应用程序由多部分组成：（静态web，动态web）
    html，css，js
    jsp，servlet
    java程序
    jar包
    配置文件（Properties）

web应用程序编写完毕之后，若想提供给外界访问：需要一个服务器来统一管理，

### HTTP

概念：HyperText Transfer Protocol,超文本传输协议，规定了浏览器和服务器之间数据传输的规则

##### HTTP协议特点：

1.基于TCP协议：面向连接，安全
2.基于请求响应模型的：一次请求对应一次响应
3.HTTP协议是无状态的协议：对于事务处理没有记忆能力。每次请求-响应都是独立的。
缺点：多次请求间不能共享数据。
优点：速度快

##### HTTP-请求数据格式

请求数据分为3部分：
1.请求行：请求数据的第一行，其中GET表示请求方式，/表示请求资源路径，HTTP/1.1表示协议版本
2.请求头：第二行开始，格式为key:value形式。
3.请求体：P0ST请求的最后一部分，存放请求参数

常见的HTTP请求头：

- Hos比表示请求的主机名

- User-Agent刘览器版本，例如Chrome浏宽器的标识类似Mozilla/5.0-Chrome/79,IE浏览m的标识英似Mozilla/5.0 Vindows NT-like Gecko:

- Accept:表示浏览器接收的资源类型，如tet/",image或者"表示所有：

- Accept-Language:表示浏克图角好的语言，最务可以据此返回不同语直的网页：

- Accept-Encoding:表示浏宽图可以支持的压笔类型，如gzip.deflate等。

  

GET请求和POST请求区别：

1.GET请求请求参数在请求行中，没有请求体，POST请求请求参数在请求体中
2.GET请求请求参数大小有限制，POST没有

##### HTTP-响应数据格式

响应数据分为3部分：

1.响应行：响应数据的第一行。其中HTTP/1.1表示协议版本，200表示响应状态码，OK表示状态码描述

2.响应头：第二行开始，格式为key:value形式

###### 常见的HTTP响应头：

- Content-Type:表示该响应内容的类型，例如text/html,image/jpeg:
- Content-Length:表示该响应内容的长度（字节数）：
- Content-Encoding:表示该响应压缩算法，例如gzip:
- Cache-Control:指示客户端应如何缓存，例如max-age300表示可以最多缓存300秒

3.响应体：最后一部分。存放响应数据



状态码大类

常见的响应码

#### web服务器

一、Servlet 是什么及作用？
1、Servlet 是什么？
Servlet（Server Applet）是Java Servlet的简称，称为小服务程序或服务连接器，用Java编写的服务器端程序，具有独立于平台和协议的特性， 是运行在 Web 服务器或应用服务器上的程序。

2、Servlet 的作用
它是作为来自 Web 浏览器或其他 HTTP 客户端的请求和 HTTP 服务器上的数据库或应用程序之间的中间层。主要功能在于收集来自网页表单的用户输入，交互式地浏览和生成数据，还可以生成动态Web内容。

二、Servlet 的生命周期
Servlet 生命周期可被定义为从创建直到毁灭的整个过程。

三个步骤即：初始化------>处理请求------>销毁

创建Servlet对象后---------->初始化（调用 init () 方法）--------->处理/响应客户端的请求（调用 service() 方法）--------->销毁（调用 destroy() 方法，最后由 JVM 的垃圾回收器进行垃圾回收）

三、生命周期方法详解
创建Servlet对象，通过服务器反射机制创建Servlet对象，第一次请求时才会创建。（默认）

1. init() 方法
调用Servlet对象的init()方法，初始化Servlet的信息，init()方法只会在创建后被调用一次（初始化阶段）
（1）init 方法被设计成只调用一次。它在第一次创建 Servlet 时被调用，在后续每次用户请求时不再调用。因此，它是用于一次性初始化，创建于用户第一次调用该 Servlet 的 URL 时，也可以指定 Servlet 在服务器第一次启动时被加载。

（2）当用户调用一个 Servlet 时，就会创建一个 Servlet 实例，每一个用户请求都会产生一个新的线程，适当的时候移交给 doGet 或 doPost 方法。

（3）init() 方法简单地创建或加载一些数据，这些数据将被用于 Servlet 的整个生命周期。

init 方法的定义如下：

```java
public void init() throws ServletException {
  // 初始化代码...
}
```

## 2. service() 方法

**响应请求，调用service()或者是doGet()，doPost()方法来处理请求，这些方法是运行的在多线程状态下的。（响应客户请求阶段）**

（1）service() 方法是执行实际任务的主要方法，处理来自客户端（浏览器）的请求，并把格式化的响应写回给客户端。

（2）每次服务器接收到一个 Servlet 请求时，服务器会产生一个新的线程并调用服务。

（3）Servlet接收和响应客户请求的过程，首先客户发送一个请求，Servlet是调用service()方法对请求进行响应的，通过源代码可见，service()方法中对请求的方式进行了匹配，选择调用doGet,doPost等这些方法，然后再进入对应的方法中调用逻辑层的方法，实现对客户的响应。由于在Servlet接口和GenericServlet中是没doGet,doPost等等这些方法的，HttpServlet中定义了这些方法，所以，我们每次定义一个Servlet的时候，都必须实现doGet或 doPost等这些方法。

（4）service() 方法检查 HTTP 请求类型（GET、POST、PUT、DELETE 等），并在适当的时候调用 doGet、doPost、doPut，doDelete 等方法进行处理。

**service方法的定义如下：**

```java
public void service(ServletRequest request,ServletResponse response) 
      throws ServletException, IOException{
}
```

由于service() 方法由容器调用，service 方法在适当的时候会调用 doGet、doPost、doPut、doDelete 等方法。所以，我们不用对 service() 方法做任何处理，只需要根据客户端的请求类型来重写 doGet() 或 doPost() 即可。

## 3. doGet() 方法

**用于处理请求，方法是运行的在多线程状态下的。（响应客户请求阶段）**

doGet() 是服务请求中最常用的方法，用于处理请求，当URL的请求类型为GET请求 ，或者是一个未指定请求类型HTML表单，那么该请求将由 doGet() 方法处理。

**doGet方法的定义如下：**

```java
public void doGet(HttpServletRequest request,HttpServletResponse response)
    throws ServletException, IOException {
    // Servlet 代码
}
```

## 4. doPost() 方法

**用于处理请求，方法是运行的在多线程状态下的。（响应客户请求阶段）**

doPost() 是服务请求中最常用的方法，用于处理请求，当请求来自一个特别指定了 请求类型为POST的 HTML 表单，那么该请求将由doPost() 方法处理。

**doPost方法的定义如下：**

```java
public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
    // Servlet 代码
}
```

## 5、destroy() 方法

**在长时间没有被调用或者是服务器关闭时，会调用destroy()方法来销毁Servlet对象。（终止阶段）**

（1）destroy() 方法只会被调用一次，在 Servlet 生命周期结束时被调用。

（2）destroy() 方法可以让Servlet 关闭数据库连接、停止后台线程、把 Cookie 列表或点击计数器写入到磁盘，并执行其他类似的清理活动。

（3）在调用 destroy() 方法之后，servlet 对象被标记为垃圾回收。

**destroy 方法定义如下：**

```java
public void destroy() {
    // 终止化代码...
  }
```

# 生命周期图解



Servlet urlPattern配置

# 一、urlPattern配置

Servlet要想被访问，必须配置其访问路径（urlPattern）

## 1、一个Servlet，可以配置多个urlPattern

> @WebServlet(urlPatterns = {"/demo1","demo2"})

## 2、urlPattern配置规则

### ① 精确匹配：

> 配置路径：@WebServlet ("/user/select")
>
> 访问路径：localhost:8080/web-demo/user/select

代码示例：

```scala
import javax.servlet.ServletException;



import javax.servlet.annotation.WebServlet;



import javax.servlet.http.HttpServlet;



import javax.servlet.http.HttpServletRequest;



import javax.servlet.http.HttpServletResponse;



import java.io.IOException;



 



/**



 * uslPattern



 * 精确匹配



 */



@WebServlet(urlPatterns = "/user/select")



public class ServletDemo8 extends HttpServlet {



 



    @Override



    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {



        System.out.println("demo8 get...");



    }



 



    @Override



    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {



 



    }



}
```

下面的代码示例运行结果，与以上结果，大同小异，只是配置路径不同。

### ② 目录匹配：

> 配置路径：@WebServlet ("/user/*")
>
> 访问路径：localhost:8080/web-demo/user/aaa
>
> ​         localhost:8080/web-demo/user/bbb

代码示例：

```scala
/**



 * uslPattern



 * 目录匹配：/user/*



 */



@WebServlet(urlPatterns = "/user/*")



public class ServletDemo9 extends HttpServlet {
```

###  ③ 扩展名匹配：

> 配置路径：@WebServlet ("*.do")
>
> 访问路径：localhost:8080/web-demo/aaa.do
>
> ​         localhost:8080/web-demo/bbb.do

代码示例：

```scala
/**



 * uslPattern



 * 扩展名匹配：*.do



 */



@WebServlet(urlPatterns = "*.do")



public class ServletDemo10 extends HttpServlet {
```

### ④ 任意路径：

> 配置路径：@WebServlet ("/")
>
> ​         @WebServlet ("/*")
>
> 访问路径：localhost:8080/web-demo/hehe
>
> ​         localhost:8080/web-demo/haha

代码示例：

```scala
/**



 * uslPattern



 * 任意匹配：/ 及 /*



 */



@WebServlet(urlPatterns = "/")



public class ServletDemo11 extends HttpServlet {
```

### **/** 和 **/\*** 区别：

> 当我们的项目中的Servlet配置了"**/**"，会覆盖调tomcat中的DefaultServlet，当其他的url-pattern都匹配不上时，都会走这个Servlet
>
> 当我们的项目配置了"**/\***"，意味着匹配任意访问路径

### 优先级：

> **精确路径 > 目录路径 > 扩展名路径 > /\* > /**

# 二、XML配置方法编写Servlet

Servlet从3.0版本后开始支持使用注解配置，3.0版本前只支持XML配置文件的配置方法

步骤：

## 1、编写Servlet类

```scala
import javax.servlet.ServletException;



import javax.servlet.http.HttpServlet;



import javax.servlet.http.HttpServletRequest;



import javax.servlet.http.HttpServletResponse;



import java.io.IOException;



 



public class ServletDemo12 extends HttpServlet {



 



    @Override



    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {



        System.out.println("demo12...");



    }



 



    @Override



    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {



 



    }



}
```

## 2、在web.xml中配置该Servlet

```cobol
<?xml version="1.0" encoding="UTF-8"?>



<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"



         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"



         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"



         version="4.0">



 



    <!--



        Servlet 全类名



    -->



 



    <servlet>



        <servlet-name>demo12</servlet-name>



        <servlet-class>com.itheima.web.request.ServletDemo12</servlet-class>



    </servlet>



 



 



    <!--



        Servlet 访问路径



    -->



 



    <servlet-mapping>



        <servlet-name>demo12</servlet-name>



        <url-pattern>/demo12</url-pattern>



    </servlet-mapping>



 



</web-app>
```

request对象是服务器对浏览器请求的封装，而response是服务器对服务器响应的封装

request用来取出请求信息，而response则用来添加要返回给浏览器的信息。

## 使用response对象设置http响应协议中的信息

用来生成Http响应信息，发送给用户。

**响应首行**

```
HTTP/1.1 200 OK1
```

- `setStatus(int sc)`：设置正常的响应状态码 status code
- `setStatus(int sc， String sm)`：设置正常的响应状态码,状态码描述 status 
   message,过时，因为正常状态下，状态码信息不会显示给用户，所以没有必要设置
- `sendError(int sc)`:设置错误的状态码
- `sendError(int sc, String sm)`：设置错误的状态码,包含错误信息

**响应头**

```
key:value1
```

- `setHeader(String name, String value)`:设置一个键值对，值为string
- `setDateHeader(String name, long date)`：设置一个键值对，值为long，long常用于毫秒的表示
- `setIntHeader(String name, int value)`：设置一个键值对，值为int类型
- `setHeader(String name, String value)`:添加一个键值对，值为string
- `setDateHeader(String name, long date)`：添加一个键值对，值为long，long常用于毫秒的表示
- `setIntHeader(String name, int value)`：添加一个键值对，值为int类型
- add 和 set 区别在于，前置直接添加（key是可以重复的），后者会修改原来的，没有才会添加。

几个常见的响应头：

- `ContentType:text/html;charset=utf-8`
- `Refresh:3;url=http://path` 3秒后跳转网页

html中meta标签的作用就是用于向响应头中添加信息。

**响应空行**

```
一个分隔符1
```

**响应正文**

```
需要发送的资源1
```

- `response.getWriter()`：获取字符流
- 父类方法`getOutputSteam()`：获取输出字节流

## 实现请求重定向

**手动实现：**

实现重定向很简单，只需要两个步骤：

在响应头中添加302状态码，告诉浏览器需要进行重定向 

```
response.setStatus(302)1
```

在响应头中添加Location，指定重定向的位置 

```
response.setHeader("Location", "http://www.baidu.com");1
```

当用户请求servlet时，服务器返回一个类似上面的响应头，上面的信息告诉浏览器，应该重新进行一次请求，请求的地址为 Header中的Location地址。 
 所以，请求重定向实际上是两次请求。

**直接实现：**

我们只需要使用:`response.setRedirect("http://www.baidu.com")`即可实现。

## 通过访问Servlet向浏览器传递一个图片

```
// 获取图片输入流
InputStream is = getServletContext().getResourceAsStream("/WEB-INFO/mm.jpg");
// 获取浏览器的输出流
byte[] buffer = new byte[1024];
// 将图片篇输入流写出到浏览器中
int len = -1;
while((len = is.readBuffer(buffer)) != -1){
    os.write(buffer, 0, len);
    os.flush();
}12345678910
```

## 通过访问Servlet下载文件

类似于图片，但是浏览器不能识别文件的名称和文件的类型，需要我们在响应头中设置文件的类型：

```
ServletContext sc = getServletContext();
String mimeType = sc.getMimeType("下载的文件名称"); // 传入下载的文件名称，会根据名称的拓展名识别mime类型
response.setContentType(type);123
```

## 通过request对象获取http请求协议中的内容

用来生成http请求信息。

**请求首行**

```
请求方式 请求路径 协议/版本号1
```

- `request.getMethod()` 请求方式
- `request.getContextPath()，getServletPath()…`获取请求路径
- 父类方法 `request.getScheme()` 获取请求协议

**请求头**

```
键值对1
```

- `request.getHeader(String name)`
- `request.getIntHeader(String name)`
- `request.getDateHeader(String name)`
- `request.getHeaderNames()`
- `request.getHeaders(Sring name)`一个key对应多个value

**请求空行**

```
请求正文（post才有）1
```

但是以下方法，无论是get还是post请求都可以获得参数值

- 父类方法 `String getParameter(String name)`
- `Map getParameterMap()`
- `Enumeration getParameterNames()`
- `String[] getParameterValues(String name)`

## 解决响应和请求的乱码问题

**处理get请求编码问题**

解决方案:在`conf/server.xml`中`URIEncoding="UTF-8"` 69行，

```
<Connector URIEncoding="UTF-8" 
    connectionTimeout="20000" 
    port="8888" 
    protocol="HTTP/1.1" 
    redirectPort="8443"/>12345
```

设置URIEncoding为UTF-8

**处理post请求编码问题**

服务器响应时的数据，即服务器向浏览器传递的数据的编码格式由服务器决定： 
 编码时使用的编码表，使用`getByte("编码表")`设置，或者使用`response.setCharacterEncoding`(编码表)设置。两者的区别在于 ，前者设置字节流码表，后者设置字符流码表。

解码时使用的编码表，使`response.setHeader("ContentType","text/html;charset=utf-8")`指定http响应头来设置。 





**客户端发送请求时的乱码解决：** 

**GET提交：** 
 参数在URL中，设置URL的解码配置，服务器默认使用IOS-8855-1拉丁码表解码URL，我们

可以通过 `tomcat/config/server.xml`配置文件中:

```
 <Connector 
     connectionTimeout="20000" 
     port="8080" 
     protocol="HTTP/1.1" 
     redirectPort="8443"/>12345
```

添加属性`URIEncoding="UTF-8"`即可将服务器默认的解码url的方式设置为utf-8

或者在doget方法中

将接收的乱码文字使用新的码表转换：

```
String name = request.getParamter("name"); // 获取乱码文字
byte[] bs = name.getBytes("IOS-8859-1"); // 根据乱码码表，将文字转换为字节数组
    String s = new String(bs, "UTF-8"); // 将字节数组按照新的码表解码，生成文字
```



**POST提交：**

与GET提交解码的区别： 
 解码事件不同，GET因为参数在URL中，所以服务器一旦接受请求就会立刻解码参数，而POST在Servlet调用获取参数的方法时才会解码。 
 所以，解决post请求的乱码很简单，只需要在参数调用前使用

```
request.setCharacterEncoding("utf-8");1
```

设置请求解码表即可。

## request 请求转发实现和request域

这就是请求转发，浏览器发送请求，servlet处理request和response部分业务，但是无法全部处理，也无法简单的显示到页面中，所以将处理过得request和response发送给jsp，jsp进行一些业务操作，并响应给浏览器，展示。

请求转发主要用来分工操作。

AServlet doGet()：

```
// ***** 不标准自定义转发
//todo AServlet进行业务处理，比如从数据库获取数据
// 处理结束后：=>
// 发送给Bservlet
BServlet bServlet = new BServlet();
bServlet.doGet(request, response);

//*****标准转发
// 使用request域(一个请求内有效，主要用于请求转发) 保存数据库的信息，发送给BServlet，即 AServlet和BServlet使用request域共享数据，request域是request对象中的一个Map。
request.setAttribute("name","Feathers");  // 向request域中存入一个键值对
request.getRequestDispatcher("/servlet/BServlet").forword(request.response);1234567891011
```

BServlet doGet()：

```
// todo 负责输出显示
// 从request域中取出值
System.out.println((String)request.getAttribute("name"));123
```

**注意：**

不能在转发的Servlet中向浏览器输出任何响应正文的内容，但是可以添加响应头。 
 因为Servlet中，即使你添加了响应体，也会被清空。

## 重定向和转发的区别

- 重定向是2次请求，转发是1次请求
- 重定向可以访问项目之外的地址，而转发不能
- 重定向不可以使用request域，而转使用request域，一次请求，一个request对象
- 重定向地址栏可能会发生会发生变化，而转发一定不会
- 重定向请求方式有可能发生改变（重定后的请求一定是get请求，只有显示设置post才是post请求，否则是get请求），而转发不会
- 重定向时response的方法（通过修改response头来完成重定向），而请求转发是resquest的方法（一次请求，转发给不同的Servlet）

请求重定向：客户端行为`response.sendRedirect()`，从本质上讲等同于两次请求，前一次请求对象不会被保存，地址栏的URL地址会发生改变。

请求转发：服务端行为`request.getRequestDispatcher().forward(request,response)`，是一次请求，转发后请求对象会保存，地址栏的URL地址不会发生改变。

## 请求包含

请求转发，转发的Servlet不能修改请求体，而请求包含中，同请求转发类似，但是可以修改请求体。 
 用途：用来解决重复操作。 
 将重复的操作提取到这个Servlet中，统一进行处理

往往在多个JSP中使用，一个jsp用于处理相同的操作，其余的jsp根据是否需要处理，进行依次处理。

实现： 
 AServlet doGet()：

```
response.setContentType("text/html;charset=utf-8");
// 包含
request.getRequestDispatcher("/servlet/BServlet").include(request,response);
response.getWriter().write("Aservlet 处理");1234
```

BServlet doGet():

```
response.getWriter().write("Bservlet 处理");1
```

结果：

```
Aservlet 处理Bservlet 处理
```



### Maven

Maven项目架构管理工具
我们目前用来就是方使导入3r包的1
M3en的核心思想，约定大于配置
·有的束，不要去违反。
Me会规定好你该如何去编写我们的aa代码，必须要按照这个规范来：

配置环境变量
在我们的系统环境变量中
配置如下配置：
M2_HOME	maven日录下的bin目录
MAVEN_HOMEmaven的日录
在系统的Path中配MAVEN_HOME





# XML语言

## 什么是XML？

　　XML是指可扩展标记语言(eXtensible Markup Language)，它是一种*标记语言*，很类似HTML。它被设计的宗旨是传输数据，而非显示数据。 XML标签没有被预定义，需要用户自行定义标签。 XML技术是W3C组织(World Wide Web Consortium万维网联盟)发布的，目前遵循的是W3C组织于2000年发布的XML1.0规范。 XML被广泛认为是继Java之后在Internet上最激动人心的新技术。

XML语言出现的根本目的在于描述向上图那种有关系的数据。

XML是一种通用的数据交换格式。

在XML语言中，它允许用户自定义标签。一个标签用于描述一段数据；一个标签可分为开始标签和结束标签，在起始标签之间，又可以使用其它标签描述其它数据，以此来实现数据关系的描述。

XML中的数据必须通过软件程序来解析执行或显示，如IE；这样的解析程序称之为*Parser*(解析器)。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<中国>
    <北京>
        <海淀></海淀>
        <丰台></丰台>
    </北京>
    <山东>
        <济南></济南>
        <青岛></青岛>
    </山东>
    <湖北>
        <武汉></武汉>
        <荆州></荆州>
    </湖北>
</中国>
```

## XML常见应用：

XML技术除用于保存有关系的数据之外，它还经常用作软件配置文件，以描述程序模块之间的关系。(如后面将要学习到的Struts、Spring和Hibernate都是基于XML作为配置文件的)

在一个软件系统中，通过XML配置文件可以提高系统的灵活性。即程序的行为是通过XML文件来配置的，而不是硬编码。

数据交换：不同语言之间用来交换数据

小型数据库：用来当数据库存储数据。

# XML语法：

## XML语法：

一个XML文件分为如下几部分内容：

　　文档声明 元素 属性 注释 CDATA区 、特殊字符 处理指令（PI:Processing Instruction）

### 文档声明

在编写XML文档时，需要先使用文档声明来声明XML文档。且必须出现在文档的第一行。并且必须指定

最简单的语法:

```xml
<?xml version=“1.0”?>
```

用*encoding*属性说明文档所使用的字符编码。保存在磁盘上的文件编码要与声明的编码一致。如：

```
<?xml version=“1.0” encoding=“GB2312”?>
```

 

用*standalone*属性说明文档是否独立，即是否依赖其他文档。 如：

```
<?xml version=“1.0” standalone=“yes”?> 
```

yes不用引入外部的文件，no需要引入。（不常用）

### 元素

#### 标签

XML元素指XML文件中出现的标签。

一个标签分为起始和结束标签(不能省略)。一个标签有如下几种书写形式：

　　包含标签主体：<mytag>some content</mytag>

　　不含标签主体：<mytag/>

一个标签中可以嵌套若干子标签，但所有标签必须合理的嵌套，不允许有交叉嵌套。

<mytag1><mytag2></mytag1></mytag2> WRONG！

一个XML文档必须有且仅有一个根标签，其他标签都是这个根标签的子标签或孙标签。

#### 标签的空格、换行

对于XML标签中出现的所有空格和换行，XML解析程序都会当作标签内容进行处理。例如：下面两段内容的意义是不一样的

由于在XML中，空格和换行都作为原始内容被处理，所以，在编写XML文件时，使用换行和缩进等方式来让原文件中的内容清晰可读的“良好”书写习惯可能要被迫改变。

#### 命名规范

一个XML元素可以包含字母、数字以及其它一些可见字符，但必须遵守下面的一些规范：

　　区分大小写，例如，<P>和<p>是两个不同的标记。

　　不能以数字或“-” (中划线)开头。

　　不能以xml(或XML、或Xml 等)开头。

　　不能包含空格。

　　名称中间不能包含冒号（:）。

### 属性

一个元素可以有多个属性，每个属性都有它自己的名称和取值，例如：<mytag name=“value” …/>

属性值一定要用引号(单引号或双引号)引起来。

属性名称的命名规范与元素的命名规范相同

元素中的属性是不允许重复的

在XML技术中，标签属性所代表的信息也可以被改成用子元素的形式来描述，例如：

```xml
<mytag>
    <name>
        <firstName/>
        <lastName/>
    </name>
</mytag>
```

### 注释

XML中的注释语法为：<!--这是注释-->

注意：

　　XML声明之前不能有注释

　　注释不能嵌套，例如：

| 显示结果 | 描述   | 转义字符 | 十进制 |
| -------- | ------ | -------- | ------ |
|          | 空格   | &nbsp;   | &#160; |
| <        | 小于号 | &lt;     | &#60;  |
| >        | 大于号 | &gt;     | &#62;  |
| &        | 与号   | &amp;    | &#38;  |
| "        | 双引号 | &quot;   | &#34;  |
| '        | 单引号 | &apos;   | &#39;  |
| ×        | 乘号   | &times;  | &#215; |
| ÷        | 除号   | &divde;  | &#247; |

1. 文档声明

   在编写XML文档时，需要先使用文档声明来声明XML文档。且必须出现在文档的第一行，写在整个xml文档的第一行第一列。

       <?xml version=“1.0” encoding=“GB2312”standalone=“yes”?>
       
       1

   最基本的语法应包括版本的声明<?xml version="1.0"?>,其后的两个属性分别代表文档使用的字符编码，和文档是否依附于其他文档的存在。 

2. 元素

   XML元素指XML文件中出现的标签。一个标签分为起始和结束标签(不能省略)。一个标签有如下几种书写形式：
   （1） 包含标签主体：<mytag>some content</mytag>
   （2）不含标签主体：<mytag/>
   （3）一个标签中可以嵌套若干子标签，但所有标签必须合理的嵌套，不允许有交叉嵌套。下面的写法是错误的。 <mytag1><mytag2></mytag1></mytag2>
   （4）一个XML文档必须有且仅有一个根标签，其他标签都是这个根标签的子标签或孙标签。
   （5）对于XML标签中出现的所有空格和换行，XML解析程序都会当作标签内容进行处理。例如：下面两段内容的意义是不一样的。
   <网址>XML文档的基本结构</网址>
   <网址> XML文档的基本结构 </网址>
   所以在编写XML文件时，使用换行和缩进等方式来让原文件中的内容清晰可读的“良好”书写习惯可能要被迫改变。
   （6）命名规范：
   –区分大小写，例如，<P>和<p>是两个不同的标记。
   –不能以数字或”_” (下划线)开头。
   –不能以xml(或XML、或Xml 等)开头。
   –不能包含空格。
   –名称中间不能包含冒号（:）。 

3. 属性

   （1）一个元素可以有多个属性，每个属性都有它自己的名称和取值，例 如：<mytag name=“value” …/>
   （2）属性值一定要用引号(单引号或双引号)引起来。
   （3）属性名称的命名规范与元素的命名规范相同
   （4）元素中的属性是不允许重复的
   （5）在XML技术中，标签属性所代表的信息也可以被改成用子元素的形式来描述.
   （6）对于一些单个字符，若想显示其原始样式，也可以使用转义的形式予以处理。转义字符如下

4. 注释

5. CDATA区，特殊字符

   CDATA是Character Data的缩写
   作用：把标签当做普通文本内容，不用使用转义字符。
   语法：<![CDATA[内容]]>

   

   <![CDATA[
       <电子科技大学>修行小和尚</电子科技大学>
   ]]>
   其中，<电子科技大学>修行小和尚</电子科技大学>会被当做文本，不是标签。

6. 处理指令（PI:Processing Instruction）

   处理指令，简称PI(Processing Instruction)。 
    作用：用来指挥软件如何解析XML文档。 
    语法：必须以`“作为开头，以`“?>”`作为结尾。 
    常用处理指令： 
    XML文件声明：``

# XML约束

1.什么是XML约束

　　在XML技术里，可以编写一个文档来约束一个XML

　　文档的书写规范，这称之为XML约束。

2.为什么需要XML约束

3.常用的约束技术

　　XML DTD

　　XML Schema

一个[XML](https://so.csdn.net/so/search?q=XML&spm=1001.2101.3001.7020)文档一旦有了约束，那么这个XML文档就只能使用约束中创建的元素及属性。如果约束没有创建< a >元素，那么XML文档就不能使用< a >元素！！！

因为xml文档是可以自定义元素的，这会让使用xml文档的应用程序无法知道xml文档的真实结构。通常应用程序都会要求xml文件的结构是固定的，以满足自己的需求，这就说明，不同的应用程序要求自己的xml文档必须符合一定的要求。

例如，当使用xml文档作为某个Java swing应用程序的配置文件时，要求xml文档结构如下：

```xml
<frame title="test xml" layout="java.awt.BorderLayout">
  <bgcolor>
    <red>200</red>
    <green>0</green>
    <blue>0</blue>
  </bgcolor>
  <size>
    <width>300</width>
    <heigth>200</heigth>
  </size>
  <content>
    <label>
      <text>hello xml</text>
    <label>
  </content>
</frame>
```

XML文档约束的类型

xml文档约束有两种类型：dtd和schema

    dtd：dtd是平面式文档，dtd文件不是xml文档，通常扩展名为“.dtd”。它是最早的xml约束；
    schema：schema本身也是xml文档，它比dtd要更加强大，通常扩展名为“.xsd”。它是新的xml文档约束，用来替代dtd。

DTD是老的XML约束，Schema是新的，用Schema替换掉DTD
DTD

DTD（Document Type Definition），文档类型定义，用来约束XML文档。例如要求xml文档的根元素必须是，在元素下可以包含0~n个元素，每个元素必须有一个number属性，而且还要有三个子元素，分别为、、，这三个子元素的内容必须为文本内容，而不能是子元素。

1.DTD(Document Type Definition)，全称为文档类型定义。

1、DTD展示

　2.书写完成DTD，并且约束成功后，可以总结书写的过程，更方便记忆。

　　复杂标签：<!ELEMENT 标签名 (子节点)>

　　简单标签：<!ELEMENT 标签名 (#PCDATA)>

　　引入DTD：<!DOCTYPE 根节点 SYSTEM “dtd的地址”>

### 将DTD与XML文档关联三种方式

　　DTD约束即可以作为一个单独的文件编写，也可以在XML文件内编写

　　1.使用内部DTD

　　　　<!DOCTYPE 根节点 [ DTD的代码 ]>

　　2.使用外部DTD

　　　　<!DOCTYPE 根节点 SYSTEM “DTD的地址” >

　　3.使用网络DTD

　　　　<!DOCTYPE 根节点 PUBLIC “DTD的名称” “DTD的地址” >

　　　　常见的使用网络DTD约束有 Struts2的框架

#### 在xml文件内编写DTD



```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE 书架 [
    <!ELEMENT 书架 (书+)>
    <!ELEMENT 书 (书名,作者,售价)>
    <!ELEMENT 书名 (#PCDATA)>
    <!ELEMENT 作者 (#PCDATA)>
    <!ELEMENT 售价 (#PCDATA)>
]>
<书架>
    <书>
        <书名>Java就业培训教程</书名>
        <作者>张孝祥</作者>
        <售价>39.00元</售价>
    </书>
    ...
</书架>
```

　对应的XML为：<商品 类别=“服装” 颜色=“黄色”/>

#####  　属性值类型

　　CDATA：表示属性的取值为普通的文本字符串

　　ENUMERATED (DTD没有此关键字)：表示枚举，只能从枚举列表中任选其一，如(鸡肉|牛肉|猪肉|鱼肉)

　　ID:表示属性的取值不能重复（不能只写数字）

##### 　　设置说明

　　#REQUIRED：表示该属性必须出现

　　#IMPLIED：表示该属性可有可无

　　#FIXED:表示属性的取值为一个固定值。语法：#FIXED "固定值"

　　直接值：表示属性的取值为该默认值



#### 引入外部DTD文档

　　XML使用DOCTYPE声明语句来指明它所遵循的DTD文档，有两种形式：

　　　　当引用的DTD文档在本地时，采用如下方式：　　

　　　　<!DOCTYPE 根元素 SYSTEM “DTD文档路径”>

　　　　如：<!DOCTYPE 书架 SYSTEM “book.dtd">

　　　　当引用的DTD文档在公共网络上时，采用如下方式：　　　

　　　　<!DOCTYPE 根元素 PUBLIC “DTD名称” “DTD文档的URL”>

　　　　如：



```
<!DOCTYPE web-app PUBLIC 
        "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
        "http://java.sun.com/dtd/web-app_2_3.dtd">
```

### DTD约束语法细节

 　元素定义 属性定义 实体定义

#### 元素（ELEMENT）定义

　　在DTD文档中使用ELEMENT关键字来声明一个XML元素。

　　语法：<!ELEMENT 元素名称 使用规则>　

　　　　使用规则：

　　　　　　(#PCDATA):指示元素的主体内容只能是普通的文本.(Parsed Character Data)

　　　　　　EMPTY：用于指示元素的主体为空。比如<br/>

　　　　　　ANY:用于指示元素的主体内容为任意类型。

　　　　　　(子元素)：指示元素中包含的子元素

定义子元素及描述它们的关系:

　　　　　　如果子元素用逗号分开，说明必须按照声明顺序去编写XML文档。

　　　　　　 如: <!ELEMENT FILE (TITLE,AUTHOR,EMAIL)

　　　　　　如果子元素用“|”分开，说明任选其一。

　　　　　　 如:<!ELEMENT FILE (TITLE|AUTHOR|EMAIL)

　　　　　　用+、*、？来表示元素出现的次数

　　　　　　　　如果元素后面没有+*?:表示必须且只能出现一次

　　　　　　　　+:表示至少出现一次，一次或多次

　　　　　　　　*：表示可有可无，零次、一次或多次

　　　　　　　　?:表示可以有也可以无，有的话只能有一次。零次或一次 如： <!ELEMENT MYFILE ((TITLE*, AUTHOR?, EMAIL)* | COMMENT)>

####  属性（ATTLIST）定义

##### 属性声明举例

```xml
<!ATTLIST 商品
    类别 CDATA #REQUIRED 必须的
    颜色 CDATA #IMPLIED  可选的
>
```

    <!ELEMENT students (student+)>
    <!ELEMENT student (name,age,sex)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT age (#PCDATA)>
    <!ELEMENT sex (#PCDATA)>

解读上面DTD：

    students元素中可以包含1~n个student元素；
    student元素中必须包含name、age、sex元素，而且顺序也是固定的；
    name元素内容为文本，即字符串；
    age元素内容为文本；
    sex元素内容为文本。

2、在XML文档中指定本地DTD



<!DOCTYPE students SYSTEM "students.dtd">
<students>
    <student>
        <name>zhangSan</name>
        <age>23</age>
        <sex>male</sex>
    </student>
</students>
<!ELEMENT students (student+)>
<!ELEMENT student (name, age, sex)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT age (#PCDATA)>
<!ELEMENT sex (#PCDATA)>

其中，表示指定dtd文件。 
 指定DTD的语法：

- 指定DTD的语法，以“”结束；
- students表示根元素；
- SYSTEM表示dtd文件在本地；
- “students.dtd”表示DTD文件路径。







### 3、在XML文档中指定内部DTD**

<?xml version="1.0" encoding="utf-8" standalone="no" ?>

<!DOCTYPE students [
<!ELEMENT students (student+)>
<!ELEMENT student (name, age, sex)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT age (#PCDATA)>
<!ELEMENT sex (#PCDATA)>
]>
<students>
    <student>
        <name>zhangSan</name>
        <age>23</age>
        <sex>male</sex>
    </student>
</students>



## servlet

什么是Servlet
    

    Servlet（Server Applet），全称Java Servlet，未有中文译文。是用Java编写的服务器端程序。其主要功能在于交互式地浏览和修改数据，生成动态Web内容。狭义的Servlet是指Java语言实现的一个接口，广义的Servlet是指任何实现了这个Servlet接口的类，一般情况下，人们将Servlet理解为后者。
    
    Servlet运行于支持Java的应用服务器中。从实现上讲，Servlet可以响应任何类型的请求，但绝大多数情况下Servlet只用来扩展基于HTTP协议的Web服务器。
Servlet的工作模式
    

客户端发送请求至服务器
服务器启动并调用Servlet，Servlet根据客户端请求生成响应内容并将其传给服务器
服务器将响应返回客户端


Servlet API 概览
    Servlet API 包含以下4个Java包：

1.javax.servlet   其中包含定义servlet和servlet容器之间契约的类和接口。

2.javax.servlet.http   其中包含定义HTTP Servlet 和Servlet容器之间的关系。

3.javax.servlet.annotation   其中包含标注servlet，Filter,Listener的标注。它还为被标注元件定义元数据。

4.javax.servlet.descriptor，其中包含提供程序化登录Web应用程序的配置信息的类型。

# Servlet 生命周期

Servlet 生命周期可被定义为从创建直到毁灭的整个过程。以下是 Servlet 遵循的过程：

- Servlet 初始化后调用 **init ()** 方法。
- Servlet 调用 **service()** 方法来处理客户端的请求。
- Servlet 销毁前调用  **destroy()** 方法。
- 最后，Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。

现在让我们详细讨论生命周期的方法。

## init() 方法

init 方法被设计成只调用一次。它在第一次创建 Servlet 时被调用，在后续每次用户请求时不再调用。因此，它是用于一次性初始化，就像 Applet 的 init 方法一样。

Servlet 创建于用户第一次调用对应于该 Servlet 的 URL 时，但是您也可以指定 Servlet 在服务器第一次启动时被加载。

当用户调用一个 Servlet 时，就会创建一个 Servlet 实例，每一个用户请求都会产生一个新的线程，适当的时候移交给 doGet 或 doPost 方法。init() 方法简单地创建或加载一些数据，这些数据将被用于 Servlet 的整个生命周期。

init 方法的定义如下：

```
public void init() throws ServletException {
  // 初始化代码...
}
```

## service() 方法

service() 方法是执行实际任务的主要方法。Servlet 容器（即 Web 服务器）调用 service() 方法来处理来自客户端（浏览器）的请求，并把格式化的响应写回给客户端。

每次服务器接收到一个 Servlet 请求时，服务器会产生一个新的线程并调用服务。service() 方法检查 HTTP  请求类型（GET、POST、PUT、DELETE 等），并在适当的时候调用 doGet、doPost、doPut，doDelete 等方法。

下面是该方法的特征：

```
public void service(ServletRequest request, 
                    ServletResponse response) 
      throws ServletException, IOException{
}
```





# ServletConfig 类

**ServletConfig 类从类名上来看，就知道是 Servlet 程序的配置信息类。**

**Servlet 程序和 ServletConfig 对象都是由 Tomcat 负责创建，我们负责使用。**

**Servlet 程序默认是第一次访问的时候创建，ServletConfig 是每个 Servlet 程序创建时，就创建一个对应的 ServletConfig 对 象。**

# **a)ServletConfig 类的三大作用**

**1、可以获取 Servlet 程序的别名 servlet-name 的值**

**2、获取初始化参数 init-param**

**3、获取 ServletContext 对象**

## **web.xml 中的配置：**

```xml
<!-- servlet 标签给 Tomcat 配置 Servlet 程序 -->

<servlet>

    <!--servlet-name 标签 Servlet 程序起一个别名（一般是类名） -->

    <servlet-name>HelloServlet</servlet-name>
    <!--servlet-class 是 Servlet 程序的全类名-->

    <servlet-class>com.atguigu.servlet.HelloServlet</servlet-class>

    <!--init-param 是初始化参数-->

    <init-param>

        <!--是参数名-->

        <param-name>username</param-name>

        <!--是参数值-->

        <param-value>root</param-value>
    </init-param>

    <!--init-param 是初始化参数-->

    <init-param>

        <!--是参数名-->

        <param-name>url</param-name>

        <!--是参数值-->

        <param-value>jdbc:mysql://localhost:3306/test</param-value>
    </init-param>
</servlet>

        <!--servlet-mapping 标签给 servlet 程序配置访问地址-->

<servlet-mapping>

<!--servlet-name 标签的作用是告诉服务器，我当前配置的地址给哪个 Servlet 程序使用-->

<servlet-name>HelloServlet</servlet-name>

<!--
url-pattern 标签配置访问地址 <br/>
/ 斜杠在服务器解析的时候，表示地址为：http://ip:port/工程路径 <br/>
/hello 表示地址为：http://ip:port/工程路径/hello <br/>
-->

<url-pattern>/hello</url-pattern>
</servlet-mapping>
```

```xml
@Override

public void init(ServletConfig servletConfig) throws ServletException {
System.out.println("2 init 初始化方法");

// 1、可以获取 Servlet 程序的别名 servlet-name 的值

System.out.println("HelloServlet 程序的别名是:" + servletConfig.getServletName());

// 2、获取初始化参数 init-param

System.out.println("初始化参数 username 的值是;" + servletConfig.getInitParameter("username"));
System.out.println("初始化参数 url 的值是;" + servletConfig.getInitParameter("url"));

// 3、获取 ServletContext 对象

System.out.println(servletConfig.getServletContext());
}
```

## 一、JSP的介绍与创建

1. JSP的全称是Java Server Pages，即Java的服务器页面
2. JSP的主要作用是代替Servlet程序回传HTML页面的数据
3. web目录(或其他)右击 --> new --> JSP/JSPX --> 输入文件名 --> 选择JSP file创建

- JSP（全称JavaServer  Pages），JSP将Java代码和特定变动内容嵌入到静态的页面中，实现以静态页面为模板，动态生成其中的部分内容。JSP文件在运行时会被其编译器转换成更原始的Servlet代码。JSP编译器可以把JSP文件编译成用Java代码写的Servlet，然后再由Java编译器来编译成能快速执行的二进制机器码，也可以直接编译成二进制码。
- 简单来说：JSP是一个模版引擎，它简化了开发，封装了servlet响应html标签的繁琐代码。JSP技术以Java语言作为脚本语言，为用户的HTTP请求提供服务，并能与服务器上的其它Java程序共同处理复杂的业务需求。
   JSP就是一种特殊的servlet.

## 二.tomcat响应jsp给客户端的原理

tomcat服务器与客户端是两个不同的程序，端口号也不一样，服务器响应请求之后发送数据到客户端只能通过response对象去处理。response对象是[servlet](https://so.csdn.net/so/search?q=servlet&spm=1001.2101.3001.7020)中方法的参数。

### 服务器自动做了一些事情：

1. 为每个jsp生成一个servlet（即生成xxx_jsp.java文件，并把java文件编译为字节码文件xxx_jsp.class）.
2. 在生成的servlet中会有一个response对象，默默的用response.getWriter().write(“html标签”)方法生成html标签。
    证明上述说法：
    如下图的jsp文件：

```
 out.write("deployer-howto.html\">Deployer</a></li>\n");
      out.write("                        </ul>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("                <div class=\"col20\">\n");
      out.write("                    <div class=\"container\">\n");
      out.write("                        <h4>Get Involved</h4>\n");
      out.write("                        <ul>\n");
      out.write("                            <li><a href=\"");
      out.write((String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${tomcatUrl}", String.class, (PageContext)_jspx_page_context, null));
      out.write("getinvolved.html\">Overview</a></li>\n");
      out.write("                            <li><a href=\"");
      out.write((String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${tomcatUrl}", String.class, (PageContext)_jspx_page_context, null));
      out.write("source.html\">Source Repositories</a></li>\n");
      out.write("                            <li><a href=\"");
      out.write((String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${tomcatUrl}", String.class, (PageContext)_jspx_page_context, null));
      out.write("lists.html\">Mailing Lists</a></li>\n");
      out.write("                            <li><a href=\"https://wiki.apache.org/tomcat/FrontPage\">Wiki</a></li>\n");
      out.write("                        </ul>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("                <div class=\"col20\">\n");
      out.write("                    <div class=\"container\">\n");
      out.write("                        <h4>Miscellaneous</h4>\n");
      out.write("                        <ul>\n");
      out.write("                            <li><a href=\"");
      out.write((String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${tomcatUrl}", String.class, (PageContext)_jspx_page_context, null));
      out.write("contact.html\">Contact</a></li>\n");
      out.write("                            <li><a href=\"");
      out.write((String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${tomcatUrl}", String.class, (PageContext)_jspx_page_context, null));
     
```

## 三.JSP三大指令

1. page 用于声明jsp : jsp=html+page指令

- contentType=“text/html;charset=UTF-8” 指定jsp文件的mime类型和字符集
- import=“java.util.*” 为jsp的脚本中的Java代码去导包
- errorPage=“500.jsp” 如果当前页面发生异常，就跳转到500.jsp中
- isErrorPage=“true” 承认自己是不是错误处理页面，如果为true就可以使用exception内置对象

```java
<%@ page contentType="text/html;charset=UTF-8" language="java" errorPage="error.jsp" %>
1
```

1. include 静态包含，一个jsp页面可以包含另一个jsp页面

- 静态包含 – 两个jsp之间使用静态包含，会被tomcat服务器编译成一个servlet,可以实现脚本互通

```java
<%@ include file = "a.jsp" %>
1
```

1. taglib 用于导入外部资源标签库，jstl

- 引入外部标签库，通常用于引入jstl标签

## 四.九个内置对象

### 1.域对象（4个）

- pageContext
- request
- session
- application

```jsp
//最小的域对象，仅限于当前页面
pageContext.setAttribute("name","李白");
//request域对象，使用范围限于转发之间的页面
request.setAttribute("name","韩信");
//session域对象，范围是一次会话，浏览器或服务器不关闭称为一次会话，该工程下的任何jsp页面都可以取到
session.setAttribute("name","孙尚香");
//application域对象，范围最大，只要服务器不关，那么存的值一直有效
application.setAttribute("name","马可波罗");
```

### 2.其它对象

- response
- out
- page
- exception
- config

## 五.JSP发展史和mvc

### JavaWeb发展史

1. 只有servlet,如果响应动态资源，必须使用response.writer()去输出大量的标签
2. jsp出生和繁荣，完全依赖jsp,省略了servlet,优点：便于开发，缺点:耦合度高，代码非常不清晰
3. mvc模式，jsp和servlet共存，jsp中只有少量的java代码，主要还是用于页面展示，核心功能放在servlet中

## 声明脚本(现在基本不再使用)

声明脚本的格式是：`<%! 声明脚本java代码 %>`
 作用：可以给jsp翻译出来的java类定义

即我们在这个里面写的java代码，会被翻译成java代码，然后我们运行我们这个页面的时候，会在程序里面产生一个对应的java文件，同时会对这些代码进行编译，运行java代码
 我们来尝试用这个玩意完成四个事情

## 一）头部的page指令

jsp 的 page 指令可以修改 jsp 页面中一些重要的属性，或者行为。

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
1
```

page指令中有如下属性：

- **language 属性** 表示 jsp 翻译后是什么语言文件。暂时只支持 java。
- **contentType 属性** 设置响应头 contentType 的内容。也是源码中 response.setContentType()参数值
- **pageEncoding 属性** 表示当前 jsp 页面文件本身的编码。
- **import 属性** 跟 java 源代码中一样，给当前 jsp 页面导入需要使用的类包。
- **autoFlush 属性** 设置当 out 输出流缓冲区满了之后，是否自动刷新缓冲区。默认值是 true。
- **buffer 属性** 设置 out 缓冲区的大小。默认是 8kb
- **errorPage 属性** 设置当前 jsp 发生错误后，需要跳转到哪个页面去显示错误信息，这个页面的路径一般都是以`/`斜杠打头，它表示请求地址为 `http://ip:port/工程路径/`，映射到代码的 Web 目录
- **isErrorPage 属性** 设置当前 jsp 页面是否是错误页面。是的话，就可以使用 exception 异常对象，从而获取异常信息
- **session 属性** 设置当前 jsp 页面是否获取 session 对象,默认为 true
- **extends 属性** 给服务器厂商预留的 jsp 默认翻译的 servlet 继承于什么类

#### 声明类的属性

脚本分类：

JSP脚本就是Java代码片段，它分为三种：
 <%...%>：Java语句；
 <%=…%>：Java表达式；
 <%!...%>：Java定义类成员；

## （二）常用脚本

### 1.声明脚本（极少使用）

**格式**：

```html
<%!  
	java 代码 
%>
```

**作用**：可以给 jsp 翻译出来的 java 类定义全局变量、方法、静态代码块和内部类等。 （几乎可以写在类的内部写的代码，都可以通过声明脚本来实现）

```jsp
    <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
      <head>
    	<title>JSP演示</title>
      </head>
      
      <body>
        <h1>JSP演示</h1>
        <%
        	// Java语句
        	String s1 = "hello jsp";
        	// 不会输出到客户端，而是在服务器端的控制台打印
        	System.out.println(s1);
        %>
      <!-- 输出到客户端浏览器上 -->
        输出变量：<%=s1 %><br/>
        输出int类型常量：<%=100 %><br/>
        输出String类型常量：<%="你好" %><br/>
        <br/>
        使用表达式输出常量是很傻的一件事，因为可以直接使用html即可，下面是输出上面的常量：<br/>
        100<br/>
        你好   
      </body>
    </html>
```

### 2.内置对象out

out对象在JSP页面中无需创建就可以使用，它的作用是用来向客户端输出

```html
  <body>



    <h1>out.jsp</h1>



	<%



		//向客户端输出



		out.print("你好！");



	%>



  </body>
```

其中<%=…%>与out.print()功能是相同的！它们都是向客户端输出，例如：
 <%=s1%>等同于<% out.print(s1); %> 
 <%=”hello”%>等同于<% out.print(“hello”); %>，也等同于直接在页面中写hello一样。

### 3.多个<%...%>可以通用

在一个JSP中多个<%...%>是相通的。例如：

```html
  <body>



    <h1>out.jsp</h1>



	<%



		String s = "hello";



	%>



	<%



		out.print(s);



	%>

  </body>
```

```javascript
  <body>



    <h1>表格</h1>



	



	<table border="1" width="50%">



		<tr>



			<th>序号</th>



			<th>用户名</th>



			<th>密码</th>



		</tr>



	<%



		for(int i = 0; i < 10; i++) {	



	%>



		<tr>



			<td><%=i+1 %></td>



			<td>user<%=i %></td>



			<td><%=100 + 1 %></td>



		</tr>



	<%



		}



	%>



	</table>



  </body>
```

### 2.表达式脚本（常用）

**格式**： `<%=表达式 %>`
 **作用**：表达式脚本用于向页面输出内容。

- 表达式脚本翻译到 Servlet 程序的 _jspService() 方法中 以 out.print() 打印输出
- 由于表达式脚本翻译的内容都在_jspService() 方法中，所以_jspService()方法中的对象，在表达时脚本中都可以直接使用
- out 是 jsp 的一个内置对象，用于生成 html 的源代码
- 注意：表达式不要以分号结尾，否则会报错
- 表达式脚本可以输出任意类型。 比如：   
  1. 输出整型
  2. 输出浮点型
  3. 输出字符串
  4. 输出对象

```html
<%=12 %> <br> 
<%=12.12 %> <br> 
<%="我是字符串" %> <br> 
<%=map%> <br> 
<%=request.getParameter("username")%>
```

### 3.代码脚本（使用最多）

**格式**：

```html
<% 
	java 代码 
%> 
123
```

**作用**：代码脚本里可以书写任意的 java 语句。

- 代码脚本的内容都会被翻译到 _jspService()方法中，所以 _jspService() 方法中可以写的 java 代码，都可以书写到代码脚本中
- 可以由多个代码脚本块组合完成一个完整的 java 语句。
- 代码脚本还可以和表达式脚本一起组合使用，在 jsp 页面上输出数据

## （三）三种注释

### 1.html 注释

```html
<!-- 这是 html 注释 -->
1
```

html 注释会被翻译到 java 源代码中，在_jspService() 方法里，以 out.writer 输出到客户端。

### 2.java 注释

用于给脚本中的java代码注释

```html
<% 
	// 单行 java 注释 
	/* 
	多行 java 注释 
	*/ 
%>
123456
```

java 注释会被翻译到 java 源代码中。

### 3.jsp 注释

```html
<%-- 这是 jsp 注释 --%> 
1
```

jsp 注释可以注释掉jsp 页面中所有代码

# 三、jsp 九大内置对象

我们打开翻译后的 java 文件,查看_jspService() 方法：

jsp 中九大内置对象分别是：

- **request 对象** 请求对象，可以获取请求信息
- **response 对象** 响应对象。可以设置响应信息
- **pageContext 对象** 当前页面上下文对象。可以在当前上下文保存属性信息
- **session 对象** 会话对象。可以获取会话信息。
- **exception 对象** 异常对象只有在 jsp 页面的 page 指令中设置 isErrorPage=“true” 的时候才会存在
- **application 对象** ServletContext 对象实例，可以获取整个工程的一些信息。
- **config 对象** ServletConfig 对象实例，可以获取 Servlet 的配置信息
- **out 对象** 输出流。
- **page 对象** 表示当前 Servlet 对象实例（用它不如使用 this 对象）。

九大内置对象，都是我们可以在【代码脚本】或【表达式脚本】中直接使用的对象

# 四、jsp 四大域对象

 四大域对象经常用来保存数据信息。

四个域对象分别是：

- **pageContext** (PageContextImpl 类) 同一个 jsp 页面范围内有效
- **request** (HttpServletRequest 类)一次请求内有效
- **session** (HttpSession 类) 一个会话范围内有效（打开浏览器访问服务器，直到关闭浏览器）
- **application** (ServletContext 类) 整个 web 工程范围内都有效（只要 web 工程不停止，数据都在）

域对象就是可以像 Map 一样存取数据的对象。四个域对象功能一样，不同的是它们对数据的存取范围。 虽然四个域对象都可以存取数据。在使用上它们是有优先顺序的。 四个域在使用的时候，优先顺序是他们有效范围从小到大的顺序：
 **pageContext ——>request——> session ——> application**

## 3.JSP的原理

### 1.JSP是特殊的Servlet

JSP是一种特殊的Servlet，当JSP页面首次被访问时，容器（Tomcat）会先把JSP编译成Servlet，然后再去执行Servlet。所以JSP其实就是一个Servlet！





### 2.JSP真身存放目录

> 1. JSP生成的Servlet存放在${CATALANA}/work目录下，我经常开玩笑的说，它是JSP的“真身”。我们打开看看其中的内容，了解一下JSP的“真身”。
> 2. 你会发现，在JSP中的静态信息（例如<html>等）在“真身”中都是使用out.write()完成打印！这些静态信息都是作为字符串输出给了客户端。
> 3. JSP的整篇内容都会放到名为_jspService的方法中！

## 4.再论JSP脚本

JSP脚本一共三种形式：
 <%...%>：内容会直接放到“真身”中；
 <%=…%>：内容会放到out.print()中，作为out.print()的参数；
 <%!…%>：内容会放到_jspService()方法之外，被类直接包含；

前面已经讲解了<%...%>和<%=…%>，但还没有讲解<%!...%>的作用！
 现在我们已经知道了，JSP其实就是一个类，一个Servlet类。<%!...%>的作用是在类中添加方法或成员的，所以<%!...%>中的内容不会出现在_jspService()中。

```java
<%!



    private String name;



    public String hello() {



        return "hello JSP!";



    }



%>
```

## 5.JSP注释

我们现在已经知道JSP是需要先编译成.java，再编译成.class的。其中<%-- ... --%>中的内容在JSP编译成.java时会被忽略的，即JSP注释。

也可以在JSP页面中使用html注释：<!-- …  -->，但这个注释在JSP编译成的.java中是存在的，它不会被忽略，而且会被发送到客户端浏览器。但是在浏览器显示服务器发送过来的html时，因为<!-- … -->是html的注释，所以浏览器是不会显示它的。

# EL表达式

## 1.EL表达式的语法

EL(expression language)是为了让JSP写起来更加方便，他提供了在jsp中简化表达式的方法，让jsp的代码更加简化

> 语法结构：${expression}

注意，EL表达式一般操作的都是域对象中的数据，操作不了局部变量.

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      pageContext.setAttribute("username","zhangsan");
      request.setAttribute("username","lisi");
      session.setAttribute("username","wangwu");
      application.setAttribute("username","zhaoliu");
  %>
  <pre>
        获取作用域中username： ${username}<br><%-- 默认从小到大的范围中找，找到的第一个返回 --%>
        不在作用域中的： ${password}
        <%--获取request作用域中的username： ${requestScope.username}
        获取session作用域中的username： ${sessionScope.username}
        获取application作用域中的username： ${applicationScope.username}--%>
  </pre>
</body>
</html>
123456789101112131415161718192021
```

不在作用域中的不是显示null，而是显示为空

域对象的概念在jsp中共有四种，分别是pageContext，request，session，application，范围依次是-> 本页面，一次请求，一次会话，整个应用程序

### 从指定范围中取值，以及取值默认规则

- 当需要指定从某个特定的域对象中查找数据的时候可以使用四个域对象对应的空间对象分别为：pageScope,requestScope,sessionScope,applicationScope
- EL默认的查找方式为：从小到大查找，找到了即返回，若未查找到则返回空字符串

## 2.实例

### 1.获取指定范围的username

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      pageContext.setAttribute("username","zhangsan");
      request.setAttribute("username","lisi");
      session.setAttribute("username","wangwu");
      application.setAttribute("username","zhaoliu");

  %>
  <pre>
         获取pageContext作用域中的username:  ${pageScope.username}
         获取request作用域中的username： ${requestScope.username}
         获取session作用域中的username： ${sessionScope.username}
         获取application作用域中的username： ${applicationScope.username}
  </pre>
</body>
</html>
```

### 2.获取作用域中的集合

```jsp
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      List<String> list=new ArrayList<String>();
      list.add("aaa");
      list.add("bbb");
      list.add("ccc");
      request.setAttribute("list",list);
  %>
  <pre>
           获取list中指定下标的数据：${list[1]}--${list[2]}
           获取集合的长度：${list.size()}
           list代表的是存在域对象中的变量名(限域变量名)
  </pre>
</body>
</html>
```

### 3.获取JavaBean对象

```jsp
<%@ page import="com.User.User" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
         User user=new User();
         user.setUsername("zhangsan");
         user.setSex(true);
         user.setUserId(1);
         request.setAttribute("user",user);//设置域对象属性
  %>
  <pre>
         获取JavaBean中的username  ${user.username}
         获取JavaBean中的userId    ${user.userId}
         获取JavaBean中的sex       ${user.sex}     
  </pre>
</body>
</html>
```

### 4.empty

```
 判断JavaBean中的User是否为空 ${empty user}<%--返回true则为空% 结果为false-->
```

## 3.EL表达式的运算





### MVC

MVC全名是Model View  Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范，用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。

- m:model 模型层，泛指service层，dao层和javaBean实体类
- v:view 视图层，使用jsp展示数据
- c:controller 控制层，使用servlet处理请求和响应

MVC的全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件设计典范。它是用一种业务逻辑、数据与界面显示分离的方法来组织代码，将众多的业务逻辑聚集到一个部件里面，在需要改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑，达到减少编码的时间。

MVC开始是存在于桌面程序中的，M是指业务模型，V是指用户界面，C则是控制器。

使用的MVC的目的：在于将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。比如Windows系统资源管理器文件夹内容的显示方式，下面两张图中左边为详细信息显示方式，右边为中等图标显示方式，文件的内容并没有改变，改变的是显示的方式。不管用户使用何种类型的显示方式，文件的内容并没有改变，达到M和V分离的目的。

V即View视图是指用户看到并与之交互的界面。比如由html元素组成的网页界面，或者软件的客户端界面。MVC的好处之一在于它能为应用程序处理很多不同的视图。在视图中其实没有真正的处理发生，它只是作为一种输出数据并允许用户操纵的方式。

M即model模型是指模型表示业务规则。在MVC的三个部件中，模型拥有最多的处理任务。被模型返回的数据是中立的，模型与数据格式无关，这样一个模型能为多个视图提供数据，由于应用于模型的代码只需写一次就可以被多个视图重用，所以减少了代码的重复性。

C即controller控制器是指控制器接受用户的输入并调用模型和视图去完成用户的需求，控制器本身不输出任何东西和做任何处理。它只是接收请求并决定调用哪个模型构件去处理请求，然后再确定用哪个视图来显示返回的数据。

**MVC举例一：**

最典型的MVC就是jsp+servlet+javabean模式。

JavaBean作为模型，既可以作为数据模型来封装业务数据，又可以作为业务逻辑模型来包含应用的业务操作。其中，数据模型用来存储或传递业务数据，而业务逻辑模型接收到控制器传过来的模型更新请求后，执行特定的业务逻辑处理，然后返回相应的执行结果。

JSP作为表现层，负责提供页面为用户展示数据，提供相应的表单（Form）来用于用户的请求，并在适当的时候（点击按钮）向控制器发出请求来请求模型进行更新。

Serlvet作为控制器，用来接收用户提交的请求，然后获取请求中的数据，将之转换为业务模型需要的数据模型，然后调用业务模型相应的业务方法进行更新，同时根据业务执行结果来选择要返回的视图。

**MVC举例二：**

**Struts2框架**：Struts2是基于MVC的轻量级的web应用框架。Struts2的应用范围是Web应用，注重将Web应用领域的日常工作和常见问题抽象化，提供一个平台帮助快速的完成Web应用开发。基于Struts2开发的Web应用自然就能实现MVC，Struts2着力于在MVC的各个部分为开发提供相应帮助。

下面通过代码来简单解释一下：

[**MVC的优点：**](http://lib.csdn.net/base/softwaretest)

[**1.**](http://lib.csdn.net/base/softwaretest)**[耦合性](http://baike.baidu.com/item/耦合性)低**

视图层和业务层分离，这样就允许更改视图层代码而不用重新编译模型和控制器代码，同样，一个应用的业务流程或者业务规则的改变只需要改动MVC的模型层即可。因为模型与控制器和视图相分离，所以很容易改变应用程序的数据层和业务规则。

**2.重用性高**

[MVC](http://baike.baidu.com/item/MVC模式)[模式](http://baike.baidu.com/item/MVC模式)允许使用各种不同样式的视图来访问同一个服务器端的代码，因为多个视图能共享一个模型，它包括任何WEB（HTTP）浏览器或者无线浏览器（wap），比如，用户可以通过电脑也可通过手机来订购某样产品，虽然订购的方式不一样，但处理订购产品的方式是一样的。由于模型返回的数据没有进行格式化，所以同样的构件能被不同的界面使用。

**3.部署快，[生命周期](http://baike.baidu.com/item/生命周期)成本低**

MVC使开发和维护用户[接口](http://baike.baidu.com/item/接口)的技术含量降低。使用MVC模式使开发时间得到相当大的缩减，它使程序员（Java开发人员）集中精力于业务逻辑，界面程序员（HTML和JSP开发人员）集中精力于表现形式上。

**4.可维护性高**

分离视图层和业务逻辑层也使得WEB应用更易于维护和修改。

**MVC的缺点：**

**1.完全理解MVC比较复杂。**

由于MVC模式提出的时间不长，加上同学们的实践经验不足，所以完全理解并掌握MVC不是一个很容易的过程。

**2.调试困难。**

因为模型和视图要严格的分离，这样也给调试应用程序带来了一定的困难，每个构件在使用之前都需要经过彻底的测试。

**3.不适合小型，中等规模的应用程序**

在一个中小型的应用程序中，强制性的使用MVC进行开发，往往会花费大量时间，并且不能体现MVC的优势，同时会使开发变得繁琐。

**4.增加系统结构和实现的复杂性**

对于简单的界面，严格遵循MVC，使模型、视图与控制器分离，会增加结构的复杂性，并可能产生过多的更新操作，降低运行效率。

**5.视图与控制器间的过于紧密的连接并且降低了视图对模型数据的访问**

视图与控制器是相互分离，但却是联系紧密的部件，视图没有控制器的存在，其应用是很有限的，反之亦然，这样就妨碍了他们的独立重用。

依据模型操作接口的不同，视图可能需要多次调用才能获得足够的显示数据。对未变化数据的不必要的频繁访问，也将损害操作性能。



## 什么是request和response

request对象是服务器对浏览器请求的封装，而response是服务器对服务器响应的封装。 

request用来取出请求信息，而response则用来添加要返回给浏览器的信息。

## 使用response对象设置http响应协议中的信息

用来生成Http响应信息，发送给用户。

**响应首行**

```
HTTP/1.1 200 OK1
```

- `setStatus(int sc)`：设置正常的响应状态码 status code
- `setStatus(int sc， String sm)`：设置正常的响应状态码,状态码描述 status 
   message,过时，因为正常状态下，状态码信息不会显示给用户，所以没有必要设置
- `sendError(int sc)`:设置错误的状态码
- `sendError(int sc, String sm)`：设置错误的状态码,包含错误信息

**响应头**

```
key:value1
```

- `setHeader(String name, String value)`:设置一个键值对，值为string
- `setDateHeader(String name, long date)`：设置一个键值对，值为long，long常用于毫秒的表示
- `setIntHeader(String name, int value)`：设置一个键值对，值为int类型
- `setHeader(String name, String value)`:添加一个键值对，值为string
- `setDateHeader(String name, long date)`：添加一个键值对，值为long，long常用于毫秒的表示
- `setIntHeader(String name, int value)`：添加一个键值对，值为int类型
- add 和 set 区别在于，前置直接添加（key是可以重复的），后者会修改原来的，没有才会添加。

几个常见的响应头：

- `ContentType:text/html;charset=utf-8`
- `Refresh:3;url=http://path` 3秒后跳转网页

html中meta标签的作用就是用于向响应头中添加信息。

**响应空行**

```
一个分隔符1
```

**响应正文**

```
需要发送的资源1
```

- `response.getWriter()`：获取字符流
- 父类方法`getOutputSteam()`：获取输出字节流

## 实现请求重定向

**手动实现：**

实现重定向很简单，只需要两个步骤：

在响应头中添加302状态码，告诉浏览器需要进行重定向 

```
response.setStatus(302)1
```

在响应头中添加Location，指定重定向的位置 

```
response.setHeader("Location", "http://www.baidu.com");1
```

当用户请求servlet时，服务器返回一个类似上面的响应头，上面的信息告诉浏览器，应该重新进行一次请求，请求的地址为 Header中的Location地址。 
 所以，请求重定向实际上是两次请求。

**直接实现：**

我们只需要使用:`response.setRedirect("http://www.baidu.com")`即可实现。

## 通过访问Servlet向浏览器传递一个图片

```
// 获取图片输入流
InputStream is = getServletContext().getResourceAsStream("/WEB-INFO/mm.jpg");
// 获取浏览器的输出流
byte[] buffer = new byte[1024];
// 将图片篇输入流写出到浏览器中
int len = -1;
while((len = is.readBuffer(buffer)) != -1){
    os.write(buffer, 0, len);
    os.flush();
}12345678910
```

## 通过访问Servlet下载文件

类似于图片，但是浏览器不能识别文件的名称和文件的类型，需要我们在响应头中设置文件的类型：

```
ServletContext sc = getServletContext();
String mimeType = sc.getMimeType("下载的文件名称"); // 传入下载的文件名称，会根据名称的拓展名识别mime类型
response.setContentType(type);123
```

## 通过request对象获取http请求协议中的内容

用来生成http请求信息。

**请求首行**

```
请求方式 请求路径 协议/版本号1
```

- `request.getMethod()` 请求方式
- `request.getContextPath()，getServletPath()…`获取请求路径
- 父类方法 `request.getScheme()` 获取请求协议

**请求头**

```
键值对1
```

- `request.getHeader(String name)`
- `request.getIntHeader(String name)`
- `request.getDateHeader(String name)`
- `request.getHeaderNames()`
- `request.getHeaders(Sring name)`一个key对应多个value

**请求空行**

```
请求正文（post才有）1
```

但是以下方法，无论是get还是post请求都可以获得参数值

- 父类方法 `String getParameter(String name)`
- `Map getParameterMap()`
- `Enumeration getParameterNames()`
- `String[] getParameterValues(String name)`

## 解决响应和请求的乱码问题

**处理get请求编码问题**

解决方案:在`conf/server.xml`中`URIEncoding="UTF-8"` 69行，

```
<Connector URIEncoding="UTF-8" 
    connectionTimeout="20000" 
    port="8888" 
    protocol="HTTP/1.1" 
    redirectPort="8443"/>12345
```

设置URIEncoding为UTF-8

**处理post请求编码问题**

服务器响应时的数据，即服务器向浏览器传递的数据的编码格式由服务器决定： 
 编码时使用的编码表，使用`getByte("编码表")`设置，或者使用`response.setCharacterEncoding`(编码表)设置。两者的区别在于 ，前者设置字节流码表，后者设置字符流码表。

解码时使用的编码表，使`response.setHeader("ContentType","text/html;charset=utf-8")`指定http响应头来设置。 

**客户端发送请求时的乱码解决：** 

**GET提交：** 
 参数在URL中，设置URL的解码配置，服务器默认使用IOS-8855-1拉丁码表解码URL，我们

可以通过 `tomcat/config/server.xml`配置文件中:

```
 <Connector 
     connectionTimeout="20000" 
     port="8080" 
     protocol="HTTP/1.1" 
     redirectPort="8443"/>12345
```

添加属性`URIEncoding="UTF-8"`即可将服务器默认的解码url的方式设置为utf-8

或者在doget方法中

将接收的乱码文字使用新的码表转换：

```
String name = request.getParamter("name"); // 获取乱码文字
byte[] bs = name.getBytes("IOS-8859-1"); // 根据乱码码表，将文字转换为字节数组
    String s = new String(bs, "UTF-8"); // 将字节数组按照新的码表解码，生成文字
```



一、Cookie简介
 Cookie是客户端(一般指浏览器)请求服务器后服务器发给客户端的一个辨认标识，保存在客户端，当客户端再次向服务器发送请求时，会携带着这个辨认标识，服务器就可以通过这个标识来识别客户端的身份或状态等。
 Cookie的作用：跟踪会话，记录一次会话中(即Session，一次会话可能会有多次请求，当然也可以有多个Cookie来跟踪不同的信息)的信息，这样服务器就会知道用户的状态，比如有没有登录成功，付款时购物车中的东西等，就相当于贴在客户端脑门上的纸条，浏览器看不到，但服务器看得到。
 Cookie的应用：

二、Cookie的设置和获取
  1、通过HttpServletResponse设置Set-Cookie响应头：需要注意cookie中的内容是一个个的键值对，也就是说Set-Cookie响应头中可以包含多个Cookie，各个Cookie键值对间使用;隔开

```java
response.addHeader("Set-Cookie","cookie中的内容");
1
```

 2、通过HttpServletResponse.addCookie的方式设置Cookie：注意new Cookie()时两个参数都是字符串

```java
Cookie cookie = new Cookie("jieguo","true");
response.addCookie(cookie);
```

 4、服务端获取客户端携带的cookie：通过HttpServletRequest获取

```java
Cookie[] cookies = request.getCookies();
if(cookies != null)
	for(Cookie c : cookies){
		String name = c.getName();//获取Cookie名称
		if("jieguo".equals(name)){
			String value = c.getValue();//获取Cookie的值
			bool = Boolean.valueOf(value);//将值转为Boolean类型
		}
	}
123456789
```

 `Tip`：
   1️⃣设置cookie用response，获取cookie用request
   2️⃣cookie是不能跨浏览器的
  5、Cookie的覆盖
   如果服务器端向客户端发送重复的Cookie那么客户端原有的Cookie会被覆盖，例如客户端第一次请求服务器端，服务器端发送的Cookie是Set-Cookie:a=A，第二次请求发送的Cookie是Set-Cookie:a=AA，那么客户端只会留下后发送的Cookie，即a=AA

三、会话控制
  HTTP协议有两大缺点：
   1️⃣无态状
    - 服务器不能区分不同浏览器不同用户发送的不同请求
    - 不能知道多次请求是否发送自同一个用户
   2️⃣纯文本：利用BeanUtils将传递的参数封装为对象克服了该缺点

    服务器不能通过HTTP的请求报文来识别浏览器，但是我们又有这个需求。我们可以结合一下现实生活：我们现实生活中在看电影的时候，检票的人员是认票不认人的，也就是我们可以通过一张电影票来识别不同的用户。我们的服务器可不可以发给浏览器一张票呢？以后浏览器在访问服务器时就可以带着这张票，然后我们通过检查票的信息不就可以识别不同的浏览器了吗？
  电影院的运作：
   ①电影院要创建票
   ②将电影票发给顾客
   ③顾客带着票去看电影
   ④电影院要检票
  Cookie的流程：
   ①服务器创建Cookie
   ②将Cookie发送给浏览器
   ③浏览器带着Cookie来访问服务器
   ④服务器检查浏览器的Cookie
  Cookie是服务器发送给浏览器的一张票，浏览器在收到这张票以后，每次访问服务器时都会带着这张票，服务器就可以根据票上的信息来识别不同的浏览器。
  Cookie是一个请求头(或响应头)：服务器以响应头的形式将Cookie发送给浏览器；浏览器以请求头的形式将Cookie发回给服务器。
  服务器通过响应报文将Cookie发送给浏览器，具体格式如下：

```java
//创建Cookie	
Cookie cookie = new Cookie(name,value);
//发送Cookie	
response.addCookie(cookie);
1234
```

 浏览器收到该响应头以后，会自动保存Cookie信息，并在以后的访问中携带该Cookie：

```html
Set-Cookie: username=sunwukong; age=18
1
```

 服务器端读取Cookie：

```java
Cookie[] cookies = request.getCookies();
if(cookies != null)
	for(Cookie c : cookies){
		String name = c.getName();//获取Cookie名称
		if("jieguo".equals(name)){
			String value = c.getValue();//获取Cookie的值
			bool = Boolean.valueOf(value);//将值转为Boolean类型
		}
	}
123456789
```

 修改Cookie：Cookie一旦发送给浏览器，那么服务器将不能直接修改，但是可以通过使用同名Cookie来替换浏览器已有Cookie的方式，来间接的修改。浏览器收到新Cookie以后，就会将老的Cookie销毁，然后使用新的Cookie。
  删除Cookie：通过设置同名Cookie的最大存活时间为0，删除Cookie是指使浏览器不再保存Cookie，使Cookie立即失效，举例：使name为username的Cookie立即失效

```java
//1.创建一个name为username的Cookie
Cookie cookie = new Cookie("username", "aaa");
//2.设置Cookie的有效时间为0
cookie.setMaxAge(0);//删除cookie的关键
//3.将cookie发送给浏览器，来替换同名Cookie
response.addCookie(cookie);
123456
```

 Cookie的有效时间：Cookie发送给浏览器以后，浏览器并不会永久保存，也就是到了一定的时间以后浏览器会自动销毁Cookie。Cookie的默认有效时间为一次会话(一次打开关闭浏览器的过程)，我们也可以手动指定Cookie的有效时间

```java
//setMaxAge用来设置Cookie的最大有效时间，需要int型的参数，代表有效的秒数
cookie.setMaxAge(秒数)；
//当参数大于0时，会设置为指定的秒数
cookie.setMaxAge(30);
//当参数等于0时,浏览器不会保存Cookie,Cookie立即失效
cookie.setMaxAge(0);
//当参数小于0时，和不设置是一样，当前会话有效
cookie.setMaxAge(-100);
//设置一个永久有效的Cookie，并非永久，只是使Cookie的生命很长而已
cookie.setMaxAge(60*60*24*365*10);
12345678910
```

   Cookie的Path：path指访问路径，此处是指浏览器在访问哪些地址时会携带该Cookie，默认情况下只要访问的资源是当前项目下的资源，浏览器就会带着该Cookie，也就是说Cookie默认的path是项目的根目录，我们可以手动指定Cookie的路径，Cookie路径由浏览器解析，所以需要加上项目名

```java
// /11_WEB_Cookie/hello指凡是访问项目根目录下hello路径下的资源都会携带Cookie，否则不携带
cookie.setPath("/11_WEB_Cookie/hello");
12
```

四、Cookie的应用举例
  1、保持用户的登录状态：不安全
   将用户的信息保存到Cookie中，并发送给浏览器，并且将有效时间设置为一个较长的时间，这样浏览器在以后访问网站时，都会带着该Cookie，服务器以此来辨识用户，用户就不再需要输入用户名和密码等信息。但是Cookie是纯文本的，很容易被截获，所以我们在使用Cookie保存敏感信息时一般都需要进行加密。
  2、广告的精确推送
   我们在使用百度搜索时，它会将我们搜索的关键字之类的信息保存到Cookie中，当我们访问带有百度广告的链接时，该Cookie信息会自动发送给Baidu，百度就可以根据Cookie的信息给你推送广告
  3、保存用户名：Taobao
   一旦用户登录成功以后，下次再登录时，直接将Cookie中的用户名读取并显示出来，这样用户就不需要再次输入用户名，只输入密码即可。

**1.如何实现发送多个Cookie**
**2.Cookie可以在浏览器中保存多长时间**
**3.Cookie如何保存中文**
**4.Cookie共享问题**

***7\***|***0\*****1.如何实现发送多个Cookie**

使用response对象调用addCookie方法发送cookie即可



```
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet("/demo1")
public class Servlet1 extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //创建cookie
        //创建第一个cookie
        Cookie cookie = new Cookie("name", "zhangsan");
        //发送第一个cookie
        resp.addCookie(cookie);
        //创建第二个cookie
        Cookie id = new Cookie("id", "1");
       //发送第二个cookie
        resp.addCookie(id);
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req, resp);
    }
}
```



```
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet("/demo2")
public class Servlet2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取cookie
     Cookie[] cookies = req.getCookies();
     //遍历cookie数组
     if (cookies!=null){
         for (Cookie cookie : cookies) {
             //获取cookie值与名称
             String value = cookie.getValue();
             String name = cookie.getName();
             System.out.println(name+"："+value);
         }
     }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
```

​    

**2.Cookie可以在浏览器中保存多长时间**

默认情况下浏览器关闭后，Cookie数据被销毁
我们可以调用setmaxage（int seconds）方法来设置Cookie的存储时间
1.second为正数，将Cookie持久化写入硬盘，并且指定存储的时间，时间到了cookie自动失效
2.second为零，删除cookie
3.second小于零，默认值，即浏览器关闭后删除cookie

***8\***|***0\*****3.Cookie如何保存中文**

- 在tomcat 8 之前 cookie中不能直接存储中文数据。
  需要将中文数据转码---一般采用URL编码(%E3)
- 在tomcat 8 之后，cookie支持中文数据。
  特殊字符还是不支持，建议使用URL编码存储，URL解码解析

比如我使用以下代码往Cookie中加入数据发送cookie浏览器就会报错，因为往cookie中加入了空格



```
Cookie cookie = new Cookie("name", "张  三");
    //发送第一个cookie
    resp.addCookie(cookie);
```

```
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;
import java.net.URLEncoder;

@WebServlet("/demo1")
public class Servlet1 extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //设置响应的消息体的数据格式以及编码
       resp.setContentType("text/html;charset=utf-8");
        //创建cookie
        //创建第一个cookie
        String name="张  三";
        //URL编码
        name= URLEncoder.encode(name,"utf-8");
        Cookie cookie = new Cookie("name", name);
        resp.addCookie(cookie);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doPost(req, resp);
    }
}
```



```
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;

@WebServlet("/demo2")
public class Servlet2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取cookie
     Cookie[] cookies = req.getCookies();
     //遍历cookie数组
     if (cookies!=null){
         for (Cookie cookie : cookies) {
             //获取cookie值与名称
             String value = cookie.getValue();
             String name = cookie.getName();
             //解码前
             System.out.println(name+"："+value);
             //解码后
             System.out.println(name+":"+ URLDecoder.decode(value,"utf-8"));
         }
     }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
```

1.假设在一个Tomcat服务器中部署了多个web项目，如何实现cookie在这些项目中的共享
默认情况下是不可以共享的
但是我们可以调用setpath（）方法来设置cookie的获取范围默认情况下，设置当前的虚拟目录 * 如果要共享，则可以将path设置为"/"



```
 //设置响应的消息体的数据格式以及编码
       resp.setContentType("text/html;charset=utf-8");
        //创建cookie
        //创建第一个cookie
        String name="张   三";
        //URL编码
        name= URLEncoder.encode(name,"utf-8");
        Cookie cookie = new Cookie("name", name);
        //设置path让当前服务器下部署的所有项目共享cookie的信息
        //设置为”/“即可共享
        cookie.setPath("/");
        resp.addCookie(cookie);
```

1. 不同的tomcat服务器间cookie共享问题？ * setDomain(String path):如果设置一级域名相同，那么多个服务器之间cookie可以共享 * setDomain(".baidu.com"),那么tieba.baidu.com和news.baidu.com中cookie可以共享



```
   //设置响应的消息体的数据格式以及编码
       resp.setContentType("text/html;charset=utf-8");
        //创建cookie
        //创建第一个cookie
        String name="张   三";
        //URL编码
        name= URLEncoder.encode(name,"utf-8");
        Cookie cookie = new Cookie("name", name);
        //设置path让不同的服务器之间可以共享cookie的信息
        //比如设置域名为".baidu.com"的可以共享cookie
       cookie.setDomain(".baidu.com");
        resp.addCookie(cookie);
```

# [avaweb使用cookie存取中文以及读取中文](https://www.cnblogs.com/mmykdbc/p/9042317.html)

要想在cookie中存储中文，那么必须使用URLEncoder类里面的encode(String s, String enc)方法进行中文转码，例如：

```
1 Cookie cookie = new Cookie("userName", URLEncoder.encode("房明", "UTF-8"));
2 response.addCookie(cookie);
```

　　在获取cookie中的中文数据时，再使用URLDecoder类里面的decode(String s, String enc)进行解码，例如：

```
1 URLDecoder.decode(cookies[i].getValue(), "UTF-8")
```

```
Cookie cookie=new Cookie("msg","hello");
cookie.setMaxAge(30);
```

setMaxAge表示设置cookie的有效期，参数是个int类型，单位是秒，

正数表示有效时间

-1默认值，浏览器关闭cookie失效

0表示删除当前cookie

# EL表达式

## 1.EL表达式的语法

EL(expression language)是为了让JSP写起来更加方便，他提供了在jsp中简化表达式的方法，让jsp的代码更加简化

> 语法结构：${expression}

注意，EL表达式一般操作的都是域对象中的数据，操作不了局部变量.

```
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      pageContext.setAttribute("username","zhangsan");
      request.setAttribute("username","lisi");
      session.setAttribute("username","wangwu");
      application.setAttribute("username","zhaoliu");
  %>
  <pre>
        获取作用域中username： ${username}<br><%-- 默认从小到大的范围中找，找到的第一个返回 --%>
        不在作用域中的： ${password}
        <%--获取request作用域中的username： ${requestScope.username}
        获取session作用域中的username： ${sessionScope.username}
        获取application作用域中的username： ${applicationScope.username}--%>
  </pre>
</body>
```

不在作用域中的不是显示null，而是显示为空

域对象的概念在jsp中共有四种，分别是pageContext，request，session，application，范围依次是-> 本页面，一次请求，一次会话，整个应用程序

### 从指定范围中取值，以及取值默认规则

- 当需要指定从某个特定的域对象中查找数据的时候可以使用四个域对象对应的空间对象分别为：pageScope,requestScope,sessionScope,applicationScope
- EL默认的查找方式为：从小到大查找，找到了即返回，若未查找到则返回空字符串

## 2.实例

### 1.获取指定范围的username

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      pageContext.setAttribute("username","zhangsan");
      request.setAttribute("username","lisi");
      session.setAttribute("username","wangwu");
      application.setAttribute("username","zhaoliu");

  %>
  <pre>
         获取pageContext作用域中的username:  ${pageScope.username}
         获取request作用域中的username： ${requestScope.username}
         获取session作用域中的username： ${sessionScope.username}
         获取application作用域中的username： ${applicationScope.username}
  </pre>
</body>
</html>
```

### 2.获取作用域中的集合

```jsp
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      List<String> list=new ArrayList<String>();
      list.add("aaa");
      list.add("bbb");
      list.add("ccc");
      request.setAttribute("list",list);
  %>
  <pre>
           获取list中指定下标的数据：${list[1]}--${list[2]}
           获取集合的长度：${list.size()}
           list代表的是存在域对象中的变量名(限域变量名)
  </pre>
</body>
</html>
12345678910111213141516171819202122
```

### 3.获取JavaBean对象

```jsp
<%@ page import="com.User.User" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
         User user=new User();
         user.setUsername("zhangsan");
         user.setSex(true);
         user.setUserId(1);
         request.setAttribute("user",user);//设置域对象属性
  %>
  <pre>
         获取JavaBean中的username  ${user.username}
         获取JavaBean中的userId    ${user.userId}
         获取JavaBean中的sex       ${user.sex}     
  </pre>
</body>
</html>
```

### JSP作用域

| 名称        | 作用域               |
| ----------- | -------------------- |
| application | 在所有应用程序中有效 |
| session     | 在当前会话中有效     |
| request     | 在当前请求中有效     |
| page        | 在当前页面有效       |

## 四大作用域

　　为了在页面、请求、和用户之间传递和共享数据，JSP提供了四个不同的作用域：page（页面作用域）、request（请求作用域）、session（会话作用域）、application（应用程序作用域），这些作用域就规定了数据可以传递和共享的范围以及数据的存活时间。

### page（页面作用域）

　　JSP默认的作用域是page，这个作用域中的对象只能在该页面中使用，不允许在其他页面使用。我们可以通过调用pageContext这个隐含的对象的getAttribute()和setAttribute()方法去获取和设置需要传递、共享具有这种范围类型的数据。（pageContext对象还提供了访问其他范围对象的getAttribute方法）。page范围内的对象，在客户端每次请求JSP页面时创建，在页面向客户端发送回响应或请求被转发（forward）到其他的资源后被删除。JSP最终会被编译成Servlet文件。在Servlet容器中，每个Servlet都只存在一个实例。但是对于page作用域的属性来说，在当前页面设置的属性只在本次访问该页面有效，当你再次访问该页面时，又会重新初始化页面的属性

```
1 <%
2 out.print(pageContext.getAttribute("SiteName")); // 输出null
3 pageContext.setAttribute("SiteName", "博客园");
4 %>
```



当我在浏览器访问该页面时会输出null；当我再重新打开一个该页面时，还会输出null，并不会输出”博客园”。也就是说，page作用域范围的不会存在线程安全的问题，每一次访问同一个页面，设置的page作用域的属性都是不一样的。

### request（请求作用域）

　　request在一次请求的全过程中有效，即从http请求到服务器处理结束，返回响应的整个过程，存放在HttpServletRequest对象中。一次请求的生命周期从客户端发起到服务器接收并响应该请求，或者将该请求forward到另一个页面或者Servlet进行处理而结束。在此期间，本次请求的参数，属性都是有效的；一旦客户端刷新浏览器，重新发起请求，则之前的请求参数和属性都将失效。需要注意的是，当我们使用<jsp:forward .../>动作将当前请求转向另一个页面或者Servlet的时候，该请求的参数和属性也一并转过去，并不会因为<jsp:forward .../>动作而丢失request的参数和属性。

### session（会话作用域）

　　当我们向服务器发送第一个请求开始，只要页面不关闭，或者会话未过期（默认30分钟），或者未调用HttpSession的invalidate()方法，接下来的操作都属于同一次会话的范畴。在JSP中，每当向服务器发送一个请求，服务器响应这个请求的时候，会在客户端的Cookie中写一个session id值。每次发送请求的时候，会将该session id值一起发送到服务器端，服务器端根据该session id值来判断每次请求是否属于同一个session的范畴之内。其存放在HttpSession对象中。

### application（应用程序作用域）

　　application的作用域是最广的，它代表着整个Web应用的全局变量，对每一个页面，每一个Servlet都是有效的。当我们在application中设置属性时，这个属性在任意的一个页面都是可以访问的。在application作用域中设置的属性如果不手动调用removeAttribute函数进行删除的话，它们就一直可以使用，如果Web容器发生重启，此时application范围内的所有属性都将丢失。

注意：根据jsp规范，用于某个对象的名称必须在所有作用域中都是唯一的。也就是说，如果application作用域中有一个名为user的对象，而且在request作用域中用相同的名称保存着另一个对象，那么容器可能会移除第一个对象，尽管很少有容器会执行这项规则，但是为了使您的项目更加完善，还是应该确保在任何地方都是用唯一的名称，除非所保存的对象为同一个。

## 如何使用

- page里的变量没法从index.jsp传递到test.jsp。只要页面跳转了，它们就不见了。  

- request里的变量可以跨越forward前后的两页。但是只要刷新页面，它们就重新计算了。  

- session的变量一直在累加，开始还看不出区别，只要关闭浏览器，再次重启浏览器访问这页，session里的变量就重新计算了。  

- application里的变量一直在累加，除非你重启tomcat，否则它会一直变大。  

- 如果把变量放到pageContext里，就说明它的作用域是page，它的有效范围只在当前jsp页面里。 从把变量放到pageContext开始，到jsp页面结束，你都可以使用这个变量。  

- 如果把变量放到request里，就说明它的作用域是request，它的有效范围是当前请求周期。 所谓请求周期，就是指从http请求发起，到服务器处理结束，返回响应的整个过程。在这个过程中可能使用forward的方式跳转了多个jsp页面，在这些页面里你都可以使用这个变量。 

- 如果把变量放到session里，就说明它的作用域是session，它的有效范围是当前会话。 所谓当前会话，就是指从用户打开浏览器开始，到用户关闭浏览器这中间的过程。这个过程可能包含多个请求响应。也就是说，只要用户不关浏览器，服务器就有办法知道这些请求是一个人发起的，整个过程被称为一个会话（session），而放到会话中的变量，就可以在当前会话的所有请求里使用。 

- 如果把变量放到application里，就说明它的作用域是application，它的有效范围是整个应用。 整个应用是指从应用启动，到应用结束。没有说“从服务器启动，到服务器关闭”，是因为一个服务器可能部署多个应用，当然你关闭了服务器，就会把上面所有的应用都关闭了。 application作用域里的变量，它们的存活时间是最长的，如果不进行手工删除，它们就一直可以使用。与上述三个不同的是，application里的变量可以被所有用户共用。如果用户甲的操作修改了application中的变量，用户乙访问时得到的是修改后的值。这在其他scope中都是不会发生的，page, request, session都是完全隔离的，无论如何修改都不会影响其他人的数据。

## 举例说明

　　假如一个网站WebSite，其包含7个jsp页面，分别为master.jsp、top.jsp、main.jsp、foot.jsp、login.jsp、success.jsp和news.jsp。master.jsp页面通过<include>指令包含top.jsp、main.jsp、foot.jsp三个页面,当用户通过login.jsp登录成功后，进入success.jsp页面然后通过此页面的<forward>标签跳转到master.jsp页面中。

我们在success.jsp页面中加入如下代码（用到jstl标签） 

```
<span style="font-family:'微软雅黑', 'Microsoft YaHei';">
<c:set value="aaa" var="test1" scope="page" />
<c:set value="aaa" var="test2" scope="request" />
<c:set value="aaa" var="test3" scope="session" />
<c:set value="aaa" var="test4" scope="application"/>
<jsp:forward page="master.jsp"/ >这里跳转
</span>
```

1. 变量 test1 只在success.jsp内有效；
2. 变量 test2 在success.jsp、master.jsp、top.jsp、main.jsp、foot.jsp中有效；
3. 变量 test3 在7个页面中都有效(包括login.jsp和news.jsp)；
4. 变量 test4 在整个网站，当前也就是7个页面中都有效(包括login.jsp和news.jsp)。

　　Test3和test4有效范围一样，有什么区别呢？说明一点，假如此时又有另一个用户访问master.jsp页面，那么test3相对于这个用户来说就无效，而test4却是有效的。或者当第一个登录的用户关闭浏览器后，再重新访问master.jsp时，test3就无效，而test4却有效。

Web交互的最基本单位为HTTP请求。每个用户从进入网站到离开网站这段过程称为一个HTTP会话，一个服务器的运行过程中会有多个用户访问，就是多个HTTP会话。作用域解释如下。



### application 作用域

   如果把变量放到application里，就说明它的作用域是application，它的有效范围是整个应用。 整个应用是指从应用启动，到应用结束。我们没有说“从服务器启动，到服务器关闭”，是因为一个服务器可能部署多个应用，当然你关闭了服务器，就会把上面所有的应用都关闭了。 application作用域里的变量，它们的存活时间是最长的，如果不进行手工删除，它们就一直可以使用。

application作用域上的信息传递是通过ServletContext实现的，它提供的主要方法如下所示：

Object getAttribute（String name）  //从application中获取信息；

void setAttribute（String name, Object value）  //向application作用域中设置信息。



### session作用域

​     session作用域比较容易理解，同一浏览器对服务器进行多次访问，在这多次访问之间传递信息，就是session作用域的体现。如果把变量放到session里，就说明它的作用域是session，它的有效范围是当前会话。所谓当前会话，就是指从用户打开浏览器开始，到用户关闭浏览器这中间的过程。这个过程可能包含多个请求响应。也就是说，只要用户不关浏览器，服务器就有办法知道这些请求是一个人发起的，整个过程被称为一个会话（session），而放到会话中的变量，就可以在当前会话的所有请求里使用。 
 session是通过HttpSession接口实现的，它提供的主要方法如下所示：

Object HttpSession.getAttribute（String name）  //从session中获取信息。

void HttpSession.setAttribute（String name, Object value）//向session中保存信息。

HttpSession HttpServletRequest.getSessio()  //获取当前请求所在的session的对象。

 session的开始时刻比较容易判断，它从浏览器发出第一个HTTP请求即可认为会话开始。但结束时刻就不好判断了，因为浏览器关闭时并不会通知服务器，所以只能通过如下这种方法判断：如果一定的时间内客户端没有反应，则认为会话结束。Tomcat的默认值为120分钟，但这个值也可以通过HttpSession的setMaxInactiveInterval()方法来设置：

void setMaxInactiveInterval(int interval)



如果想主动让会话结束，例如用户单击“注销”按钮的时候，可以使用 HttpSession 的 invalidate()方法，用于强制结束当前session：void invalidate()



### request作用域

   一个HTTP请求的处理可能需要多个Servlet合作，而这几个Servlet之间可以通过某种方式传递信息，但这个信息在请求结束后就无效了。request里的变量可以跨越forward前后的两页。但是只要刷新页面，它们就重新计算了。如果把变量放到request里，就说明它的作用域是request，它的有效范围是当前请求周期。 所谓请求周期，就是指从http请求发起，到服务器处理结束，返回响应的整个过程。在这个过程中可能使用forward的方式跳转了多个jsp页面，在这些页面里你都可以使用这个变量。

Servlet之间的信息共享是通过HttpServletRequest接口的两个方法来实现的：

void setAttribute（String name, Object value）  //将对象value以name为名称保存到request作用域中。

Object getAttribute（String name） //从request作用域中取得指定名字的信息。

   JSP中的doGet()、doPost()方法的第一个参数就是HttpServletRequest对象，使用这个对象的 setAttribute()方法即可传递信息。那么在设置好信息之后，要通过何种方式将信息传给其他的Servlet呢？这就要用到RequestDispatcher接口的forward()方法，通过它将请求转发给其他Servlet。

 RequestDispatcher ServletContext.getRequestDispatcher(String path) //取得Dispatcher以便转发，path为转发的目的Servlet。

 void RequestDispatcher.forward(ServletRequest request, ServletResponse response)//将request和response转发

   因此，只需要在当前Servlet中先通过setAttribute()方法设置相应的属性，然后使用forward()方法进行跳转，最后在跳转到的Servlet中通过使用getAttribute()方法即可实现信息传递。

 **需要注意两点：**

1、转发不是重定向，转发是在Web应用内部进行的。

2、转发对浏览器是透明的，也就是说，无论在服务器上如何转发，浏览器地址栏中显示的仍然是最初那个Servlet的地址。



### 

### page作用域

page对象的作用范围仅限于用户请求的当前页面，对于page对象的引用将在响应返回给客户端之后被释放，或者在请求被转发到其他地方后被释放。page里的变量只要页面跳转了，它们就不见了。如果把变量放到pageContext里，就说明它的作用域是page，它的有效范围只在当前jsp页面里。从把变量放到pageContext开始，到jsp页面结束，你都可以使用这个变量。

以上介绍的作用范围越来越小，request和page的生命周期都是短暂的，它们之间的区别：一个request可以包含多个page页（include，forward及filter）。



为了让大家更容易理解application、session、request、page 4个对象的作用范围，我们给出两个程序来进行详细说明。

```
<%@ page language="java" contentType="text/html; charset=UTF-8"    
    pageEncoding="UTF-8"%>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">    
<jsp:useBean id="pagevar" scope="page" class="java.lang.StringBuffer"/>    
<jsp:useBean id="requestvar" scope="request" class="java.lang.StringBuffer"/>    
<jsp:useBean id="sessionvar" scope="session"  class="java.lang.StringBuffer"/>    
 <jsp:useBean id="applicationvar" scope="application"  class="java.lang.StringBuffer"/>    
<html>    
<head>    
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">    
<title>JSP内置对象作用域</title>    
</head>    
<body>    
 <%    
    pagevar.append("page01");    
    requestvar.append("page01");    
    sessionvar.append("page01");    
    applicationvar.append("page01");    
%>    
<jsp:forward page="page02.jsp"/>    
</body>    
</html>    
```

```
<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8"    
    pageEncoding="UTF-8"%>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">    
<jsp:useBean id="pagevar" scope="page" class="java.lang.StringBuffer"/>    
<jsp:useBean id="requestvar" scope="request" class="java.lang.StringBuffer"/>    
<jsp:useBean id="sessionvar" scope="session" class="java.lang.StringBuffer"/>    
<jsp:useBean id="applicationvar" scope="application" class="java.lang.StringBuffer"/>    
<html>    
<head>    
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">    
<title>JSP内置对象作用域</title>    
</head>    
<body>    
<%    
    pagevar.append("page02");    
    requestvar.append("page02");    
    sessionvar.append("page02");    
    applicationvar.append("page02");    
%>    
page = <%=pagevar.toString()%><br/>    
request = <%=requestvar.toString()%><br/>    
session = <%=sessionvar.toString()%><br/>    
application = <%=applicationvar.toString()%><br/>    
</body>    
</html>    
```

JSP 脚本元素是指嵌套在 <% 和 %> 之中的一条或多条 Java 程序代码。通过 JSP 脚本元素可以将Java 代码嵌入 HTML 页面中，所有可执行的 Java 代码，都可以通过 JSP 脚本来执行。

JSP Scriptlets 是一段代码段。当需要使用 Java 实现一些复杂操作或控制时，可以使用它。 JSPScriptlets的语法格式如下所示：

## **1.5.2****、****JSP** **注释**

JSP 有其独有的注释

JSP 注释、 Java 注释、HTML 注释对比：

HTML中的注释
JSP 文件是由 HTML 标记和嵌入的 Java 程序段组成的，所以在 HTML 中的注释同样可以在 JSP 文件中使用。注释格式如下：

<!--注释内容-->
【例1】 HTML 中的注释：、

<!--欢迎提示信息！-->
<table><tr><td>欢迎访问! </td></tr></table>
使用该方法注释的内容在客户端浏览器中是看不到的，但可以通过查看 HTML 源代码看到这些注释内容。

访问该页面后，将会在客户端浏览器中输出以下内容：

欢迎访问！
通过查看 HTML 源代码，将会看到如下内容：

<!--欢迎提示信息！-->
<table><tr><td>欢迎访问! </td></tr></table>
带有JSP表达式的注释
在 HTML 注释中可以嵌入 JSP 表达式，注释格式如下：

<!--comment<%=expression %>-->
包含该注释语句的 JSP 页面被请求后，服务器能够识别注释中的 JSP 表达式，从而来执行该表达式，而对注释中的其他内容不做任何操作。

当服务器将执行结果返回给客户端后，客户端浏览器会识别该注释语句，所以被注释的内容不会显示在浏览器中。

【例2】使用带有 JSP 表达式的注释：

<%String name="XYQ";%>
<!--当前用户：<%=name%>-->
<table><tr><td>欢迎登录：<%=name%></td></tr></table>
访问该页面后，将会在客户端浏览器中输出以下内容：

欢迎登录：XYQ
通过查看 HTML 源代码，将会看到以下内容：

<!--当前用户：<%=name%>-->
<table><tr><td>欢迎登录：XYQ</td></tr></table>
隐藏注释
前面已经介绍了如何使用 HTML 中的注释，这种注释虽然在客户端浏览页面时不会看见，但它却存在于源代码中，可通过在客户端查看源代码看到被注释的内容。所以严格来说，这种注释并不安全。下面介绍一种隐藏注释，注释格式如下：

<%—注释内容—%>

用该方法注释的内容，不仅在客户端浏览时看不到，而且即使在客户端查看 HTML 源代码，也不会看到，所以安全性较高。

【例3】使用隐藏注释：

<%--获取当前时间--%>
<table>
<tr><td>当前时间为：<% =(new java.util.Date()).toLocaleString() %></td></tr>
</tabla>
访问该页面后，将会在客户端浏览器中输出以下内容：

当前时间为：2017-3-19 15:27:20
通过查看 HTML 源代码，将会看到以下内容：

<table>
<tr><td>当前时间为：2017-3-19 15 : 27 : 20</td></tr>
</table>
脚本程序（Scriptlet）中的注释
脚本程序中包含的是一段 Java 代码，所以在脚本程序中的注释与在 Java 中的注释是相同的。

脚本程序中包括下面 3 种注释方法。

1. 单行注释

单行注释的格式如下：

//注释内容
符号“//”后面的所有内容为注释的内容，服务器对该内容不进行任何操作。因为脚本程序在客户端通过查看源代码是不可见的，所以在脚本程序中通该方法注释的内容也是不可见的，并且后面将要提到的通过多行注释和提示文档进行注释的内容都是不可见的。

【例4】JSP 文件中包含以下代码：

<% int count=6; //定义一个计数变量%>计数变量 count 的当前值为：<%=count%>
访问该页面后，将会在客户端浏览器中输出以下内容：

计数变量 cxnmt 的当前值为：6
通过查看 HTML 源代码，将会看到以下内容：

计数变量 count 的当前值为：6
因为服务器不会对注释的内容进行处理，所以可以通过该注释暂时删除某一行代码。例如下面的代码。

【例5】使用单行注释暂时删除一行代码：

<%
String name="XYQ";
//name="XYQ2017";
%>
用户名：<%=name%>
包含上述代码的 JSP 文件被执行后，将输出如下结果：

用户名：XYQ
2. 多行注释

多行注释是通过“/”与“/”符号进行标记的，它们必须成对出现，在它们之间输入的注释内容可以换行。注释格式如下：

/*
注释内容1
注释内容2
*/
为了程序界面的美观，开发人员习惯在每行注释内容的前面添加一个号，构成如下所示的注释格式：

/*
*注释内容1
*注释内容2
*/
与单行注释一样，在“/”与“/”之间注释的所有内容，即使是 JSP 表达式或其他脚本程序，服务器都不会做任何处理，并且多行注释的开始标记和结束标记可以不在同一个脚本程序中同时出现。

【例6】在 JSP 文件中包含以下代码：

```
<%@ page contentType="text/html;charset=UTF-8"%>
<%
String state="0";
/*if(state.equals("0"))
{
//equals()方法用来判断两个对象是否相等
state="主版";
%>
将变量state赋值为“主版”。<br>
<%
}
*/
%>
变量state的值为：<%=state%>
```



包含上述代码的 JSP 文件被执行后，将输出如图 1 所示的结果。

# **1.6****、****JSP** **指令**

为了设置 JSP 页面中的一些信息， Sun 公司提供了 JSP 指令。 JSP 2.0 中共定义了 page 、include 和 taglib三种指令，每种指令都定义了各自的属性。接下来，本节将针对 page 和 include 指令进行详细的讲解。

## **1.6.1****、****page** **指令**

在 JSP 页面中，经常需要对页面的某些特性进行描述，例如，页面的编码方式， JSP 页面采用的语言等，这时，可以通过 page 指令来实现。page 指令的具体语法格式如下所示：



**一、** [Servlet](https://so.csdn.net/so/search?q=Servlet&spm=1001.2101.3001.7020)动态网页 = Java代码(主) + html代码(辅): (在Servlet中编写html代码)

**Servlet擅长的事情:**

1. 接受请求参数,封装成对象.
2. 调用业务方法,来处理请求.
3. 控制界面跳转,跳转到某一个JSP负责做界面的输出操作.

**二、** JSP动态网页 = Java代码(辅) + html代码(主): (在html中编写java代码)

**Servlet不擅长做页面输出,JSP最擅长做页面输出!**
 **责任分离思想:**各自做各自最擅长的事情.

------

## JSP的原理


 **JSP(Java Server Page):** Java的服务页面,Java动态网页.
 **JSP的本质就是Servlet.**

hello.jsp代码:

```
<%--
  Created by IntelliJ IDEA.
  User: Sunny
  Date: 2020/1/28
  Time: 17:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>The first JSP application</title>
</head>
<body>
    北京时间:<%=new java.util.Date().toLocaleString()%>
</body>
</html>
```

hello.jsp编译后生成hello_jsp.java文件

```java
// hello_jsp.java 文件中 _jspService方法
response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
	  
	  // 在Servlet代码中输出静态网页内容
      out.write("\r\n");
      out.write("\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("    <title>The first JSP application</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("    北京时间:");
      out.print(new java.util.Date().toLocaleString());
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
```

## JSP的基本语法

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 JSP语法:

- **JSP的注释：**
   作用：注释Java脚本代码
   语法：<%–这是注释–%>
- **JSP的Java脚本表达式：**
   作用：输出数据到页面上
   语法：<%=表达式%>(实际上就是调用输出流打印到页面上) out.print(表达式);
- **JSP中的Java脚本片段：**(实际开发中，应做到JSP中不能出现一行Java脚本片段)
   作用：书写Java代码逻辑
   语法：
   <%
   语句1;
   语句2;
   %>
   原理：其中的语句会原封不动的被服务器翻译到对应的Servlet的_jspService方法中。
- **JSP的声明：**
   作用：定义类的成员
   语法：
   <%!
   Java代码
   %>

```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>The first JSP application</title>
</head>
<body>
    北京时间:<%=new java.util.Date().toLocaleString()%>

    <%-- JSP注释: 不会翻译到Servlet中 --%>

    <%--JSP的Java脚本表达式--%>
    <%
        // Java代码
        String name = "ZYGui";
        boolean flag = true;
    %>

    <%--JSP中的Java脚本片段--%>
    <%=name%>

    <%--JSP的声明--%>
    <%!
        private String user;

        public void doWork() {
        }
    %>

    <%--很麻烦--%>
    <%
        int num = 10;
        if (num > 5){
    %>
        num大于5
    <%
        }else if(num < 5){
    %>
        num小于5
    <%
        } else {
    %>
        num等于5
    <%
        }
    %>
</body>
</html>
```

## JSP三大指令

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 **标准指令: 设定JSP网页的整体配置信息**
 特点:

1. 并不向客户端产生任何输出，
2. 指令在JSP整个文件范围内有效
3. 为翻译阶段提供了全局信息

指令的语法格式:
 <%@ 指令名称 属性名=“属性值” 属性名=“属性值” …%>

#### page指令

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 `<%@ page contentType="text/html;charset=UTF-8" language="java" %>`
 page指令: 表示JSP页面相关的配置信息
 **常用属性:**

- `language`: 表示在JSP中编写的脚本的语言.(只能是java)
- `contentType`: 表示JSP输出的MIME类型和编码.等价于 response.setContentType(“text/html;charset=utf-8”);
- `pageEncoding`: 表示JSP输出的编码;等价于response.setCharacterEncoding(“utf-8”);
- import: 用于导入JSP脚本中使用到的类,等价于Java代码中的: import 类的全限定名;
   注意：一个import属性可以导入多个包，用逗号分隔。
- errorPage: 指示当前页面出错后转向（转发）的页面。目标页面如果以"/"（当前应用）就是绝对路径。

配置全局错误提示页面：
 web.xml

```xml
    <!-- 全局的错误页面 -->
    <error-page>
        <error-code>404</error-code>
        <location>/404.jsp</location>
    </error-page>
```

**静态包含:** 使用JSP的include指令
 `<% @include file="被包含的页面文件" %>`
 特点:
 在翻译阶段就已经把多个JSP,合并在一起,最终翻译得到一个java文件

**动态包含:** 使用JSP的动作指令
 ``
 特点:
 把每一个JSP都翻译成Servlet类,在运行时期,动态的合并在一起,最终得到多个java文件



在上面的语法格式中， page 用于声明指令名称，属性用来指定 JSP 页面的某些特性。 page 指令提供了一系列与 JSP 页面相关的属性，如表 1-1 所示。

I18N是JSTL标签库中的一个国际化/格式化标签库

```
I18N（即Internationalization）是JSTL标签库中的一个国际化标签库。它提供了一组标签，可以根据用户的语言、文化等偏好信息，自动选择对应的本地化资源来显示相应的消息、日期、时间、数值等信息。这使得开发人员可以更加方便快捷地为自己的Web应用程序添加国际化支持，提高应用程序的可用性和用户体验。除此之外，JSTL还包含了一些其他的常用标签库，例如Core、Fmt、Sql、Xml等，可以实现诸如循环、条件判断、格式化、数据库访问等功能。
```



JSTL（JavaServer Pages Tag Library）是一个由Sun Microsystems提供的标签库，用于简化JavaServer Pages（JSP）页面的开发。它提供了一组可重用的标准标签集合，可以轻松地访问和操作JavaBeans、流程控制、XML文档等，从而实现更容易维护、更高效的JSP应用程序。

JSTL标签库包括以下部分：

1. Core 标签库：提供了循环、条件判断、变量赋值等流程控制及基本功能标签，以及对于URL重定向、跳转等的支持。
2. Fmt 标签库：提供了消息、日期、数值等多方面的本地化格式化标签。
3. Sql 标签库：提供了连接JDBC数据源和查询结果标签。
4. Xml 标签库：提供了在JSP中解析创建XML的标签及XSLT（XML Stylesheet Language Transformations）处理相关标签。

这些标签库都是标准的JSP标签库，可作为随附于JSP API及一些Web Application Server的一部分进行使用，并且也偏爱于MVC模式。因此，开发者可以使用JSTL标签库来简化和加快JSP页面的设计和开发过程，从而提高应用程序的开发效率和质量。

```
JSP（JavaServer Pages）是一种用于开发动态Web应用程序的技术，它是基于Java Servlets和Java Beans的标准。在JSP页面中，有一些特殊的对象被称为内置对象，它们可以直接访问到JSP容器提供的服务，以便更加方便地开发Web应用程序。以下是JSP中常见的内置对象：

request对象：表示HTTP请求，可以用来获取请求参数、设置属性、转发请求等操作。

response对象：表示HTTP响应，可以用来设置响应状态码、响应头、输出内容等操作。

out对象：表示 JspWriter 对象，可以用来向客户端输出文本信息。

session对象：表示用户会话，可以用来存储和获取用户特定的数据。

application对象：表示整个web应用程序上下文环境，可以用来在不同页面间进行数据共享。

config对象：表示当前JSP页面的配置信息，可以用来获取与部署相关的信息。

pageContext对象：表示页面上下文环境，可以用来获取其他内置对象。

通过使用这些内置对象，开发者可以更加高效地开发出功能强大、易于维护且具有动态性的Web应用程序。同时也值得注意的是，在使用内置对象时需要尽量避免滥用，以免影响应用程序的性能和可扩展性。
```

## 一、什么是EL表达式

### 1.EL表达式的简介

全称（Expression language）表达语言

El表达式提供了获取对象以及属性的简单方法

------

### 2.对比JSP写法和EL表达式写法

JSP写法：`<%=session.getAttribute("name")%>`

El表达式写法：${sessionScope.name}

注意点：

> El表达式写在JSP的HTML代码块中，而不能写在<%%>之间

## 二、EL表达式的基本语法

### 1.EL表达式的格式：

用美元符号$定界，内容包括在华括弧"{}"中；

EL表达式提供了获取对象以及属性的简单方法，某些情况下EL表达式完全可以替代JSP脚本或者JSP的行为；

### 2.EL表达式兼容性设置

- 解决EL表达式无法使用的问题：
   在默认情况下，**Servlet 2.3/JSP 1.2**是不支持EL表达式的，而Servlet 2.4 /JSP 2.0支持。
- 第一种修改web.xml文件：

```xml
<web-app version="2.4"  
xmlns="http://java.sun.com/xml/ns/javaee"  
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
xsi:schemaLocation="http://java.sun.com/xml/ns/javaee  
http://java.sun.com/xml/ns/javaee/web-app_2_4.xsd"> 
```

- 第二种设置某个jsp页面使用el表达式：需要在jsp页面加上

```
<%@ page isELIgnored="false"%>  
```

- 第三种web.xml文件中加上下列代码，每个jsp页面都可以使用：

```
<jsp-config>  
  <jsp-property-group>  
    <url-pattern>*.jsp</url-pattern>  
    <el-ignored>false</el-ignored>  
  </jsp-property-group>  
</jsp-config> 
```

### 3.EL表达式中的".“和”[]"的用法

- EL表达式提供".“和”[]"两种运算符来存取数据。
- 通常情况下两者是通用的：

```
${user.name}
${user[“name”]}
```

- "[]"还可以用来对集合元素进行定位：

```
${booklist[0].price}
1
```

- 一下两种情况必须使用"[]"：   
  - 1.包含特殊符号：
     ${user.first-name}错误写法
     ${user[“first-name”]}正确写法
  - 2.通过变量动态取值：
     ${user[param]}

## 三、EL表达式的变量

EL存取变量数据的方法很简单，例如：${username}它的意思是取出某一个范围中名称为username的变量。

### 1.JSP内置对象和EL表达式的对应图

| JSP内置对象 | EL名称           |
| ----------- | ---------------- |
| Page        | PageScope        |
| Request     | RequestScope     |
| Session     | SessionScope     |
| Application | ApplicationScope |

即是范围优先级由高到低依次是：
 Page、Request、Session和Application

### 4.EL的隐式对象（重点）

| 隐含对象         | 描述                          |
| ---------------- | ----------------------------- |
| pageScope        | page作用域                    |
| requestScope     | request作用域                 |
| sessionScope     | session作用域                 |
| applicationScope | application作用域             |
| param            | Request对象的参数，字符串     |
| paramValues      | Request对象的参数，字符串集合 |
| header           | HTTP信息头，字符串            |
| headerValues     | HTTP信息头，字符串集合        |
| initParam        | 上下文初始化参数              |
| cookie           | Cookie值                      |
| pageContext      | 当前页面的pageContext         |

与输入相关的隐含对象有两个：param和paramValues，它们是EL中比较特殊的隐含对象。

- 例如我们要取得用户的请求参数时，可以利用下列方法：   
  - request.getParamster(String name)
  - request.getParamsterValues(String name)
- 在EL中则可以使用param和paramValues两者来取得数据。   
  - ${param.name}
  - ${paramValues.name}

## 四、EL表达式的运算符

### 1.EL表达式运算符有哪些

| 类别       | 运算符                                                   |
| ---------- | -------------------------------------------------------- |
| 算术运算符 | +、-、*、/ 或 div、%或 mod                               |
| 关系运算符 | = = 或 eq、！= 或 ne 、< 或 It、>或 gt、<=或le、>= 或 ge |
| 逻辑运算符 | &&或and、                                                |
| 其他运算符 | Empty运算符、条件运算符、()运算符                        |

### 2.EL最常用的表达式

- 为空判断：`${empty param.name}`
- 三元运算：`${A?B:C}`
- 算法运算：`${A*(B+C)}`

## 五、EL表达式的自动类型转换以及实体属性取字段值

### 1.自动类型转换

- 在JSP代码块写法中要取得文本框的输入，我们需要做类型转换
  



# 一、初识EL

 

EL表达式的语法，都是用“${ }”表示的。
 关于EL表达式和使用Java代码的区别：

在[Servlet](https://so.csdn.net/so/search?q=Servlet&spm=1001.2101.3001.7020)中：

```java
request.setAttribute("username","zhangsan");
request.setAttribute("password","123");
```

```
request.getAttribute("nameOfObj"); 可得到jsp页面表单中输入框内的value。（其实表单控件中的Object的name与value是存放在一个哈希表中的，所以在这里给出Object的name会到哈希表中找出对应它的value）

request.setAttribute(position,nameOfObj);属于页面之间的传值，从a.jsp到b.jsp一次传递，之后这个request就会失去他的作用范围，再传就要重新设一个request.setAttribute()。（使用session.setAttribute()会在一个过程中始终保持这个值）

注：javascript与jsp中不能相互传值，因为javascript运行在客户端，jsp运行在服务器端。若想使他们能够相互传参数，可以在jsp页面中设置一个hidden属性的控件，用它的value来传递所需的数值。

1、把js直接写在了JSP页面，所以能获取到。如果单独把JS抽离出来是不可能获取到的。前者服务端解析能或许到，后者客户端解析获取不到。 
2、js里是在客户端执行的，不能直接获取，因为EL表达式是在服务器的时候被解析的，所以可以获取到。一个是客户端的东西,一个是服务器端的东西。 
3、jsp能取到，那是因为他本身就是servlet。js不可能有方法直接获取到HttpServletRequest里面的属性值。 
4、setAttribute是服务器行为，到了客户端就无效了，也谈不上如何用。除非你在jsp的时候就写到js变量里，或者使用ajax请求你需要的数据。


1、把js直接写在了JSP页面，所以能获取到。如果单独把JS抽离出来是不可能获取到的。前者服务端解析能或许到，后者客户端解析获取不到。

2、js里是在客户端执行的，不能直接获取，因为EL表达式是在服务器的时候被解析的，所以可以获取到。一个是客户端的东西,一个是服务器端的东西。

3、jsp能取到，那是因为他本身就是servlet。js不可能有方法直接获取到HttpServletRequest里面的属性值。

4、setAttribute是服务器行为，到了客户端就无效了，也谈不上如何用。除非你在jsp的时候就写到js变量里，或者使用ajax请求你需要的数据。

下面开始进入正题：

java后台通过：

request.setAttribute("msg","成功！！");

在jsp/html页面就可以通过EL表达式获取到request中设置的属性值：

<div>${msg}</div>

    1

js中获取request中的值，就有两种方式：

第一种：

var msg="<%=request.getAttribute("msg")%>";
alert(msg);

    1
    2

第二种：

var msg="${msg}";
alert(msg);

    1
    2

这里不能写在引入的js页面中，上面已经说了，他们解析的方式不同，写在外部的js中识别不了，可以通过在html.jsp页面中设置一个隐藏域，然后获取它的value值。如：

JSP中:
<input type="hidden" value="${student.name}" id="stuName"/>
javascript中:
var stuName=$('stuName').value;
```

- 在JSP中使用Java脚本：

```java
用户名：<%=request.getAttribute("username")%><br />
密码：  <%=request.getAttribute("password")%>
```

- 使用EL表达式

```java
用户名：${username}<br />
密码：  ${password}
12
```

EL表达式不仅能获取Servlet中存储的数据，也能简化JSP中的代码量，使程序简单易维护，另外，当域对象里面的值不存在时，使用EL表达式获取域对象里面的值返回空字符串；而使用Java脚本方式获取，返回值是null，会报空指针异常。

# 二、EL中的[运算符](https://so.csdn.net/so/search?q=运算符&spm=1001.2101.3001.7020)

## 1.点运算符（.）

EL表达式中的点运算符，用于访问JSP页面中某些对象的属性，如JavaBean对象、List集合、Array数组等。

```java
<!--  访问user对象的username属性-->
${user.username}
12
```

## 2.方括号运算符（[]）

EL表达式中的方括号运算符与点运算符的功能相同，都用于访问JSP页面中某些对象的属性。当获取的属性名中包含一些特殊符号，如“_”或“-”“?”等并非数字或字母的符号，就只能使用方括号运算符来访问该属性。

```java
<!--不能使用${user.user_name}-->
${user["user_name"]}
12
```

- 点运算符和方括号运算符在某种情况下可以互换，如`${user.username}`等价于`${user["username"]}`
- 方括号运算符还可以访问List集合或数组中指定索引的某个元素，如表达式${users[0]}用于访问集合或数组中第一个元素。在这种情况下，只能使用方括号运算符，不能使用点运算符。
- 方括号运算符和点运算符可以相互结合使用，如`${users[0].username}`，表示访问集合或者数组中的第一个元素的username属性。

## 3.算术运算符

| 算数运算符 | 说明       | 算术表达式           | 结果 |
| ---------- | ---------- | -------------------- | ---- |
| +          | 加         | `${1+1}`             | 2    |
| -          | 减         | `${1-1}`             | 0    |
| *          | 乘         | `${1*1}`             | 1    |
| / (或div)  | 除         | `${1/1}或${1 div 1}` | 1    |
| % (或mod)  | 取余(取模) | `${1%1}或${1 mod 1}` | 0    |

## 4.比较运算符

EL表达式中的比较运算符用于比较两个操作数的大小，操作数可以是各种常量、EL表达式、EL变量，所有的运算执行结果都是布尔类型。

| 比较运算符 | 说明     | 算术表达式             | 结果  |
| ---------- | -------- | ---------------------- | ----- |
| ==(或eq)   | 等于     | `${10==2}或${10 eq 2}` | false |
| !=(或ne)   | 不等于   | `${10!=2}或${10 ne 2}` | true  |
| <(或lt)    | 小于     | `${10<2}或${10 lt 2}`  | false |
| >(或gt)    | 大于     | `${10>2}或${10 gt 2}`  | true  |
| <=(或le)   | 小于等于 | `${10<=2}或${10 le 2}` | false |
| >=(或ge)   | 大于等于 | `${10>=2}或${10 ge 2}` | true  |

## 5.[逻辑运算符]

| 逻辑运算符 | 说明   | 算术表达式                          | 结果  |
| ---------- | ------ | ----------------------------------- | ----- |
| `&&(and)`  | 逻辑与 | `${true&&false}或${true and false}` | false |
| `|| (or)`  | 逻辑或 | `${false||true}`                    | true  |
| `!(not)`   | 逻辑非 | `${!=true} 或${not true}`           | false |

## 6.empty运算符

EL表达式中的empty运算符用于判断某个对象是否为null或""，结果为布尔类型，其基本的语法格式如下：

```java
${empty var}
1
```

- var变量不存在(没有定义)，结果返回true
- var变量的值为null，结果返回true
- var变量引用集合(Set、Map、List)类型对象，并且在集合对象中不包含任何元素时，结果返回true

## 7.条件表达式

EL表达式中条件运算符用于执行某种条件判断，类似于Java中的if-else语句，其语法格式如下：

```java
${A?B:C}
1
```

表达式A的计算结果为布尔类型：

- 如果表达式A的计算结果为true，就执行表达式B，并返回B的值
- 如果表达式A的计算结果为false，就执行表达式C，并返回C的值

## 8.“()”运算符

EL表达式中的圆括号用于改变其他运算符的优先级。

------

# 三、EL隐式对象

不需要new就能使用的对象，自带的对象

- 作用域访问对象(EL隐式对象)：`pageScope、requestScope、sessionScope、applicationScope`
- 参数访问对象
- JSP隐式对象

| 隐含对象名称       | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| `pageContext`      | 对应于JSP页面中的pageContext对象                             |
| `pageScope`        | 代表page域中用于保存属性的Map对象                            |
| `requestScope`     | 代表request域中用于保存属性的Map对象                         |
| `sessionScope`     | 代表session域中用于保存属性的Map对象                         |
| `applicationScope` | 代表application域中用于保存属性的Map对象                     |
| `param`            | 表示一个保存了所有请求参数的Map对象                          |
| `paramValues`      | 表示一个保存了所有请求参数的Map对象，它对于某个请求参数，返回的是String类型数组 |
| `header`           | 表示一个保存了所有HTTP请求头字段的Map对象                    |
| `headerValues`     | 表示一个保存了所有HTTP请求头字段的Map对象，返回的是String类型数组 |
| `cookie`           | 用来取得使用者的cookie值，cookie的类型是Map                  |
| `initParam`        | 表示一个保存了所有Web应用初始化参数的Map对象                 |

## JSP简介

JSP的核心实质是Servlet技术。JSP是后来添加的基于Servlet的一种扩展技术。但二者在使用上有不同的方向。

由于Servlet实质是一个Java类，因此非常适合用来处理业务逻辑。而如果Servlet要展示网页内容，就必须通过输出流对象将view层的代码通过字符串的形式输出，非常麻烦，且不易阅读和维护。另一方面,在JSP中可以直接编写视图层的代码如HTML，因此JSP的它主要用来展示网页内容。但是由于JSP实质是Servlet，因此JSP也是一种动态网页技术。

 

 

而我们实际开发时，JSP只会用来展示网页视图内容，用Servlet来处理业务逻辑。因为 JSTL标签库 以及第三方框架提供的标签足够强大，我们甚至可以自定义标签 ，因此根本没有理由在JSP中写Java代码。

 

JSP的视图代码可以是任何文本内容，如 HTML / XHTML ，XML , JSON , 甚至是txt。通常我们叫这些直接写在JSP中的文本叫做 模板文本数据。

 JSP, Servlet 和 JSP引擎

我们常说，Tomcat是一个Servlet容器，而不说它是JSP容器，因为JSP实质是被转换为Servlet后再工作的。

那我们为什么不直接使用Servlet呢？因为在Servlet中写视图层代码（HTML）非常狗血。但是Tomcat又只“认识”Servlet，因此就需要JSP引擎做一个转换工作。

 

举个的例子，一切程序都是计算机可执行的机器代码，而直接编写机器代码是非常困难的，于是我们可以用C语言，用C写代码更加直观和易于阅读理解，C编译器会将C代码转换成对应的机器代码。这个例子中，Servlet就好比是机器代码，JSP好比是C语言，而JSP引擎 就好比是C编译器。

 

因此：如果客户端请求的是一个JSP，则该JSP文件传递给JSP引擎，JSP引擎将JSP文件转译为Servlet的java文件，其实质就是这个Servlet来处理客户端的请求。

##  JSP转换为Servlet的细节

 JSP按如下规则转换为Servlet：

1、所有的 非  JSP 文本 （ 如HTML代码,XML代码），都将在生成的_jspService方法中以字符串的形式使用out对象输出。

2、所有的<% %> 和 <%= %>脚本，将在他所在的地方原原本本对应插入到_jspService方法中去。所有的<%!  %>都将成为Servlet的类级别的成员。

​    因此<%!  %>写在JSP页面代码的任何地方都没有任何区别。 <%-- --%> JSP注释 将只保留在JSP代码中，不会存在转换后的servlet代码中

3、EL，JSTL等被JSP引擎使用特殊转换。

public void _jspService()
{
        //.....

    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(
            this, 
            request, 
            response,
            null,       /*page指令配置的error page 的URL*/
            true,      /*page质量配置的是否使用session*/
            8192,    /*page指令配置的out对象的缓存大小(kb)*/ 
            true);   /*page指令配置的out对象是否autoFlush*/
     
     //.....
}JSP转译后的Servlet的继承结构

JSP转译后的java文件在tomcat home下的work目录下找到。

 ```
public interface Servlet {
     public void init(ServletConfig config) throws ServletException;
     public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException;
     public void destroy();
     public String getServletInfo();
     public ServletConfig getServletConfig();
}

public interface JspPage extends Servlet {
    public void jspInit();
    public void jspDestroy();
}

public interface HttpJspPage extends JspPage {
    public void _jspService(HttpServletRequest request,  HttpServletResponse response)
                                                          throws ServletException, IOException;
}
 ```

```
public abstract class HttpJspBase extends HttpServlet implements HttpJspPage {
    private static final long serialVersionUID = 1L;
    protected HttpJspBase() {
    }

    @Override
    public final void init(ServletConfig config)
        throws ServletException
    {
        super.init(config);
        jspInit();
        _jspInit();
    }

    @Override
    public String getServletInfo() {
        return Localizer.getMessage("jsp.engine.info");
    }

    @Override
    public final void destroy() {
        jspDestroy();
        _jspDestroy();
    }

    /**
     * Entry point into service.
     */
    @Override
    public final void service(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        _jspService(request, response);
    }
    @Override
    public void jspInit() {
    }
    public void _jspInit() {
    }
    @Override
    public void jspDestroy() {
    }
    protected void _jspDestroy() {
    }

    @Override
    public abstract void _jspService(HttpServletRequest request,
                                     HttpServletResponse response)
        throws ServletException, IOException;
}
```

## Java中的动态网页

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 **一、** [Servlet](https://so.csdn.net/so/search?q=Servlet&spm=1001.2101.3001.7020)动态网页 = Java代码(主) + html代码(辅): (在Servlet中编写html代码)

**Servlet擅长的事情:**

1. 接受请求参数,封装成对象.
2. 调用业务方法,来处理请求.
3. 控制界面跳转,跳转到某一个JSP负责做界面的输出操作.

**二、** JSP动态网页 = Java代码(辅) + html代码(主): (在html中编写java代码)

**Servlet不擅长做页面输出,JSP最擅长做页面输出!**
 **责任分离思想:**各自做各自最擅长的事情.

## JSP的原理

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 **JSP(Java Server Page):** Java的服务页面,Java动态网页.
 **JSP的本质就是Servlet.**

- hello.jsp代码:

```java
<%--
  Created by IntelliJ IDEA.
  User: Sunny
  Date: 2020/1/28
  Time: 17:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>The first JSP application</title>
</head>
<body>
    北京时间:<%=new java.util.Date().toLocaleString()%>
</body>
</html>
```

```java
// hello_jsp.java 文件中 _jspService方法
response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
	  
	  // 在Servlet代码中输出静态网页内容
      out.write("\r\n");
      out.write("\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("    <title>The first JSP application</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("    北京时间:");
      out.print(new java.util.Date().toLocaleString());
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
```

## JSP的基本语法

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 JSP语法:

- **JSP的注释：**
   作用：注释Java脚本代码
   语法：<%–这是注释–%>
- **JSP的Java脚本表达式：**
   作用：输出数据到页面上
   语法：<%=表达式%>(实际上就是调用输出流打印到页面上) out.print(表达式);
- **JSP中的Java脚本片段：**(实际开发中，应做到JSP中不能出现一行Java脚本片段)
   作用：书写Java代码逻辑
   语法：
   <%
   语句1;
   语句2;
   %>
   原理：其中的语句会原封不动的被服务器翻译到对应的Servlet的_jspService方法中。
- **JSP的声明：**
   作用：定义类的成员
   语法：
   <%!
   Java代码
   %>

```java
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>The first JSP application</title>
</head>
<body>
    北京时间:<%=new java.util.Date().toLocaleString()%>

    <%-- JSP注释: 不会翻译到Servlet中 --%>

    <%--JSP的Java脚本表达式--%>
    <%
        // Java代码
        String name = "ZYGui";
        boolean flag = true;
    %>

    <%--JSP中的Java脚本片段--%>
    <%=name%>

    <%--JSP的声明--%>
    <%!
        private String user;

        public void doWork() {
        }
    %>

    <%--很麻烦--%>
    <%
        int num = 10;
        if (num > 5){
    %>
        num大于5
    <%
        }else if(num < 5){
    %>
        num小于5
    <%
        } else {
    %>
        num等于5
    <%
        }
    %>
</body>
</html>
```

## JSP三大指令

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 **标准指令: 设定JSP网页的整体配置信息**
 特点:

1. 并不向客户端产生任何输出，
2. 指令在JSP整个文件范围内有效
3. 为翻译阶段提供了全局信息

指令的语法格式:
 <%@ 指令名称 属性名=“属性值” 属性名=“属性值” …%>

#### page指令

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)
 `<%@ page contentType="text/html;charset=UTF-8" language="java" %>`
 page指令: 表示JSP页面相关的配置信息
 **常用属性:**

- `language`: 表示在JSP中编写的脚本的语言.(只能是java)
- `contentType`: 表示JSP输出的MIME类型和编码.等价于 response.setContentType(“text/html;charset=utf-8”);
- `pageEncoding`: 表示JSP输出的编码;等价于response.setCharacterEncoding(“utf-8”);
- import: 用于导入JSP脚本中使用到的类,等价于Java代码中的: import 类的全限定名;
   注意：一个import属性可以导入多个包，用逗号分隔。
- errorPage: 指示当前页面出错后转向（转发）的页面。目标页面如果以"/"（当前应用）就是绝对路径。

**静态包含:** 使用JSP的include指令
 `<% @include file="被包含的页面文件" %>`
 特点:
 在翻译阶段就已经把多个JSP,合并在一起,最终翻译得到一个java文件

**动态包含:** 使用JSP的动作指令
 ``
 特点:
 把每一个JSP都翻译成Servlet类,在运行时期,动态的合并在一起,最终得到多个java文件

- **动态包含和静态包含的选择:**
   如果在包含的时候,需要传递数据,此时只能使用动态包含.(
   如果被包含的页面如果是静态页面,那么使用静态包含
   如果被包含的如果是动态页面,那么使用动态包含

注意:在实际开始中通常将被包含的jsp页面的后缀名设置为jspf.

#### taglib(标签库)指令

[跳转到目录](https://blog.csdn.net/m0_37989980/article/details/104100727#j0)

- 作用：引入外部的标签
- 语法：`<%@taglib uri="标签名称空间" prefix="前缀"%>`
   <%@ taglib uri=“http://java.sun.com/jsp/jstl/core” prefix=“c”%>

# JSP隐式对象的概述

在JSP页面中，有一些对象需要频繁使用，如果每次都重新创建这些对象则会非常麻烦。为了简化Web应用程序的开发，JSP2.0规范中提供了9个隐式（内置）对象，**它们是JSP默认创建的，可以直接在 JSP 页面中使用**。这9个隐式对象的名称、类型和描述如表所示。

| 名称        | 类型                                   | 描述                                                         | 范围        |
| ----------- | -------------------------------------- | ------------------------------------------------------------ | ----------- |
| out         | javax.servlet.jsp.JspWriter            | 用于输出页面                                                 | page        |
| request     | javax.servlet.http.HttpServletRequest  | 得到用户信息                                                 | request     |
| response    | javax.servlet.http.HttpServletResponse | 服务器向客户端回应消息                                       | page        |
| config      | javax.servlet.ServletConfig            | 服务器配置，可以取得初始化参数                               | page        |
| session     | javax.servlet.http.HttpSession         | 用来保存用户的信息                                           | session     |
| application | javax.servlet.ServletContext           | 所有用户的共享信息，与应用上下文有关，它代表当前web应用。    | application |
| page        | Java.lang.Object                       | 指当前页面转换后的Servlet类的实例，代表当前被访问JSP页面的实例化 | page        |
| pageContext | javax.servlet.jsp.PageContext          | JSP的页面容器提供对JSP页面所有对象以及命名空间的访问，是页面上下文对象 | page        |
| exception   | java.lang.Throwable                    | 表示JSP页面所发生的异常，**在错误页中才起作用**              | page        |

# out对象

out对象是javax.[servlet](https://so.csdn.net/so/search?q=servlet&spm=1001.2101.3001.7020).jsp.JspWriter类的实例对象，它的作用与ServletResponse.getWriter()方法返回的PrintWriter对象非常相似，都是用来向客户端发送文本形式的实体内容。不同的是，out对象的类型为JspWriter，它相当于一种**带缓存功能的PrintWriter**。**在 JSP 页面中，通过 out 隐式对象写入数据相当于将数据插入到JspWriter 对象的缓冲区中，只有调用了 ServletResponse.getWriter()方法，缓冲区中的数据才能真正写入到Servlet引擎所提供的缓冲区中**。

# out对象使用

创建一个jsp页面

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>out</title>
</head>
<body>
<% 
	out.println("第一行<br>");
	response.getWriter().println("第二行<br>");
%>
<%--
	out.println通过print语句写入数据后直到整个jsp页面结束才会将其中的
	内容真正的写到Servlet缓冲区中，Servlet引擎按照缓冲区的数据存放顺序输出
	要将out对象直接写入Servlet引擎可以用page指令中的buffer属性实现 设置为“0kb”
--%>
</body>
</html>
```

从图可以看出，尽管out.println()；语句位于response.getWriter().println()；语句之前，但它的输出内容却在后面。由此可以说明
 **out 对象通过 print 语句写入数据后，直到整个JSP页面结束，out对象中输入缓冲区的数据（即first  line）才真正写入到Serlvet引擎提供的缓冲区中。而response.getWriter().println()；语句则是直接把内容（即第二行）写入Servlet引擎提供的缓冲区中，Servlet引擎按照缓冲区中的数据存放顺序输出内容。**

设置page对象的**buffer=“0kb”**属性，**将out对象的数据直接写入Servlet引擎提供的缓冲区中**
 修改上面代码：

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" buffer="0kb"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>out</title>
</head>
<body>
<% 
	out.println("第一行<br>");
	response.getWriter().println("第二行<br>");
%>
</body>
</html>
```





# EL表达式

## 1.EL表达式的语法

EL(expression language)是为了让JSP写起来更加方便，他提供了在jsp中简化表达式的方法，让jsp的代码更加简化

> 语法结构：${expression}

注意，EL表达式一般操作的都是域对象中的数据，操作不了局部变量

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      pageContext.setAttribute("username","zhangsan");
      request.setAttribute("username","lisi");
      session.setAttribute("username","wangwu");
      application.setAttribute("username","zhaoliu");
  %>
  <pre>
        获取作用域中username： ${username}<br><%-- 默认从小到大的范围中找，找到的第一个返回 --%>
        不在作用域中的： ${password}
        <%--获取request作用域中的username： ${requestScope.username}
        获取session作用域中的username： ${sessionScope.username}
        获取application作用域中的username： ${applicationScope.username}--%>
  </pre>
</body>
</html>
```

在作用域中的不是显示null，而是显示为空

域对象的概念在jsp中共有四种，分别是pageContext，request，session，application，范围依次是-> 本页面，一次请求，一次会话，整个应用程序

### 从指定范围中取值，以及取值默认规则

- 当需要指定从某个特定的域对象中查找数据的时候可以使用四个域对象对应的空间对象分别为：pageScope,requestScope,sessionScope,applicationScope
- EL默认的查找方式为：从小到大查找，找到了即返回，若未查找到则返回空字符串

## 2.实例

### 1.获取指定范围的username

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      pageContext.setAttribute("username","zhangsan");
      request.setAttribute("username","lisi");
      session.setAttribute("username","wangwu");
      application.setAttribute("username","zhaoliu");

  %>
  <pre>
         获取pageContext作用域中的username:  ${pageScope.username}
         获取request作用域中的username： ${requestScope.username}
         获取session作用域中的username： ${sessionScope.username}
         获取application作用域中的username： ${applicationScope.username}
  </pre>
</body>
</html>
```

### 2.获取作用域中的集合

```jsp
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
      List<String> list=new ArrayList<String>();
      list.add("aaa");
      list.add("bbb");
      list.add("ccc");
      request.setAttribute("list",list);
  %>
  <pre>
           获取list中指定下标的数据：${list[1]}--${list[2]}
           获取集合的长度：${list.size()}
           list代表的是存在域对象中的变量名(限域变量名)
  </pre>
</body>
</html>
```

### 3.获取JavaBean对象

```jsp
<%@ page import="com.User.User" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>EL表达式</title>
</head>
<body>
  <%
         User user=new User();
         user.setUsername("zhangsan");
         user.setSex(true);
         user.setUserId(1);
         request.setAttribute("user",user);//设置域对象属性
  %>
  <pre>
         获取JavaBean中的username  ${user.username}
         获取JavaBean中的userId    ${user.userId}
         获取JavaBean中的sex       ${user.sex}     
  </pre>
</body>
</html>
```

由此可见，out对象中的数据直接写入了Servlet引擎提供的缓冲区中。此外，**当写入到out对象中的内容充满了out对象的缓冲区时，out对象中输入缓冲区的数据也会真正写入到Servlet引擎提供的缓冲区中。**

# pageContext对象

JSP页面中，**使用pageContext对象可以获取JSP的其他8个隐式对象。**pageContext对象是javax.servlet.jsp.PageContext类的实例对象，**它代表当前JSP页面的运行环境**，并提供了一系列用于获取其他隐式对象的方法。

## pageContext获取隐式对象的方法

| 方法名                             | 功能描述                    |
| ---------------------------------- | --------------------------- |
| JspWriter getOut()                 | 用于获取out隐式对象         |
| Object getPage()                   | 用于获取page隐式对象        |
| ServletRequest getRequest()        | 用于获取request隐式对象     |
| ServletResponse getResponse()      | 用于获取response隐式对象    |
| HttpSession getSession()           | 用于获取session隐式对象     |
| Exception getException()           | 用于获取exception隐式对象   |
| ServletConfig getServletConfig()   | 用于获取config隐式对象      |
| ServletContext getServletContext() | 用于获取application隐式对象 |

## pageContext操作属性的相关方法

| 方法名称                                              | 功能描述                          |
| ----------------------------------------------------- | --------------------------------- |
| void setAttribute(String name,Object value,int scope) | 用于设置pageContext对象的属性     |
| Object getAttribute(String name,int scope)            | 用于获取pageContext对象的属性     |
| void removeAttribute(String name,int scope)           | 删除指定范围内名称为name的属性    |
| void removeAttribute(String name)                     | 删除所有范围内名称为name的属性    |
| Object findAttribute(String name)                     | 从4个域对象中查找名称为name的属性 |

**JavaWeb的四大作用域为：page，request，session，application**



**1.page：**作用范围是整个JSP页面，是四大作用域中最小的一个；生命周期是当对JSP的请求时开始，当响应结束时销毁。对page对象的引用通常存储在pageContext对象中。



 



**2.request：**作用范围是在当前请求中有效；生命周期是在service方法调用前由服务器创建，传入service方法。整个请求结束，request生命结束。Servlet之间的信息共享是通过HttpServletRequest接口的两个方法来实现的。



void setAttribute（String name, Object value）：将对象value以name为名称保存到request作用域中。



ObjectgetAttribute（String name）：从request作用域中取得指定名字的信息。



 



**3.session**：作用范围是一次会话。生命周期是在第一次调用request.getSession()方法时，服务器会检查是否已经有对应的session,如果没有就在内存中创建一个session并返回。当一段时间内session没有被使用（默认为30分钟），则服务器会销毁该session。如果服务器非正常关闭（强行关闭），没有到期的session也会跟着销毁。如果调用session提供的invalidate（），可以立即销毁session。session是通过HttpSession接口实现的，它提供的主要方法如下：



ObjectHttpSession.getAttribute（String name）：从session中获取信息。



voidHttpSession.setAttribute（String name, Object value）：向session中保存信息。



HttpSessionHttpServletRequest.getSession()：获取当前请求所在的session的对象。



 



**4.application**：作用范围是整个Web应用。当Web应用被加载进容器时创建代表整个web应用的ServletContext对象，当服务器关闭或Web应用被移除时，ServletContext对象跟着销毁。application作用域就是服务器启动到关闭的整段时间，在这个作用域内设置的信息可以被所有应用程序使用。application作用域上的信息传递是通过ServletContext实现的，它提供的主要方法如下：



ObjectgetAttribute（String name）：从application中获取信息。



void setAttribute（String name, Object value）：向application作用域中设置信息。



 



**作用域从小到大为：page（jsp页面），request（一次请求），session（一次会话），application（整个web应用）。**

## 一、 El表达式概念

- EL表达式简介
   1）Expression Language表达式语言
   2）是一种在JSP页面获取数据的简单方式(只能获取数据，不能设置数据)
   3） 在JSP2.0开始引入概念
   4）EL表达式存取值（例子如下）

| servlet                            | JSP页面 |
| ---------------------------------- | ------- |
| request.setAttribute(“key”, value) | ${key}  |

**注意**：EL表达式取值时，该值存储的作用域要存在，作用域被销毁了，值也就没了

- EL表达式语法
   1）${ 变量名或表达式}
- EL表达式作用
   1）用于输出作用域中变量值
   2）用于各种运算：算术、逻辑、关系、三元运算等
- EL表达式与JSP脚本表达式的区别

| 区别         | JSP脚本表达式                   | EL                                                       |
| ------------ | ------------------------------- | -------------------------------------------------------- |
| 语法         | <%=m %>                         | ${m}                                                     |
| 输出哪里的值 | 输出的是脚本变量 <% int m=5; %> | 输出的是作用域中的值 <% request.setAttribute(“m”, 5); %> |

- Web应用程序接收一次请求，就创建一个Request对象和Response对象。
- 通过Request对象可以在服务器端获取客户端发送的请求数据内容。
- 通过Response对象可以生成服务器端向客户端响应的数据内容。
- Request对象和Response对象并不是Web应用程序所创建的，而是由Tomcat服务器创建（JavaEE并没有Request与Response的实现类）。
- JavaEE提供了javax.servlet.http包中提供了HttpServletRequest和HttpServletResponse接口，这两个接口是继承于javax.servlet包中的ServletRequest和ServletResponse接口。
- javax.servlet包中的ServletRequest和ServletResponse接口是与协议无关的，而javax.servlet.http包中的HttpServletRequest和HttpServletResponse接口是与Http协议有关的。

## 1.2. **百度百科**

- Request

Request这个对象不用事先声明，就可以在JSP网页中使用，在编译为Servlet之后，它会转换为javax.servlet.http.HttpServletRequest形态的对象，HttpServletRequest对象是有关于客户端所发出的请求的对象，只要是有关于客户端请求的信息，都可以藉由它来取得，例如请求标头、请求方法、请求参数、客户端IP，客户端浏览器等等信息。

- Response

Response对象用于动态响应客户端请示，控制发送给用户的信息，并将动态生成响应。Response对象只提供了一个数据集合cookie，它用于在客户端写入cookie值。若指定的cookie不存在，则创建它。若存在，则将自动进行更新。结果返回给客户端浏览器。