# java

## 运算符

Java语言中提供了很多运算符来操作变量，现总结以下七种：

1. 赋值运算符
2. 算术运算符
3. 关系运算符
4. 逻辑运算符
5. 位运算符
6. 三目运算符
7. instanceof运算符

## 一、赋值运算符

赋值符号 " = "
 语法：变量名 = 表达式；
 可以和算术运算符结合成复合赋值运算符，例如" += “、” -= “、” *= “、” /= “、” %= "
 示例：“int a = 8”、" b += 18"、" m *= 5"

## 二、算术运算符



符号 " + “、” - “、” * “、” / “、” % “、” ++ “、” – "
几点注意：

    除法运算，两个操作数是整型的，结果也会是整型的，舍弃掉小数部分；如果有一个数是浮点数，结果将自动转型为浮点型
    取余运算，两个操作数是整型的，结果也会是整型的，如果有一个数是浮点数，结果将自动转型为浮点型
    自增自减运算，a++ 相当于 a = a + 1, a++ 是先运用在计算，++a 先计算在运用


| 括号 | ()、[ ]、.                               |                                 |
| ---- | ---------------------------------------- | ------------------------------- |
| 2    | 非、正，负号                             | !、+(正)、-(负)                 |
| 3    | 自增，自减                               | ++、--                          |
| 4    | 乘，除，取余                             | *、/、%                         |
| 5    | 加，减                                   | +、-                            |
| 6    | 移位运算                                 | <<、>>、>>>                     |
| 7    | 大小关系                                 | <、<=、>、>=                    |
| 8    | 相等关系                                 | ==、!=                          |
| 9    | 按位与                                   | &                               |
| 10   | 按位异或（在java中，这不是幂次方的符号） | ^                               |
| 11   | 按位或                                   | \|                              |
| 12   | 逻辑与(短路与)                           | &&                              |
| 13   | 逻辑或(短路或)                           | \|\|                            |
| 14   | 条件运算(三目运算)                       | ? :                             |
| 15   | 赋值运算                                 | =、+=、-=、*=、/=、%=           |
| 16   | 位赋值运算                               | &=、\|=、^=、~=、<<=、>>=、>>>= |

## 数组

### 概念

同一种类型数据的集合。其实数组就是一个容器。

### 数组的好处

可以自动给数组中的元素从0开始编号，方便操作这些元素。

### 格式

#### 格式1：

元素类型[] 数组名 = new 元素类型[元素个数或数组长度];



```
示例：int[] arr = new int[5];
```



#### 格式2：

元素类型[] 数组名 = new 元素类型[]{元素，元素，……};

```
int[] arr = new int[]{3,5,1,7};

int[] arr = {3,5,1,7}
```

```java
public static void main(String[] args) {

int[] x = { 1, 2, 3 };

for (int y = 0; y < 3; y++) {

System.out.println(x[y]);

// System.out.println("x["+y+"]="+x[y]); 打印效果 x[0]=1;

} // 那么这就是数组的第一个常见操作.遍历

}
```

```java
public static void main(String[] args) {

int[] x = { 1, 2, 3 };

for (int y = 0; y < x.length; y++) {

System.out.println(x[y]);

// System.out.println("x["+y+"]="+x[y]); 打印效果 x[0]=1;

} // 那么这就是数组的第一个常见操作.遍历

}
```

数组的常见异常
数组中最常见的问题：

1. NullPointerException 空指针异常
    原因： 引用类型变量没有指向任何对象，而访问了对象的属性或者是调用了对象的方法。

  ```java
  public static void main(String[] args) {
  
  int[] x = { 1, 2, 3 };
  
  System.out.println(x[3]);
  
  //java.lang.ArrayIndexOutOfBoundsException
  
  }
  ```

  


2. ArrayIndexOutOfBoundsException 索引值越界。
原因：访问了不存在的索引值。

```java
public static void main(String[] args) {

int[] x = { 1, 2, 3 };

x = null;

System.out.println(x[1]);

// java.lang.NullPointerException

}
```





一数组角标越界异常:，注意：数组的角标从0开始。

## 二维数组

```
二维数组

Arrays的使用

遍历： toString()    将数组的元素以字符串的形式返回

排序： sort()        将数组按照升序排列

查找： binarySearch()在指定数组中查找指定元素，返回元素的索引，如果没有找到返回（-插入点-1） 注意：使用查找的功能的时候，数组一定要先排序。
```

二维数组：实质就是存储是一维数组。

数组定义：

​    数组类型[][] 数组名 = new 数组类型[一维数组的个数][每一个一维数组中元素的个数];

Integer.toBinaryString、Integer.toOctalString 和 Integer.toHexString 是Java中 Integer 类的静态方法，用于进行进制转换。下面是每个方法的详细解释：

Integer.toBinaryString(int num)：

参数：一个整数（十进制数）。
返回值：将给定的整数转换为二进制表示形式的字符串。
示例：
java

```java
int decimalNumber = 42;
String binaryNumber = Integer.toBinaryString(decimalNumber);
System.out.println(binaryNumber); // 输出：101010
Integer.toOctalString(int num)：
```



参数：一个整数（十进制数）。
返回值：将给定的整数转换为八进制表示形式的字符串。
示例：
java

```java
int decimalNumber = 42;
String octalNumber = Integer.toOctalString(decimalNumber);
System.out.println(octalNumber); // 输出：52
Integer.toHexString(int num)：
```



参数：一个整数（十进制数）。
返回值：将给定的整数转换为十六进制表示形式的字符串。
示例：

```java

int decimalNumber = 42;
String hexNumber = Integer.toHexString(decimalNumber);
System.out.println(hexNumber); // 输出：2a
```



这些方法提供了快速而简便的方法用于将十进制数转换为其他进制的字符串表示形式。通过使用这些方法，我们可以轻松地在不同的进制之间进行转换。需要注意的是，这些方法返回的结果字符串不包含前缀（例如："0b" 表示二进制、"0" 表示八进制、"0x" 表示十六进制），如果需要可以手动添加前缀。



# 异常

## 1、异常的体系结构

定义：异常就是有异于常态，和正常情况不一样，有错误出现。在java中，将程序执行过程中的不正常的情况称之为异常，开发过程中的语法错误和逻辑错误不是异常，发生异常时java会阻止当前方法或作用域的情况。

异常的体系结构

[![20160331115514210.png](https://z4a.net/images/2023/08/19/20160331115514210.png)](https://z4a.net/image/VCqxWH)

Throwable：是java中所有异常和错误的超类,其两个子类为 Error(错误) 和 Exception(异常)
Error： 是程序中无法处理的错误，表示运行应用程序中出现了严重的错误。此类错误一般表示代码运行时JVM出现问题。通常有Virtual MachineError（虚拟机运行错误）、NoClassDefFoundError（类定义错误）等。比如说当jvm耗完可用内存时，将出现OutOfMemoryError。此类错误发生时，JVM将终止线程。非代码性错误。因此，当此类错误发生时，应用不应该去处理此类错误。
Exception： 是程序本身可以捕获并且可以处理的异常。其中可分为运行时异常（RuntimeException）和非运行时异常，也叫做受检异常
运行时异常(不受检异常)： RuntimeException类极其子类表示JVM在运行期间可能出现的错误。编译器不会检查此类异常，并且不要求处理异常，比如用空值对象的引用（NullPointerException）、数组下标越界（ArrayIndexOutBoundException）。此类异常属于不可查异常，一般是由程序逻辑错误引起的，在程序中可以选择捕获处理，也可以不处理。
非运行时异常(受检异常)： Exception中除RuntimeException极其子类之外的异常。编译器会检查此类异常，如果程序中出现此类异常，比如说IOException，必须对该异常进行处理，要么使用try-catch捕获，要么使用throws语句抛出，否则编译不通过。
从程序执行的过程来看编译时异常和运行时异常

编译时异常：程序在编译时发生的异常（javac 源文件名.java）
运行时异常: 程序在运行时发生的异常（java 字节码文件名）

Throwable：是java中所有异常和错误的超类,其两个子类为 Error(错误) 和 Exception(异常)
Error： 是程序中无法处理的错误，表示运行应用程序中出现了严重的错误。此类错误一般表示代码运行时JVM出现问题。通常有Virtual MachineError（虚拟机运行错误）、NoClassDefFoundError（类定义错误）等。比如说当jvm耗完可用内存时，将出现OutOfMemoryError。此类错误发生时，JVM将终止线程。非代码性错误。因此，当此类错误发生时，应用不应该去处理此类错误。

Exception： 是程序本身可以捕获并且可以处理的异常。其中可分为运行时异常（RuntimeException）和非运行时异常，也叫做受检异常
运行时异常(不受检异常)： RuntimeException类极其子类表示JVM在运行期间可能出现的错误。编译器不会检查此类异常，并且不要求处理异常，比如用空值对象的引用（NullPointerException）、数组下标越界（ArrayIndexOutBoundException）。此类异常属于不可查异常，一般是由程序逻辑错误引起的，在程序中可以选择捕获处理，也可以不处理。

非运行时异常(受检异常)： Exception中除RuntimeException极其子类之外的异常。编译器会检查此类异常，如果程序中出现此类异常，比如说IOException，必须对该异常进行处理，要么使用try-catch捕获，要么使用throws语句抛出，否则编译不通过。
从程序执行的过程来看编译时异常和运行时异常

- 编译时异常：程序在编译时发生的异常（javac 源文件名.java）
- 运行时异常: 程序在运行时发生的异常（java 字节码文件名）

## 2、常见的异常

### 2.1. 运行时异常#

- NullPointerException (空指针异常)：指针指向的对象为空（null）
- ArrayIndexOutOfBoundException (数组角标越界异常) StringIndexOutOfBoundException (字符串越界异常) ...
- ClassCastException (类型转换异常)

### 2.2. 编译时异常 (编译时异常必须进行处理否则无法运行)#

- 
- IOException
- FileNotFoundException
- ClassNotFoundException

### 2.3. 常见异常的运行Demo

```java
package com.broky.exception.commonException;

import java.util.Scanner;

public class CommonEx {
    static void ArithmeticExceptionDemo(){
        int a = 10;
        int b = 0;
        int c = a / b;
        /*Exception in thread "main" java.lang.ArithmeticException: / by zero
        at com.broky.exception.ArithmeticEx.main(ArithmeticEx.java:7)*/
    }

    static void ClassCastExceptionDemo(){
        Object obj = new Double(1);
        String str = (String)obj;
        /*Exception in thread "main" java.lang.ClassCastException: class java.lang.Double cannot be cast to class java.lang.String (java.lang.Double and java.lang.String are in module java.base of loader 'bootstrap')
        at com.broky.exception.ClassCastEx.main(ClassCastEx.java:7)*/
    }

    static void InputMismatchExceptionDemo(){
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        System.out.println(num);
        /*asd
        Exception in thread "main" java.util.InputMismatchException
        at java.base/java.util.Scanner.throwFor(Scanner.java:939)
        at java.base/java.util.Scanner.next(Scanner.java:1594)
        at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
        at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
        at com.broky.exception.InputMismatchEx.main(InputMismatchEx.java:8)*/
    }

    static void NullPointerExceptionDemo(){
        int[] arr = null;
        System.out.println(arr[3]);

        /*Exception in thread "main" java.lang.NullPointerException: Cannot load from int array because "arr" is null
        at com.broky.exception.NullPointerEx.main(NullPointerEx.java:6)*/
    }

    static void NumberFormatExceptionDemo(){
        String str = "abc";
        int a = Integer.parseInt(str);
        /*Exception in thread "main" java.lang.NumberFormatException: For input string: "abc"
        at java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:67)
        at java.base/java.lang.Integer.parseInt(Integer.java:660)
        at java.base/java.lang.Integer.parseInt(Integer.java:778)
        at com.broky.exception.NumberMismatchEx.main(NumberMismatchEx.java:6)*/
    }

    static void ArrayIndexOutOfBoundExceptionDemo(){
        int[] arr = new int[3];
        System.out.println(arr[3]);
        /*Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3
        at com.broky.exception.XIndexOutOfBoundEx.main(XIndexOutOfBoundEx.java:6)*/

        String str = "abc";
        System.out.println(str.charAt(3));
        /*Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range: 3
        at java.base/java.lang.StringLatin1.charAt(StringLatin1.java:48)
        at java.base/java.lang.String.charAt(String.java:711)
        at com.broky.exception.XIndexOutOfBoundEx.main(XIndexOutOfBoundEx.java:11)*/
    }

    public static void main(String[] args) {
        ArrayIndexOutOfBoundExceptionDemo();
    }
}
```

3. 异常的抓抛模型原理
  异常的抛出：如果程序在运行过程中执行某段代码时发生了异常，那么系统（JVM）将会根据异常的类型，在异常代码处创建对应的异常类型的对象并抛出，抛出给程序的调用者。一旦抛出对象以后,其后的代码不再运行,程序终止.
  异常的抛出分为：① 系统向外抛出异常 ② 手动向外抛出异常（throw）
  异常的抓取：异常的抓取可以理解为异常的处理方式, 取有 try-catch-finally 和 throws 两种方式（详情见异常的处理部分）

  ## 4、异常的处理

  ### 4.1、try - catch - finally#

  将可能出现异常的代码放到try{}中, 运行时, 如果代码发成了异常的话,就会生成一个对应的异常类的对象.
  这个产生的异常对象会与catch的异常类型相匹配,匹配成功后就被 catch 捕获,然后运行catch{}中的代码, 一般catch中的代码为处理异常的代码, 比如返回异常的信息和返回异常的详细信息等. 一旦异常处理完成,就会跳出当前的try-catch结构

无论有没有发生异常finally中的代码都会最后被执行

catch多个异常类型的时候, 如果有子父类关系,小的范围写上面大的范围写下面; 如果没有子父类关系,谁在上谁在下无所谓.
常用的异常对象处理方式: ① e.getMessage() ② e.printSrackTrace()
在try结构中生命的变量，在出了try结构以后，就不能在被调用。如果想避免这种情况，就需要在try之前声明变量并初始化，在try中赋值。
如果finally里面有return那么返回的一定是finally里面的
try-catch-finally结构可以相互嵌套
体会1：使用try-catch-finally处理编译时异常，是让程序在编译时就不再报错，但是运行时仍然有可能报错。相当于我们使用try-catch将一个编译时可能出现的异常，延迟到运行时出现。p376
体会2：在开发中，运行时异常比较常见，此时一般不用try-catch去处理，因为处理和不处理都是一个报错，最好办法是去修改代码。针对编译时异常，我们一定要考

```
package com.broky.exception.demo02;

public class TryCatchFinally {
    public static void main(String[] args) {
        String str = "abc";

        try {
            int i = Integer.parseInt(str);
        } catch (NumberFormatException e) {
            e.printStackTrace();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("运行完毕");
        }
    }
}
```

### 4.2、throws + 异常类型#

- throws 一般用于方法中可能存在异常时, 需要将异常情况向方法之上的层级抛出, 由抛出方法的上一级来解决这个问题, 如果方法的上一级无法解决的会就会再将异常向上抛出, 最终会抛给main方法. 这样一来main方法中调用了这个方法的时候,就需要解决这个可能出现的异常.
  当然main方法也可以不解决异常, 将异常往上抛出给java虚拟机, 如果java虚拟机也无法解决的话,那么java虚拟机就over了
- throws + 异常类型写在方法的声明处.指明此方法执行时,可能会抛出的异常类型.
- 一旦方法体执行时,出现异常，仍会在异常代码处生成一个异常类的对象，此对象满足throws后异常类型时，就会被抛出。
- 异常代码的后续的代码，就不再执行！

体会：tyr-catch-fianlly:真正的将异常给处理掉了。throws的方式只是将异常抛给了方法的调用者，并没有真正将异常处理掉。

注意: 将异常向上抛出也算是一种处理异常的方法



```java
package com.broky.exception;

import java.io.FileNotFoundException;

public class ThrowsEx {
    public void setAge2(int age) throws FileNotFoundException {
        if (age < 0) {
            throw new FileNotFoundException("输入的年龄小于0");
        }
    }
    
    public void TestsetAge2() throws FileNotFoundException {
        setAge2(2);
    }
    
    public static void main(String[] args) {
        try {
            ThrowsEx.throwsExTest();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

## 5、重写方法异常抛出的规则

1、子类重写的方法抛出的异常类型不大于父类被重写的方法抛出的异常类型
下面代码中,main方法中向display方法中传入了SuperClass的子类对象.那么到display方法中调用s.method调用的就是SpuerClass的子类SubClass重写的method方法, 如果这个方法抛出的异常范围大于父类SuperClass所抛出的异常的话,那么在display方法中对异常的catch处理就会catch不到这个异常.

```
package com.broky.exception;

import java.io.FileNotFoundException;
import java.io.IOException;

public class OverrideTest {
    public void display(SuperClass s) {
        try {
            s.method();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        OverrideTest overrideTest = new OverrideTest();
        overrideTest.display(new SubClass());
    }
}

class SuperClass {
    public void method() throws IOException {
        System.out.println("super");
    }
}

class SubClass extends SuperClass {
    public void method() throws FileNotFoundException {
        System.out.println("sub");
    }
}
```



6. ## 开发中如何选择使用try-catch-finally 还是throws?

  - 如果分类中被重写的方法没有throws方式处理异常,则子类重写的方法也不能使用throws,意味着如果子类重写的方法中有异常,必须使用tyr-catch-finally方式处理.
  - 执行的方法中,先后又调用了另外的几个方法,这几个方法是递进关系执行的.我们建议这几个方法使用throws的方式处理.而执行的方法a可以考虑使用try-catch-finally方式进行处理.
  - 因为如果在a方法要调用d方法时,如果在b方法内try-catch,当b方法异常时,并不会给方法a返回所需要的数据.因此最好使用throws将异常集合到一块再处理.
  - 注意: try-catch和throws再方法中不要同时使用,因为只要使用try-catch就已经将异常处理掉了,再throws没有任何意义.

7. ## 手动抛出异常 throw

  手动抛出的异常有两种, 分别为运行时异常和编译时异常.

抛出运行时异常时, 可以不用处理抛出的这个异常.

抛出编译时异常时, 必须要处理抛出的这个异常.

详细解析请看下面的代码

```
/*Demo
    手动抛出异常
    自己throw(制造一个异常抛出)
 */


import java.io.FileNotFoundException;

public class ThrowEx {

    // 手动抛出运行时异常
    public void setAge(int age) {
        if (age < 0) {
            throw new NullPointerException("输入的年龄小于0");
        }
    }
    /*
          此方法手动抛出了运行时异常
          运行时异常可以不用处理
     */

    // 手动抛出编译时异常
    public void setAge2(int age) throws FileNotFoundException {
        if (age < 0) {
            throw new FileNotFoundException("输入的年龄小于0");
        }
    }
    /*
          此方法手动抛出的了编译时异常
          编译时异常需要被处理
          这里采用了 throws 这个异常, 也就是说方法并没有处理这个异常, 而是将异常抛给了调用者
      这样一来调用了这个方法的人就必须要处理这个异常才可以.
          注意:   在这里并不用自己使用 try catch 处理这个异常
                自己在方法里抛出异常, 方法再自己处理没有任何作用.
               所以方法中的异常需要抛给调用者去处理.
     */


    public static void main(String[] args) {
        ThrowEx throwEx = new ThrowEx();

        throwEx.setAge(-5);
    }

}
```

## 8、自定义异常类

继承现有的异常结构：RuntimeExceptiona（不用处理）、Exception（需要处理）
提供全局常量：serialVersionUID
提供重载的构造器

```
public class MyException extends RuntimeException{
    static final long serialVersionUID = -1234719074324978L;

    public MyException(){

    }

    public MyException(String message){
        super(message);
    }

    public static void main(String[] args) {
        throw new MyException("自定义运行时异常");
        /*Exception in thread "main" com.broky.exception.MyException: 自定义运行时异常
        at com.broky.exception.MyException.main(MyException.java:15)*/
    }
}
```

9. ## 异常处理练习题

  ### 9.1. 判断以下代码的输出内容#

  ```
  public class ExceptionTest {
      static void methodA() {
          try {
              System.out.println("运行A方法");
              throw new RuntimeException("A方法手动抛出运行时异常");
          } finally {
              System.out.println("用A方法的finally");
          }
      }
  
      static void methodB() {
          try {
              System.out.println("进入B方法");
              return;
          } finally {
              System.out.println("用B方法的finally");
          }
      }
  
  
      public static void main(String[] args) {
  
          try {
              methodA();
          } catch (Exception e) {
              System.out.println(e.getMessage());
          }
  
          methodB();
      }
  }
  /*答案
      运行A方法
      用A方法的finally
      A方法手动抛出运行时异常
      进入B方法
      用B方法的finally
  */
  ```

  ```
  public class ExceptionTest {
      static void methodA() {
          try {
              System.out.println("运行A方法");
              throw new RuntimeException("A方法手动抛出运行时异常");
          } finally {
              System.out.println("用A方法的finally");
          }
      }
  
      static void methodB() {
          try {
              System.out.println("进入B方法");
              return;
          } finally {
              System.out.println("用B方法的finally");
          }
      }
  
  
      public static void main(String[] args) {
  
          try {
              methodA();
          } catch (Exception e) {
              System.out.println(e.getMessage());
          }
  
          methodB();
      }
  }
  /*答案
      运行A方法
      用A方法的finally
      A方法手动抛出运行时异常
      进入B方法
      用B方法的finally
  */
  ```

  public class ExceptionTest {
      static void methodA() {
          try {
              System.out.println("运行A方法");
              throw new RuntimeException("A方法手动抛出运行时异常");
          } finally {
              System.out.println("用A方法的finally");
          }
      }

      static void methodB() {
          try {
              System.out.println("进入B方法");
              return;
          } finally {
              System.out.println("用B方法的finally");
          }
      }


      public static void main(String[] args) {
      
          try {
              methodA();
          } catch (Exception e) {
              System.out.println(e.getMessage());
          }
      
          methodB();
      }
      public class ExceptionTest {
          static void methodA() {
              try {
                  System.out.println("运行A方法");
                  throw new RuntimeException("A方法手动抛出运行时异常");
              } finally {
                  System.out.println("用A方法的finally");
              }
          }
      
          static void methodB() {
              try {
                  System.out.println("进入B方法");
                  return;
              } finally {
                  System.out.println("用B方法的finally");
              }
          }
      
      
          public static void main(String[] args) {
      
              try {
                  methodA();
              } catch (Exception e) {
                  System.out.println(e.getMessage());
              }
      
              methodB();
          }
      }
      /*答案
          运行A方法
          用A方法的finally
          A方法手动抛出运行时异常
          进入B方法
          用B方法的finally
      */
      }
      
  ## 9.2. 异常处理综合练习#

  编写应用程序 EcmDef java,接收命令行的两个参数,要求不能输入负数,计算两数相除对数据类型不一致( Number FormatException)、
  缺少命令行参数(ArraylndexOutofBounds Exception、除0( Arithmetic EXception)及输入负数( EcDef自定义的异常)进行异常处理。

  提示:

  - 在主类( EcmDef)中定义异常方法(ecm)完成两数相除功能。
  - 在man(方法中使用异常处理语句进行异常处理
  - 
  - 在程序中,自定义对应输入负数的异常类( EcDef)。
  - 运行时接受参数 java EcmDef 20 10∥args[0]=“20“ args[1]=”10“ I
  - nterger类的 static方法 parseInt( String s)将s转换成对应的int值

```
public class EcDef extends Exception{
    static final long serialVersionUID = -338751612344229948L;

    public EcDef(){

    }

    public EcDef(String str){
        super(str);
    }

}

public class EcmDef {
    public static int ecm(int a, int b) throws EcDef, ArithmeticException {
        if (a < 0 || b < 0)
            throw new EcDef("输入的数据小于0");
        if (b == 0)
            throw new ArithmeticException("除数不能等于0");
        return a / b;
    }

    public static void main(String[] args) {
        int a = 0;
        int b = 0;

        try {
            a = Integer.parseInt(args[0]);
            b = Integer.parseInt(args[1]);

            System.out.println(ecm(a, b));
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("缺少命令行参数");
            e.printStackTrace();
        } catch (NumberFormatException e) {
            e.printStackTrace();
        } catch (ArithmeticException e) {
            e.printStackTrace();
        } catch (EcDef ecDef) {
            ecDef.printStackTrace();
        }

    }
```







### Collection集合概述

Java数组的长度是固定的，为了使程序能够方便地存储和操作数目不固定的一组数据，JDK类库提供了Java集合
与数组不同的是，集合中不能存放基本类型数据，而只能存放对象的引用。
数组只能存储同种数据类型的元素 ,集合可以存储不同类型的元素

**集合框架的介绍**