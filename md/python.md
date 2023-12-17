python

## 概述

### 简介

### 使用

### 构成

#### 程序框架

- Python程序可以分解为模块、语句、表达式以及对象，如下所示：
- 程序由模块构成
- 模块包含语句语句包含表达式
- 表达式建立并出口对象

语句分为可执行和不可执行



#### 模块与包



#### 注解与空行注释

单行注解：#，开始，直到这行结束为止的所有内容都是注释。Python 解释器遇到`#`时，会忽略它后面的整行内容

多行注解

多行注释指的是一次性注释程序中多行的内容（包含一行）。

 Python 使用三个连续的单引号'''或者三个连续的双引号"""注释多行内容，具体格式如下：

```
'''使用 3 个单引号分别作为注释的开头和结尾可以一次性注释多行内容这里面的内容全部是注释内容'''
```

或者

```
纯文本复制
"""使用 3 个双引号分别作为注释的开头和结尾可以一次性注释多行内容这里面的内容全部是注释内容"""
```

注意事项

不管是多行注释还是单行注释，当注释符作为字符串的一部分出现时，就不能再将它们视为注释标记，而应该看做正常代码的一部分，例如：

```
print('''Hello,World!''')
print("""http://c.biancheng.net/cplus/""")
print("#是单行注释的开始")
```

#### 标识符与保留字

#### 常量与变量

**变量**：在程序运行过程中，值会发生变化的量

**常量**：在程序运行过程中，值不会发生变化的量

无论是变量还是常量，在创建时都会在内存中开辟一块空间，用于保存它的值。

- **Python 中的变量不需要声明类型。**

“=”这里的等号要理解并读作“赋值”，而不是“等于”，“赋值”是对变量的操作，而“等于”是对两个变量进行比较

  **python中的标识符：** 

  1）第一个字符必须是字母表中字母或下划线 **_** 。
 2）标识符的其他的部分由字母、数字和下划线组成。
 3）标识符对大小写敏感。
 4）不可以是python中的关键字，如False、True、None、class等。 

  注意：self不是python中的关键字。类中参数self也可以用其他名称命名，但是为了规范和便于读者理解，推荐使用self。

#### 输入与输出

函数

| 函数  | 作用            |
| ----- | --------------- |
| print | 将x输出到控制台 |
| type  | 查看x的变量类型 |

Python3.x 中 input() 函数接受一个标准输入数据，返回为 string 类型。

Python2.x 中 input() 相等于 eval(raw_input(prompt)) ，用来获取控制台的输入。

raw_input() 将所有输入作为字符串看待，返回字符串类型。而 input() 在对待纯数字输入时具有自己的特性，它返回所输入的数字的类型（ int, float ）。

> **注意：**input() 和 raw_input() 这两个函数均能接收 字符串 ，但  raw_input() 直接读取控制台的输入（任何类型的输入它都可以接收）。而对于 input() ，它希望能够读取一个合法的 python  表达式，即你输入字符串的时候必须使用引号将它括起来，否则它会引发一个 SyntaxError 。
>
> 除非对 input() 有特别需要，否则一般情况下我们都是推荐使用 raw_input() 来与用户交互。
>
> **注意：**python3 里 input() 默认接收到的是 str 类型。

##### 变量的输入输出

- 包含的字符串， 被称为格式化字符串
- 和不同的字符连用， 不同类型的数据需要使用不同的格式化字符

| 格式化字符串 | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| %s           | 字符串                                                       |
| %s           | 有符号十进制整数，06d表示输出的整数显示位数，不足的地方使用0补全 |
| %f           | 浮点数，%.02f表示小数点后只显示两位                          |
| %%           | 输出%                                                        |

### 0 - 占位符介绍

要实现字符串的拼接，使用占位符是的一种高效、常用的方式。

举个例子，下面是不使用占位符的一种写法，直接使用加号拼接字符串

```python
name = "Li hua"
age = 24
print("Hello "+name+", you are " + str(age) + " years old")
```

换成使用占位符的，可以写为

```python
name = "Li hua"
age = 24
print("Hello %s, you are %d years old" % (name, age))
```

其中`%s`、`%d`便是占位符，顾名思义，其作用就是替后面的变量站住这个位置，
 字符串后面的%是一个特殊的操作符，该操作符会将后面的变量值，替换掉前面字符串中的占位符。

对比两种写法，会发现使用占位符可以

- 将字符串中用到变量集中在一起，方便查找和修改
- 避免了反复使用引号，导致的引号对应识别困难
- 能够更直接通顺的看出句子的内容

实际上，占位符的优点还有很多，具体可以在下面的使用中去体会。
 目前常用的占位符写法有三种

- %
- format
- f表达式

每种方法下，占位符的写法和意思又有不同。

下面依次介绍下这三种并给出几个使用示例。

### 1 - %

其详细语法格式如下：

```
"... %[key][flags][width][.precision][length type]conversion type ..." % values
1
```

其中

```txt
%[key][flags][width][.precision][length type]conversion type
```

是该方法下，占位符详细语法的格式。

依次介绍下上面占位符每个符号每个字段的意思

- `%`: 必须要有的符号。它标记占位符的开始。
- `key`: 选填。映射的键，由带括号的字符序列组成，一般用于后面的values是是字典的场景。
- `flags`: 选填。转换标志(Conversion flags), 会影响某些转换类型的结果。
- `width`: 选填。最小字段宽度。如果指定为“*”（星号），则实际宽度从值中元组的下一个元素读取，要转换的对象位于最小字段宽度和可选精度之后。
- `precision`: 选填。精度，写法为`.precision`（点+精度）。如果指定为“*”（星号），则实际宽度从值中元组的下一个元素读取，要转换的值位于精度之后。
- `length type`: 选填。长度修改器。
- `Conversion type`: 必须要有的符号。转换类型，也标记占位符的开始。

下面依次使用一个小示例展示下上面每个字段的用法

- `Conversion type`

由于这个字段是必选字段，所以最先介绍（`%`写法是固定的，`Conversion type`则必须要选择一个转换类型）
 类型有很多，只介绍三个非常常用的，（更多的建议查阅官方文档：[printf-style-string-formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)）

| `Conversion type` | 说明                                        |
| ----------------- | ------------------------------------------- |
| `s`               | 字符串（使用`str()`方法转换任何Python对象） |
| `d`               | 十进制整数                                  |
| `f`               | 十进制浮点数(小数), 自动保留六位小数。      |

```shell
>>> "%s  %s  %s" % ("hello", 3, 3.1415)
'hello  3  3.1415'
>>> "%s  %d  %d" % ("hello", 3, 3.1415)
'hello  3  3'
>>> "%s  %d  %f" % ("hello", 3, 3.1415)
'hello  3  3.141500'
>>> "%s  %f  %f" % ("hello", 3, 3.1415)
'hello  3.000000  3.141500'
```

观察上面的示例，不难看出`s`是一个非常通用的类型，所以很多不讲究的场景，`Conversion type`我通通都用`s`。

- `precision`
   对于有小数的场景，设置精度是基本操作。
   其写法为`.precision`（点+精度）。
   不设置的话，浮点数默认精度值是6。

```shell
>>> '%f' % 3.14
'3.140000'
>>> '%.1f' % 3.14
'3.1'
>>> '%.2f' % 3.14
'3.14'
>>> '%.3f' % 3.14
'3.140'
>>> '%.4f' % 3.14
'3.1400'
```

**一般来说，`%`操作符下占位符了解到这里就够了，下面的是比较少用的生僻内容。而且也不实用，复杂的对齐操作推荐使用`format`或`f`表达式。**

- `key` （不常用）

这个选填字段是搭配字典格式的`values`使用的
 示例如下

```shell
>>> "%(name)s  %(age)s" % {"name": "Lihua", "age": 20}
'Lihua  20'
>>> "%(name)s  %(age)s" % ({"name": "Lihua", "age": 20})
'Lihua  20'
>>> "%(0)s  %(1)s" % ("Lihua", 20)
Traceback (most recent call last):
  File "<input>", line 1, in <module>
TypeError: format requires a mapping
```

- `flags` （不常用）

该类型可选择的值有：`#`、`0`、`-`、``、`+`;
 这里只介绍其中几种，（更多的建议查阅官方文档：[printf-style-string-formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)）

| `lags` | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| `0`    | 数值的转换将被零填充，需搭配`width`使用(示例见下面的`width`中的)。 |
| `-`    | 转化结果左对齐，需搭配`width`使用(示例见下面的`width`中的)， 该标志符会覆盖`0`标志符。 |
| ``     | 空格，在带符号的转换产生的正数（或空字符串）, 之前留一个空格(方便正负数最后对齐)。 |
| `+`    | 转换数字后，数字前面将会展示其正负号（“+”或“-”）, 该标志符会覆盖``标志符。 |

```shell
>>> "% d  %+d" % (1234, 1234)
' 1234  +1234'
>>> "% d  %+d" % (-1234, -1234)
'-1234  -1234'
```

## 基本数据类型

### 数值类型

### 空值、布尔型、字符型

## 字符串（字符号序列）

字符串是 Python 的基础数据类型。我们常用引号('或")来创建字符串，字符串在程序中是最常用的数据类型之一。

字符串是 Python 中最常用的数据类型。我们可以使用引号( **'** 或 **"** )来创建字符串。

# Python3 字符串

字符串是 Python 中最常用的数据类型。我们可以使用引号( **'** 或 **"** )来创建字符串。

创建字符串很简单，只要为变量分配一个值即可。例如：

```python
var1 = 'Hello World!'



var2 = "csdn"
```

## Python 访问字符串中的值

Python 不支持单字符类型，也就是没有字符只有字符串，单字符在 Python 中也是作为一个字符串使用。

Python 访问子字符串，可以使用方括号 **[]** 来截取字符串，字符串的截取的语法格式如下：

```prettyprint
变量[头下标:尾下标]
```

索引值以 **0** 为开始值，**-1** 为从末尾的开始位置。

```python
var1 = 'Hello World!'



var2 = "csdn"



 



print ("var1[0]: ", var1[0])



print ("var2[1:2]: ", var2[1:2])
```





### 定义

1. 单引号定义法
2. 双引号定义法
3. 三引号定义法（三引号定义法，和多行注释的写法一样，同样支持换行操,使用变量接收它，它就是字符串,不使用变量接收它，就可以作为多行注释使用。）

### 拼接

"+"连接字符串变量或字符串字面量

### 保留字

|       |      |        |          |        |          |
| ----- | ---- | ------ | -------- | ------ | -------- |
| and   | as   | assert | break    | class  | continue |
| def   | del  | elif   | else     | except | finally  |
| for   | from | False  | global   | if     | import   |
| in    | is   | lambda | nonlocal | not    | None     |
| or    | pass | raise  | return   | try    | True     |
| while | with | yield  |          |        |          |

### 格式化



### 精度的控制 

我们可以使用辅助符号"m.n"来控制数据的宽度和精度
m,控制宽度，要求是数字（很少使用），设置的宽度小于数字自身，不生效
n,控制小数点精度，要求是数字，会进行小数的四舍五入
示例：
%5d:表示将整数的宽度控制在5位，如数字11，被设置为5d,就会变成：【空格】[空格【空格】11，用三个空格补足宽度。
%5.2f:表示将宽度控制为5，将小数点精度设置为2
小数点和小数部分也算入宽度计算。如，对11.345设置了%7.2f后，结果是：[空格【空格】11.35.2个空格补足精度
，小数部分限制2位精度后，四舍五入为.35



f"{表达式}"
"%s\%d八%f”%(表达式、表达式、表达式)

创建字符串很简单，只要为变量分配一个值即可。例如

```prettyprint
变量[头下标:尾下标]
```

#### 索引

索引号从0开始，索引的用法，取单个元素时，使用字符串[索引值]，索引值为对应元素的索引号

正序索引和负号索引

| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| h    | e    | l    | l    | ,    | w    | o    | r    | l    | d    |
| 10   | 9    | 8    | 7    | 6    | 5    | 4    | 3    | 2    | 1    |
索引值以 0 为开始值，-1 为从末尾的开始位置



#### 切片

切片的语法：[起始:结束:步长]
 字符串[start: end: step] 这三个参数都有默认值，默认截取方向是从左往右的
 start:默认值为0；
 end : 默认值未字符串结尾元素；
 step : 默认值为1；

如果切片步长是负值，截取方向则是从右往左的

### 函数

s2=”#空字符串，长度为0
s3='·#空格字符串，长度为1

字符串的长度len（）
字符串包含的全部字符的数量

字符串的最大值max()和min()
返回字符串中Unicode编码值最大的字符

改变大小写的函数

capitalize()函数 让字符串第一个字符变成大写

upper()函数 让字符串所有字母都大写

lower()函数，让字符串所有 字母都小写

swapcase()函数，让字符串中的大写变小写，小写变大写。

title()函数，让字符串的大小写符合头衔的要求



## 程序控制结构

### python程序设计基础

#### 程序和程序设计

#### 算法及其描述

#### IPO程序编写方法

#### 程序的基本结构

### 顺序结构

### 分支结构

### 循环结构

if

在Python中，if语句就是用来进行判断的，格式如下：
if 要判断的条件：
	条件成立时要做的事情
注意：代码的缩进为一个tab键，或者4个空格--建议使用空格
,在Python开发中tab和空格不要混用



if else

if要判断的条件：
	条件成立时，要做的事情
else:
	条件不成立时，要做的事情

if和else语句以及各自的缩进部分共同是一个完整的代码块，无法单独使用



### if嵌套



### for循环

for	临时变量	in	待处理数据集
	循环满足条件时执行的代码

```python
for  <变量>   in   <循环序列>:
        【循环体】
```

语法中的：待处理数据集，严格来说，称之为：序列类型
序列类型指，其内容可以一个个依次取出的一种类型，包括：
字符串
列表
元组

```python3
# for 循环访问列表
list = ['woodman', 'Alan', 'Bobo']
for name in list:
    print(name)
```

**注意:**  name 这个变量是在 for 循环中定义的，意思是，依次取出 list 中的每一个元素，并把元素赋值给 name，然后执行for循环体。

#### 访问字典

```python
dict = {'woodman': 98, 'Alan': 89, 'Bobo': 56}
for key, value in dict.items():
    print(key, value)
```

#### 访问字符串

```python
# for 循环访问字符串，可以依次读取每个字符
for char in 'woodman木头人':
    print(char)
```

#### 嵌套循环

```python
for <外层循环变量> in <外层循环序列>:
     for <内层循环变量> in <内层循环序列>:
         【内层循环体】
     【外层循环体】 
```



##### range()



获取一个从0开始，到num结束的数字序列（不含num本身）
如range（5）取得的数据是：[0，1，2，3，4]

###### 语法2：

range(numl，num2）
获得一个从num1开始，到num2结束的数字序列（不含num2本身）
如，range（5，10）取得的数据是：[5，6，7，8，9]

###### 语法3：

range(numl，num2，step）
获得一个从num1开始，到num2结束的数字序列（不含num2本身）
数字之间的步长，以step为准（step默认为1）
如，range（5，10，2）取得的数据是：[5，7，9]

##### pass

###### 作用

- 空语句，do nothing
- 保证格式完整
- 保证语义完整

以if语句为例，当没有执行逻辑时，在c或c++/java中这样写：

```c
if(true)
;         //do nothing
else
{
          //do something
}
```

```python
if true:
    pass  # do nothing
else:
          # do something
```

当编写一个程序时，你还没有完成执行语句部分的思路，这时你可以用pass语句来占位，也可以当做是一个标记，是过后来完成的代码。比如下面这样：

```python
def iplaypython():
    pass
```

定义一个函数iplaypython，但函数体部分暂时还没有完成，又不能空着不写内容，因此可以用pass来占个位置

### pass语句在循环中的作用

pass也常用于为复合语句编写一个空的主体。比如你想要一个while语句无限次循环，每次迭代时不需要任何操作，你可以这样写：

```python
while True:
    pass
```

以上只是举个例子，现实中最好不要写这样的代码，因为执行代码块为pass，就是什么也不做，这时python会进入死循环。

#### for in 循环

### 逻辑运算

## 格式化

### 输出

1. print()函数直接输出

2. 定义变量输出

3. 分隔符sep使用

4. 结束符end使用

5. 输出格式控制

   > **%s  字符串 (采用str()的显示)**
   >
   > **%r  字符串 (采用repr()的显示)**
   >
   > **%c  单个字符**
   >
   > **%b  二进制整数**
   >
   > **%d  十进制整数**
   >
   > **%i  十进制整数**
   >
   > **%o  八进制整数**
   >
   > **%x  十六进制整数**
   >
   > **%e  指数 (基底写为e)**
   >
   > **%E  指数 (基底写为E)**
   >
   > **%f  浮点数**
   >
   > **%F  浮点数，与上相同**
   >
   > **%g  指数(e)或浮点数 (根据显示长度)**
   >
   > **%G  指数(E)或浮点数 (根据显示长度)**
   >
   > **%%  字符"%"，显示百分号%**

6. 

### 输入

1. input函数字符串
2. 数字因为`input()`函数默认输入的时候，默认为输入的类型为[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)，所以需要输入数字的时候，需要操作一下下
3. 一行中输入多个数字：
    一行中输入三个整数，每个数字用空格隔开

## 容器级

### Python中的数据容器：

一种可以容纳多份数据的数据类型，容纳的每一份数据称之为1个元素
每一个元素，可以是任意类型的数据，如字符串、数字、布尔等。

数据容器可以从以下视角进行简单的分类：
是否支持下标索引
支持：列表、元组、字符串一序列类型
不支持：集合、字典一非序列类型
是否支持重复元素：
支持：列表、元组、字符串一序列类型
不支持：集合、字典一非序列类型
是否可以修改
支持：列表、集合、字典
不支持：元组、字符串

### 列表
序列是Python中最基本的数据结构。序列中的每个元素都分配一个数字 - 它的位置，或索引，第一个索引是0，第二个索引是1，依此类推。

Python有6个序列的内置类型，但最常见的是列表和元组。

序列都可以进行的操作包括索引，切片，加，乘，检查成员。

此外，Python已经内置确定序列的长度以及确定最大和最小的元素的方法。
列表是最常用的Python数据类型，它可以作为一个方括号内的逗号分隔值出现。

列表的数据项不需要具有相同的类型
创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。如下所示：
"",'',","

正向从0开始，反向从-1开始

嵌套列表的查询

列表的每一个元素都有编号称之为下标索引
从前向后的方向，编号从0开始递增
从后向前的方向，编号从-1开始递减

### 特点

可以容纳多个元素 
可以容纳不同类型的元素（混装）
数据是有序存储的（有下标序号）
允许重复数据存在
可以修改（增加或删除元素等）

### 操作

#### 创建

只要把逗号分隔的不同的数据项使用方括号括起来即可

#### 查询：index

```python
#检索列表中的所有元素print( nums.index(2) )
#Index还可以在某个范围内进行查找，代码如下：

name1 = ['python', 'java', 'php', 'MySql', 'C++', 'C', 'php', 'C#']
print(name1.index('php', 1, 4))
print(name1.index('php', 4, 6))
```

修改：列表[下标]=值

添加：

插入：

append

```
#方式一：向list结尾添加 参数object
```

```
#方式二：插入一个元素 参数一：index位置 参数二：object
```

extend追加多个数据

```python
 #方式三：扩展列表，参数：iterable参数
    y=[1,2,3]
 x.extend(y)
```

```
使用extend()方法来添加多个序列数据。
```

通过insert()插入数据

```python
list1.insert(1, "world")
print(list1)
```

使用insert()方法，把元素通过index插入到指定位置。



#### 删除

remove

```
#删除方式一：参数object 如有重复元素，只会删除最靠前的
```

```python
 1 List.remove()   #删除方式一：参数object 如有重复元素，只会删除最靠前的
 2 >>> a=[1,2,3]
 3 >>> a.remove(2)
 4 >>> print(a)
 5 [1, 3]
```

pop

```
#删除方式二：pop 可选参数index删除指定位置的元素 默认为最后一个元素
```

```python
 7 List.pop()   #删除方式二：pop 可选参数index删除指定位置的元素 默认为最后一个元素
 8 >>> a=[1, 2, 3, 4, 5, 6]
 9 >>> a.pop()
10 6
11 >>> print(a)
12 [1, 2, 3, 4, 5]
```

del

```
#删除方式三：可以删除整个列表或指定元素或者列表切片，list删除后无法访问。
```

del 列表[下标]

```python
15 del List #删除方式三：可以删除整个列表或指定元素或者列表切片，list删除后无法访问。
16 >>> a=[1, 2, 3, 4, 5, 6]
17 >>> del a[5]
18 >>> print(a)
19 [1, 2, 3, 4, 5]
20 >>> del a
21 >>> print(a)
22 Traceback (most recent call last):
23   File "<pyshell#93>", line 1, in <module>
24     print(a)
# 下述两种方法都可以：
# del list[index]
del list1[-1]
print(list1)

# del(list[index])
del(list1[-1])
print(list1)

```

clear

列表.clear

清空列表

```python
list1.clear()
print(list1)

```





#### 排序

```
reverse（反序）
```
```python
 1 List.reverse()
 2 >>> a=[1, 2, 3, 4, 5, 6]
 3 >>> a.reverse()
 4 >>> print(a)
 5 [6, 5, 4, 3, 2, 1]
 6 
```

```

sort() #sort有三个默认参数 cmp=None,key=None,reverse=False 因此可以制定排序参数
```

统计

count=len()

```python
name1 = ['python', 'java', 'php', 'MySql', 'C++', 'php', 'C', 'php', 'C#']
print(name1.count('php'))
```

### 遍历列表

```python
1 for i in List:
2     print i,
```

| 编号 | 使用方式                | 作用                                         |
| ---- | ----------------------- | -------------------------------------------- |
| 1    | 列表.append（元素）     | 向列表中追加一个元素                         |
| 2    | 列表.extend（容器）     | 将数据容器的内容依次取出，追加到列表尾部     |
| 3    | 列表.insert(下标，元素) | 在指定下标处，插入指定的元素                 |
| 4    | del.列表[下标]          | 削除列表指定下标元素                         |
| 5    | 列表.pop（下标)         | 剧除列表指定下标元素                         |
| 6    | 列表.remove（元素）     | 前向后，别除此元素第一个匹配项               |
| 7    | 列表.clear()            | 清空列表                                     |
| 8    | 列表.count（元素）      | 统计此元素在列表中出现的次数                 |
| 9    | 列表.index（元素）      | 查找指定元素在列表的下标找不到报错ValueError |
| 10   | len（列表               | 统计容器内有多少元素                         |



#### 循环

```python
for i in service:
	print(i)   
```

#### 访问

```python
List = [1, 2, 3, 4, 5, 6, 7 ]
print(List[3])
```



#### 切片

- 第一个数字表示切片的**开始位置**，默认为0；

- 第二个数字表示切片的**终止位置**（但不包含该位置的元素），默认为列表的长度；

- 第三个数字为切片的**步长**，默认为1，当省略步长时，可以同时省略后一个冒号。

- ```
  print(service[1:])   ##打印第一个元素之后的内容
  print(service[:-1])  ##打印最后一个元素之前的内容
  print(service[::-1])  ##倒序输出
  ```

lie = [3, 4, 6, 7, 2, 10, 16]
print(lie[:])  # 取全部元素
print(lie[0:])  # 取全部元素

print(lie[:-1])  # 取 除最后一个元素外的所有元素

print(lie[2:5])  # 取序号为2、3、4的元素，不包含最后一个序号的元素

print(lie[::2])  # 从0开始隔一个取一个元素

print(lie[1:5:2])  # 从1开始，每隔一个取一个元素，直到5为止

print(lie[::-1])  # 从右向左取全部成员

print(lie[5:0:-2])  # 从右向左隔一个取一个元素，不包含0

range函数

```
range(start, stop, step)
```

start：表示从返回序列的起始编号，默认情况下从0开始

stop：表示生成最多但不包括此数字的数字

step：指的是序列中每个数字之间的差异，默认值为1

##### 多重索引

#### 连接

```python
service1 = ['nfs','samba']
service = ['nfs','samba']
print(service + service1)
```

#### 判断



### 嵌套列表

### 函数

```python
cmp(list1, list2)：比较两个列表的元素
len(list)：列表元素个数
max(list)：返回列表元素最大值
min(list)：返回列表元素最小值
list(seq)：将元组转换为列表
```

### 方法

```python
list.append(obj)：在列表末尾添加新的对象
list.count(obj)：统计某个元素在列表中出现的次数
list.extend(seq)：在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
list.index(obj)：从列表中找出某个值第一个匹配项的索引位置
list.insert(index, obj)：将对象插入列表
list.pop(obj=list[-1])：移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
list.remove(obj)：移除列表中某个值的第一个匹配项
list.reverse()：反向列表中元素
list.sort( key=None, reverse=False)：对原列表进行排序
list.clear()：清空列表
list.copy()：复制列表
```



### 元组

#### 定义

元组定义：定义元组使用小括号，且使用起号隔开各个数据，数据可以是不同的数据类型。

#定义元组字面量
(元素，元素，·····，元素)

#定义元组变量
变量名称=(元素，元素，，元素)

#定义空元组
变量名称=()				#方式1
变量名称=tuple()		#方式2

#### 嵌套

#### 方法

| 编号 | 方法        | 作用                                               |
| ---- | ----------- | -------------------------------------------------- |
| 1    | index（）   | 查找某个数据，如果数据存在返回对应的下标，否则报错 |
| 2    | count（）   | 统计某个数据在当前元组出现的次数                   |
| 3    | len（元组） | 统计元组内的元素个数                               |

#### 元组的注意事项：

不可修改内容(可以修改内部list的内部元素)

#### 元组的特点：

和list基本相同(有序、任意数量元素、允许重复元素)，唯一不同在于不可修改。
支持for循环

### 字典

#### 简介

**字典(Dictionary)是Python提供的一种常用的数据结构，由键（key）和值（value）成对组成，键和值中间以冒号：隔开，项之间用逗号隔开，整个字典由大括号{}括起来**。无序的序列

字典是“键-值”对的无序可变序列，字典中的每个元素可以分为两部分，“键”和“值”。定义字典时，每个元素的“键”和“值”用冒号分隔，相邻元素之间用逗号分隔，所有元素放在一对大括号”{“和”}“中。字典中的“键”可以是Python中任意不可变数据，例如整数，实数，复数，字符串，元组等等，但不能使用列表、集合、字典作为字典的“键”，因为这些对象是可变的。另外，字典中的“键”不允许重复，而值是可以重复的

特点：

字典是Python语言中唯一的映射类型。

映射类型对象里[哈希](https://so.csdn.net/so/search?q=哈希&spm=1001.2101.3001.7020)值(键，key)和指向的对象(值，value)是一对多的的关系，通常被认为是可变的哈希表。

字典对象是可变的，它是一个容器类型，能存储任意个数的Python对象，其中也可包括其他容器类型。

字典类型与序列类型的区别：

1.存取和访问数据的方式不同。

2.序列类型只用数字类型的键(从序列的开始按数值顺序索引)；

3.映射类型可以用其他对象类型作键(如：数字、字符串、元祖，一般用字符串作键)，和序列类型的键不同，映射类型的键直4.接或间接地和存储数据值相关联。

5.映射类型中的数据是无序排列的。这和序列类型是不一样的，序列类型是以数值序排列的。

6.映射类型用键直接“映射”到值。

字典是Python中最强大的数据类型之一。



1、键与值用冒号“：”分开；

2、项与项用逗号“，”分开；

3、字典中的键必须是唯一的，而值可以不唯一。

#### 创建

空字典

```python
dic = {}
```

直接赋值创建(花括号创建)

```
dic = {'spam':1, 'egg':2, 'bar':3}
```

通过关键字dict和关键字参数创建

```python
dic = dict(spam = 1, egg = 2, bar =3)
Python 字典 dict() 函数用于创建一个新的字典。

创建空字典
dic= dict() 
print(dic)
dict1 = dict({'three': 3, 'four': 4})  # 传一个字典
print('dict1:', dict1)
 
dict2 = dict(five=5, six=6)  # 传关键字
print('dict2:', dict2)
 
dict3 = dict([('seven', 7), ('eight', 8)])  # 传一个包含一个或多个元祖的列表
print('dict3:', dict3)
 
dict5 = dict(zip(['eleven', 'twelve'], [11, 12]))  # 传一个zip()函数
print('dict5:', dict5)
zip在python3中，处于优化内存的考虑，只能访问一次！！！(python2中可以访问多次)
zip()函数的定义：从参数中的多个迭代器取元素组合成一个新的迭代器；
返回： 返回一个zip对象，其内部元素为元组；可以转化为列表或元组；
传入参数： 元组、列表、字典等迭代器。

当zip()函数中只有一个参数时，zip(iterable)从iterable中依次取一个元组，组成一个元组。 

当zip()函数有两个参数时:zip(a,b)zip()函数分别从a和b依次各取出一个元素组成元组，再将依次组成的元组组合成一个新的迭代器–新的zip类型数据。
注意：要求a与b的维数相同，当两者具有相同的行数与列数时，正常组合对应位置元素即可；
当a与b的行数或列数不同时，取两者结构中最小的行数和列数，依照最小的行数和列数将
对应位置的元素进行组合；这时相当于调用itertools.zip_longest(*iterables)函数。 
```

通过二元组列表创建

```python
list = [('spam', 1), ('egg', 2), ('bar', 3)]
dic = dict(list)
print(dic)
```

通过字典推导式创建

```python
dic = {i:2*i for i in range(3)}
print(dic)
```

通过dict.fromkeys()创建

```python
通常用来初始化字典, 设置value的默认值
dic = dict.fromkeys(range(3), 'x')
print(dic)

```

将 “'键'='值'”作为dict()的参数来创建字典。

```python
a_dict=dict(name='DYX' ,  age=24)  #键=值对
print(a_dict)  #{'age': 24, 'name': 'DYX'}

```

还可以利用dict.fromkeys()方法，给定“键”序列，创建“值”为空的字典。

```python

a_dict=dict.fromkeys( ['name','age','sex'] )
print(a_dict)  #{'sex': None, 'name': None, 'age': None}
#“键”是给出的序列中的元素，“值”为空。

```





#### 访问

```python
与列表类似，可以使用下标的方式来访问字典中的元素，但不同的是字典的下标是字典的“键”，而列表和元组访问时下标必须为整数值。使用下标的方式访问字典“值”时，若指定的键不存在则抛出异常。
dict = {1: 1, 2: 'aa', 'D': 'ee', 'Ty': 45}
print(dict['D'])

输出：
ee
```

get方法

```python
使用字典对象的get()方法可以获取指定”键“对应的”值”，并且可以在指定“键“不存在的时候返回指定值，如果不指定，则默认返回None。相对于上文的方法，该方法更安全。

即:下标方法，在指定键不存在的情况下会抛出异常，而get()方法会返回指定值，或者是None。
dict_n.get(key, default = None)


a_dict = {'name':'DYX', 'sex':'male', 'age':24}
print(a_dict.get('ranking'))   #None  指定的键ranking不存在返回None
print(a_dict.get('ranking','No entry'))  #No entry  指定的键不存在，返回指定的内容No entry

```

- key: 要设置默认值的Key
- default: 要返回key的值，可以是任何值，如整形、字符串、列表、字典等
- return: 如果字典中key本来有值，那么返回的是字典中Key所对应的值，如果没有，那么返回“default”中的值。

```python
dict = {1: 1, 2: 'aa', 'D': 'ee', 'Ty': 45}
print(dict.get(2))
print(dict.get(3))
print(dict.get(4, ['字典中不存在键为4的元素']))

输出：
aa
None
['字典中不存在键为4的元素']
```



还可以使用keys()和values()方法获取字典的键和值列表：

```python
keys()方法返回“键”
```

```python
dict = {1: 1, 2: 'aa', 'D': 'ee', 'Ty': 45}
for key in dict.keys():
    print(key)
for value in dict.values():
    print(value)

输出：
1
2
D
Ty
1
aa
ee
45



a_dict = {'name':'DYX', 'sex':'male', 'age':24}
print(a_dict.keys())    #输出字典的键 dict_keys(['name', 'age', 'sex'])
print(type(a_dict.keys())) #查看一下类型 <class 'dict_keys'>
print(list(a_dict.keys()))  #['age', 'name', 'sex']
 
#可以用循环的方式输出
for key in a_dict.keys():
    print(key, end = " ")  #name sex age


```

values()方法返回“值”

```python

a_dict = {'name':'DYX', 'sex':'male', 'age':24}
print(a_dict.values())    #输出字典的值 dict_values(['male', 'DYX', 24])
print(type(a_dict.values())) #查看一下类型 <class 'dict_values'>
print(list(a_dict.values()))  #['male', 'DYX', 24]
#这里也可以体现字典的无序性。
 
for key in a_dict.values():
    print(key, end = " ")  #male DYX 24 

```

 items()方法返回“键-值”对

```python


a_dict = {'name':'DYX', 'sex':'male', 'age':24}
print(a_dict.items())  #dict_items([('age', 24), ('name', 'DYX'), ('sex', 'male')])
print(type(a_dict.items()))  #<class 'dict_items'>
 
#通常用遍历来做
for item in a_dict.items():
    print(item, end = " ")  #('sex', 'male') ('name', 'DYX') ('age', 24)
#查看一下item的类型
print("\n",type(item))  # <class 'tuple'> 元组类型
也可以这样迭代输出


a_dict = {'name':'DYX', 'sex':'male', 'age':24}
for key,values in a_dict.items():
    print(key,values) #单纯遍历输出两个值，所以不是元组形式
#age 24
#sex male
#name DYX
如果直接对字典进行遍历，只能遍历出“键”。

a_dict = {'name':'DYX', 'sex':'male', 'age':24}
for item in a_dict:    #默认是遍历“键”
    print(item, end = " ")  #name age sex
3 字典元素的添加与修改
```

### 字典元素的添加与修改



## 下标方式添加和修改

将“键”作为下标时，如果存在这个键，那么修改该键对应的值，如果该键不存在，则添加一个新的“键-值”对。

```



```



### 字符串

#### 操作符

| **操作符** | **描述**                                                     | **实例**                     |
| ---------- | ------------------------------------------------------------ | ---------------------------- |
| +          | 字符串连接(也称为拼接)                                       | a + b 输出结果： HelloPython |
| *          | 重复输出字符串                                               | a*2 输出结果：HelloHello     |
| []         | 通过索引获取字符串中字符                                     | a[1] 输出结果 **e**          |
| [ : ]      | 截取字符串中的一部分，遵循**左闭右开**原则，str[0:2] 是不包含第 3 个字符的。 | a[1:4] 输出结果 ell          |
| in         | 成员运算符 - 如果字符串中包含给定的字符返回 True             | 'H' in a 输出结果 True       |
| not in     | 成员运算符 - 如果字符串中不包含给定的字符返回 True           | 'M' not in a 输出结果 True   |

#### 嵌套

#### 注意

键值对的Key和Value可以是任意类型(Key不可为字典)
字典内Ky不允许重复，重复添加等同于覆盖原有数据
字典不可用下标索引，而是通过Key检索Value

#### 操作

##### 增加

字典[key]=[value]	字典被修改，新增了元素

##### 更新

字典[key]=value	字典被修改，元素被修改

字典Key不可以重复，所以对已存在的Key执行上述操作，就是更新Value值

##### 删除

pop	记住删除元素和分数

clear

##### 获取

##### 遍历

- 关键字keys
- z

##### 统计

### 集合

#### 操作

##### 初始化

用「set()」操作初始化一个空集。

请牢记，花括号只能用于初始化包含值的集合

##### 添加

add方法

注意：你只能将不可变的值（例如一个字符串或一个元组）加入到集合中。举例而言，如果你试图将一个列表（list）添加到集合中，系统会返回类型错误「TyprError」

##### 删除

remove

discard

pop从集合中删除并且返回一个任意的值,如果集合是空的，该方法会返回一个「KeyError」

claer

#### 迭代

#### 排序

#### 运算

| 运算操作 | Python运算符 | 含义                              | 例子             |
| -------- | ------------ | --------------------------------- | ---------------- |
| 交集     | &            | 取两集合公共的元素                | >>> set1 & set2  |
| 并集     | \|           | 取两集合全部的元素                | >>> set1 \| set2 |
| 差集     | -            | 取一个集合中另一集合没有的元素    | >>> set1 - set2  |
| 对称差集 | ^            | 取集合 A 和 B 中不属于 A&B 的元素 | >>> set1 ^ set2  |

### 特点

- 可以容纳多个数据
- 可以容纳不同类型的数据（混装）
- 数据是无序存储的（不支持下标索引）
- 不允许重复数据存在
- 可以修改（增加或删除元素等）
- 支持for循环

## 函数

### 介绍

函数：是组织好的，可重复使用的，用来实现特定功能的代码段。函数就是执行特定任和以完成特定功能的一段代码

def：（比喻为老板说有一项新工作）是定义函数的关键词；

函数名：（比喻为工作名是年报）自定义的函数名，函数定义好后，输入函数名即可快速调用函数；

(参数)：（比喻为年报所需的数据源）【()】圆括号中用于定义函数可应用的参数， 多个参数之间用逗号（,）分隔 ，参数可以为空，【()】圆括号不可以省略，且后面必须以【:】冒号结尾；

函数的说明文档：是函数的使用说明，本质就是一段字符串，函数的说明文档通常位于函数内部、所有代码的最前面。 可以通过调用 Python 的 help() 内置函数或者【_doc_ 】属性查看某个函数的使用说明文档 ；

执行语句模块：（比喻为制作年报的过程）是调用自定义函数时要执行的命令，模块前面要缩进四个字符或一个【tab】，可以没有执行语句模块；

【return】+【 返回值】：（比喻为完成年报，并以指定形式给到老板）作用一、用于查看函数是否运行完成；作用二、定义函数执行了一堆命令后最终需要输出的结果。完成return语句代表函数执行结束，函数不执行return语句后的操作。一个函数中只会有一条return语句被执行。return前面要缩进四个字符或一个【tab】；

【 返回值】：是函数执行了一堆命令后最终需要输出的结果。不写【return】或不定义【返回值】时，函数最终结果输出为默认值【None】；设置指定的返回值，函数最终输出指定返回值，返回值可以返回多个对象，对象间用【,】分隔。

### 定义

基本结构:

```python
def 函数名([输入参数幻]):
函数体
[return xxx]

def 函数名 (参数):
   '函数的说明文档'
执行语句模块
   【return】+【 返回值】
```
## **二、定义函数**

### **1.定义空函数**

Python 语言允许定义一个没有任何功能的空函数，可以使用 【pass 语句】作为占位符定义空函数，但空函数本身并没有实际意义。

```python
def empty ():
   pass
```

### **2.定义单一变量函数**

### **（1）定义函数**

```python
# 代码
# 函数1：不写【return】
def add (num):
   "函数名：add，参数为变量num，当调用add函数时，执行【a=num+1】和【print(a)】两个命令"
   a=num+1
   print(a)
# 代码
# 函数2：完整的单一变量函数
def add_1 (num):
   "函数名：add，参数为变量num，当调用add函数时，执行【a=num+1】和【print(a)】两个命令,最终输出函数结果num+1"
   a=num+1
   print(a)
   return num+1
# 代码
# 函数3：不写执行语句模块
def add_2 (num):
   "函数名：add，参数为变量num，当调用add函数时，最终输出函数结果num+1"
   return num+1
```



### 特点

复用代码
隐藏实现细节
提高可维护性
提高可读性便于调试

### 参数

#### 有参数，无返回值

#### 有参数，有返回值

#### 缺省参数

缺省参数
缺省参数：缺省参数也叫默认参数，用于定义函数，为参数提供默认值，调用函数时可不传该默认参数的值（注意：所有位置参数必须出现在默认参数前，包括函数定义和调用）
作用：当调用函数时没有传递参数，就会使用默认是用缺省参数对应的值

不定长参数

### 匿名函数

#### 定义

匿名函数就是不需要显式的指定函数名。

#### 特点

关键字`lambda`表示匿名函数，冒号前面的`n`表示函数参数，可以有多个参数。

匿名函数有个限制，就是只能有一个表达式，不用写`return`，返回值就是该表达式的结果。

用匿名函数有个好处，因为函数没有名字，不必担心函数名冲突。此外，匿名函数也是一个函数对象，也可以把匿名函数赋值给一个变量，再利用变量来调用该函数：

有些函数在代码中只用一次，而且函数体比较简单，使用匿名函数可以减少代码量，看起来比较"优雅“

## 文件

### 理解

```
文件是数据的抽象和集合，是数据存储的一种形式。一篇文章、一段视频、一个可执行程序，都可以被保存为一个文件，并赋予一个文件名。
文件的上级是文件夹。
文件是存储在辅助存储器上的数据序列。
文件是系统存储区域的一个命名位置，用来存储一些信息，便于后续访问。
ython中有几个内置模块和方法来处理文件。这些方法被分割到例如os, os.path , shutil 和 pathlib 等等几个模块中。文章将列举Python中对文件最常用的操作和方法。

在这篇文章中，你将学习如何：

    获取文件属性创建目录文件名模式匹配遍历目录树创建临时文件和目录删除文件和目录复制、移动和重命名文件和目录创建和解压ZIP和TAR档案使用fileinput 模块打开多个文件

Python中文件数据的读和写

使用Python对文件进行读和写是十分简单的。为此，你首先必须使用合适的模式打开文件。这里有一个如何打开文本文件并读取其内容的例子。
```

### 分类

文本文件和二进制文件

文本文件和二进制文件只是文件的展示方式。

**本质上，所有文件都是以二进制0，1形式存储的，有统一编码的我们叫它文本文件，没统一编码的我们叫它二进制文件，但无论什么类型的文件，它都可以以二进制方式打开。**

#### 3）文本文件

- 文本文件是**由单一特定编码**组成的文件，如UTF-8编码。
- 由于存在编码，文本文件也被看成是存储着的长字符串。
- 适用于：.txt文件、.py文件

#### 4）二进制文件

- 直接由比特0和1组成，**没有统一字符编码**
- 一般都存在二进制0和1的组织结构，即文件格式
- 适用于：.png文件、.avi文件

#### 5）文本文件&二进制文件

​     例如，对于一个字符串“中国是个伟大的国家”

- 当我们用文本形式理解他时，这个字符串使用了**统一的编码**，我们是用UTF-8编码去理解它，**输出是一段汉字**。
- 如果我们用二进制方式理解这段文本，它返回的是**一串由二进制构成的字符串**，简单说返回的是“中国是个伟大的国家”对应的存储形态的二进制形式。
- 对于人来使用时，文本形式可以给帮助我们更好的理解信息，二进制形式是最原始的存储形式。

**文本文件**：**基于字符编码**，存储的是普通字符串，不包括字体、字号、样式、颜色等信息，可通过文本编辑器显示和编辑，例如**txt****文件**；

**二进制文件**：**基于值编码的，以字节形式存储**，其编码长度根据值的大小长度可变。通常在文件的头部相关属性中定义表示值的编码长度。例如**视频**、**音频**等。

## Python中文件数据的读和写

### 操作

⽂件操作的作⽤就是把⼀些内容(数据)存储存放起来，可以让程序下⼀次执⾏的时候直接使⽤，⽽不必重新制作⼀份，省时省⼒

#### 2.1文件的操作步骤

1. 打开⽂件，使用**open()****函数**打开（或建立）文件，**返回一个file对象**；
2. 读写等操作，使用**file****对象的读/写方法**对文件进行读/写的操作；
3. 关闭⽂件，用**file****对象的close()方法关闭文件**。

注意：可以只打开和关闭⽂件，不进⾏任何读写操作

##### 2.1.1打开文件

在python，使⽤open函数，可以打开⼀个已经存在的⽂件，或者创建⼀个新⽂件

语法：open(name, mode)
解释：
**name：**是要打开的⽬标⽂件名的字符串(可以包含⽂件所在的具体路径)。
**mode：**设置打开⽂件的模式(访问模式)：只读、写⼊、追加等

file参数：用于指定文件路径，如果只有文件名，则表示在当前文件夹下。以d:\test.txt（D盘下test.txt文件）为例，文件路径中包含特殊字符“\”，为了避免歧义，通常有三种写法：

（1）r'd:\test.txt'；（2）'d:\\test.txt'；（3）'d:/test.txt'。

mode的分类：

| mode类型 | 说明（标黄的mode重点关注）                                   |
| -------- | ------------------------------------------------------------ |
| r        | 以只读⽅式打开⽂件。⽂件的指针将会放在⽂件的开头。这是默认模式。 |
| rb       | 以⼆进制格式打开⼀个⽂件⽤于只读。⽂件指针将会放在⽂件的开头。这是默认模式。 |
| r+       | 打开⼀个⽂件⽤于读写。⽂件指针将会放在⽂件的开头。           |
| rb+      | 以⼆进制格式打开⼀个⽂件⽤于读写。⽂件指针将会放在⽂件的开头。 |
| w        | 打开⼀个⽂件只⽤于写⼊。如果该⽂件已存在则打开⽂件，并从开头开始编辑，即原有内容会被删除。如果该⽂件不存在，创建新⽂件。 |
| wb       | 以⼆进制格式打开⼀个⽂件只⽤于写⼊。如果该⽂件已存在则打开⽂件，并从开头开始编辑，即原有内容会被删除。如果该⽂件不存在，创建新⽂件。 |
| w+       | 打开⼀个⽂件⽤于读写。如果该⽂件已存在则打开⽂件，并从开头开始编辑，即原有内容会被删除。如果该⽂件不存在，创建新⽂件。 |
| wb+      | 以⼆进制格式打开⼀个⽂件⽤于读写。如果该⽂件已存在则打开⽂件，并从开头开始编辑，即原有内容会被删除。如果该⽂件不存在，创建新⽂件。 |
| a        | 打开⼀个⽂件⽤于追加。如果该⽂件已存在，⽂件指针将会放在⽂件的结尾。也就是说，新的内容将会被写⼊到已有内容之后。如果该⽂件不存在，创建新⽂件进⾏写⼊。 |
| ab       | 以⼆进制格式打开⼀个⽂件⽤于追加。如果该⽂件已存在，⽂件指针将会放在⽂件的结尾。也就是说，新的内容将会被写⼊到已有内容之后。如果该⽂件不存在，创建新⽂件进⾏写⼊。 |
| a+       | 打开⼀个⽂件⽤于读写。如果该⽂件已存在，⽂件指针将会放在⽂件的结尾。⽂件打开时会是追加模式。如果该⽂件不存在，创建新⽂件⽤于读写。 |
| ab+      | 以⼆进制格式打开⼀个⽂件⽤于追加。如果该⽂件已存在，⽂件指针将会放在⽂件的结尾。如果该⽂件不存在，创建新⽂件⽤于读写 |

特别注意“r+”和“w+”之间的区别，**二者都可以读和写**。**“r+”打开文件时，不会删除原有文件内容**，写入时，如果原有位置有内容，则进行覆盖；而**“w+”打开文件时，会先删除原有文件内容**。

注意事项：
 \1. w 和 a 模式：如果⽂件不存在则创建该⽂件；如果⽂件存在， w 模式先清空再写⼊， a 模式直接末尾追加。
 \2. r 模式：如果⽂件不存在则报错

读取数据例子

```python
f=open('D:\\python文档\\test.txt','w',encoding='UTF-8')
#打开文
f.write('hello wrld')
#对文件执行写操作
f.close()
创建文件进行写操作

然后打开进行读操作
f=open('D:\\python文档\\test.txt')
con=f.read()
print(con)
f.close#此时必须加这个关闭文件的命令
（read文件的读操作）
语法：⽂件对象.read(num)
注意事项： num表示要从⽂件中读取的数据的⻓度（单位是字节），如果没有传⼊num，那么就表示读取⽂件中所有的数据


示例：（readlines()解释：readlines可以按照⾏的⽅式把整个⽂件中的内容进⾏⼀次性读取，并且返回的是⼀个列表，其中每⼀⾏
的数据为⼀个元素）

（readline()一次读取一行数据）
f = open('D:\\python文档\\test.txt')
content = f.readlines()
print(content)#此时返回的是一个列表，一个数据为文件中的一行数据
# 关闭⽂件
f.close()
```

```python
with open('data.txt', 'r') as f:
    data = f.read()
    print('context: {}'.format(data))
```

`open()` 接收一个文件名和一个模式作为它的参数，`r` 表示以只读模式打开文件。想要往文件中写数据的话，则用`w` 作为参数。

```python
with open('data.txt', 'w') as f:
    data = 'some data to be written to the file'
    f.write(data)
```



## 获取目录列表

假设你当前的工作目录有一个叫 `my_directory` 的子目录，该目录包含如下内容：

```text
├── file1.py
├── file2.csv
├── file3.txt
├── sub_dir
│   ├── bar.py
│   └── foo.py
├── sub_dir_b
│   └── file4.txt
└── sub_dir_c
    ├── config.py
    └── file5.txt
```

Python内置的 `os` 模块有很多有用的方法能被用来列出目录内容和过滤结果。为了获取文件系统中特定目录的所有文件和文件夹列表，可以在遗留版本的Python中使用 `os.listdir()` 或 在Python 3.x 中使用 `os.scandir()` 。 如果你还想获取文件和目录属性(如文件大小和修改日期)，那么 `os.scandir()` 则是首选的方法。

## 使用遗留版本的Python获取目录列表

```python
import os
entries = os.listdir('my_directory')
```

`os.listdir()` 返回一个Python列表，其中包含path参数所指目录的文件和子目录的名称。

```python
['file1.py', 'file2.csv', 'file3.txt', 'sub_dir', 'sub_dir_b', 'sub_dir_c']
```

目录列表现在看上去不容易阅读，对 `os.listdir()` 的调用结果使用循环打印有助于查看。

```python
for entry in entries:
    print(entry)

"""
file1.py
file2.csv
file3.txt
sub_dir
sub_dir_b
sub_dir_c
"""
```

## 使用现代版本的Python获取目录列表

在现代Python版本中，可以使用 `os.scandir()` 和 `pathlib.Path` 来替代 `os.listdir()` 。

`os.scandir()` 在Python 3.5 中被引用，其文档为 [PEP 471](https://www.python.org/dev/peps/pep-0471/) 。

`os.scandir()` 调用时返回一个迭代器而不是一个列表。

```python
import os
entries = os.scandir('my_directory')
print(entries)
# <posix.ScandirIterator at 0x105b4d4b0>
```

ScandirIterator 指向了当前目录中的所有条目。你可以遍历迭代器的内容，并打印文件名。

```python
import os
with os.scandir('my_directory') as entries:
    for entry in entries:
        print(entry.name)
```

这里 `os.scandir()` 和with语句一起使用，因为它支持上下文管理协议。使用上下文管理器关闭迭代器并在迭代器耗尽后自动释放获取的资源。在 `my_directory` 打印文件名的结果就和在 `os.listdir()` 例子中看到的一样：

```text
file1.py
file2.csv
file3.txt
sub_dir
sub_dir_b
sub_dir_c
```

另一个获取目录列表的方法是使用 `pathlib` 模块：

```python
from pathlib import Path

entries = Path('my_directory')
for entry in entries.iterdir():
    print(entry.name)
```

`pathlib.Path()` 返回的是 `PosixPath` 或 `WindowsPath` 对象，这取决于操作系统。

`pathlib.Path()` 对象有一个 `.iterdir()` 的方法用于创建一个迭代器包含该目录下所有文件和目录。由 `.iterdir()` 生成的每个条目都包含文件或目录的信息，例如其名称和文件属性。`pathlib` 在Python3.4时被第一次引入，并且是对Python一个很好的加强，它为文件系统提供了面向对象的接口。

在上面的例子中，你调用 `pathlib.Path()` 并传入了一个路径参数。然后调用 `.iterdir()` 来获取 `my_directory` 下的所有文件和目录列表。

`pathlib` 提供了一组类，以简单并且面向对象的方式提供了路径上的大多数常见的操作。使用 `pathlib` 比起使用 `os` 中的函数更加有效。和 `os` 相比，使用 `pathlib` 的另一个好处是减少了操作文件系统路径所导入包或模块的数量。想要了解更多信息，可以阅读 [Python 3’s pathlib Module: Taming the File System](https://realpython.com/python-pathlib/) 。

运行上述代码会得到如下结果:

```python
file1.py
file2.csv
file3.txt
sub_dir
sub_dir_b
sub_dir_c
```

使用 `pathlib.Path()` 或 `os.scandir()` 来替代 `os.listdir()` 是获取目录列表的首选方法，尤其是当你需要获取文件类型和文件属性信息的时候。`pathlib.Path()` 提供了在 `os` 和 `shutil` 中大部分处理文件和路径的功能，并且它的方法比这些模块更加有效。我们将讨论如何快速的获取文件属性。

| 函数                     | 描述                                                     | | ------------------------ |  -------------------------------------------------------- | |  os.listdir()             | 以列表的方式返回目录中所有的文件和文件夹                 | |  os.scandir()             | 返回一个迭代器包含目录中所有的对象，对象包含文件属性信息 | |  pathlib.Path().iterdir() | 返回一个迭代器包含目录中所有的对象，对象包含文件属性信息 |

这些函数返回目录中所有内容的列表，包括子目录。这可能并总是你一直想要的结果，下一节将向你展示如何从目录列表中过滤结果。

## 列出目录中的所有文件

这节将向你展示如何使用 `os.listdir()` ，`os.scandir()` 和 `pathlib.Path()` 打印出目录中文件的名称。为了过滤目录并仅列出 `os.listdir()` 生成的目录列表的文件，要使用 `os.path` ：

```python
import os

basepath = 'my_directory'
for entry in os.listdir(basepath):
    # 使用os.path.isfile判断该路径是否是文件类型
    if os.path.isfile(os.path.join(base_path, entry)):
        print(entry)
```

在这里调用 `os.listdir()` 返回指定路径中所有内容的列表，接着使用 `os.path.isfile()` 过滤列表让其只显示文件类型而非目录类型。代码执行结果如下：

```text
file1.py
file2.csv
file3.txt
```

一个更简单的方式来列出一个目录中所有的文件是使用 `os.scandir()` 或 `pathlib.Path()` :

```python
import os

basepath = 'my_directory'
with os.scandir(basepath) as entries:
    for entry in entries:
        if entry.is_file():
            print(entry.name)
```

使用 `os.scandir()` 比起 `os.listdir()` 看上去更清楚和更容易理解。对 `ScandirIterator` 的每一项调用 `entry.isfile()` ，如果返回 `True` 则表示这一项是一个文件。上述代码的输出如下：

```text
file1.py
file3.txt
file2.csv
```

接着，展示如何使用 `pathlib.Path()` 列出一个目录中的文件：

```python
from pathlib import Path

basepath = Path('my_directory')
for entry in basepath.iterdir():
    if entry.is_file():
        print(entry.name)
```

在 `.iterdir()` 产生的每一项调用 `.is_file()` 。产生的输出结果和上面相同：

```text
file1.py
file3.txt
file2.csv
```

如果将for循环和if语句组合成单个生成器表达式，则上述的代码可以更加简洁。关于生成器表达式，推荐一篇[Dan Bader](https://dbader.org/blog/python-generator-expressions) 的文章。

修改后的版本如下：

```python
from pathlib import Path

basepath = Path('my_directory')
files_in_basepath = (entry for entry in basepath.iterdir() if entry.is_file())
for item in files_in_basepath:
    print(item.name)
```

上述代码的执行结果和之前相同。本节展示使用 `os.scandir()` 和 `pathlib.Path()` 过滤文件或目录比使用 `os.listdir()` 和 `os.path` 更直观，代码看起来更简洁。

## 列出子目录

如果要列出子目录而不是文件，请使用下面的方法。现在展示如何使用 `os.listdir()` 和 `os.path()` :

```python
import os

basepath = 'my_directory'
for entry in os.listdir(basepath):
    if os.path.isdir(os.path.join(basepath, entry)):
        print(entry)
```

当你多次调用 `os.path,join()` 时，以这种方式操作文件系统就会变得很笨重。在我电脑上运行此代码会产生以下输出：

```text
sub_dir
sub_dir_b
sub_dir_c
```

下面是如何使用 `os.scandir()` ：

```python
import os

basepath = 'my_directory'
with os.scandir(basepath) as entries:
    for entry in entries:
        if entry.is_dir():
            print(entry.name)
```

与文件列表中的示例一样，此处在 `os.scandir()` 返回的每一项上调用 `.is_dir()` 。如果这项是目录，则 `is_dir()` 返回 True，并打印出目录的名称。输出结果和上面相同：

```text
sub_dir_c
sub_dir_b
sub_dir
```

下面是如何使用 `pathlib.Path()` ：

```python
from pathlib import Path

basepath = Path('my_directory')
for entry in basepath.iterdir():
    if entry.is_dir():
        print(entry.name)
```

在 `.iterdir()` 迭代器返回的每一项上调用 `is_dir()` 检查是文件还是目录。如果该项是目录，则打印其名称，并且生成的输出与上一示例中的输出相同：

```text
sub_dir_c
sub_dir_b
sub_dir
```

------

## 获取文件属性

Python可以很轻松的获取文件大小和修改时间等文件属性。可以通过使用 `os.stat()` ， `os.scandir()` 或 `pathlib.Path` 来获取。

`os.scandir()` 和 `pathlib.Path()` 能直接获取到包含文件属性的目录列表。这可能比使用 `os.listdir()` 列出文件然后获取每个文件的文件属性信息更加有效。

下面的例子显示了如何获取 `my_directory` 中文件的最后修改时间。以时间戳的方式输出：

```python
import os

with os.scandir('my_directory') as entries:
    for entry in entries:
        info = entry.stat()
        print(info.st_mtime)

"""
1548163662.3952665
1548163689.1982062
1548163697.9175904
1548163721.1841028
1548163740.765162
1548163769.4702623
"""
```

`os.scandir()` 返回一个 `ScandirIterator` 对象。`ScandirIterator` 对象中的每一项有 `.stat()` 方法能获取关于它指向文件或目录的信息。`.stat()` 提供了例如文件大小和最后修改时间的信息。在上面的示例中，代码打印了 `st_time` 属性，该属性是上次修改文件内容的时间。

`pathlib` 模块具有相应的方法，用于获取相同结果的文件信息:

```python
from pathlib import Path

basepath = Path('my_directory')
for entry in basepath.iterdir():
    info = entry.stat()
    print(info.st_mtime)

"""
1548163662.3952665
1548163689.1982062
1548163697.9175904
1548163721.1841028
1548163740.765162
1548163769.4702623
"""
```

在上面的例子中，循环 `.iterdir()` 返回的迭代器并通过对其中每一项调用 `.stat()` 来获取文件属性。`st_mtime` 属性是一个浮点类型的值，表示的是时间戳。为了让 `st_time` 返回的值更容易阅读，你可以编写一个辅助函数将其转换为一个 `datetime` 对象：

```python
import datetime                                                                   
from pathlib import Path                                                          


def timestamp2datetime(timestamp, convert_to_local=True, utc=8, is_remove_ms=True)
    """                                                                           
    转换 UNIX 时间戳为 datetime对象                                                       
    :param timestamp: 时间戳                                                         
    :param convert_to_local: 是否转为本地时间                                             
    :param utc: 时区信息，中国为utc+8                                                     
    :param is_remove_ms: 是否去除毫秒                                                   
    :return: datetime 对象                                                          
    """                                                                           
    if is_remove_ms:                                                              
        timestamp = int(timestamp)                                                
    dt = datetime.datetime.utcfromtimestamp(timestamp)                            
    if convert_to_local:                                                          
        dt = dt + datetime.timedelta(hours=utc)                                   
    return dt                                                                     


def convert_date(timestamp, format='%Y-%m-%d %H:%M:%S'):                          
    dt = timestamp2datetime(timestamp)                                            
    return dt.strftime(format)                                                    


basepath = Path('my_directory')                                                   
for entry in basepath.iterdir():
    if entry.is_file()
        info = entry.stat()                                                           
        print('{} 上次修改时间为 {}'.format(entry.name, timestamp2datetime(info.st_mtime)))
```

首先得到 `my_directory` 中文件的列表以及它们的属性，然后调用 `convert_date()` 来转换文件最后修改时间让其以一种人类可读的方式显示。`convert_date()` 使用 `.strftime()` 将datetime类型转换为字符串。

上述代码的输出结果：

```text
file3.txt 上次修改时间为 2019-01-24 09:04:39
file2.csv 上次修改时间为 2019-01-24 09:04:39
file1.py 上次修改时间为 2019-01-24 09:04:39
```

将日期和时间转换为字符串的语法可能会让你感到混乱。如果要了解更多的信息，请查询相关的[官方文档](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior) 。另一个方式则是阅读 [http://strftime.org](http://strftime.org/) 。

------

## 创建目录

你编写的程序迟早需要创建目录以便在其中存储数据。 `os` 和 `pathlib` 包含了创建目录的函数。我们将会考虑如下方法：

| 方法                 | 描述                       | | -------------------- | -------------------------- | | os.mkdir()           | 创建单个子目录             | | os.makedirs()        | 创建多个目录，包括中间目录 | | Pathlib.Path.mkdir() |  创建单个或多个目录         |

## 创建单个目录

要创建单个目录，把目录路径作为参数传给 `os.mkdir()` :

```python
import os

os.mkdir('example_directory')
```

如果该目录已经存在，`os.mkdir()` 将抛出 `FileExistsError` 异常。或者，你也可以使用 `pathlib` 来创建目录:

```python
from pathlib import Path

p = Path('example_directory')
p.mkdir()
```

如果路径已经存在，`mkdir()` 会抛出 `FileExistsError` 异常:

```text
FileExistsError: [Errno 17] File exists: 'example_directory'
```

为了避免像这样的错误抛出， 当发生错误时捕获错误并让你的用户知道:

```python
from pathlib import Path

p = Path('example_directory')
try:
    p.mkdir()
except FileExistsError as e:
    print(e)
```

或者，你可以给 `.mkdir()` 传入 `exist_ok=True` 参数来忽略 `FileExistsError` 异常:

```python
from pathlib import Path

p = Path('example_directory')
p.mkdir(exist_ok=True)
```

如果目录已存在，则不会引起错误。

## 创建多个目录

`os.makedirs()` 和 `os.mkdir()` 类似。两者之间的区别在于，`os.makedirs()` 不仅可以创建单独的目录，还可以递归的创建目录树。换句话说，它可以创建任何必要的中间文件夹，来确保存在完整的路径。

`os.makedirs()` 和在bash中运行 `mkdir -p` 类似。例如，要创建一组目录像 2018/10/05，你可以像下面那样操作:

```python
import os

os.makedirs('2018/10/05', mode=0o770)
```

上述代码创建了 `2018/10/05` 的目录结构并为所有者和组用户提供读、写和执行权限。默认的模式为 `0o777` ，增加了其他用户组的权限。有关文件权限以及模式的应用方式的更多详细信息，请参考 [文档](https://docs.python.org/3/library/os.html#os.makedirs) 。

运行 `tree` 命令确认我们应用的权限:

```text
$ tree -p -i .
.
[drwxrwx---]  2018
[drwxrwx---]  10
[drwxrwx---]  05
```

上述代码打印出当前目录的目录树。 `tree` 通常被用来以树形结构列出目录的内容。传入 `-p` 和 `-i` 参数则会以垂直列表打印出目录名称以及其文件权限信息。`-p` 用于输出文件权限，`-i` 则用于让 `tree` 命令产生一个没有缩进线的垂直列表。

正如你所看到的，所有的目录都拥有 770 权限。另一个方式创建多个目录是使用 `pathlib.Path` 的 `.mkdir()` :

```python
from pathlib import Path

p = Path('2018/10/05')
p.mkdir(parents=True, exist_ok=True)
```

通过给 `Path.mkdir()` 传递 `parents=True` 关键字参数使它创建 `05` 目录和使其路径有效的所有父级目录。

在默认情况下，`os.makedirs()` 和 `pathlib.Path.mkdir()` 会在目标目录存在的时候抛出 `OSError` 。通过每次调用函数时传递 `exist_ok=True` 作为关键字参数则可以覆盖此行为（从Python3.2开始）。

运行上述代码会得到像下面的结构：

```text
└── 2018
    └── 10
        └── 05
```

我更喜欢在创建目录时使用 `pathlib` ，因为我可以使用相同的函数方法来创建一个或多个目录。

------

## 文件名模式匹配

使用上述方法之一获取目录中的文件列表后，你可能希望搜索和特定的模式匹配的文件。

下面这些是你可以使用的方法和函数：

- `endswith()` 和 `startswith()` 字符串方法
- `fnmatch.fnmatch()`
- `glob.glob()`
- `pathlib.Path.glob()`

这些方法和函数是下面要讨论的。本小节的示例将在名为 `some_directory` 的目录下执行，该目录具有以下的结构：

```text
.
├── admin.py
├── data_01_backup.txt
├── data_01.txt
├── data_02_backup.txt
├── data_02.txt
├── data_03_backup.txt
├── data_03.txt
├── sub_dir
│   ├── file1.py
│   └── file2.py
└── tests.py
```

如果你正在使用 Bash shell，你可以使用以下的命令创建上述目录结构:

```text
mkdir some_directory
cd some_directory
mkdir sub_dir
touch sub_dir/file1.py sub_dir/file2.py
touch data_{01..03}.txt data_{01..03}_backup.txt admin.py tests.py
```

这将会创建 `some_directory` 目录并进入它，接着创建 `sub_dir` 。下一行在 `sub_dir` 创建 `file1.py` 和 `file2.py` ，最后一行使用扩展创建其它所有文件。想要学习更多关于shell扩展，请阅读 [这里](http://linuxcommand.org/lc3_lts0080.php) 。

## 使用字符串方法

Python有几个内置 [修改和操作字符串](https://realpython.com/python-strings/) 的方法。当在匹配文件名时，其中的两个方法 `.startswith()` 和 `.endswith()` 非常有用。要做到这点，首先要获取一个目录列表，然后遍历。 

```python
import os

for f_name in os.listdir('some_directory'):
    if f_name.endswith('.txt'):
        print(f_name)
```

上述代码找到 `some_directory` 中的所有文件，遍历并使用 `.endswith()` 来打印所有扩展名为 `.txt` 的文件名。运行代码在我的电脑上输出如下:

```text
data_01.txt
data_01_backup.txt
data_02.txt
data_02_backup.txt
data_03.txt
data_03_backup.txt
```

## 使用 `fnmatch` 进行简单文件名模式匹配

字符串方法匹配的能力是有限的。`fnmatch` 有对于模式匹配有更先进的函数和方法。我们将考虑使用 `fnmatch.fnmatch()` ，这是一个支持使用 `*` 和 `?` 等通配符的函数。例如，使用 `fnmatch` 查找目录中所有 `.txt` 文件，你可以这样做:

```python
import os
import fnmatch

for f_name in os.listdir('some_directory'):
    if fnmatch.fnmatch(f_name, '*.txt'):
        print(f_name)
```

迭代 `some_directory` 中的文件列表，并使用 `.fnmatch()` 对扩展名为 `.txt` 的文件执行通配符搜索。

## 更先进的模式匹配

假设你想要查找符合特定掉件的 `.txt` 文件。例如，你可能指向找到包含单次 `data` 的  `.txt`文件，一组下划线之间的数字，以及文件名中包含单词 `backup` 。就类似于 `data_01_backup`, `data_02_backup`, 或 `data_03_backup` 。

你可以这样使用 `fnmatch.fnmatch()` :

```python
import os
import fnmatch

for f_name in os.listdir('some_directory'):
    if fnmatch.fnmatch(f_name, 'data_*_backup.txt'):
        print(f_name)
```

这里就仅仅打印出匹配 `data_*_backup.txt` 模式的文件名称。模式中的 `*` 将匹配任何字符，因此运行这段代码则将查找文件名以 `data` 开头并以 `backup.txt` 的所有文本文件，就行下面的输出所示 :

```python
data_01_backup.txt
data_02_backup.txt
data_03_backup.txt
```

## 使用 `glob` 进行文件名模式匹配

另一个有用的模式匹配模块是 `glob` 。

`.glob()` 在 `glob` 模块中的左右就像 `fnmatch.fnmatch()`，但是与 `fnmach.fnmatch()` 不同的是，它将以 `.` 开头的文件视为特殊文件。

UNIX和相关系统在文件列表中使用通配符像 `?` 和 `*` 表示全匹配。

例如，在UNIX shell中使用 `mv *.py python_files` 移动所有 `.py` 扩展名 的文件从当前目录到 `python_files` 。这 `*` 是一个通配符表示任意数量的字符，`*.py` 是一个全模式。Windows操作系统中不提供此shell功能。但 `glob` 模块在Python中添加了此功能，使得Windows程序可以使用这个特性。

这里有一个使用 `glob` 模块在当前目录下查询所有Python代码文件:

```python
import glob

print(glob.glob('*.py'))
```

`glob.glob('*.py')` 搜索当前目录中具有 `.py` 扩展名的文件，并且将它们以列表的形式返回。 `glob` 还支持 shell 样式的通配符来进行匹配 :

```text
import glob

for name in glob.glob('*[0-9]*.txt'):
    print(name)
```

这将找到所有文件名中包含数字的文本文件(`.txt`) :

```text
data_01.txt
data_01_backup.txt
data_02.txt
data_02_backup.txt
data_03.txt
data_03_backup.txt
```

`glob` 也很容易在子目录中递归的搜索文件:

```python
import glob

for name in glob.iglob('**/*.py', recursive=True):
    print(name)
```

这里例子使用了 `glob.iglob()` 在当前目录和子目录中搜索所有的 `.py` 文件。传递 `recursive=True` 作为 `.iglob()` 的参数使其搜索当前目录和子目录中的 `.py` 文件。`glob.glob()` 和 `glob.iglob()` 不同之处在于，`iglob()` 返回一个迭代器而不是一个列表。

运行上述代码会得到以下结果:

```python
admin.py
tests.py
sub_dir/file1.py
sub_dir/file2.py
```

`pathlib` 也包含类似的方法来灵活的获取文件列表。下面的例子展示了你可以使用 `.Path.glob()` 列出以字母 `p` 开始的文件类型的文件列表。

```python
from pathlib import Path

p = Path('.')

for name in p.glob('*.p*'):
    print(name)
```

调用 `p.glob('*.p*')` 会返回一个指向当前目录中所有扩展名以字母 `p` 开头的文件的生成器对象。

`Path.glob()` 和上面讨论过的 `os.glob()` 类似。正如你看到的， `pathlib` 混合了许多 `os` ， `os.path` 和 `glob` 模块的最佳特性到一个模块中，这使得使用起来很方便。

回顾一下，这是我们在本节中介绍的功能表:

| 函数                               | 描述                                                       | | ---------------------------------- |  ---------------------------------------------------------- | |  startswith()                       | 测试一个字符串是否以一个特定的模式开始，返回 True 或 False | | endswith()                         | 测试一个字符串是否以一个特定的模式结束，返回 True 或  False | | fnmatch.fnmatch(filename, pattern) | 测试文件名是否匹配这个模式，返回 True 或  False             | | glob.glob()                        |  返回一个匹配该模式的文件名列表                             | | pathlib.Path.glob()                | 返回一个匹配该模式的生成器对象                             |

------

## 遍历目录和处理文件

一个常见的编程任务是遍历目录树并处理目录树中的文件。让我们来探讨一下如何使用内置的Python函数 `os.walk()` 来实现这一功能。`os.walk()` 用于通过从上到下或从下到上遍历树来生成目录树中的文件名。处于本节的目的，我们想操作以下的目录树:

```text
├── folder_1
│   ├── file1.py
│   ├── file2.py
│   └── file3.py
├── folder_2
│   ├── file4.py
│   ├── file5.py
│   └── file6.py
├── test1.txt
└── test2.txt
```

以下是一个示例，演示如何使用 `os.walk()` 列出目录树中的所有文件和目录。

`os.walk()` 默认是从上到下遍历目录:

```
python import os for dirpath, dirname, files in os.walk('.'):      print(f'Found directory: {dirpath}')     for file_name in files:         print(file_name)
```

`os.walk()` 在每个循环中返回三个值：

1. 当前文件夹的名称
2. 当前文件夹中子文件夹的列表
3. 当前文件夹中文件的列表

在每次迭代中，会打印出它找到的子目录和文件的名称：

```python
Found directory: .
test1.txt
test2.txt
Found directory: ./folder_1
file1.py
file3.py
file2.py
Found directory: ./folder_2
file4.py
file5.py
file6.py
```

要以自下而上的方式遍历目录树，则将 `topdown=False` 关键字参数传递给 `os.walk()` ：

```python
for dirpath, dirnames, files in os.walk('.', topdown=False):
    print(f'Found directory: {dirpath}')
    for file_name in files:
        print(file_name)
```

传递 `topdown=False` 参数将使 `os.walk()` 首先打印出它在子目录中找到的文件:

```text
Found directory: ./folder_1
file1.py
file3.py
file2.py
Found directory: ./folder_2
file4.py
file5.py
file6.py
Found directory: .
test1.txt
test2.txt
```

如你看见的，程序在列出根目录的内容之前列出子目录的内容。 这在在你想要递归删除文件和目录的情况下非常有用。 你将在以下部分中学习如何执行此操作。 默认情况下，`os.walk` 不会访问通过软连接创建的目录。 可以通过使用 `followlinks = True` 参数来覆盖默认行为。

------

## 创建临时文件和目录

Python提供了 `tempfile` 模块来便捷的创建临时文件和目录。

`tempfile` 可以在你程序运行时打开并存储临时的数据在文件或目录中。 `tempfile` 会在你程序停止运行后删除这些临时文件。

现在，让我们看看如何创建一个临时文件:

```python
from tempfile import  TemporaryFile

# 创建一个临时文件并为其写入一些数据
fp = TemporaryFile('w+t')
fp.write('Hello World!')
# 回到开始，从文件中读取数据
fp.seek(0)
data = fp.read()
print(data)
# 关闭文件，之后他将会被删除
fp.close()
```

第一步是从 `tempfile` 模块导入 `TemporaryFile` 。 接下来，使用 `TemporaryFile()` 方法并传入一个你想打开这个文件的模式来创建一个类似于对象的文件。这将创建并打开一个可用作临时存储区域的文件。

在上面的示例中，模式为 `w + t`，这使得 `tempfile` 在写入模式下创建临时文本文件。 没有必要为临时文件提供文件名，因为在脚本运行完毕后它将被销毁。

写入文件后，您可以从中读取并在完成处理后将其关闭。 一旦文件关闭后，将从文件系统中删除。 如果需要命名使用 `tempfile` 生成的临时文件，请使用 `tempfile.NamedTemporaryFile()` 。

使用 `tempfile` 创建的临时文件和目录存储在用于存储临时文件的特殊系统目录中。 Python将在目录列表搜索用户可以在其中创建文件的目录。

在Windows上，目录按顺序为 `C:\TEMP`，`C:\TMP`，`\TEMP` 和 `\TMP`。 在所有其他平台上，目录按顺序为 `/ tmp`，`/var/tmp` 和 `/usr/tmp` 。 如果上述目录中都没有，`tempfile` 将在当前目录中存储临时文件和目录。

`.TemporaryFile()` 也是一个上下文管理器，因此它可以与with语句一起使用。 使用上下文管理器会在读取文件后自动关闭和删除文件：

```python
with TemporaryFile('w+t') as fp:
    fp.write('Hello universe!')
    fp.seek(0)
    fp.read()
# 临时文件现在已经被关闭和删除
```

这将创建一个临时文件并从中读取数据。 一旦读取文件的内容，就会关闭临时文件并从文件系统中删除。

`tempfile` 也可用于创建临时目录。 让我们看一下如何使用 `tempfile.TemporaryDirectory()`来做到这一点：

```python
import tempfile
import os

tmp = ''
with tempfile.TemporaryDirectory() as tmpdir:
    print('Created temporary directory ', tmpdir)
    tmp = tmpdir
    print(os.path.exists(tmpdir))

print(tmp)
print(os.path.exists(tmp))
```

调用 `tempfile.TemporaryDirectory()` 会在文件系统中创建一个临时目录，并返回一个表示该目录的对象。 在上面的示例中，使用上下文管理器创建目录，目录的名称存储在 `tmpdir` 变量中。 第三行打印出临时目录的名称，`os.path.exists(tmpdir)` 来确认目录是否实际在文件系统中创建。

在上下文管理器退出上下文后，临时目录将被删除，并且对 `os.path.exists(tmpdir)`的调用将返回False，这意味着该目录已成功删除。

------

## 删除文件和目录

您可以使用 `os`，`shutil` 和 `pathlib` 模块中的方法删除单个文件，目录和整个目录树。 以下将介绍如何删除你不再需要的文件和目录。

## Python中删除文件

要删除单个文件，请使用 `pathlib.Path.unlink()`，`os.remove()` 或 `os.unlink()`。

`os.remove()` 和 `os.unlink()` 在语义上是相同的。 要使用 `os.remove()`删除文件，请执行以下操作：

```python
import os

data_file = 'C:\\Users\\vuyisile\\Desktop\\Test\\data.txt'
os.remove(data_file)
```

使用 `os.unlink()` 删除文件与使用 `os.remove()` 的方式类似：

```python
import os

data_file = 'C:\\Users\\vuyisile\\Desktop\\Test\\data.txt'
os.unlink(data_file)
```

在文件上调用 `.unlink()` 或 `.remove()` 会从文件系统中删除该文件。 如果传递给它们的路径指向目录而不是文件，这两个函数将抛出 `OSError` 。 为避免这种情况，可以检查你要删除的内容是否是文件，并在确认是文件时执行删除操作，或者可以使用异常处理来处理 `OSError` ：

```python
import os

data_file = 'home/data.txt'
# 如果类型是文件则进行删除
if os.path.is_file(data_file):
    os.remove(data_file)
else:
    print(f'Error: {data_file} not a valid filename')
```

`os.path.is_file()` 检查 `data_file` 是否实际上是一个文件。 如果是，则通过调用 `os.remove()` 删除它。 如果 `data_file`  指向文件夹，则会向控制台输出错误消息。

以下示例说明如何在删除文件时使用异常处理来处理错误：

```python
import os

data_file = 'home/data.txt'
# 使用异常处理
try:
    os.remove(data_file)
except OSError as e:
    print(f'Error: {data_file} : {e.strerror}')
```

上面的代码尝试在检查其类型之前先删除该文件。 如果 `data_file` 实际上不是文件，则抛出的 `OSError` 将在except子句中处理，并向控制台输出错误消息。 打印出的错误消息使用 [Python f-strings ](https://realpython.com/python-f-strings/)格式化。

最后，你还可以使用 `pathlib.Path.unlink()` 删除文件：

```python
from pathlib import Path

data_file = Path('home/data.txt')
try:
    data_file.unlink()
except IsADirectoryError as e:
    print(f'Error: {data_file} : {e.strerror}')
```

这将创建一个名为 `data_file` 的 `Path` 对象，该对象指向一个文件。 在 `data_file` 上调用.unlink（）将删除 `home / data.txt` 。 如果 `data_file` 指向目录，则引发 `IsADirectoryError` 。 值得注意的是，上面的Python程序和运行它的用户具有相同的权限。 如果用户没有删除文件的权限，则会引发 `PermissionError` 。

## 删除目录

标准库提供了一下函数来删除目录:

- os.rmdir()
- pathlib.Path.rmdir()
- shutil.rmtree()

要删除单个目录或文件夹可以使用 `os.rmdir()` 或 `pathlib.Path.rmdir()` 。这两个函数只在你删除空目录的时候有效。如果目录不为空，则会抛出 `OSError` 。下面演示如何删除一个文件夹:

```python
import os

trash_dir = 'my_documents/bad_dir'

try:
    os.rmdir(trash_dir)
except OSError as e:
    print(f'Error: {trash_dir} : {e.strerror}')
```

现在，`trash_dir` 已经通过 `os.rmdir()` 被删除了。如果目录不为空，则会在屏幕上打印错误信息:

```text
Traceback (most recent call last):
  File '<stdin>', line 1, in <module>
OSError: [Errno 39] Directory not empty: 'my_documents/bad_dir'
```

同样，你也可使用 `pathlib` 来删除目录:

```python
from pathlib import Path

trash_dir = Path('my_documents/bad_dir')

try:
    trash_dir.rmdir()
except OSError as e:
    print(f'Error: {trash_dir} : {e.strerror}')
```

这里创建了一个 `Path` 对象指向要被删除的目录。如果目录为空，调用 `Path` 对象的  `.rmdir()` 方法删除它。

## 删除完整的目录树

要删除非空目录和完整的目录树，Python提供了 `shutil.rmtree()` :

```python
import shutil

trash_dir = 'my_documents/bad_dir'

try:
    shutil.rmtree(trash_dir)
except OSError as e:
    print(f'Error: {trash_dir} : {e.strerror}')
```

当调用 `shutil.rmtree()` 时，`trash_dir` 中的所有内容都将被删除。 在某些情况下，你可能希望以递归方式删除空文件夹。 你可以使用上面讨论的方法之一结合 `os.walk()` 来完成此操作:

```python
import os

for dirpath, dirnames, files in os.walk('.', topdown=False):
    try:
        os.rmdir(dirpath)
    except OSError as ex:
        pass
```

这将遍历目录树并尝试删除它找到的每个目录。 如果目录不为空，则引发OSError并跳过该目录。 下表列出了本节中涉及的功能：

| 函数                  | 描述                                 | |  --------------------- | ------------------------------------ | |  os.remove()           | 删除单个文件，不能删除目录           | | os.unlink()           | 和os.remove()一样，职能删除单个文件  | | pathlib.Path.unlink() | 删除单个文件，不能删除目录           | | os.rmdir()            | 删除一个空目录                       | |  pathlib.Path.rmdir()  | 删除一个空目录                       | |  shutil.rmtree()       | 删除完整的目录树，可用于删除非空目录 |

------

## 复制、移动和重命名文件和目录

Python附带了 `shutil` 模块。 `shutil` 是shell实用程序的缩写。 它为文件提供了许多高级操作，来支持文件和目录的复制，归档和删除。 在本节中，你将学习如何移动和复制文件和目录。

## 复制文件

`shutil` 提供了一些复制文件的函数。 最常用的函数是 `shutil.copy()`  和 `shutil.copy2()` 。 使用`shutil.copy()` 将文件从一个位置复制到另一个位置，请执行以下操作：

```python
import shutil

src = 'path/to/file.txt'
dst = 'path/to/dest_dir'
shutil.copy(src, dst)
```

`shutil.copy()` 与基于UNIX的系统中的 `cp` 命令相当。 `shutil.copy(src，dst)` 会将文件 `src` 复制到 `dst` 中指定的位置。 如果 `dst` 是文件，则该文件的内容将替换为 `src` 的内容。 如果 `dst` 是目录，则 `src` 将被复制到该目录中。 `shutil.copy()` 仅复制文件的内容和文件的权限。 其他元数据（如文件的创建和修改时间）不会保留。

要在复制时保留所有文件元数据，请使用 `shutil.copy2()` ：

```python
import shutil

src = 'path/to/file.txt'
dst = 'path/to/dest_dir'
shutil.copy2(src, dst)
```

使用 `.copy2()` 保留有关文件的详细信息，例如上次访问时间，权限位，上次修改时间和标志。

## 复制目录

虽然 `shutil.copy()` 只复制单个文件，但 `shutil.copytree()` 将复制整个目录及其中包含的所有内容。 `shutil.copytree(src，dest)` 接收两个参数：源目录和将文件和文件夹复制到的目标目录。

以下是如何将一个文件夹的内容复制到其他位置的示例：

```python
import shutil
dst = shutil.copytree('data_1', 'data1_backup')
print(dst)  # data1_backup
```

在此示例中，`.copytree()` 将 `data_1` 的内容复制到新位置 `data1_backup` 并返回目标目录。 目标目录不能是已存在的。 它将被创建而不带有其父目录。 `shutil.copytree()` 是备份文件的一个好方法。

## 移动文件和目录

要将文件或目录移动到其他位置，请使用 `shutil.move(src，dst)` 。

`src` 是要移动的文件或目录，`dst` 是目标：

```python
import shutil
dst = shutil.move('dir_1/', 'backup/')
print(dst)  # 'backup'
```

如果 `backup/` 存在，则 `shutil.move('dir_1/'，'backup/')` 将 `dir_1/` 移动到 `backup/` 。 如果 `backup/` 不存在，则 `dir_1/` 将重命名为 `backup` 。

## 重命名文件和目录

Python包含用于重命名文件和目录的 `os.rename(src，dst)`：

```python
import os
os.rename('first.zip', 'first_01.zip')
```

上面的行将 `first.zip` 重命名为 `first_01.zip` 。 如果目标路径指向目录，则会抛出 `OSError` 。

重命名文件或目录的另一种方法是使用 `pathlib` 模块中的 `rename（）`：

```python
from pathlib import Path
data_file = Path('data_01.txt')
data_file.rename('data.txt')
```

要使用 `pathlib` 重命名文件，首先要创建一个 `pathlib.Path()` 对象，该对象包含要替换的文件的路径。 下一步是在路径对象上调用 `rename()`  并传入你要重命名的文件或目录的新名称。

## 归档

归档是将多个文件打包成一个文件的便捷方式。 两种最常见的存档类型是ZIP和TAR。 你编写的Python程序可以创建存档文件，读取存档文件和从存档文件中提取数据。 你将在本节中学习如何读取和写入两种压缩格式。

## 读取ZIP文件

`zipfile` 模块是一个底层模块，是Python标准库的一部分。 `zipfile` 具有可以轻松打开和提取ZIP文件的函数。 要读取ZIP文件的内容，首先要做的是创建一个 `ZipFile` 对象。`ZipFile` 对象类似于使用 `open()` 创建的文件对象。`ZipFile` 也是一个上下文管理器，因此支持with语句：

```python
import zipfile

with zipfile.ZipFile('data.zip', 'r') as zipobj:
    pass
```

这里创建一个 `ZipFile` 对象，传入ZIP文件的名称并以读取模式下打开。 打开ZIP文件后，可以通过 `zipfile` 模块提供的函数访问有关存档文件的信息。 上面示例中的 `data.zip` 存档是从名为 `data` 的目录创建的，该目录包含总共5个文件和1个子目录：

```text
.
|
├── sub_dir/
|   ├── bar.py
|   └── foo.py
|
├── file1.py
├── file2.py
└── file3.py
```

要获取存档文件中的文件列表，请在 `ZipFile` 对象上调用 `namelist()` ：

```python
import zipfile

with zipfile.ZipFile('data.zip', 'r') as zipobj:
    zipobj.namelist()
```

这会生成一个文件列表:

```text
['file1.py', 'file2.py', 'file3.py', 'sub_dir/', 'sub_dir/bar.py', 'sub_dir/foo.py']
```

`.namelist()` 返回存档文件中文件和目录的名称列表。要检索有关存档文件中文件的信息，使用 `.getinfo()` ：

```python
import zipfile

with zipfile.ZipFile('data.zip', 'r') as zipobj:
    bar_info = zipobj.getinfo('sub_dir/bar.py')
    print(bar_info.file_size)
```

这将输出:

```text
15277
```

`.getinfo()` 返回一个 `ZipInfo` 对象，该对象存储有关存档文件的单个成员的信息。 要获取有关存档文件中文件的信息，请将其路径作为参数传递给 `.getinfo()` 。 使用 `getinfo()` ，你可以检索有关存档文件成员的信息，例如上次修改文件的日期，压缩大小及其完整文件名。 访问 `.file_size` 将以字节为单位检索文件的原始大小。

以下示例说明如何在Python REPL中检索有关已归档文件的更多详细信息。 假设已导入 `zipfile` 模块，`bar_info` 与在前面的示例中创建的对象相同：

```python
>>> bar_info.date_time
(2018, 10, 7, 23, 30, 10)
>>> bar_info.compress_size
2856
>>> bar_info.filename
'sub_dir/bar.py'
```

`bar_info` 包含有关 `bar.py` 的详细信息，例如压缩的大小及其完整路径。

第一行显示了如何检索文件的上次修改日期。 下一行显示了如何在归档后获取文件的大小。 最后一行显示了存档文件中 `bar.py` 的完整路径。

`ZipFile` 支持上下文管理器协议，这就是你可以将它与with语句一起使用的原因。 操作完成后会自动关闭 `ZipFile` 对象。 尝试从已关闭的 `ZipFile` 对象中打开或提取文件将导致错误。

## 提取ZIP文件

`zipfile` 模块允许你通过 `.extract()` 和 `.extractall()` 从ZIP文件中提取一个或多个文件。

默认情况下，这些方法将文件提取到当前目录。 它们都采用可选的路径参数，允许指定要将文件提取到的其他指定目录。 如果该目录不存在，则会自动创建该目录。 要从压缩文件中提取文件，请执行以下操作：

```python
>>> import zipfile
>>> import os

>>> os.listdir('.')
['data.zip']

>>> data_zip = zipfile.ZipFile('data.zip', 'r')

>>> # 提取单个文件到当前目录
>>> data_zip.extract('file1.py')
'/home/test/dir1/zip_extract/file1.py'

>>> os.listdir('.')
['file1.py', 'data.zip']

>>> # 提所有文件到指定目录
>>> data_zip.extractall(path='extract_dir/')

>>> os.listdir('.')
['file1.py', 'extract_dir', 'data.zip']

>>> os.listdir('extract_dir')
['file1.py', 'file3.py', 'file2.py', 'sub_dir']

>>> data_zip.close()
```

第三行代码是对 `os.listdir()`  的调用，它显示当前目录只有一个文件 `data.zip` 。

接下来，以读取模式下打开 `data.zip` 并调用 `.extract()` 从中提取 `file1.py` 。 `.extract()` 返回提取文件的完整文件路径。 由于没有指定路径，`.extract()` 会将 `file1.py` 提取到当前目录。

下一行打印一个目录列表，显示当前目录现在包括除原始存档文件之外的存档文件。 之后显示了如何将整个存档提取到指定目录中。`.extractall()` 创建 `extract_dir` 并将 `data.zip` 的内容提取到其中。 最后一行关闭ZIP存档文件。

## 从加密的文档提取数据

`zipfile` 支持提取受密码保护的ZIP。 要提取受密码保护的ZIP文件，请将密码作为参数传递给 `.extract()` 或`.extractall()` 方法：

```python
>>> import zipfile

>>> with zipfile.ZipFile('secret.zip', 'r') as pwd_zip:
...     # 从加密的文档提取数据
...     pwd_zip.extractall(path='extract_dir', pwd='Quish3@o')
```

将以读取模式打开 `secret.zip` 存档。 密码提供给 `.extractall()` ，并且压缩文件内容被提取到 `extract_dir` 。 由于with语句，在完成提取后，存档文件会自动关闭。

## 创建新的存档文件

要创建新的ZIP存档，请以写入模式（w）打开 `ZipFile` 对象并添加要归档的文件：

```python
>>> import zipfile

>>> file_list = ['file1.py', 'sub_dir/', 'sub_dir/bar.py', 'sub_dir/foo.py']
>>> with zipfile.ZipFile('new.zip', 'w') as new_zip:
...     for name in file_list:
...         new_zip.write(name)
```

在该示例中，`new_zip` 以写入模式打开，`file_list` 中的每个文件都添加到存档文件中。 with语句结束后，将关闭 `new_zip` 。 以写入模式打开ZIP文件会删除压缩文件的内容并创建新存档文件。

要将文件添加到现有的存档文件，请以追加模式打开 `ZipFile` 对象，然后添加文件：

```python
>>> with zipfile.ZipFile('new.zip', 'a') as new_zip:
...     new_zip.write('data.txt')
...     new_zip.write('latin.txt')
```

这里打开在上一个示例中以追加模式创建的 `new.zip` 存档。 在追加模式下打开 `ZipFile` 对象允许将新文件添加到ZIP文件而不删除其当前内容。 将文件添加到ZIP文件后，with语句将脱离上下文并关闭ZIP文件。

## 打开TAR存档文件

TAR文件是像ZIP等未压缩的文件存档。 它们可以使用 `gzip`，`bzip2` 和 `lzma` 压缩方法进行压缩。 `TarFile` 类允许读取和写入TAR存档。

下面是从存档中读取：

```python
import tarfile

with tarfile.open('example.tar', 'r') as tar_file:
    print(tar_file.getnames())
```

`tarfile` 对象像大多数类似文件的对象一样打开。 它们有一个 `open()` 函数，它采用一种模式来确定文件的打开方式。

使用“r”，“w”或“a”模式分别打开未压缩的TAR文件以进行读取，写入和追加。 要打开压缩的TAR文件，请将模式参数传递给 `tarfile.open()`，其格式为 `filemode [:compression]` 。 下表列出了可以打开TAR文件的可能模式：

| 模式  | 行为                          | | ----- |  ----------------------------- | | r     | 以无压缩的读取模式打开存档    | | r:gz  |  以gzip压缩的读取模式打开存档  | | r:bz2 | 以bzip2压缩的读取模式打开存档 | | w     |  以无压缩的写入模式打开存档    | | w:gz  | 以gzip压缩的写入模式打开存档  | | w:xz  |  以lzma压缩的写入模式打开存档  | | a     | 以无压缩的追加模式打开存档    |

`.open()` 默认为'r'模式。 要读取未压缩的TAR文件并检索其中的文件名，请使用 `.getnames()` ：

```python
>>> import tarfile

>>> tar = tarfile.open('example.tar', mode='r')
>>> tar.getnames()
['CONTRIBUTING.rst', 'README.md', 'app.py']
```

这以列表的方式返回存档中内容的名字。

>  注意：为了向你展示如何使用不同的tarfile对象方法，示例中的TAR文件在交互式REPL会话中手动打开和关闭。
>  通过这种方式与TAR文件交互，你可以查看运行每个命令的输出。 通常，你可能希望使用上下文管理器来打开类似文件的对象。
>  

此外可以使用特殊属性访问存档中每个条目的元数据：

```python
>>> for entry in tar.getmembers():
...     print(entry.name)
...     print(' Modified:', time.ctime(entry.mtime))
...     print(' Size    :', entry.size, 'bytes')
...     print()
CONTRIBUTING.rst
 Modified: Sat Nov  1 09:09:51 2018
 Size    : 402 bytes

README.md
 Modified: Sat Nov  3 07:29:40 2018
 Size    : 5426 bytes

app.py
 Modified: Sat Nov  3 07:29:13 2018
 Size    : 6218 bytes
```

在此示例中，循环遍历 `.getmembers()` 返回的文件列表，并打印出每个文件的属性。`.getmembers()` 返回的对象具有可以通过编程方式访问的属性，例如归档中每个文件的名称，大小和上次修改时间。 在读取或写入存档后，必须关闭它以释放系统资源。

## 从TAR存档中提取文件

在本节中，你将学习如何使用以下方法从TAR存档中提取文件：

- `.extract()`
- `.extractfile()`
- `.extractall()`

要从TAR存档中提取单个文件，请使用 `extract()` ，传入文件名：

```python
>>> tar.extract('README.md')
>>> os.listdir('.')
['README.md', 'example.tar']
```

`README.md` 文件从存档中提取到文件系统。 调用 `os.listdir()` 确认 `README.md` 文件已成功提取到当前目录中。 要从存档中解压缩或提取所有内容，请使用 `.extractall()` ：

```python
>>> tar.extractall(path="extracted/")
```

`.extractall()` 有一个可选的 `path` 参数来指定解压缩文件的去向。 这里，存档被提取到 `extracted` 目录中。 以下命令显示已成功提取存档：

```text
$ ls
example.tar  extracted  README.md

$ tree
.
├── example.tar
├── extracted
|   ├── app.py
|   ├── CONTRIBUTING.rst
|   └── README.md
└── README.md

1 directory, 5 files

$ ls extracted/
app.py  CONTRIBUTING.rst  README.md
```

要提取文件对象以进行读取或写入，请使用 `.extractfile()` ，它接收 文件名或 `TarInfo` 对象作为参数。 `.extractfile()` 返回一个可以读取和使用的类文件对象：

```python
>>> f = tar.extractfile('app.py')
>>> f.read()
>>> tar.close()
```

打开的存档应在读取或写入后始终关闭。 要关闭存档，请在存档文件句柄上调用 `.close()` ，或在创建 `tarfile`对象时使用with语句，以便在完成后自动关闭存档。 这将释放系统资源，并将你对存档所做的任何更改写入文件系统。

## 创建新的TAR存档

创建新的TAR存档，你可以这样操作:

```python
>>> import tarfile

>>> file_list = ['app.py', 'config.py', 'CONTRIBUTORS.md', 'tests.py']
>>> with tarfile.open('packages.tar', mode='w') as tar:
...     for file in file_list:
...         tar.add(file)

>>> # Read the contents of the newly created archive
>>> with tarfile.open('package.tar', mode='r') as t:
...     for member in t.getmembers():
...         print(member.name)
app.py
config.py
CONTRIBUTORS.md
tests.py
```

首先，你要创建要添加到存档的文件列表，这样你就不必手动添加每个文件。

下一行使用with光线文管理器在写入模式下打开名为 `packages.tar` 的新存档。 以写入模式（'w'）打开存档使你可以将新文件写入存档。 将删除存档中的所有现有文件，并创建新存档。

创建并填充存档后，with上下文管理器会自动关闭它并将其保存到文件系统。 最后三行打开刚刚创建的存档，并打印出其中包含的文件的名称。

要将新文件添加到现有存档，请以追加模式（'a'）打开存档：

```python
>>> with tarfile.open('package.tar', mode='a') as tar:
...     tar.add('foo.bar')

>>> with tarfile.open('package.tar', mode='r') as tar:
...     for member in tar.getmembers():
...         print(member.name)
app.py
config.py
CONTRIBUTORS.md
tests.py
foo.bar
```

在追加模式下打开存档允许你向其添加新文件而不删除其中已存在的文件。

## 使用压缩存档

`tarfile` 可以读取和写入使用 `gzip`，`bzip2` 和 `lzma` 压缩的TAR存档文件。 要读取或写入压缩存档，请使用`tarfile.open()` ，为压缩类型传递适当的模式。

例如，要读取或写入使用 `gzip` 压缩的TAR存档的数据，请分别使用 `'r:gz'` 或 `'w:gz'` 模式：

```python
>>> files = ['app.py', 'config.py', 'tests.py']
>>> with tarfile.open('packages.tar.gz', mode='w:gz') as tar:
...     tar.add('app.py')
...     tar.add('config.py')
...     tar.add('tests.py')

>>> with tarfile.open('packages.tar.gz', mode='r:gz') as t:
...     for member in t.getmembers():
...         print(member.name)
app.py
config.py
tests.py
```

`'w:gz'` 以写模式模式打开 `gzip` 压缩的存档，`'r:gz'` 以读模式打开 `gzip` 压缩的存档。 无法在追加模式下打开压缩存档。 要将文件添加到压缩存档，你必须创建新存档。

------

## 一个更简单的方式创建存档

Python标准库还支持使用 `shutil` 模块中的高级方法创建TAR和ZIP存档。 `shutil` 中的归档实用工具允许你创建，读取和提取ZIP和TAR归档。 这些实用工具依赖于较底层的 `tarfile` 和 `zipfile` 模块。

## 使用 **shutil.make_archive()** 创建存档

`shutil.make_archive()` 至少接收两个参数：归档的名称和归档格式。

默认情况下，它将当前目录中的所有文件压缩为 `format` 参数中指定的归档格式。 你可以传入可选的 `root_dir` 参数来压缩不同目录中的文件。 `.make_archive()` 支持 `zip` ，`tar` ，`bztar` 和 `gztar` 存档格式。

以下是使用 `shutil` 创建TAR存档的方法：

```python
import shutil

# shutil.make_archive(base_name, format, root_dir)
shutil.make_archive('data/backup', 'tar', 'data/')
```

这将复制 `data /` 中的所有内容，并在文件系统中创建名为 `backup.tar` 的存档并返回其名称。 要提取存档，请调用 `.unpack_archive()` ：

```python
shutil.unpack_archive('backup.tar', 'extract_dir/')
```

调用 `.unpack_archive()` 并传入存档名称和目标目录，将 `backup.tar` 的内容提取到 `extract_dir/` 中。 ZIP存档可以以相同的方式创建和提取。

------

## 读取多个文件

Python支持通过 `fileinput` 模块从多个输入流或文件列表中读取数据。 此模块允许你快速轻松地循环遍历一个或多个文本文件的内容。 以下是使用 `fileinput` 的典型方法：

```python
import fileinput
for line in fileinput.input()
    process(line)
```

`fileinput` 默认从传递给 `sys.argv` 的命令行参数获取其输入。

## 使用 **fileinput** 循环遍历多个文件

让我们使用 `fileinput` 构建一个普通的UNIX工具 `cat` 的原始版本。 `cat` 工具按顺序读取文件，将它们写入标准输出。 当在命令行参数中给出多个文件时，`cat` 将连接文本文件并在终端中显示结果：

```python
# File: fileinput-example.py
import fileinput
import sys

files = fileinput.input()
for line in files:
    if fileinput.isfirstline():
        print(f'\n--- Reading {fileinput.filename()} ---')
    print(' -> ' + line, end='')
print()
```

在当前目录中有两个文本文件，运行此命令会产生以下输出：

```text
$ python3 fileinput-example.py bacon.txt cupcake.txt
--- Reading bacon.txt ---
 -> Spicy jalapeno bacon ipsum dolor amet in in aute est qui enim aliquip,
 -> irure cillum drumstick elit.
 -> Doner jowl shank ea exercitation landjaeger incididunt ut porchetta.
 -> Tenderloin bacon aliquip cupidatat chicken chuck quis anim et swine.
 -> Tri-tip doner kevin cillum ham veniam cow hamburger.
 -> Turkey pork loin cupidatat filet mignon capicola brisket cupim ad in.
 -> Ball tip dolor do magna laboris nisi pancetta nostrud doner.

--- Reading cupcake.txt ---
 -> Cupcake ipsum dolor sit amet candy I love cheesecake fruitcake.
 -> Topping muffin cotton candy.
 -> Gummies macaroon jujubes jelly beans marzipan.
```

`fileinput` 允许你检索有关每一行的更多信息，例如它是否是第一行(.isfirstline())，行号(.lineno())和文件名(.filename())。 你可以在 [这里](https://docs.python.org/3/library/fileinput.html) 读更多关于它的内容。

------

## 总结

你现在知道如何使用Python对文件和文件组执行最常见的操作。 你已经了解使用不同的内置模块来读取，查找和操作文件。

你现在可以用Python来实现:

- 获取目录内容和文件属性
- 创建目录和目录树
- 使用匹配模式匹配文件名
- 创建临时文件和目录
- 移动，重命名，复制和删除文件或目录
- 从不同类型的存档文件中读取和提取数据
- 使用 *fileinput* 同时读取多个文件

## 类和对象

### 面向对象编程

#### 类与对象的理解与封装特性

```python
面向对象编程语言
   - 类: 一个模板, (人类)---是一个抽象的， 没有实体的
   - 对象: (eg: 张三， 李四)
   - 属性: (表示这类东西的特征, 眼睛， 嘴巴， 鼻子)
   - 方法： (表示这类物体可以做的事情， eg: 吃饭， 睡觉，学习)
```

### 类

#### 特点

在面向对象的程序设计过程中有两个重要概念：类（class）和对象（object，也被称为实例，instance），其中类是某一批对象的抽象，对象才是具体存在的实体。
python定义类的简单语法如下：

```python
class 类名：
    执行语句...
    零个或多个类变量...
    零个或多个方法...
```

程序的可读性来看，**python的类名必须是由一个或多个有意义的单词连缀而成，每个单词首字母大写，其他字母全部小写，单词与单词之间不要使用任何分隔符。**
python的类定义有点像函数定义，都是以冒号（:）作为类体的开始，以统一缩进的部分作为类体的。区别只是 函数定义使用def关键字，而类定义则使用class关键字。
python的类定义由类头（指class关键字和类名部分）和统一缩进的类体组成，在类体中最主要的两个成员就是类变量和方法。如果不为类定义任何变量和方法，那么这个类就相当于一个空类，如果空类不需要其他可执行语句，则可使用pass语句作为占位符。示例：

#### 创建类

```python
class Empty
    pass
```

Python类所包含的最重要的两个成员就是变量和方法，其中类变量属于类本身，用于定义该类本身所包含的状态数据；而实例变量则属于该类的对象，用于定义对象所包含的状态数据；方法则用于定义该类的对象的行为或功能实现。
在类中定义的方法默认是实例方法，定义实例方法的方法与定义函数的方法基本相同，只是实例方法的第一个参数会被绑定到方法的调用者（该类的实例） --- 因此实例方法至少应该定义一个参数，该参数通常会被命名为self。
**注意：**
实例方法的第一个参数并不一定要叫self，其实完全可以叫任意参数名，只是约定俗称地把该参数命名为self，这样具有更好的可读性。
在实例方法中有一个特别的方法：**init**，这个方法被称为构造方法。构造方法用于构造该类的对象，python通过调用构造方法返回该类的对象（无须使用new）
构造方法是一个类创建对象的根本途径，如果开发者没有为该类定义任何构造方法，那么python会自动为该类定义一个只包含一个self参数的默认的构造方法。

#### 创建对象

```python
class Person :
    '这是一个学习Python定义的一个Person类'
    # 下面定义了一个类变量
    hair = 'black'
    def __init__(self, name = 'Charlie', age=8):
        # 下面为Person对象增加2个实例变量
        self.name = name
        self.age = age
    # 下面定义了一个say方法
    def say(self, content):
        print(content)
help(Person)
```

上面的Person类定义了一个构造方法，该构造方法只是方法名比较特殊：**init**，该方法的第一个参数同样是self，被绑定到构造方法初始化的对象。
Python也允许为类定义说明文档，该文档同样被放在类声明之后、类体之前，如上面所示。
python的类大致有如下作用：

- 定义变量
- 创建对象
- 派生子类

### __init__() 函数

上面的例子是最简单形式的类和对象，在实际应用程序中并不真正有用。

要理解类的含义，我们必须先了解内置的 `__init__()` 函数。

所有类都有一个名为 __init__() 的函数，它始终在启动类时执行。

使用 __init__() 函数将值赋给对象属性，或者在创建对象时需要执行的其他操作：

```python
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("Bill", 63)

print(p1.name)
print(p1.age)
```

### self 参数

`self` 参数是对类的当前实例的引用，用于访问属于该类的变量。

它不必被命名为 `self`，您可以随意调用它，但它必须是类中任意函数的*首个参数*：

```python
class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("Bill", 63)
p1.myfunc()
```

创建类

```python
class Dog():
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def sit(self):#模拟小狗被命令时蹲下
        print(self.name.title() +"is now sitting.")
    def roll_over(self):#模拟小狗被命令时打滚
        print(self.name.title()+"rolled over!")
```

创建实例

```python
class Dog():
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def sit(self):#模拟小狗被命令时蹲下
        print(self.name.title() +"is now sitting.")
    def roll_over(self):#模拟小狗被命令时打滚
        print(self.name.title()+"rolled over!")

my_dog=Dog('willie',6)
print("My dog's name is"+my_dog.name.title()+".")
print("My dog is"+str(my_dog.age)+"year old.")
####
My dog's name isWillie.
My dog is 6 year old.
```

调用方法

```python
my_dog=Dog('willie',6)
your_dog=Dog('lucy',3)
print("My dog's name is"+my_dog.name.title()+".")
print("My dog is "+str(my_dog.age)+" year old.")
my_dog.sit()
my_dog.roll_over()
print("\nYour dog's name is "+your_dog.name.title()+".")
print("Your dog is "+str(your_dog.age)+"years old.")
your_dog.sit()
```



### 对象的产生和使用

创建对象的根本途径是构造方法，调用某个类的构造方法即可创建这个类的对象。python无须使用new调用构造方法。

```python
# 调用Person类的构造方法，返回一个Person对象
# 将该Person对象赋给p变量
p = Person()
```

在创建对象之后，接下来就可使用该对象了。python的对象大致有如下作用：

- 操作对象的实例变量（包括访问实例变量的值、添加实例变量、删除实例变量）
- 调用对象的方法

对象访问变量或方法的语法是：对象.变量|方法（参数）。在这种方式中，对象是主调者，用于访问该对象的变量或方法。

```python
class Person :
    '这是一个学习Python定义的一个Person类'
    # 下面定义了一个类变量
    hair = 'black'
    def __init__(self, name = 'Charlie', age=8):
        # 下面为Person对象增加2个实例变量
        self.name = name
        self.age = age
    # 下面定义了一个say方法
    def say(self, content):
        print(content)
help(Person)
# 调用Person类的构造方法，返回一个Person对象
# 将该Person对象赋给p变量
p = Person()
# 输出p的name、age实例变量
print(p.name, p.age)  # Charlie 8
# 访问p的name实例变量，直接为该实例变量赋值
p.name = '李刚'
# 调用p的say()方法，声明say()方法时定义了2个形参
# 但第一个形参（self）是自动绑定的，因此调用该方法只需为第二个形参指定一个值
p.say('Python语言很简单，学习很容易！')
# 再次输出p的name、age实例变量
print(p.name, p.age)  # 李刚 8

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name,"my year is "+str(self.age))

p1 = Person("Bill", 63)
p1.myfunc()
```

类和实例

```python
class Car():
    def __init__(self,make,model,year):
        self.make=make
        self.model=model
        self.year=year
    def get_descriptive_name(self):
        long_name=str(self.year)+' '+self.make+' '+self.model
        return long_name.title()
my_new_car=Car('audi','a4',2016)
print(my_new_car.get_descriptive_name())
```

默认值





## 异常

### 异常类型

#### Python内置异常

Python的异常处理能力是很强大的，它有很多内置异常，可向用户准确反馈出错信息。在Python中，异常也是对象，可对它进行操作。BaseException是所有内置异常的基类，但用户定义的类并不直接继承BaseException，所有的异常类都是从Exception继承，且都在exceptions模块中定义。Python自动将所有异常名称放在内建命名空间中，所以程序不必导入exceptions模块即可使用异常。一旦引发而且没有捕捉SystemExit异常，程序执行就会终止。如果交互式会话遇到一个未被捕捉的SystemExit异常，会话就会终止。

内置异常类的层次结构如下：



requests模块的相关异常

在做爬虫时，requests是一个十分好用的模块，所以我们在这里专门探讨一下requests模块相关的异常。

要调用requests模块的内置异常，只要“*from requests.exceptions import xxx*”就可以了，比如：

```python
from requests.exceptions import ConnectionError, ReadTimeout
```

或者直接这样也是可以的：

```python
from requests import ConnectionError, ReadTimeout
```

```python

import requests
from requests import ReadTimeout
 
 
def get_page(url):
	try:
		response = requests.get(url, timeout=1)
		if response.status_code == 200:
			return response.text
		else:
			print('Get Page Failed', response.status_code)
			return None
	except (ConnectionError, ReadTimeout):
		print('Crawling Failed', url)
		return None
 
 
def main():
	url = 'https://www.baidu.com'
	print(get_page(url))
 
 
if __name__ == '__main__':
	main()

```



用户自定义异常
此外，你也可以通过创建一个新的异常类拥有自己的异常，异常应该是通过直接或间接的方式继承自Exception类。下面创建了一个MyError类，基类为Exception，用于在异常触发时输出更多的信息。

　　在try语句块中，抛出用户自定义的异常后执行except部分，变量 e 是用于创建MyError类的实例。

```python
class MyError(Exception):
	def __init__(self, msg):
		self.msg = msg
	
	def __str__(self):
		return self.msg
 
 
try:
	raise MyError('类型错误')
except MyError as e:
	print('My exception occurred', e.msg)

```



异常捕获
当发生异常时，我们就需要对异常进行捕获，然后进行相应的处理。python的异常捕获常用try...except...结构，把可能发生错误的语句放在try模块里，用except来处理异常，每一个try，都必须至少对应一个except。此外，与python异常相关的关键字主要有：

| 关键字     | 关键字说明                                      |
| :--------- | :---------------------------------------------- |
| try/except | 捕获异常并处理                                  |
| pass       | 忽略异常                                        |
| as         | 定义异常实例（except MyError as e）             |
| else       | 如果try中的语句没有引发异常，则执行else中的语句 |
| finally    | 无论是否出现异常，都执行的代码                  |
| raise      | 抛出/引发异常                                   |



## 捕获所有异常

包括键盘中断和程序退出请求（**用sys.exit()就无法退出程序了，因为异常被捕获了**），因此慎用。

```python
try:
     <语句>
 
except:
 
      print('异常说明')
 
```

# Python中的四种组合数据类型区别与定义

## 一、列表：

### 1.列表的定义：

可以存储多个可以重复的有顺序的数据！

### 2.列表的声明：

列表名称 = list（）#创建了一个空列表
列表名称 = [ ] #创建了一个空列表

**中括号[ ]：**代表list列表数据类型，列表是一种可变的序列：

List=[1,2,3,4,5,6,7,8,9,10]

## 二、元组：

### 1.元组的定义：

tuple，可以存放一组有顺序的可以重复的不可改变的数据！（有顺序 可重复 但不可改变 且不能增加或者修改，，只可以删除和查询 ！！）
就是一种简化的列表

### 2.元组的声明：

t1 = tuple() 声明空元组
t2 = () 声明空元组
t3 = (1,2,3,4,5) 声明包含元素的元组
t4 = (“h”) t4 = (“h”,) 如果只有一个元素，添加一个逗号分隔
t5 = (1) t5 = (1,) 如果只有一个元素，添加一个逗号分隔

**小括号( )：**代表tuple元组数据类型，元组是一种不可变序列：

tup = (1,2,3)

## 三、 集合：

### 1.集合的定义：

通过哈希(hash)算法在一个容器中存放多个没有顺序的不可以重复的数据 通过hash算法让添加的数据不重复[剔重]！
（ 无顺序，不重复 可改变！）

### 2.集合的声明：

s1 = set() <class ‘set’>
s2 = {“a”} <class ‘set’>

## 四、字典：

### 1.字典的定义：

可以存储多个key:value 键值对数据的组合数据类型

### 2.字典的声明：

d1 = dict() # 空字典
d2 = {} # 空字典

**大括号{ }：**代表dict字典数据类型，字典是由键对值组组成。冒号':'分开键和值，逗号','隔开组。用大括号创建的方法如下：

dic={'jon':'boy','lili':'girl'}

**Python** **数据类型**：

  　　1. 字符串

        　　2. 数字

              　　3. 列表

                    　　4. 字典

          　　5. 元组

**一**. **可变与不可变类型**

　　可变：    - 列表 / 字典 / 集合

　　　　修改值，id不变

　　不可变：  - 字符串 / 元组 / 数字

　　　　修改值，id变化

**二**. **访问顺序**

  　　1. 顺序访问：字符串，列表，元组

        　　2. 映射访问：字典

              　　3. 直接访问：数字

**三**. **存放元素个数**

  　　1. 容器类型：列表，元组，字典

        　　2. 原子类型(只能存放一个值)：数字，字符串

 

**set集合与dict字典的异同点**：

　　区别：set没有对应的value值

　　相同点：

   　　　　1. 都没有索引，不能进行切片和索引操作

          2. 都是可变类型

**set集合与list的异同点**：

　　相同点：都是可变类型

　　区别：

   　　　　1. set集合是无序且元素唯一

          2. set获取元素只能通过for循环，因为set是无序的，且没有索引

                　　　　3. list列表是有序的，且元素不唯一，可根据索引进行切片操作

**list列表和dict字典的异同点**：

　　相同点：可变类型，可迭代

　　区别：

   　　　　1. dict字典的key必须是不可变对象

          2. dict字典需要的存储空间大于list列表

                　　　　3. 字典查询效率高于列表

**tuple元组和list列表的异同点**：

　　相同点：可迭代

　　区别：

   　　　　1. tuple对象创建后就不可变

          2. 创建对象的方式不同：list = [“元素”] tuple=(“元素”,)

**tuple元组，字符串，数字**：

  　　1. 不可变类型（可哈希），不可以进行更改元素

        　　2. 元组可以包含可变类型

## 五、字符串

一、使用 % 符号来进行格式化
格式符为真实值预留位置，并控制显示的格式。格式符可以包含有一个类型码，用以控制显示的类型，如下:

```
%s    字符串 (采用str()的显示)

%r    字符串 (采用repr()的显示)

%c    单个字符

%b    二进制整数

%d    十进制整数

%i    十进制整数

%o    八进制整数

%x    十六进制整数

%e    指数 (基底写为e)

%E    指数 (基底写为E)

%f    浮点数

%F    浮点数，与上相同

%g    指数(e)或浮点数 (根据显示长度)

%G    指数(E)或浮点数 (根据显示长度)

%%    字符"%"，显示百分号%
```

另外，比如我要固定字符的宽度，小数精度等，可以用如下的方式，对格式进行进一步的控制：

```
%[(name)][flags][width].[precision] typecode

（1）(name)为命名：即参数的名称，可以没有这个，怎么使用呢？注意（name需要使用括号括起来哦！！！）
（2）flags可以有+,-,' '或0。+表示右对齐。-表示左对齐。' '为一个空格，表示在正数的左侧填充一个空格，从而与负数对齐。0表示左侧使用0填充。

（3）width表示显示宽度

（4）precision表示小数点后精度
```

### 二、使用.format的格式

字符串类型格式化采用format()方法，基本使用格式是：

>    **<模板字符串>.format(<逗号分隔的参数>)**

2. 1 格式控制信息

format()方法中<模板字符串>的槽除了包括参数序号，还可以包括格式控制信息。此时，槽的内部样式如下：

{<参数序号>: <格式控制标记>}   # 中间使用了一个冒号哦！

其中，<格式控制标记>用来控制参数显示时的格式，包括：<填充><对齐><宽度><,><.精度><类型>6 个字段，这些字段都是可选的，可以组合使用，逐一介绍如下。
（1）<填充>
指<宽度>内除了参数外的字符采用什么方式表示，默认采用空格，可以通过<填充>更换。

（2）<对齐>
指参数在<宽度>内输出时的对齐方式，分别使用<、>和^三个符号表示左对齐、右对齐和居中对齐。

（3）<宽度>
指当前槽的设定输出字符宽度，如果该槽对应的format()参数长度比<宽度>设定值大，则使用参数实际长度。如果该值的实际位数小于指定宽度，则位数将被默认以空格字符补充。

| :        | <填充>             | <对齐>                  | <宽度>           | <,>                                | <精度>                                     | <类型>                               |
| -------- | ------------------ | ----------------------- | ---------------- | ---------------------------------- | ------------------------------------------ | ------------------------------------ |
| 引导符号 | 用于填充的单个字符 | <左对齐>右对齐^居中对齐 | 槽的设定输出宽度 | 数字的千位分隔符适用于整数和浮点数 | 浮点数小数部分的精度或字符串的最大输出长度 | 整数类型b,c,d,o,x,X浮点数类型e,E,f,% |

**（1）<填充>**
 指<宽度>内除了参数外的字符采用什么方式表示，默认采用空格，可以通过<填充>更换。

**（2）<对齐>**
 指参数在<宽度>内输出时的对齐方式，分别使用<、>和^三个符号表示左对齐、右对齐和居中对齐。

**（3）<宽度>**
 指当前槽的设定输出字符宽度，如果该槽对应的format()参数长度比<宽度>设定值大，则使用参数实际长度。如果该值的实际位数小于指定宽度，则位数将被默认以空格字符补充。

```python
s = "PYTHON"



 



"{0:30}".format(s)



Out[17]: 'PYTHON                        '



 



"{0:>30}".format(s)



Out[18]: '                        PYTHON'



 



"{0:*^30}".format(s)



Out[19]: '************PYTHON************'



 



"{0:-^30}".format(s)



Out[20]: '------------PYTHON------------'



 



"{0:3}".format(s)



Out[21]: 'PYTHON'
```

**（4）逗号（，）**
 <格式控制标记>中逗号（，）用于显示数字的千位分隔符，例如：

```python
"{0:-^20,}".format(1234567890)



Out[24]: '---1,234,567,890----'



 



"{0:-^20}".format(1234567890) #对比输出



Out[25]: '-----1234567890-----'



 



"{0:-^20,}".format(12345.67890)



Out[26]: '----12,345.6789-----'
```

 **（5）<.精度>  # 注意：前面有一个小数点哦！**
 表示两个含义，由小数点（.）开头。对于浮点数，精度表示小数部分输出的有效位数。对于字符串，精度表示输出的最大长度。

```python
"{0:.2f}".format(12345.67890)



Out[29]: '12345.68'



 



"{0:H^20.3f}".format(12345.67890)



Out[30]: 'HHHHH12345.679HHHHHH'



 



"{0:.4}".format("PYTHON")



Out[31]: 'PYTH'
```

**6）<类型>**
 表示输出整数和浮点数类型的格式规则。对于整数类型，输出格式包括6 种：

> b: 输出整数的二进制方式；
>  c: 输出整数对应的 Unicode 字符；
>  d: 输出整数的十进制方式；
>  o: 输出整数的八进制方式；
>  x: 输出整数的小写十六进制方式；
>  X: 输出整数的大写十六进制方式；

```python
"{0:b},{0:c},{0:d},{0:o},{0:x},{0:X}".format(425)



Out[32]: '110101001,Ʃ,425,651,1a9,1A9'
```

> 对于浮点数类型，输出格式包括4 种：
>  e: 输出浮点数对应的小写字母 e 的指数形式；
>  E: 输出浮点数对应的大写字母 E 的指数形式；
>  f: 输出浮点数的标准浮点形式；
>  %: 输出浮点数的百分形式。
>     浮点数输出时尽量使用<.精度>表示小数部分的宽度，有助于更好控制输出格式。

```python
"{0:e},{0:E},{0:f},{0:%}".format(3.14)



Out[33]: '3.140000e+00,3.140000E+00,3.140000,314.000000%'



 



"{0:.2e},{0:.2E},{0:.2f},{0:.2%}".format(3.14)



Out[34]: '3.14e+00,3.14E+00,3.14,314.00%'
```

##  三、f-string来格式化字符串——python3.6以上

f-string采用 **`{content:format}`** 设置字符串格式，其中 `content` 是替换并填入字符串的内容，可以是变量、表达式或函数等，`format` 是格式描述符。采用默认格式时不必指定 `{:format}`，如上面例子所示只写 `{content}` 即可。

关于格式描述符的详细语法及含义可查阅[Python官方文档](https://docs.python.org/3/library/string.html)，这里按使用时的先后顺序简要介绍常用格式描述符的含义与作用：

关于这个format的格式，我们依然使用前面的方法二种format来格式化字符串的顺序来说明，也是按照下面这6个主要方面：

> **<填充><对齐><宽度><,><.精度><类型>6 个字段，但是还有所拓展**

> ```html
> format_spec  格式：   [[fill]align][sign][#][0][width][grouping_option][.precision][type]
> 
> 
> 
> 即format一般的格式为
> 
> 
> 
> [填充字符][对齐方式][数字的正负号显示][#][0][宽度][千分位分组符号][.小数精度][类型]
> 
> 
> 
>  
> 
> 
> 
> （1）填充 fill ：     可以是任何的字符
> 
> 
> 
> （2）对齐 align：     "<" | ">" | "=" | "^"
> 
> 
> 
> （3）符号 sign ：     这个仅仅对数值有效 "+" | "-" | " "
> 
> 
> 
> （4）宽度 width：     是一个整数数值，表示多少宽度
> 
> 
> 
> （5）grouping_option：表示千分位的分隔符号，可以是  "_" | ","
> 
> 
> 
> （6）精度 precision ： .数字 
> 
> 
> 
> （7）类型 type ：     "b" | "c" | "d" | "e" | "E" | "f" | "F" | "g" | "G" | "n" | "o" | "s" | "x" | "X" | "%"
> ```

下面是一些详细说明

**（2）对齐align**

| 对其align | 含义与作用                   |
| --------- | ---------------------------- |
| <         | 左对齐（字符串默认对齐方式） |
| >         | 右对齐（数值默认对齐方式）   |
| ^         | 居中                         |

**（3）符号sign**

| 数字符号sign | 含义与作用                                    |
| ------------ | --------------------------------------------- |
| +            | 负数前加负号（-），正数前加正号（+）          |
| -            | 负数前加负号（-），正数前不加任何符号（默认） |
| （空格）     | 负数前加负号（-），正数前加一个空格           |

注：仅适用于数值类型。

**（4）# 符号说明**

| # 描述符格式描述符 | 含义与作用       |
| ------------------ | ---------------- |
| #                  | 切换数字显示方式 |

注1：仅适用于数值类型。

注2：`#` 对不同数值类型的作用效果不同，详见下表：

| 数值类型                 | 不加`#`（默认） | 加`#`         | 区别              |
| ------------------------ | --------------- | ------------- | ----------------- |
| 二进制整数               | `'1111011'`     | `'0b1111011'` | 开头是否显示 `0b` |
| 八进制整数               | `'173'`         | `'0o173'`     | 开头是否显示 `0o` |
| 十进制整数               | `'123'`         | `'123'`       | 无区别            |
| 十六进制整数（小写字母） | `'7b'`          | `'0x7b'`      | 开头是否显示 `0x` |
| 十六进制整数（大写字母） | `'7B'`          | `'0X7B'`      | 开头是否显示 `0X` |

**（5）宽度与精度**

**宽度与精度**相关格式描述符

| 格式描述符        | 含义与作用                                                |
| ----------------- | --------------------------------------------------------- |
| `width`           | 整数 `width` 指定宽度                                     |
| `0width`          | 整数 `width` 指定宽度，开头的 `0` 指定高位用 `0` 补足宽度 |
| `width.precision` | 整数 `width` 指定宽度，整数 `precision` 指定显示精度      |

注1：`0width` 不可用于复数类型和非数值类型，`width.precision` 不可用于整数类型。
 注2：`width.precision` 用于不同格式类型的浮点数、复数时的含义也不同：用于 `f`、`F`、`e`、`E` 和 `%` 时 `precision` 指定的是小数点后的位数，用于 `g` 和 `G` 时 `precision` 指定的是有效数字位数（小数点前位数+小数点后位数）。
 注3：`width.precision` 除浮点数、复数外还可用于字符串，此时 `precision` 含义是只使用字符串中前 `precision` 位字符。

**（6）千位分隔符相关格式描述符**

| 格式描述符 | 含义与作用          |
| ---------- | ------------------- |
| ,          | 使用,作为千位分隔符 |
| _          | 使用_作为千位分隔符 |

注1：若不指定 `,` 或 `_`，则f-string不使用任何千位分隔符，此为默认设置。
 注2：`,` 仅适用于浮点数、复数与十进制整数：对于浮点数和复数，`,` 只分隔小数点前的数位。
 注3：`_` 适用于浮点数、复数与二、八、十、十六进制整数：对于浮点数和复数，`_` 只分隔小数点前的数位；对于二、八、十六进制整数，固定从低位到高位每隔四位插入一个 `_`（十进制整数是每隔三位插入一个 `_`）。

**（7）类型描述**

| 格式描述符 | 含义与作用                                                  | 适用变量类型                           |
| ---------- | ----------------------------------------------------------- | -------------------------------------- |
| `s`        | 普通字符串格式                                              | 字符串                                 |
| `b`        | 二进制整数格式                                              | 整数                                   |
| `c`        | 字符格式，按unicode编码将整数转换为对应字符                 | 整数                                   |
| `d`        | 十进制整数格式                                              | 整数                                   |
| `o`        | 八进制整数格式                                              | 整数                                   |
| `x`        | 十六进制整数格式（小写字母）                                | 整数                                   |
| `X`        | 十六进制整数格式（大写字母）                                | 整数                                   |
| `e`        | 科学计数格式，以 `e` 表示 `×10^`                            | 浮点数、复数、整数（自动转换为浮点数） |
| `E`        | 与 `e` 等价，但以 `E` 表示 `×10^`                           | 浮点数、复数、整数（自动转换为浮点数） |
| `f`        | 定点数格式，默认精度（`precision`）是6                      | 浮点数、复数、整数（自动转换为浮点数） |
| `F`        | 与 `f` 等价，但将 `nan` 和 `inf` 换成 `NAN` 和 `INF`        | 浮点数、复数、整数（自动转换为浮点数） |
| `g`        | 通用格式，小数用 `f`，大数用 `e`                            | 浮点数、复数、整数（自动转换为浮点数） |
| `G`        | 与 `G` 等价，但小数用 `F`，大数用 `E`                       | 浮点数、复数、整数（自动转换为浮点数） |
| `%`        | 百分比格式，数字自动乘上100后按 `f` 格式排版，并加 `%` 后缀 | 浮点数、整数（自动转换为浮点数）       |

常用的特殊格式类型：[标准库 `datetime`](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior) 给定的用于排版时间信息的格式类型，适用于 [`date`](https://docs.python.org/3/library/datetime.html#date-objects)、[`datetime`](https://docs.python.org/3/library/datetime.html#datetime-objects) 和 [`time`](https://docs.python.org/3/library/datetime.html#time-objects) 对象

| 格式描述符 | 含义                                                         | 显示样例   |
| ---------- | ------------------------------------------------------------ | ---------- |
| `%a`       | 星期几（缩写）                                               | `'Sun'`    |
| `%A`       | 星期几（全名）                                               | `'Sunday'` |
| `%w`       | 星期几（数字，`0` 是周日，`6` 是周六）                       | `'0'`      |
| `%u`       | 星期几（数字，`1` 是周一，`7` 是周日）                       | `'7'`      |
| `%d`       | 日（数字，以 `0` 补足两位）                                  | `'07'`     |
| `%b`       | 月（缩写）                                                   | `'Aug'`    |
| `%B`       | 月（全名）                                                   | `'August'` |
| `%m`       | 月（数字，以 `0` 补足两位）                                  | `'08'`     |
| `%y`       | 年（后两位数字，以 `0` 补足两位）                            | `'14'`     |
| `%Y`       | 年（完整数字，不补零）                                       | `'2014'`   |
| `%H`       | 小时（24小时制，以 `0` 补足两位）                            | `'23'`     |
| `%I`       | 小时（12小时制，以 `0` 补足两位）                            | `'11'`     |
| `%p`       | 上午/下午                                                    | `'PM'`     |
| `%M`       | 分钟（以 `0` 补足两位）                                      | `'23'`     |
| `%S`       | 秒钟（以 `0` 补足两位）                                      | `'56'`     |
| `%f`       | 微秒（以 `0` 补足六位）                                      | `'553777'` |
| `%z`       | UTC偏移量（格式是 `±HHMM[SS]`，未指定时区则返回空字符串）    | `'+1030'`  |
| `%Z`       | 时区名（未指定时区则返回空字符串）                           | `'EST'`    |
| `%j`       | 一年中的第几天（以 `0` 补足三位）                            | `'195'`    |
| `%U`       | 一年中的第几周（以全年首个周日后的星期为第0周，以 `0` 补足两位） | `'27'`     |
| `%w`       | 一年中的第几周（以全年首个周一后的星期为第0周，以 `0` 补足两位） | `'28'`     |
| `%V`       | 一年中的第几周（以全年首个包含1月4日的星期为第1周，以 `0` 补足两位） | `'28'`     |

 

## 四、字符串模板 string template

从简单的例子看起

```python
>>> from string import Template



>>> s = Template('$who likes $what')



>>> s.substitute(who='tim', what='kung pao')



'tim likes kung pao'



>>> d = dict(who='tim')



>>> Template('Give $who $100').substitute(d)



Traceback (most recent call last):



...



ValueError: Invalid placeholder in string: line 1, col 11



>>> Template('$who likes $what').substitute(d)



Traceback (most recent call last):



...



KeyError: 'what'



>>> Template('$who likes $what').safe_substitute(d)



'tim likes $what'
```

## 1、range() 是什么？

它的语法：range(start, stop [,step]) ；start 指的是计数起始值，默认是 0；stop 指的是计数结束值，但不包括 stop ；step 是步长，默认为 1，不可以为 0 。range() 方法生成一段左闭右开的整数范围。

```cobol
>>> a = range(5)  # 即 range(0,5)



>>> a



range(0, 5)



>>> len(a)



5



>>> for x in a:



>>>     print(x,end=" ")



0 1 2 3 4
```

对于 range()  函数，有几个注意点：（1）它表示的是左闭右开区间；（2）它接收的参数必须是整数，可以是负数，但不能是浮点数等其它类型；（3）它是不可变的序列类型，可以进行判断元素、查找元素、切片等操作，但不能修改元素；（4）它是可迭代对象，却不是迭代器。

```cobol
# （1）左闭右开



>>> for i in range(3, 6):



>>>     print(i,end=" ")



3 4 5



 



# （2）参数类型



>>> for i in range(-8, -2, 2):



>>>     print(i,end=" ")



-8 -6 -4



>>> range(2.2)



----------------------------



TypeError    Traceback (most recent call last)



...



TypeError: 'float' object cannot be interpreted as an integer



 



# （3）序列操作



>>> b = range(1,10)



>>> b[0]



1



>>> b[:-3]



range(1, 7)



>>> b[0] = 2



TypeError  Traceback (most recent call last)



...



TypeError: 'range' object does not support item assignment



 



# （4）不是迭代器



>>> hasattr(range(3),'__iter__')



True



>>> hasattr(range(3),'__next__')



False



>>> hasattr(iter(range(3)),'__next__')



True
```



# 1. 基于input()函数输入

```
在Python中可以通过input()函数取键盘输入数据。一般格式为:
```

```
input()函数首先输出提示字符串，然后等待用户键盘输入，
直到用户按回车键结束，函数最后返回用户输入的字符串（不包括最后的回车符），
保存于变量中，然后程序继续执行input函数后面的语句。
```

实现根据输入的年份（4位数字，如1981），计算目前的年龄，程序中使用input()函数输入年份，使用datetime模块获取当前年份，然后用获取的年份减去输入的年份，就是计算的年龄。

```python
import datetime

birth_year = input("请输入您的出生年份：")
now_year = datetime.datetime.now().year
age = now_year - int(birth_year)
print("您的年龄为： " + str(age) + "岁")
```

- input()的小括号中放入的是提示信息，用来在获取数据之前给用户的一个简单提示
- input()在从键盘获取了数据以后，会存放到等号右边的变量中
- input()会把用户输入的任何值都作为字符串来对待

## 1.1 print（）函数的标准用法

函数语法：

```python
print(*objects, sep=' ', end='\n', file=sys.stdout)
1
```

> objects – 复数，表示可以一次输出多个对象。输出多个对象时，需要用 , 分隔。
>  sep – 用来间隔多个对象，默认值是一个空格。
>  end – 用来设定以什么结尾。默认值是换行符 \n，我们可以换成其他字符串。
>  file – 要写入的文件对象。

```python
print('abc', 123)
print('abc', 123, sep=',')
```

## 2.格式化输出：

在C语言中，我们可以使用printf("%-.4f",a)之类的形式，实现数据的的格式化输出。

在python中，我们同样可以实现数据的格式化输出。

```python
s = 'Duan Yixuan'
x = len(s)
print('The length of %s is %d' % (s,x))
# 和C语言的区别在于，Python中格式控制符和转换说明符用%分隔，C语言中用逗号。
1234
```

设置宽度与精度：

```python
PI = 3.141592653
print('%10.3f' % PI)  #字段宽10，精度3
# 输出：     3.142

#精度为3，所以只显示142，指定宽度为10，所以在左边需要补充5个空格，以达到10位的宽度
12345
```

转换标志：-表示左对齐；+表示在数值前要加上正负号；" "(空白字符)表示正数之前保留空格()；0表示转换值若位数不够则用0填充。

```python
PI = 3.1415926
print('%-10.3f' % PI)  #左对齐，还是10个字符，但空格显示在右边。
# 3.142
1234
PI = 3.1415926
print('%+f' % PI)  #显示正负号  #+3.141593
# 类型f的默认精度为6位小数。
123
PI = 3.1415926
print('%010.3f' % PI) #字段宽度为10，精度为3，不足处用0填充空白
# 000003.142   0表示转换值若位数不够则用0填充
123
```

## 3.Python常用格式字符：

> %s 字符串采用str()的显示
>  %x 十六进制整数
>
> %r 字符串(repr())的显示 
>  %e 指数（基底写e）
>
> %c 单个字符
>  %E 指数（基底写E）
>
> %b 二进制整数
>  %f,%F 浮点数
>
> %d 十进制整数
>  %g 指数(e)或浮点数(根据显示长度)
>
> %i 十进制整数
>  %G 指数(E)或浮点数(根据显示长度)
>
> %o 八进制整数
>  %% 字符%

  Python函数的参数多达5种，不像Java那样**参数**只有一种，而是像C++那样提供**默认参数**，除此之外，还提供**可变参数**、**关键字参数**、**命名关键字参数**，这样就使得Python函数的参数变得十分复杂。但复杂意味着灵活便捷，Python语言之所以流行起来，与起本身巨大的灵活性是分不开的。可以说Python是最方便使用的语言。    Python参数类型:    - 位置参数(positional arguments，官方定义，就是其他语言所说的参数)  - 默认参数(类似C++的默认参数)  - 可变参数  - 命名关键字参数  - 关键字参数

### 位置参数

位置(参数positional arguments)就是其他语言的参数，其他语言没有分参数的种类是因为只有这一种参数，所有参数都遵循按位置一一对应的原则。

```python
import math
def quadratic(a, b, c):
    delta = b*b - 4*a*c
    if delta < 0:
        raise TypeError('operand not appropriate(delta < 0)')
    k1 = (-b + math.sqrt(delta)) / (2*a)
    k2 = (-b - math.sqrt(delta)) / (2*a)

    return k1,k2

print(quadratic(1, 2, 1)) #a、b、c 与 1、2、1一一对应 结果(-1, -1)

#从本例可以看出python函数可以有"多个"返回值，其实是一个tuple
```

### 默认参数

Python的默认参数完全等同于C++，引入默认参数是为了在某些情境下提供方便。  形式: `参数名 = 默认值`

```javascript
def personinfo(name, age, gender = 'Female'):
    print(name, age, gender)
person('Steve', 22, 'male')
person('Lily', 23)  #有了默认参数之后，gender这个参数可以不提供 也可以调用函数 gender被赋了默认值Female
```

​    意义何在？  如果使用该函数在一个男女比例均等的学校显示学生信息，则无差别。但如果我在日本女子高中显示学生信息，优势就很明显了，我不需要在每次调用这个函数时输入第三个参数”Female”

#### 默认参数需要注意的地方

  默认参数必须在**最右端**，这样才能被解释器正确识别，否则会产生二义性。

```javascript
def fun(a=10, b):
    return a + b
>>> fun(20)

#二义性：这个20究竟是赋值给a的还是b的
#人都无法分辨清楚，解释器就更不行了
```

  结果说明python解释器会将默认参数作为一个公共对象来对待，多次调用含有默认参数的函数，就会进行多次修改。  因此定义默认参数时一定要使用**不可变对象**(int、float、str、tuple)。使用可变对象语法上没错，但在逻辑上是不安全的，代码量非常大时，容易产生很难查找的bug。

### 可变参数

Python函数提供了可变参数，来方便进行参数个数未知时的调用。可变参数将以tuple形式传递。

格式: `*参数` （即在参数前加*号）