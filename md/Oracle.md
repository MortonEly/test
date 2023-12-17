只有具备sysdba和sysoper系统特权的用户才能启动和关闭数据库。
在启动数据库之前应该启动监听程序，否则就不能利用命令方式来管理数据库，包括启动和关闭数据库。
虽然数据库正常运行，但如果没有启动监听程序，客户端就不能连接到数据库。

在oracle用户下：
启动监听程序 `lsnrctl start`
关闭监听程序`lsnrctl stop`
查询监听程序状态`lsnrctl status`

```
startup支持参数

STARTUP options | upgrade_options

options为：[FORCE] [RESTRICT] [PFILE=filename] [QUIET] [ MOUNT [dbname]

| [ OPEN [open_options] [dbname] ] | NOMOUNT ]，

NOMOUNT、MOUNT、OPEN为startup的三个阶段，不能在命令中同时存在。其中，open_options为：READ {ONLY

| WRITE [RECOVER]} | RECOVER。

upgrade_options为：[PFILE=filename] {UPGRADE | DOWNGRADE} [QUIET]
```

### Oracle数据库的完整启动过程包含以下3个步骤：

**简单地说，就是：启动实例-->加载数据库-->打开数据库.**

------

#### 1.创建并启动与数据库对应的实例。

在启动实例时，将为实例创建一系列后台进程和服务进程，并且在内存中创建SGA区等内存结构。在实例启动的过程中只会使用到初始化参数文件，数据库是否存在对实例的启动没有影响。如果初化参数设置有误，实例将无法启动。

#### 2.为实例加载数据库。

加载数据库时实例将打开数据库的控制文件，从控制文件中获取数据库名称、数据文件的位置和名称等有关数据库物理结构的信息，为打开数据库做好准备。如果控制文件损坏，则实例将无法加载数据库。在加载数据库阶段，实例并不会打开数据库的物理文件----数据文件和重做日志文件。

#### 3.将数据库设置为打开状态。

打开数据库时，实例将打开所有处于联机状态的数据文件和重做日志文件。控制文件中的任何一个数据文件或重做日志文件无法正常打开，数据库都将返回错误信息，这时需要进行数据库恢复。

只有将数据库设置为打开状态后，数据库才处于正常状态，这时普通用户才能够访问数据库。在很多情况下，启动数据库时并不是直接完成上述3个步骤，而是逐步完成的，然后执行必要的管理操作，最后才使数据库进入正常运行状态。所以，才有了各种不同的启动模式用于不同的数据库维护操作。

因为Oracle数据库启动过程中不同的阶段可以对数据库进行不同的维护操作，对应我们不同的需求，所以就需不同的模式启动数据库。

小白：在启动实例之前，需要先启动SQL*Plus，并以一个用户身份连接到Oracle。

### 启动模式详解

#### 1.NoMount 模式（启动实例不加载数据库）

命令：`startup nomount`
讲解：这种启动模式只会创建实例，并不加载数据库，Oracle仅为实例创建各种内存结构和服务进程，不会打开任何数据文件。在NoMount模式下，只能访问那些与SGA区相关的数据字典视图，包括`V$PARAMETER`、`V$SGA`、`V$PROCESS` 和 `V$SESSION`等，这些视图中的信息都是从SGA区中获取的，与数据库无关。非安装启动，这种方式启动下可执行:重建控制文件、重建数据库、读取init.ora文件，启动instance，即启动SGA和后台进程，这种启动只需要init.ora文件。

模式用途：
(1)创建新数据库；
(2)重建控制文件。

#### 2.Mount模式（加载数据库但不打开数据库）

命令：`startup mount`
讲解：这种启动模式将为实例加载数据库，但保持数据库为关闭状态。因为加载数据库时需要打开数据库控制文件，但数据文件和重做日志文件都都无法进行读写，所以用户还无法对数据库进行操作。 在Mount模式下，只能访问那些与控制文件相关的数据字典视图，包括`V$THREAD`、`V$CONTROLFILE`、`V$DATABASE`、`V$DATAFILE` 和 `V$LOGFILE`等，这些视图都是从控制文件中获取的。

模式用途：
(1)重命名数据文件；
(2)添加、删除或重命名重做日志文件；
(3)执行数据库完全恢复操作；
(4)改变数据库的归档模式。

#### 3.Open模式（正常打开数据库）

命令：`startup [open]`
讲解：正常按3个步骤启动数据库。

模式用途：
平时不对数据库做什么维护，像只做应用开发，用这个模式就好了。

#### 4.强制启动模式

命令：`startup force`
用途&讲解：在某些情况下，使用前面的各种模式都无法成功启动数据库时，可以尝试强制启动模式。
使用Alter Database语句，还可以在各启动模式间切换。并且，还可以对数据库设置不同的状态用于不同的操作，如受/非受限抽状态、只读。

使用Alter Database语句，在各启动模式间切换。
(1)从NoMount模式切换到Mount模式(没有从mount切换到nomount的)：
命令：`ALTER DATABASE MOUNT;`
(2)当数据库状态为关闭时，切换到Open模式
命令：`ALTER DATABASE OPEN;`
(3)在Open模式下，还可以选择将数据库设置为非受限状态和受限状态。
命令：
在启动Open模式时，添加restrict关键字：`startup restrict`
设置或取消受限状态：`alter system` `enable\disable restricted session;`

讲解：
非受限状态，就是我们平时应用程序开发用到的状态。
受限状态，当打开的数据库被设置为受限状态时，只有`Create Session` 和 `Restricted Session`系统权限 或者 具有`SYSDBA` 和 `SYSPORE` 系统权限的用户才能连接到数据库。但进入受限状态后，系统中仍然可能会存在活动的普通用户会话。

受限状态用途：
(1)执行数据导入或导出操作；
(2)暂时拒绝普通用户访问数据库；
(3)进行数据库移植或升级操作。
(4) 只读状态

设置只读命令：`alter database open read only;`
取消只读命令：`alter database open read write;`
用途&讲解：当一个正常打开的数据库被设置为只读状态时，用户只能查询数据，但不能以任何方式对数据库对象进行修改。处于只读状态，可能保证数据文件和重做日志文件中的内容不被修改，但是并不限制那些不会写入数据文件与重做日志文件的操作。

### 关闭数据库与实例

**与数据库启动一样，关闭数据库与实例也分为3步：关闭数据库-->实例卸载数据库--->终止实例。**

(1)关闭数据库，oracle将重做日志高速缓存中的内容写入重做日志文件，并且将数据库高速缓存中被改动过的数据写入数据文件，然后再关闭所有的数据文件和重做日志文件，这时数据库的控制文件仍然处于打开状态，但是由于数据库处于关闭状态，所以用户无法访问数据库。
（2）卸载数据库，关闭数据库后，例程才能被卸载，控制文件再这个时候被关闭，但例程仍然存在 。
（3）终止例程，进程终止，分配给例程的内存sga区被回收。

#### 1.Nomal（正常关闭方式）

命令：`shutdown nomal`
讲解：正常方式关闭数据时，Oracle执行如下操作：
(1)阻止任何用户建立新的连接。
(2)等待当前所有正在连接的用户主动断开连接（此方式下Oracle不会立即断掉当前用户的连接，这些用户仍然操作相关的操作）
(3)一旦所有的用户都断开连接，则立即关闭、卸载数据库，并终止实例。（所以，一般以正常方式关闭数据库时，应该通知所有在线的用户尽快断开连接）

#### 2.Immediate（立即关闭方式）

命令：`shutdown immediate`
讲解：
(1)阻止任何用户建立新的连接，同时阻止当前连接的用户开始任何新的事务。
(2)Oracle不等待在线用户主动断开连接，强制终止用户的当前事务，将任何未提交的事务回退。（如果存在太多未提交的事务，此方式将会耗费很长时间终止和回退事务）
(3)直接关闭、卸载数据库，并终止实例。

#### 3.Transactional（事务关闭方式）

命令：`shutdown transactional`
讲解：这种方式介于正常关闭方式跟立即关闭方式之间，响应时间会比较快，处理也将比较得当。执行过程如下：
(1)阻止任何用户建立新的连接，同时阻止当前连接的用户开始任何新的事务。
(2)等待所有未提交的活动事务提交完毕，然后立即断开用户的连接。
(3)直接关闭、卸载数据库，并终止实例。

#### 4.Abort（终止关闭方式）

命令：`shutdown abort`
讲解：这是比较粗暴的一种关闭方式，当前面3种方式都无法关闭时，可以尝试使用终止方式来关闭数据库。但是以这种方式关闭数据库将会丢失一部份数据信息，当重新启动实例并打开数据库时，后台进程SMON会执行实例恢复操作。一般情况下，应当尽量避免使用这种方式来关闭数据库。执行过程如下：

(1)阻止任何用户建立新的连接，同时阻止当前连接的用户开始任何新的事务。
(2)立即终止当前正在执行的SQL语句。
(3)任何未提交的事务均不被退名。
(4)直接断开所有用户的连接，关闭、卸载数据库，并终止实例。

### 附加说明：

#### shutdown

完全关闭状态 关闭命令是`shutdown immediate`(立即关闭)

#### nomount

在这个状态下，oracle会打开参数文件，分配SGA并打开后台进程
这种状态下，可以查询后台进程和实例信息。如：



```perl
select * from v$bgporcess;
select * from v$instance;
v$parameter、v$sga、v$process、v$session、v$instance
```

等等

#### mount

在mount状态下，oralce会在nomount的基础上，根据control_files的设置来打开控制文件。在nomount的基础上，进入此状态的命令是：`alter database mount`
在此状态下：可以执行的命令有：

# Oracle的用户

**用户**：User，通俗的讲就是访问oracle数据库的账号。
在oracle中，可以对用户的各种安全参数进行控制，以维护数据库的安全性，这些概念包括模式(schema)、权限、角色、存储设置、空间限额、存取资源限制、数据库审计等。每个用户都有一个口令，使用正确的username/password才能登录到数据库进行数据存取。

- 
- 
- 
- 

# Oracle 用户概念与基本操作

[![img](https://bbs-img.huaweicloud.com/user/img/head/images_164731035870678.jpeg)](https://bbs.huaweicloud.com/community/usersnew/id_1627958865219426) [云物互联](https://bbs.huaweicloud.com/community/usersnew/id_1627958865219426) 发表于 2021/08/06 01:51:05

 

 1.4k+ 0 0

【摘要】 目录 目录Oracle的用户 通过系统用户来登陆SQLPlussystem和sys的区别查看登陆的用户启用和锁定一个用户 启用用户锁定用户 创建用户修改用户删除用户 角色权限常用的用户相关数据字典 Oracle的用户 用户：User，通俗的讲就是访问oracle数据库的账号。 在oracle中，可以对用户的各种安全参数进行控制，以维护数据库的安全...

# 目录



- 目录
- Oracle的用户
  - 通过系统用户来登陆SQLPlus
  - system和sys的区别
  - 查看登陆的用户
  - 启用和锁定一个用户
    - 启用用户
    - 锁定用户
  - 创建用户
  - 修改用户
  - 删除用户
- 角色权限
- 常用的用户相关数据字典



# Oracle的用户

**用户**：User，通俗的讲就是访问oracle数据库的账号。
在oracle中，可以对用户的各种安全参数进行控制，以维护数据库的安全性，这些概念包括模式(schema)、权限、角色、存储设置、空间限额、存取资源限制、数据库审计等。每个用户都有一个口令，使用正确的username/password才能登录到数据库进行数据存取。

**Oracle 成功安装后默认拥有下面几个系统用户**：

- sys/system：管理员账户，sys的权限为最高，必须以管理员的身份(sysdba|sysoper)登陆这用户
- sysman：也是管理员级别的用户，用于操作企业管理器
- Scott：默认是被锁定的，我们需要去解锁他，才可以被登陆
  注意：前三个用户使用统一密码，而scott用户的默认密码为tiger

## 通过系统用户来登陆SQLPlus

**Example1**：

```javascript
[oracle@jmilk ~]$ sqlplus

SQL*Plus: Release 10.2.0.1.0 - Production on Thu May 26 00:13:57 2016

Copyright (c) 1982, 2005, Oracle.  All rights reserved.

Enter user-name: system/fanguiju

Connected to:
Oracle Database 10g Enterprise Edition Release 10.2.0.1.0 - 64bit Production
With the Partitioning, OLAP and Data Mining options
  
```

```javascript
SQL> connect sys/fanguiju
ERROR:
ORA-28009: connection as SYS should be as SYSDBA or SYSOPER #表示sys不能以普通的身份登陆，必须指定以管理员sysdba的身份登陆
Warning: You are no longer connected to ORACLE.
SQL> connect sys/fanguiju as sysdba
```

## system和sys的区别

【system】用户可以使用normal身份登陆。
【sys】用户需要使用“SYSDBA”或者“SYSOPER”的身份登陆。

## 查看登陆的用户

**Example1**：Show user指令，查看登陆的当前用户

```javascript
SQL> conn /as sysdba
Connected.
SQL> show user
USER is "SYS"
```

使用数据字典dba_users
数据字典是数据库提供的内建二维表，用于查看数据库信息。
`dba_users` 数据字典的字段，可以查看Oracle RDBMS中DEMO数据库中的管理员账户信息。

```javascript
SQL> desc dba_users; #显示数据字典dba_users的表结构
 Name Null? Type
 ----------------------------------------- -------- ----------------------------
 USERNAME 用户名称 NOT NULL VARCHAR2(30)
 USER_ID  用户的编号 NOT NULL NUMBER
 PASSWORD   用户的密码 VARCHAR2(30)
 ACCOUNT_STATUS  账户状态 NOT NULL VARCHAR2(32)
 LOCK_DATE  锁定的日期 DATE
 EXPIRY_DATE DATE
 DEFAULT_TABLESPACE NOT NULL VARCHAR2(30)
 TEMPORARY_TABLESPACE NOT NULL VARCHAR2(30)
 CREATED NOT NULL DATE
 PROFILE NOT NULL VARCHAR2(30)
 INITIAL_RSRC_CONSUMER_GROUP VARCHAR2(30)
 EXTERNAL_NAME VARCHAR2(4000)
SQL> select username from dba_users;

USERNAME
------------------------------
MGMT_VIEW
SYS
SYSTEM
DBSNMP
SYSMAN
SCOTT
OUTLN
MDSYS
ORDSYS
EXFSYS
DMSYS

USERNAME
------------------------------
WMSYS
CTXSYS
ANONYMOUS
XDB
ORDPLUGINS
SI_INFORMTN_SCHEMA
OLAPSYS
TSMSYS
BI
PM
MDDATA

USERNAME
------------------------------
IX
SH
DIP
OE
HR

27 rows selected.
  
 
```

**表空间属性：**

一个数据库可以包含多个表空间，一个表空间只能属于一个数据库

一个表空间包含多个数据文件，一个数据文件只能属于一个表空间

表这空间可以划分成更细的逻辑存储单元

从逻辑的角度来看，一个数据库（database）下面可以分多个表空间（tablespace）；一个表空间下面又可以分多个段（segment）；一个数据表要占一个段（segment），一个索引也要占一个段（segment ）。 一个段（segment）由多个 区间（extent）组成，那么一个区间又由一组连续的数据块（data block）组成。这连续的数据块是在逻辑上是连续的，有可能在物理磁盘上是分散。

　　那么从物理的角度上看，一个表空间由多个数据文件组成，数据文件是实实在在存在的磁盘上的文件。这些文件是由oracle数据库操作系统的block 组成的。

**Segment（段）** ：段是指占用数据文件空间的通称，或数据库对象使用的空间的集合；段可以有表段、索引段、回滚段、临时段和高速缓存段等。

 

**Extent** **（区间）**：分配给对象（如表）的任何连续块叫区间；区间也叫扩展，因为当它用完已经分配的区间后，再有新的记录插入就必须在分配新的区间（即扩展一些块）；一旦区间分配给某个对象（表、索引及簇），则该区间就不能再分配给其它的对象.

查看表空间：

```
SQL> select * from v$tablespace;
　　
　　    TS#        NAME       INCLUD   BIGFIL   FLASHB    ENCRYP
　　---------- ------------------------------------------------------------ ------------ ------ ------
　　   0        SYSTEM        YES       NO       YES
　　   1        UNDOTBS1      YES       NO       YES
　　   2        SYSAUX        YES       NO       YES
      4        USERS         YES        NO       YES
　　   3        TEMP          NO        NO       YES
```

查看每个表空间有哪些数据文件：

```
SQL> desc dba_data_files;
　　 Name                                      Null?    Type
　　 ----------------------------------------- -------- ----------------------------
　　 FILE_NAME                                          VARCHAR2(513)
　　 FILE_ID                                            NUMBER
　　 TABLESPACE_NAME                                    VARCHAR2(30)
　　 BYTES                                              NUMBER
　　 BLOCKS                                             NUMBER
　　 STATUS                                             VARCHAR2(9)
　　 RELATIVE_FNO                                       NUMBER
　　 AUTOEXTENSIBLE                                     VARCHAR2(3)
　　 MAXBYTES                                           NUMBER
　　 MAXBLOCKS                                          NUMBER
　　 INCREMENT_BY                                       NUMBER
　　 USER_BYTES                                         NUMBER
　　 USER_BLOCKS                                        NUMBER
　　 ONLINE_STATUS                                      VARCHAR2(7)
```

查看详细数据文件：

```
SQL> select file_name,tablespace_name from dba_data_files;
　　
　　FILE_NAME                                            TABLESPACE_NAME
　　----------------------------------------------------------------------------------------------------------------
　　/ora10/product/oradata/ora10/users01.dbf                        USERS
　　/ora10/product/oradata/ora10/sysaux01.dbf                        SYSAUX
　　/ora10/product/oradata/ora10/undotbs01.dbf                        UNDOTBS1
   /ora10/product/oradata/ora10/system01.dbf                        SYSTEM
```

创建一个表空间：

```
　SQL> create tablespace paul datafile '/ora10/product/oradata/ora10/paul01.dbf' size 20m;
　　
Tablespace created. 　
```

查看我们创建的表空间：

```
[ora10@localhost ora10]$ pwd
　　/ora10/product/oradata/ora10
　　[ora10@localhost ora10]$ ls
　　control01.ctl  control03.ctl  redo01.log  redo03.log    system01.dbf  undotbs01.dbf
　　control02.ctl  paul01.dbf     redo02.log  sysaux01.dbf  temp01.dbf    users01.dbf
```

表空间根据对区间（extents）的管理分为两种类型

 

**词典管理表空间**(Dictionary-managed tablespaces)

  在表空间里，有的区间被占用了，有的没被占用，这些数据是放在数据字典里的。当你对这个表空间进行分配或释放的时候，数据文件里相关的表就会做修改。

 

**本地管理表空间**（locally managed tablespace）

   本地管理表空间不是在数据词典里存储表空间的，由自由区管理的表空间。用位图来自由的管理区间。一个区间对一个位，如果这个位是1表示已经被占用，0表示未被占用。

　　词典管理空间表示“中央集权治”，本地管理表空间表示“省市自治区”，一个databases表示中国，tablespaces表示一个省或直辖市。词典管理统一由中央调配。而本地管理表示有高度的自治权利，自已各种资源的分配不用上报中央。

　

 

**Undo tablespace**

　　Undo 类型的表空间，当你对一张表或一条记录进行修改的时候，它会对修改之前的信息进行保存，这样可以保证数据的回滚。Undo 只包含undo类型的对象，不能包含任何其他对象，只适合于数据文件和区间管理。

创建undo 类型的表空间：

 SQL>create undo tablespace undo1 datafile '/ora10/product/oradata/ora10/paul01.dbf' size 20m;

　

 

**Temporary Tablespaces**

 　临时表空间，相当于一个临时的垃圾场。用于排序操作，比如你要做一次大数据量的查询，但在内存无法存储这么大量的数据，然后会在磁盘上建立一个临时的表空间用记存放这些数据。Oracle就会用这个临时表空间做排序，存储中间结果。

一个全局的临时表空间，可以由多个用户共享，谁需要谁使用。但它只能存放临时的数据，不能包含任何永久性对象。 建议用本地管理方式创建这个表空间。

创建临时表空间：

 SQL>create temporary tablespace temp datafile '/ora10/product/oradata/ora10/paul01.dbf' size 20m extent management local uniform size 4m;

**表空间概念**

ORACLE数据库被划分成称作为表空间的逻辑区域——形成ORACLE数据库的[逻辑结构](https://baike.baidu.com/item/逻辑结构)。

一个ORACLE数据库能够有一个或多个表空间，而一个表空间则对应着一个或多个物理的[数据库文件](https://baike.baidu.com/item/数据库文件)，但一个数据库文件只能与一个表空间相联系。表空间是ORACLE[数据库恢复](https://baike.baidu.com/item/数据库恢复)的最小单位，容纳着许多数据库实体，如表、视图、索引、聚簇、回退段和临时段等。

每个ORACLE数据库均有[SYSTEM](https://baike.baidu.com/item/SYSTEM/15078601)表空间，这是数据库创建时自动创建的，用于存储系统的数据字典表、程序单元、过程、函数、包和触发器等。SYSTEM表空间必须总要保持联机，因为其包含着数据库运行所要求的基本信息(关于整个数据库的[数据字典](https://baike.baidu.com/item/数据字典)、联机求助机制、所有回退段、临时段和自举段、所有的用户数据库实体、其它ORACLE软件产品要求的表)。

一个小型应用的ORACLE数据库通常仅包括SYSTEM表空间,然而一个稍大型应用的ORACLE数据库采用多个表空间会对数据库的使用带来更大的方便。

**表空间类型**

永久性表空间：一般保存表、视图、过程和索引等的数据。

临时性表空间：只用于保存系统中短期活动的数据。

撤销表空间：用来帮助回退未提交的事务数据。

**表空间作用**

表空间的作用能帮助DBA用户完成以下工作：

　　1. 决定数据库实体的空间分配

　　2. 设置[数据库用户](https://baike.baidu.com/item/数据库用户)的空间份额

　　3. 控制数据库部分数据的可用性

　　4. 分布数据于不同的设备之间以改善性能

　　5. 备份和恢复数据。

用户创建其数据库实体时，必须给予表空间中具有相应的权力，所以对一个用户来说,其要操纵一个ORACLE数据库中的数据，应该：

　　1. 被授予关于一个或多个表空间中的RESOURCE特权

　　2. 被指定缺省表空间

　　3. 被分配指定表空间的存储空间使用份额

　　4. 被指定缺省临时段表空间,建立不同的表空间，设置最大的存储容量

**操作示例**

\1. 创建表空间

语法：

```
CREATE TABLESPACE 表空间名
DATAFILE '数据文件路径' SIZE 大小
[AUTOEXTEND ON] [NEXT 大小]
[MAXSIZE 大小];

[ ]里面内容可选项，数据文件路径中若包含目录需先创建

　　SIZE 为初始表空间大小，单位为K或者M

　　AUTOEXTEND 是否自动扩展，值为ON或OFF

　　NEXT 为文件满了后扩展大小

　　MAXSIZE 为文件最大大小，值为数值或UNLIMITED(表示不限大小)
```

```
CREATE TABLESPACE ts_test
DATAFILE 'D:\oracle_tablespace\ts_test.dbf' SIZE 20M
AUTOEXTEND ON;
```

\2. 查询表空间

```
select name from v$tablespace;

--管理员角色查看表空间
SELECT file_name, tablespace_name, bytes, autoextensible
FROM dba_data_files
WHERE tablespace_name = 'ts_test';
```

\3. 修改表空间

语法：

```
ALTER TABLESPACE 表空间名
ADD DATAFILE '文件路径' SIZE 大小
[AUTOEXTEND ON] [NEXT大小]
[MAXSIZE 大小];
```

示例：

```
ALTER TABLESPACE ts_test
ADD DATAFILE 'D:\oracle_tablespace\ts_test2.dbf 'SIZE 5M
AUTOEXTEND ON;
```

\4. 删除表空间

语法：

```
--仅删除表空间
DROP TABLESPACE 表空间名;
--删除表空间及数据文件
DROP TABLESPACE 表空间名 INCLUDING CONTENTS AND DATAFILES;
```

示例：

```
--仅删除表空间
DROP TABLESPACE ts_test;
--删除表空间及数据文件
DROP TABLESPACE ts_test INCLUDING CONTENTS AND DATAFILES;
```

## 一、介绍 

　　在oracle中没有其他数据库系统中的数据库的概念，对象都是创建在用户下。当前用户具有当前用户下所有对象的所有权限无论该对象是否是当前用户所创建。举个简单例子创建一个用户授予该用户连接权限，然后用管理员用户在该用户下创建一张表，该用户可以删除管理员在该用户下创建的表。

## 二、权限

权限主要可以分成三类：系统权限、角色、对象权限。角色是一类权限的分组。

**1.系统权限**

系统权限其实就是用户在当前用户架构下所具有的权限。在11g中系统权限有200个,比如create table，UNLIMITED TABLESPACE等。

查询当前用户拥有的系统权限：

```
SELECT * FROM user_sys_privs;
```

**2.角色**

角色其实就是一类权限的分组，所以给用户分配角色其实也是在给用户分配权限。在oracle中有三个比较常用的角色。对于一般不是很严格的系统可以授予开发用户CONNECT、RESOURCE角色权限即可。

DBA:该角色具有数据库所有的权限。

CONNECT:该角色具有连接数据库的权限，和create session的权限一样。

RESOURCE:该角色是应用程序开发角色，具有如下权限

 查询当前用户拥有的角色：

```
SELECT * FROM USER_ROLE_PRIVS;
```

**3.对象权限**

对象权限指的是其它拥有用户的对象的权限。其它用户对象的权限包括：SELECT,DELETE,UPDATE,ALTER,INSERT,INDEX,REFERENCES,FLASHBACK,DEBUG,QUERY REWRITE,ON COMMIT REFRESH；注意其它用户对象的权限没有drop的权限。 

查询当前用户拥有的对象权限：

```
SELECT * FROM USER_TAB_PRIVS;
```

## 三、grant授权 

1.授予用户connect、resource角色权限。一般创建应用程序开发用户可以授予这两个角色的权限。

```
GRANT CONNECT,RESOURCE TO zhang;
```

2.授予用户chenmh用户zhang下person表的SELECT,DELETE,UPDATE,INSERT权限，授予具体的对象权限是对于权限严格控制的一种方案。

```
GRANT SELECT,DELETE,UPDATE,INSERT ON zhang.person TO CHENMH ;
```

3.授予用户chenmh用户zhang下person表的所有权限

```
GRANT ALL PRIVILEGES ON zhang.person to chenmh;
```

## 四、REVOKE回收权限

1.回收角色权限

```
REVOKE CONNECT,RESOURCE FROM chenmh;
```

2.回收系统权限

```
REVOKE CREATE FROM chenmh;
```

3.回收用户对象权限,回收zhang用户下person表的所有权限，如果是单个授予的权限需要单个的收回

```
REVOKE ALL PRIVILEGES ON zhang.person FROM chenmh;
```

4.批量收回用户对象权限，收回用户chenmh在架构zhang下的所有权限

```
SELECT 'REVOKE '||PRIVILEGE||' ON '||OWNER||'.'||TABLE_NAME||' FROM CHENMH;' FROM DBA_Tab_Privs WHERE GRANTEE='CHENMH' AND OWNER='ZHANG'
ORDER BY TABLE_NAME,PRIVILEGE;
```

# 一、字符类型

- char 定长字符类型（未达到指定长度时，自动在末尾用空格补全）；默认值为1；最大2000字节；非unicode。
- nchar 定长字符类型（未达到指定长度时，自动在末尾用空格补全）；默认值为1；最大1000字节；根据unicode，所有字符都占两个字节。
- varchar2 变长字符类型（未达到指定长度时，不自动补全空格）；定义时需指定长度；最大为4000字节；非unicode。
- nvarchar2 变长字符类型（未达到指定长度时，不自动补全空格）；定义时需指定长度；最大为2000字节；根据unicode，所有字符都占两个字节。

> 说明：（1）unicode字符集是为了解决字符集不兼容的问题而产生的，所有字符都用两个字节表示，即英文字符也用两个字节表示。（2）以上的最大长度都是指字节长度，而非字符个数，如char(1)就连一个汉字都不能存放。

**举例：**

```cobol
create table test_char(



country_id char,



city_id nchar(2),



address varchar2(4000),



name nvarchar2(4)



);
```

插入数据并查询：

```sql
insert into test_char values ('1', '中国', '浙江省杭州市西湖区', '司马相如');
```

# 二、数值类型

oracle中的数值类型主要为三种：number，binary_float，binary_double，其他的类型基本上都是number类型的子类型。

1. number(p,s)类型

- p精度，表示包括小数在内的总共有效位数，p的取值范围为[1~38]（若没有指定，默认为38）；s表示精确到多少位，取值范围为[-84~127]（若没有指定，默认为0），当s取负数时，将小数点左边的s位置为0，并四舍五入。
- 当小数位数大于s时，采用四舍五入的方式。当整数部分的长度大于p-s时，报错。
- 需要22个字节的存储空间。

 [官方文档](https://docs.oracle.com/cd/B28359_01/server.111/b28318/datatype.htm#CNCPT1832)给出的几个例子如下：

> 注意：第四条t2数据超过精度四舍五入，第六条t4数据超过精度四舍五入。这里先留一个问题：第八条t5记录，插入的月份没有正常显示（知道原因的可以和我讨论）。

#  四、long类型与lob大型对象数据类型

- long 文本类型，最多达2GB；long列不能作为主键或唯一约束；存储时需要进行字符集转换；一个表中只有一列可以为long或long raw；不支持分布式事务；限制较多
- long raw 可变长二进制数据，不用进行字符集转换的数据，最长2GB。
- blob二进制大型对象，存储图片，音乐，视频等信息，通常将文件转为二进制再存进去；存储的最大大小为4G；支持随机存储
- clob字符大型对象，存储文章或较长的文字。存储的最大大小为4G。
- nclob存储Unicode类型的数据，根据字符集而定的字符类型，最大长度4G。
- bfile二进制文件，存放指向操作系统文件的指针；指向的文件不是数据库的一部分，只能在数据库外维护；只读，数据库将该文件当二进制文件处理。

**举例：** 

```sql
create table test_bigfile(



f1 long,



f2 blob,



f3 clob,



f4 nclob,



f5 bfile



);
```

数据插入与查询：

```sql
insert into test_bigfile (f1, f2, f3, f4) values ('12323232', '2312', '111', '212');



insert into test_bigfile (f1, f2, f3, f4) values ('12323232', '231234', '111', '212');
```

> 说明：bfile类型的插入需要指定文件所在的目录位置，类似于 insert into test_bigfile (f5) values  (bfilename('bfiledir',  'bfile1.txt'));其中bfiledir为文件路径，这里就不在扩展；long类型因为其限制过多，我们通常用blob，clob类型来代替。

# 五、rowid & urowid类型 

- rowid 行地址，十六进制串，表示行在所在的表中唯一的行地址，该数据类型主要用于返回ROWID伪列，常用在可以将表中的每一条记录都加以唯一标识的场合，使用rowid来建立内部索引。
- urowid支持逻辑的和物理的rowids。

我们以上述test_bigfile表为例：

```sql
select rowid from test_bigfile;
```

释：从rowid伪列里查询出来的rowid是基于base64编码，一共有18位，分为4部分：OOOOOOFFFBBBBBBRRR

OOOOOO： 六位表示data object id，根据object id可以确定segment； FFF： 三位表示相对文件号；BBBBBB：六位表示data block number； RRR：三位表示row number，以此来确定唯一的行地址。

　约束是数据库用来确保数据满足业务规则的手段，不过在真正的企业开发中，除了主键约束这类具有强需求的约束，像外键约束，检查约束更多时候仅仅出现在数据库设计阶段，真实环境却很少应用，更多是放到程序逻辑中去进行处理。这也比较容易理解，约束会一定程度上较低数据库性能，有些规则直接在程序逻辑中处理就可以了，同时，也有可能在面对业务变更或是系统扩展时，数据库约束会使得处理不够方便。不过在我看来，数据库约束是保证数据准确性的最后一道防线，对于设计合理的系统，处于性能考虑数据库约束自然可有可无；不过若是面对关联关系较为复杂的系统，且对系统而言，数据的准确性完整性要高于性能要求，那么这些约束还是有必要的（否则，就会出现各种相对业务规则来说莫名其妙的脏数据，本人可是深有体会的。。）。总之，对于约束的选择无所谓合不合理，需要根据业务系统对于准确性和性能要求的侧重度来决定。

数据库约束有五种：

-    **主键约束（PRIMARY KEY）**
-    **唯一性约束（UNIQUE)**
-    **非空约束（NOT NULL)**
-    **外键约束（FOREIGN KEY)**
-    **检查约束（CHECK)**

**主键约束（PRIMARY KEY)**

   主键是定位表中单个行的方式，可唯一确定表中的某一行，关系型数据库要求所有表都应该有主键，不过Oracle没有遵循此范例要求，Oracle中的表可以没有主键（这种情况不多见）。关于主键有几个需要注意的点：

1. 键列必须必须具有唯一性，且不能为空，其实主键约束 相当于 UNIQUE+NOT NULL
2. 一个表只允许有一个主键
3. 主键所在列必须具有索引（主键的唯一约束通过索引来实现），如果不存在，将会在索引添加的时候自动创建

   添加主键（约束的添加可在建表时创建，也可如下所示在建表后添加，一般推荐建表后添加，灵活度更高一些，建表时添加某些约束会有限制）

```
SQL> alter table emp add constraint emp_id_pk primary key(id);
```

--主键约束可以定义在一列或多列上，值具有唯一性、非空性；

--在一个表上只能定义一个主键约束；

--Oracle会自定在主键约束的列上创建**唯一性索引**，可以指定唯一性索引的位置及存储参数。



唯一性约束（UNIQUE)**

   唯一性约束可作用在单列或多列上，对于这些列或列组合，唯一性约束保证每一行的唯一性。

   UNIQUE需要注意：

1.    对于UNIQUE约束来讲，索引是必须的。如果不存在，就自动创建一个（UNIQUE的唯一性本质上是通过索引来保证的）
2.    UNIQUE允许null值，UNIQUE约束的列可存在多个null。这是因为，Unique唯一性通过btree索引来实现，而btree索引中不包含null。当然，这也造成了在where语句中用null值进行过滤会造成全表扫描。

   添加唯一约束

```
SQL> alter table emp add constraint emp_code_uq unique(code);
```

**非空约束（NOT NULL)**

非空约束作用的列也叫强制列。顾名思义，强制键列中必须有值，当然建表时候若使用default关键字指定了默认值，则可不输入。

　　添加非空约束，语法较特别

```
SQL> alter table emp modify ename not null;
```

**外键约束（FOREIGN KEY）**

外键约束定义在具有父子关系的子表中，外键约束使得子表中的列对应父表的主键列，用以维护数据库的完整性。不过出于性能和后期的业务系统的扩展的考虑，很多时候，外键约束仅出现在数据库的设计中，实际会放在业务程序中进行处理。外键约束注意以下几点：

1. 　　外键约束的子表中的列和对应父表中的列数据类型必须相同，列名可以不同
2. 　　对应的父表列必须存在主键约束（PRIMARY KEY）或唯一约束（UNIQUE）
3. 　　外键约束列允许NULL值，对应的行就成了孤行了

　　其实很多时候不使用外键，很多人认为会让删除操作比较麻烦，比如要删除父表中的某条数据，但某个子表中又有对该条数据的引用，这时就会导致删除失败。我们有两种方式来优化这种场景：

　　第一种方式简单粗暴，删除的时候，级联删除掉子表中的所有匹配行，在创建外键时，通过 **on delete cascade** 子句指定该外键列可级联删除：

```
SQL> alter table emp add constraint emp_deptno_fk foreign key(deptno) references dept (deptno) on delete cascade;
```

　　第二种方式，删除父表中的对应行，会将对应子表中的所有匹配行的外键约束列置为NULL，通过 **on delete set null** 子句实施：

```
SQL> alter table emp add constraint emp_deptno_fk foreign key(deptno) references dept(deptno) on delete set null;
```

实际上，外键约束列和对应的父表列可以在同一张表中，常见的就是表的业务逻辑含义是一棵树，最简单的例子如下（id为主键id，fid为父id，fid存储对id的引用），这种结构的表根据业务要求可通过Oracle的递归查询来获取这种层级关系

--外键约束列的取值来源于参照表（父表）的参照列的值，或者空值；

--定义外键约束的列只能参照父表的主键约束列和唯一性约束列；

--父表与子表必须在同一个数据库中。

**检查约束（CHECK)**

检查约束可用来实施一些简单的规则，比如列值必须在某个范围内。检查的规则必须是一个结果为true或false 的表达式，比如：

```
SQL> alter table emp add constraint emp_sex_ck check(sex in('男','女'));
```

# 约束状态

　　很多时候由于业务需要，比如我们有大量的历史数据，需要和现有数据合并，当前表存在数据库约束（如非空约束），而这些历史数据又包含违背非空约束的数据行，为了避免导入时由于违反约束而导入失败，我们通过调整约束状态来达到目的。

数据库约束有两类状态

　　**启用/禁用（enable/disable）**：是否对新变更的数据启用约束验证

　　**验证/非验证 (validate/novalidate)** ：是否对表中已客观存在的数据进行约束验证

这两类四种状态从语法角度讲可以随意组合，默认是 enable validate

下面我们来看着四类组合会分别出现什么样的效果：

**enable validate** : 默认的约束组合状态，无法添加违反约束的数据行，数据表中也不能存在违反约束的数据行；

**enable novalidate** : 无法添加违反约束的数据行，但对已存在的违反约束的数据行不做验证；

**disable validate** : 可以添加违反约束的数据行，但对已存在的违反约束的数据行会做约束验证（从描述中可以看出来，这本来就是一种相互矛盾的约束组合，只不过是语法上支持这种组合罢了，造成的结果就是会导致DML失败）

**disable novalidate** : 可以添加违法约束的数据行，对已存在的违反约束的数据行也不做验证。

拿上面的例子来说，我们需要上传大量违反非空约束的历史数据（从业务角度讲这些数据不会造成系统功能异常），可以临时将约束状态转为 disable novalidate，以保证这些不合要求的数据导入表中

```
SQL> alter table emp modify constraint emp_ename_nn disable novalidate;
```

在数据导入完成之后，我们再将约束状态转为enable novalidate 以确保之后添加的数据不会再违反约束

```
SQL> alter table emp modify constraint emp_ename_nn enable novalidate;
```

 