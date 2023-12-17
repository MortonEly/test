# Java EE

## 早期java EE开发弊端

在早期Java EE)应用开发中，企业开发人员是利用SP+Servlet技术进行软件应用和系统开发的，使用该技术会有以下两个弊端。

### (1)软件应用和系统可维护性差

如果全部采用SP+Servlet技术进行软件的开发，因为分层不够清晰，业务逻辑的实现无法单独分离出来，从而造成系统后期维护困难，

### (2)代码重用性低

企业希望以最快的速度，开发出最稳定、最实用的软件。如果系统不使用框架，每次开发系统都需要重新开发，需要投入大量的人力物力，并且重新开发的代码可能具有更多的漏洞，这就增加了系统出错的风险。

### 3,提高软件性能：

使用框架进行软件开发，可以减少程序中的冗余代码。例如，使用Spring框架开发时，通过Spring的lOC特性，可以将对象之间的依赖关系交给Spring控制，方便解耦，简化开发：使用MyBatisi框架开发时，MyBatis提供了XML标签，支持动态的SQL,开发人员无需在类中编写大量的SQL语句，只需要在配置文件中进行配置即可

1.IOC提出背景
代码书写现状:耦合度太高，我们修改一处代码，往往要修改很多出相关联的代码。
举例如下:当我们在数据层中不满足BookDaoImpl2中提供的方法了,我们写了新的实现类BookImpl,那么当业务层想要调用数据层中的实现方法的时候,我们就要修改 new 的对象。那么引发问题 我们该一处代码，就要修改与其相关联的代码。

## 主流框架

SSM框架是Java EE 领域内三大优秀框架的缩写，它们分别指的是 spring,springMVC,Mybatis 框架的简写。Java EE 框架可以高效的整合各种Java 技术，让开发工作变得简单。Java EE 框架是我们软件的可重用的组件，是软件系统的可重用设计，框架在软件开发中相当于一种半成品，我们通过把框架当做底层模板，在框架之上搭建起我们的软件应用。Java EE它们的目的降低程序的耦合，减少重复代码的编写，提高代码的编写和维护效率。这三大框架分别解决了我们Java web 开发中的不同问题，下面我会一一说明。
三层架构设计

·框架概念的出现
框架的基本特点：
框架(Framework),是基于基础技术之上，从众多业务中抽取出的通用解决方案：
框架是一个半成品，使用框架规定的语法开发可以提高开发效率，可以用简单的代码就能完成复办的基础业务：
框架内部使用大量的设计模式、算法、底层代码操作技术，如反射、内省、x解析、注解解析等：
框架一般都具备扩展性：
有了框架，我们可以将精力尽可能的投入在纯业务开发上而不用去费心技术实现以及一些辅铺助业务。

##### 各层实现的功能

数据库持久层：主要负责与数据库进行交互，对数据库进行sql操作，存取数据操作。mybatis JPA

服务层：主要负责业务的逻辑处理，处于三层框架的中间层，连接着web 层与 dao 层。

web层：主要负责接收浏览器的请求和返回响应，在这层只是进行参数的获取传递，和对web 域进行存储数据，在web 层不进行复杂的业务逻辑处理。springMVC，strut2

注意：在三层架构中我们有提及spring这个框架，是因为 spring 框架不属于三层架构中的任意一层。spring属于工作在整个三层架构，它负责整个三层架构中Java 对象的管理。spring 框架为各类框架整合提供一个很好的环境。
持久层框架 (mybatis)



**Spring是一个轻量级的控制反转(IoC-Inversion of Control)和面向切面(AOP-Aspect Oriented Programming)的容器（框架）**

Spring框架概述
spring是一个开源的轻量级Java开发应用框架，可以简化企业级应用开发，Spring解决了开发者在avaEE开发中遇到的许多常见的问题，提供了功能强大IOC、AOP及Web MVC等功能。是当前企业中ava开发几乎不能缺少的框架之一。Spring的生态及其完善，不管是Spring那个领域的解决方案都是依附于在SpringFramework基础框架的。

1. 体系结构
1.1 体系结构图

Spring 是模块化的，允许你挑选和选择适用于你的模块，不必要把剩余部分也引入。下面的部分对在 Spring 框架中所有可用的模块给出了详细的介绍。

Spring 总共大约有 20 个模块， 由 1300 多个不同的文件构成。 而这些组件被分别整合在

- 核心容器（Core Container）

  ```
  spring-beans 模块提供 BeanFactory，工厂模式的微妙实现，它移除了编码式单例的需要，并且可以把配置和依赖从实际编码逻辑中解耦。
  context 模块建立在由 core和 beans 模块的基础上建立起来的，它以一种类似于 JNDI 注册的方式访问对象。Context 模块继承自 Bean 模块，并且添加了国际化（比如，使用资源束）、事件传播、资源加载和透明地创建上下文（比如，通过 Servelet 容器）等功能。Context 模块也支持 Java EE 的功能，比如 EJB、JMX 和远程调用等。ApplicationContext 接口是 Context 模块的焦点。spring-context-support 提供了对第三方集成到 Spring 上下文的支持，比如缓存（EhCache, Guava, JCache）、邮件（JavaMail）、调度（CommonJ, Quartz）、模板引擎（FreeMarker, JasperReports, Velocity）等。
  spring-expression 模块提供了强大的表达式语言，用于在运行时查询和操作对象图。它是 JSP2.1 规范中定义的统一表达式语言的扩展，支持 set 和 get 属性值、属性赋值、方法调用、访问数组集合及索引的内容、逻辑算术运算、命名变量、通过名字从 Spring IoC 容器检索对象，还支持列表的投影、选择以及聚合等。
  ```

  

- AOP（Aspect Oriented Programming）

  数据访问/集成层包括 JDBC，ORM，OXM，JMS 和事务处理模块，它们的细节如下：

  （注：JDBC=Java Data Base Connectivity，ORM=Object Relational Mapping，OXM=Object XML Mapping，JMS=Java Message Service）

      JDBC 模块提供了 JDBC 抽象层，它消除了冗长的 JDBC 编码和对数据库供应商特定错误代码的解析。
      ORM 模块提供了对流行的对象关系映射 API 的集成，包括 JPA、JDO 、 Hibernate、Mybatis 等。通过此模块可以让这些 ORM 框架和 spring的其它功能整合，比如前面提及的事务管理。
      OXM 模块提供了对 OXM 实现的支持，比如 JAXB、Castor、XML Beans、JiBX、XStream 等。
      JMS 模块包含生产（produce）和消费（consume）消息的功能。从 Spring 4.1 开始，集成了 spring-messaging 模块。
      事务模块为实现特殊接口类及所有的 POJO 支持编程式和声明式事务管理。（注：编程式事务需要自己写 beginTransaction()、commit()、rollback() 等事务管理方法，声明式事务是通过注解或配置由 spring 自动处理，编程式事务力度更细）

- Aspects

- 设备支持（Instrmentation）

- 消息（Messaging）

- 数据访问与集成（Data Access/Integeration）

- Web

  Web 层由 Web，Servlet，Web-Socket 和 Web-Portlet 组成，它们的细节如下：

      Web 模块提供面向 web 的基本功能和面向 web 的应用上下文，比如多部分（multipart）文件上传功能、使用 Servlet 监听器初始化 IoC 容器等。它还包括 HTTP 客户端以及 Spring 远程调用中与 web 相关的部分。
      Servlet 模块为 web 应用提供了模型视图控制（MVC）和 REST Web服务的实现。Spring 的 MVC 框架可以使领域模型代码和 web 表单完全地分离，且可以与 Spring 框架的其它所有功能进行集成。
      Web-Socket 模块为 WebSocket-based 提供了支持，而且在 web 应用程序中提供了客户端和服务器端之间通信的两种方式。
      Web-Portlet 模块提供了用于 Portlet 环境的 MVC 实现，并反映了 spring-webmvc 模块的功能。

- Test



控制反转和依赖注入（IOC-DI）

控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。其中最常见的方式叫做依赖注入（Dependency Injection，简称DI），还有一种方式叫“依赖查找”（Dependency Lookup）。

依赖注入（DI），是指程序运行过程中，如果需要调用另一个对象协助时，无须在代码中创建被调用者，而是依赖于外部的注入。Spring的依赖注入对调用者和被调用者几乎没有任何要求，完全支持对POJO之间依赖关系的管理。



        依赖 : 指Bean对象的创建依赖于Spring容器
        注入 : 指Bean对象的属性(例如pojo类对象属性、其它需要依赖的Bean对象) , 由容器来设置和装配.

传统Java SE程序设计，我们直接在对象内部通过new进行创建对象，是程序主动去创建依赖对象；

IOC是由专门一个容器来创建这些对象，即由Ioc容器来控制对象的创建，程序被动接受对象,这就叫控制反转；

    在Spring中，我们可以把IOC容器与Spring容器等同于一个东西，及IOC容器=Spring容器，我们也可以把Spring容器看做配置文件xxx.xml来简单记忆

核心容器（Core Container）

核心容器由 spring-core，spring-beans，spring-context，spring-context-support和spring-expression（SpEL，Spring 表达式语言，Spring Expression Language）等模块组成，它们的细节如下：


AOP为Aspect Oriented Programming的缩写，意为：面向切面编程，通过预编译方式和运行期间动态代理实现程序功能的统一维护的一种技术。

AOP是OOP的延续，是软件开发中的一个热点，也是Spring框架中的一个重要内容，是函数式编程的一种衍生范型。

利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，将日志记录，性能统计，安全控制，事务处理，异常处理等相同代码从业务逻辑代码中划分出来，通过对这些行为的分离，可以将它们独立到非指导业务逻辑的方法中，进而改变这些行为的时候不影响业务逻辑的代码。提高程序的可重用性，同时提高了开发的效率。



解决方法：我们在创建对象的时候，不自己创建而是由外部提供对象

引出IOC（控制反转）
对象的创建权由程序转移到外部,这种思想叫做控制反转。

2:IOC的核心概念
使用对象时候由主动new对象转换成由外部提供对象,此过程中对象的创建权由程序转移到外部，这种思想叫做控制反转
Spring技术对此提供的实现
Spring提供了一个容器，称为IOC容器，用来充当IOC思想中的外部
IOC容器负责对象的创建、初始化等一系列工作，被创建或被管理的对象在IOC容器中统称为Bean。
3:IOC的实现方式
DI-依赖注入
在容器中建立bean与bean之间的依赖关系的整个过程叫做依赖注入
下方当中的业务层中代码想要正常运行还需要Book bookDao的实现,那么的话IOC把这种依赖关系也提供给业务层，这个过程叫依赖注入。那么这个注入指的就是属性的注入

4:IOC的入门案例
(1):思路分析
IOC管理什么（bean对象）
如何告知IOC去管理bean对象 —通过配置文件
被管理的对象交给IOC容器，如何获取IOC容器?(接口)
IOC容器得到后，如何获取bean?
(2):代码解析
IOC管理的对象
这里的话我们还未完成依赖注入，所以还是new了一个mapper的对象

```
public class bookServiceImp implements bookService {

   bookMapper mapper = new bookMapperImp();

    @Override
    public void add2() {
        mapper.add();
    }
}
```



```
告知IOC去管理bean(通过配置文件)
 	<!-- id:相当于类别名-->
    <!-- class:引入的类-->
    <bean id = "bookMapperImp" class="com.wyi.mapper.Imp.bookMapperImp"/>
    <bean id = "bookServiceImp" class="com.wyi.service.Imp.bookServiceImp"/>
```

```
获取IOC容器
ApplicationContext是个接口，所以需要用其实现类CPX

 ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
```



获取bean
getBean的参数就是我们在配置文件当中的id;



5:DI入门案例
(1):思路分析
基于IOC管理bean。
上方的service中new 的mapper对象是否保留（否）。
Service需要的mapper对象如何进入Service中 （通过提供方法）。
Service和mapper之间该如何联系。
(2):代码解析
Service需要的mapper对象如何进入Service中 （通过提供方法）



```
public class bookServiceImp implements bookService {

   bookMapper mapper;

    @Override
    public void add2() {
        mapper.add();
    }
    //提供set方法
    public void setMapper(bookMapper mapper) {
        this.mapper = mapper;
    }
}

```

Service和mapper之间的联系

```
<!-- id:相当于类别名-->
    <!-- class:引入的类-->

    <bean id = "bookMapperImp" class="com.wyi.mapper.Imp.bookMapperImp"/>

    <bean id = "bookServiceImp" class="com.wyi.service.Imp.bookServiceImp">

<!--        property:表示的是配置当前bean的属性-->
<!--        name:表示当前bean的属性名称-->
<!--        ref:参照哪一个bean
			ref:bean对象的属性是引用类型，value:bean对象的属性是基本类型		-->
        <property name="mapper" ref="bookMapperImp"/>
    </bean>
```

那么ioc如何调用set方法呢？
这个时候它就会通过反射来创建对象
调用的是无参构造方法，就算构造器私有也可以调用
然后读取到property标签中对应的属性值
比如说，读取到标签的name属性值为mapper,参照bookMapperImp类 （如果属性是不是对象的话 那么就是 value）
这个时候，IOC就会调用对应的set方法为这个属性赋值(将上方读取到的 属性值 set(bookMapperImp) 进去,为 BookServiceImp提供mapper对象)
如果我们写的实体类中没有提供对应的set方法，那么就会报错。
6:DI依赖注入的方式
(1):前言
所谓注入也就是属性的注入，我们根据bean.xml中bean对象中属性的添加方式 对应不同依赖注入方式，在某个bean中其可能需要用到其他实体类作为属性，那么此时也不用自己new，IOC容器给你提供，那么如何提供呢？那就是这个bean你得给IOC容器一个入口 即 set方法 或者构造器方法

(2):Set方式注入
bean当中属性的添加
这里属性的添加方式是 property

```
<bean id = "bookServiceImp" class="com.wyi.service.Imp.bookServiceImp">
        <property name="mapper" ref="bookMapperImp"/>
    </bean>
```

IoC如何注入这个属性呢
我们先通过获取到的IOC容器，然后再通过IOC容器获取到Bean,然后底层是通过反射创建这个bean对象，然后这个bean当中可能存在一些依赖关系，那么的话这个时候IOC容器会调用set方法对这些属性进行注入。

```
public void setMapper(bookMapper mapper) {
        this.mapper = mapper;
    }
```

3):构造器注入
bean.xml配置文件
属性的添加方式是 constructor

```
<bean id = "bookServiceImp" class="com.wyi.service.Imp.bookServiceImp">
    	//这里的name是我们构造方法中的参数名
        <constructor-arg name = "mapper" ref="bookMapperImp"/>
    </bean>
```



IOC如何注入这个属性呢？
通过构造器注入这个属性,我们配置文件中将mapper这个属性的添加方式提供了，那么接下来就是IOC容器调用构造方法将bean.xml文件中的属性注入到bookServiceImp

```
public class bookServiceImp implements bookService {
	private bookMapper mapper;
   public bookServiceImp(bookMapper mapper) {
        this.mapper = mapper;
    }
 }
```

(4):依赖的自动装配
概念:IOC容器根据bean所依赖的资源在容器中自动查找 并注入到bean的过程叫做 自动装配

bean.xml 那么这个里头的话 我们就不要再写 property 因为我们是自动查找依赖 一般使用的是按类型

```
<bean id = "bookMapperImp" class="com.wyi.mapper.Imp.bookMapperImp"/>
    <bean id = "bookServiceImp" class="com.wyi.service.Imp.bookServiceImp" autowire="byType"/>
```

bean中
也是需要为IOC中提供一个接口来将 这个属性注入进去 这个接口是set方法

```
private bookMapper mapper;

    @Override
    public void add2() {
        mapper.add();
    }

    public void setMapper(bookMapper mapper) {
        this.mapper = mapper;
    }
```

自动装配注意事项
自动装配用于引用类型依赖注入，不能对简单类型进行操作
使用按类型装配时(byType)必须保障容器中相同类型的bean唯一，推荐使用
使用按名称装配时(byName)必须保障容器中具有指定名称的bean,因变量名与配置耦合，不推荐使用
自动装配优先级低于setter注入与构造器注入，同时出现时自动装配配置失效
7:注解开发模式的依赖注入
(1):前言介绍
我们以前是需要用bean.xml,在其中我们需要写配置bean,那么现在我们改用注解了，想要添加那个bean对象，就在那个类上加上注解。

@Component
@Component的衍生注解(衍生的注解跟@Component注解作用相同)
@Service
@Controller
@Repository
(2):注解模式的依赖注入（单指自动装配）
这里我们只需要在相关联的bean上添加注解@Autowired 那么IOC容器就会扫描容器中的bean,(被扫描的bean就是用@component注解或者衍生注解修饰的bean)

Mybatis 是一个优秀的持久层框架。它采用的框架思想是ORM(对象关系映射)，这也是大多数持久层框架采用的思想。何为ORM呢。说简单点ORM实现的功能就是把我们的Java 实体类也数据库的字段对应起来，可以快速的实现Java实体类字段封装到sql 语句，把数据库查询出来的结果集封装到Java实体类。当然mybatis的功能不止这些，它还兼具了连接池，事务管理，查询结果缓存，动态sql ... mybatis体现的设计模式也是非常指的我们学习的比如mybatis 的实现采用了工厂模式，构建者设计模式，动态代理(map 语句代理)...
MVC 分别代表的是 模型 model 视图 view 控制器controller，model 模型主要代表的是我们的 service 层 dao 层 和我们的 实体类 它们设计主要的业务处理。view 主要代表的是用户直观看见交互的页面如 html,jsp... controller 主要指的是我们的web 负责处理请求与响应。

### Spring框架

Spig是一个开源框架，是为了解决企业应用程序开发复杂性而创建的，其主要优势之一就是分层架构。Spring提供了更完善的开发环境，可以为POjO(Plain Ordinary Java Object,普通Java对象）对象提供企业级的服务

上面我们说了，spring 框架不属于三层架构的任意一层，它工作在整个三层架构，这是怎么回事？因为 spring ，它的核心在IOC 和 AOP,IOC代表的是一个Java bean 容器，通过IOC 可以实现 控制反转和依赖注入，如此我们不在需要手动去new 对象，统一把 Java 对象交由 IOC 容器进行管理(依赖关系)，解耦我们的程序，基于这一特性，也利于我们spring 整合各类框架实现业务开发。AOP 的主要通过反射家动态代理实现已有方法增强，减少冗余代码，常用来进行 事务管理也日志记录。基于spring 的优良特性也诞生了我们优秀的微服务框架spring Boot,通过spring Boot 我们可以高效进行框架整合(启动器start)。



Spring框架核心

Spring设计目标：Spring为开发者提供一个一站式轻量级应用开发平台；

Spring设计理念：在JavaEE开发中，支持POJO和JavaBean开发方式，使应用面向接口开发，充分支持OO（面向对象）设计方法；Spring通过IoC容器实现对象耦合关系的管理，并实现依赖反转，将对象之间的依赖关系交给IoC容器，实现解耦；

Spring框架的核心：IoC容器和AOP模块。通过IoC容器管理POJO对象以及他们之间的耦合关系；通过AOP以动态非侵入的方式增强服务。

### 、IoC控制反转和DI依赖注入

　　传统程序设计中，我们需要使用某个对象的方法，需要先通过new创建一个该对象，我们这时是主动行为；而IoC是我们将创建对象的控制权交给IoC容器，这时是由容器帮忙创建及注入依赖对象，我们的`程序被动的接受IoC容器创建的对象`，控制权反转，所以叫控制反转。

　　由于IoC确实不够开门见山，所以提出了DI（依赖注入：Dependency  Injection）的概念，即让第三方来实现注入，以移除我们类与需要使用的类之间的依赖关系。总的来说，IoC是目的，DI是手段，创建对象的过程往往意味着依赖的注入。我们为了实现IoC，让生成对象的方式由传统方式(new)反转过来，需要创建相关对象时由IoC容器帮我们注入(DI)。

　　简单的说，就是我们类里需要另一个类，只需要让Spring帮我们创建 ，这叫做`控制反转`；然后Spring帮我们将需要的对象设置到我们的类中，这叫做`依赖注入`。


### Spring MVC框架

Spring MVC是一个Web开发框架，可以将它理解为Servlet,在MVC模式中，Spring MVC作为控制器(Controller)用于实现模型与视图的数据交互，是结构最清晰的。
Spring MVC框架采用松耦合、可插拔的组件结构，具有高度可配置性，与其他的MVC框架相比，具有更强的扩展性和灵活性。

### MyBatisi框架

MyBatis是Apache的一个开源项目iBatis,2010年这个项目由Apache Software Foundationi迁移到了Google Code,并且改名为MyBatis,2013年11月MyBatis.又被迁移到Github.
MyBatis是一个优秀的持久层框架，它可以在实体类和SQL语句之间建立映射关系，是一种半自动化的ORM(Object/,Relation Mapping,即对像关系映射)实现。MyBatis封装性要低于Hibernate,但它性能优越、简单易学，在互联网应用的开发中被广泛使用。

### SpringBoot框架

SpringBoot框架是Pivotal团队基于Spring开发的全新框架，其设计初表是为了简化Spring的配置，使用户能够构建独立运行的程序，提高开发效率
SpringBoot框架本身并不提供Spring框架的核心特性及扩展功能，它只是用于快速、敏捷地开发新一代基于Spring框架的应用，同时它还集成了大量的第三方类库（如Jackson、 JDBC、Redis等），使用户只需少量配置就能完成相应功能。

### Spring Cloud框架

Spring Cloud是一系列框架的有序集合，为开发人员构建微服务架构提供了完整的解决方案，它利用Spring Boot的开发便利性巧妙地简化了分布式系统的开发。例如，配置管理、服务发现、控制总线等操作，都可以使用Spring Boot做到一键启动和部署。可以说，Spring Cloud将Spring Boot框架进行了再封装，屏蔽掉了复杂的配置和实现原理，具有简单易懂、易部署和易维护等特点。

## JDBC



Spring容器最基本的接口就是BeanFactory。BeanFactory负责配置、创建、管理Bean；

 ApplicationContext由BeanFactory派生而来；BeanFactory的许多功能需要编程实现，而在ApplicationContext中则可以通过配置的方式实现；

ApplicationContext因此也称之为Spring上下文。Spring容器负责管理Bean与Bean之间的依赖关系。

------

### 二、案例学习

```
本篇同步会复习一下Spring作用域相关知识singleton + prototype
```

直接上案例看看ApplicationContext到底可以帮助我们做什么？

创建一个user对象

```java
@Data
public class User {
    private String id;
    private String name;
    private Integer age;
}
```



```java
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

    <!--    singleton-->
    <bean id="UserSingleton" class="com.chenxi.demo.po.User" scope="singleton">
        <property name="id" value="1"/>
        <property name="name" value="辰兮"/>
        <property name="age" value="22"/>
    </bean>

    <!--    prototype-->
    <bean id="UserPrototype" class="com.chenxi.demo.po.User" scope="prototype" >
        <property name="id" value="2"/>
        <property name="name" value="辰兮要努力"/>
        <property name="age" value="23"/>
    </bean>

</beans>
```



```java
import com.chenxi.demo.po.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @program: ApplicationContextDemo
 * @description: ApplicationContext入门学习
 * @author: 辰兮要努力
 * @create: 2021-11-10 22:07:54
 */
public class ApplicationContextDemo {

    //打印日志
    private static final Logger logger = LoggerFactory.getLogger(ApplicationContextDemo.class);

    public static void main(String[] args) {
        /**
         *
         * ApplicationContext体系结构
         * 主要实现类：
         * ClassPathXmlApplicationContext：默认从类路径加载配置文件
         * FileSystemXmlApplicationContext：默认从文件系统中装载配置文件
         */
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");

        /**
         * Singleton：单实例（在容器启动完成之前就已经创建好了，保存在容器中了，任何时候获取都是获取之前创建好的那个对象）
         */
        User user = (User) applicationContext.getBean("UserSingleton");
        User user1 = (User) applicationContext.getBean("UserSingleton");
        /**
         * 换一种写法：<T> T getBean(String var1, Class<T> var2) throws BeansException;
         */
        User user2 =  applicationContext.getBean("UserSingleton",User.class);

        logger.info("user.hashCode()是:{}",user.hashCode());
        logger.info("user1.hashCode()是:{}",user1.hashCode());

        logger.info("user是:{}",user);
        logger.info("user1是:{}",user1);
        logger.info("user == user1 :{}",user == user1);



        /**
         * Prototype：多实例（容器启动默认不会创建多实例bean对象，只有在获取的时候才创建，每次获取都会创建一个新的实例对象）
         */
        User user3 = (User) applicationContext.getBean("UserPrototype");
        User user4 = (User) applicationContext.getBean("UserPrototype");

        logger.info("user3.hashCode()是:{}",user3.hashCode());
        logger.info("user4.hashCode()是:{}",user4.hashCode());
        logger.info("user3是:{}",user3);
        logger.info("user4是:{}",user4);
        logger.info("user3 == user4 :{}",user3 == user4);

    }
}
```



```java
22:00:32.921 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user.hashCode()是:1446002
22:00:32.922 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user1.hashCode()是:1446002
22:00:32.922 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user是:User(id=1, name=辰兮, age=22)
22:00:32.922 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user1是:User(id=1, name=辰兮, age=22)
22:00:32.922 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user == user1 :true
22:00:32.923 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user3.hashCode()是:266875004
22:00:32.923 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user4.hashCode()是:266875004
22:00:32.923 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user3是:User(id=2, name=辰兮要努力, age=23)
22:00:32.923 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user4是:User(id=2, name=辰兮要努力, age=23)
22:00:32.923 [main] INFO com.chenxi.demo.utils.ApplicationContextDemo - user3 == user4 :false
```

代码逻辑

创建Spring的工厂类

```java
ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
1
```

通过工厂解析XML获取Bean实例

```java
User user = (User) applicationContext.getBean("UserSingleton");
1
```

 拓展补充

 1、对象相等则hashCode一定相等；
  2、hashCode相等对象未必相等

```
如上是我为什么会将两个对象用 == 来比较，刚好可以复习一下spring作用域相关知识点
```

------

 ApplicationContext总结

如果说BeanFactory是Spring的心脏，那么ApplicationContext就是完整的身躯了。

ApplicationContext由BeanFactory派生而来，提供了更多面向实际应用的功能。

创建一个测试类帮助我们学习ApplicationContext

优

劣势

JDBC是Java程序实现数据访问的基础，JDBC的劣势主要有以下几个方面。
(1)数据库连接创建、释放频繁会造成系统资源浪费，从而影响系统性能。
(2)SQL语句在代码中硬编码，造成代码不易维护，在实际应用的开发中，SQL变化的可能性较大。在传统JDBC编程中，SQL变动需要改变Jva代码，违反了开闭原则，
(3)用PreparedStatement向占有位符号传参数存在硬编码，因为SQL语句的where条件不一定，可能多也可能少，修改SQL需要修改代码，造成系统不易维护，
(4)JDBC对结果集解析存在硬编码（查询列名），SQL变化导致解析代码变化，造成系统不易维护，

1)导入Spring的jar包或Maven:坐标；
2)定义UserService接▣及其UserServicelmpl实现类：
3)创建beans..xml配置文件，将UserServicelmple的信息配置到该xml中：
4)编写测试代码，创建BeanFactory,加载配置文件，获取JserService实例对象

# **BeanFactory与ApplicationContext的区别**

# 1. 什么是 Spring Bean?

这是一个非常简单而又很复杂的问题，通常来说，`Spring beans` 就是被 `Spring 容器`所管理的 Java 对象，来看一个简单的例子：

```bash
public class myTest {

    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public void getMessage() {
        System.out.println("My Message : " + message);
    }
}
```

基于 XML 的配置中， beans.xml 为 Spring 容器管理 bean 提供元数据

# 2. 什么是 Spring 容器

Spring 容器负责实例化，配置和装配 Spring beans，下面来看如何为 IoC 容器配置我们的 HelloWorld POJO：

```bash
<?xml version = "1.0" encoding = "UTF-8"?>
<beans xmlns = "http://www.springframework.org/schema/beans"   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"   xsi:schemaLocation = "http://www.springframework.org/schema/beans   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
    <bean id = "helloWorld" class = "com.test.myTest">
        <property name = "message" value = "Hello World!"/>
    </bean>
</beans>
```

现在，它已经被 Spring 容器管理了，接下来的问题是：我们怎样获取它？

# 3. BeanFactory 和 ApplicationContext 的不同点

## 3.1 BeanFactory 接口

这是一个用来访问 Spring 容器的 root 接口，要访问 Spring 容器，我们将使用 Spring 依赖注入功能，使用 BeanFactory 接口和它的子接口

特性：Bean 的实例化/串联

通常情况，BeanFactory 的实现是使用`懒加载`的方式，这意味着 beans `只有在我们通过 getBean() 方法直接调用它们时才进行实例化`。

实现 BeanFactory 最常用的 API 是 XMLBeanFactory，这里是如何通过 BeanFactory 获取一个 bean 的例子：

```bash
package com.zoltanraffai;  
import org.springframework.core.io.ClassPathResource;  
import org.springframework.beans.factory.InitializingBean; 
import org.springframework.beans.factory.xml.XmlBeanFactory; 
public class HelloWorldApp{ 
   public static void main(String[] args) { 
      XmlBeanFactory factory = new XmlBeanFactory (new ClassPathResource("beans.xml")); 
      HelloWorld obj = (HelloWorld) factory.getBean("helloWorld");    
      obj.getMessage();    
   }
}
```

## 3.2 ApplicationContext 接口

ApplicationContext 是 Spring 应用程序中的中央接口，用于向应用程序提供配置信息，它`继承了 BeanFactory 接口`，所以 ApplicationContext 包含 BeanFactory 的所有功能以及更多功能！它的主要功能是支持大型的业务应用的创建。

特性：

- 继承`MessageSource`，因此支持国际化。

- 统一的资源文件访问方式。

  扩展了`ResourceLoader`(资源加载器)接口，有三个经常用到：

  

```bash
1。ClassPathXmlApplicationContext:从类路径中的XML文件载入上下文定义信息，把上下文定义文件当作类路径资源。

2。FileSystemXmlApplicationContext:从文件系统中的XML文件载入上下文定义信息。

3。XmlWebApplicationContext：从Web系统中的XMl文件载入上下文信息
```

强大的事件机制(Event)

基本上牵涉到事件(Event)方面的设计，就离不开观察者模式。ApplicationContext的事件机制主要通过`ApplicationEvent`和`ApplicationListener`这两个接口来提供的，和java swing中的事件机制一样。即当ApplicationContext中发布一个事件的时，所有扩展了ApplicationListener的Bean都将会接受到这个事件，并进行相应的处理。

Spring提供了部分`内置事件`，主要有以下几种：

```bash
ContextRefreshedEvent ：ApplicationContext发送该事件时，表示该容器中所有的Bean都已经被装载完成，此ApplicationContext已就绪可用 
ContextStartedEvent：生命周期 beans的启动信号  
ContextStoppedEvent: 生命周期 beans的停止信号  
ContextClosedEvent：ApplicationContext关闭事件，则context不能刷新和重启，从而所有的singleton bean全部销毁(因为singleton bean是存在容器缓存中的)
```

- 虽然，spring提供了许多内置事件，但用户也可根据自己需要来扩展spring中的事物。注意，要扩展的事件都要实现ApplicationEvent接口。
- 事件传递
- 对Web应用的支持
   与`BeanFactory`通常以`编程的方式`被创建不同的是，`ApplicationContext`能以`声明的方式`创建，如使用`ContextLoader`。当然你也可以使用ApplicationContext的实现之一来以编程的方式创建ApplicationContext实例 。

与 BeanFactory 懒加载的方式不同，它是预加载，所以，`每一个 bean 都在 ApplicationContext 启动之后实例化`，这里是 ApplicationContext 的使用例子：

> 它还可以为Bean配置lazy-init=true来让Bean延迟实例化

```bash
package com.zoltanraffai;  
import org.springframework.core.io.ClassPathResource;  
import org.springframework.beans.factory.InitializingBean; 
import org.springframework.beans.factory.xml.XmlBeanFactory; 
public class HelloWorldApp{ 
   public static void main(String[] args) { 
      ApplicationContext context=new ClassPathXmlApplicationContext("beans.xml"); 
      HelloWorld obj = (HelloWorld) context.getBean("helloWorld");    
      obj.getMessage();    
   }
}
```

### 3.2.1 结构图

ApplicationContext 接口的实现类，最常用的几个实现类为：

- `ClassPathXmlApplicationContext`(基于 xml 配置文件的 Ioc 容器)

  > main方法可以直接调用

- `AnnotationConfigApplicationContext`（基于注解的 Ioc 容器）

- XmlWebApplicationContext（web应用中基于 xml 文件的 Ioc 容器）

  > web应用，例如tomcat，web.xml配置了applicationContext.xml，负责加载applicationContext.xml。也就说tocmat内，默认的是XmlWebApplicationContext容器。前提是传统的外置tomcat，且非springboot项目，后者更复杂，暂不提

- `ServletWebServerApplicationContext` springboot使用内置tocmat 作为web容器时的IOC容器类(`默认内置了一个容器，无需用户定义，当使用外部tomcat时，需由用户指定`)，主要和前文提到的传统的外置tomcat，且非springboot项目默认使用XmlWebApplicationContext作为spring ioc容器

  > 更多的ServletWebServerApplicationContext 信息 参见 [ServletWebServerApplicationContext、SpringServletContainerInitializer、WebApplicationInitializer](https://blog.csdn.net/m0_45406092/article/details/122848311)



























接口 BeanFactory 和 [ApplicationContext](https://so.csdn.net/so/search?q=ApplicationContext&spm=1001.2101.3001.7020) 都是用来从`容器`中获取 `Spring beans` 的，但是，他们二者有很大不同

首先要知道什么是 Spring Bean、什么是 Spring 容器

# 1. 什么是 Spring Bean?

这是一个非常简单而又很复杂的问题，通常来说，`Spring beans` 就是被 `Spring 容器`所管理的 Java 对象，来看一个简单的例子

```bash
public class myTest {

    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public void getMessage() {
        System.out.println("My Message : " + message);
    }
}
```

# 什么是 Spring 容器

Spring 容器负责实例化，配置和装配 Spring beans，下面来看如何为 IoC 容器配置我们的 HelloWorld POJO：

```bash
<?xml version = "1.0" encoding = "UTF-8"?>
<beans xmlns = "http://www.springframework.org/schema/beans"   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"   xsi:schemaLocation = "http://www.springframework.org/schema/beans   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
    <bean id = "helloWorld" class = "com.test.myTest">
        <property name = "message" value = "Hello World!"/>
    </bean>
</beans>
```

现在，它已经被 Spring 容器管理了，接下来的问题是：我们怎样获取它？

# 3. BeanFactory 和 ApplicationContext 的不同点

## 3.1 BeanFactory 接口

这是一个用来访问 Spring 容器的 root 接口，要访问 Spring 容器，我们将使用 Spring 依赖注入功能，使用 BeanFactory 接口和它的子接口

特性：Bean 的实例化/串联

通常情况，BeanFactory 的实现是使用`懒加载`的方式，这意味着 beans `只有在我们通过 getBean() 方法直接调用它们时才进行实例化`。

实现 BeanFactory 最常用的 API 是 XMLBeanFactory，这里是如何通过 BeanFactory 获取一个 bean 的例子：

```bash
package com.zoltanraffai;  
import org.springframework.core.io.ClassPathResource;  
import org.springframework.beans.factory.InitializingBean; 
import org.springframework.beans.factory.xml.XmlBeanFactory; 
public class HelloWorldApp{ 
   public static void main(String[] args) { 
      XmlBeanFactory factory = new XmlBeanFactory (new ClassPathResource("beans.xml")); 
      HelloWorld obj = (HelloWorld) factory.getBean("helloWorld");    
      obj.getMessage();    
   }
}
```

## 3.2 ApplicationContext 接口

ApplicationContext 是 Spring 应用程序中的中央接口，用于向应用程序提供配置信息，它`继承了 BeanFactory 接口`，所以 ApplicationContext 包含 BeanFactory 的所有功能以及更多功能！它的主要功能是支持大型的业务应用的创建。

特性：

- 继承`MessageSource`，因此支持国际化。

- 统一的资源文件访问方式。

  扩展了`ResourceLoader`(资源加载器)接口，有三个经常用到：

  ```bash
  1。ClassPathXmlApplicationContext:从类路径中的XML文件载入上下文定义信息，把上下文定义文件当作类路径资源。
  
  2。FileSystemXmlApplicationContext:从文件系统中的XML文件载入上下文定义信息。
  
  3。XmlWebApplicationContext：从Web系统中的XMl文件载入上下文信息。
  12345
  ```

- 强大的事件机制(Event)

  基本上牵涉到事件(Event)方面的设计，就离不开观察者模式。ApplicationContext的事件机制主要通过`ApplicationEvent`和`ApplicationListener`这两个接口来提供的，和java swing中的事件机制一样。即当ApplicationContext中发布一个事件的时，所有扩展了ApplicationListener的Bean都将会接受到这个事件，并进行相应的处理。

  Spring提供了部分`内置事件`，主要有以下几种：

  ```bash
  ContextRefreshedEvent ：ApplicationContext发送该事件时，表示该容器中所有的Bean都已经被装载完成，此ApplicationContext已就绪可用 
  ContextStartedEvent：生命周期 beans的启动信号  
  ContextStoppedEvent: 生命周期 beans的停止信号  
  ContextClosedEvent：ApplicationContext关闭事件，则context不能刷新和重启，从而所有的singleton bean全部销毁(因为singleton bean是存在容器缓存中的) 
  1234
  ```

  虽然，spring提供了许多内置事件，但用户也可根据自己需要来扩展spring中的事物。注意，要扩展的事件都要实现ApplicationEvent接口。

- 事件传递

- 对Web应用的支持
   与`BeanFactory`通常以`编程的方式`被创建不同的是，`ApplicationContext`能以`声明的方式`创建，如使用`ContextLoader`。当然你也可以使用ApplicationContext的实现之一来以编程的方式创建ApplicationContext实例 。

与 BeanFactory 懒加载的方式不同，它是预加载，所以，`每一个 bean 都在 ApplicationContext 启动之后实例化`，这里是 ApplicationContext 的使用例子：

> 它还可以为Bean配置lazy-init=true来让Bean延迟实例化

```bash
package com.zoltanraffai;  
import org.springframework.core.io.ClassPathResource;  
import org.springframework.beans.factory.InitializingBean; 
import org.springframework.beans.factory.xml.XmlBeanFactory; 
public class HelloWorldApp{ 
   public static void main(String[] args) { 
      ApplicationContext context=new ClassPathXmlApplicationContext("beans.xml"); 
      HelloWorld obj = (HelloWorld) context.getBean("helloWorld");    
      obj.getMessage();    
   }
}
```

### 3.2.1 结构图

ApplicationContext 接口的实现类，最常用的几个实现类为：

- `ClassPathXmlApplicationContext`(基于 xml 配置文件的 Ioc 容器)

  > main方法可以直接调用

- `AnnotationConfigApplicationContext`（基于注解的 Ioc 容器）

- XmlWebApplicationContext（web应用中基于 xml 文件的 Ioc 容器）

  > web应用，例如tomcat，web.xml配置了applicationContext.xml，负责加载applicationContext.xml。也就说tocmat内，默认的是XmlWebApplicationContext容器。前提是传统的外置tomcat，且非springboot项目，后者更复杂，暂不提

- `ServletWebServerApplicationContext` springboot使用内置tocmat 作为web容器时的IOC容器类(`默认内置了一个容器，无需用户定义，当使用外部tomcat时，需由用户指定`)，主要和前文提到的传统的外置tomcat，且非springboot项目默认使用XmlWebApplicationContext作为spring ioc容器





















1)BeanFactory是Spring的早期接口，称为Spring的Bean工厂，ApplicationContext是后期更高级接口，称之为Spring容器：
2)ApplicationContext在BeanFactory基础上对功能进行了扩展，例如：监听功能、国际化功能等。BeanFactor的API更偏向底层，ApplicationContext的API大多数是对这些底层API的封装：
3)Bean创建的主要逻辑和功能都被封装在BeanFactory中，ApplicationContext不仅继承了BeanFactory,而且ApplicationContext内部还维护着BeanFactory的引用，所以，ApplicationContext与BeanFactory!既有继承系，又有融合关系。
4)Bean的初始化时机不同，原始BeanFactory是在首次调用getBean时才进行Bean的创建，ApplicationContext则是配置文件加载，容器一创建就将Beàn都实例化并初始化好，

# 基本介绍

​    过滤器，顾名思义就是对事物进行过滤的，在Web中的过滤器，当然就是对请求进行过滤，我们使用过滤器，就可以对请求进行拦截，然后做相应的处理，实现许多特殊功能。如登录控制，权限管理，过滤敏感词汇等.

## 过滤器原理

​    当我们使用过滤器时，过滤器会对游览器的请求进行过滤，过滤器可以动态的分为3个部分，**1.放行之前的代码，2.放行，3.放行后的代码**，这3个部分分别会发挥不同作用。

- 第一部分代码会对游览器请求进行第一次过滤，然后继续执行
- 第二部分代码就是将游览器请求放行，如果还有过滤器，那么就继续交给下一个过滤器
- 第三部分代码就是对返回的Web资源再次进行过滤处理

我们使用过滤器，也就是说，不止请求会经过过滤器，我们的响应也会经过过滤器。

# 使用过滤器(Filter)

​    我们使用过滤器肯定要导入相应的jar包才行，Filter就在servlet-api.jar中，我们将该jar包放到[WEB-INF](https://so.csdn.net/so/search?q=WEB-INF&spm=1001.2101.3001.7020)下的lib目录下面，然后加入项目。

## 创建过滤器([Fliter](https://so.csdn.net/so/search?q=Fliter&spm=1001.2101.3001.7020))

> ​    我们创建Filter，只需要继承Filter接口就行。

```java
import javax.servlet.*;



import java.io.IOException;



 



public class MyFilter implements Filter {



 



    @Override



    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {



 



    }



}
```

> ​    Filter接口有3个方法，但是只有一个方法没有实现，我们只需要实现这个方法就行。我们可以发现，我们实现了一个doFilter方法，这个方法就是我们写过滤代码的地方，具体逻辑就是和上面介绍的过滤器原理一样的。

------

## 使用过滤器(Filter)

​    我们先来感受一下如何使用过滤器，细节我们后面慢慢说明。我们在上面创建的类中写入以下代码，并且加一个WebFIlter注解

```java
import javax.servlet.*;



import javax.servlet.annotation.WebFilter;



import java.io.IOException;



 



@WebFilter("/*")



public class MyFilter implements Filter {



    



    @Override



    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {



        System.out.println("对request进行过滤");



        //下面这行代码就是放行



        filterChain.doFilter(servletRequest,servletResponse);



        System.out.println("对response进行过滤");



    }



}
```

> ​    我简单介绍下上面的代码，WebFilter("/*")表示对所有请求进行过滤,而在doFilter中的放行代码，也就是[filterChain](https://so.csdn.net/so/search?q=filterChain&spm=1001.2101.3001.7020).doFilter(servletRequest,servletResponse);这行代码就是对拦截进行放行，细节我们后面讲，现在先怎么理解就行。
>
> ​    启动服务器，然后我们在游览器中输入http://localhost:8080/filter/abc,注意，filter是我们自己配置的web工程路径，后面的abc随便输入的。我们下面来查看游览器后控制台输出。

> ​    **现在，我们就已经可以得出两个结论了，过滤器并不会管资源是否存在，而只会对配置的拦截路径进行拦截。拦截不仅会对请求进行拦截，而且还会对相应进行拦截。**

------

## 配置过滤器(Filter)拦截路径 

​    配置Filter的拦截路径有2种方式，一种是注解，一种是xml方式，我们分别进行讲解。

### 注解方式

​    我们如果使用注解来进行配置，那么我们就需要使用@WebFilter，我们不说废话，直接看该注解的源码。

   里面的配置项还是有很多的，下面我对常用配置项进行说明：

- filterName：该filter的名字
- initParams：初始化参数
- displayName：filter显示名称
- servletNames：指定对哪些servlet进行过滤
-  asyncSupported：是否支持异步模式
- urlPatterns：指定拦截路径
- value：指定拦截路径

> ​    **注意：urlPatterns和value是一样的。urlPatterns和value只能配置一个，不能两个都配置，两个都配置就会报错。**

​    对于使用**@WebFilter**,里面的多个参数用 **,** 进行分隔。 

>   **说明：如果我们仅仅需要配置一个拦截路径，那么我们可以直接简写@WebLister("拦截路径")，如@WebFilter("/\*")就是拦截所有请求。** 

------

### xml方式 

​    xml方式可以说是和Servlet使用xml配置方式一样了，这里就不废话，直接配置一个。

```XML
    <filter>



        <filter-name>myFilter</filter-name>



        <filter-class>com.clucky.filter.MyFilter</filter-class>



    </filter>



    <filter-mapping>



        <filter-name>myFilter</filter-name>



        <url-pattern>/*</url-pattern>



    </filter-mapping>
```

​    这个就是xml配置方式，只不过把注解换成了xml标签来配置，里面属性都是一样的，这个和Servlet的配置方式基本一样，这里就不再赘述了。

------

## 过滤器(Filter)生命周期

​    我们都知道Servlet有一个生命周期，当然Filter也有一个生命周期，下面我们就来探讨一下Filter的生命周期。

​    Filter的生命周期和Servlet也十分相似，如果大家对Servlet的生命周期不怎么熟悉，那么可以看一下这篇文章[Servlet生命周期](https://blog.csdn.net/m0_51545690/article/details/123122603)。

​    我们创建一个类，实现Filter的所有方法。

```java
import javax.servlet.*;



import java.io.IOException;



 



public class LifeCycleFilter implements Filter {



    @Override



    public void init(FilterConfig filterConfig) throws ServletException {



    }



 



    @Override



    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {



    }



 



    @Override



    public void destroy() {



    }



}
```

------

### 理论说明 

​     Filter有3个阶段，分别是初始化，拦截和过滤，销毁。

1. 初始化阶段：当服务器启动时，我们的服务器(Tomcat)就会读取配置文件，扫描注解，然后来创建我们的Filter。
2. 拦截和过滤阶段：只要请求资源的路径和拦截的路径相同，那么过滤器就会对请求进行过滤，这个阶段在服务器运行过程中会一直循环。
3. 销毁阶段：当服务器(Tomcat)关闭时，服务器创建的Filter也会随之销毁。

------

### 代码演示

​    Filter的三个阶段就对应着Filter的3个方法，**init方法会在Filter创建时调用，doFilter方法会在请求和拦截匹配时调用，destroy方法会在Filter销毁时调用**。我们来对这些方法进行编写验证。

```java
import javax.servlet.*;



import javax.servlet.annotation.WebFilter;



import java.io.IOException;



 



@WebFilter("/*")



public class LifeCycleFilter implements Filter {



    @Override



    public void init(FilterConfig filterConfig) throws ServletException {



        //这个方法就是初始化方法，在Filter创建时调用



        System.out.println("调用了init()方法");



    }



 



    @Override



    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {



        //这个方法就是过滤和拦截的方法，当请求和拦截匹配时调用



        System.out.println("调用了doFilter()方法");



    }



 



    @Override



    public void destroy() {



        //这个方法就是销毁方法，在Filter销毁前调用



        System.out.println("调用了destroy()方法");



    }



}
```

**启动服务器控制台输出**



## MyBatis

### 概述

MyBatis是一个支持普通SQL查询、存储过程以及高级映射的持久层框架，它消除了几乎所有的JDBC代码和参数的手动设置以及对结果集的检索，使用简单的XML或注解进行配置和原始映射，将接口和ava的POJO映射成数据库中的记录，使得Java开发人员可以使用面向对象的编程思想来操作数据库。

### ORM框架工作原理

MyBatis框架是一个ORM(Object/Relation Mapping,即对象关系映射)框架。所谓的ORM就是一种为了解决面向对象与关系型数据库中数据类型不匹配的技术，它通过描述Java对象与数据库表之间的映射关系，自动将v应用程序中的对象持久化到关系型数据库的表中。
ORM框架的工作原理可以通过一张图来展示。

### 问题

针对）JDBC编程的劣势，MyBatis:提供了以下解决方案，具体如下。
问题一：数据库链接创建、释放频繁会造成系统资源浪费，从而影响系统性能。
解决方案：在SqlMapConfig.xml中配置数据链接池，使用连接池管理数据库链接。
问题二：SQL语句在代码中硬编码，造成代码不易维护。在实际应用的开发中，SQL变化的可能较大，在传统JDBC编程中，SQL变动需要改变ava代码，违反了开闭原则，
解决方案：MyBatis:将SQL语句配置在MyBatis的映射文件中，实现了与ava代码的分离。

问题三：使用preparedStatement向占有位符号传参数存在硬编码，因为SQL语句的where条件不一定，可能多也可能少，修改SQL需要修改代码，造成系统不易维护。
解决方案：MyBatis自动将Java对像映射至SQL语句，通过Statement中的parameterType
定义输入参数的类型
问题四：JDBC对结果集解析存在硬编码（查询列名），SQL变化导致解析代码变化，造成系统不易维护。
解决方案：MyBatis自动将SQL执行结果映射至ava对像，通过Statement中的resultType定义输出结果的类型，

### 环境搭建

创建工程：
引入相关依赖：
数据库准备：
编写数据库连接信息配置文件：
编写核心配置文件和映射文件。

了解MyBatis核心对象的作用
掌握MyBatis核心配置文件及其元素的使用
掌握MyBatis映射文件及其元素的使用