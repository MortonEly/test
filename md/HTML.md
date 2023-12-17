# HTML

[WEB标准](https://baike.baidu.com/item/WEB标准)不是某一个标准，而是一系列标准的集合。

网页主要由三部分组成：结构（Structure）、表现（Presentation）和行为（Behavior）。

-  结构标准：相当于人的身体。html就是用来制作网页的。
-  表现标准： 相当于人的衣服。css就是对网页进行美化的。
-  行为标准： 相当于人的动作。JS就是让网页动起来，具有生命力的。

### 1、Web标准的三个规范

##### (1)结构(Structure)**HTML**

HTML英语意思是：Hypertext Marked  Language，即超文本标记语言,使用HTML语言描述的文件，需要通过WWW浏览器显示出效果。是一种最为基础的语言。所谓超文本，因为它可以加入图片、声音、动画、影视等内容，因为它可以从一个文件跳转到另一个文件，与世界各地主机的文件连接。所谓标记，就是它采用了一系列的指令符号来控制输出的效果，这些指令符号用“<标签名字属性>”来表示。

**(2)表现(Behaivor)**

表现标准语言主要包括CSS（Cascading Style Sheets）层叠式样式表，通过CSS样式表，W3C创建CSS标准的目的是以CSS取代HTML表格式布局、帧和其他表现的语言，通过CSS样式可以使页面的结构标签更具美感、网页外观更加美观。

##### (3)行为(Presentation)

行为是指页面和用户具有一定的交互，同时页面结构或者表现发生变化，标准主要包括对象模型（如W3C DOM）、ECMAScript并要求这三部分分离。

**①DOM**
DOM是Document Object  Model文档对象模型的缩写。DOM是一种与浏览器，平台，语言的接口，使得你可以访问页面其他的标准组件。简单理解，DOM解决了Netscaped的Javascript和Microsoft的Jscript之间的冲突，给予web设计师和开发者一个标准的方法，让他们来访问他们站点中的数据、脚本和表现层对像。

**②ECMAScript**
ECMAScript是ECMA(EuropeanComputer Manufacturers Association)制定的标准脚本语言（JAVAScript）



# [五大主流浏览器及四大内核](https://www.jianshu.com/p/f4bf35898719)

只是用户看到仅仅只是浏览器本身，却很少能看到浏览器最核心的部分—浏览器内核。从第一款libwww（Library  WorldWideWeb）浏览器发展至今已经经历了无数竞争与淘汰了。现在国内常见的浏览器有：IE、Firefox、QQ浏览器、Safari、Opera、Google  Chrome、百度浏览器、搜狗浏览器、猎豹浏览器、360浏览器、UC浏览器、遨游浏览器、世界之窗浏览器等。但目前最为主流浏览器有五大款，分别是IE、Firefox、Google Chrome、Safari、Opera。

浏览器最重要的部分是浏览器的内核。浏览器内核是浏览器的核心，也称“渲染引擎”，用来解释网页语法并渲染到网页上。浏览器内核决定了浏览器该如何显示网页内容以及页面的格式信息。不同的浏览器内核对网页的语法解释也不同，因此网页开发者需要在不同内核的浏览器中测试网页的渲染效果。

浏览器内核又可以分成两部分：渲染引擎(layout engineer 或者 Rendering Engine)和 JS  引擎。它负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS  等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。JS 引擎则是解析 Javascript 语言，执行 javascript 语言来实现网页的动态效果。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。有一个网页标准计划小组制作了一个  ACID 来测试引擎的兼容性和性能。内核的种类很多，如加上没什么人使用的非商业的免费内核，可能会有 10  多种，但是常见的浏览器内核可以分这四种：Trident、Gecko、Blink、Webkit。

1、IE浏览器：

IE是微软公司旗下浏览器，是目国内用户量最多的浏览器。IE诞生于1994年，当时微软为了对抗市场份额占据将近百分之九十的网景Netscape Navigator，于是在Windows中开发了自己的浏览器Internet  Explorer，自此也引发了第一次浏览器大战。结果可想而知，微软大获全胜，网景不得不将自己卖给AOL公司。但实际上事情并没有结束，网景后来开发了风靡一时的Firefox火狐，至今Firefox也成为世界五大浏览器之一。

1996年，微软从Spyglass手里拿到Spyglass Mosaic的源代码和授权，开始开发自己的浏览器IE。后来，微软以IE和Windows捆绑的模式不断向市场扩展份额，使IE成为市场的绝对主流。现在装了Windows系统的电脑基本无法卸载IE。

2、Opera浏览器：

Opera是挪威Opera Software  ASA公司旗下的浏览器。1995年，opera公司发布第一版Opera浏览器，使用自己研发的Presto内核。当时opera公司的开发团队不断完善Presto内核，使Opera浏览器一度成为顶级浏览器。直到2016年奇虎360和昆仑万维收购了Oprea浏览器，从此也丢弃了强大的Presto内核，改用当时Google开源的webkit内核。后来Opera浏览器跟随Google将浏览器内核改为Blink内核。自此Presto内核也淡出了互联网市场。

3、Safari浏览器：

第二次浏览器大战是从苹果公司发布Safari浏览器开始的。2003年，苹果公司在苹果手机上开发Safari浏览器，利用自己得天独厚的手机市场份额使Safari浏览器迅速成为世界主流浏览器。Safari是最早使用webkit内核的浏览器也是现在苹果默认的浏览器。

4、Firefox浏览器：

Firefox浏览器使Mozilla公司旗下浏览器，也是刚才提到的网景公司后来的浏览器。网景被收购后，网景人员创办了Mozilla基金会，这是一个非盈利组织，他们在2004年推出自己的浏览器Firefox。Firefox采用Gecko作为内核。Gecko是一个开源的项目，代码完全公开，因此受到很多人的青睐。Firefox的问世加快了第二次浏览器大战的开始。第二次浏览器大战与第一次二元鼎力的局面不同，这一次的特点就是百家争鸣，也自此打破了IE浏览器从98年网景被收购后独步浏览器市场的局面。

5、Chrome浏览器：

Chrome浏览器是google旗下的浏览器。Chrome浏览器至发布以来一直讲究简洁、快速、安全，所以Chrome浏览器到现在一直受人追捧。最开始Chrome采用webkit作为浏览器内核，直到2013年，google宣布不再使用苹果的webkit内核，开始使用webkit的分支内核Blink。

以上是五大浏览器的简介，接下来是四大内核。在介绍五大浏览器的同时也已经顺便介绍了四大内核。四大内核分别是：Trident（也称IE内核）、webkit、Blink、Gecko。五大浏览器采用的都是单内核，而随着浏览器的发展现在也出现了双内核。像360浏览器、QQ浏览器都是采用双内核。

作为前端开发，熟悉四大内核是非常有必要的。四大内核的解析不同使网页渲染效果更具多样化。下面总结一下各常用浏览器所使用的内核。

1、IE浏览器内核：Trident内核，也是俗称的IE内核；

2、Chrome浏览器内核：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核；

3、Firefox浏览器内核：Gecko内核，俗称Firefox内核；

4、Safari浏览器内核：Webkit内核；

5、Opera浏览器内核：最初是自己的Presto内核，后来是Webkit，现在是Blink内核；

6、360浏览器、猎豹浏览器内核：IE+Chrome双内核；

7、搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；

8、百度浏览器、世界之窗内核：IE内核；

9、2345浏览器内核：以前是IE内核，现在也是IE+Chrome双内核；

# Trident (['traɪd(ə)nt])

Trident(IE内核)：该内核程序在 1997 年的 IE4 中首次被采用，是微软在 Mosaic（"马赛克"，这是人类历史上第一个浏览器，从此网页可以在图形界面的窗口浏览） 代码的基础之上修改而来的，并沿用到 IE11，也被普遍称作 "IE内核"。

Trident实际上是一款开放的内核，其接口内核设计的相当成熟，因此才有许多采用 IE 内核而非 IE 的浏览器(壳浏览器)涌现。由于  IE 本身的 "垄断性"（虽然名义上 IE 并非垄断，但实际上，特别是从 Windows 95 年代一直到 XP 初期，就市场占有率来说 IE  的确借助 Windows 的东风处于 "垄断" 的地位）而使得 Trident 内核的长期一家独大，微软很长时间都并没有更新 Trident  内核，这导致了两个后果——一是 Trident 内核曾经几乎与 W3C 标准脱节（2005年），二是 Trident 内核的大量 Bug  等安全性问题没有得到及时解决，然后加上一些致力于开源的开发者和一些学者们公开自己认为 IE  浏览器不安全的观点，也有很多用户转向了其他浏览器，Firefox 和 Opera 就是这个时候兴起的。非 Trident  内核浏览器的市场占有率大幅提高也致使许多网页开发人员开始注意网页标准和非 IE浏览器的浏览效果问题。

补充：IE 从版本 11 开始，初步支持 WebGL 技术。IE8 的 JavaScript 引擎是 Jscript，IE9 开始用 Chakra，这两个版本区别很大，Chakra 无论是速度和标准化方面都很出色。

国内很多的双核浏览器的其中一核便是 Trident，美其名曰 "兼容模式"。

Window10 发布后，IE 将其内置浏览器命名为 Edge，Edge 最显著的特点就是新内核 EdgeHTML。关于 Edge 浏览器更多可以参考 [如何评价 Microsoft Edge 浏览器？](https://www.zhihu.com/question/29985708) 以及 [微软开源Edge的JS引擎ChakraCore](http://news.cnblogs.com/n/536912/)

关于 IE 的历史，推荐这篇文章 [激荡20年：IE浏览器的辉煌与落寞](http://www.ibailve.com/show/6-4027-1.html)

# Gecko (['gekəʊ])

Gecko(Firefox 内核)：Netscape6 开始采用的内核，后来的 Mozilla FireFox(火狐浏览器)  也采用了该内核，Gecko  的特点是代码完全公开，因此，其可开发程度很高，全世界的程序员都可以为其编写代码，增加功能。因为这是个开源内核，因此受到许多人的青睐，Gecko  内核的浏览器也很多，这也是 Gecko 内核虽然年轻但市场占有率能够迅速提高的重要原因。

事实上，Gecko 引擎的由来跟 IE 不无关系，前面说过 IE 没有使用 W3C  的标准，这导致了微软内部一些开发人员的不满；他们与当时已经停止更新了的 Netscape 的一些员工一起创办了 Mozilla，以当时的  Mosaic 内核为基础重新编写内核，于是开发出了 Gecko。不过事实上，Gecko 内核的浏览器仍然还是 Firefox (火狐)  用户最多，所以有时也会被称为 Firefox 内核。此外 Gecko 也是一个跨平台内核，可以在Windows、 BSD、Linux 和 Mac OS X 中使用。

# Webkit

一提到 webkit，首先想到的便是 chrome，可以说，chrome 将 Webkit内核 深入人心，殊不知，Webkit  的鼻祖其实是 Safari。现在很多人错误地把 webkit 叫做 chrome内核（即使 chrome内核已经是 blink  了），苹果都哭瞎了有木有。

Safari 是苹果公司开发的浏览器，使用了KDE（Linux桌面系统）的 KHTML 作为浏览器的内核，Safari  所用浏览器内核的名称是大名鼎鼎的 WebKit。 Safari 在 2003 年 1 月 7 日首度发行测试版，并成为 Mac OS X  v10.3 与之后版本的默认浏览器，也成为苹果其它系列产品的指定浏览器（也已支持 Windows 平台）。

如上述可知，WebKit 前身是 KDE 小组的 KHTML 引擎，可以说 WebKit 是 KHTML 的一个开源的分支。当年苹果在比较了 Gecko 和 KHTML 后，选择了后者来做引擎开发，是因为 KHTML 拥有清晰的源码结构和极快的渲染速度。

Webkit内核 可以说是以硬件盈利为主的苹果公司给软件行业的最大贡献之一。随后，2008 年谷歌公司发布 chrome 浏览器，采用的 chromium 内核便 fork 了 Webkit。

PS：Apple 在 Safari 里面使用了自己的 Nitro JavaScript 引擎（只用 WebKit 来渲染 HTML），所以一般说到 Webkit，通常指的就是渲染引擎（而不包括 Javascript 引擎）

# Chromium/Blink

2008 年，谷歌公司发布了 chrome 浏览器，浏览器使用的内核被命名为 chromium。

chromium fork 自开源引擎 webkit，却把 WebKit  的代码梳理得可读性提高很多，所以以前可能需要一天进行编译的代码，现在只要两个小时就能搞定。因此 Chromium 引擎和其它基于 WebKit  的引擎所渲染页面的效果也是有出入的。所以有些地方会把 chromium 引擎和 webkit 区分开来单独介绍，而有的文章把 chromium  归入 webkit 引擎中，都是有一定道理的。

谷歌公司还研发了自己的 Javascript 引擎，V8，极大地提高了 Javascript 的运算速度。

chromium 问世后，带动了国产浏览器行业的发展。一些基于 chromium 的单核，双核浏览器如雨后春笋般拔地而起，例如 搜狗、360、QQ浏览器等等，无一不是套着不同的外壳用着相同的内核。

然而 2013 年 4 月 3 日，谷歌在 Chromium Blog 上发表 [博客](http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html)，称将与苹果的开源浏览器核心 Webkit 分道扬镳，在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。

webkit 用的好好的，为何要投入到一个新的内核中去呢？

Blink 其实是 WebKit 的分支，如同 WebKit 是 KHTML 的分支。Google 的 Chromium 项目此前一直使用 WebKit(WebCore) 作为渲染引擎，但出于某种原因，并没有将其多进程架构移植入Webkit。

后来，由于苹果推出的 WebKit2 与 Chromium 的沙箱设计存在冲突，所以 Chromium 一直停留在  WebKit，并使用移植的方式来实现和主线 WebKit2 的对接。这增加了 Chromium 的复杂性，且在一定程度上影响了 Chromium 的架构移植工作。

基于以上原因，Google 决定从 WebKit 衍生出自己的 Blink 引擎（后由 Google 和 Opera Software  共同研发），将在 WebKit 代码的基础上研发更加快速和简约的渲染引擎，并逐步脱离 WebKit 的影响，创造一个完全独立的 Blink  引擎。这样以来，唯一一条维系 Google 和苹果之间技术关系的纽带就这样被切断了。

Google 和苹果在多个领域都是竞争对手，而唯独在浏览器引擎上有技术合作，利益一致。但为了各自的利益，谁都不会拿出 100% 的  "诚意" 来做好  WebKit，因为你做出来的成果竞争对手可以直接享用。移动互联网已经崛起，手机和平板设备端必将成为浏览器的另一个战场。这个时候，如果  Google 跟苹果仍然黏在一起，将会严重阻碍双方的进步，也会阻碍 WebKit 的进步。

据说 Blink 删除了 880w 行 webkit 代码。

至于为什么叫 blink？有兴趣的可以看下这篇访谈 [Paul Irish on Chrome Moving to Blink](http://alistapart.com/blog/post/paul-irish-on-chrome-moving-to-blink)，里面说

<pre style="position: relative;">[复制代码](javascript:;)it fits that Blink will never support the infamous <blink> tag. </pre>
Blink 引擎问世后，国产各种 chrome 系的浏览器也纷纷投入 Blink 的怀抱，可以在浏览器地址栏输入 `chrome://version` 进行查看。比如在 360 下：

![img](https://upload-images.jianshu.io/upload_images/815267-f922ca9910880819.png)

image

# Presto (['prestəʊ])

Presto 是挪威产浏览器 opera 的 "前任" 内核，为何说是 "前任"，因为最新的 opera 浏览器早已将之抛弃从而投入到了谷歌大本营。

Opera 的一个里程碑作品是 Opera7.0，因为它使用了 Opera Software **自主开发**的 Presto 渲染引擎，取代了旧版 Opera 4 至 6 版本使用的 Elektra 排版引擎。该款引擎的特点就是渲染速度的优化达到了极致，然而代价是牺牲了网页的兼容性。

Presto 加入了动态功能，例如网页或其部分可随着 DOM 及 Script 语法的事件而重新排版。Presto 在推出后不断有更新版本推出，使不少错误得以修正，以及阅读 Javascript 效能得以最佳化，并成为当时速度最快的引擎。

然而为了减少研发成本，Opera 在 2013 年 2 月宣布放弃 Presto，转而跟随 Chrome 使用 WebKit 分支的  Chromium 引擎作为自家浏览器核心引擎，Presto 内核的 Opera 浏览器版本永远的停留在了 12.17。在 Chrome 于  2013 年推出 Blink 引擎之后，Opera 也紧跟其脚步表示将转而使用 Blink 作为浏览器核心引擎。

Presto 与开源的 WebKit 和经过谷歌加持的 Chromium 系列相比毫无推广上的优势，这是 Opera 转投 WebKit  的主要原因，并且使用 WebKit 内核的 Opera 浏览器可以兼容谷歌 Chrome 浏览器海量的插件资源。但是换内核的代价对于 Opera 来说过于惨痛。使用谷歌的 WebKit 内核之后，原本快速，轻量化，稳定的 Opera 浏览器变得异常的卡顿，而且表现不稳定，Opera  原本旧内核浏览器书签同步到新内核上的工作 Opera 花了整整两年时间，期间很多 Opera  的用户纷纷转投谷歌浏览器和其他浏览器，造成了众多的用户流失。时至今日现在还有上千万人在使用老版本的 Opera。

很多人都认为 Opera 浏览器终止在了 12.17，此后所更新的 Opera 版本号不再是原来那个 Opera。

说好的 Presto Forever 呢？

# 关于移动端

移动端的浏览器内核主要说的是系统内置浏览器的内核。

目前移动设备浏览器上常用的内核有 Webkit，Blink，Trident，Gecko 等，其中 iPhone 和 iPad 等苹果  iOS 平台主要是 WebKit，Android 4.4 之前的 Android 系统浏览器内核是 WebKit，Android4.4  系统浏览器切换到了Chromium，内核是 Webkit 的分支 Blink，Windows Phone 8 系统浏览器内核是 Trident。

# 总结

浏览器内核主要指的是浏览器的渲染引擎，2013 年以前，代表有  Trident（IE），Gecko（firefox），Webkit（Safari chrome 等）以及 Presto（opera)。2013  年，谷歌开始研发 blink 引擎，chrome 28 以后开始使用，而 opera 则放弃了自主研发的 Presto  引擎，投入谷歌怀抱，和谷歌一起研发 blink 引擎，国内各种 chrome系的浏览器（360、UC、QQ、2345 等等）也纷纷放弃  webkit，投入 blink 的怀抱。



## 浏览器如何渲染网页

要了解浏览器渲染页面的过程，首先得知道一个名词——关键渲染路径。关键渲染路径是指浏览器从最初接收请求来的HTML、CSS、javascript等资源，然后解析、构建树、渲染布局、绘制，最后呈现给用户能看到的界面这整个过程。

用户看到页面实际上可以分为两个阶段：页面内容加载完成和页面资源加载完成，分别对应于`DOMContentLoaded`和`Load`。

- `DOMContentLoaded`事件触发时，仅当DOM加载完成，不包括样式表，图片等
- `load`事件触发时，页面上所有的DOM，样式表，脚本，图片都已加载完成

浏览器渲染的过程主要包括以下五步：

1. 浏览器将获取的HTML文档解析成DOM树。
2. 处理CSS标记，构成层叠样式表模型CSSOM(CSS Object Model)。
3. 将DOM和CSSOM合并为渲染树(`rendering tree`)，代表一系列将被渲染的对象。
4. 渲染树的每个元素包含的内容都是计算过的，它被称之为布局`layout`。浏览器使用一种流式处理的方法，只需要一次绘制操作就可以布局所有的元素。
5. 将渲染树的各个节点绘制到屏幕上，这一步被称为绘制`painting`。

需要注意的是，以上五个步骤并不一定一次性顺序完成，比如DOM或CSSOM被修改时，亦或是哪个过程会重复执行，这样才能计算出哪些像素需要在屏幕上进行重新渲染。而在实际情况中，JavaScript和CSS的某些操作往往会多次修改DOM或者CSSOM。

![img](https:////upload-images.jianshu.io/upload_images/3534846-00ef9f3d405462ef.png?imageMogr2/auto-orient/strip|imageView2/2/w/624/format/webp)

webkit渲染引擎流程

## 浏览器渲染网页的具体流程

#### 构建DOM树

当浏览器接收到服务器响应来的HTML文档后，会遍历文档节点，生成DOM树。
 需要注意以下几点：

- DOM树在构建的过程中可能会被CSS和JS的加载而执行阻塞
- `display:none`的元素也会在DOM树中
- 注释也会在DOM树中
- `script`标签会在DOM树中

无论是DOM还是CSSOM，都是要经过`Bytes→characters→tokens→nodes→object model`这个过程。

![img](https:////upload-images.jianshu.io/upload_images/3534846-770586311bb543d6?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp)

当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。

#### 构建CSSOM规则树

浏览器解析CSS文件并生成CSSOM，每个CSS文件都被分析成一个StyleSheet对象，每个对象都包含CSS规则。CSS规则对象包含对应于CSS语法的选择器和声明对象以及其他对象。
 在这个过程需要注意的是：

- CSS解析可以与DOM解析同时进行。
- CSS解析与`script`的执行互斥 。
- 在Webkit内核中进行了`script`执行优化，只有在JS访问CSS时才会发生互斥。

#### 构建渲染树（Render Tree）

通过DOM树和CSS规则树，浏览器就可以通过它两构建渲染树了。浏览器会先从DOM树的根节点开始遍历每个可见节点，然后对每个可见节点找到适配的CSS样式规则并应用。
 有以下几点需要注意：

- Render Tree和DOM Tree不完全对应
- `display: none`的元素不在Render Tree中
- `visibility: hidden`的元素在Render Tree中

![img](https:////upload-images.jianshu.io/upload_images/3534846-610f4ac0a1ad3401.png?imageMogr2/auto-orient/strip|imageView2/2/w/711/format/webp)

渲染树生成后，还是没有办法渲染到屏幕上，渲染到屏幕需要得到各个节点的位置信息，这就需要布局（Layout）的处理了。

#### 渲染树布局(layout of the render tree)

布局阶段会从渲染树的根节点开始遍历，由于渲染树的每个节点都是一个Render Object对象，包含宽高，位置，背景色等样式信息。所以浏览器就可以通过这些样式信息来确定每个节点对象在页面上的确切大小和位置，布局阶段的输出就是我们常说的盒子模型，它会精确地捕获每个元素在屏幕内的确切位置与大小。需要注意的是：

- `float`元素，`absoulte`元素，`fixed`元素会发生位置偏移。
- 我们常说的脱离文档流，其实就是脱离Render Tree。

#### 渲染树绘制（Painting the render tree）

在绘制阶段，浏览器会遍历渲染树，调用渲染器的`paint()`方法在屏幕上显示其内容。渲染树的绘制工作是由浏览器的UI后端组件完成的。

## 浏览器渲染网页的那些事儿

#### 浏览器主要组件结构

![img](https:////upload-images.jianshu.io/upload_images/3534846-379346e21d0d5c84.png?imageMogr2/auto-orient/strip|imageView2/2/w/400/format/webp)

浏览器主要组件

渲染引擎主要有两个：webkit和Gecko
 Firefox使用Geoko，Mozilla自主研发的渲染引擎。Safari和Chrome都使用webkit。Webkit是一款开源渲染引擎，它本来是为linux平台研发的，后来由Apple移植到Mac及Windows上。
 虽然主流浏览器渲染过程叫法有区别，但是主要流程还是相同的。

#### 渲染阻塞

JS可以操作DOM来修改DOM结构，可以操作CSSOM来修改节点样式，这就导致了浏览器在遇到``标签时，DOM构建将暂停，直至脚本完成执行，然后继续构建DOM。如果脚本是外部的，会等待脚本下载完毕，再继续解析文档。现在可以在`script`标签上增加属性`defer`或者`async`。脚本解析会将脚本中改变DOM和CSS的地方分别解析出来，追加到DOM树和CSSOM规则树上。

每次去执行JavaScript脚本都会严重地阻塞DOM树的构建，如果JavaScript脚本还操作了CSSOM，而正好这个CSSOM还没有下载和构建，浏览器甚至会延迟脚本执行和构建DOM，直至完成其CSSOM的下载和构建。所以，`script`标签的位置很重要。

JS阻塞了构建DOM树，也阻塞了其后的构建CSSOM规则树，整个解析进程必须等待JS的执行完成才能够继续，这就是所谓的JS阻塞页面。

由于CSSOM负责存储渲染信息，浏览器就必须保证在合成渲染树之前，CSSOM是完备的，这种完备是指所有的CSS（内联、内部和外部）都已经下载完，并解析完，只有CSSOM和DOM的解析完全结束，浏览器才会进入下一步的渲染，这就是CSS阻塞渲染。

CSS阻塞渲染意味着，在CSSOM完备前，页面将一直处理白屏状态，这就是为什么样式放在`head`中，仅仅是为了更快的解析CSS，保证更快的首次渲染。

需要注意的是，即便你没有给页面任何的样式声明，CSSOM依然会生成，默认生成的CSSOM自带浏览器默认样式。

当解析HTML的时候，会把新来的元素插入DOM树里面，同时去查找CSS，然后把对应的样式规则应用到元素上，查找样式表是按照从右到左的顺序去匹配的。

例如：`div p {font-size: 16px}`，会先寻找所有`p`标签并判断它的父标签是否为`div`之后才会决定要不要采用这个样式进行渲染）。
 所以，我们平时写CSS时，尽量用`id`和`class`，千万不要过渡层叠。

#### 回流和重绘（reflow和repaint）

我们都知道HTML默认是流式布局的，但CSS和JS会打破这种布局，改变DOM的外观样式以及大小和位置。因此我们就需要知道两个概念：`replaint`和`reflow`。

##### reflow（回流）

当浏览器发现布局发生了变化，这个时候就需要倒回去重新渲染，这个回退的过程叫`reflow`。`reflow`会从`html`这个`root frame`开始递归往下，依次计算所有的结点几何尺寸和位置，以确认是渲染树的一部分发生变化还是整个渲染树。`reflow`几乎是无法避免的，因为只要用户进行交互操作，就势必会发生页面的一部分的重新渲染，且通常我们也无法预估浏览器到底会`reflow`哪一部分的代码，因为他们会相互影响。

##### repaint（重绘）

`repaint`则是当我们改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸和位置没有发生改变。

需要注意的是，`display:none`会触发`reflow`，而`visibility: hidden`属性则并不算是不可见属性，它的语义是隐藏元素，但元素仍然占据着布局空间，它会被渲染成一个空框。所以`visibility:hidden`只会触发`repaint`，因为没有发生位置变化。

另外有些情况下，比如修改了元素的样式，浏览器并不会立刻`reflow`或`repaint`一次，而是会把这样的操作积攒一批，然后做一次`reflow`，这又叫异步`reflow`或增量异步`reflow`。但是在有些情况下，比如`resize`窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行`reflow`。

##### 引起reflow

现代浏览器会对回流做优化，它会等到足够数量的变化发生，再做一次批处理回流。

- 页面第一次渲染（初始化）
- DOM树变化（如：增删节点）
- Render树变化（如：`padding`改变）
- 浏览器窗口`resize`
- 获取元素的某些属性

浏览器为了获得正确的值也会提前触发回流，这样就使得浏览器的优化失效了，这些属性包括`offsetLeft、offsetTop、offsetWidth、offsetHeight、 scrollTop/Left/Width/Height、clientTop/Left/Width/Height`、调用了`getComputedStyle()`。

##### 引起repaint

`reflow`回流必定引起`repaint`重绘，重绘可以单独触发。
 背景色、颜色、字体改变（注意：字体大小发生变化时，会触发回流）

##### 减少reflow、repaint触发次数

- 用`transform`做形变和位移可以减少`reflow`
- 避免逐个修改节点样式，尽量一次性修改
- 使用`DocumentFragment`将需要多次修改的DOM元素缓存，最后一次性`append`到真实DOM中渲染
- 可以将需要多次修改的DOM元素设置`display:none`，操作完再显示。（因为隐藏元素不在`render`树内，因此修改隐藏元素不会触发回流重绘）
- 避免多次读取某些属性
- 通过绝对位移将复杂的节点元素脱离文档流，形成新的Render Layer，降低回流成本

## 几条关于优化渲染效率的建议

结合上文有以下几点可以优化渲染效率。

- 合法地去书写HTML和CSS ，且不要忘了文档编码类型。
- 样式文件应当在`head`标签中，而脚本文件在`body`结束前，这样可以防止阻塞的方式。
- 简化并优化CSS选择器，尽量将嵌套层减少到最小。
- DOM 的多个读操作（或多个写操作），应该放在一起。不要两个读操作之间，加入一个写操作。
- 如果某个样式是通过重排得到的，那么最好缓存结果。避免下一次用到的时候，浏览器又要重排。
- 不要一条条地改变样式，而要通过改变`class`，或者`csstext`属性，一次性地改变样式。
- 尽量用`transform`来做形变和位移
- 尽量使用离线DOM，而不是真实的网页DOM，来改变元素样式。比如，操作`Document Fragment`对象，完成后再把这个对象加入DOM。再比如，使用`cloneNode()`方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点。
- 先将元素设为`display: none`（需要1次重排和重绘），然后对这个节点进行100次操作，最后再恢复显示（需要1次重排和重绘）。这样一来，你就用两次重新渲染，取代了可能高达100次的重新渲染。
- `position`属性为`absolute`或`fixed`的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。
- 只在必要的时候，才将元素的`display`属性为可见，因为不可见的元素不影响重排和重绘。另外，`visibility : hidden`的元素只对重绘有影响，不影响重排。
- 使用`window.requestAnimationFrame()`、`window.requestIdleCallback()`这两个方法调节重新渲染。



#### 构建CSSOM规则树



浏览器解析CSS文件并生成CSSOM，每个CSS文件都被分析成一个StyleSheet对象，每个对象都包含CSS规则。CSS规则对象包含对应于CSS语法的选择器和声明对象以及其他对象。
在这个过程需要注意的是：



- CSS解析可以与DOM解析同时进行。

  

- CSS解析与`script`的执行互斥 。

  

- 在Webkit内核中进行了`script`执行优化，只有在JS访问CSS时才会发生互斥



### 标准格式

```css
<!DOCTYPE html>
<html lang="en">   //浏览器语言环境
<head>
    <meta charset="UTF-8">  //网站编码格式
    <title>Title</title>
</head>
<body>

</body>
</html>
```

### 注意事项

<html lang="en">:设置该页面的语言，“1ang”即language,“en”即english;表示该页面语言是英文，打开浏览器会出现下面弹框

<htm1l ang="zh">:表示该页面是中文，不会出现上面弹框
<html lang="ja">:表示该页面是日文，出现弹框

<meta charset:="UTF-8">:告诉浏览器该页面的编码格式，告诉浏览器用哪种格式“翻译”该页面。常见的字符编码有：gbk、unicode、utf-8







## 标签

### 分类

#### 双标签（双标记，成对标签）

双标记也称对标记，成对出现的标签，是指由开始和结束两个标记符组成的标记。其基本语法格式如下：

```css
<标记名></标记名>
```

#### 单标签（单标记）

单标记也称空标记，单个出现的标签，是指用一个标记符号即可完整地描述某个功能的标记。其基本语法格式如下：

```css
<标记名/>
```

```css
<br />
<!--换行-->
<hr />
<!--水平分隔线-->
<meta />
<img src="..." />
<input type="..." />
```



### 关系

#### 嵌套与并列

```
如果两个标签之间的关系是嵌套关系，子元素最好缩进一个tab键的身位（一个tab是4个空格）。如果是并列关系，最好上下对齐。
```

### 1.文件标签：构成htm1最基本的标签

·	html:html文档的根标签
·	head:头标签，用于指定htm1文档的一些属性，引入外部的资源
·	title:标题标签，
·	body:体标签
·	<IDOCTYPE html>:htm1s中定义该文档是html文档

### 2.文本标签：和文本有关的标签

#### 标签

1. 标题标签<h1><h6> 
2.  段落标签 <p>
3. 换行标签<br>
4. 水平线<hr>
5. 斜体<i>

#### 属性





​    







### 3.图片标签：

### 4.列表标签：

#### 无序列表

<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

需要注产的是，u1内部嵌套li，它们是父子关系。
规定：u1标签的内部必须只能嵌套li,1i标签的内留可以嵌套任何标签，甚至是ul的法，因为u1标密的内部不能嵌套除li标以外的其地标签

#### 有序

<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>

#### 自定义列表

主要标签 dl,dt,dd

<dl>
    <dt>1</dt>
    <dd>
      <p>
          a
        </p>  
        <p>
            c
        </p>
    </dd>
    <dt>1</dt>
    <dd>s</dd>
</dl>

d1英文：definition1ist表示创建一个自定义列表结构
dt英文：definition term定义主题或者定义术语，表示个列表的主题
dd英文：definition description定义解释项，表示解释和说明前面的主题内容
d1内部只能存放dt和dd,dt和dd是同级关系

#### 图像标签

<img>

##### 属性

src属性：它的值是图像文件的 URL，也就是引用该图像的文件的的绝对路径或相对路径。

alt属性：规定在图像无法显示时的替代文本。

假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：

- 网速太慢

- src 属性中的错误

- 浏览器禁用图像

- 用户使用的是屏幕阅读器

  

### 5.链接标签：

<a>超级链接标签



### 6.表格标益：

### 7.注释标签

 <!--注释-->

<!--br 换行-->

### 8.基础标签

#### 段落标签

<p>
    我是段落标签
</p>



#### 标题标签

<h1>1</h1>
<h2>
    2
</h2>

<h3>
    3
</h3>

<h4>
    4
</h4>

<h5>
    5
</h5>

<h6>
    6
</h6>

#### 换行标签

<p>
    你好
    <br>
    世界
</p>

#### 字体标签

##### 斜体

<i>

##### 粗体标签

### 表格

table 作用定义了一个表格的结构

tr rows 行

td dock 定义表格的单元格

例子

表头

<tr>

<th></th>



</tr>

合并（属性）

rowspan	上下跨行合并

clospan		左右跨行合并

表格分区

一·个完整的表格主要包含三个部分：表格标题、表格表头、表格的主题
一个 table内部实际还有三个分区标签组成
caption:定义表格的主题
thead:定义表格的头部，内部嵌套tr>th
tbody:定义表格主题，内部嵌套tr>td

<!DOCTYPE html>
<html lang="en">   //浏览器语言环境
<head>
    <meta charset="UTF-8">  //网站编码格式
    <title>Title</title>
</head>
<body>
    <table>
        <!————主题分区-->
        <caption>各地区资产投资情况</caption>
        <!--表头分区-->
        <thead>

```
    </thead>
    <!--主题分区-->
    <tbody>
        
    </tbody>
</table>
</body>
```
三、表单元素
表单元素是网页中提供给用户进行点击或者输入的控件

1. form是表单的意思
   fom是容器级标签，内部存放可输入的控件，如果输入的表单需要提交到数据，所有的控件需要被fom表单
   包裹
   method:方法的意思，指的数据提交的方法，函性值是post和get
   action:是数据提交的位置

2. input标签
   input标签是输入框的一种，但是不仅仅只有输入框，通过type两性，可以拓展多功能
   input的type属性非常丰富

   ​		输入框<input type="text">
<!DOCTYPE html>
<html lang="en">   //浏览器语言环境
<head>
    <meta charset="UTF-8">  //网站编码格式
    <title>Title</title>
</head>
<body>
    <form action="">
        <p>
            请输入：<input type="text" placeholder="请输入">
        </p>
    </form>
    </body>
</html>

​		密码框

<!DOCTYPE html>
<html lang="en">   //浏览器语言环境
<head>
    <meta charset="UTF-8">  //网站编码格式
    <title>Title</title>
</head>
<body>
    <form action="">
        <p>
            请输入：<input type="text" placeholder="请输入">
        </p>
        <br>密码：<input type="password" placeholder="密码">
    </br>
    </form>
    </body>
</html>
​		单选框
单选框
通过type值为radio设置的
单选按钮都是成组出现的
要想实现组单选按组的互斥，需要设置相同的nane属性


<!DOCTYPE html>
<html lang="en">   //浏览器语言环境
<head>
    <meta charset="UTF-8">  //网站编码格式
    <title>Title</title>
</head>
<body>
    <form action="">
        <p>
            请输入：<input type="text" placeholder="请输入">
        </p>
        <br>密码：<input type="password" placeholder="密码">
    </br>
    <p>
        性别：
        <input type="radio" nane="sex">男
        <input type="radio" nane="sex">女
        <input type="radio" nane="sex">
    </p>
    </form>
    </body>
</html>


复选框
也叫多选框，通过type值为checkbox设置

### 字符实体

### 布局标签

div和span都是常用的布局标签，俗称盒子
div:分制跨度大跨度
span:小区域小跨度

作用是用来网页页面的布局，div指的是跨度布局分制，span是文字分料
HTML+CsS又叫做div+CsS
d1v主要作用是进行网页布局的拆分，没有明确的语义
span标签的作用是一个极限小，只适用于文字的跨度划分





## 概念

HTML(HyperText Markup Language):超文本标记语言

1. 超文本：超越了文本的限制，比普通文本更强大，除了文字信息，还可以定义图片、音颜、视频等内容,
2. 标记语言：由标签构成的语言

HTML运行在浏览器上，HTML标签由浏览器来解析HTML标签都是预定义好的.例如：使用<img>展示图片

W3C标准：网页主要由三部分组成
结构：HTM
表现：CSS
行为：JavaScript

结构层：TL作用是从语义的角度讲进行网页结构的搭建
样式层：CSS作用从美观的角度讲修饰项顶面样式
交互层：JavaScript作用从交互的角度讲描述页面的行为

# css

## 概述

全称cascading style sheet,层叠式样式表，主要用于配合HTML结构，添加页面样式、辅助布局。

样式和布局		文字样式和盒模型的样式		个重要的特性就是辅助页面布局，完成HTML网不能完成的功能，比如并排显示，比如精确定位显示

## 文字三属性

color font-size font-family

### 字体颜色

< p style ="color:blue"></p>

属性值：颜色名、颜色值
颜色值：包含rgb(rgb模式是三原色(red、green、blue),rgb（红色，绿色，蓝色）逗号分隔每个颜色的色值，每个颜色的取值范围是0-255，一共就组成了1670万种颜色)和十六进制(十六进制：是将rgb颜色表示法进行了简化将十进制的0-255颜色表示法替换成了十六进制颜色表示法)

css代码

.rgb{

color:rgb(0,0,255)

}



十六进制颜色值的写法：使用#后面加红绿蓝三个颜色的十六进制的二位数写法
红色：#ff0000
绿色：#00ff00
蓝色：#0000ff
白色：#ffffff
黑色：#000000

部分特殊的十六进制是可以简化的，比如黑色#000000可以简化为#000，有些是不能简化的，比如#00ffab这种是不可以简化的

.c{

color:#0000ff;

}

### 大小font-size

属性值：

px为单位：数值是几表示字号是示多少像素
百分比为单位：参考的是继承的字号的百分比em为单位：数值是几表示继承字号的几倍

### 行高line-height

### 字体加粗font-weight

作用：设置字体是否进行加粗显示
属性值：单可法，数值法
数值：160-700，以整百为单位表示

### 字体font-family

作用：设置文字使用哪种字体显示
属性值：必须要用引号包裹，值可以有多个，中间使用逗号隔开

单词表示法：
normal表示正常的，没有加粗的
bold表示加粗，和数值700是相等的



### 样式的嵌入

- 行内式	

<div style ="width:100px;height:100px;background-color:red;"><div>

引入为止：正标签的style属性中，等号后面的引号内属性CS5样式，多个属性使用分号分隔

- 内嵌式

  <style>
      div{
          color:red;
          font-size:20px;
      }
  </style>

  

  节写位置：head标签的内部，title标签的下面，一对style标签中

- 外链式

  书写位置可head标签的内部，title标签的下面。一个link内部去进行问卷

  <link rel="stylesheet" href="css/1.css">
  1ink标签的作用就是引入外部文件，通过href属性，属性值是文件地址

  rel属性值如果是stylesheet,代表的就是引入样式表
  通过引入css文件到html文件中，从而实现样式的加载

  css文件的内部不需要写任何的标签，直接肠性css选择器和代码，因为C55文件内部是不允许属性HTML骨架
  的

  div{

  color:blue_book:;

  font-size: 20px;

  }

- 导入式

  书写位置：head标签的内部title标签下面style标签内，通过@import进行导入
  注意：导入式必须写在style标签的最顶

  
  
  
  
  | 样式表     | 优点                     | 缺点         | 使用情况                   | 控制范围     |
  | ---------- | ------------------------ | ------------ | -------------------------- | ------------ |
  | 行内样式表 | 书写方便，权重高         | 结构样式混写 | 较少                       | 控制一个标签 |
  | 内部样式表 | 部分结构和样式相分离     | 没有彻底分离 | 较多                       | 控制一个页面 |
  | 外部样式表 | 完全实现结构和样式相分离 | 需要引入     | 最多，吐血推荐控制多个页面 |              |
  
  

## css选择器

CSS2.1版本的选择器，包含基础选择器和高级选择器,**选择器是一种模式，用于选择需要添加样式的元素。**

- 基础选择器，标签选择器、类名选择器、id选择器、通配符选择器

- 高级选择器：后代选择器、交集选择器、并集选择器

| 选择器       | 权值  |
| ------------ | ----- |
| limportant   | 10000 |
| 内联样式     | 1000  |
| id选择器     | 100   |
| class选择器  | 10    |
| 元素选择器   | 1     |
| 通配符选择器 | 0     |

**当权重一样时，后面的样式会覆盖前面定义的样式**

- !important
- 内联样式
- ID选择器(文档中只能使用一次)
- class选择器
- 元素选择器
- 通配符选择器

### 基础选择器

基础语法：

```css
标记名{
    属性1:属性值1;
    属性2:属性值2;
    ······
}
```

#### 标签



#### 类

类选择器使用`"."`(英文点号)进行标识，后面紧跟类名，其基本语法格式为：

.类名{ 属性1：属性值1；

属性2：属性值2；}

#### id 

id选择器和类选择器相似，只不过是用`#`进行标识，其后紧跟id名，其基本语法格式如下：

样式#定义，结构id调用，只能定义一次

```css
#id名{
	属性1:属性值1;
    属性2:属性值2;
    ······
}
```

该语法中，id名即为HTML元素的id属性值。大多数HTML元素都可以定义id属性，**元素的id属性是唯一的**，只能对应于文档中的某一个具体的元素。

#### 通配符

通配符选择器用`*`号表示，它是所有选择器中`作用范围最广`的，能匹配页面中所有的元素。其基本语法格式为：

```css
*{
    属性1:属性值1;
    属性2:属性值2;
    ······
}
```

#### 标签指定样式选择器

标签指定式选择器又称为交集选择器，由两个选择器构成，其中第一个为标记选择器，第二个为`class`选择器或`id`选择器，两个选择器之间不能有空格，如`h3.special`或`p#one`。

#### 属性选择器

[标签名称] { 属性1：属性值1；属性2：属性值2；}

#### 后代选择器



后代选择器用来选择元素或元素组的后代，其写法就是把外层标记写在前面，内层标记写在后面，中间用空格分隔。当标记发生嵌套时，内层标记就成为外层标记的后代。

```css
p strong{
    color:red;
}
strong{
    color:green;
}
```

### 区别

### 优先级

1. 通用选择器

2. 元素（类型）选择器

3. 类选择器

4. 属性选择器

5. 伪类

6. ID 选择器

7. 内联样式

   

| 选择器       | 作用                         | 缺点               | 使用情况 | 用法                                   |
| ------------ | ---------------------------- | ------------------ | -------- | -------------------------------------- |
| 标签选择器   | 选出所有相同的标签，eg:p标签 | 不能差异化选择     | 较多     | p{属性1：属性值；}                     |
| 类选择器     | 可选一个或多个标签           | 可根据需求选择     | 非常多   | .color{属性1：属性值；}  class="color" |
| id选择器     | 一次只能选择一个标签         | 每个标签只能用一次 | 不推荐   | #nav{属性1：属性值；}id="nav"          |
| 通配符选择器 | 选择全部标签                 | 选择太多不够细化   | 不推荐   | *{属性1：属性值；}                     |

| 选择器         | 优先级             |
| -------------- | ------------------ |
| !important     | 最高优先级（慎用） |
| 内联样式       | 1，0，0，0         |
| id选择器       | 0，1，0，0         |
| 类和伪类选择器 | 0，0，1，0         |
| 元素选择器     | 0，0，0，1         |
| 通配选择器     | 0，0，0，0         |
| 继承的样式     | 没有优先级（最低） |

## 权重

1.权重是有4组数字组成但是不会有进位。
2.可以理解为类选择器永远大于元素选择器i选择器永远大于类选择器，以此类推
3.等级判断从左向右，如果某一位数值相同，则判断下一位数值。
4.可以简单记忆法：通配符和继承权重为0，标签选择器为1，类（伪类）选择器为10,i选泽器100，行内样式表为1000,important无穷大，
5.继承的权重是0，如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是0。

## css浮动

## css图片

width

height

background

复合属性

### 属性

background-image:url()

background-color

background-repeat:no-repeat;

background-position:水平

## css字体

字体	font-family:"字体";

大小	font-size: ;默认大小为16px

粗细	font-weight:

样式  font-style:

复合属性font:font-style font-weight font size/line-height font-family;

| 属性        | 表示     | 注意点                                                       |
| ----------- | -------- | ------------------------------------------------------------ |
| font-size   | 字号     | 我们通常用的单位是x像素，一定要跟上单位                      |
| font-family | 字体     | 实际工作中按照团那队约定来写字体                             |
| font-weight | 字体粗细 | 记住加粗是700或者bold不加粗是normal或者400记住数字不要跟单位 |
| font-style  | 字体样式 | 记住倾斜是italic不倾斜是normal工作中我们最常用normal         |
| font        | 字体连写 | 1.字体连写是有顺序的不能随意换位置2.其中字号和字体必须同时出现 |

## 文本

### 对齐text-align

作用：用来设置段落的整体水平方向对齐

属性值：left、center、right 

text-align:center;

| 属性值 | 解释             |
| ------ | ---------------- |
| left   | 左对齐（默认值） |
| right  | 右对齐           |
| center | 居中对齐         |

### 修饰

作用：设置文本整体是否有线条修饰属性值：

none:没有修饰

overline:上划线

line-through:中划线、删除线

underline:下划线

<style>
.none{
text-decoration:none;
}
.overline{
text-decoration:overline;
}
.line-through{
text-decoration:line-through;
}
.underline{
text-decoration:underline;
}
</style>

| 属性值       | 描述                          |                      |
| ------------ | ----------------------------- | -------------------- |
| none         | 默认。没有装饰线（最常用）    |                      |
| underline    | 下划线，链接a自带下划线（常用 |                      |
| overline     |                               | 上划线。（几乎不用） |
| line-through | 刷除线。（不常用）            |                      |

### 缩进

作用：设置段落首行缩进
属性值：
px单位数值表示数字是多少代表首行缩进多少像素

text-indent属性用来指定文本的第一行的缩进，通常是将段落的首行缩进

百分比表示法：参考标签的父级width属性值的百分比

以em为单位：数字是几表示首行缩进几个中文字符。最常用的设置em是一个相对单位，就是当前元素(font-siz)1个文字的大小，如果当前元素没有设置大小，则会按照父元素的1个文字大小。

#### 行间距

line-height属性用于设置行间的距离（行高），可以控制文字行与行之间的距离。

行间距位上下间距+文本高度

| 属性            | 表示     | 注意点                                              |
| --------------- | -------- | --------------------------------------------------- |
| color           | 文本颜色 | 我们通常用十六进制比如而且是简写形式#               |
| text-align      | 文本对齐 | 可以设定文字水平的对齐方式                          |
| text-indent     | 文本缩进 | 通常我们用于段落首行缩进2个字的距离text-indent:2em; |
| text-decoration | 文本修饰 | 记住添加下划线underline取消下划线none               |
| line-height     | 行高     | 控制行与行之间的距离                                |



### 颜色

| 表示表示       | 属性值                              |
| -------------- | ----------------------------------- |
| 预定义的颜色值 | red,green,blue,还有我们的御用色pink |
| 十六进制       | #FF0000,#FF6600,#29D794             |
| RGB代码        | rgb(255,0,0)或rgb100%,0%,0%)        |



### 

## 盒子模型

又叫框模型、是css的重婴布局属性，包含了五个属性，width(宽度)、height(高度)、padding(内边距)border(边框)、margin(外边距)
盒子的实际加我区域：width+height
盒子可实体化最示区域：width+height+padding+border
盒子实际占位区城：width+height-padding+border+magin



## 拓展

### 1、清除默认样式

很多标签都有自己的默认样式，这些默认样式是开发中不需要的，比如1系列标签的字号加粗，比如p标签的
默认边距，比如ul,1i的默认小圆点
清除默认样式

body,div,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,th,td,input{
margin:0;
padding:0;
}
u1,o1{
list-style:none;
}
h1,h2,h3,h4,h5,h6{
font-weight:normal;
font-size:100%;
}

overflow:visible;
overflow:hidden;
overflow:scroll;
overflow:auto;
height:auto 

## 二、标准文档流

思考·个问题，我们开发网页是更像写ord还是更像画图？答更像写wod,因为我们开发网页有自己的书写规律，从上往下，从左住右，前面内容的变化公影响后面内容的位置
以上也是标准文档流的特性
HTM文件就是一种标准文档流文件，也有自己的一些特性

### 元素类型

从HTLM的角度讲元素分为连个极别：容器级和文本级
从CSS的角度的讲将元素分为三种类型：块级元素，行内元素，行内块元素

常用的块级元素：div、p、h1-h6,ul,ol,d1等等

#### 行内元素

特点：文字并排显示，不能设置盒子的宽度和高度

常用的行内元素：span、a、b、u、i等等。

行内块元素
特点：可以设置宛度和商度。并且盒子也可以并排显示

display显示模式

大部分标签默认的时候都会以各自的显示状态（类型）进行加载，标答的显示状态并不是固定不变的，可以通过css属性display进行切换
display属性值
block:砖、块的意思，表小标签要以块级元素加载
display:block;
display: inline行内，表示将标签以行内元素进行加载
displau:inline-block行内块，表示将标签以行内块元素进行加载

## 浮动



## 复合选择器

在CSS中，可以根据选择器的类型把选择器分为基础选挥器和复合选挥器，复合选择器是建立在基础选择器之上，对基本选择器进行组合形成的。
·复合选择器可以更准确、更高的选择目标元素（标签）
·复合选择器是由两个或多个基选择器，通过不同的方式组合而成的
·常用的复合选择器包括：后代选刻择器、子选挥器、并集选择器、伪类选岁择器等等

### 后代选择器

后代选择器又称为包含选择器，可火选择父元素甲面子元素。其写法就是把外层标签写在前面，内层标签写在
后面，中间用空格分隔当标签发生嵌套时，内层标签就成为外层标签的后代，
语法：
元素1	元素2	{样式声明}
上述语法表示选择元素1里而的所有元素2{后代元素}，
例如：
u1 li	{样式声明}/*选择u1里面所有的11标签元素*/

元素1和元素2中间用空格隔开
元素1是父级，元素2是子级，最终选择的是元素2
元素2可以是儿子，也可以是孙子等，只要是元素1的后代即可

### 子选择器

子元素选择器（子选择器）只能选择作为某元素的最近一级子元素。简单理解就是选亲儿子元素
语法：
	元素1>元素2	{样式声明}
上述语法表示选择元素1里面 的所有直接后代（子元素闲元素2,
例如：
	div>p	{样式声明}	/*选择div里面所有最近-级p标签元素*/

- 元素1和元素2中间用大于号隔开
- 元素1是父级，元素2是子级，最终选挥的是元素2
- 元素2必须是亲儿子今其孙子、重孙之类都不归他管。你也可以叫他亲儿子选择器

### 并集选择器

并集选择器可以选择多组标签同时为他们定义相同的样式。通常用于集体声明
并集选择器是各选择器通过英文逗号(，)连接而成，任何形式的选择器都可以作为并集选择器的一部分。
语法：

```HTML
#元素1，元素2{样式声明}
#选择元素1和元素2
例如
ul,div{样式声明}	/选择ul和div标签元素·/
```

- 元素1和元素2中间用逗号隔开
- 逗号可以理解为和的意思
- 并集选择器通常用于集体声明

### 伪类选择器

伪类选择用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第1个，第n个元素。
伪类选择器书写最大的特点是用冒号(：)表示，比如：hover、:irst-child。

#### 链接
``` a:link
/*选择所有未被访问的链接*/
a:visited
/*选择所有已被访问的链接*/
a:hover
/*选择佩标指针位于其上的链接*/
a:active
/*选拌活动链接（鼠标按下未弹起的接）*/
```

<!---->

#### :focus伪类选择器

:focus伪类选择器用于选取获得焦点的表单元素
焦点就是光标，一般情况<iput>类表单元素才能获取，因此这个选择器也主要针对于表单元素来说，

## 2.CSS的元素显示模式

了解元素的显示模式可以更好的让我们布局页面
什么是元素的显示模式

元素显示横式就是元素（标签）以什么方式进行显示，比如<div>自己占一行，比如一行可可以放多个<Span>。

1. 元素显示模式的分类
2. 元素显示模式的转换

### 分类

#### 块元素

1. 比较霸道，自己独占一行。
2. 高度，宽度、外边距以及内边距都可以控制
3. 宽度默认是容器（父级宽度）的100%，
4. 是一个容器及盒子，里面可以放行内或者块级元素

注意

文字类的元素内不能使用块级元素
<p>标签主要用于存放文字，因此<p>里面不能放块级元素，特别是不能放<dv>
同理，<h1>````<h6>等都是文字类块级标签，里面也不能放其他块级元素

#### 行内元素

特点

1. 相邻行内元素在一行上，一行可以显示多个。
2. 高、宽直接设置是无效的。
3. 默认宽度就是它本身内容的宽度。
4. 行内元素只能容纳文本或其他行内元素

注意

- 链接里面不能再放链接
- 特殊情况链接<à>里面可以放块级元素，但是给<a>转换一下块级模式最安全

#### 行内块元素

在行内元素中有几个特殊的标签一<img/>、<iput/>、<td>,它们同时具有块元素和行内元素的特点。
有些资料称它们为行内块元素。
行内块元素的特点：
和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙一行可以显示多个（行内元素特点）。
默认宽度就是它本身内容的宽度（待内元素特点），
高度，行高、外边距以及内边距都可以控制（块级元素特点）。



元素显示模式总结

## 元素显示模式转换

特殊情况下，我们需要元素榄式的转换，简单理解一个模式的元素需要另外一种榄式的特性比如想要增加链接<a>的触发范围。

### 转换机制

转换为块元素：display:block

转换为行内元素：display.inline

转换为行内块：display:inline-block



**ViewModel是Vue.js的核心，它是一个Vue实例。**Vue实例是作用于某一个HTML元素上的，这个元素可以是HTML的body元素，也可以是指定了id的某个元素。

当创建了ViewModel后，双向绑定是如何达成的呢？

首先，我们将上图中的DOM Listeners和Data Bindings看作两个工具，它们是实现双向绑定的关键。
从View侧看，ViewModel中的DOM Listeners工具会帮我们监测页面上DOM元素的变化，如果有变化，则更改Model中的数据；
从Model侧看，当我们更新Model中的数据时，Data Bindings工具会帮我们更新页面中的DOM元素。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>

	<body>
		<!--这是我们的View-->
		<div id="app">
			{{ message }}
		</div>
	</body>
	<script src="js/vue.js"></script>
	<script>
		// 这是我们的Model
		var exampleData = {
			message: 'Hello World!'
		}

		// 创建一个 Vue 实例或 "ViewModel"
		// 它连接 View 与 Model
		new Vue({
			el: '#app',
			data: exampleData
		})
	</script>
</html>
使用Vue
```

使用Vue的过程就是定义MVVM各个组成部分的过程的过程。

1. **定义View**
2. **定义Model**
3. **创建一个Vue实例或"ViewModel"，它用于连接View和Model**

在创建Vue实例时，需要传入一个**选项对象**，选项对象可以包含数据、挂载元素、方法、模生命周期钩子等等。

在这个示例中，**选项对象**的**el属性**指向View，`el: '#app'`表示该Vue实例将挂载到`...`这个元素；**data属性**指向Model，`data: exampleData`表示我们的Model是exampleData对象。
Vue.js有多种数据绑定的语法，最基础的形式是文本插值，使用一对大括号语法，在运行时`{{ message }}`会被数据对象的message属性替换，所以页面上会输出"Hello World!"。

### 双向绑定示例

MVVM模式本身是实现了双向绑定的，在Vue.js中可以使用`v-model`指令在表单元素上创建双向数据绑定。

```html
<!--这是我们的View-->
<div id="app">
	<p>{{ message }}</p>
	<input type="text" v-model="message"/>
</div>
```

将message绑定到文本框，当更改文本框的值时，`{{ message }}` 中的内容也会被更新

# Vue.js的常用指令

上面用到的`v-model`是Vue.js常用的一个指令，那么指令是什么呢？

**Vue.js的指令是以v-开头的，它们作用于HTML元素，指令提供了一些特殊的特性，将指令绑定在元素上时，指令会为绑定的目标元素添加一些特殊的行为，我们可以将指令看作特殊的HTML特性（attribute）。**

Vue.js提供了一些常用的内置指令，接下来我们将介绍以下几个内置指令：