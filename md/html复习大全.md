# HTML

HTML可以将元素分类方式分为行内元素、块状元素和行内块状元素三种。首先需要说明的是，这三者是可以互相转换的，使用display属性能够将三者任意转换：

## 一、行内元素

(一).相关概念

行内元素最常使用的就是span，其他的只在特定功能下使用，修饰字体<b>和<i>标签，还有<sub>和<sup>这两个标签可以直接做出平方的效果，而不需要类似移动属性的帮助，很实用。

(二).特征

设置宽高无效
对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间
不会自动进行换行

行内元素特征：(1)设置宽高无效

　　　　　　　　　(2)对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间

　　　　　　　　　(3)不会自动进行换行

## 二、块状元素

(一).相关概念

块状元素代表性的就是div，其他如p、nav、aside、header、footer、section、article、ul-li、address等等，都可以用div来实现
不过为了可以方便程序员解读代码，一般都会使用特定的语义化标签，使得代码可读性强，且便于查错

(二).特征

块状元素特征：(1)能够识别宽高

　　　　　　　　　(2)margin和padding的上下左右均对其有效

　　　　　　　　　(3)可以自动换行

　　　　　　　　　(4)多个块状元素标签写在一起，默认排列方式为从上至下



## 

## 三、行内块状元素

(一).相关概念

    行内块状元素综合了行内元素和块状元素的特性，但是各有取舍
    因此行内块状元素在日常的使用中，由于其特性，使用的次数也比较多

(二).特征

    不自动换行					
    能够识别宽高
    默认排列方式为从左到右


​    
​    　　行内块状元素特征：(1)不自动换行
​    
​    　　　　　　　　　　　(2)能够识别宽高
​    
​    　　　　　　　　　　　(3)默认排列方式为从左到右


列表

分类

属性

type

语法

```
    <ol type="" start="">
        <li></li>
        <li></li>
        <li></li>
    </ol>
```

有序

无序

特殊列表标签

| 元素模式   | 元素排列                 | 设置样式           | 默认宽度         | 包含                     |
| ---------- | ------------------------ | ------------------ | ---------------- | ------------------------ |
| 块级元素   | 一行只能放一个块级元素   | 可以设置宽度高度   | 容器的100%       | 容器级可以包含的任何标签 |
| 行内元素   | 一行可以放多个行内元素   | 不可以设置宽度高度 | 它本身内容的宽度 | 容纳文本或其他行内元素   |
| 行内块元素 | 一行可以放多个行内块元素 | 可以设置宽度高度   | 它本身内容的宽度 |                          |

## 特殊

#### **一、表格元素汇总**

表格的基本构成最少需要三个元素：< table >、< tr >、< td >，其他的一些作为可选铺助存在。

| 元素名称 | 说明             |
| -------- | ---------------- |
| table    | 表示表格         |
| thead    | 表示标题行       |
| tbody    | 表示表格主体     |
| tfoot    | 表示表脚         |
| tr       | 表示一行单元格   |
| th       | 表示标题行单元格 |
| td       | 表示单元格       |
| col      | 表示一列         |
| colgroup | 表示一组列       |
| caption  | 表示表格标题     |

##### **1、table、tr、td构建基础表格**

<table border="1">
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>未婚</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>女</td>
        <td>已婚</td>
    </tr>
</table>

< table > 元素表示一个表格的声明，< tr >元素表示表格的一行，< td > 元素表示行数据。 

\1. align：规定表格相对周围元素的对齐方式，取值有left、center、right；

\2. border：规定表格边框的宽度，取值为像素；

\3. width：规定表格宽度，取值为像素或者百分比；

\4. frame：规定表格外侧边框的哪个部分是可见的。取值如下图所示：

##### **2、< th > 为表格添加标题单元格**

<table border="1">
    <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>婚姻</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>未婚</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>女</td>
        <td>已婚</td>
    </tr>
</table>

<td>标签定义HTML表格中的标准单元格。HTML表格有两类单元格：表头单元格(包含头部信息，由th元素创建)、标准单元格(包含数据，由td元素创建)。td元素的文本一般显示为正常字体且左对齐。<td>标签常见的可选属性如下图所示：一般使用colspan和rowspan属性来实现内容横跨多个列或多个行。

<table border="1" style="width:300px;">
    <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>婚姻</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>未婚</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>女</td>
        <td>已婚</td>
    </tr>
</table>

##### colspan

<table border="1" style="width:300px">
    <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>婚姻</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>未婚</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>女</td>
        <td>已婚</td>
    </tr>
    <tr>
        <td colspan="3">统计：共两人</td>
    </tr>
</table>

##### rowspan

<table border="1" style="width:300px">
    <tr>
        <th rowspan="4">基本情况</th>
        <th>姓名</th>
        <th>性别</th>
        <th>婚姻</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>男</td>
        <td>未婚</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>女</td>
        <td>已婚</td>
    </tr>
    <tr>
        <td colspan="3">统计：共两人</td>
    </tr>
</table>



< th >  元素主要是添加标题行的单元格，实际作用就是将内部文字居中且加粗。这里使用一个通用属性style，主要用于CSS样式设置，以后会涉及到。<  th > < td > 均属于单元格，包行两个合并属性：colspan（横向合并）、rowspan（纵向合并）等。 



##### **< thead > 添加表头**



<table border="1">
    <thead>
        <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>婚姻</th>
        </tr>
    </thead>
</table>



解释：< thead > 元素就是限制和规范了表格的表头部分。尤其是以后动态生成表头，它的位置是不固定的，使用此元素可以限定在开头位置。 



##### **4、< tfoot > 添加表表脚**

<table border="1">
    <thead>
        <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>婚姻</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td colspan="3">统计：共两人</td>
        </tr>
    </tfoot>
</table>

 解释：< tfoot > 元素为表格生成表脚，限制在表格的底部。 

##### **5、< tbody > 添加表主体**

<table border="1" style="width:300px;">
    <thead>
        <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>婚姻</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>男</td>
            <td>未婚</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>女</td>
            <td>已婚</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">统计：共两人</td>
        </tr>
    </tfoot>
</table>



### 超链接

target这个属性指定所链接的页面在浏览器窗口中的打开方式。

它的参数值主要有：
_blank：在新浏览器窗口(新标签)中打开链接文件；
_parent ：将链接的文件载入含有该链接框架的父框架集或父窗口中。如果
含有该链接的框架不是嵌套的，则在浏览器全屏窗口中载入链接的文件，就象
_self：在同一框架（iframe）或窗口中打开所链接的文档。此参数为默认值，通常不用指定。
_top：**在当前的整个浏览器窗口（此标签）**中打开所链接的文档，因而会删除所有框架；

# CSS

## 样式表



> 总结论：
>
> 1. 行内样式优先级最高；
> 2. 内部样式优先级大于导入样式，而与链接样式的优先级则与文档顺序有关，越靠近相关标签的样式优先级越高，即遵循就近原则。
> 3. 导入样式与链接样式的优先级也遵循就近原则。

样式定义如何显示 HTML 元素
 样式通常存储在样式表中
 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
 外部样式表可以极大提高工作效率
 外部样式表通常存储在 CSS 文件中
 多个样式定义可层叠为一个

选择器

## 1.选择器

- 简单选择器（根据名称，id，类来选取元素，通用选择器：*）
- 组合器选择器（根据他们之间的特定关系来选取元素）
- 伪类选择器（根据特定状态选取元素）
- 伪元素选择器（选取元素的一部分并设置其样式）
- 属性选择器（根据属性或属性值来选取元素）

### **一、通配符选择器**

**一、通配符选择器**

通配符选择器常用 **‘\*’** 号表示，它是所有选择器里作用范围最广的，能匹配页面中所有的元素。

基本语法格式：*{ 属性1：属性值1；属性2：属性值2；}

**例子**
 使用该选择器定义样式，清除所有HTML标记的默认边距。

```
*{
margin：0；       /*定义外边距*/
padding：0；     /*定义内边距*/
}
```

### 二、标签选择器

标签选择器是指用HTML标记名称作为选择器，按标记名称分类，为页面中某一类标签指定统一的CSS样式。

基本语法格式：标签名{ 属性1：属性值1；属性2：属性值2；}

所有的HTML标记名都可以作为标签选择器，例如a、body、p、h1等等。用标签选择器定义的样式对页面中该类型的所有标签都有效。

例子
使用p选择器定义HTML页面中所有段落的样式。

```
p{ font-size: 12px; color: #666; font-family:"微软雅黑"; }
```

### **三、类选择器**

类选择器使用**‘.’**(英文点号)进行标识，后面紧跟类名。

基本语法格式：.类名{ 属性1：属性值1；属性2：属性值2；}

该语法中，类名即为HTML元素的class属性值，大多数HTML元素都可以定义class属性。

**例子**

类选择器最大的优点是可以为元素对象定义单独或相同的样式，而且多个标记可以使用同一个类名，可以实现为不同类型的标记指定相同的样式。同时，一个HTML元素也可以应用多个class类，设置多个样式，此时多个类名之间需要用空格隔开，如上述代码中的前两个<p>标记。

注意：类名的第一个字符不能使用数字，并且严格区分大小写。一般采用小写的英文字符。

### 四、id选择器

id选择器使用**‘#’**进行标识，后面紧跟id名。

基本语法格式：#id名{ 属性1：属性值1；属性2：属性值2；}

该语法中，id名即为HTML元素的id属性值，大多数HTML元素都可以定义id属性，元素的id值是唯一的，只能对应于文档中某一个具体的元素。

例子

注意：同一个id不允许应用于多个标记，虽然很多浏览器并不会报错，但JavaScript等脚本语言调用id时会出错。另外，id选择器不支持像类选择器那样定义多个值。

## 组合选择器

### 五、属性选择器

属性选择器可以为拥有指定属性的 HTML 元素设置样式，而不仅限于 class 和 id 属性。

语法格式：[标签名称] { 属性1：属性值1；属性2：属性值2；}

注意：只有在规定了 !DOCTYPE 时，IE7 和 IE8 才支持属性选择器。在 IE6 及更低的版本中，不支持属性选择。

### **六、并集选择器**

并集选择器是同时匹配多个选择器，取多个选择器的并集，选择器之间用逗号隔开，如em,strong{ }。

语法格式：
 标签名称1,标签名称2 { 属性1：属性值1；属性2：属性值2；}

**例子**

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="author" content="https://www.cnblogs.com/jizuiku"/>
    <title></title>
    <style type="text/css">
    span,div, .content {
            color:darkorange;
        }

    </style>
</head>
<body>
    <span>博客园</span>
    <div>给最苦</div>
    <p class="content">网页设计</p>
</body>
</html>
```

并集选择器的优点是将多个标签的相同样式 提取出来，集体声明，优化代码，方便阅读。

### 七、后代选择器

后代选择器也称包含选择器，用来选择特定元素的后代。如.asideNav li{ }，表示先匹配第二个选择器的元素，并属于第一个选择器内。

语法格式：
标签名称1 标签名称2{ 属性1：属性值1；属性2：属性值2；}

在CSS中，后代是根据HTML文档中的DOM上下文来决定的。当元素发生嵌套时，内层的元素就成为外层元素的后代。如元素B嵌在元素A内部，B就是A的后代。而且，B的后代也是A的后代，就像家族关系。

定义后代选择器时，外层的元素写在前面，内层的元素写在后面，中间用空格分隔。后代选择器会影响到它的各级后代，没有层级限制。如：

### **八、子代选择器**

子代选择器使用**‘>’**表示，如ul>li{ }，表示匹配第二个选择器，且为第一个选择器的元素的后代。

语法格式：
 标签名称1>标签名称2{ 属性1：属性值1；属性2：属性值2；}



```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>实例</title>
    <style>
        #box>p{
            color: darkorange;  /*设置颜色为 深橙色*/
            font-size: 80px;
    }
    </style>
</head>
<body>
    <div id="box">
        <div>
            <div>
                <div>
                    <p>
                        狸花猫
                    </p>
                </div>
            </div>
        </div>
        <p>
            大橘猫
        </p>
    </div>
</body>
</body>
</html>
```

### 九、兄弟选择器（+和~）

相邻兄弟选择器使用+号表示，如p+a{ }，表示匹配紧跟第一个选择器并匹配第二个选择器的元素，如紧跟p元素后的a的元素。
如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器。

语法格式：标签名称1+标签名称2 { 属性1：属性值1；属性2：属性值2；}

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        h1+p {
            margin-top: 50px;
            color: red;
        }
    </style>
</head>

<body>
    <p>This is paragraph.</p>
    <h1>This is a heading.</h1>
    <p>This is paragraph.</p>
    <p>This is paragraph.</p>
</body>

</html>
```

兄弟只会影响下面的p标签的样式，不影响上面兄弟的样式。
 注意这里的’+’的意义跟’and’意义不一样，兄弟选择器的样式是应用在兄弟元素上，跟参照的元素样式无关，如上例只影响p元素的样式，而不影响h1标签的样式。
 当两个兄弟元素相同时，会实现一次循环查找：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
<style type="text/css">
    li + li {
        color:red;
    }
</style>
</head>
<body>
<div>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>
</body>
</html>
```

而~ 选择器 ：作用是查找某一个指定元素的后面的所有兄弟结点。 

## 选择器的权重

### 权值和权级的概念

​       我们可以通过给选择器添加**权值**和**权级**这两个概念的方式来更好的理解选择器的权重
（注意:“权值”和“权级”的概念是为了更好的理解权重而提出的，并不是真是存在的)

## Display css

根据CSS规范的规定，每一个网页元素都有一个display属性，用于确定该元素的类型，每一个元素都有默认的display属性值，比如div元素，它的默认display属性值为“block”，称为块元素，而span元素的默认display属性值为“inline”，称为“行内”元素。

### **inline**（行内元素）

 1.和其他元素都在一行上，可以与其他行内元素共享一行，不会独占一行
 2.高，行高及顶和底边距不可改变，大小由内容撑开
 3.可以使用padding,margin上下左右都有效

| 块级元素 | 说明         |
| -------- | ------------ |
| a        | 超链接       |
| span     | 常用行级     |
| strong   | 加粗，强调   |
| b        | 加粗，不强调 |
| em       | 斜体，强调   |
| i        | 斜体，不强调 |
| img      | 图片         |
| input    | 输入框       |
| select   | 下拉列表     |

### block（块级元素）

1.总是在新行上开始，独占一行，在不设置自己的宽度的情况下，块级元素会默认填满父级元素的宽度
2.高度，行高以及顶和底边距都可控制，宽度是它的容器的100%，除非设定一个宽度
3.可以设置padding，margin的属性值，top，left，bottom，right都能够产生边距效果



| 块级元素 | 说明               |
| -------- | ------------------ |
| div      | 最典型的块元素     |
| p        | 表示段落           |
| h1-h6    | 六级标题，默认加粗 |
| br       | 表示换行           |
| ol       | 有序刘表           |
| ul       | 无序列表行         |



**inline-block**（融合行内于块级）
 不独占一行的块级元素



```
<div class="box">
    <div class="child1">child1</div>
    <div class="child2">child2</div>
</div>
```

```
.box{
    width: 280px;
    background-color: rgb(240, 192, 192);
}

.child1{
    width: 100px;
    height: 100px;
    background-color: lightblue;
}

.child2{
    width: 100px;
    height: 100px;
    background-color: rgb(44, 168, 209);
```

**1、块级元素是指单独撑满一行的元素，块级元素默认会占满整行，所以多个块级盒子之间是从上到下排列的。**

主要有div、ul、li、table、p、h1等元素。这些元素的display值默认是block、table、list-item等。

**2、内联元素又叫行内元素，指只占据它对应标签的边框所包含的空间的元素**。

这些元素的display值默认是inline、inline-block、inline-table、table-cell等。如果父元素宽度足够则并排在一行显示的，如span、a、em、i、img、td等。

内联元素默认会在一行里一列一列的排布，当一行放不下的时候，会自动切换到下一行继续按照列排布；

## **CSS** transitions 

### 解释

是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。
 transition可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。

### 样式

| 值                         | 描述                                       |
| -------------------------- | ------------------------------------------ |
| transition-property        | 指定CSS属性的name，transition效果          |
| transition-duration        | transition效果需要指定多少秒或毫秒才能完成 |
| transition-timing-function | 指定transition效果的转速曲线               |
| transition-delay           | 定义transition效果开始的时候               |

## css样式

### 外部样式表(External style sheet)

```c
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### 内部样式表(Internal style sheet)

当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 

```c
<head>
<style>
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("images/back40.gif");}
</style>
</head>
```

### 内联样式(Inline style)

由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。本例展示如何改变段落的颜色和左外边距：

```c
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```

### 多重样式

如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。

例如，外部样式表拥有针对 h3 选择器的三个属性：

```c
h3
{
    color:red;
    text-align:left;
    font-size:8pt;
}
```

而内部样式表拥有针对 h3 选择器的两个属性：

```c
h3
{
    text-align:right;
    font-size:20pt;
}
```

假如拥有内部样式表的这个页面同时与外部样式表链接，那么 h3 得到的样式是：

```c
color:red;
text-align:right;
font-size:20pt;
```

**重样式优先级**
 样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。

一般情况下，[优先级](https://so.csdn.net/so/search?q=优先级&spm=1001.2101.3001.7020)如下：

**
 内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式**

### 多重样式优先级深入概念

优先级是浏览器是通过判断哪些属性值与元素最相关以决定并应用到该元素上的。优先级仅由选择器组成的匹配规则决定的。

优先级就是分配给指定的CSS声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。

优先级顺序
 下列是一份优先级逐级增加的选择器列表：

通用选择器（*）
 元素(类型)选择器
 类选择器
 属性选择器
 伪类
 ID 选择器
 内联样式
 !important 规则例外
 当 !important 规则被应用在一个样式声明中时,该样式声明会覆盖CSS中任何其他的声明, 无论它处在声明列表中的哪里. 尽管如此, !important规则还是与优先级毫无关系.使用 !important 不是一个好习惯，因为它改变了你样式表本来的级联规则，从而使其难以调试。

一些经验法则：

Always 要优化考虑使用样式规则的优先级来解决问题而不是 !important
 Only 只在需要覆盖全站或外部 css（例如引用的 ExtJs 或者 YUI ）的特定页面中使用 !important
 Never 永远不要在全站范围的 css 上使用 !important
 Never 永远不要在你的插件中使用 !important

## 层叠顺序

**当两个元素都是块级元素时，默认情况越后面的元素层级越高**

这里为了效果就不使用 绝对定位了

```

<style>
	div{
		width:100px;
		height:100px;
	}
	.box1{
		color:red;
		background:#00FFFF;
	}
	.box2{
		margin-top:-100px;
		background:#20aa5e;
	}
</style>

<body>
	<div class="box1">box1</div>
	<div class="box2">box2</div>
</body>
```

**当两个元素为行内块时**

```html
<style>
	div{
		width:100px;
		height:100px;
		display: inline-block;
	}
	.box1{
		color:red;
		background:#00FFFF;
	}
	.box2{
		margin-left:-105px;
		background:#20aa5e;
	}
</style>

<body>
	<div class="box1">box1</div>
	<div class="box2">box2</div>
</body>
```

### **小总结**

> 当两个元素为正常流时，默认情况下后一个元素比前一个元素层级高，并且允许后面的元素透上来。
> 如果两个元素是块级元素，文字比背景层级高（因此不管是否设置背景文字始终会透上来）。
> 如果是行内或行内块，背景比文字层级高（因此只要设置背景，后一个元素将透不上来）。

## **层叠上下文**

在HTML中有一个三维概念，也就是我们面向电脑屏幕的这一端为Z轴。

而凡是拥有层叠上下文的元素，将离用户最近，也就是越靠在Z轴前面。默认情况下只有根元素`HTML`会产生一个层叠上下文，并且元素一旦使用了一些属性也将会产生一个层叠上下文，如我们常用的定位属性。如两个层叠上下文相遇时，总是后一个层叠前一个，除非使用z-index来改变。

```html
<style>
	.box1{
		width:100px;
		height:100px;
		background:#008000;
	}
	.box1 .item{
		position:relative;
		left: 50px;
		height:100px;
		background: #0077AA;
	}
	.box2{
		margin-top:-50px;
		margin-left: 10px;
		width:100px;
		height:100px;
		background:#00FFFF;
	}
</style>

<body>
	<div class="box1">绿色box1
		<div class="item">定位</div>
	</div>
	<div class="box2">青蓝色box2</div>
</body>
```

这里我们可以看到当我们使用定位属性后将会产生一个层叠上下文。虽然item产生了一个层叠上下文，但并不影响它父元素。它的父元素依然被box2层叠了。

除了定位元素可以创建层叠上下文以外，还有如下几个属性也可以做到：

- 根元素 (HTML),
- z-index 值不为 "auto"的 绝对/相对定位，
- 一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，
- opacity 属性值小于 1 的元素
- transform 属性值不为 "none"的元素，
- mix-blend-mode 属性值不为 "normal"的元素，
- filter值不为“none”的元素，
- perspective值不为“none”的元素，
- isolation 属性被设置为 "isolate"的元素，
- position: fixed
- 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
- -webkit-overflow-scrolling 属性被设置 "touch"的元素

### **总结**

> 创建了层叠上下文的元素比其他元素层级高。
> 两个层叠上下文相遇时，后一个层级高。如果想改变层级可以使用z-index



## css背景

CSS 背景属性用于定义HTML元素的背景。

### 背景颜色

background-color 属性定义了元素的背景颜色.

页面的背景颜色使用在body的选择器中:

```c
body {background-color:#b0c4de;}
```

十六进制 - 如："#ff0000"
 RGB - 如：“rgb(255,0,0)”
 颜色名称 - 如：“red”

### 背景图片

background-image 属性描述了元素的背景图像.

默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体.

页面背景图片设置实例:

```c
body {background-image:url('paper.gif');}
```

### 背景位置

## css文本

### 文本缩进

文本缩进属性是用来指定文本的第一行的缩进。

- 数字+px
- 数字+em

### 对齐方式

text-align

运用在块级元素中，使其中的文本对齐。事实上这句话的意思是运用在块级元素中text-align会使其包含行内元素对齐。

| 属性值  | 效果         |
| ------- | ------------ |
| left    | 文本左对齐   |
| center  | 文本居中对齐 |
| right   | 文本右对齐   |
| justify | 文本两端对齐 |

注意：属性设置为 “justify” 后，将拉伸每一行，以使每一行具有相等的宽度

### 文本颜色

| 颜色表示方式   | 表示含义                                | 属性值                                           |
| -------------- | --------------------------------------- | ------------------------------------------------ |
| 颜色名称       | 预定义的颜色名                          | red、green、blue…                                |
| RGB表示法      | 红绿蓝三原色，每项取值范围:0~255        | rgb(0，0，0)、rgb(255，255，255)                 |
| RGBa表示法     | 红绿蓝三原色+a表示透明度，取值范围是0~1 | rgba(255，255，255，0.5)、rgba（255，0，0，0.3） |
| 十六进制表示法 | 以#开头，将数转换成十六进制表示         | #000000、#ff0000、#e92322，简写：#000、#f00      |

## css边框

- ### border-style：设置边框的样式，例如实线、虚线等；

| 值      | 描述                                                   |
| ------- | ------------------------------------------------------ |
| none    | 无边框                                                 |
| hidden  | 隐藏边框，与 "none" 类似                               |
| dotted  | 定义点状虚线边框                                       |
| dashed  | 定义虚线边框                                           |
| solid   | 定义实线边框                                           |
| double  | 定义双实线边框，双实线边框的宽度等于 border-width 的值 |
| groove  | 定义 3D 凹槽边框，其效果取决于 border-color 的值       |
| ridge   | 定义 3D 垄状边框，其效果取决于 border-color 的值       |
| inset   | 定义 3D 嵌入边框，其效果取决于 border-color 的值       |
| outset  | 定义 3D 突出边框，其效果取决于 border-color 的值       |
| inherit | 从父元素继承边框样式                                   |

- 如果提供全部的四个参数，则会按照上、右、下、左的顺序分别设置边框四个边的样式；
- 如果提供三个参数，那么第一个参数会作用在上边框，第二个参数会作用在左、右两个边框上，第三个参数会作用在下边框上；
- 如果提供两个参数，那么第一个参数会作用在上、下两个边框上，第二个参数会作用在左、右两个边框上；
- 如果只提供一个参数，这个参数将同时作用在四个边框上。







- ### border-width：设置边框的宽度（厚度）；

| 值      | 描述                                             |
| ------- | ------------------------------------------------ |
| thin    | 定义较细的边框                                   |
| medium  | 默认值，定义中等宽度的边框                       |
| thick   | 定义较粗的边框                                   |
| length  | 使用数值加单位的形式设置具体的边框宽度，例如 2px |
| inherit | 从父元素继承边框的宽度                           |

 thin、medium、thick 三个关键字并没有固定的值，它们的值取决于浏览器，例如在 Chrome 浏览器中三个关键字的值分别为 1px、3px、5px。







- 
- border-color：设置边框的颜色；



border-color 属性用来设置元素中所有边框的颜色，或者单独为某个边框设置颜色，其语法格式如下：

- border：上面三个边框属性的缩写。

border 属性是上面介绍的 border-width、border-style、border-color 三种属性的简写，使用 border 属性可以同时定义上述三个属性，语法格式如下：

border: border-width border-style border-color;

其中 border-width 用来设置边框的宽度；border-style 用来设置边框的样式；border-color 用来设置边框的颜色。



## css盒子

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>弹性盒子</title>
	<style type="text/css">
    .main
    {
    	display: flex;
    	flex-derection:row;
    	width: 300px;
    	height: 300px;
    	border: 1px solid black;
    }
      .o{
      	width: 300px;
      	height: 300px;
      	background-color: red;}
	</style>
</head>
<body>
	<div class="main">
		<div class="o">第一个</div>
	</div>
</body>
</html>
```

### 盒子真正的大小

盒子的宽度 = 内容宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距

盒子的高度 = 内容高度 + 上填充 + 下填充 + 上边框 + 下边框 + 上边距 + 下边距

```c
p {text-indent:50px;}
```

### 含义

在弹性盒子布局中，弹性容器(flex container)中的子元素可以以任意方向排布，也可以伸缩它们自身的尺寸，或者增大自身尺寸以填满未被使用的空间，或者缩小自身尺寸以避免超出父容器的尺寸范围。子元素横向或纵向对齐方式很容易被修改。嵌套的弹性盒子布局(水平内嵌套垂直，或垂直内嵌套水平)，可以用来创建两个维度上的布局。

### 组成

盒子的组成由外边距margin，外边框border，内边距padding和内容content组成，其中margin，border，padding是css中的属性，可以通过控制css属性来控制盒子的大小。

### 区域

| 区域       | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| 内容区域   | 代表盒子的实际内容部分，它是由 width 宽度和 height 高度来确定的 |
| 内间距区域 | 代表盒子与实际内容之间的空白区域，由 padding 属性设置        |
| 边框区域   | 代表盒子的边框，是内间距区域和外边距区域的边界，由 border属性设置 |
| 外边距区域 | 代表此盒子的边框与相邻的其他盒子边框之间的距离，由 margin 属性设置 |

## z-index

### 取值

1）关键字 ：**auto**

2）数值：  **任意整数（包括正数、负数、0）**

3）通用取值：inherit  initial  unset

### 作用

1）一般来说，z-index的**默认值**是auto

> The box does not establish a new local stacking context. The stack level of the generated box in the current stacking context is the same as its  parent's box.

2）当z-index取数值时，有两个作用：

​     ① 在当前元素建立一个堆叠上下文，即告诉浏览器这里出现了堆叠，需要考虑分层了。

​     ② 告诉浏览器当前元素在这个堆叠上下文中所占的位置。

### 使用

1）只有position为relative/absolute/fixed的元素，z-index属性才起作用。注意，是该元素本身。

2）z-index遵循从父原则，即如果父元素和子元素同时设置了z-index,以父元素的z-index为准。

## 定位

| 取值     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| static   | 默认值，静态定位，表示没有定位，元素会按照正常的位置显示，此时 top、bottom、left 和 right 4 个定位属性也不会被应用。 |
| relative | 相对定位，即相对于元素的正常位置进行定位，您可以通过 top、right、bottom、left 这 4 个属性来设置元素相对于正常位置的偏移量，在此过程中不会对其它元素造成影响。 |
| absolute | 绝对定位，相对于第一个非 static 定位的父级元素进行定位，可以通过 top、right、bottom、left 这 4  个属性来设置元素相对于父级元素位置的偏移量。如果没有满足条件的父级元素，则会相对于浏览器窗口来进行定位。使用绝对定位的元素不会对其它元素造成影响。 |
| fixed    | 固定定位，相对于浏览器的创建进行定位，可以使用 top、right、bottom、left 这 4 个属性来定义元素相对于浏览器窗口的位置。使用固定定位的元素无论如何滚动浏览器窗口元素的位置都是固定不变的。 |
| sticky   | 粘性定位，它是 relative 和 fixed 的结合体，能够实线类似吸附的效果，当滚动页面时它的效果与 relative 相同，当要滚动到屏幕之外时则会自动变成 fixed 的效果。 |

### 1. 静态定位：static

```
<!DOCTYPE html>
<html>
<head>
    <style>
        div{
            height: 100px;
            border: 1px solid black;
        }
        div.static {
            width: 130px;
            height: 50px;
            background-color: #CCC;
            line-height: 50px;
            text-align: center;
            position: static;
            top: 50px;
            left: 20px;
        }
    </style>
</head>
<body>
    <div>
        <div class="static">postiont: static;</div>
    </div>
</body>
</html>

网页翻译知识图片视频音乐社交购物
```

static 是 position 属性的默认值，表示没有定位，使用静态定位的元素会按照元素正常的位置显示，并且不会受到 top、bottom、left、right 和 z-index 属性的影响。示例代码如下：

### 2.相对定位：relative

相对定位就是元素相对于自己默认的位置来进行位置上的调整，您可以通过 top、bottom、left 和 right 四个属性的组合来设置元素相对于默认位置在不同方向上的偏移量。

relative

```
<!DOCTYPE html>
<html>
<head>
    <style>
        div{
            border: 1px solid black;
        }
        div.static {
            width: 140px;
            height: 50px;
            background-color: #B3FF99;
            line-height: 50px;
            text-align: center;
            position: relative;
            top: 25px;
            left: 10px;
        }
        p {
            width: 100px;
            height: 100px;
            background-color: #CCC;
            margin: 0;
        }
    </style>
</head>
<body>
    <div>
        <div class="static">position: relative;</div>
        <p></p>
    </div>
</body>
</html>
```

### 5.粘性定位：sticky

粘性定位与前面介绍的四种定位方式不太一下，它像是相对定位和固定定位的结合体，当滚动页面时它的效果与相对定位相同，当元素滚动到一定程度时它又会呈现出固定定位的效果。比如一些网页上的导航菜单，当页面加载完成时它在自己默认的位置，当我们向下滚动页面时它又会固定在页面的最顶端。

```
<!DOCTYPE html>
<html>
<head>
    <style>
        div{
            height: 500px;
            position: relative;
        }
        p {
            width: 100%;
            height: 50px;
            margin: 0;
            text-align: center;
            line-height: 50px;
            background-color: #CCC;
        }
        p.sticky {
            background-color: blue;
            position: sticky;
            top:0px;
        }
    </style>
</head>
<body>
    <div>
        <p>1</p>
        <p>2</p>
        <p class="sticky">position: sticky;</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
    </div>
</body>
</html>


```



## css边框样式

## css过渡状态

transition（ CSS 属性）是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。
transition可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。
以下是属性解释。

| 值                         | 描述                                       |
| -------------------------- | ------------------------------------------ |
| transition-property        | 指定CSS属性的name，transition效果          |
| transition-duration        | transition效果需要指定多少秒或毫秒才能完成 |
| transition-timing-function | 指定transition效果的转速曲线               |
| transition-delay           | 定义transition效果开始的时候               |

1. ### transition: property name | duration

举例： transition: width .8s;
表示width属性变化时 过渡时间为0.8s
2. ### transition: property name | duration | delay

举例：transition: width .8s .5s;
表示width属性变化时 过渡时间为0.8s 且延迟0.5s之后执行宽度变化
3. ### transition: property name | duration | timing function

举例：transition: width .8s ease-in-out;
使用了转速曲线，以慢速开始和结束的过渡效果。
time function可能的值有以下。

| 值                    | 描述                                                       |
| --------------------- | ---------------------------------------------------------- |
| linear                | 规定以相同速度开始至结束的过渡效果                         |
| ease                  | 规定慢速开始，然后变快，然后慢速结束的过渡效果             |
| ease-in               | 规定以慢速开始的过渡效果                                   |
| ease-out              | 规定以慢速结束的过渡效果                                   |
| ease-in-out           | 规定以慢速开始和结束的过渡效果                             |
| cubic-bezier(n,n,n,n) | 在cubic-bezier函数中定义自己的值。可能的值是0至1之间的数值 |

4. ### transition: property name | duration | timing function | delay

举例： transition: width .8s ease 1s;
表示宽度变化时，过渡时间为0.8s, ease表示规定慢速开始，然后变快，然后慢速结束的过渡效果，延迟1s执行宽度变化

5. ### 多个属性用逗号隔开

transition: height .8s, color .8s;
6. 应用于所有属性

### transition: all 0.5s ease-out;

## JavaScript

### 变量

#### 一、变量声明

js所有的声明变量，均使用var关键字

>  最开始我也不理解这句话，为什么不能用let。后来仔细理解了一下，这里说的是声明变量，没有定义变量或者赋值，let必须初始化，所以只能使用var

```js
var a;         //声明一个变量 a
var b,c,d;     //同时申明多个变量时，变量名之间用逗号隔开

console.log(a); 　　//在控制台显示变量a的值,输出为undefined
document.write(a); //在网页上打印变量a的值,输出为undefined
```

声明变量注意：

>  1、 同一变量可多次不同福字，修改变量的数据类型，修改后变量的数据类型视情况而定 
>
> /2、声明的变量要符合变量的命名规范 
>
> 3、变量的具体数据类型，由变量赋值决定。
>
> 

#### 二、js变量的命名规则

```js
1、变量命名必须以字母、下划线”_”或者”$”为开头。其他字符可以是字母、_、美元符号或数字。
2、变量名中不允许使用空格和其他标点符号，首个字不能为数字。
3、变量名长度不能超过255个字符。
4、变量名区分大小写。(javascript是区分大小写的语言)
5、变量名必须放在同一行中
6、不能使用脚本语言中保留的关键字、保留字、true、false 和 null 作为标识符。
截止到目前为止JS描述了一组具有特定用途的关键字，一般用于控制语句的开始或结束,或者用于执行特定的操作等。关键字也是语言保留的，不能用作标识符。if for switch  case  break  continue  while  var  function
```

#### 三、变量的定义

>  知识点：const ，let  ,var  ,直接赋值
>  

##### 1、const

const定义的js变量是一个常量。不可以修改（相当于只读不可写入），而且必须初始化（给const一个初始值，不能为空），

>  注：const不能改变值，如果改变值。**浏览器也不会报错，只会默默的失败，**（出自ECMAscript 6入门）
>  

const的值不能在同一函数内重复声明，否则两个都会报错。

```js
const a = 5； //5被定义之后就不能改变，5这个位置不能为空

const a ；//错误，必须初始化
```

##### 2、var

var是常用的定义变量， var 定义变量 如果没有初始化值会输出underfined，不会报错 



**var定义的变量在函数作用域中，也就是说这个变量可以在方法外部调用，**

```js
function test(){        
            if(true){
                var a = "China";
                console.log(a); //China
            }
            console.log(a); // China
        }
        test();
```

##### 3.let

let是es6中出的标准 let定义的变量是块级作用域，只在let所在行数内有效，函数外无法使用变量。

相当于局部变量，一个函数中不能重复使用let定义相同的变量名，否则会报错

let也不会像var那样发生变量提升

let定义变量需要先声明在使用，否则会出现错误。 

##### 4、直接赋值

```js
a = a；
```

这种方法是不规范的，不推荐使用，大家知道有这个点就好了。

>  注：直接赋值，不声明变量，定义的变量属于全局变量，在全局范围内可以使用。

#### 四、数据类型

>   网上关于js数据类型的文章比较多，我这里主要参考js高级程序设计写的 数据类型主要分为原始值和引用值，其中原始值是不能改变的，引用值是可以改变的 原始值有：    数值型：number（凡是数字都是数值型，不区分整数和小数）      字符串：string（凡是引号包裹起来的内容全部都是字符串）     布尔：boolean（true、false）      未定义型：undefined 引用值有： 对象类型：object（特殊取值null） 引用数据类型bject包括  ：object，array，function，data 引用值是可以改变的
>  

##### 1、number 数值

1.number包含整数和浮点数，在控制台中，浮点数会自动转化为整数

```js
var num = 2.00
  console.log(num) // 输出：2，自动转换为了整数
```



2.浮点数的最高精度是17位

##### 2.string字符串

>  1.字符串类型中的单双引号作用一样 2.字符串有length属性，可以取得字符串的长度 3.字符串是不可改变的，所谓的改变字符串是销毁原来的字符串创建了新的字符串，并不是改变原来的字符串。 4.字符串转换，这点在文章末尾写到。
>  

##### 3.boolean布尔值

>  1。布尔值只有true和false两个值。true不一定等于1 false不一定等于0 看具体情况 2.  区分大小写，小写额true和false是布尔值，大写的False和True只是标识符不是布尔值  Boolean（）转型函数，把某个值转化成为Boolean值
>  

##### 4.Undefined

>  声明变量未定义，变量值等于Undefined 调用函数时没有对应参数提供，参数值等于Undefined 对象没有赋值的属性，该属性值为Undefined 函数没有返回值，默认为Undefined
>  

##### 5.null

null表示为空的引用

>  null通常用来占位 null不等于任何值，包括null本身 null在用typeof操作符去检查的时候，类型是object，（是指上是一个空指针）
>  

##### 6.object引用数据类型

主要包括object，array ，function，date 这点内容比较多我暂时没整理完，整理好了我继续更新

#### 五、 数据类型检测和转换





### 链接字符串

#### 使用加号运算符

```
let result = ""; //定义一个空字符串
  let fruits = ["Banana", "Orange", "Apple", "Mango"];  //定义一个数组
  for (i = 0; i < fruits.length; i++) {  //使用for循环遍历数组中的元素
      if (fruits[i] === "Apple"){

          result = "Apple元素在数组中的索引号为：" + i; //使用加号运算符连接字符串

      };
  } 
  alert(result);  //输出结果为：Apple元素在数组中的索引号为：2
```

#### 使用join()函数（针对数组中的字符连接）

```
let result = ""; //定义一个空字符串
  let Array = []; //定义一个空数组
  let fruits = ["Banana", "Orange", "Apple", "Mango"];  //定义一个数组
  for (i = 0; i < fruits.length; i++) {  //使用for循环遍历数组中的元素
      if (fruits[i] === "Apple"){

          Array.push("Apple元素在数组中的索引号为：", i);  //使用push()函数将元素添加到空数组Array中
          result = Array.join('');  //使用join()连接数组中的字符串
          //join()括号中要使用引号（单引号/双引号），否则会把数组元素之间的逗号也加进来

      };
  } 
  alert(result);  //输出结果为：Apple元素在数组中的索引号为：2
```

#### 使用concat()函数

```
let result = ""; //定义一个空字符串
  let fruits = ["Banana", "Orange", "Apple", "Mango"];  //定义一个数组
  for (i = 0; i < fruits.length; i++) {  //使用for循环遍历数组中的元素
      if (fruits[i] === "Apple"){

          result = "Apple元素在数组中的索引号为："; 
          result = result.concat(i);  //使用concat()连接字符串

      };
  } 
  alert(result);  //输出结果为：Apple元素在数组中的索引号为：2

```

### 运算符

算数运算符
1.1 基础符号

    运算符可以用来对一个或多个操作数（值）进行运算
    
    算术运算符：
        加法运算符
        减法运算符
        乘法运算符
        / 除法运算符
        ** 幂运算
        % 模运算，两个数相除取余数
    
    注意：
        算术运算时，除了字符串的加法，
        其他运算的操作数是非数值时，都会转换为数值然后再运算
```
let a = 1 + 1
a = 10 - 5
a = 2 * 4
a = 10 / 5
a = 10 / 3
a = 10 / 0 // Infinity, 其他语言会报错
a = 10 ** 4
a = 9 ** 0.5 // 开方
a = 10 % 2
a = 10 % 3
a = 10 % 4
```

#### 自动类型转换

```js
a = 10 - '5' // 10 - 5
a = 10 + true // 10 + 1
a = 5 + null // 5 + 0
a = 6 - undefined // 6 - NaN
```



#### 赋值运算符

赋值运算符用来**将一个值赋值给一个变量**

```
=
    - 将符号右侧的值赋值给左侧的变量
??=
    - 空赋值
    - 只有当变量的值为null或undefined时才会对变量进行赋值
+=
    - a += n 等价于 a = a + n
-=
    - a -= n 等价于 a = a - n
*=
    - a *= n 等价于 a = a * n
/=
    - a /= n 等价于 a = a / n
%=
    - a %= n 等价于 a = a % n
**=
    - a **= n 等价于 a = a ** n
```

#### 一元±

- 正号   
  - 不会改变数值的符号
- 负号   
  - 可以对数值进行符号位取反
- 当我们对非数值类型进行正负运算时，会先将其**转换为数值**然后再运算
- 
- 

## 自增和自减

###  ++ 自增运算符

- ++ 使用后会使得原来的变量立刻增加1
- 自增分为**前自增(++a)\**和\**后自增(a++)**
- 无论是++a还是a++都会使原变量立刻增加1
- 不同的是++a和a++所返回的值不同   
  - a++ 是自增前的值 **旧值**
  - ++a 是自增后的值 **新值**

```
let a = 10
let b = a++ // a的值变为11, b的值为10

let c = 10
let d = ++c // c的值变为11, d的值为11

let n = 5
/* 算式从左到右执行，
   先执行n++，此时n变为6, n++返回值为5
   然后执行++n，此时n变为7，++n返回值为7
   最终n的值为7
   所以下式等同于 5 + 7 + 7
 */
let result = n++ + ++n + n // 最终结果为19
```

### – 自减运算符

- – 使用后会使得原来的变量立刻减少1
- 自增分为**前自减(–a)\**和\**后自减(a–)**
- 无论是–a还是a–都会使原变量立刻减少1
- 不同的是–a和a–所返回的值不同   
  - a-- 是自减前的值 **旧值**
  - –a 是自减后的值 **新值**

### dom

#### 概念

所谓DOM,全称 Docuemnt Object Model 文档对象模型，毫无疑问，此时要操作对象，什么对象？文档对象

在文档中一切皆对象，比如html,body,div,p等等都看做对象，那么我们如何来点击某个盒子让它变色呢？

DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

#### 获取

##### 通过id获取

```
<div id="box"></div>
<script>
    let box= document.getElementById("box");
</script>
```

注意：getElementById()括号中的不需要在前面加“#”，因为方法就决定了括号中的值是一个元素的id值。该方法返回一个DOM对象

根据ID获取

##### 根据标签名获取

##### 通过HTML5新增的方法获取

##### 特殊元素获取

# HTML表单基础

HTML表单用于收集用户输入或选择的数据，且将数据作为参数提交给服务器处理。

## 文本框——text

text 属性用来设定在表单的文本框中，输入任何类型的文本、数字、或字母。输入的内容以单行显示。语法如下：

    <input  type="text"  name="控件名称"  size="控件的长度"  maxlength=" 最长字符数" 
    
     value="文字域的默认取值"/>
| 参数类型  | 含义                                         |
| --------- | -------------------------------------------- |
| name      | 文本款的名称，用于和页面中其他控件加以区别   |
| size      | 定义文本框在页面中显示的长度，以字符作为单位 |
| maxlength | 定义在文本框中最多可以输入的文字数           |
| value     | 用于定义文本框中的默认值                     |

## 密码域——password

 输入到文本域中的文字均以星号“*”或圆点显示。语法如下： 



    <input  type="password"  name="控件名称"  size="控件的长度"  maxlength=" 最长字符数"  value="密码域的默认取值"/>

| 参数类型  | 含义                                                 |
| --------- | ---------------------------------------------------- |
| name      | 域的名称，用于和页面中其他控件加以区别               |
| size      | 定义密码域的文本框在页面中显示的长度，以字符作为单位 |
| maxlength | 定义在密码域的文本框中最多可以输入的文字数           |
| value     | 用于定义密码域的默认值，同样以“*”或圆点显示          |



##  表单标签< form >

 定义表单框架，本身无可视化效果，可与文本输入框、密码框、按钮等表单组件形成完整的表单效果。 

| 属性名  | 属性值                                                       | 说明                                  |
| ------- | ------------------------------------------------------------ | ------------------------------------- |
| action  | url地址                                                      | 规定提交数据的服务器地址              |
| method  | get或post                                                    | 规定发送数据的HTTP方式，默认为get     |
| name    | 自定义表单名                                                 | 规定表单名称，具有唯一性              |
| enctype | application/x-www-form-urlencoded（默认值）  multipart/form-data; text/plain | 规定数据发送前的编码要求              |
| target  | _blank   _self   _parent   _top   iframename                 | 规定以什么方式打开action属性中url地址 |

## 标记标签< label >

< label >可以在被点击时为对应的表单控件生成焦点，显示效果与普通文本一致。

```
<!-- <label>的首标签中使用for属性引用对应表单控件的id名称 -->
<!-- 法一 --> 
<label for="user">用户名：</label>
<input type="text" name="user1" id="user1" />
<!-- 法二 --> 
<label>用户名：<input type="text" name="user1" /></label>
```

## 输入标签< input >

根据type不同的属性值可显示多种表单元素样式：单行文本输入框、单选/复选按钮、密码框，id或name属性用于自定义名称。

| 属性值   | 说明                                                  |
| -------- | ----------------------------------------------------- |
| text     | 显示单行文本输入框                                    |
| password | 显示密码输入框（*）                                   |
| radio    | 显示单选按钮                                          |
| checkbox | 显示复选按钮                                          |
| submit   | 显示提交按钮                                          |
| reset    | 显示重置按钮                                          |
| button   | 显示无动作按钮，可添加onclick事件，结合Javascript使用 |
| image    | 显示图像形式的提交按钮                                |
| file     | 显示文件上传控件，包括输入区域和浏览按钮              |
| hidden   | 隐藏输入字段                                          |
|          |                                                       |





## 列表标签< select >

用于创建单选或多选菜单，根据不同属性值可显示为下拉菜单或列表框。

| 属性名   | 属性值   | 说明                                                   |
| -------- | -------- | ------------------------------------------------------ |
| disabled | disabled | 禁用列表菜单                                           |
| multiple | multiple | 允许同时选中多项，即显示样式由默认的下拉菜单变为列表框 |
| name     | 自定义   | 列表元素名称                                           |
| size     | 数值     | 列表菜单可见选项的个数                                 |

< select >可配合若干个< option >标签形成下拉菜单。

| 属性名   | 属性值   | 说明                         |
| -------- | -------- | ---------------------------- |
| disabled | disabled | 首次加载禁用当前选项         |
| label    | 文本内容 | 取代原选项内容显示在列表中   |
| value    | 文本内容 | 提交表单发送给服务器的选项值 |
| selected | selected | 首次加载当前选项为选中状态   |

```
<select>
<option value="lion">狮子</option>
<option value="bpanda" selected>熊猫</option>
<option value="peacock">孔雀</option>
</select>
```

可使用标签定义选项组。

| 属性名   | 属性值   | 说明                   |
| -------- | -------- | ---------------------- |
| disabled | disabled | 禁用选项组中的所有选项 |
| label    | 文本内容 | 选项组的标题           |

## 按钮标签< button >

< button >可用于在网页上生成自定义样式的按钮，如果用于表单内，须规定type属性（IE与其他浏览器的默认类型不一样），可用< input >代替。

| 属性名   | 属性值              | 说明             |
| -------- | ------------------- | ---------------- |
| disabled | disabled            | 禁用当前按钮元素 |
| label    | 文本内容            | 按钮的名称       |
| value    | 文本内容            | 按钮的初始值     |
| type     | button reset submit | 按钮的类型       |

## 域标签< fieldset >、域标题标签< legend >

 可用于分组显示同一个表单中的多个表单元素，浏览器会形成边框效果凸显分组。可为每个分组的区域显示独立的标题。 

文件域——file

文件域在上传文件时常常用到，它用于查找硬盘中的文件路径，然后通过表单将选中的文件上传。在设置电子邮件的邮件、上传头像、发送文件时常常看到这一控件。

​     <input  type="file"   name="文件域的名称"   />

## 隐藏域——hidden

  隐藏域在页面中对于用户是不可见的，在表单中插入隐藏域的目的在于收集或发送信息，以便于被处理表单的程序所使用。浏览者单击“发送”按钮发送表单的时候，隐藏域的信息也被一起发送到服务器。

   <input  type="hidden"   name="隐藏域名称"   value="提交的值"   />



## 图像域——image



图像域是指可以用在“提交”按钮位置上的图片，这福图片具有按钮的功能。使用默认的按钮形式往往会让人觉得单调。如果网页使了较为丰富的色彩，或稍微复杂的设计，再使用表单默认的按钮形式甚至会破坏整体的美感。这时，可以使用图像域，创建和网页整体效果相统一的“图像提交”按钮。

## “重置”按钮——reset

  单击“重置”按钮后，可以清除表单的内容，恢复默认的表单内容设定。

  <input  type="submit"    name="按钮名"   value=“按钮的取值" />

    value  属性用来设置按钮上显示的文字

## 提交”按钮——submit

  “提交”按钮是一种特殊的按钮，不需要设置 onclick 属性，在单击该类按钮时可以实现表单内容的提交。

  语法如下：

音频

audio

- src 音频的路径   
  - 支持mp3 wav ogg格式
- controls 控件
- autoplay 自动播放 谷歌浏览器不支持
- muted 静音
- loop 循环播放

视频

video

- src 视频的路径   
  - 支持mp4、webm、ogg格式
- controls 控件
- autoplay 自动播放 在谷歌浏览器中只有配合静音属性才能自动播放
- muted 静音
- loop 循环播放
- poster 封面 视频没有加载完成时候展示的画面