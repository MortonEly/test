Mysql

管理员登录：

```sql
mysql -hlocalhost -uroot -p
mysql -u root -p
```

查询当前数据库：

```sql
select database();
```

查看数据库：

```sql
show databases;
```

查看数据库的表：

```sql
show tables;
show tables from lv;
```

字符集

查看MYSQL数据库服务器和数据库字符集

```sql
show variables like '%character%';
show variables like 'collation%';
```



使用数据库

```sql
use lv;
```

创建数据库

使用 create database 数据库名; 创建数据库。

```sql
create database MyDB_one;
```

4. 创建数据库时设置字符编码

使用 create database 数据库名 character set utf8; 创建数据库并设置数据库的字符编码。

```sql
create database MyDB_two character set utf8;
```

5. 查看和显示数据库的编码方式

使用 show create database 数据库名; 显示数据库的创建信息。

```sql
show create database MyDB_one;
show create database MyDB_two;
```

6. 使用 alter database 数据库名 character set utf8； 修改数据库编码

```bash
alter database MyDB_one character set utf8;
```

7. 进入或切换数据库

使用 use 数据库名 进入或切换数据库。

```sql
use MyDB_one
use MyDB_two;
```

8. 显示当前数据库 select database();

```sql
select database();
```

目录结构：

| 1、bin目录                 | 用于放置一些可执行文件，如mysql.exe、mysqld.exe、mysqlshow.exe等。 |
| -------------------------- | ------------------------------------------------------------ |
| 2、data目录                | 用于放置一些日志文件以及数据库。                             |
| 3、include目录             | 用于放置一些头文件，如：mysql.h、mysql_ername.h等。          |
| 4、lib目录                 | 用于放置一系列库文件。                                       |
| 5、share目录               | 用于存放字符集、语言等信息。                                 |
| 6、my.ini                  | 是MySQL数据库中使用的配置文件。                              |
| 7、my-huge.ini             | 适合超大型数据库的配置文件。                                 |
| 8、my-large.ini            | 适合大型数据库的配置文件。                                   |
| 9、my-medium.ini           | 适合中型数据库的配置文件。                                   |
| 10、my-small.ini           | 适合小型数据库的配置文件。                                   |
| 11、my-template.ini        | 是配置文件的模板，MySQL配置向导将该配置文件中选择项写入到my.ini文件。 |
| 12、my-innodb-heavy-4G.ini | 表示该配置文件只对于InnoDB存储引擎有效，而且服务器的内存不能小于4GB。 |

```sql
SHOW DATABASES;#显示所有数据库
CREATE DATABASE school;#创建一个数据库名字叫school
SHOW CREATE DATABASE school;#显示我创建的数据库看看叫啥名字
use school;#用一下我的数据库
DROP DATABASE school;#不咋用删除了吧
```



注意哦：关于数据库的所有的操作都是要加上”database”的，除了应用数据库的时候。

**三、约束条件都有什么用**

– 约束是在表上强制执行的数据检验规则；

– 用来保证创建的表的数据完整和正确；

– 当表中数据有相互依赖性时，可以保护相关的数据不被删除''

**主键（primary key)，一个表格只能有一个主键，**但可以是数据表中一列或多列的组合，可以是单字段主键，也可以是多字段联合主键。

— 主键约束要求主键列的数据必须是唯一的，并且不允许为空。

— 使用主键，能够惟一地标识表中的一条记录，并且可以结合外键来定义不同数据表之间的关系，还可以加快数据库查询的速度。

**非空约束（not null)，指的是字段的值不能为空；**

多个空值不代表重复，代表未知。

**唯一性约束(unique)**，要求该列的值必须是唯一的：

— 一个表中可以有多个字段声明为唯一的;

— 唯一约束确保数据表的一列或几列不出现重复值。

**外键（foreign key），**用来在两个表的数据之间建立链接：

— 一个数据表可以有一个或多个外键；

— 外键对应的是参照完整性，其值可以是空值，若不为空值，则每一个外键值必须等于另一个表中主键的某个值；

— 主表：主键所在的表;

— 从表：外键所在的表。

**默认约束（Default**），指定某个字段的默认值，默认值的类型与字段类型一致：

**自增字段（auto_increment)**，在数据库应用中，希望主键列的值自动生成：

— 和主键结合在一起用；

— 只能是数值类型；

— 将其设为自动增长列，列值由系统自动生成，每次加1；

— 只能有一个列设为自动增长列，且该字段必须是主键的一部分。

可以删除的约束：非空、默认、自动增长

无法删除的约束：键值约束包括主键约束、唯一约束、外键约束。

## 1. 约束(constraint)概述

### 1.1 为什么需要约束

数据完整性（Data Integrity）是指数据的精确性（Accuracy）和可靠性（Reliability）。它是防止数据库中存在不符合语义规定的数据和防止因错误信息的输入输出造成无效操作或错误信息而提出的。

为了保证数据的完整性，SQL规范以约束的方式对**表数据进行额外的条件限制**。从以下四个方面考虑：

- `实体完整性（Entity Integrity）`：例如，同一个表中，不能存在两条完全相同无法区分的记录
- `域完整性（Domain Integrity）`：例如：年龄范围0-120，性别范围“男/女”
- `引用完整性（Referential Integrity）`：例如：员工所在部门，在部门表中要能找到这个部门
- `用户自定义完整性（User-defined Integrity）`：例如：用户名唯一、密码不能为空等，本部门经理的工资不得高于本部门职工的平均工资的5倍。

### 1.2 什么是约束

- 约束是表级的强制规定。
- 可以在**创建表时规定约束（通过 CREATE TABLE 语句）**，或者在**表创建之后通过 ALTER TABLE 语句规定约束**。

### 1.3 约束的分类

- 根据约束数据列的限制，

   约束可分为：   

  - **单列约束**：每个约束只约束一列
  - **多列约束**：每个约束可约束多列数据

- 根据约束的作用范围

  ，约束可分为：   

  - **列级约束**：只能作用在一个列上，跟在列的定义后面
  - **表级约束**：可以作用在多个列上，不与列一起，而是单独定义

```
			位置			支持的约束类型					是否可以起约束名
列级约束：	列的后面		语法都支持，但外键没有效果		不可以
表级约束：	所有列的下面	   默认和非空不支持，其他支持	   可以（主键没有效果）
123
```

- 根据约束起的作用

  ，约束可分为：   

  - **NOT NULL** **非空约束，规定某个字段不能为空**
  - **UNIQUE** **唯一约束**，**规定某个字段在整个表中是唯一的**
  - **PRIMARY KEY 主键(非空且唯一)约束**
  - **FOREIGN KEY** **外键约束**
  - **CHECK** **检查约束**
  - **DEFAULT** **默认值约束**

> 注意： MySQL不支持[check约束](https://so.csdn.net/so/search?q=check约束&spm=1001.2101.3001.7020)，但可以使用check约束，而没有任何效果

- 如何添加/删除约束？

```sql
CREATE TABLE 时添加约束

ALTER TABLE 时增加约束、删除约束
123
```

- 查看某个表已有的约束

```sql
#information_schema数据库名（系统库）
#table_constraints表名称（专门存储各个表的约束）

SELECT * FROM information_schema.table_constraints 
WHERE table_name = '表名称';
```

# 1.约束概念和分类

# 

###### 1.1约束的概念：

> 对表中的数据进行限定，保证数据的正确性，有效性，完整性

###### 1.2约束分类

> 1.主键约束(**primary key**)：**保证该字段具有非空且唯一性，一张表中只能有一个主键，主键是表中字段的唯一标识**
>  2.非空约束(**not null**)：**保证字段不能为空**
>  3.唯一约束(**unique**)：**保证该字段具有唯一性但是可以为null**
>  4.[外键约束](https://so.csdn.net/so/search?q=外键约束&spm=1001.2101.3001.7020)(**foreign key**)：**在一个表中存在的另一个表的主键或唯一键称此表的外键。**
>  5.默认约束(**default+默认值**)：**用于保证该字段有默认值(用引号引起来)**

# 2.五大约束的添加和删除

# 

###### 2.1添加约束的六种方法

1.在创建表的时候添加非空约束(以列级约束添加)

> ```
> create table + 表名(`
>  `列名 数据类型 + 约束名`
>  `)
> ```

2.在创建表的时候添加非空约束(以表级约束添加)

> ```
> create table 表名(`
>  `列名 数据类型，`
>  `...`
>  `列名 数据类型,`
>  `(constraint +别名(就是随便为自己添加的约束起一个名字)) 约束名(对应字段名)`
>  `)
> ```

3.修改列名的时候

> ```
> alter table + 表名 + change (column) + 旧列名 新列名 新列名的类型 + 约束
> ```

4.修改列的数据类型的时候

> ```
> alter table + 表名 + modify + (column) + 列名 列类型 约束
> ```

5.在添加新列的时候可以添加约束

> ```
> alter table + 表名 + add + (column) + 新列名 + 新列名的类型 + 约束
> ```

6.外键特有

> ```
> alter table + 表名 + add constraint 外键名称(自己随便为外键取得名字) + foreign key(外键字段名) references 主表名称(主表要关联的字段)
> ```

###### 2.2三种删除约束的方式

1.修改列名的时候不加约束

> ```
> alter table + 表名 + change (column) + 旧列名 新列名 新列名的类型
> ```

2.修改列的数据类型的时候不加约束

> ```
> alter table + 表名 + modify + (column) + 列名 列类型
> ```

3.运用drop特定删除约束

> ```
> alter table + 表名 + drop index/foreign key/primary key + 约束的名字
> ```

注:查看表中约束的名字：

> ```
> show index from + 表名
> ```

###### 2.3五大约束分别对应的添加删除方式(序号对应2.1和2.2)

1.非空约束(not null)

> 对应的添加方式：**1 3 4 5**
>  对应的删除方式：**1 2**

2.唯一约束(unique)

> 对应的添加方式：**1 2 3 4 5**
>  对应的删除方式：**1 2 3(对应第3种的index选项)**

3.默认约束(default)

> 对应的添加方式：**1 3 4 5**
>  对应的删除方式：**1 2**

4.主键(primary key)

> 对应的添加方式：**1 2 3 4 5**
>  对应的删除方式：**3(对应第3种的primary key选项注意后边不加约束的名字了，因为一个表里只能有一个主键)**

5.外键(foreign key)

> 对应的添加方式：**2 6**
>  对应的删除方式：**3(对应第3种的foreign key选项)**

###### 2.4对于创建约束的总结

> 在创建表的时候添加列级约束只支持：**默认，非空，主键，唯一**
>  在添加表级约束只支持：**主键，唯一，外键**

###### 2.5对于主键和唯一的区别：

> **主键至多一个唯一可以有多个
>  允许两个列组成一个主键和一个唯一**

# 3.自增长列

# 

###### 3.1概念

> **如果某一列是数值类型，使用 auto_increment可以来完成值的自动增长(一般都是和主键一起用)**

###### 3.2在创建表的时候添加主键约束，并且完成主键自增长的例子

格式：

> ```
> create table 表名(`
>  `列名 数据类型 primary key + auto_increment`
>  `)
> ```

举个例子：
 我们创建一个含学号姓名的student表，并且按照学号自增长
 创建语句：

> create table student(
>  id int primary key auto_increment,
>  sname char(4)
>  )

###### 3.3自增长的添加和删除

1.添加(上述在创建的时候添加是一种)

> ```
> alter table + 表名 + modify column + 列名 类型 约束 + AUTO_INCREMENT
> ```

2.删除

> ```
> alter table + 表名 + modify column 列名 类型
> ```

###### 3.4设置自增长步长

> 自增长起始值为1，步长起始值为1
>  起始值不能更改，步长可以更改
>  用`show VARIABLES LIKE “%auto_increment%”`
>  查看对应的步常代表的名字然后用`set 步长代表名字=要设置的步长`



**四、怎么建、增、删、改表及内容呢？**

**1、 建**

**建表固定格式**

```sql
CREATE TABLE 表名(
字段名称 字段类型 字段宽度 约束条件);
#建一个表 表名(列名1 列类型 多宽 约束不为0/主键/外键等，列名2 列类型 多宽 约束不为0/主键/外键等);
```

正式建表

```sql
#创建学生表
CREATE TABLE stu( 
s_id VARCHAR(10) PRIMARY KEY,
s_name VARCHAR(10) NOT NULL,
s_age  DATE  NOT NULL
s_sex VARCHAR(10) DEFAULT "未知");
#课程表
CREATE	TABLE co(
c_id VARCHAR(10),
c_name VARCHAR(10) NOT NULL,
t_id VARCHAR(10) NOT NULL,
PRIMARY KEY(c_id));
#教师表
CREATE TABLE te(
t_id VARCHAR(10) PRIMARY KEY,
t_name VARCHAR(10) NOT NULL);
#成绩表
CREATE TABLE sc(
s_id VARCHAR(10) NOT NULL,
c_id VARCHAR(10) NOT NULL,
score INT NOT NULL);
```

**2、 增**

**2.1添加字段数据**

**固定格式**

```sql
INSERT into 表名(字段名) VALUES(对应字段的值与字段类型一致),(对应字段的值与字段类型一致);
#插进表里 哪个表(哪些字段)值(对应字段的值与字段类型一致),(对应字段的值与字段类型一致);
```

**正式添加**

```sql
#学生表添加数据
INSERT into stu VALUES
('01' , '赵雷' , '1989-01-01' , '男'),
('02' , '钱电' , '1990-12-21' , '男'),
('03' , '孙风' , '1990-05-20' , '男'),
('04' , '李云' , '1990-08-06' , '男'),
('05' , '周梅' , '1991-12-01' , '女'),
('06' , '吴兰' , '1992-03-01' , '女'),
('07' , '郑竹' , '1992-04-21' , '女'),
('08' , '王菊' , '1990-01-20' , '女');
#课程表添加数据
INSERT into co VALUES
('01' , '语文' , '02'),
('02' , '数学' , '01'),
('03' , '英语' , '03');
#教师表添加数据
INSERT into te VALUES
('01' , '张三'),
('02' , '李四'),
('03' , '王五');
#课程表添加数据
INSERT into sc VALUES
('01' , '01' , 80),
('01' , '02' , 90),
('01' , '03' , 99),
('02' , '01' , 70),
('02' , '02' , 60),
('02' , '03' , 80),
('03' , '01' , 80),
('03' , '02' , 80),
('03' , '03' , 80),
('04' , '01' , 50),
('04' , '02' , 30),
('04' , '03' , 20),
('05' , '01' , 76),
('05' , '02' , 87),
('06' , '01' , 31),
('06' , '03' , 34),
('07' , '02' , 89),
('07' , '03' , 98);
```

**2.2查看数据**

```sql
DESC stu;
```

注意查看表结构是**不用加table**的。

**2.3查看表的内容**

```sql
SELECT*FROM stu;
```

**2.4 查看表的行数**

```sql
select count(*) from co;
select count(*) from sc;
select count(*) from stu;
select count(*) from te;
```

**3、 删**

**3.1删除表格（drop table）**

```sql
DROP TABLE stu;
DROP TABLE sc;
DROP TABLE co;
DROP TABLE te;
```

注意哦：删除表格加**TABLE**哦

**3.1 删除字段内容**

```sql
DELETE FROM stu;
DELETE FROM co;
DELETE FROM te;
DELETE FROM sc;
```

**4、 改**

**（固定格式：alter table 表名 ）**

**4.1 修改表名称：rename**

```sql
ALTER TABLE stu rename student;
SHOW TABLES; 
```

**4.2 修改字段类型：modify**

```sql
ALTER TABLE student MODIFY s_id VARCHAR(50);
DESC student;
```

**4.3 修改字段名称：change**

```sql
ALTER TABLE student CHANGE s_id stu_id VARCHAR(20);
DESC student;
```



## 1.查看mysql的存放路径

1.查看数据库的存放路径

 进入mysql终端

```sql
mysql>show variables like '%datadir%';
```

2.查看文件安装路径

```sql
[root@hadoop01 etc]# whereis mysql
mysql: /usr/bin/mysql /usr/lib64/mysql /usr/share/mysql /usr/share/man/man1/mysql.1.gz
```

```sql
[root@hadoop01 ~]# cd /usr/bin/mysql
-bash: cd: /usr/bin/mysql: Not a directory
[root@hadoop01 ~]# more  /usr/bin/mysql
******** /usr/bin/mysql: Not a text file ********


[root@hadoop01 ~]# cd /usr/lib64/mysql
[root@hadoop01 mysql]# ll
total 9364
lrwxrwxrwx  1 root root      20 Oct  6 11:54 libmysqlclient_r.so.18 -> libmysqlclient.so.18
lrwxrwxrwx  1 root root      24 Oct  6 11:54 libmysqlclient_r.so.18.1.0 -> libmysqlclient.so.18.1.0
lrwxrwxrwx  1 root root      24 Oct  6 11:54 libmysqlclient.so.18 -> libmysqlclient.so.18.1.0
-rwxr-xr-x  1 root root 9581056 Sep 14  2017 libmysqlclient.so.18.1.0
drwxr-xr-x. 3 root root    4096 Oct  6 11:54 plugin


[root@hadoop01 mysql]# cd /usr/share/mysql
[root@hadoop01 mysql]# ll
total 1536
drwxr-xr-x  2 root root   4096 Oct  6 11:54 bulgarian
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 charsets
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 czech
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 danish
-rw-r--r--  1 root root  25575 Sep 13  2017 dictionary.txt
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 dutch
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 english
-rw-r--r--  1 root root 506007 Sep 13  2017 errmsg-utf8.txt
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 estonian
-rw-r--r--  1 root root 795692 Sep 13  2017 fill_help_tables.sql
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 french
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 german
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 greek
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 hungarian
-rw-r--r--  1 root root   3963 Sep 13  2017 innodb_memcached_config.sql
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 italian
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 japanese
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 korean
-rw-r--r--  1 root root    773 Sep 13  2017 magic
-rw-r--r--  1 root root   1126 Sep 14  2017 my-default.cnf
-rw-r--r--  1 root root    844 Sep 14  2017 mysql-log-rotate
-rw-r--r--  1 root root   1695 Sep 13  2017 mysql_security_commands.sql
-rw-r--r--  1 root root   3548 Sep 13  2017 mysql_system_tables_data.sql
-rw-r--r--  1 root root  93241 Sep 13  2017 mysql_system_tables.sql
-rw-r--r--  1 root root  10410 Sep 13  2017 mysql_test_data_timezone.sql
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 norwegian
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 norwegian-ny
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 polish
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 portuguese
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 romanian
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 russian
drwxr-xr-x  3 root root   4096 Oct  6 11:54 SELinux
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 serbian
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 slovak
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 spanish
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 swedish
drwxr-xr-x. 2 root root   4096 Oct  6 11:54 ukrainian

[root@hadoop01 ~]# cd /usr/share/man/man1/mysql.1.gz
-bash: cd: /usr/share/man/man1/mysql.1.gz: Not a directory
```



## 2.Linux下查看mysql是否安装,以及安装路径。

```sql
[root@hadoop01 mysql]#  ps -ef|grep mysql
mysql     1073     1  0 12:51 ?        00:00:00 /bin/sh /usr/bin/mysqld_safe --basedir=/usr
mysql     1336  1073  0 12:51 ?        00:00:01 /usr/sbin/mysqld --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib64/mysql/plugin --log-error=/var/log/mysqld.log --pid-file=/var/run/mysqld/mysqld.pid --socket=/var/lib/mysql/mysql.sock
root      1589  1567  0 14:00 tty1     00:00:00 mysql -uroot -px xx
root      1632  1613  0 14:03 pts/0    00:00:00 mysql -uroot -px xx
root      1690  1635  0 14:21 pts/1    00:00:00 grep --color=auto mysql
```

```sql
/usr/sbin/mysqld 

--basedir=/usr 
#文件存放目录
--datadir=/var/lib/mysql 
#mysql插件安装地址
--plugin-dir=/usr/lib64/mysql/plugin
#错误日志 
--log-error=/var/log/mysqld.log 
#mysql进程id
--pid-file=/var/run/mysqld/mysqld.pid 
#文件是负责mysql的连接的,如果该文件不存在,则无法访问mysql
--socket=/var/lib/mysql/mysql.sock
```

```sql
/etc/my.cnf
[root@hadoop01 etc]# cat /etc/my.cnf
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.6/en/server-configuration-defaults.html
[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

# Recommended in standard MySQL setup
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

[mysqld_safe]
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```

**忘记root密码后更改密码的方法（mysql5.7以后的版本可用）**

1、在/etc/my.cnf文件里面加一行 skip-grant-tables  然后重启数据库；

2、用root用户空密码登录数据库 修改密码 update user set authentication_string = password("123456") where user = "root";

3、然后把第一步添加的参数 注销或者删除，重启数据库，即可使用新密码登录数据库；

```sql
[root@localhost ~]# vim /etc/my.cnf
　　　　　　　　　　　　skip-grant-tables
[root@localhost ~]# service mysqld restart
[root@localhost ~]# mysql -uroot -p
password:  　　直接回车，不用输入密码即可登录
mysql> user mysql;
mysql> show tables;  //我们需要修改user表里面的内容，才能修改密码；
mysql> update user set authentication_string = password("123456") where user = "root";   //更新user这张表,设置认证字符串的值（即密码）为123456,用户为root，生效后结果如下图
```

```
mysql> flush privileges;    //刷新权限，使刚才的配置生效
mysql> exit
[root@localhost ~]# vim /etc/my.cnf     //然后把刚才的参数取消，并重启数据库生效
　　　　　　　　　　　　#skip-grant-tables  
[root@localhost ~]# service mysqld restart
```

MySQL命令行模式修改

```sql
show variables like "%time_zone%";   #查看当前时区

set global time_zone = '+8:00';      #修改MySQL全局时区为北京时间
```

**dept部门表**

```sql
create table dept(
	deptno mediumint(8) primary key,
	dname varchar(20) unique,
	loc varchar(13)
);
```



```sql
table emp(



	empno mediumint(9) primary key,



	ename varchar(20) not null,



	job varchar(9),



	mgr mediumint(9),



	hiredate date,



	sal decimal(7,2),



	comm decimal(7,2),



	deptno mediumint(9),



 



	constraint fk_deptno foreign key(deptno) references dept(deptno) on delete cascade on update cascade	



);
```





```sql
insert into emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7369, 'SMITH', 'CLERK', 7902, '1980-12-17', 800, null, 20);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600, 300, 30);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', 1250, 500, 30);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7566, 'JONES', 'MANAGER', 7839, '1981-04-02', 2975, null, 20);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7698, 'BLAKE', 'MANAGER', 7839, '1981-05-01', 2850, null, 30);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', 2450, null, 10);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7788, 'SCOTT', 'ANALYST', 7566, '1987-04-19', 3000, null, 20);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7839, 'KING', 'PRESIDENT', null, '1981-11-17', 5000, null, 10);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', 1500, 0, 30);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7876, 'ADAMS', 'CLERK', 7788, '1987-05-23', 1100, null, 20);



insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)



values (7900, 'JAMES', 'CLERK', 7698, '1981-12-03', 950, null, 30);

insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)

values (7902, 'FORD', 'ANALYST', 7566, '1981-12-03', 3000, null, 20);

insert into EMP (empno, ename, job, mgr, hiredate, sal, comm, deptno)

values (7934, 'MILLER', 'CLERK', 7782, '1982-01-23', 1300, null, 10);
```

一、SQL 概述
1、什么是 SQL
==SQL（Structured Query Language）==是“结构化查询语言”，它是对关系型数据库的操作语言。它可以应用到所有关系型数据库中，例如：MySQL、Oracle、SQL Server 等。SQL 标准（ANSI/ISO）有：

SQL-92：1992 年发布的 SQL 语言标准；
SQL:1999：1999 年发布的 SQL 语言标签；
SQL:2003：2003 年发布的 SQL 语言标签；
这些标准就与 JDK 的版本一样，在新的版本中总要有一些语法的变化。不同时期的数据库对不同标准做了实现。

虽然 SQL 可以用在所有关系型数据库中，但很多数据库还都有标准之后的一些语法，我们可以称之为“方言”。例如 MySQL 中的 LIMIT 语句就是 MySQL 独有的方言，其它数据库都不支持！当然，Oracle 或 SQL Server 都有自己的方言。

2、语法要求
SQL 语句可以单行或多行书写，以分号结尾；
可以用空格和缩进来来增强语句的可读性；
关键字不区别大小写，建议使用大写
二、SQL 分类
DDL（Data Definition Language）：数据定义语言，用来定义数据库对象：库、表、列等；
DML（Data Manipulation Language）：数据操作语言，用来定义数据库记录（数据）；
DCL（Data Control Language）：数据控制语言，用来定义访问权限和安全级别；
DQL（Data Query Language）：数据查询语言，用来查询记录（数据）
三、DDL（Data Definition Language）：数据定义语言
基本操作
查看所有数据库：show databases；

切换数据库：use mydb1，切换到 mydb1 数据库；

1.操作数据库
1.操作数据库
创建数据库：CREATE DATABASE [IF NOT EXISTS] mydb1；
例如：CREATE DATABASE mydb1，创建一个名为 mydb1 的数据库。如果这个数据已经存在，那么会报错。
例如 CREATE DATABASE IF NOT EXISTSmydb1，在名为 mydb1 的数据库不存在时创建该库，这样可以避免报错。

# 事务详解

## 1、本篇内容

1. 什么是事务，它有什么用？
2. 事务的几个特性
3. 事务常见操作指令详解
4. 事务的隔离级别详解
5. 脏读、不可重复读、可重复读、幻读详解
6. 演示各种隔离级别产生的现象
7. 关于隔离级别的选择

## 2、什么是事务？

数据库中的事务是指对数据库执行一批操作，在同一个事务当中，这些操作最终要么全部执行成功，要么全部失败，不会存在部分成功的情况。

- 事务是一个原子操作。是一个最小执行单元。可以甶一个或多个SQL语句组成
- 在同一个事务当中，所有的SQL语句都成功执行时，整 个事务成功，有一个SQL语句执行失败，整个事务都执行失败。

举个例子：

比如A用户给B用户转账100操作，过程如下：

1. 从A账户扣100
2. 给B账户加100

如果在事务的支持下，上面最终只有2种结果：

1. 操作成功：A账户减少100；B账户增加100
2. 操作失败：A、B两个账户都没有发生变化

如果没有事务的支持，可能出现错：A账户减少了100，此时系统挂了，导致B账户没有加上100，而A账户凭空少了100。

## 3、事务的几个特性(ACID) -重点

### [原子性](https://so.csdn.net/so/search?q=原子性&spm=1001.2101.3001.7020)(Atomicity)

事务的整个过程如[原子操作](https://so.csdn.net/so/search?q=原子操作&spm=1001.2101.3001.7020)一样，最终要么全部成功，或者全部失败，这个原子性是从最终结果来看的，从最终结果来看这个过程是不可分割的。

### 一致性(Consistency)

一个事务必须使数据库从一个一致性状态变换到另一个一致性状态。

首先回顾一下一致性的定义。所谓一致性，指的是数据处于一种有意义的状态，这种状态是**语义上**的而不是**语法上**的。最常见的例子是转帐。例如从帐户A转一笔钱到帐户B上，如果帐户A上的钱减少了，而帐户B上的钱却没有增加，那么我们认为此时数据处于不一致的状态。

**从这段话的理解来看，所谓一致性，即，从实际的业务逻辑上来说，最终结果是对的、是跟程序员的所期望的结果完全符合的**

### 隔离性(Isolation)

一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。

- 这里先提一下事务的隔离级别：   
  - 读未提交：read uncommitted
  - 读已提交：read committed
  - 可重复读：repeatable read
  - 串行化：serializable

### 持久性(Durability)

一个事务一旦提交，他对数据库中数据的改变就应该是永久性的。当事务提交之后，数据会持久化到硬盘，修改是永久性的。

## 4、Mysql中事务操作

mysql中事务默认是隐式事务，执行insert、update、delete操作的时候，数据库自动开启事务、提交或回滚事务。

是否开启隐式事务是由变量autocommit控制的。

所以事务分为**隐式事务**和**显式事务**。

### 隐式事务

事务自动开启、提交或回滚，比如insert、update、delete语句，事务的开启、提交或回滚由mysql内部自动控制的。

查看变量autocommit是否开启了自动提交

```sql
mysql> show variables like 'autocommit';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit   | ON   |
+---------------+-------+
1 row in set, 1 warning (0.00 sec)
1234567
```

autocommit为ON表示开启了自动提交。

### 显式事务

事务需要手动开启、提交或回滚，由开发者自己控制。

2种方式手动控制事务：

#### 方式1：

语法：

```sql
//设置不自动提交事务
set autocommit=0;
//执行事务操作
commit|rollback;
1234
```

示例1：提交事务操作，如下：

```sql
mysql> create table test1 (a int);
Query OK, 0 rows affected (0.01 sec)

mysql> select * from test1;
Empty set (0.00 sec)

mysql> set autocommit=0;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values(1);
Query OK, 1 row affected (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)
12345678910111213141516171819202122
```

示例2：回滚事务操作，如下：

```sql
mysql> set autocommit=0;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values(2);
Query OK, 1 row affected (0.00 sec)

mysql> rollback;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)
12345678910111213141516
```

可以看到上面数据回滚了。

我们把autocommit还原回去：

```sql
mysql> set autocommit=1;
Query OK, 0 rows affected (0.00 sec)
12
```

#### 方式2：

语法：

```sql
start transaction;//开启事务
//执行事务操作
commit|rollback;
123
```

示例1：提交事务操作，如下：

```sql
mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)

mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values (2);
Query OK, 1 row affected (0.00 sec)

mysql> insert into test1 values (3);
Query OK, 1 row affected (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
|   2 |
|   3 |
+------+
3 rows in set (0.00 sec)
1234567891011121314151617181920212223242526272829
```

上面成功插入了2条数据。

示例2：回滚事务操作，如下：

```sql
mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
|   2 |
|   3 |
+------+
3 rows in set (0.00 sec)

mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> delete from test1;
Query OK, 3 rows affected (0.00 sec)

mysql> rollback;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
|   2 |
|   3 |
+------+
3 rows in set (0.00 sec)
12345678910111213141516171819202122232425262728
```

上面事务中我们删除了test1的数据，显示删除了3行，最后回滚了事务。

## 5、savepoint关键字

在事务中我们执行了一大批操作，可能我们只想回滚部分数据，怎么做呢？

我们可以将一大批操作分为几个部分，然后指定回滚某个部分。可以使用savepoin来实现，效果如下：

先清除test1表数据：

```sql
mysql> delete from test1;
Query OK, 3 rows affected (0.00 sec)

mysql> select * from test1;
Empty set (0.00 sec)
12345
```

演示savepoint效果，认真看：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values (1);
Query OK, 1 row affected (0.00 sec)

mysql> savepoint part1;//设置一个保存点
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values (2);
Query OK, 1 row affected (0.00 sec)

mysql> rollback to part1;//将savepint = part1的语句到当前语句之间所有的操作回滚
Query OK, 0 rows affected (0.00 sec)

mysql> commit;//提交事务
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)
12345678910111213141516171819202122232425
```

从上面可以看出，执行了2次插入操作，最后只插入了1条数据。

savepoint需要结合rollback to sp1一起使用，可以将保存点sp1到rollback to之间的操作回滚掉。

## 6、 只读事务

表示在事务中执行的是一些只读操作，如查询，但是不会做insert、update、delete操作，数据库内部对只读事务可能会有一些性能上的优化。

用法如下：

```sql
start transaction read only;
1
```

示例：

```sql
mysql> commit;
Query OK, 0 rows affected (0.00 sec)

mysql> start transaction read only;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
|   1 |
+------+
2 rows in set (0.00 sec)

mysql> delete from test1;
ERROR 1792 (25006): Cannot execute statement in a READ ONLY transaction.
mysql> commit;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
|   1 |
+------+
2 rows in set (0.00 sec)
12345678910111213141516171819202122232425262728
```

只读事务中执行delete会报错。

## 7、事务中的一些问题（重点）

**这些问题主要是基于数据在多个事务中的可见性来说的。也是并发事务产生的问题。**

### 更新丢失

丢失更新就是两个不同的事务（或者Java程序线程）在某一时刻对同一数据进行读取后，先后进行修改。导致第一次操作数据丢失。

「

第一类丢失更新 ：A，B 事务同时操作同一数据，A先对改数据进行了更改，B再次更改时失败然后回滚，把A更新的数据也回滚了。（事务撤销造成的撤销丢失）

第二类丢失更新：A，B 事务同时操作同一数据，A先对改数据进行了更改，B再次更改并且提交，把A提交的数据给覆盖了。（事务提交造成的覆盖丢失）

」

### 脏读

一个事务在执行的过程中读取到了其他事务还没有提交的数据。 这个还是比较好理解的。

「

两个事务同时操作同一数据，A事务对该数据进行了修改还没提交的时候，B事务访问了该条事务，并且使用了该数据，此时A事务回滚，那么B事务读到的就是脏数据。

比如事务1，修改了某个数据 事务2，刚好访问了事务1修改后的数据

此时事务1，回滚了操作 事务2，读到还是回滚前的数据

」

### 读已提交

从字面上我们就可以理解，即一个事务操作过程中可以读取到其他事务已经提交的数据。

事务中的每次读取操作，读取到的都是数据库中其他事务已提交的最新的数据（相当于当前读）

### 不可重复读

在同一事务中，多次读取同一数据返回的结果有所不同，换句话说，后续读取可以读到另一事务已提交的更新数据。相反，“可重复读” 在同一事务中多次读取数据时, 能够保证所读数据一样, 也就是后续读取不能读到另一事务已提交的更新数据。

「

这种情况发生 在一个事务内多次读同一数据。A事务查询某条数据，该事务未结束时，B事务也访问同一数据并进行了修改。那么在A事务中的两 次读数据之间，由于第二个事务的修改，那么第一个事务两次读到的的数据可能是不一样的。

事务1，查询某个数据 事务2，修改了某个数据，提交

事务1，再次查询这个数据

这样事务1两次查询的数据不一样，称为不可重复读

」

### 可重复读

一个事务操作中对于一个读取操作不管多少次，读取到的结果都是一样的。

### 幻读

脏读、不可重复读、可重复读、幻读，其中最难理解的是幻读

以mysql为例：

- - 可重复读模式下，比如有个用户表，手机号码为主键，有两个事物进行如下操作
  - 事务A操作如下： 1、打开事务 2、查询号码为X的记录，不存在 3、插入号码为X的数据，插入报错（为什么会报错，先向下看） 4、查询号码为X的记录，发现还是不存在（由于是可重复读，所以读取记录X还是不存在的）
  - 事物B操作：在事务A第2步操作时插入了一条X的记录，所以会导致A中第3步插入报错（违反了唯一约束）
  - 上面操作对A来说就像发生了幻觉一样，明明查询X（A中第二步、第四步）不存在，但却无法插入成功
  - **幻读可以这么理解：事务中后面的操作（插入号码X）需要上面的读取操作（查询号码X的记录）提供支持，但读取操作却不能支持下面的操作时产生的错误，就像发生了幻觉一样。**
- 看第二种解释：
  - 事务A在操作一堆数据的时候，事务B插入了一条数据，A事务再次（第二次）查询，发现多了一条数据，像是幻觉。与不可重复读类似，不同的是一个是修改删除操作，一个是新增操作。

如果还是理解不了的，继续向下看，后面后详细的演示。

## 8、事务的隔离级别

当多个事务同时进行的时候，如何确保当前事务中数据的正确性，比如A、B两个事物同时进行的时候，A是否可以看到B已提交的数据或者B未提交的数据，这个需要依靠事务的隔离级别来保证，不同的隔离级别中所产生的效果是不一样的。

**事务隔离级别主要是解决了上面多个事务之间数据可见性及数据正确性的问题。（或者说为了解决并发控制可能产生的异常问题，数据库定义了四种事务的隔离级别）**

**隔离级别分为4种：**

1. **读未提交：READ-UNCOMMITTED**
2. **读已提交：READ-COMMITTED**
3. **可重复读：REPEATABLE-READ**
4. **串行：SERIALIZABLE**

上面4中隔离级别越来越强，会导致数据库的并发性也越来越低。

### 查看隔离级别

```sql
mysql> show variables like 'transaction_isolation';
+-----------------------+----------------+
| Variable_name     | Value      |
+-----------------------+----------------+
| transaction_isolation | READ-COMMITTED |
+-----------------------+----------------+
1 row in set, 1 warning (0.00 sec)
1234567
```

### 隔离级别的设置

分2步骤，修改文件、重启mysql，如下：

修改mysql中的my.init文件，我们将隔离级别设置为：READ-UNCOMMITTED，如下：

```sql
# 隔离级别设置,READ-UNCOMMITTED读未提交,READ-COMMITTED读已提交,REPEATABLE-READ可重复读,SERIALIZABLE串行

transaction-isolation=READ-UNCOMMITTED
123
```

以管理员身份打开cmd窗口，重启mysql，如下：

```sql
C:\Windows\system32>net stop mysql
mysql 服务正在停止..
mysql 服务已成功停止。

C:\Windows\system32>net start mysql
mysql 服务正在启动 .
mysql 服务已经启动成功。
1234567
```

## 9、各种隔离级别中会出现的问题

| 隔离级别         | 脏读可能性 | 不可重复读可能性 | 幻读可能性 |
| ---------------- | ---------- | ---------------- | ---------- |
| READ-UNCOMMITTED | 有         | 有               | 有         |
| READ-COMMITTED   | 无         | 有               | 有         |
| REPEATABLE-READ  | 无         | 无               | 有         |
| SERIALIZABLE     | 无         | 无               | 无         |

下面我们来演示一下，各种隔离级别中可见性的问题，开启两个窗口，叫做A、B窗口，两个窗口中登录mysql。

### 9.1、READ-UNCOMMITTED：读未提交

将隔离级别置为READ-UNCOMMITTED：

```sql
# 隔离级别设置,READ-UNCOMMITTED读未提交,READ-COMMITTED读已提交,REPEATABLE-READ可重复读,SERIALIZABLE串行

transaction-isolation=READ-UNCOMMITTED
123
```

重启mysql：

```sql
C:\Windows\system32>net stop mysql
mysql 服务正在停止..
mysql 服务已成功停止。

C:\Windows\system32>net start mysql
mysql 服务正在启动 .
mysql 服务已经启动成功。
1234567
```

查看隔离级别：

```sql
mysql> show variables like 'transaction_isolation';
+-----------------------+----------------+
| Variable_name     | Value      |
+-----------------------+----------------+
| transaction_isolation | READ-UNCOMMITTED |
+-----------------------+----------------+
1 row in set, 1 warning (0.00 sec)
1234567
```

先清空test1表数据：

```sql
delete from test1;
select * from test1;
12
```

按时间顺序在2个窗口中执行下面操作：

| 时间 | 窗口A                | 窗口B                         |
| ---- | -------------------- | ----------------------------- |
| T1   | start transaction;   |                               |
| T2   | select * from test1; |                               |
| T3   |                      | start transaction;            |
| T4   |                      | insert into test1 values (1); |
| T5   |                      | select * from test1;          |
| T6   | select * from test1; |                               |
| T7   |                      | commit;                       |
| T8   | commit;              |                               |

A窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
Empty set (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)
12345678910111213141516
```

B窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values (1);
Query OK, 1 row affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)
12345678910111213141516
```

看一下:

T2-A：无数据，T6-A：有数据，T6时刻B还未提交，此时A已经看到了B插入的数据，**说明出现了脏读**。

T2-A：无数据，T6-A：有数据，查询到的结果不一样，**说明不可重复读**。

**结论：读未提交情况下，可以读取到其他事务还未提交的数据，多次读取结果不一样，出现了脏读、不可重复读、幻读**

### 9.2、READ-COMMITTED：读已提交

将隔离级别置为READ-COMMITTED

```sql
# 隔离级别设置,READ-UNCOMMITTED读未提交,READ-COMMITTED读已提交,REPEATABLE-READ可重复读,SERIALIZABLE串行

transaction-isolation=READ-COMMITTED
123
```

重启mysql：

```sql
C:\Windows\system32>net stop mysql
mysql 服务正在停止..
mysql 服务已成功停止。

C:\Windows\system32>net start mysql
mysql 服务正在启动 .
mysql 服务已经启动成功。
1234567
```

查看隔离级别：

```sql
mysql> show variables like 'transaction_isolation';
+-----------------------+----------------+
| Variable_name     | Value      |
+-----------------------+----------------+
| transaction_isolation | READ-COMMITTED |
+-----------------------+----------------+
1 row in set, 1 warning (0.00 sec)
1234567
```

先清空test1表数据：

```sql
delete from test1;
select * from test1;
12
```

按时间顺序在2个窗口中执行下面操作：

| 时间 | 窗口A                | 窗口B                         |
| ---- | -------------------- | ----------------------------- |
| T1   | start transaction;   |                               |
| T2   | select * from test1; |                               |
| T3   |                      | start transaction;            |
| T4   |                      | insert into test1 values (1); |
| T5   |                      | select * from test1;          |
| T6   | select * from test1; |                               |
| T7   |                      | commit;                       |
| T8   | select * from test1; |                               |
| T9   | commit;              |                               |

A窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
Empty set (0.00 sec)

mysql> select * from test1;
Empty set (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)
12345678910111213141516171819
```

B窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values (1);
Query OK, 1 row affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
+------+
1 row in set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)
12345678910111213141516
```

看一下:

T5-B：有数据，T6-A窗口：无数据，A看不到B的数据，**说明没有脏读**。

T6-A窗口：无数据，T8-A：看到了B插入的数据，此时B已经提交了，A看到了B已提交的数据，**说明可以读取到已提交的数据**。

T2-A、T6-A：无数据，T8-A：有数据，多次读取结果不一样，**说明不可重复读**。

**结论：读已提交情况下，无法读取到其他事务还未提交的数据，可以读取到其他事务已经提交的数据，多次读取结果不一样，未出现脏读，出现了读已提交、不可重复读、幻读**

### 9.3、REPEATABLE-READ：可重复读

将隔离级别置为REPEATABLE-READ

```sql
# 隔离级别设置,READ-UNCOMMITTED读未提交,READ-COMMITTED读已提交,REPEATABLE-READ可重复读,SERIALIZABLE串行

transaction-isolation=REPEATABLE-READ
123
```

重启mysql：

```sql
C:\Windows\system32>net stop mysql
mysql 服务正在停止..
mysql 服务已成功停止。

C:\Windows\system32>net start mysql
mysql 服务正在启动 .
mysql 服务已经启动成功。
1234567
```

查看隔离级别：

```sql
mysql> show variables like 'transaction_isolation';
+-----------------------+----------------+
| Variable_name     | Value      |
+-----------------------+----------------+
| transaction_isolation | REPEATABLE-READ |
+-----------------------+----------------+
1 row in set, 1 warning (0.00 sec)
1234567
```

先清空test1表数据：

```sql
delete from test1;
select * from test1;
12
```

按时间顺序在2个窗口中执行下面操作：

| 时间 | 窗口A                | 窗口B                         |
| ---- | -------------------- | ----------------------------- |
| T1   | start transaction;   |                               |
| T2   | select * from test1; |                               |
| T3   |                      | start transaction;            |
| T4   |                      | insert into test1 values (1); |
| T5   |                      | select * from test1;          |
| T6   | select * from test1; |                               |
| T7   |                      | commit;                       |
| T8   | select * from test1; |                               |
| T9   | commit;              |                               |
| T10  | select * from test1; |                               |

A窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
Empty set (0.00 sec)

mysql> select * from test1;
Empty set (0.00 sec)

mysql> select * from test1;
Empty set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
|   1 |
+------+
2 rows in set (0.00 sec)
1234567891011121314151617181920212223
```

B窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values (1);
Query OK, 1 row affected (0.00 sec)

mysql> select * from test1;
+------+
| a   |
+------+
|   1 |
|   1 |
+------+
2 rows in set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)
1234567891011121314151617
```

看一下:

T2-A、T6-A窗口：无数据，T5-B：有数据，A看不到B的数据，**说明没有脏读**。

T8-A：无数据，此时B已经提交了，A看不到B已提交的数据，A中3次读的结果一样都是没有数据的，**说明可重复读**。

**结论：可重复读情况下，未出现脏读，未读取到其他事务已提交的数据，多次读取结果一致，即可重复读。**

#### 9.3.1、幻读演示

将隔离级别置为REPEATABLE-READ

```sql
# 隔离级别设置,READ-UNCOMMITTED读未提交,READ-COMMITTED读已提交,REPEATABLE-READ可重复读,SERIALIZABLE串行
transaction-isolation=REPEATABLE-READ
12
```

重启mysql：

```sql
C:\Windows\system32>net stop mysql
mysql 服务正在停止..
mysql 服务已成功停止。

C:\Windows\system32>net start mysql
mysql 服务正在启动 .
mysql 服务已经启动成功。
1234567
```

查看隔离级别：

```sql
mysql> show variables like 'transaction_isolation';
+-----------------------+----------------+
| Variable_name     | Value      |
+-----------------------+----------------+
| transaction_isolation | REPEATABLE-READ |
+-----------------------+----------------+
1 row in set, 1 warning (0.00 sec)
1234567
```

准备数据：

```sql
mysql> create table t_user(id int primary key,name varchar(16) unique key);
Query OK, 0 rows affected (0.01 sec)

mysql> insert into t_user values (1,'路人甲Java'),(2,'路人甲Java');
ERROR 1062 (23000): Duplicate entry '路人甲Java' ***\*for\**** key 'name'

mysql> select * from t_user;
Empty set (0.00 sec)
12345678
```

上面我们创建t_user表，name添加了唯一约束，表示name不能重复，否则报错。

按时间顺序在2个窗口中执行下面操作：

| 时间 | 窗口A                                                        | 窗口B                                                        |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| T1   | start transaction;                                           |                                                              |
| T2   |                                                              | start transaction;                                           |
| T3   |                                                              | – 插入路人甲Java insert into t_user values (1,‘路人甲Java’); |
| T4   |                                                              | select * from t_user;                                        |
| T5   | – 查看路人甲Java是否存在 select * from t_user where name=‘路人甲Java’; |                                                              |
| T6   |                                                              | commit;                                                      |
| T7   | – 插入路人甲Java insert into t_user values (2,‘路人甲Java’); |                                                              |
| T8   | – 查看路人甲Java是否存在 select * from t_user where name=‘路人甲Java’; |                                                              |
| T9   | commit;                                                      |                                                              |

A窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from t_user where name='路人甲Java';
Empty set (0.00 sec)

mysql> insert into t_user values (2,'路人甲Java');
ERROR 1062 (23000): Duplicate entry '路人甲Java' ***\*for\**** key 'name'
mysql> select * from t_user where name='路人甲Java';
Empty set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)
12345678910111213
```

B窗口如下：

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t_user values (1,'路人甲Java');
Query OK, 1 row affected (0.00 sec)

mysql> select * from t_user;
+----+---------------+
| id | name      |
+----+---------------+
|  1 | 路人甲Java   |
+----+---------------+
1 row in set (0.00 sec)

mysql> commit;
Query OK, 0 rows affected (0.00 sec)
12345678910111213141516
```

看一下:

A想插入数据路人甲Java，插入之前先查询了一下（T5时刻）该用户是否存在，发现不存在，然后在T7时刻执行插入，报错了，报数据已经存在了，因为T6时刻B已经插入了路人甲Java。

然后A有点郁闷，刚才查的时候不存在的，然后A不相信自己的眼睛，又去查一次（T8时刻），发现路人甲Java还是不存在的。

此时A心里想：数据明明不存在啊，为什么无法插入呢？这不是懵逼了么，A觉得如同发生了幻觉一样。

### 9.4、SERIALIZABLE：串行

**SERIALIZABLE会让并发的事务串行执行（多个事务之间读写、写读、写写会产生互斥，效果就是串行执行，多个事务之间的读读不会产生互斥）。**

**读写互斥**：事务A中先读取操作，事务B发起写入操作，事务A中的读取会导致事务B中的写入处于等待状态，直到A事务完成为止。

表示我开启一个事务，为了保证事务中不会出现上面说的问题（脏读、不可重复读、读已提交、幻读），那么我读取的时候，其他事务有修改数据的操作需要排队等待，等待我读取完成之后，他们才可以继续。

写读、写写也是互斥的，读写互斥类似。

这个类似于java中的java.util.concurrent.lock.ReentrantReadWriteLock类产生的效果。

下面演示读写互斥的效果。

将隔离级别置为SERIALIZABLE

```sql
# 隔离级别设置,READ-UNCOMMITTED读未提交,READ-COMMITTED读已提交,REPEATABLE-READ可重复读,SERIALIZABLE串行

transaction-isolation=SERIALIZABLE
123
```

重启mysql：

```sql
C:\Windows\system32>net stop mysql
mysql 服务正在停止..
mysql 服务已成功停止。

C:\Windows\system32>net start mysql
mysql 服务正在启动 .
mysql 服务已经启动成功。
1234567
```

查看隔离级别：

```sql
mysql> show variables like 'transaction_isolation';
+-----------------------+--------------+
| Variable_name     | Value     |
+-----------------------+--------------+
| transaction_isolation | SERIALIZABLE |
+-----------------------+--------------+
1 row in set, 1 warning (0.00 sec)
1234567
```

先清空test1表数据：

```sql
delete from test1;
select * from test1;
12
```

按时间顺序在2个窗口中执行下面操作：

| 时间 | 窗口A                | 窗口B                         |
| ---- | -------------------- | ----------------------------- |
| T1   | start transaction;   |                               |
| T2   | select * from test1; |                               |
| T3   |                      | start transaction;            |
| T4   |                      | insert into test1 values (1); |
| T5   | commit;              |                               |
| T6   |                      | commit;                       |

按时间顺序运行上面的命令，会发现T4-B这样会被阻塞，直到T5-A执行完毕。

上面这个演示的是读写互斥产生的效果，大家可以自己去写一下写读、写写互斥的效果。

**可以看出来，事务只能串行执行了。串行情况下不存在脏读、不可重复读、幻读的问题了。**

### 9.5、小结

- 读未提交( Read Uncommitted )
  - 读未提交是隔离级别最低的一种事务级别。在这种隔离级别下，一个事务会读到另一个事务更新后但未提交的数据，如果另一个事务回滚，那么当前事务读到的数据就是脏数据，这就是脏读（Dirty Read）。
- 读已提交( Read Committed )
  - 在 Read Committed 隔离级别下，一个事务可能会遇到不可重复读（Non Repeatable  Read）的问题。不可重复读是指，在一个事务内，多次读同一数据，在这个事务还没有结束时，如果另一个事务恰好修改了这个数据，那么，在第一个事务中，两次读取的数据就可能不一致。
- 可重复读( Repeatable Read )
  - 在Repeatable Read隔离级别下，一个事务可能会遇到幻读（Phantom  Read）的问题。幻读是指，在一个事务中，第一次查询某条记录，发现没有，但是，当试图更新这条不存在的记录时，竟然能成功，并且，再次读取同一条记录，它就神奇地出现了。幻读就是没有读到的记录，以为不存在，但其实是可以更新成功的，并且，更新成功后，再次读取，就出现了。
- 可串行化( Serializable )
  - Serializable 是最严格的隔离级别。在Serializable隔离级别下，所有事务按照次序依次执行，因此，脏读、不可重复读、幻读都不会出现。
  - 虽然 Serializable 隔离级别下的事务具有最高的安全性，但是，由于事务是串行执行，所以效率会大大下降，应用程序的性能会急剧降低。如果没有特别重要的情景，一般都不会使用Serializable隔离级别。

**默认隔离级别：如果没有指定隔离级别，数据库就会使用默认的隔离级别。在MySQL中，如果使用 InnoDB，默认的隔离级别是Repeatable Read。**

## 10、关于隔离级别的选择

1. 需要对各种隔离级别产生的现象非常了解，然后选择的时候才能游刃有余
2. 隔离级别越高，并发性也低，比如最高级别SERIALIZABLE会让事物串行执行，并发操作变成串行了，会导致系统性能直接降低。
3. 具体选择哪种需要结合具体的业务来选择。
4. 读已提交（READ-COMMITTED）通常用的比较多。

## 11、总结

1. 理解事务的4个特性：原子性、一致性、隔离性、持久性
2. 掌握事务操作常见命令的介绍
3. set autocommit可以设置是否开启自动提交事务
4. start transaction：开启事务
5. start transaction read only：开启只读事物
6. commit：提交事务
7. rollback：回滚事务
8. savepoint：设置保存点
9. rollback to 保存点：可以回滚到某个保存点
10. 掌握4种隔离级别及了解其特点
11. 脏读、不可重复读、幻读

# 一、SQL 概述

## 1、什么是 SQL

==SQL（Structured Query Language）==是“结构化查询语言”，它是对关系型数据库的操作语言。它可以应用到所有关系型数据库中，例如：MySQL、Oracle、SQL Server 等。SQL 标准（ANSI/ISO）有：

- SQL-92：1992 年发布的 SQL 语言标准；
- SQL:1999：1999 年发布的 SQL 语言标签；
- SQL:2003：2003 年发布的 SQL 语言标签；

这些标准就与 JDK 的版本一样，在新的版本中总要有一些语法的变化。不同时期的数据库对不同标准做了实现。

虽然 SQL 可以用在所有关系型数据库中，但很多数据库还都有标准之后的一些语法，我们可以称之为“方言”。例如 MySQL 中的 LIMIT 语句就是 MySQL 独有的方言，其它数据库都不支持！当然，Oracle 或 SQL Server 都有自己的方言。

## 2、语法要求

- SQL 语句可以单行或多行书写，以分号结尾；
- 可以用空格和缩进来来增强语句的可读性；
- 关键字不区别大小写，建议使用大写；

# 二、SQL 分类

- DDL（Data Definition Language）：数据定义语言，用来定义数据库对象：库、表、列等；
- DML（Data Manipulation Language）：数据操作语言，用来定义数据库记录（数据）；
- DCL（Data Control Language）：数据控制语言，用来定义访问权限和安全级别；
- DQL（Data Query Language）：数据查询语言，用来查询记录（数据）

# 三、DDL（Data Definition Language）：数据定义语言

## 基本操作

查看所有数据库：show databases；

切换数据库：use mydb1，切换到 mydb1 数据库；

## 1.操作数据库

1. 创建数据库：CREATE DATABASE [IF NOT EXISTS] mydb1；

例如：`CREATE DATABASE mydb1`，创建一个名为 mydb1 的数据库。如果这个数据已经存在，那么会报错。
 例如 `CREATE DATABASE IF NOT EXISTSmydb1`，在名为 mydb1 的数据库不存在时创建该库，这样可以避免报错。

------

1. 删除数据库：DROP DATABASE [IF EXISTS] mydb1；

例如：`DROP DATABASE mydb1`，删除名为 mydb1 的数据库。如果这个数据库不存在，那么会报错。DROP DATABASE IF EXISTS mydb1，就算 mydb1不存在，也不会的报错。

------

1. 修改数据库编码：ALTER DATABASE mydb1 CHARACTER SET utf8

修改数据库 mydb1 的编码为 utf8。注意，在 MySQL 中所有的 UTF-8 编码都
 不能使用中间的`“-”`，即 UTF-8 要书写为 UTF8。

------

## 2.数据类型

MySQL 与 Java、C 一样，也有数据类型MySQL 中数据类型主要应用在列上。
 常用类型：

- **int**：整型
- **double**：浮点型，例如 double(5,2)表示最多 5 位，其中必须有 2 位小数，即最大值为 999.99；
- **decimal**：泛型型，在表单线方面使用该类型，因为不会出现精度缺失问题；
- **char**：固定长度字符串类型；(当输入的字符不够长度时会补空格)
- **varchar**：固定长度字符串类型；
- **text**：字符串类型；
- **blob**：字节类型；
- **date**：日期类型，格式为：yyyy-MM-dd；
- **time**：时间类型，格式为：hh:mm:ss
- **timestamp**：时间戳类型；

## 3.操作表

创建表

```sql
CREATE TABLE 表名(
	列名 列类型, 
	列名 列类型,
	...... 
);
```

```sql
CREATE TABLE stu(
	sid CHAR(6), 
	sname VARCHAR(20), 
	age INT, 
	gender VARCHAR(10)
);
```

查看表的结构

DESC 表名；

删除表

DROP TABLE 表名；

修改表

1. 添加列：给 stu 表添加 classname 列
    `ALTER TABLE stu ADD (classname varchar(100));`
2. 修改列的数据类型：修改 stu 表的 gender 列类型为 CHAR(2)
    `ALTER TABLE stu MODIFY gender CHAR(2);`
3. 修改列名：修改 stu 表的 gender 列名为 sex
    `ALTER TABLE stu change gender sex CHAR(2);`
4. 删除列：删除 stu 表的 classname 列
    `ALTER TABLE stu DROP classname;`
5. 修改表名称：修改 stu 表名称为 student
    `ALTER TABLE stu RENAME TO student`

# 四、DML（Data Manipulation Language）：数据操作语言

## 1.插入数据

语法 1：
 `INSERT INTO 表名(列名 1,列名 2, …) ;`

```sql
NSERT INTO stu(sid, sname,age,gender) VALUES('s_1001', 'zhangSan', 23, 'male');
1
INSERT INTO stu(sid, sname) VALUES('s_1001', 'zhangSan');
```

语法 2：
 `INSERT INTO 表名 VALUES(值 1,值 2,…);`
 因为没有指定要插入的列，表示按创建表时列的顺序插入所有列的值：

```sql
INSERT INTO stu VALUES('s_1002', 'liSi', 32, 'female');
1
```

**注意：所有字符串数据必须使用单引用！**

## 2.修改数据

语法：
 `UPDATE 表名 SET 列名 1=值 1, … 列名 n=值 n [WHERE 条件];`

```sql
UPDATE stu SET sname=’zhangSanSan’, age=’32’, gender=’female’ WHERE sid=’s_1001’;
UPDATE stu SET sname=’liSi’, age=’20’WHERE age>50 AND gender=’male’;
UPDATE stu SET sname=’wangWu’, age=’30’WHERE age>60 OR gender=’female’;
UPDATE stu SET gender=’female’WHERE gender IS NULL
UPDATE stu SET age=age+1 WHERE sname=’zhaoLiu’;
12345
```

## 3.删除数据

语法 1：
 `DELETE FROM 表名 [WHERE 条件];`

```sql
DELETE FROM stu WHERE sid=’s_1001’003B;
DELETE FROM stu WHERE sname=’chenQi’ OR age > 30;
DELETE FROM stu;
123
```

语法 2：
 TRUNCATE TABLE 表名;

```sql
TRUNCATE TABLE stu;
1
```

两者之间的区别：
 虽然 TRUNCATE 和 DELETE 都可以删除表的所有记录，但有原理不同。DELETE的效率没有 TRUNCATE 高！
 TRUNCATE 其实属性 DDL 语句，因为它是先 DROP TABLE，再 CREATE TABLE。
 而且TRUNCATE删除的记录是无法回滚的，但DELETE删除的记录是可以回滚的（回滚是事务的知识！）。

# 五、DCL（Data Control Language）：数据控制语言

## 1.创建用户

语法：
 `CREATE USER ‘用户名’@地址 IDENTIFIED BY '密码';`

```sql
CREATE USER ‘user1’@localhost IDENTIFIED BY ‘123’;
CREATE USER ‘user2’@’%’ IDENTIFIED BY ‘123’;
12
```

## 2.给用户授权

语法：
 `GRANT 权限 1, … , 权限 n ON 数据库.* TO ‘用户名’@地址;`

```sql
GRANT CREATE,ALTER,DROP,INSERT,UPDATE,DELETE,SELECT ON mydb1.* TO user1@localhost;
GRANT ALL ON mydb1.* TO user2@localhost;
12
```

## 3.撤销授权

语法：
 `REVOKE 权限 1, … , 权限 n ON 数据库.* FROM ‘用户名’@地址;`

```sql
REVOKE CREATE,ALTER,DROP ON mydb1.* FROM user1@localhost;
1
```

## 4.查看用户权限

语法：
 `SHOW GRANTS FOR ‘用户名’@地址;`

```sql
SHOW GRANTS FOR user1@localhost;
1
```

## 5.删除用户

语法：
 `DROP USER ‘用户名’@地址;`

```sql
DROP USER ‘user1’@localhost;
1
```

## 6.修改用户密码（以root身份）

语法 ：
 `use mysql;`
 `alter user '用户名'@localhost identified by '新密码';`

------

# 六、DQL（Data Query Language）：数据查询语言

数据库执行 DQL 语句不会对数据进行改变，而是让数据库发送结果集给客户端。

语法：
 select 列名 ----> 要查询的列名称
 from 表名 ----> 要查询的表名称
 where 条件 ----> 行条件
 group by 分组列 ----> 对结果分组
 having 分组条件 ----> 分组后的行条件
 order by 排序列 ----> 对结果分组
 limit 起始行, 行数 ----> 结果限定

学生表

```sql
CREATE TABLE stu (
	sid CHAR(6), 
	sname VARCHAR(50), 
	age INT, 
	gender VARCHAR(50)
);
INSERT INTO stu VALUES('S_1001', 'liuYi', 35, 'male');
INSERT INTO stu VALUES('S_1002', 'chenEr', 15, 'female');
INSERT INTO stu VALUES('S_1003', 'zhangSan', 95, 'male');
INSERT INTO stu VALUES('S_1004', 'liSi', 65, 'female');
INSERT INTO stu VALUES('S_1005', 'wangWu', 55, 'male');
INSERT INTO stu VALUES('S_1006', 'zhaoLiu', 75, 'female');
INSERT INTO stu VALUES('S_1007', 'sunQi', 25, 'male');
INSERT INTO stu VALUES('S_1008', 'zhouBa', 45, 'female');
INSERT INTO stu VALUES('S_1009', 'wuJiu', 85, 'male');
INSERT INTO stu VALUES('S_1010', 'zhengShi', 5, 'female');
INSERT INTO stu VALUES('S_1011', 'xxx', NULL, NULL);
```

```sql
CREATE TABLE emp(
	empno INT, 
	ename VARCHAR(50), 
	job VARCHAR(50), 
	mgr INT, 
	hiredate DATE,
	sal DECIMAL(7,2), 
	comm decimal(7,2), 
	deptno INT
) ;
INSERT INTO emp values(7369,'SMITH','CLERK',7902,'1980-12-17',800,NULL,20);
INSERT INTO emp values(7499,'ALLEN','SALESMAN',7698,'1981-02-20',1600,300,30);
INSERT INTO emp values(7521,'WARD','SALESMAN',7698,'1981-02-22',1250,500,30);
INSERT INTO emp values(7566,'JONES','MANAGER',7839,'1981-04-02',2975,NULL,20);
INSERT INTO emp values(7654,'MARTIN','SALESMAN',7698,'1981-09-28',1250,1400,30);
INSERT INTO emp values(7698,'BLAKE','MANAGER',7839,'1981-05-01',2850,NULL,30);
INSERT INTO emp values(7782,'CLARK','MANAGER',7839,'1981-06-09',2450,NULL,10);
INSERT INTO emp values(7788,'SCOTT','ANALYST',7566,'1987-04-19',3000,NULL,20);
INSERT INTO emp values(7839,'KING','PRESIDENT',NULL,'1981-11-17',5000,NULL,10);
INSERT INTO emp values(7844,'TURNER','SALESMAN',7698,'1981-09-08',1500,0,30);
INSERT INTO emp values(7876,'ADAMS','CLERK',7788,'1987-05-23',1100,NULL,20);
INSERT INTO emp values(7900,'JAMES','CLERK',7698,'1981-12-03',950,NULL,30);
INSERT INTO emp values(7902,'FORD','ANALYST',7566,'1981-12-03',3000,NULL,20);
INSERT INTO emp values(7934,'MILLER','CLERK',7782,'1982-01-23',1300,NULL,10);
```

```sql
CREATE TABLE dept(
	deptno INT, 
	dname varchar(14),
	loc varchar(13)
);
INSERT INTO dept values(10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO dept values(20, 'RESEARCH', 'DALLAS');
INSERT INTO dept values(30, 'SALES', 'CHICAGO');
INSERT INTO dept values(40, 'OPERATIONS', 
```

## 1.基础查询

查询所有列
 `SELECT * FROM 表名;`
 (* ：通配符，表示所有列)

```sql
SELECT * FROM stu;
1
```

查询指定列
 `SELECT 列名 1, 列名 2, …列名 n FROM 表名;`

```sql
SELECT sid, sname, age FROM stu;
1
```

## 2.条件查询

条件查询介绍
 条件查询就是在查询时给出 WHERE 子句，在 WHERE 子句中可以使用如下运算符及关键字：

- =、!=、<>、<、<=、>、>=；
- BETWEEN…AND；
- IN(set)；
- IS NULL；
- AND；
- OR；
- NOT；

举例说明
 查询性别为女，并且年龄小于 50 的记录
 `SELECT * FROM stu`
 `WHERE gender='female' AND age<50;`

查询学号为 S_1001，或者姓名为 liSi 的记录
 `SELECT * FROM stu`
 `WHERE sid ='S_1001' OR sname='liSi';`

查询学号为 S_1001，S_1002，S_1003 的记录
 `SELECT * FROM stu`
 `WHERE sid IN ('S_1001','S_1002','S_1003')`

查询学号不是 S_1001，S_1002，S_1003 的记录
 `SELECT * FROM stu`
 `WHERE sid NOT IN ('S_1001','S_1002','S_1003');`

查询年龄为 null 的记录
 `SELECT * FROM stu`
 `WHERE age IS NULL;`

查询年龄在 20 到 40 之间的学生记录
 `SELECT * FROM stu`
 `WHERE age>=20 AND age<=40;`
 或者
 `SELECT * FROM stu`
 `WHERE age BETWEEN 20 AND 40;`

查询性别非男的学生记录
 `SELECT * FROM stu`
 `WHERE gender!='male';`
 或者
 `SELECT * FROM stu`
 `WHERE gender<>'male';`
 或者
 `SELECT * FROM stu`
 `WHERE NOT gender='male';`

查询姓名不为 null 的学生记录
 `SELECT * FROM stu`
 `WHERE NOT sname IS NULL;`
 或者
 `SELECT * FROM stu`
 `WHERE sname IS NOT NULL;`

------

## 3.模糊查询

`SELECT 字段 FROM 表 WHERE 某字段 Like 条件`
 其中关于条件，SQL 提供了两种匹配模式：

1. `%` ：表示任意 0 个或多个字符。可匹配任意类型和长度的字符，有些情
    况下若是中文，请使用两个百分号（%%）表示。
2. `_`： 表示任意单个字符。匹配单个任意字符，它常用来限制表达式的字 符长度语句。

举例说明
 查询姓名由 5 个字母构成的学生记录
 `SELECT * FROM stu`
 `WHERE sname LIKE '_ _ _ _ _';`

查询姓名由 5 个字母构成，并且第 5 个字母为“i”的学生记录
 `SELECT * FROM stu`
 `WHERE sname LIKE '_ _ _ _i';`

查询姓名以“z”开头的学生记录
 `SELECT * FROM stu`
 `WHERE sname LIKE 'z%';`
 其中“%”匹配 0~n 个任何字母。

查询姓名中第 2 个字母为“i”的学生记录
 `SELECT * FROM stu`
 `WHERE sname LIKE '_i%';`

\查询姓名中包含“a”字母的学生记录
 `SELECT * FROM stu WHERE sname LIKE '%a%';`

## 4.字段控制查询

去掉重复记录
 去除重复记录（两行或两行以上记录中系列的上的数据都相同），例如 emp 表中 sal 字段就存在相同的记录。当只查询 emp 表的 sal 字段时，那么会出现重复记录，那么想去除重复记录，需要使用 DISTINCT：
 `SELECT DISTINCT sal FROM emp;`

查看雇员的月薪与佣金之和
 因为 sal 和 comm 两列的类型都是数值类型，所以可以做加运算。如果 sal 或 comm 中有一个字段不是数值类型，那么会出错。
 `SELECT *,`
 `sal+comm FROM emp;`
 comm 列有很多记录的值为 NULL，因为任何东西与 NULL 相加结果还是 NULL，所以结算结果可能会出现 NULL。下面使用了把 NULL 转换成数值 0 的函数 IFNULL：
 `SELECT *, sal+IFNULL(comm,0) FROM emp;`

给列名添加别名
 在上面查询中出现列名为 sal+IFNULL(comm,0)，这很不美观，现在我们给这一列给出一个别名，为 total：
 `SELECT *, sal+IFNULL(comm,0) AS total FROM emp;`
 给列起别名时，是可以省略 AS 关键字的：
 `SELECT *, sal+IFNULL(comm,0) total FROM emp;`

------

SQL语句可以为 表名称 或 列名称 指定别名。（别名有时也称为导出列，不管是导出列还是别名，它们所代表的都是相同的东西。）

### SQL 别名

- SQL 别名用于为 表 或 表中的列 提供临时名称。 
- SQL 别名通常用于使 表名 或 列名 更具可读性。 
- SQL 一个别名只存在于查询期间。 

别名使用 AS 关键字赋予。 

### 建议在下列情况下使用别名

- 查询涉及多个表 
- 用于查询函数
- 需要把两个或更多的列放在一起
- 列名长或可读性差

### 语法

1、表名的别名语法：

```sql
SELECT 列名



FROM 表名 AS 别名;
```

2、列名的别名语法

```sql
SELECT 列名 AS 别名



FROM 表名;
```

3、表名 和 列名 的别名混合使用语法

```sql
SELECT 列名 AS 别名



FROM 表名 AS 别名;
```

### 语法举例

1、使用表名称别名

有两个表分别是："Persons" 和 "Product_Orders"。分别为它们指定别名 "p" 和 "po"。列出 "John Adams" 的所有定单。

```sql
SELECT po.OrderID, p.LastName, p.FirstName



FROM Persons AS p, Product_Orders AS po



WHERE p.LastName='Adams' AND p.FirstName='John';
```

2、使用列名称别名

查询 Persons 表中的 LastName 列 （为其定义别名 '姓氏'）和 FirstName 列（为其定义别名 ‘名字’），输出所有结果值。

```sql
SELECT LastName AS 姓氏, FirstName AS 名字



FROM Persons
```

3、同时使用 表名称 和 列名称

为 city 表定义别名 'A'，并利用该表别名查询表中的 ID 列（为ID列定义别名 B）的所有信息。

```sql
SELECT A.ID AS B



FROM city AS A;
```

## 5.排序

查询所有学生记录，按年龄升序排序
 `SELECT * FROM stu`
 `ORDER BY sage ASC;`
 或者
 `SELECT * FROM stu ORDER BY sage;`

查询所有学生记录，按年龄降序排序
 `SELECT * FROM stu`
 `ORDER BY age DESC;`

查询所有雇员，按月薪降序排序，如果月薪相同时，按编号升序排序
 `SELECT * FROM emp`
 `ORDER BY sal DESC ,empno ASC;`

------

## 6.聚合函数

聚合函数是用来做纵向运算的函数：

- COUNT()：统计指定列不为 NULL 的记录行数；
- MAX()：计算指定列的最大值，如果指定列是字符串类型，那么使用字符串排序运算；
- MIN()：计算指定列的最小值，如果指定列是字符串类型，那么使用字符串排序运算；
- SUM()：计算指定列的数值和，如果指定列类型不是数值类型，那么计算结果为 0；
- AVG()：计算指定列的平均值，如果指定列类型不是数值类型，那么计算结果为 0；

COUNT：当需要纵向统计时可以使用 COUNT()。

查询 emp 表中记录数：
 `SELECT COUNT(*) AS cnt FROM emp;`

查询 emp 表中有佣金的人数：
 `SELECT COUNT(comm) cnt FROM emp;`
 注意，因为 count()函数中给出的是 comm 列，那么只统计 comm 列非 NULL 的行数。

查询 emp 表中月薪大于 2500 的人数：
 `SELECT COUNT(*) FROM emp WHERE sal > 2500;`

统计月薪与佣金之和大于 2500 元的人数：
 `SELECT COUNT(*) AS cnt FROM emp WHERE sal+IFNULL(comm,0) > 2500;`
 查询有佣金的人数，以及有领导的人数：
 `SELECT COUNT(comm), COUNT(mgr) FROM emp;`

SUM 和 AVG：当需要纵向求和时使用 sum()函数。

查询所有雇员月薪和：
 `SELECT SUM(sal) FROM emp;`

查询所有雇员月薪和，以及所有雇员佣金和：
 `SELECT SUM(sal), SUM(comm) FROM emp;`

查询所有雇员月薪+佣金和：
 `SELECT SUM(sal+IFNULL(comm,0)) FROM emp;`

统计所有员工平均工资：
 `SELECT SUM(sal), COUNT(sal) FROM emp;`
 或者
 `SELECT AVG(sal) FROM emp;`

MAX 和 MIN
 查询最高工资和最低工资：
 `SELECT MAX(sal), MIN(sal) FROM emp;`

## 7.分组查询

分组查询

当需要分组查询时需要使用 `GROUP BY`子句，例如查询每个部门的工资和，这说明要使用部分来分组。

查询每个部门的部门编号和每个部门的工资和：

```sql
SELECT deptno, SUM(sal)
FROM emp
GROUP BY deptno;

1234
```

查询每个部门的部门编号以及每个部门的人数：

```sql
SELECT deptno,COUNT(*)
FROM emp
GROUP BY deptno;
123
```

查询每个部门的部门编号以及每个部门工资大于 1500 的人数：

```sql
SELECT deptno ,COUNT(*)
FROM emp
WHERE sal>1500`
GROUP BY deptno;
1234
```

HAVING 子句

查询工资总和大于 9000 的部门编号以及工资和：

```sql
SELECT deptno, SUM(sal)
FROM emp
GROUP BY deptno
HAVING SUM(sal) > 9000;
1234
```

**注意，WHERE 是对分组前记录的条件，如果某行记录没有满足 WHERE 子句的条件，那
 么这行记录不会参加分组；而 HAVING 是对分组后数据的约束。**

## 8.LIMIT：用来限定查询结果的起始行，以及总行数。

查询 5 行记录，起始行从 0 开始
 `SELECT * FROM emp LIMIT 0, 5;`
 注意，起始行从 0 开始，即第一行开始！

查询 10 行记录，起始行从 3 开始
 `SELECT * FROM emp LIMIT 3, 10;`

分页查询
 如果一页记录为 10 条，希望查看第 3 页记录应该怎么查呢？
  第一页记录起始行为 0，一共查询 10 行；
  第二页记录起始行为 10，一共查询 10 行；
  第三页记录起始行为 20，一共查询 10 行；

## 9.多表连接查询： 表连接分为内连接和外连接。

他们之间最主要的区别：内连接仅选出两张表中互相匹配的记录，外连接会选出其他不匹配的记录。

### 内连接

```sql
select staff.name,deptname from staff,deptno where
staff.name=deptno.name;
```

### 外连接分为左连接和右连接

左连接：包含左边表中所有的记录，右边表中没有匹配的记录显示为 NULL。
 右连接：包含右边表中所有的记录，左边表中没有匹配的记录显示为 NULL。

外连接(左连接)：

```sql
select staff.name,deptname from staff left join deptno onstaff.name=deptno.name;
```

外连接（右连接）：

```sql
select deptname,deptno.name from staff right join deptno ondeptno.name=staff.name;
```

为表起别名：

- 提高语句的简洁度
- 区分多个重名字段
- **注意**：如果为表起了别名，则查询的字段就**不能使用原来的别名去限定**

## 内连接

查询A、B **交集部分数据**







# **1.CRUD**

CRUD就是增删改查的几个sql语句的首字母即create(创建)、查询(retrieve)、更新(update)、删除(delete)。

------

# **2.增加数据**

------

## **2.1创建数据**

创建一个数据库，语法为：**create database 数据库名;** 如创建一个名为test的数据库：

```cs
mysql> create database test;



Query OK, 1 row affected (0.00 sec)
```

当最后一行出现了Query Ok字段时，代表着这个数据库的创建成功。 

------

创建一个表，语法为：**create table 表名;** 如创建一个名为student的表：

```cs
mysql> use test;



Database changed



mysql> create table student(



    -> id int,



    -> name varchar(20),



    -> price decimal



    -> );



Query OK, 0 rows affected (0.02 sec)
```

我们在创建表的时，得先使用一个数据库。创建表成功后，最后一行语句会提示Query Ok..语句。

------

## **2.2插入数据**

------

### **2.2.1单行插入**

当我们创建表后，表内是没有信息的因此我们得插入一些数据来存储。我们使用 **insert into 表名 values(字段1,字段2,....);** 来插入一些数据，注意插入的数据应当与表的结构相同。我们来往student表中插入一行信息：

```cs
mysql> insert into student values(1,'张三',20);



ERROR 1366 (HY000): Incorrect string value: '\xD5\xC5\xC8\xFD' for column 'name' at row 1
```

我们可以看到，出现了ERROR(错误)。代表着张三这个字符串没有引入utf-8格式，因此我们在创建数据库时，得先声明utf8格式才能使数据的增添不发生错误，如下所示：

```cs
mysql> create database test charset utf8;



Query OK, 1 row affected (0.00 sec)
```

这样我们在创建数据库的时候同时申明了字符集为utf-8类型，这样我们在创建表并新添数据的时候就不会出现错误。声明字符集语法：**charset 字符集类型**。

```cs
mysql> use test;



Database changed



mysql> create table student(



    -> id int,



    -> name varchar(20),



    -> price decimal



    -> );



Query OK, 0 rows affected (0.02 sec)







mysql> insert into student values(1,'张三',20);



Query OK, 1 row affected (0.00 sec)
```

我们可以看到最后插入一行数据，提示Query OK了，这是单行插入操作，下面我们来看多行插入。

------

### **2.2.2多行插入**

多行插入语法为：**insert into 表名(类型1,类型2,类型3,...) values (字段1,字段2,字段3,...),(字段1,字段2,字段3,...);**

```cs
mysql> insert into student(id,name,price) values



    -> (2,'李四',24),



    -> (3,'王五',30);



Query OK, 2 rows affected (0.00 sec)



Records: 2  Duplicates: 0  Warnings: 0
```

以上代码为student又增添了两行数据，因此现在的student表中有三行数据。我们可以使用**select \* from student;** 全列查询查看student表结构。

```cs
mysql> select * from student;



+------+------+-------+



| id   | name | price |



+------+------+-------+



|    1 | 张三 |    20 |



|    2 | 李四 |    24 |



|    3 | 王五 |    30 |



+------+------+-------+



3 rows in set (0.00 sec)
```

当然，以上的多行插入我把id、name、price这三个字段都增添了。你也可以任意增添这三个字段中的任意数量，如只增添id、name这两个字段等等。 

------

# **3.查找数据**

## **3.1全列查询**

全列查询，即查询整个表里面的数据。语法格式为：**select \* from 表名;** 其中*****是一个通配符代表着所有的数据。如查询上文中student表中的所有数据：

```cs
mysql> use test;



Database changed



mysql> select * from student;



+------+------+-------+



| id   | name | price |



+------+------+-------+



|    1 | 张三 |    20 |



|    2 | 李四 |    24 |



|    3 | 王五 |    30 |



+------+------+-------+



3 rows in set (0.00 sec)
```

我们可以看到所有的数据都显示出来了  ，这就是全列查询。但注意，在我们实际开发过程中*号不得随意使用。当我们使用*号查询一个庞大的数据表或者其他类型的数据时，所有的内存都被占用，此时数据库就不会正常的更新或增加数据这样是非常危险的！因此，我们在自己电脑上尝试即可，因为我们的数据库是较小的大概率不会造成数据丢失这种风险。

------

## **3.2指定列查询**

在上面我们知道了*号是非常的危险，那么指定列查询就比较安全了，我们可以直接查询某一列的数据，这样内存的占用量就很低，指定列查询语法为：**select 字段1,字段2 from 表名;** 如我要查找student表中的id和name这两列数据：

```cs
mysql> select id,name from student;



+------+------+



| id   | name |



+------+------+



|    1 | 张三 |



|    2 | 李四 |



|    3 | 王五 |



+------+------+



3 rows in set (0.00 sec)
```

我们可以看到， 指定列查询非常的“人性化”，我们想要查询那一列就查询那一列数据，这样对内存的占用量也会很低，推荐这种查询方式。

------

## **3.3查询字段为表达式**

首先，我们创建一个成绩表，并且插入两行数据：

```cs
mysql> create table grades(



    -> chinese int,



    -> math int,



    -> english int);



Query OK, 0 rows affected (0.03 sec)



mysql> insert into grades(chinese,math,english) values



    -> (78,98,59),



    -> (76,99,35);



Query OK, 2 rows affected (0.00 sec)



Records: 2  Duplicates: 0  Warnings: 0
```

以上就很好的创建了一个成绩表，并且这个表有两行数据。那么创建表和插入表信息在上文中已经讲解到了，不熟练的伙伴可以再去看看。

------

### **3.3.1表达式不包含字段**

表达式不包含字段的情况意为这个表达式中的任何信息不为表中的任何字段，如下标中查询一个名为10的字段：

```cs
mysql> select chinese,math,english,10 from grades;



+---------+------+---------+----+



| chinese | math | english | 10 |



+---------+------+---------+----+



|      78 |   98 |      59 | 10 |



|      76 |   99 |      35 | 10 |



+---------+------+---------+----+



2 rows in set (0.00 sec)
```

我们可以看到，这个表达式列数都为10。这样的查询就是表达式不包含字段的一个查询，注意此处的字段是表中的每一列的列名。

------

### **3.3.2表达式包含一个字段**

表达式中包含一个字段的情况，通常我们想使表中的某一列数据发生改变时会使用该操作。如我想使grades表中每个人的英语成绩增加10分：

```cs
mysql> select chinese,math,english+10 from grades;



+---------+------+------------+



| chinese | math | english+10 |



+---------+------+------------+



|      78 |   98 |         69 |



|      76 |   99 |         45 |



+---------+------+------------+



2 rows in set (0.00 sec)
```

------

### **3.3.3表达式包含多个字段** 

表达式包含多个字段，一般我们在求一个表中的所有数据的总和时会使用该查询方式。如我要求grades表中所有数据的总和：

```cs
mysql> select chinese,math,english,chinese+math+english from grades;



+---------+------+---------+----------------------+



| chinese | math | english | chinese+math+english |



+---------+------+---------+----------------------+



|      78 |   98 |      59 |                  235 |



|      76 |   99 |      35 |                  210 |



+---------+------+---------+----------------------+



2 rows in set (0.00 sec)
```

我们可以看到，这样的查询的非常方便的唯一的缺点就是，列名太长了。因此我们又有一个sql语句可以将这个冗长的列名给起一个别名，来简化一下。具体讲解请看下方：

------

## **3.4起别名**

起别名我们所用的语法为 **表达式或列名 as 别名;**如我把上方冗长的chinese+math+english起别名为sum:

```cs
mysql> select chinese,math,english,chinese+math+english as sum from grades;



+---------+------+---------+------+



| chinese | math | english | sum  |



+---------+------+---------+------+



|      78 |   98 |      59 |  235 |



|      76 |   99 |      35 |  210 |



+---------+------+---------+------+



2 rows in set (0.00 sec)
```

当然也可以给单独的一列起别名：

```cs
mysql> select chinese as '中文' from grades;



+------+



| 中文 |



+------+



|   78 |



|   76 |



+------+



2 rows in set (0.00 sec)
```

这样，我们在查询数据的时候看一些字段就不会太别扭，这就是起别名操作。 注意，as可以省略但为了代码的可读性建议加上！

------

## **3.5distinct(去重)**

创建一个students表:

```cs
mysql> create table students(



    -> id int,



    -> name varchar(20),



    -> chinese int,



    -> math int,



    -> english int);



Query OK, 0 rows affected (0.02 sec)
```

插入四行数据：

```cs
mysql>  insert into students(id,name,chinese,math,english) values



    -> (1,'孙悟空',69,89,47),



    -> (2,'沙悟净',77,99,60),



    -> (3,'猪八戒',80,88,50),



    -> (4,'白龙马',69,77,88);



Query OK, 4 rows affected (0.01 sec)



Records: 4  Duplicates: 0  Warnings: 0
```

我们发现孙悟空和白龙马的语文成绩相同了，当我要显示语文成绩并且每个成绩各不相同时可以使用**distinct**来去重：

```cs
mysql> select distinct chinese from students;



+---------+



| chinese |



+---------+



|      69 |



|      77 |



|      80 |



+---------+



3 rows in set (0.01 sec)
```

我们可以看到，69只显示了一次，这就是distinct在表中的作用：去掉重复的数据。需要注意的是，distinct只是在我们显示的时候去掉了重复的数据，在实际的数据库中被去重的数据是未发生改变的！ 

------

## **3.6order by(排序)**

------

### **3.6.1某字段默认排序**

我们拿students这个表来进行操作，如我要按照英语成绩来进行默认排序:

```cs
mysql> select id,name,chinese,math,english from students order by english;



+------+--------+---------+------+---------+



| id   | name   | chinese | math | english |



+------+--------+---------+------+---------+



|    1 | 孙悟空 |      69 |   89 |      47 |



|    3 | 猪八戒 |      80 |   88 |      50 |



|    2 | 沙悟净 |      77 |   97 |      60 |



|    4 | 白龙马 |      69 |   77 |      88 |



+------+--------+---------+------+---------+



4 rows in set (0.00 sec)
```

通过观察，我们发现默认排序是按照升序进行排序的。那么默认排序的语法为：**order by 字段名;**语当然你也可以加上**asc**这个字段来强调你进行的排序是升序的，增强代码的可读性。

------

### **3.6.2某字段降序排序**

例如按照english成绩降序进行排序：

```cs
mysql> select id,name,chinese,math,english from students order by english desc;



+------+--------+---------+------+---------+



| id   | name   | chinese | math | english |



+------+--------+---------+------+---------+



|    4 | 白龙马 |      69 |   77 |      88 |



|    2 | 沙悟净 |      77 |   97 |      60 |



|    3 | 猪八戒 |      80 |   88 |      50 |



|    1 | 孙悟空 |      69 |   89 |      47 |



+------+--------+---------+------+---------+



4 rows in set (0.00 sec)
```

观察发现，如果要进行降序排序的话，我们只需要在字段名后面加上**desc**关键字即可，因此降序排序语法为：**order by 字段名 desc;**

------

### **3.6.3使用表达式及别名排序**

使用**表达式**进行查询，查询语数外三门成绩的总和按照降序进行排序：

```cs

```

```cs
mysql> select id,name,chinese + math + english as sum from students order by chinese + math + english desc;



+------+--------+------+



| id   | name   | sum  |



+------+--------+------+



|    2 | 沙悟净 |  234 |



|    4 | 白龙马 |  234 |



|    3 | 猪八戒 |  218 |



|    1 | 孙悟空 |  205 |



+------+--------+------+



4 rows in set (0.00 sec)
```

 使用**别名**进行查询，查询语数外三门成绩的总和按照降序进行排序：

```cs
mysql>  select id,name,chinese + math + english as sum from students order by sum desc;



+------+--------+------+



| id   | name   | sum  |



+------+--------+------+



|    2 | 沙悟净 |  234 |



|    4 | 白龙马 |  234 |



|    3 | 猪八戒 |  218 |



|    1 | 孙悟空 |  205 |



+------+--------+------+



4 rows in set (0.00 sec)
```

我们发现上述两个查询的结果是一样的，因此大家如果以后有类型的操作可以使用其中任意一种方式进行查询。

------

### **3.6.4对多个字段进行排序**

例如，按照语文的降序，数学的升序进行查询：

```cs
mysql> select id,name,chinese,math,english from students order by chinese desc,math;



+------+--------+---------+------+---------+



| id   | name   | chinese | math | english |



+------+--------+---------+------+---------+



|    3 | 猪八戒 |      80 |   88 |      50 |



|    2 | 沙悟净 |      77 |   97 |      60 |



|    4 | 白龙马 |      69 |   77 |      88 |



|    1 | 孙悟空 |      69 |   89 |      47 |



+------+--------+---------+------+---------+



4 rows in set (0.00 sec)
```

这样的操作，适合混合排序，具体功能具体操作 。大家按照自己的需求选择自己的sql语句。

------

## **3.7where(条件查询)**

[条件查询](https://so.csdn.net/so/search?q=条件查询&spm=1001.2101.3001.7020)使用的语句是**where**，它的语法格式为：**select 字段1,字段2,... where 查询条件;**

### **3.7.1比较运算符**

| 运算符            | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| >,>=,<,<=         | 大于，大于等于，小于就，小于等于                             |
| =                 | 等于，NULL 不安全，例如NULL = NULL 的结果是NULL              |
| <=>               | 等于，NULL 安全，例如 NULL <=> NULL 的结果是 TRUE(1)         |
| !=,<>             | 不等于                                                       |
| BETWEEN .. ADN .. | 在..和..之间，前闭后闭                                       |
| IN()              | 在                                                           |
| IS NULL           | 是空                                                         |
| IS NOT NULL       | 不是空                                                       |
| LIKE              | 模糊查询，当LIKE后面为%号时代表0个或多个字段，当LIKE后面为_时根据_的个数来表示字段。 |

查找英语成绩不及格的学生：

```cs
mysql> select id,name,chinese,math,english from students where english<60;



+------+--------+---------+------+---------+



| id   | name   | chinese | math | english |



+------+--------+---------+------+---------+



|    1 | 孙悟空 |      69 |   89 |      47 |



|    3 | 猪八戒 |      80 |   88 |      50 |



+------+--------+---------+------+---------+



2 rows in set (0.00 sec)
```

查找英语成绩在60和90之间的学生： 

```cs
mysql> select id,name from students where english between 60 and 90;



+------+--------+



| id   | name   |



+------+--------+



|    2 | 沙悟净 |



|    4 | 白龙马 |



+------+--------+



2 rows in set (0.01 sec)
```

查找姓孙的同学：

```cs
mysql> select id,name from students where name like '孙%';



+------+--------+



| id   | name   |



+------+--------+



|    1 | 孙悟空 |



+------+--------+



1 row in set (0.00 sec)
```

查找姓孙且姓名长度为2的学生：

```cs
mysql> select id,name from students where name like'孙_';



Empty set (0.00 sec)
```

以上代码，最后显示Empty代表没有符合这个字段的学生。那么上述表格中有许多操作都是差不太多的，因此博主在这里就举三个例子，大家可以对照表格自行进行测试。 

### **3.7.2逻辑操作符**

| 运算符 | 说明                               |
| ------ | ---------------------------------- |
| AND    | 多个条件都必须为TRUE，结果才为TRUE |
| OR     | 任意一个条件为TRUE，结果为TRUE     |
| NOT    | 条件为TRUE，结果为FALSE            |

 查询语文成绩>=80且英语成绩>=80的学生：

```cs
mysql> select id,name from students where chinese>= 80 and math>=80;



+------+--------+



| id   | name   |



+------+--------+



|    3 | 猪八戒 |



+------+--------+



1 row in set (0.00 sec)
```

查询语文成绩>80或则英语成绩<60的学生： 

```cs
mysql> select id,name from students where chinese>80 or english<60;



+------+--------+



| id   | name   |



+------+--------+



|    1 | 孙悟空 |



|    3 | 猪八戒 |



+------+--------+



2 rows in set (0.00 sec)
```

查询英语成绩不及格的学生：

```cs
mysql> select id,name from students where not english>=60;



+------+--------+



| id   | name   |



+------+--------+



|    1 | 孙悟空 |



|    3 | 猪八戒 |



+------+--------+



2 rows in set (0.00 sec)
```

我们可以看到，逻辑操作符进行查询与我们的C、Java中的&&、|| 这种操作符表达的效果是一致的，只不过MySQL中使用的是英文。

## **3.8limit(分页)**

[分页查询](https://so.csdn.net/so/search?q=分页查询&spm=1001.2101.3001.7020)是按照规定查询相应的数据，这个规定是根据你的需求来决定的，也就是你想查询哪一页或者哪几行的数据。它的语法格式是在指定列查询基础上加上limit语句，有三种格式：

> **-- 起始下标为 0**
>
> -- 从 0 开始，筛选 n 条结果
>
> SELECT ... FROM table_name [WHERE ...] [ORDER BY ...] LIMIT n;
>
> **-- 从 s 开始，筛选 n 条结果**
>
> SELECT ... FROM table_name [WHERE ...] [ORDER BY ...] LIMIT s, n;
>
> **-- 从 s 开始，筛选 n 条结果，比第二种用法更明确，建议使用**
>
> SELECT ... FROM table_name [WHERE ...] [ORDER BY ...] LIMIT n OFFSET s;

查询students表的前三条记录中的id和name信息，我之间在最后面加上limit 3即可：

```cs
mysql> select id,name from students limit 3;



+------+--------+



| id   | name   |



+------+--------+



|    1 | 孙悟空 |



|    2 | 沙悟净 |



|    3 | 猪八戒 |



+------+--------+



3 rows in set (0.00 sec)
```

也可以指定从第几行开始查询，如我要从students表的第3行查询，查询两行记录：

```cs
mysql> select id,name from students limit 2,2;



+------+--------+



| id   | name   |



+------+--------+



|    3 | 猪八戒 |



|    4 | 白龙马 |



+------+--------+



2 rows in set (0.00 sec)
```

我们看到达到了我所想要的效果，因此指定行数的分页查询语法为：**limit n,s;其中s为起始位置，n为行数**。 但这种方式不够严谨，正确的应该是 **limit n offset s;其中s也为起始位置，n为行数**。注意，行数是按照0为第一条数据往后自增的跟数组的下标是一致的。

------

# **4.修改数据**

修改数据，使用的sql语句为**update**。它的语法为:**update 表名 set 修改值 where 条件;**如将students表中的猪八戒英语成绩置为0：

```cs
mysql> update students set english = 0 where name = '猪八戒';



Query OK, 1 row affected (0.01 sec)



Rows matched: 1  Changed: 1  Warnings: 0
```

我们再来通过全列查询查看students表的所有信息：

```cs
mysql> update students set english = english+100 where name = '猪八戒';



Query OK, 1 row affected (0.01 sec)



Rows matched: 1  Changed: 1  Warnings: 0
```

我们可以看到通过表达式进行修改也是可以的，但唯一要注意的是。如果我们要增加或者减少一个数据的话我们应该写成**数据 = 数据+值，不能写成数据+ = 值**同上述代码中的chinese = chinese + 100；

------

# **5.删除数据**

删除数据使用的sql语句为delete，它的语法格式为：**delete from 表名 where 删除目标;**如将students表中的白龙马信息给删除掉：

```cs
mysql> delete from students where name = '白龙马';



Query OK, 1 row affected (0.00 sec)
```

# 字段类型

**字段类型**：MySQL中用来规定实际存储的数据格式

- 字段类型在定义表结构时设定
- 设定好字段类型后，插入数据时必须与字段类型对应，否则数据错误
- 字段类型的作用就是强制规范录入的数据格式   
  - 规范数据的**格式**
  - 保证数据的**有效性**
- MySQL有四大数据类型   
  - **整数**类型：只能存储整数
  - **小数**类型：可以存储有效数值
  - **字符串**类型：存储字符串数据
  - **时间日期**类型：存储时间日期格式数据

## 整数类型

**整数类型**：有效的整数数据

- MySQL中为了

  数据空间

  的有效使用，设定了五种整数类型   

  - 迷你整型：tinyint，使用**1个字节**存储整数，最多存储256个整数（-128~127）
  - 短整型：smallint，使用**2个字节**存储整数
  - 中整型：mediumint，使用**3个字节**存储整数
  - 标准整型：int，使用**4个字节**存储整数
  - 大整型：bigint，使用**8个字节**存储

- 数值型存储在MySQL中分为有符号（有负数）和无符号（纯正数）需要unsigned 修饰整型

示例：设计一个表记录个人信息：年龄、头发数量

```sql
# 年龄：没有负数，正常年龄也不超过200岁，迷你整型无符号即可
# 头发数量：没有负数，大概在几百万根，所以标准整型无符号即可
create table t_7(
	age tinyint unsigned, # unsigned修饰整数，表示无符号（从0开始）
    haircount int unsigned
)charset utf8;
```

**显示宽度**：int(L)，整数在数据库中显示的符号（数字+符号）个数

- 显示宽度一般是类型能表示的**最大值**对应的数字个数（通过desc查看表字段显示）
- 显示宽度包含符号（如果允许为负数，`-`负号会增加一个宽度）
- 显示宽度可以主动控制：创建字段时加括号确定
- 显示宽度不会影响类型能表示的最大数值
- 可以通过**zerofill**让不够宽度的数值补充到对应宽度：在字段类型后使用zerofill

## 小数类型(2种)

**1、浮点型**：float / double，存储不是特别精确的数值数据

- 浮点数又称之为精度数据，分为两种   

  - 单精度：**float**，使用**4个字节**存储，精度范围为6-7位有效数字
  - 双精度：**double**，使用**8个字节**存储，精度范围为14-15位有效数字

- 浮点数超过精度范围会自动进行**四舍五入**

- 精度可以指定

  整数和小数

  部分   

  - 默认不指定，整数部分不超过最大值，小数部分保留2位
  - 可以指定：float/double(总长度,小数部分长度)

- 可以使用科学计数法插入数据：AEB，A * 10 ^ B

- 因为浮点数会自动四舍五入，所以不要使用浮点数来**存储对精度要求较高的数值**

示例：记录商品的价格

```sql
# 商品名字字符串
# 商品价格一般都允许带小数
create table t_11(
	goods_name varchar(20),
    goods_price float
)charset utf8;
insert into t_11 values('Nokia3310',199.99);
insert into t_11 values('Nokia6100',1999.9999);
```

**2、定点型**：decimal，能够保证精度的小数

- 定点数的存储模式**不是固定长度**，所以数据越大占用的存储空间越长

- 每9个数字使用**4个字节**存储

- 定点型可以

  指定

  整数部分长度和小数部分长度   

  - 默认不指定，10位有效整数，0位小数
  - 可以指定：decimal(有效数位,小数部分数位)
  - 有效数位不超过65个

- 数据规范   

  - 整数部分超出报错
  - 小数部分超出四舍五入

示例：记录个人资产情况：资产和负债

```sql
# 资产和负债应该都是精确的，小数部分可以到分
create table t_12(
    money decimal(14,2),
    bet decimal(10,2)
)charset utf8;

insert into t_12 values(1111111111.12,1111111.999);
insert into t_12 values(1111111111.12,99999999.999); # 错误：进位导致正数部分超过指定范围
```

## 字符串类型(5种)

**1、定长型**：char(L)，指定**固定长度的存储空间**存储字符串

- 定长是指定存储长度

- 定长的长度是

  字符

  而不是字节   

  - L的最大值是255
  - 实际存储空间：**L字符数 \* 字符集对应字节数**

- 定长里存储的数据不能超过指定长度，但是可以小于指定长度

- 字符串数据使用单引号或者双引号包裹

- 定长的**访问效率较高**，但是**空间利用率较低**

示例：记录个人信息：身份证信息和手机号码

```sql
# 身份证为固定长度18位（数字）
# 手机号码是11位固定长度（数字）
create table t_13(
	id_number char(18),
    phone_number char(11)
)charset utf8;
insert into t_13 values('440111999912120304','13512345678');
```

**2、变长型**：varchar(L)，根据实际存储的数据变化存储空间

- 变长型的存储空间是由**实际存储数据**决定的

- 变长型的L也是指

  字符

  而不是字节   

  - L指定的是最大存储的数据长度

  - L最大值理论是65535

  - 变长需要额外产生

    1-2个字节

    ，用来记录实际数据的长度     

    - 数据长度小于256个，多1个字节
    - 数据长度大于256个，多2个字节

  - 实际存储空间：**实际字符数 \* 字符集对应字节数 + 记录长度**

- 变长数据不能超过定义的最大长度

- 变长字符串在读取时需要进行长度计算，所以效率没有定长字符串高

- 变长字符串能够更好的**利用存储空间**

示例：记录个人信息：用户名、密码、姓名、身份证

```sql
# 用户名不确定长度，最长不超过50个字符
# 密码不确定长度，最长超过15个字符
# 姓名不确定长度，最长不超过10个字符
# 身份证固定长度，18个字符
create table t_14(
	username varchar(50),
    password varchar(15),
    name varchar(10),
    id_number char(18)
)charset utf8;

insert into t_14 values('username','password','name','444111999912121111');
```

**3、文本字符串**：text/blob，专门用来存储较长的文本

- 文本字符串通常在**超过255个字符**时使用

- 文本字符串包含两大类   

  - text：

    普通字符

    - tinytext：迷你文本，不超过`2 ^ 8 -1`个字符
    - text：普通文本，不超过 `2 ^ 16 - 1`个字符
    - mediumtext：中型文本，不超过 `2 ^ 24 - 1` 个字符
    - longtext：长文本，不超过 `2 ^ 32 - 1` 个字符（4G）

  - blob：

    二进制字符

    （与text类似）     

    - tinyblob
    - blob
    - mediumblob
    - longblob

- 文本字符串会**自动**根据文本长度选择适合的具体类型

- 一般在文本超过255个字符时，都会使用text（blob现在极少使用）

示例：记录新闻信息：标题、作者和内容

```sql
# 标题一般不会超过50个字符，varchar
# 作者一般不会超过10个字符：varchar
# 内容通常都很长，使用text
create table t_15(
	author varchar(10),
    title varchar(50),
    content text
)charset utf8;

insert into t_15 values('佚名','给联合国的一封信','给联合国的一封信...');
```

**4、枚举型**：enum, 一种**映射存储**方式，以较小的空间存储较多的数据

- 枚举是在定义时确定可能出现的可能，而后数据只能出现定义时其中的**一种**的数据类型
- 枚举类似一种**单选框**
- 枚举使用1-2个字节存储，最多可以设计65535个选项
- 枚举实际存储是**使用数值**，映射对应的**元素数据**，从1开始
- 枚举语法：`enum(元素1,元素2,...元素N)`
- 使用枚举的作用：   
  - 规范数据模型
  - 优化存储空间

示例：记录人群类型：小朋友、少年、青年、中年、老年，每个人实际只属于一种类别

```sql
# 要保证未来数据只能出现在某种可能中，所以要先列出来，可以使用enum
create table t_16(
	type enum('小朋友','少年','青年','中年','老年')
)charset utf8;

insert into t_16 values('少年');
insert into t_16 values('仙人');	# 不存在的数据不能插入
```

| 枚举数据 | 映射值         |
| -------- | -------------- |
| 数据1    | 1              |
| 数据2    | 2              |
| …        | …              |
| 数据N    | N（小于65535） |

**5、集合型**：set，一种**映射存储**方式，以较小的空间存储较多的数据

- 集合是在定义时确定可能出现的元素进行穷举，而后数据只能出现定义时其中的元素（可以是**多个**）

- 集合类似一种**多选框**

- 集合使用1-8个字节存储数据，最多可以设计64个元素

- 集合实际存储是

  使用数值

  （二进制位），映射对应的

  元素数据

  ，每个元素对应一个比特位   

  - 数据存在：对应位为 1
  - 数据不存在：对应位为 0

- 集合语法：`set(元素1,元素2,...元素N)`

- 使用集合的作用：   

  - 规范数据模型
  - 优化存储空间

示例：记录个人的球类爱好，有篮球、足球、羽毛球、网球、乒乓球、排球、台球、冰球

```sql
# 爱好可以是多种，并非固定的，但是只能从规定的类型中选择
create table t_17(
	hobby set('足球','篮球','羽毛球','网球','乒乓球','排球','台球','冰球')
)charset utf8;

insert into t_17 values('足球');
insert into t_17 values('冰球,台球,篮球');
```

**集合定义原理：**

| 集合数据 | 映射位   |
| -------- | -------- |
| 数据1    | 00000001 |
| 数据2    | 00000010 |
| …        | …        |
| 数据8    | 10000000 |

## 时间日期类型(5种)

**1、年**：year，MySQL中用来存储年份的类型

- MySQL中使用**1个字节**存储年份

- year能够表示的范围是

  1901-2155

  年（256年）   

  - year的特殊值是：0000

- year允许用户使用两种方式设计（效果一样）   

  - year
  - year(4)

- 因为year字段表示的范围有限，所以通常会使用字符串来存储（牺牲空间换安全）

示例：记录个人的出生年份

```sql
create table t_18(
	y1 year,
    y2 year(4)
)charset utf8;
insert into t_18 values(1901,2155);
```

**2、时间戳**：timestamp，基于格林威治时间的时间记录

- MySQL中时间戳表现形式不是秒数，而是

  年月日时分秒

  格式   

  - **YYYY-MM-DD HH:II::SS**
  - **YYYYMMDDHHIISS**

- timestamp使用

  4个字节

  存储   

  - 表示范围是 1971年1月1日0时0分0秒-2155年12月31日23是59分59秒
  - timestamp可以使用 0000-00-00 00:00:00

- 所对应的记录不论哪个字段被更新，该字段都会更新到当前时间

- 但在MySQL8中需要主动使用**on update current_timestamp**才会自动更新

示例：记录商品库存的最后更新时间

```sql
create table t_19(
	goods_name varchar(10),
    goods_inventory int unsigned,
    change_time timestamp
)charset utf8;

insert into t_19 values('Nokia3110',100,'1971-01-01 00:00:00');
insert into t_19 values('Nokia7100',100,'19710101000000');
```

**注意**：在MySQL8以后，取消了timestamp的默认自动更新，如果需要使用，需要额外使用属性： **on update current_timestamp**

```sql
alter table t_19 add c_time timestamp on update current_timestamp;

update t_19 set goods_inventory = 80;
```

**3、日期**：date，用来记录年月日信息

- 使用**3个字节**存储数据
- 存储日期的格式为：**YYYY-MM-DD**
- 存储的范围跨度很大，存储区间是1000 - 9999年：1001-01-01~9999-12-31

示例：记录个人生日

```sql
create table t_20(
	name varchar(10),
    birth date
)charset utf8;

insert into t_20 values('Jim','2000-12-12');
insert into t_20 values('Tom','10011212');
1234567
```

**4、日期时间**：datetime，用来综合存储日期和时间

- 使用**8个字节**存储数据
- 存储格式为：**YYYY-MM-DD HH:II:SS**
- 存储区间为：1000-01-01 00:00:00 到9999-12-31 23:59:59

示例：记录个人具体的出生时间

```sql
create table t_21(
	name varchar(10),
    birth datetime
)charset utf8;

insert into t_21 values('Jim','2000-12-12 12:12:12');
insert into t_21 values('Tom','10011212182323');
```

**5、时间**：time，用来记录时间或者时间段

- 使用**3个字节**存储数据
- 数据范围是 **-838:59:59 - 838:59:59**
- 数据插入的格式分为两种   
  - 时间格式：**[H]HH:II:SS**（[ ]表示可以没有）
  - 时间段格式：**D HH:II:SS**（D表示天）
  - time类型通常被用来做时间段计算：如多少天后的什么时间点（可以理解为过期检查）

示例：记录用户登录的具体时间

```sql
# 具体登录时间可以使用时间戳（包含年月日时分秒信息）
# 也可以时间datetime格式，或者date+time双字段格式（具体后面学习范式时会知道该怎么用）
create table t_22(
	login_time1 int unsigned,
    login_time2 datetime,
    login_date date,
    login_time3 time
)charset utf8;

insert into t_22 values(12345678,'2000-12-12 12:12:12','2000-12-12','12:12:12');
insert into t_22 values(1234567,'2000-12-12 12:12:12','2000-12-12','3 12:12:12');
```

# 属性

**属性**：建立在字段类型之后，对字段除类型之外的**其他约束**

- 属性是在定义表字段的时候针对每个字段进行属性设定，是MySQL用来增加**字段规范和约束**的
- 设定好的属性可以通过查看表字段desc进行查看
- 数据在进行增删改（写）操作时需要在满足**字段类型**和**属性**的要求
- 用好属性能够提升数据的有效性，方便未来进行数据操作和数据分析（数据真实性和有效性）

查看表属性：`desc 表名;`

```sql
desc t_1;
# Field：字段名字
# Type：数据类型
# Null：是否为空（属性）
# Key：索引类型（属性）
# Default：默认值（属性）
# Extra：额外属性
```

## NULL属性

**NULL**：数据是否允许为空

- Null/Not Null属性 是用来**限定数据是否为Null值**的
- 默认情况下数据是允许为**Null**的，不为空设计：Not Null
- 一般有效的数据都必须设定为Not Null来保证数据的有效性，数据为空一般不具备运算和分析价值

示例：用户信息表：用户名、密码、姓名、年龄、注册时间

```sql
create table t_23(
	username varchar(50) not null,
    password char(32) not null,
    name varchar(20),
    age tinyint unsigned,
    reg_time int unsigned not null
)charset utf8;
```

## Default属性

**默认值**：default，在设计表字段的时候给定默认数据，在后续字段操作（数据新增）的时候系统没有检测到字段有数据的时候自动使用的值

- 默认值在**字段设置**的时候使用（默认值需要满足数据类型规范）
- 默认值通常设计的是字段容易出现的数据   
  - 一般字段的默认值 **默认是Null**
- 默认值触发
  - 在系统进行数据插入时自动检测触发
  - 主动使用default关键字触发默认值

示例：用户开户：银行卡账号、身份证号码、姓名、账户余额

```sql
create table t_24(
	account varchar(19) not null,
    id_card char(18) not null,
    name varchar(20) not null,
    money decimal(16,2) default 0.00 not null
)charset utf8;
123456
```

## 主键

**主键**：primary key，用来保证整张表中对应的字段永远不会出现重复数据（**唯一性**）

- 主键在一张表中只能有**一个**

- 主键的另外一个特性是能够提升主键字段作为查询条件的效率（索引）

- 主键不能为空：**Not Null（默认）**

- 逻辑主键

  ：数据没有具体业务意义，纯粹是一种数值数据   

  - 逻辑主键通常是整数：**int**
  - 逻辑主键目的是**方便检索和数据安全**（不暴露数据真实信息）

- 复合主键

  ：多个字段共同组成不能重复的数据   

  - **primary key(字段1,字段2,…字段N)**
  - 联合主键使用不多，一般也不会超过2个字段

示例：银行账户信息：账户、姓名、余额

```sql
# 银行账户具有唯一性，不能重复，也不允许为空
create table t_25(
    account varchar(17) primary key,
    name varchar(20) not null,
    money decimal(16,2) not null default 0.00
)charset utf8;

# 复合主键
create table t_26(
	account varchar(17),
    name varchar(20),
    money decimal(16,2) not null default 0.00,
    primary key(account,name)
)charset utf8;

# 一般使用逻辑主键
create table t_27(
	id int unsigned primary key,
    account varchar(17) not null,
    name varchar(20) not null,
    money decimal(16,2) not null default 0.00
)charset utf8;
```

**主键管理**：在创建表并且已经有数据后的维护

- 删除主键
- 追加主键
- 修改主键（先删除后新增）

1、**删除主键**：主键只有一个，所以删除语法也比较特殊

```sql
alter table t_26 drop primary key;
1
```

2、**后期新增主键**：如果是针对业务主键需要保证字段数据没有Null数据且没有数据重复（一般主键都会在表创建时维护好）

```sql
alter table t_26 add primary key(account,name);
1
```

## 自增长属性

**自增长**：auto_increment，被修饰的字段在新增时，自动增长数据

- 自增长只能是**整数类型**，而且对应的字段必须是一个索引（通常逻辑主键）

- 一张表只能有**一个**自动增长

- 自增长一般是

  配合逻辑主键

  实现自动增长   

  - 整型字段
  - 存在索引（主键）

- 自增长数据可以理解为一种默认值，如果主动给值，那么自动增长不会触发

- 自增长由两个变量控制   

  - 初始值：`auto_increment_offset`，默认是1
  - 步长：`auto_increment_increment`，默认值也是1
  - 查看自增长控制：`show variables like 'auto_increment%';`

示例：记录学生信息：学号和姓名

```sql
# 学生信息：学号自动增长
create table t_28(
    id int primary key auto_increment,
	stu_no int(8) zerofill not null,
    stu_name varchar(20) not null
)charset utf8;
123456
```

**自增长管理**：在某些特殊使用下，需要自增长按照需求实现

- 修改表中自增长的值：让下次自增长按照指定值开始
- 修改自增长控制：调整自增长的变化

1、**修改表中自增长的值**：跳过一些值，直接从下次开始按照新的目标值出现

```sql
alter table t_28 auto_increment = 50;
1
```

**注意**：奇数会保留原值，偶数会自动加1（可能出现的情况）

2、**修改自增长控制**：步长和起始值（修改针对的是整个数据库，而非单张表）

```sql
set auto_increment_increment = 2;	# 当前用户当前连接有效（局部）
set @auto_increment_increment = 2;	# 所有用户一直有效（全局）
12
```

## 唯一键

**唯一键**：unique key，用来维护数据的**唯一性**

- 一个表中可以有**多个**唯一键

- 唯一键与主键的区别在于 **唯一键允许数据为Null**（而且Null的数量不限）

- 唯一键与主键一样，可以提升字段数据当做**条件查询**的效率（索引）

- 复合唯一键

  ：多个字段共同组成   

  - unique key(字段1,字段2,…字段N)
  - 一般不会出现，最多2个字段组成

示例：学生成绩表：一个学生只能有一个学科成绩，但是可以有多个学科

```sql
# 学号和学科编号共同组成唯一
create table t_30(
	id int primary key auto_increment,
    stu_name varchar(20) not null,
    course varchar(20) not null,
    score decimal(5,2),
    unique key(stu_name,course)
)charset utf8;

insert into t_30 values(null,'Jim','Math',50);
insert into t_30 values(null,'Jim','English',80);
1234567891011
```

**唯一键管理**：在表创建后对唯一键的管理

- 删除唯一键相对麻烦，一张表中不止一个唯一键
- 新增唯一键要保证字段里的数据具有唯一性
- 删除唯一键：`alter table 表名 drop index 唯一键名字；`
- 新增唯一键： `alter table 表名 add unique key(字段列表)；`

1、**删除表中已有的唯一键**

```sql
alter table t_30 drop index stu_name;
1
```

2、**追加唯一键**

```sql
alter table t_30 add unique key stu_course (stu_name,course);
1
```

## comment属性

**描述**：comment，是用文字描述字段的作用的

- comment代表的内容是对

  字段的描述

  - 方便以后自己了解字段的作用
  - 方便团队了解字段的作用

- 描述如果涉及到字符集（中文）一定要在创建表之前 **设置好客户端字符集**（否则会出现描述乱码）

示例：学生成绩表

```sql
# 学生成绩表中通常是存储学生学号
# 学科通常也是学科代码
create table t_31(
	id int primary key auto_increment,
    stu_no varchar(10) not null comment '学号',
    course_no varchar(10) not null comment '课程号',
    score decimal(5,2) comment '考试成绩',
    unique key stu_course (stu_no,course_no) comment '学号和课程号组成唯一键'
)charset utf8;
123456789
```

# 数据库记录长度

**数据库记录长度**：MySQL中规定一条记录所占用的**存储长度**最长不超过65535个**字节**

- 记录长度为表中所有字段预计占用的长度之和
- 所有字段只有允许Null存在，系统就会预留一个字节存储Null（多个Null也只要一个就好）
- 因为MySQL记录长度的存在，varchar永远达不到理论长度   
  - GBK存储：65535（字符） * 2 + 2 = 131072（字节）
  - UTF8存储：65535（字符） * 3 + 2 = 196607（字节）
- 一般数据长度超过255个字符都会使用 **text/blob** 进行存储（数据存储不占用记录长度）

1、GBK表能存储的最大varchar字符串长度

```sql
create table t_32(
	content varchar(65535)
)charset gbk;	# 错误

create table t_32(
	content varchar(32767)
)charset gbk;	# 错误

create table t_32(
	content varchar(32766)
)charset gbk;	
1234567891011
```

2、UTF8表能存储的最大varchar字符串长度

```sql
create table t_33(
	content varchar(65535)
)charset utf8;	# 错误

create table t_33(
	content varchar(21844)
)charset utf8;

```

3、Null也要占用一个字节

```sql
create table t_34(
    id tinyint,
	content varchar(21844)
)charset utf8;	# 错误

create table t_34(
    id tinyint not null,
	content varchar(21844) not null
)charset utf8;

```

## 一、MySQL字符集简介

字符集规定了字符在数据库中的存储格式，比如占多少空间，支持哪些字符等等。不同的字符集有不同的编码规则，在有些情况下，甚至还有校对规则的存在。在运维和使用MySQL数据库中，选取合适的字符集非常重要，如果选择不恰当，轻则影响数据库性能，严重的可能导致数据存储乱码。
 常见的MySQl字符集主要有以下四种：

| 字符集  | 长度 | 说明                                    |
| ------- | ---- | --------------------------------------- |
| GBK     | 2    | 支持中文，但是不是国际通用字符集        |
| UTF-8   | 3    | 支持中英文混合场景，是国际通用字符集    |
| latin1  | 1    | MySQL默认字符集                         |
| utf8mb4 | 4    | 完全兼容UTF-8，用四个字节存储更多的字符 |

MySQL数据库在开发运维中，字符集选用规则如下：
 1、如果系统开发面向国外业务，需要处理不同国家、不同语言，则应该选择utf-8或者utf8mb4。
 2、如果只需要支持中文，没有国外业务，则为了性能考虑，可以采用GBK。

### 1.1字符集

字符集：可见字符在保存和传输的时候对应的二进制代码集合。

字符集在两个地方用到

```mysql
1.保存数据
2.数据传输
12
```

### 1.2在存续时使用字符集

```mysql
1、MySQL可以在服务器上、数据库、表、字段上指定字符编码
2、在服务器上指定字符编码是安装服务器的时候指定的
3、数据库、表、字段上是创建时候指定的
123
create table test(
-> name varchar(10) charset utf8
->)charset=gbk;
123
```

### 1.3 gbk,gb2312,utf8的区别

这三种都是常用的字符编码方式，gbk和gb2312(自带)是简体中文的编码，utf8是国际通用编码。

Python、MySQL、jQuery等等都是开源的产品，开源产品建议使用utf8编码

gbk和gb2312都是简体中文，但是内部编码方式是不一样的。

在python中

```mysql
在gbk或gb2312下，一个中文占用2个字节
在utf8下，一个中文占用3个字节
```

```python
注意:在数据库中如果字符编码是utf8的，一个汉字字符长度就是1，gbk一个汉字的字节长度是2。
```

```mysql
create table `emp`(
sex varchar(21844)
)engine=myisam charset=utf8;

65535/3-1


create table `emp2`(
sex varchar(32766)
)engine=myisam charset=gbk;

65535/2-1
```

```mysql
数据库如果是UTF8,那么你在此库中建立的'表'如果没有设定字符集,默认使用数据库的字符集
```

```mysql
mysql> show variables like 'character_%';
+--------------------------+-----------------------------------------------+
| Variable_name            | Value                                         |
+--------------------------+-----------------------------------------------+
| character_set_client     | utf8  #服务器接受客户端的字符码                 |
| character_set_connection | utf8                                          |
| character_set_database   | gbk                                           |
| character_set_filesystem | binary                                        |
| character_set_results    | utf8  #返回结果的字符编码                       |
| character_set_server     | utf8                                          |
| character_set_system     | utf8                                          |
| character_sets_dir       | C:\phpStudy\PHPTutorial\MySQL\share\charsets\ |
+--------------------------+-----------------------------------------------+
8 rows in set (0.00 sec)
```

```mysql
解决:
#windows默认的是GBK
set character_set_client=gbk;

字符编码不一样返回的就不一样
返回的是utf8   windows不认识会乱码

解决:
set character_set_results=gbk;

小技巧:
set names gbk; ->set names 可以一次设置修改3个字符编码;

mysql> show variables like 'character_%';
+--------------------------+-----------------------------------------------+
| Variable_name            | Value                                         |
+--------------------------+-----------------------------------------------+
| character_set_client     | gbk                                           |
| character_set_connection | gbk                                           |
| character_set_database   | gbk                                           |
| character_set_filesystem | binary                                        |
| character_set_results    | gbk                                           |
| character_set_server     | utf8                                          |
| character_set_system     | utf8                                          |
| character_sets_dir       | C:\phpStudy\PHPTutorial\MySQL\share\charsets\ |
+--------------------------+-----------------------------------------------+
8 rows in set (0.00 sec)
```

### 2校对集

在某种字符集下，字符和字符的关系成为校对集。比如(ASCII)a和B的大小关系，如果区分大小写a>B，如果不区分大小写a<B

不同的校对集的比较规则不一样。

在定义表的时候可以指定校对集

```mysql
#utf8_general_ci  使用_ci这种校对集不区分大小写
create table t1(
name char(1)
)charset=utf8 collate=utf8_general_ci;

create table t2(
name char(1)
)charset=utf8 collate=utf8_bin;

insert into t1 values ('a'),('B');
insert into t2 values ('a'),('B');
```

```mysql
mysql> select * from t1 order by name;
+------+
| name |
+------+
| a    |
| B    |
+------+
2 rows in set (0.00 sec)

#排序查询以后没有区分大小写说明a和b不区分大小写;
```

```mysql
mysql> select * from t2 order by name;
+------+
| name |
+------+
| B    |
| a    |
+------+
2 rows in set (0.00 sec)

#按照正序排列,对照ASCLL编码,B<a,B在a前面那么这种二进制校对集区分大小写
```

```mysql
牢记:
_bin：按二进制编码比较
_ci：不区分大小写比较
```

```mysql
#显示所有的字符集

mysql> show character set;
+----------+-----------------------------+---------------------+--------+
| Charset  | Description                 | Default collation   | Maxlen |
+----------+-----------------------------+---------------------+--------+
| big5     | Big5 Traditional Chinese    | big5_chinese_ci     |      2 |
| dec8     | DEC West European           | dec8_swedish_ci     |      1 |
| cp850    | DOS West European           | cp850_general_ci    |      1 |
| hp8      | HP West European            | hp8_english_ci      |      1 |
| koi8r    | KOI8-R Relcom Russian       | koi8r_general_ci    |      1 |
| latin1   | cp1252 West European        | latin1_swedish_ci   |      1 |
| latin2   | ISO 8859-2 Central European | latin2_general_ci   |      1 |
| swe7     | 7bit Swedish                | swe7_swedish_ci     |      1 |
| ascii    | US ASCII                    | ascii_general_ci    |      1 |
| ujis     | EUC-JP Japanese             | ujis_japanese_ci    |      3 |
| sjis     | Shift-JIS Japanese          | sjis_japanese_ci    |      2 |
| hebrew   | ISO 8859-8 Hebrew           | hebrew_general_ci   |      1 |
| tis620   | TIS620 Thai                 | tis620_thai_ci      |      1 |
| euckr    | EUC-KR Korean               | euckr_korean_ci     |      2 |
| koi8u    | KOI8-U Ukrainian            | koi8u_general_ci    |      1 |
| gb2312   | GB2312 Simplified Chinese   | gb2312_chinese_ci   |      2 |
| greek    | ISO 8859-7 Greek            | greek_general_ci    |      1 |
| cp1250   | Windows Central European    | cp1250_general_ci   |      1 |
| gbk      | GBK Simplified Chinese      | gbk_chinese_ci      |      2 |
| latin5   | ISO 8859-9 Turkish          | latin5_turkish_ci   |      1 |
| armscii8 | ARMSCII-8 Armenian          | armscii8_general_ci |      1 |
| utf8     | UTF-8 Unicode               | utf8_general_ci     |      3 |
| ucs2     | UCS-2 Unicode               | ucs2_general_ci     |      2 |
| cp866    | DOS Russian                 | cp866_general_ci    |      1 |
| keybcs2  | DOS Kamenicky Czech-Slovak  | keybcs2_general_ci  |      1 |
| macce    | Mac Central European        | macce_general_ci    |      1 |
| macroman | Mac West European           | macroman_general_ci |      1 |
| cp852    | DOS Central European        | cp852_general_ci    |      1 |
| latin7   | ISO 8859-13 Baltic          | latin7_general_ci   |      1 |
| utf8mb4  | UTF-8 Unicode               | utf8mb4_general_ci  |      4 |
| cp1251   | Windows Cyrillic            | cp1251_general_ci   |      1 |
| utf16    | UTF-16 Unicode              | utf16_general_ci    |      4 |
| cp1256   | Windows Arabic              | cp1256_general_ci   |      1 |
| cp1257   | Windows Baltic              | cp1257_general_ci   |      1 |
| utf32    | UTF-32 Unicode              | utf32_general_ci    |      4 |
| binary   | Binary pseudo charset       | binary              |      1 |
| geostd8  | GEOSTD8 Georgian            | geostd8_general_ci  |      1 |
| cp932    | SJIS for Windows Japanese   | cp932_japanese_ci   |      2 |
| eucjpms  | UJIS for Windows Japanese   | eucjpms_japanese_ci |      3 |
+----------+-----------------------------+---------------------+--------+
39 rows in set (0.00 sec)
```

```mysql
#显示所有校对集
mysql> show collation;
```

### 3. MySQL的数据类型——值类型

#### (1)整型

| 整型      | 占用字节 | 范围                                    |
| --------- | -------- | --------------------------------------- |
| tinyint   | 1        | -2 ^7 ~ 2^7-1 (-128~127)                |
| smallint  | 2        | -2 ^15 ~ 2^15-1 (-32768~32765)          |
| mediumint | 3        | -2 ^23 ~ 2^23-1 (-8388608~8388607)      |
| int       | 4        | -2 ^31~ 2^31-1 (-2147483648~2147483647) |
| bigint    | 8        | -2 ^63 ~ 2^63-1 (太大了)                |

#### (2)unsigned (无符号)

一个数是无符号数，那么这个数肯定是非负数

```
数据库mysql第一条记录一定是1(起码是),绝对不能是0
tinyint unsigned 2^8-1
```

无符号数的范围相当于是有符号数的两倍。

```mysql
mysql> create table test1(
    -> age tinyint unsigned
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into test1 values (128);
Query OK, 1 row affected (0.00 sec)
```

#### (3)显示宽度

整形支持显示宽度，显示宽度就是最小的显示位数，比如int(11)表示最少用11

位数字表示这个数，如果不够用0来做前导。默认情况下显示位数不起作用，必须集合zerofill才起作用

```mysql
create table stu(
id int(5),
age int(5) zerofill
);

#插入测试数据
insert into stu values (1,23),(2,123456);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from stu;
+------+--------+
| id   | age    |
+------+--------+
|    1 |  00023 |
|    2 | 123456 |    #超过显示宽度5就显示值本身
```

#### 4)浮点型

| 浮点型 | 占用字节 | 范围                 |
| ------ | -------- | -------------------- |
| float  | 4        | -3.4E+38 ~ 3.4E+38   |
| double | 8        | -1.8E+308 ~ 1.8E+308 |

```mysql
create table test2(
  num1 float,
  num2 double
  );
insert into test2 values(23.123,2.123);

#float理论上只保留小数点一位,根据实际版本
#double理论上只保留小数点两位, 根据实际版本

insert into test2 values(2.2E2,2.123);
#也支持科学计数法

insert into test2 values(999.999999999999999999999999999,2.123456);
#丢失精度
```

python中我们没有双精度这一类型,float代表浮点数.



#### (5)定点数

```mysql
decimal(M,D),M的最大值是65,D的最大值是30,默认是(10,0)

create table test3(
	num1 float(10,2),
  	num2 decimal(10,2)
	);

insert into test3 values(123.57,1234567.00);
mysql> select * from test3;
+-------------+-------------+
| num1        | num2        |
+-------------+-------------+
| 12345679.00 |      123.57 |
| 12345679.00 | 12346623.57 |
+-------------+-------------+
2 rows in set (0.00 sec)


#定点数可以保留多个小数点位,它在有些情况下也会失去精度.浮点数的执行效率要高于定点数.
#浮点数和定点数都支持 无符号.
```

### 4.MySql的数据类型–字符类型

| 数据类型   | 描述            |
| ---------- | --------------- |
| char       | 定长(255)       |
| varchar    | 可变长度(65535) |
| tinytext   | 2^8-1 (255)     |
| text       | 2^16-1 (65535)  |
| mediumtext | 2^24-1          |
| longtext   | 2^32-1          |

```mysql
char(10)和varchar(10)

	相同点:都是不能超过10个字符
	不同点:char你输入5个字符,它还是占用了10个字符
		varchar你输入5个字符,他会返还多于的空间
		char的最大长度是255
		varchar的理论长度是65535
		实际上达不到,我使用的是gbk(mysql中占用2个字符),那么65535/2.
```

```mysql
create table test(
  name varchar(32766)
  )charset=gbk;


#utf8在创建的时候报错了,最多支持21845个字符,因为utf8一个汉字要使用3个字符

create table test(
  name varchar(65535)
  )charset=gbk

#utf8在创建的时候报错了,最多支持32767个字符,因为gbk一个汉字要使用2个字符
```

### 5.MySql数据类型–枚举(enum)

列出一些选项的,单选.

```mysql
create table test(
name varchar(32),
sex enum('男','女','保密')
);

insert into test values('贾乃亮','男');
#插入正常
insert into test values('PGONE','人妖');
#插入报错
```

```mysql
枚举型在数据库内部是通过整型来管理的,第一个值1,第二个值是2,依次向后推

insert into test values('王宝强',1);
insert into test values('刘运斌',3);


枚举型的优点:
1.限制值
2.节省空间
3.运行效率高
思考:已知枚举型占用2个字节,请问最多可以设置多少个枚举值?

2个字节16位,2^16-1,最多可保存65535/2个值
```

### 6.MySql数据类型–集合(set)

列出数据类型,保存多选

```mysql
create table test2(
name varchar(32),
hobby set('吃','睡觉','看书','鉴黄')
);

insert into test2 values('刘运斌','吃,睡觉,鉴黄');
insert into test2 values('刘运斌-2','吃,睡觉,李小璐');
```

```mysql
集合和枚举一样,为每个元素分配一个固定的值,分配方式不一样.
它的管理也是使用整型
集合是这么分配的:
'吃','睡觉','看书','鉴黄'

2^0   2^1    2^2   2^3  如果后面还有依次向后推
保存的时候,把多个值(转换为整型了)加起来,这样值会边的很大(浪费资源)
一个集合他的元素通过一个位表示,有几个集合元素就需要几个位.

思考:已知集合占用8个字节,那么集合能保存多少个选项?
只能保存64个选项.
```

### 7.MySql数据类型–日期时间型

| 数据类型  | 描述               |
| --------- | ------------------ |
| date      | 日期,占用8个字节   |
| time      | 时间               |
| datetime  | 日期时间           |
| year      | 年份,占用一个字节  |
| timestamp | 时间戳,占用4个字节 |

#### 1)datetime

```mysql
#格式 年-月-日 时:分:秒
create table test4(
create_at datetime
);

insert into test4 values('2018-01-12 15:00:53');
insert into test4 values(now());#表示的是当前的时间
insert into test4 values('10000-12-31 23:59:59'); #错误
```

#### (2)date

仅表示时间的日期部分

#### (3)time

表示时间部分,也表示时间间隔,范围是-838:59:59 ~ 838:59:59

```mysql
create table test5(
create_at time
);

insert into test5 values('12:12:12');
insert into test5 values('212:12:12');
insert into test5 values('-800:12:12');
insert into test5 values('-839:59:59');  #错误的,超出范围

#time支持以天的方式表示时间间隔
insert into test5 values('10 12:59:59');
```

#### (4)timestamp

从1970年1月1日 00:00:00秒的格林威治时间开始计算,在python中是特殊类型,但在mysql中显示为datatime格式

```mysql
create table test6(
create_at timestamp
);

insert into test6 values(now());
insert into test6 values('2018-01-12 15:43:30');
insert into test6 values('2038-01-19 11:14:07');#这里就是一个节点

\
insert into test6 values('2038-01-19 11:14:08');#超过了4个字节
timestamp在格式上和datetime是一样的,它们的区别在于:
datetime 从1到9999,而timestamp从1970年~2038年.
timestamp占用4个字节,到2038年超过4个字节的长度了
```

#### (5)year

占用一个字节,只能是255个数,以1900年为基数,范围1900+1 ~ 1900+255.

```mysql
create table test7(
create_at year
);

insert into test7 values(1900);#错误的
insert into test7 values(1901);
insert into test7 values(2155);
insert into test7 values(2156);#错误的,不在范围内
```

### 8.布尔型(boolean)

mysql不支持布尔型,所以用1和0代替.

```mysql
create table test8(
num boolean
);

insert into test8 values(True);
insert into test8 values(1);
insert into test8 values(False);
insert into test8 values(0);
insert into test8 values('A');#错误

布尔型的使用是比较少的,可以用tinyint代替,或者用enum代替
```

### 9.列属性–是否为空(null|not null)

```mysql
create table test9(
id int auto_increment primary key not null comment'主键',
username varchar(64) not null,
pwd char(64) null
);

insert into test9 values(null,'admin','');
insert into test9 values(null,'','');
insert into test9 values(null,null,'');
insert into test9 values(null,'',null);

#空字符串不等于null
```

### 10.列属性–(default)

```mysql
create table test10(
id int auto_increment primary key not null comment'主键',
username varchar(64) not null,
pwd char(64) null default '123456'
);

insert into test10(username) values('admin2');#推荐的SQL语句


create table test11(
age int  default '123456'
);
insert into test11 values(null);
#输入null加插入null,不写是默认
```

### 11.自动增长列

```mysql
auto_increment
字段值默认从1开始,每次递增1,特点:不会有重复的值,主键常用.

友情提示:在mysql中自动增长的列必须作为主键.
自动增长的烈在插入的时候可以输入(null)

被删除的id不能被再次使用:
如果中间的摸个ID值比较大,那么后面插入的id根据最大值依次+1
```

### 12.列属性–主键

```mysql
primary key
主键:主键是唯一的
特点:不能为空,也不能重复
一个表只有一个主键

CREATE TABLE `test12` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`,`num`,`age`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#以上的主键有'3'个,其实一个主键,这个3个字段组成(一个联合主键),在开发中几乎不会被用上
#(教学使用)

create table demo1(
id int auto_increment primary key
);

create table demo2(
id int auto_increment ,
primary key(id)
);

create table demo3(
id int(11) 
);

alter table demo3 add primary key(id);

选择主键的原则:
1.最少性:必须选择单个键作为主键
2.稳定性:作为主键的这个字段最好不要被修改
```



## 约束的含义

一种限制，用于限制表中的数据，为了保证表中的数据的准确和可靠性。MySQL数据库通过约束(`constraints`)防止无效的数据进入到表中，以保护数据的实体完整性。

## 约束的分类

在 `MySQL` 中，主要有六种约束：

1、`NOT NULL`：非空约束，用于约束该字段的值不能为空。比如姓名、学号等。
 2、`DEFAULT`：默认值约束，用于约束该字段有默认值，约束当数据表中某个字段不输入值时，自动为其添加一个已经设置好的值。比如性别。
 3、`PRIMARY KEY`：主键约束，用于约束该字段的值具有唯一性，至多有一个，可以没有，并且非空。比如学号、员工编号等。
 4、`UNIQUE`：唯一约束，用于约束该字段的值具有唯一性，可以有多个，可以没有，可以为空。比如座位号。
 5、`CHECK`：检查约束，用来检查数据表中，字段值是否有效。比如年龄、性别。
 6、`FOREIGN KEY`：外键约束，外键约束经常和主键约束一起使用，用来确保数据的一致性，用于限制两个表的关系，用于保证该字段的值必须来自于主表的关联列的值。在从表添加外键约束，用于引用主表中某列的值。比如学生表的专业编号，员工表的部门编号，员工表的工种编号。

主要归类为列级约束和表级约束

1. `列级约束`：`NOT NULL` | `DEFAULT` | `PRIMARY KEY` | `UNIQUE` | `CHECK`
2. `表级约束`：`PRIMARY KEY` | `UNIQUE` | `CHECK` | `FOREIGN KEY`

## 实例

`列约束`：在字段名和类型后面追加约束类型即可

`表约束`：在各个列字段的最下面，CONSTRAINT 开头进行约束

```BASH
CREATE TABLE 表名(
　　　　字段名 字段类型 列级约束,
　　　　字段名 字段类型,
　　　　表级约束
　　)
```

### 创建表时添加约束

```BASH
mysql> CREATE TABLE info (
    -> id INT,
    -> name VARCHAR(20),
    -> age INT,
    -> gender CHAR,
    -> tid INT
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql> ALTER TABLE info MODIFY COLUMN id INT PRIMARY KEY;              # 添加列主键约束
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info MODIFY COLUMN name VARCHAR(20) NOT NULL;       # 添加列非空约束
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info MODIFY COLUMN age INT DEFAULT 18;              # 添加列默认约束
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info MODIFY COLUMN tid INT UNIQUE;                  # 添加列唯一约束
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc info;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int(11)     | NO   | PRI | NULL    |       |
| name   | varchar(20) | NO   |     | NULL    |       |
| age    | int(11)     | YES  |     | 18      |       |
| gender | char(1)     | YES  |     | NULL    |       |
| tid    | int(11)     | YES  | UNI | NULL    |       |
+--------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> alter table info drop primary key;                             # 删除列主键约束
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info ADD PRIMARY KEY(id);                          # 添加“表”主键约束        
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info ADD UNIQUE(tid);                              # 添加“表”唯一约束 
Query OK, 0 rows affected, 1 warning (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 1

mysql> ALTER TABLE info ADD CONSTRAINT ue UNIQUE(tid);                # 添加“表”唯一约束
Query OK, 0 rows affected, 1 warning (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 1

mysql> desc info;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int(11)     | NO   | PRI | NULL    |       |
| name   | varchar(20) | NO   |     | NULL    |       |
| age    | int(11)     | YES  |     | 18      |       |
| gender | char(1)     | YES  |     | NULL    |       |
| tid    | int(11)     | YES  | UNI | NULL    |       |
+--------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql> ALTER TABLE info ADD CONSTRAINT ck CHECK(gender IN ('W','M')); # 添加“表”检查约束 
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info ADD CONSTRAINT fy FOREIGN KEY(tid) REFERENCES teachers(id);    # 添加“表”外键约束
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

### 修改表时删除约束

```BASH
mysql> ALTER TABLE info MODIFY COLUMN name varchar(20) NULL;    # 删除列非空约束
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info MODIFY COLUMN age INT(11);              # 删除列默认约束
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info DROP PRIMARY KEY;                       # 删除“表”主键约束
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info DROP INDEX tid;                         # 删除“表”唯一约束
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> show create table info \G
*************************** 1. row ***************************
       Table: info
Create Table: CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  UNIQUE KEY `tid_2` (`tid`),
  UNIQUE KEY `ue` (`tid`),
  CONSTRAINT `fy` FOREIGN KEY (`tid`) REFERENCES `teachers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312
1 row in set (0.00 sec)

mysql> ALTER TABLE info DROP INDEX ue;                          # 删除“表”唯一约束
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> ALTER TABLE info DROP FOREIGN KEY fy;                    # 删除“表”外键约束
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> show create table info \G
*************************** 1. row ***************************
       Table: info
Create Table: CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  UNIQUE KEY `tid_2` (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312
1 row in set (0.00 sec)

mysql> desc info;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int(11)     | NO   |     | NULL    |       |
| name   | varchar(20) | YES  |     | NULL    |       |
| age    | int(11)     | YES  |     | NULL    |       |
| gender | char(1)     | YES  |     | NULL    |       |
| tid    | int(11)     | YES  | UNI | NULL    |       |
+--------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)
```

## 主键和唯一的区别

| 约束名称 | 保证唯一性 | 是否允许为空 | 一个表中可以有多少个 | 是否允许组合 |
| -------- | ---------- | ------------ | -------------------- | ------------ |
| 主键     | √          | ×            | 最多有1个，可以没有  | √（不推荐）  |
| 唯一     | √          | √            | 可以有多个           | √（不推荐）  |

### 一、什么是约束

约束英文：constraint

约束实际上就是表中数据的限制条件

### 二、约束作用

表在设计的时候加入约束的目的就是为了保证表中的记录完整和有效

比如name字段中要让其用户名不重复，这就需要添加约束。或者必须注册的时候需要添加邮箱等

### 三、约束种类

非空约束(not null)
唯一性约束(unique)
主键约束(primary key) PK
外键约束(foreign key) FK
检查约束(目前MySQL不支持、Oracle支持)
下面将逐一介绍以上约束

### 四、非空约束

用not null约束的字段不能为null值，必须给定具体的数据

创建表，给字段添加非空约束（创建用户表，用户名不能为空）

```sql
mysql> create table t_user(
-> id int(10),
-> name varchar(32) not null
-> );
Query OK, 0 rows affected (0.08 sec)
```

如果没有插入name字段数据，则会报错

```sql
mysql> insert into t_user (id) values(1);
ERROR 1364 (HY000): Field 'name' doesn't have a default value
```

五、唯一性约束
unique约束的字段，具有唯一性，不可重复，但可以为null

创建表，保证邮箱地址唯一(列级约束)

```sql
mysql> create table t_user(
-> id int(10),
-> name varchar(32) not null,
-> email varchar(128) unique
-> );
Query OK, 0 rows affected (0.03 sec)
```

1、表级约束



```
mysql> create table t_user(
-> id int(10),
-> name varchar(32) not null,
-> email varchar(128），
-> unique(email)
-> );
```



如果插入相同email会报错

```sql
mysql> insert into t_user(id,name,email) values(1,'xlj','932834897@qq.com');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t_user(id,name,email) values(2,'jay','932834897@qq.com');
ERROR 1062 (23000): Duplicate entry '932834897@qq.com' for key 'email'
```

2、使用表级约束，给多个字段联合约束
联合约束，表示两个或以上的字段同时与另一条记录相等，则报错

```sql
mysql> create table t_user(
-> id int(10),
-> name varchar(32) not null,
-> email varchar(128),
-> unique(name,email)
-> );
Query OK, 0 rows affected (0.01 sec)
```

插入第一条数据

```sql
mysql> insert into t_user(id,name,email) values(1,'xxx','qq.com');
Query OK, 1 row affected (0.05 sec)
```

插入第二条数据如果是与联合字段中的一条相同另一条相同，也是可以的

```
mysql> insert into t_user(id,name,email) values(2,'mmm','qq.com');
Query OK, 1 row affected (0.05 sec)
```

插入第三条数据，如果与联合字段都相同，则报错

```
mysql> insert into t_user(id,name,email) values(3,'mmm','qq.com');
ERROR 1062 (23000): Duplicate entry 'mmm-qq.com' for key 'name'
```

3、表级约束可以给约束起名字(方便以后通过这个名字来删除这个约束)

```
mysql> create table t_user(
-> id int(10),
-> name varchar(32) not null,
-> email varchar(128),
-> constraint t_user_email_unique unique(email)
-> );
Query OK, 0 rows affected (0.06 sec)
```

constraint是约束关键字，t_user_email_unique自己取的名字

例：用户名既不能为空，也不能重复

```
name varchar(32) not null unique
```

六、主键约束(primary key)PK
表设计时一定要有主键

1、主键涉及术语
主键约束
主键字段
主键值
2、以上三种术语关系
表中的某个字段添加主键约束后，该字段为主键字段，主键字段中出现的每一个数据都称为主键值

3、主键约束与“not null unique”区别
给某个字段添加主键约束之后，该字段不能重复也不能为空，效果和”not null unique”约束相同，但是本质不同。

主键约束除了可以做到”not null unique”之外，还会默认添加”索引——index”

4、一张表应该有主键字段，如果没有，表示该表无效
主键值：是当前行数据的唯一标识、是当前行数据的身份证号
即使表中两行记录相关数据相同，但由于主键值不同，所以也认为是两行不同的记录
5、按主键约束的字段数量分类
无论是单一主键还是复合主键，一张表主键约束只能有一个(约束只能有一个，但可以作用到好几个字段)

单一主键：给一个字段添加主键约束
复合主键：给多个字段联合添加一个主键约束(只能用表级定义)
单一主键(列级定义)



```
mysql> create table t_user(
-> id int(10) primary key,
-> name varchar(32)
-> );
Query OK, 0 rows affected (0.07 sec)
```



# 1 表的约束

约束，是对表中的数据进行限定，保证数据的正确性、有效性和完整性，约束分为以下几类：

- 主键约束：primary key
- 非空约束：not null
- 唯一约束：unique
- 外键约束：foreign key

## 1.1 非空约束：not null

1）在创建表时添加约束

```javascript
CREATE TABLE stu(
	id INT,
	NAME VARCHAR(20) NOT NULL -- name为非空
);
```

2）创建表后再添加非空约束：

```javascript
ALTER TABLE stu MODIFY NAME VARCHAR(20) NOT NULL; 
```

3）删除name的非空约束：

```javascript
ALTER TABLE stu MODIFY NAME VARCHAR(20)
```

## 1.2 唯一约束：unique，值不能重复

1）创建表时添加唯一约束：

```sql
CREATE TABLE stu(
	id INT,
	number VARCHAR(20) UNIQUE
);
```

注意：[MySQL](https://cloud.tencent.com/product/cdb?from=20065&from_column=20065)中唯一约束限定的列的值可以有多个null

2）删除唯一约束：

```sas
-- alter table stu modify number varchar(20); 不同于非空约束的删除方法
ALTER TABLE stu DROP INDEX number;
```

3）创建表后添加唯一约束：

```sql
ALTER TABLE stu MODIFY number VARCHAR(20) UNIQUE;
```

## 1.3 主键约束：primary key

**1）注意：**

- 若某一列添加了该约束，则代表了非空，且唯一；
- 一张表只能有一个字段为主键；
- 主键就是表中记录的唯一标识；

2）创建表时添加主键约束

```sql
CREATE TABLE stu(
	id INT PRIMARY KEY,
	number VARCHAR(20)
);
```

3）删除主键

```sas
-- 错误方式 ALTER TABLE stu MODIFY id int;
ALTER TABLE stu DROP PRIMARY KEY;
```

4）创建完表后添加主键

```sas
ALTER TABLE stu MODIFY id INT PRIMARY KEY;
```

5）自动增长：若某一列是数值类型的，使用关键字auto_increment 可以来完成值得自动增长。

- 在创建 表时添加主键约束，且完成主键自增长 

```sql
CREATE TABLE stu(
	id INT PRIMARY KEY AUTO_INCREMENT,
	number VARCHAR(20)
);
```

- 删除自动增长

```sql
ALTER TABLE stu MODIFY id INT;
```

- 创建后，添加自动增长

```sql
ALTER TABLE stu MODIFY id INT AUTO_INCREMENT;
```

## 1.4 外键约束：foreign key

【引例】我们创建一张职工表如下，但是发现存在明显的缺陷：

- 数据冗余；
- 后期还会出现增删改的问题；

外键，就是从表中与主表主键对应的那一列，如：员工表中的dep_id，其中，主表是一方，用来约束别人的表，从表可以是多方，被别人约束的表。

注意：外键可以为NULL，但是不能是不存在的外键值。

外键，就是从表中与主表主键对应的那一列，如：员工表中的dep_id，其中，主表是一方，用来约束别人的表，从表可以是多方，被别人约束的表。

注意：外键可以为NULL，但是不能是不存在的外键值。

1）创建表时添加外键

语法：     create table 表名(           ...           外键列           constraint 外键名称 foreign key (外键列名称) references 主表名称(主表主键名称)     );

```pgsql
-- 创建部门表(id,dep_name,dep_location) 
-- 一方，主表 
CREATE TABLE department(  
	id INT PRIMARY KEY AUTO_INCREMENT,
	dep_name VARCHAR(20),
	dep_location VARCHAR(20) 
); 
 
-- 创建员工表(id,name,age,dep_id) 
-- 多方，从表 
CREATE TABLE employee(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(20),
	age INT,
        dep_id INT, -- 外键对应主表的主键
        CONSTRAINT emp_dep_fk FOREIGN KEY (dep_id) REFERENCES department(id)
); -- 外键对应主表的主键  
 
-- 添加2个部门 
INSERT INTO department VALUES(NULL, '研发部','广州'); 
INSERT INTO department VALUES(NULL, '销售部','深圳'); 
 
-- 添加员工,dep_id表示员工所在的部门 
INSERT INTO employee (NAME, age, dep_id) VALUES ('张三', 20, 1); 
INSERT INTO employee (NAME, age, dep_id) VALUES ('李四', 21, 1); 
INSERT INTO employee (NAME, age, dep_id) VALUES ('王五', 20, 1); 
INSERT INTO employee (NAME, age, dep_id) VALUES ('老王', 20, 2); 
INSERT INTO employee (NAME, age, dep_id) VALUES ('大王', 22, 2); 
INSERT INTO employee (NAME, age, dep_id) VALUES ('小王', 18, 2); 
SELECT * FROM employee;
SELECT * FROM department;
```

因为有外键的约束，在员工表中添加一个不在部门表范围内的内容，则无法保存：



2）删除外键：ALTER TABLE 表名称 DROP FOREIGN KEY 外键名称;

```sql
-- 删除外键
ALTER TABLE employee DROP FOREIGN KEY emp_dep_fk;
```

3）在创建表后添加外键： ALTER TABLE 表名称 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);

```sql
-- 添加外键
ALTER TABLE employee ADD CONSTRAINT emp_dep_fk FOREIGN KEY (dep_id) REFERENCES department(id);
```

4）级联操作

若希望改动部门表的id，同时希望自动改动员工表中的id，这时就需要进行级联操作，需要在添加外键的时候设置级联：

- 添加级联操作：ALTER TABLE 表名称 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称) ON UPDATE CASCADE ON DELETE CASCADE ;
- 分类：级联更新 ON UPDATE CASCADE       级联删除 ON DELETE CASCADE 

## 什么是视图?

在数据库中由于很多数据是用表来存的，简单的理解视图就是将多个表的数据进行整合然后构成一个新表，这个新表就是视图。但是视图本质上是一种虚拟表，在物理上是不存在的，其内容与真实的表相似，包含一系列带有名称的列和行数据。所以视图起到一个过滤数据的作用，使开发者是关注自己需要的某些特定数据和所负责的特定任务，只能看到视图中所定义的数据，而不是视图所引用表中的数据，从而提高了数据库中数据的安全性。

## 视图有哪些特点？

- 视图的列可以来自不同的表，是表的抽象和在逻辑意义上建立的新关系。
- 视图是由基本表(实表)产生的表(虚表)。
- 视图的建立和删除操作对基本表不产生影响。
- 当视图来自多个基本表时，不允许添加和删除数据。
- 对视图的内容进行添加，删除或修改操作将直接影响基本表。

## 视图的作用？

视图的作用：简化sql查询，提高开发效率。

## 视图的使用场景?

- 重用SQL语句；
- 简化复杂的SQL操作。在编写查询后，可以方便的重用它而不必知道它的基本查询细节；
- 使用表的一部分而不是使用整个表；
- 保护数据，可以给用户授予表的特定部分的访问权限而不是整个表的访问权限；
- 更改数据的格式和表示，视图可以返回与底层表的表示和格式不同的数据。

## - 视图的优点

1. 使查询简单化，视图能简化用户的操作
2. 数据安全性，视图使用户能以多种角度看待同一数据，能够对机密数据提供安全保护
3. 逻辑数据独立性，视图对重构数据库提供了一定程度的逻辑独立性

## 视图的缺点

1.**性能方面 :** 数据库必须把视图的查询转化成对基本表的查询，如果这个视图是由一个复杂的多表查询所定义，那么，即使是视图的一个简单查询，数据库也把它变成一个复杂的结合体，可能会降低性能。

2. **修改限制方面:** 当用户试图修改视图的某些行时，数据库必须把它转化为对基本表的某些行的修改。所以当从视图中插入或者删除时，情况也是这样。所以在对于比较复杂的视图，可能是不可修改的。

视图是指计算机数据库中的视图，是一个虚拟表，其内容由查询定义。同真实的表一样，视图包含一系列带有名称的列和行数据。但是，视图并不在数据库中以存储的数据值集形式存在。行和列数据来自由定义视图的查询所引用的表，并且在引用视图时动态生成。——百度百科

关系型数据库中的数据是由一张一张的二维关系表所组成，简单的单表查询只需要遍历一个表，而复杂的多表查询需要将多个表连接起来进行查询任务。对于复杂的查询事件，每次查询都需要编写MySQL代码效率低下。为了解决这个问题，数据库提供了视图（view）功能。

## **视图相关的MySQL指令**

| 操作指令           | 代码                                                         |
| ------------------ | ------------------------------------------------------------ |
| 创建视图           | `CREATE VIEW 视图名(列1，列2...) AS SELECT (列1，列2...) FROM ...;` |
| 使用视图           | `当成表使用就好`                                             |
| 修改视图           | `CREATE OR REPLACE VIEW 视图名 AS SELECT [...] FROM [...];`  |
| 查看数据库已有视图 | `>SHOW TABLES [like...];`（可以使用模糊查找）                |
| 查看视图详情       | `DESC 视图名`或者`SHOW FIELDS FROM 视图名`                   |
| 视图条件限制       | `[WITH CHECK OPTION]`                                        |

## **2 创建视图**

**2.1 创建视图create view** 
 创建视图的代码为：

```
>CREATE VIEW 视图名(列1，列2...)
 AS SELECT (列1，列2...)
 FROM ...;
```

以看到，创建视图和查询相比，增加了前面的`CREATE VIEW 视图名 AS`

**2.2 视图运用**

> 使用视图和使用表完全一样，只需要把视图当成一张表就OK了。**视图是一张虚拟表。**

**2.3 修改视图CREATE OR REPLACE VIEW**

修改和创建视图可以使用代码：

```
CREATE OR REPLACE VIEW 视图名 AS SELECT [...] FROM [...];
```

**2.4 查看视图** 
 **(1)查看数据库中有哪些视图 show tables** 
 前面提到，视图就是虚拟的表，因此，查看视图的方法和查看表的方法是一样的：

```
>SHOW TABLES;
```

通过`show tables;`反馈得到所有的表和视图。同样的，我们可以通过模糊检索的方式专门查看视图，这个时候，视图的命令统一采用*v*_视图名v_视图名的优势就体现出来了。 
 **（2）查看视图详情** 
 查看视图详情的方法有两种，一种是和查看表详情一样使用`desc 视图名`，另外一种方法是`show fields from 视图名`：

**注意点：** 
 \1. 视图不是表，不直接存储数据，是一张虚拟的表； 
 \2. 一般情况下，在创建有条件限制的视图时，加上“WITH CHECK OPTION”命令。

```
>DESC 视图名;
或者
>SHOW FIELDS FROM 视图名;
```

```mysql
create table dept(
    dept_id int primary key auto_increment comment '部门编号',
    dept_name char(20) comment '部门名称'
);
insert into dept(dept_name) values('销售部'),('财务部'),('生产部'),('人事部');

create table emp(
    emp_id int primary key auto_increment comment '员工号',
    emp_name char(20) not null default '' comment '员工姓名',
    gender char(2) not null default '男' comment '性别',
    birth datetime not null default '1990-1-1' comment '出生日期',
    salary decimal(10,2) not null default 0 comment '工资',
    address varchar(200) not null default '' comment '通讯地址',
    dept_id int comment '部门编号'
);

create index idx_name on emp(emp_name);
create index idx_birth on emp(birth);
create index idx_deptid_name on emp(dept_id,emp_name);

insert into emp(emp_name,gender,birth,salary,address,dept_id) 
values('张晓红','女','1980-1-23',5800,'河南省郑州市中原路10号',1),
('张静静','女','1987-10-3',5400,'河南省新乡市平原路38号',1),
('王云飞','男','1992-11-15',5600,'河南省新乡市人民路28号',1),
('王鹏飞','男','1987-10-1',6800,'河南省新乡市东明大道12号',1),
('王大鹏','男','1989-2-11',5900,'河南省郑州市东风路15号',1),
('王萌萌','女','1986-12-30',5000,'河南省开封市五一路14号',2),
('王大光','男','1988-11-8',6200,'河南省开封市八一路124号',2),
('王小明','男','1998-1-3',4800,'河南省驻马店市雪松路128号',2),
('王娜娜','女','1994-3-5',5200,'河南省驻马店市车站路2号',2),
('刘云飞','男','1992-8-13',6800,'河南省南阳市民生路255号',3),
('张陆军','男','1991-9-6',6200,'河南省南阳市张仲景路14号',3);
```

## 三、创建视图

#### （一）创建一个单表视图

```mysql
mysql> create or replace view v_emp_dept_id_1 as select emp_name,address 
       from emp where dept_id=1;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from v_emp_dept_id_1;
+-----------+-------------------------------------+
| emp_name  | address                             |
+-----------+-------------------------------------+
| 张晓红    | 河南省郑州市中原路10号              |
| 张静静    | 河南省新乡市平原路38号              |
| 王云飞    | 河南省新乡市人民路28号              |
| 王大鹏    | 河南省郑州市东风路15号              |
| 王鹏飞    | 河南省新乡市东明大道12号            |
+-----------+-------------------------------------+
5 rows in set (0.00 sec)
```

#### 二）创建一个多表视图

```mysql
mysql>  create or replace view v_emp_dept as select emp_name,address,dept_name 
        from emp join dept on emp.dept_id=dept.dept_id where dept.dept_id=1;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from v_emp_dept;
+-----------+-------------------------------------+-----------+
| emp_name  | address                             | dept_name |
+-----------+-------------------------------------+-----------+
| 张晓红    | 河南省郑州市中原路10号              | 销售部    |
| 张静静    | 河南省新乡市平原路38号              | 销售部    |
| 王云飞    | 河南省新乡市人民路28号              | 销售部    |
| 王大鹏    | 河南省郑州市东风路15号              | 销售部    |
| 王鹏飞    | 河南省新乡市东明大道12号            | 销售部    |
+-----------+-------------------------------------+-----------+
5 rows in set (0.00 sec)
```

#### （三）指定视图中的列名

```mysql
mysql>  create or replace view v_dept_emp_count(dept_name,emp_count,avg_salary) 
        as select dept_name,count(*),avg(salary) 
        from empp join dept on emp.dept_id=dept.dept_id group by dept.dept_name;
Query OK, 0 rows affected (0.01 sec)

mysql> select * from v_dept_emp_count;
+-----------+-----------+-------------+
| dept_name | emp_count | avg_salary  |
+-----------+-----------+-------------+
| 生产部    |         2 | 6500.000000 |
| 财务部    |         4 | 5300.000000 |
| 销售部    |         5 | 5900.000000 |
+-----------+-----------+-------------+
3 rows in set (0.00 sec)
```

#### （四）指定WITH CHECK OPTION参数

```mysql
mysql> create view v_emp_dept_produce as select emp_name,salary from emp
    -> where dept_id=(select dept_id from dept where dept_name='生产部')
    -> with check option;
Query OK, 0 rows affected (0.01 sec)

mysql> select * from v_emp_dept_produce;
+-----------+---------+
| emp_name  | salary  |
+-----------+---------+
| 刘云飞    | 6800.00 |
| 张陆军    | 6200.00 |
+-----------+---------+
2 rows in set (0.01 sec)
```

## 四、查看视图

#### （一）利用show tables查看视图名称

```mysql
mysql> show tables;
+--------------------+
| Tables_in_test     |
+--------------------+
| area               |
| dept               |
| emp                |
| goods              |
| orders             |
| orders_logs        |
| t1                 |
| v1                 |
| v_dept_emp_count   |
| v_emp_dept         |
| v_emp_dept_id_1    |
| v_emp_dept_produce |
+--------------------+
12 rows in set (0.00 sec)
```

#### 二）利用desc查看视图的字段信息

```mysql
mysql> desc v_emp_dept;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| emp_name  | char(20)     | NO   |     |         |       |
| address   | varchar(200) | NO   |     |         |       |
| dept_name | char(20)     | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

#### （三）利用show table status语句查看视图的基本信息

```mysql
mysql> show table status like 'v_emp_dept'\G
*************************** 1. row ***************************
           Name: v_emp_dept
         Engine: NULL
        Version: NULL
     Row_format: NULL
           Rows: NULL
 Avg_row_length: NULL
    Data_length: NULL
Max_data_length: NULL
   Index_length: NULL
      Data_free: NULL
 Auto_increment: NULL
    Create_time: NULL
    Update_time: NULL
     Check_time: NULL
      Collation: NULL
       Checksum: NULL
 Create_options: NULL
        Comment: VIEW
1 row in set (0.01 sec)
```

#### 四）利用show create view命令查看视图的详细信息

```mysql
mysql> show create view v_emp_dept\G
*************************** 1. row ***************************
                View: v_emp_dept
         Create View: CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_emp_dept` AS select `emp`.`emp_name` AS `emp_name`,`emp`.`address` AS `address`,`dept`.`dept_name` AS `dept_name` from (`emp` join `dept` on((`emp`.`dept_id` = `dept`.`dept_id`))) where (`dept`.`dept_id` = 1)
character_set_client: utf8
collation_connection: utf8_general_ci
1 row in set (0.00 sec)
```

## 五、修改视图

#### （一）使用create or replace view命令修改视图

```mysql
mysql> create or replace view v_emp_dept as select emp_name,address,salary,dept_name 
    -> from emp join dept on emp.dept_id=dept.dept_id where dept.dept_id=1
    -> with check option;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from v_emp_dept;
+-----------+-------------------------------------+---------+-----------+
| emp_name  | address                             | salary  | dept_name |
+-----------+-------------------------------------+---------+-----------+
| 张晓红    | 河南省郑州市中原路10号              | 5800.00 | 销售部    |
| 张静静    | 河南省新乡市平原路38号              | 5400.00 | 销售部    |
| 王云飞    | 河南省新乡市人民路28号              | 5600.00 | 销售部    |
| 王大鹏    | 河南省郑州市东风路15号              | 5900.00 | 销售部    |
| 王鹏飞    | 河南省新乡市东明大道12号            | 6800.00 | 销售部    |
+-----------+-------------------------------------+---------+-----------+
5 rows in set (0.00 sec)
```

#### （二）使用alter view命令修改视图

```mysql
mysql> alter view v_emp_dept as select emp_name,address,salary,dept_name 
    -> from emp join dept on emp.dept_id=dept.dept_id where dept.dept_id=1
    -> order by salary desc with check option;
Query OK, 0 rows affected (0.00 sec)

mysql> select * from v_emp_dept;
+-----------+-------------------------------------+---------+-----------+
| emp_name  | address                             | salary  | dept_name |
+-----------+-------------------------------------+---------+-----------+
| 王鹏飞    | 河南省新乡市东明大道12号            | 6800.00 | 销售部    |
| 王大鹏    | 河南省郑州市东风路15号              | 5900.00 | 销售部    |
| 张晓红    | 河南省郑州市中原路10号              | 5800.00 | 销售部    |
| 王云飞    | 河南省新乡市人民路28号              | 5600.00 | 销售部    |
| 张静静    | 河南省新乡市平原路38号              | 5400.00 | 销售部    |
+-----------+-------------------------------------+---------+-----------+
5 rows in set (0.00 sec)
```

## 六、更新视图数据

因为视图时虚拟表，所以更新视图中的数据实际上是更新创建视图时用到的基本表中的数据。

#### （一）更新单表视图

```mysql
mysql> select * from dept;
+---------+-----------+
| dept_id | dept_name |
+---------+-----------+
|       1 | 销售部    |
|       2 | 财务部    |
|       3 | 生产部    |
|       4 | 人事部    |
+---------+-----------+
4 rows in set (0.00 sec)

mysql> select * from emp;
+--------+-----------+--------+---------------------+---------+--------------------------------------+---------+
| emp_id | emp_name  | gender | birth               | salary  | address                              | dept_id |
+--------+-----------+--------+---------------------+---------+--------------------------------------+---------+
|      1 | 张晓红    | 女     | 1980-01-23 00:00:00 | 5800.00 | 河南省郑州市中原路10号               |       1 |
|      2 | 张静静    | 女     | 1987-10-03 00:00:00 | 5400.00 | 河南省新乡市平原路38号               |       1 |
|      3 | 王云飞    | 男     | 1992-11-15 00:00:00 | 5600.00 | 河南省新乡市人民路28号               |       1 |
|      4 | 王鹏飞    | 男     | 1987-10-01 00:00:00 | 6800.00 | 河南省新乡市东明大道12号             |       1 |
|      5 | 王大鹏    | 男     | 1989-02-11 00:00:00 | 5900.00 | 河南省郑州市东风路15号               |       1 |
|      6 | 王萌萌    | 女     | 1986-12-30 00:00:00 | 5000.00 | 河南省开封市五一路14号               |       2 |
|      7 | 王大光    | 男     | 1988-11-08 00:00:00 | 6200.00 | 河南省开封市八一路124号              |       2 |
|      8 | 王小明    | 男     | 1998-01-03 00:00:00 | 4800.00 | 河南省驻马店市雪松路128号            |       2 |
|      9 | 王娜娜    | 女     | 1994-03-05 00:00:00 | 5200.00 | 河南省驻马店市车站路2号              |       2 |
|     10 | 刘云飞    | 男     | 1992-08-13 00:00:00 | 6800.00 | 河南省南阳市民生路255号              |       3 |
|     11 | 张陆军    | 男     | 1991-09-06 00:00:00 | 6200.00 | 河南省南阳市张仲景路14号             |       3 |
+--------+-----------+--------+---------------------+---------+--------------------------------------+---------+
11 rows in set (0.00 sec)

mysql> create view v_emp_1 as select emp_name,salary,address 
       from emp where salary>6000;   --不带 with check option 参数
Query OK, 0 rows affected (0.00 sec)

mysql> select * from v_emp_1;
+-----------+---------+-------------------------------------+
| emp_name  | salary  | address                             |
+-----------+---------+-------------------------------------+
| 王鹏飞    | 6800.00 | 河南省新乡市东明大道12号            |
| 王大光    | 6200.00 | 河南省开封市八一路124号             |
| 刘云飞    | 6800.00 | 河南省南阳市民生路255号             |
| 张陆军    | 6200.00 | 河南省南阳市张仲景路14号            |
+-----------+---------+-------------------------------------+
4 rows in set (0.00 sec)

mysql> update v_emp_1 set salary=3000 where emp_name='王鹏飞';
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from v_emp_1;
+-----------+---------+-------------------------------------+
| emp_name  | salary  | address                             |
+-----------+---------+-------------------------------------+
| 王大光    | 6200.00 | 河南省开封市八一路124号             |
| 张陆军    | 6200.00 | 河南省南阳市张仲景路14号            |
| 刘云飞    | 6800.00 | 河南省南阳市民生路255号             |
+-----------+---------+-------------------------------------+
3 rows in set (0.00 sec)

mysql> select * from emp;
+--------+-----------+--------+---------------------+---------+--------------------------------------+---------+
| emp_id | emp_name  | gender | birth               | salary  | address                              | dept_id |
+--------+-----------+--------+---------------------+---------+--------------------------------------+---------+
|      1 | 张晓红    | 女     | 1980-01-23 00:00:00 | 5800.00 | 河南省郑州市中原路10号               |       1 |
|      2 | 张静静    | 女     | 1987-10-03 00:00:00 | 5400.00 | 河南省新乡市平原路38号               |       1 |
|      3 | 王云飞    | 男     | 1992-11-15 00:00:00 | 5600.00 | 河南省新乡市人民路28号               |       1 |
|      4 | 王鹏飞    | 男     | 1987-10-01 00:00:00 | 3000.00 | 河南省新乡市东明大道12号             |       1 |
|      5 | 王大鹏    | 男     | 1989-02-11 00:00:00 | 5900.00 | 河南省郑州市东风路15号               |       1 |
|      6 | 王萌萌    | 女     | 1986-12-30 00:00:00 | 5000.00 | 河南省开封市五一路14号               |       2 |
|      7 | 王大光    | 男     | 1988-11-08 00:00:00 | 6200.00 | 河南省开封市八一路124号              |       2 |
|      8 | 王小明    | 男     | 1998-01-03 00:00:00 | 4800.00 | 河南省驻马店市雪松路128号            |       2 |
|      9 | 王娜娜    | 女     | 1994-03-05 00:00:00 | 5200.00 | 河南省驻马店市车站路2号              |       2 |
|     10 | 刘云飞    | 男     | 1992-08-13 00:00:00 | 6800.00 | 河南省南阳市民生路255号              |       3 |
|     11 | 张陆军    | 男     | 1991-09-06 00:00:00 | 6200.00 | 河南省南阳市张仲景路14号             |       3 |
+--------+-----------+--------+---------------------+---------+--------------------------------------+---------+
11 rows in set (0.00 sec)


mysql> create or replace view v_emp_2 as select emp_name,salary,address 
    ->        from emp where salary>5500 with check option;  --添加 with check option 参数
Query OK, 0 rows affected (0.01 sec)

mysql> select * from v_emp_2;
+-----------+---------+-------------------------------------+
| emp_name  | salary  | address                             |
+-----------+---------+-------------------------------------+
| 张晓红    | 5800.00 | 河南省郑州市中原路10号              |
| 王云飞    | 5600.00 | 河南省新乡市人民路28号              |
| 王大鹏    | 5900.00 | 河南省郑州市东风路15号              |
| 王大光    | 6200.00 | 河南省开封市八一路124号             |
| 刘云飞    | 6800.00 | 河南省南阳市民生路255号             |
| 张陆军    | 6200.00 | 河南省南阳市张仲景路14号            |
+-----------+---------+-------------------------------------+
6 rows in set (0.00 sec)

mysql> update v_emp_2 set salary=3000 where emp_name='王云飞';
ERROR 1369 (HY000): CHECK OPTION failed 'test.v_emp_2'
---由于违反了视图定义的条件，则更新失败

```

#### （二）更新多表视图

```mysql
mysql> create view v_emp_dept_11 as select emp_name,salary,dept.* 
from emp,dept where emp.dept_id=dept.dept_id;
Query OK, 0 rows affected (0.01 sec)

mysql> select * from v_emp_dept_11;
+-----------+---------+---------+-----------+
| emp_name  | salary  | dept_id | dept_name |
+-----------+---------+---------+-----------+
| 张晓红    | 5800.00 |       1 | 销售部    |
| 张静静    | 5400.00 |       1 | 销售部    |
| 王云飞    | 5600.00 |       1 | 销售部    |
| 王鹏飞    | 3000.00 |       1 | 销售部    |
| 王大鹏    | 5900.00 |       1 | 销售部    |
| 王萌萌    | 5000.00 |       2 | 财务部    |
| 王大光    | 6200.00 |       2 | 财务部    |
| 王小明    | 4800.00 |       2 | 财务部    |
| 王娜娜    | 5200.00 |       2 | 财务部    |
| 刘云飞    | 6800.00 |       3 | 生产部    |
| 张陆军    | 6200.00 |       3 | 生产部    |
+-----------+---------+---------+-----------+
11 rows in set (0.00 sec)

mysql> update v_emp_dept_11 set salary=10000 where emp_name='张静静';
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update v_emp_dept_11 set dept_name='销售事业部' where emp_name='张静静';
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from v_emp_dept_11;
+-----------+----------+---------+-----------------+
| emp_name  | salary   | dept_id | dept_name       |
+-----------+----------+---------+-----------------+
| 张晓红    |  5800.00 |       1 | 销售事业部      |
| 张静静    | 10000.00 |       1 | 销售事业部      |
| 王云飞    |  5600.00 |       1 | 销售事业部      |
| 王鹏飞    |  3000.00 |       1 | 销售事业部      |
| 王大鹏    |  5900.00 |       1 | 销售事业部      |
| 王萌萌    |  5000.00 |       2 | 财务部          |
| 王大光    |  6200.00 |       2 | 财务部          |
| 王小明    |  4800.00 |       2 | 财务部          |
| 王娜娜    |  5200.00 |       2 | 财务部          |
| 刘云飞    |  6800.00 |       3 | 生产部          |
| 张陆军    |  6200.00 |       3 | 生产部          |
+-----------+----------+---------+-----------------+
11 rows in set (0.00 sec)
```

## 七、删除视图

```mysql
drop view [if exists] view_name;
drop view v_emp_dept_11;
```

## 存储过程和函数介绍

- 存储过程和函数是事先经过编译并存储在数据库中的一段 SQL 语句的集合。
- 存储过程和函数的好处
  提高代码的复用性。
  减少数据在数据库和应用服务器之间的传输，提高效率。
  减少代码层面的业务处理。
- 存储过程和函数的区别
  存储函数必须有返回值。
  存储过程可以没有返回值。

## 存储过程的创建和调用

- 调用存储过程
  CALL 存储过程名称（实际参数）;

下面是代码示例

首先是数据准备

```mysql
-- 创建db6数据库
CREATE DATABASE db6;

-- 使用db6数据库
USE db6;

-- 创建学生表
CREATE TABLE student(
	id INT PRIMARY KEY AUTO_INCREMENT,	-- 学生id
	NAME VARCHAR(20),			-- 学生姓名
	age INT,				-- 学生年龄
	gender VARCHAR(5),			-- 学生性别
	score INT                               -- 学生成绩
);
-- 添加数据
INSERT INTO student VALUES (NULL,'张三',23,'男',95),(NULL,'李四',24,'男',98),
(NULL,'王五',25,'女',100),(NULL,'赵六',26,'女',90);




-- 按照性别进行分组，查询每组学生的总成绩。按照总成绩的升序排序
SELECT gender,SUM(score) getSum FROM student GROUP BY gender ORDER BY getSum ASC;
```

然后创建存储过程并调用。。。

```text
/*
	创建存储过程

	-- 修改分隔符为$
	DELIMITER $

	-- 标准语法
	CREATE PROCEDURE 存储过程名称(参数列表)
	BEGIN
		SQL 语句列表;
	END$

	-- 修改分隔符为分号
	DELIMITER ;
*/
-- 创建stu_group()存储过程，封装 分组查询总成绩，并按照总成绩升序排序的功能
DELIMITER $

CREATE PROCEDURE stu_group()
BEGIN
	SELECT gender,SUM(score) getSum FROM student GROUP BY gender ORDER BY getSum ASC;
END$

DELIMITER ;

/*
	调用存储过程
	CALL 存储过程名称(实际参数);
*/
-- 调用stu_group()存储过程
CALL stu_group();
```

## 存储过程的查看和删除

- 查看数据库中所有的存储过程
  SELECT * FROM mysql.proc WHERE db='数据库名称';
- 删除存储过程
  DROP PROCEDURE [IF EXISTS] 存储过程名称;

下面是代码演示

```mysql
/*
	查询数据库中所有的存储过程
	SELECT * FROM mysql.proc WHERE db='数据库名称';
*/
-- 查看db6数据库中所有的存储过程




/*
	删除存储过程
	DROP PROCEDURE [IF EXISTS] 存储过程名称;
*/
```

完整版代码如下

```mysql
/*
	查询数据库中所有的存储过程
	SELECT * FROM mysql.proc WHERE db='数据库名称';
*/
-- 查看db6数据库中所有的存储过程
SELECT * FROM mysql.proc WHERE db='db6';



/*
	删除存储过程
	DROP PROCEDURE [IF EXISTS] 存储过程名称;
*/
DROP PROCEDURE IF EXISTS stu_group;
```

## 存储过程语法 - 变量

- 定义变量
  DECLARE 变量名 数据类型 [DEFAULT 默认值];
- 变量赋值方式一
  SET 变量名 = 变量值;
- 变量赋值方式二
  SELECT 列名 INTO 变量名 FROM 表名 [WHERE 条件];

下面是代码示例

```mysql
/*
	定义变量
	DECLARE 变量名 数据类型 [DEFAULT 默认值];
*/
-- 定义一个int类型变量，并赋默认值为10
DELIMITER $

CREATE PROCEDURE pro_test1()
BEGIN
	-- 定义变量
	DECLARE num INT DEFAULT 10;
	-- 使用变量
	SELECT num;
END$

DELIMITER ;

-- 调用pro_test1存储过程
CALL pro_test1();



/*
	变量赋值-方式一
	SET 变量名 = 变量值;
*/
-- 定义一个varchar类型变量并赋值
DELIMITER $

CREATE PROCEDURE pro_test2()
BEGIN
	-- 定义变量
	DECLARE NAME VARCHAR(10);
	-- 为变量赋值
	SET NAME = '存储过程';
	-- 使用变量
	SELECT NAME;
END$

DELIMITER ;

-- 调用pro_test2存储过程
CALL pro_test2();




/*
	变量赋值-方式二
	SELECT 列名 INTO 变量名 FROM 表名 [WHERE 条件];
*/
-- 定义两个int变量，用于存储男女同学的总分数
DELIMITER $

CREATE PROCEDURE pro_test3()
BEGIN
	-- 定义两个变量
	DECLARE men,women INT;
	-- 查询男同学的总分数，为men赋值
	SELECT SUM(score) INTO men FROM student WHERE gender='男';
	-- 查询女同学的总分数，为women赋值
	SELECT SUM(score) INTO women FROM student WHERE gender='女';
	-- 使用变量
	SELECT men,women;
END$

DELIMITER ;

-- 调用pro_test3存储过程
CALL pro_test3();
```

## 存储过程语法 – if 语句

- if 语句标准语法

```mysql
*
	if语句
	IF 判断条件1 THEN 执行的sql语句1;
	[ELSEIF 判断条件2 THEN 执行的sql语句2;]
	...
	[ELSE 执行的sql语句n;]
	END IF;
*/

/*
	定义一个int变量，用于存储班级总成绩
	定义一个varchar变量，用于存储分数描述
	根据总成绩判断：
		380分及以上   学习优秀
		320 ~ 380     学习不错
		320以下       学习一般
*/
DELIMITER $

CREATE PROCEDURE pro_test4()
BEGIN
	-- 定义变量
	DECLARE total INT;
	DECLARE info VARCHAR(10);
	-- 查询总成绩，为total赋值
	SELECT SUM(score) INTO total FROM student;
	-- 对总成绩判断
	IF total > 380 THEN
		SET info = '学习优秀';
	ELSEIF total >= 320 AND total <= 380 THEN
		SET info = '学习不错';
	ELSE
		SET info = '学习一般';
	END IF;
	-- 查询总成绩和描述信息
	SELECT total,info;
END$

DELIMITER ;




-- 调用pro_test4存储过程
CALL pro_test4();
```

## 存储过程语法 - 参数传递

- 存储过程的参数和返回值
  IN：代表输入参数，需要由调用者传递实际数据(默认)
  OUT：代表输出参数，该参数可以作为返回值
  INOUT：代表既可以作为输入参数，也可以作为输出参数

```mysql
/*
	参数传递
	CREATE PROCEDURE 存储过程名称([IN|OUT|INOUT] 参数名 数据类型)
	BEGIN
		SQL 语句列表;
	END$
*/
/*
	输入总成绩变量，代表学生总成绩
	输出分数描述变量，代表学生总成绩的描述信息
	根据总成绩判断：
		380分及以上  学习优秀
		320 ~ 380    学习不错
		320以下      学习一般
*/
DELIMITER $

CREATE PROCEDURE pro_test5(IN total INT,OUT info VARCHAR(10))
BEGIN
	-- 对总成绩判断
	IF total > 380 THEN
		SET info = '学习优秀';
	ELSEIF total >= 320 AND total <= 380 THEN
		SET info = '学习不错';
	ELSE
		SET info = '学习一般';
	END IF;
END$

DELIMITER ;

-- 调用pro_test5存储过程
CALL pro_test5(350,@info);

CALL pro_test5((SELECT SUM(score) FROM student),@info);

SELECT @info;
```

## 存储过程语法 – while 循环

- while 循环语法

```mysql
/*
	while循环
	初始化语句;
	WHILE 条件判断语句 DO
		循环体语句;
		条件控制语句;
	END WHILE;
*/
-- 计算1~100之间的偶数和
DELIMITER $

CREATE PROCEDURE pro_test6()
BEGIN
	-- 定义求和变量
	DECLARE result INT DEFAULT 0;
	-- 定义初始化变量
	DECLARE num INT DEFAULT 1;
	-- while循环
	WHILE num <= 100 DO
		IF num % 2 = 0 THEN
			SET result = result + num;
		END IF;
		
		SET num = num + 1;
	END WHILE;
	
	-- 查询求和结果
	SELECT result;
END$

DELIMITER ;


-- 调用pro_test6存储过程
CALL pro_test6();
```

## 存储函数

- 存储函数和存储过程是非常相似的，区别在于存储函数必须有返回值。
- 创建存储函数

# 1、什么是MySQL索引？

```mysql
/*
	创建存储函数
	CREATE FUNCTION 函数名称([参数 数据类型])
	RETURNS 返回值类型
	BEGIN
		执行的sql语句;
		RETURN 结果;
	END$
*/
-- 定义存储函数，获取学生表中成绩大于95分的学生数量
DELIMITER $

CREATE FUNCTION fun_test1()
RETURNS INT
BEGIN
	-- 定义变量
	DECLARE s_count INT;
	-- 查询成绩大于95分的数量，为s_count赋值
	SELECT COUNT(*) INTO s_count FROM student WHERE score > 95;
	-- 返回统计结果
	RETURN s_count;
END$

DELIMITER ;


/*
	调用函数
	SELECT 函数名称(实际参数);
*/
-- 调用函数
SELECT fun_test1();


/*
	删除函数
	DROP FUNCTION 函数名称;
*/
-- 删除函数
DROP FUNCTION fun_test1;
```

- 官方上面说索引是帮助MySQL`高效获取数据`的`数据结构`，通俗点的说，数据库索引好比是一本书的目录，可以直接根据页码找到对应的内容，目的就是为了`加快数据库的查询速度`。
- 索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。
- 一种能帮助mysql提高了查询效率的数据结构：**索引数据结构**。

## 1.1、索引原理

索引的存储原理大致可以概括为一句话：**以空间换时间**。

一般来说索引本身也很大，不可能全部存储在内存中，因此`索引往往是存储在磁盘上的文件中的`（可能存储在单独的索引文件中，也可能和数据一起存储在数据文件中）。

数据库在未添加索引进行查询的时候默认是进行全文搜索，也就是说有多少数据就进行多少次查询，然后找到相应的数据就把它们放到结果集中，直到全文扫描完毕。

## 1.2、索引的分类

**主键索引：`primary key`**

- 设定为主键后，数据库自动建立索引，InnoDB为聚簇索引，主键索引列值不能为空（Null）。

**唯一索引：**

- 索引列的值必须唯一，但允许有空值（Null），但只允许有一个空值（Null）。

**复合索引：**

- 一个索引可以包含多个列，多个列共同构成一个复合索引。

**全文索引：**

- Full Text（MySQL5.7之前，只有MYISAM存储引擎引擎支持全文索引）。
- 全文索引类型为FULLTEXT，在定义索引的列上支持值的全文查找允许在这些索引列中插入重复值和空值。全文索引可以在**Char、VarChar** 上创建。

**空间索引：**

- MySQL在5.7之后的版本支持了空间索引，而且支持OpenGIS几何数据模型，MySQL在空间索引这方年遵循OpenGIS几何数据模型规则。

**前缀索引：**

- 在文本类型为char、varchar、text类列上创建索引时，可以指定索引列的长度，但是数值类型不能指定。

## 1.3、索引的优缺点

**优点：**

- 大大提高数据查询速度。
- 可以提高数据检索的效率，降低数据库的IO成本，类似于书的目录。
- 通过索引列对数据进行排序，降低数据的排序成本降低了CPU的消耗。
- 被索引的列会自动进行排序，包括【单例索引】和【组合索引】，只是组合索引的排序需要复杂一些。
- 如果按照索引列的顺序进行排序，对order 不用语句来说，效率就会提高很多。

**缺点：**

- 索引会占据磁盘空间。
- 索引虽然会提高查询效率，但是会降低更新表的效率。比如每次对表进行增删改查操作，MySQL不仅要保存数据，还有保存或者更新对应的索引文件。
- 维护索引需要消耗数据库资源。

**综合索引的优缺点：**

- `数据库表中不是索引越多越好，而是仅为那些常用的搜索字段建立索引效果最佳!`

## 1.4、创建索引的基本操作

**创建主键索引：**

```
#建表时，主键默认为索引
create table user(
    id varchar(11) primary key,
    name varchar(20),
    age int
)

#查看user表中的索引
show index from user;
```

**创建单列索引：**

```
#创建单列索引，只能包含一个字段
create index name_index on user(name);
```

**创建唯一索引：**

```
#创建唯一索引，只能有一个列
create unique index age_index on user(age);
```

**创建符合索引：**

```
#复合索引
create index name_age_index on user(name,age);
```

**满足复合索引的查询的两大原则：**
**假如创建的复合索引为三个字段，按顺序分别是(name,age,sex)
在查询时能利用复合索引的查询条件如下：**

- 1、最左前缀原则(如下四种都满足条件)

- 1、最左前缀原则(如下四种都满足条件)

  ```
  select * from user where name = ? 
  select * from user where name = ? and age = ?
  select * from user where name = ? and sex = ?
  select * from user where name = ? and age = ? and sex = ?
  ```

- 1.1、如下是不满足最前左缀的条件（但是不是全部都不生效，如下第2原则解释）

  ```
  select * from user where name = ? and sex = ? and age = ?
  select * from user where age = ? and sex = ? and name = ?
  select * from user where sex = ? and age = ? and name = ?
  select * from user where age = ? and sex = ?
  …………等等
  ```

- 2.MySQL 引擎在执行查询时，为了更好地利用索引，在查询过程中会动态调整查询字段的顺序！**(也就是说，当条件中的字段全部达到复合索引中的字段时，可以动态调整字段顺序，使其满足最前左缀)**

  ```
  #可以使用复合索引：索引中包含的字段数都有，只是顺序不正确，在执行的时候可以动态调整为最前左缀
  select * from user where sex = ? and age = ? and name = ?
  select * from user where age = ? and sex = ? and name = ?
  
  #不可以使用复合索引：因为缺少字段，并且顺序不正确
  select * from user where sex = ? and age = ? 
  select * from user where age = ? and name = ?
  select * from user where age = ?
  select * from user where sex = ? 
  ```

# 2、索引的数据结构

> 本文借鉴丙哥文章：[一文搞懂MySQL索引所有知识点](https://blog.csdn.net/qq_35190492/article/details/109257302?ops_request_misc=%7B%22request%5Fid%22%3A%22163667559716780264065137%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=163667559716780264065137&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-109257302.first_rank_v2_pc_rank_v29&utm_term=索引&spm=1018.2226.3001.4187)

MySQL索引使用的数据结构主要有`BTree索引`和`hash索引`。

对于hash索引来说，底层的数据结构就是哈希表，因此在绝大多数需求为单条记录查询的时候，可以选择哈希索引，查询性能最快；其余大部分场景建议选择BTree索引。

## 2.1、根据存储引擎的不同，实现方式也不同

MySQL的索引数据结构`最常使用的是B树中的B+Tree`，但对于主要的两种存储引擎的实现方式是不同的。

> ==**InnoDB中data阈存储的是行数据，而MyISAM中存储的是磁盘地址。**==

- **MyISAM**：

  > B+Tree叶节点的data域存放的是数据记录的地址。在索引检索的时候，首先按照B+Tree搜索算法搜索索引，如果指定的Key存在，则根据data域中磁盘地址到磁盘中寻址定位到对应的磁盘块，然后读取相应的数据记录，这被称为“非聚簇索引”。

- **InnoDB**：

  > ==其数据文件本身就是索引文件==。相比MyISAM，索引文件和数据文件是分离的，其表数据文件本身就是按照B+Tree组织的一个索引结构，树的叶节点data域保存了完整的数据记录。这个索引的Key是数据表的主键，因此InnoDB表数据文件本身就是主索引。这被称为“**聚簇索引（聚集索引）**”。而其余的索引都作为辅助索引，辅助索引的data域存储相应记录主键的值而不是地址，这也是和MyISAM不同的地方。

  - 在根据主索引搜索时，直接找到Key所在的节点即可取出数据；
  - 在根据辅助索引查找时，则需要先取出主键的值，再走一遍主索引。
  - 因此在设计表的时候，不建议使用过长的字段作为主键，也不建议使用非单调的字段作为主键，这样会造成主索引频繁分裂。

## 2.2、Hash表

Hash表，在Java中的HashMap，TreeMap就是Hash表结构，以键值对的形式存储数据。我们使用hash表存储表数据结构，**Key可以存储索引列，Value可以存储行记录或者行磁盘地址**。Hash表在等值查询时效率很高，时间复杂度为O(1)；但是不支持范围快速查找，范围查找时只能通过扫描全表的方式，筛选出符合条件的数据。

**显然这种方式，不适合我们经常需要查找和范围查找的数据库索引使用。**

上面这个图就是我们常说的二叉树：**每个节点最多有两个分叉节点，左子树和右子树数据按顺序左小右大。**

```
二叉树的特点就是为了保证每次查找都可以进行折半查找，从而减少IO次数。
但是二叉树不是一直保持二叉平衡，因为二叉树很考验根节点的取值，因为很容易在某个节点下不分叉了，这样的话二叉树就不平衡了，也就没有了所谓的能进行折半查找了，如下图：
```

## 2.4、平衡二叉树

平衡二叉树采用的是`二分法思维`，平衡二叉查找树除了具备二叉树的特点，最主要的特征是树的左右两个子树的层级最多差1。在插入删除数据时通过`左旋/右旋`操作保持二叉树的平衡，不会出现左子树很高、右子树很矮的情况。

使用平衡二叉查找树查询的性能接近与二分查找，时间复杂度为O(log2n)，查询id=6，只需要两次IO

就上述平衡二叉树的特点来看，其实是我们理想的状态下，然而其实内部还是存在一些问题：

- 时间复杂度和树的高度有关。树有多高就需要检索多少次，每个节点的读取，都对应一次磁盘的IO操作。树的高度就等于每次查询数据时磁盘IO操作的次数。磁盘每次寻道的时间为10ms，在数据量大时，查询性能会很差。（`1百万的数据量，log2n约等于20次磁盘IO读写，时间消耗约等于：20*10=0.2S`）。
- 平衡二叉树不支持范围查询快速查找，范围查询需要从根节点多次遍历，查询效率不高。

## 2.5、B树：改造二叉树

MySQL的数据是存储在磁盘文件中的，查询处理数据时，需要先把磁盘中的数据加载到内存中，磁盘IO操作非常耗时，`所以我们优化的重点就是尽量减少磁盘的IO操作`。访问二叉树的每个节点都会发生一次IO，`如果想要减少磁盘IO操作，就需要尽量降低树的高度`。

**那如何降低树的高度呢？**

假如key为bigint=8字节，每个节点有两个指针，每个指针为4个字节，一个节点占用的空间为（8+4*2=16）。

因为在MySQL的InnoDB引擎的一次IO操作会读取一页的数据量（默认一页大小为16K），而二叉树一次IO操作的有效数据量只有16字节，空间利用率极低。为了最大化的利用一次IO操作空间，一个解决方法就是在一个节点处存储多个元素，在每个节点尽可能多的存储数据。每个节点可以存储1000个索引（16k/16=1000），这样就将二叉树改造成了多叉树，`通过增加树的分叉树，将树的体型从高瘦变成了矮胖`。构建1百万条数据，树的高度需要2层就可以（1000*1000=1百万），也就是说只需要两次磁盘IO操作就可以查询到数据，磁盘IO操作次数变少了，查询数据的效率整体也就提高了。

这种数据结构我们称之为B树，==B树是一种多叉平衡查找树==，如下图主要特点：

1. B树的节点中存储这多个元素，每个内节点有多个分叉。
2. 节点中的元素包含键值和数据，节点中的键值从大到小排列。也就是说，在所有的节点中都存储数据。
3. 父节点当中的元素不会出现在子节点中。
4. 所有的叶子节点都位于同一层，叶子节点具有相同的深度，叶子节点之间没有指针连接。

# 1.什么是存储过程？

```
存储过程是封装了一条或多条SQL的集合。它的好处是简单、高性能、安全。
1
```

# 2.为什么要使用存储过程？

- 简化复杂的操作，把SQL封装起来容易使用。
   如果所有开发人员和应用程序都使用同一存储过程，则所有使用的代码都是相同的，防止多余执行的步骤保证了数据的一致性。
- 简化对变动的管理，如果表名列名或者业务逻辑发生变化，只需要改变存储过程中的代码，使用它的人甚至不需要知道这些变化。通过对存储过程限制对基础数据的访问，减少数据讹误的机会（讹误是指无意识或别的原因所导致的数据和讹误）。
- 调用存储过程比使用单独的SQL要快很多,这提高了性能。

# 3.存储过程有什么缺点？

存储过程的编写比基本SQL要复杂，对个人技能水平要求较高。
 数据库管理员通常限制存储过程的权限,不过幸运的是创建存储过程和使用存储过程的权限是分离的，你可能不能创建自己的存储过程，但仍然可以去执行别的存储过程。

# 4.怎样去创建存储过程？

Create Procedure 存储过程名()
 begin
 sql语句；
 end；

# 5.使用和删除存储过程

call 存储过程名；
 drop Procedure 存储过程名；

# 6.使用参数的存储过程

IN 类似形参
 OUT 类似返回值
 INTO 类似=号赋值

## 1. 存储过程的概念

存储过程 (Stored Procedure) 是在大型数据库系统中 , 一组为了完成特定功能的 SQL 语句集 , 存储在数据库中 ,  经过第一次编译后再次调用不需要再次编译 , 用户通过指定存储过程的名字并给出参数 (如果该存储过程带有参数) 来执行它 ,  存储过程是数据库中的一个重要对象 ; 存储过程中可以包含 `逻辑控制语句` 和 `数据操纵语句` , 它可以接受参数 , 输出参数 , 返回单个或多个结果集以及返回值 ;



## 2. 存储过程的优缺点

#### 优点 :

1. 由于应用程序随着时间推移会不断更改 , 增删功能 , SQL 语句会变得更复杂 , 存储过程为封装此类代码提供了一个替换位置 ;
2. 由于存储过程在创建时即在数据库服务器上进行了编译并存储在数据库中 , 所以存储过程运行要比单个的 SQL 语句块要快 ;
3. 由于在调用时只需用提供存储过程名和必要的参数信息 , 所以在一定程度上也可以减少网络流量 , 简单网络负担 ;
4. 可维护性高 , 更新存储过程通常比更改 , 测试以及重新部署程序集需要较少的时间和精力 ;
5. 代码精简一致 , 一个存储过程可以用于应用程序代码的不同位置 ;
6. 增强安全性 :   
   - 通过向用户授予对存储过程 (而不是基于表) 的访问权限 , 它们可以提供对特定数据的访问 ;
   - 提高代码安全 , 防止 `SQL注入` (但未彻底解决 , 例如将数据操作语言 `DML` 附加到输入参数) ;
   - SQLParameter 类指定存储过程参数的数据类型 , 作为深层次防御性策略的一部分 , 可以验证用户提供的值类型 (但也不是万无一失 , 还是应该传递至数据库前得到附加验证) ;

#### 缺点 :

1. 如果更改范围大到需要对输入存储过程的参数进行更改 , 或者要更改由其返回的数据 , 则仍需要更新程序集中的代码以添加参数 , 等等 ;
2. 可移植性差 , 由于存储过程将应用程序绑定到 Server , 因此使用存储过程封装业务逻辑将限制应用程序的可移植性 ; 如果应用程序的可移植性在您的环境中非常重要 , 则将业务逻辑封装在不特定于 RDBMS 的中间层中可能是一个更佳的选择 ;



## 3. 编写简单存储过程

#### 创建一个存储过程

```
create procedure GetUsers()
begin 
	select * from user; 
end;
```

#### 调用存储过程

```
call GetUsers();
1
```

#### 删除存储过程

```
drop procedure if exists GetUsers;
1
```



## 4. 带参数的存储过程

MySql 支持 IN (传递给存储过程) , OUT (从存储过程传出) 和 INOUT (对存储过程传入和传出) 类型的参数 ,  存储过程的代码位于 BEGIN 和 END 语句内 , 它们是一系列 SQL 语句 , 用来检索值 , 然后保存到相应的变量  (通过指定INTO关键字) ;

下面的存储过程接受三个参数 , 分别用于获取用户表的最小 , 平均 , 最大分数 , 每个参数必须具有指定的类型 , 这里使用十进制值(decimal(8,2)) , 关键字 OUT 指出相应的参数用来从存储过程传出

```
create procedure GetScores(
	out minScore decimal(8,2),
	out avgScore decimal(8,2),
	out maxScore decimal(8,2)
)
begin
	select min(score) into minScore from user;
	select avg(score) into avgScore from user;
	select max(score) into maxScore from user;
end;
12345678910
```

调用此存储过程 , 必须指定3个变量名(所有 MySql 变量都必须以 `@` 开始) , 如下所示 :

```
call GetScores(@minScore, @avgScore, @maxScore);
1
```

该调用并没有任何输出 , 只是把调用的结果赋给了调用时传入的变量 `@minScore, @avgScore, @maxScore` , 然后即可调用显示该变量的值 :

```
select @minScore, @avgScore, @maxScore;
1
```

使用 IN 参数 , 输入一个用户 id , 返回该用户的名字 :

```
create procedure GetNameByID(
	in userID int,
	out userName varchar(200)
)
begin
	select name from user
	where id = userID
	into userName;
end;
123456789
```

调用存储过程 :

```
call GetNameByID(1, @userName);
select @userName;
12
```



## 5. 复杂一点示例

根据 ID 获取货品的价格 , 并根据参数判断是否折扣 :

```
create procedure GetPriceByID(
	in prodID int,
	in isDisc boolean,
	out prodPrice decimal(8,2)
) 
begin
	declare tmpPrice decimal(8,2);
	declare prodDiscRate decimal(8,2);
	set prodDiscRate = 0.88;

	select price from products
	where id = prodID
	into tmpPrice;

	if isDisc then
		select tmpPrice*prodDiscRate into tmpPrice;
	end if;

	select tmpPrice into prodPrice;
end;
1234567891011121314151617181920
```

该存储过程传入三个参数 , 货品 ID , 是否折扣以及返回的价格 , 在存储过程内部 , 定义两个局部变量 tmpPrice 和  prodDiscRate , 把查询出来的结果赋给临时变量 , 再判断是否折扣 , 最后把局部变量的值赋给输出参数 ; 调用如下 :

```
call GetPriceByID(1, true, @prodPrice);
select @prodPrice;
12
```



## 6. DELIMITER

MySql 的命令行客户机的语句分隔符默认为分号 `;` ，而实用程序也是用 `;` 作为分隔符，这会使得存储过程的 SQL 出现语法错误，使用 `DELIMITER $$` 告诉命令行实用程序将 `$$` 作为新的语句结束分隔符，最后再使用 `DELIMITER ;` 改回来，如下所示：

```
DELIMITER $$ 
create procedure getUsers() begin select * from user; 
end $$ 
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE getcount()
BEGIN
SELECT
*
FROM
contract_user;
END $$
DELIMITER ;

CALL getcount();
```

### 存储过程的优点

1. 通过把处理封装在容易使用的单元中，简化复杂的操作；
2. 简化对变动的管理。如果表名、列名或业务逻辑有变化。只需要更改存储过程的代码，使用它的人员不会改自己的代码；
3. 通常存储过程有助于提高应用程序的性能。当创建的存储过程被编译之后，就存储在数据库中。 但是，MySQL 实现的存储过程略有不同。MySQL 存储过程按需编译。在编译存储过程之后，MySQL 将其放入缓存中。MySQL  为每个连接维护自己的存储过程高速缓存。如果应用程序在单个连接中多次使用存储过程，则使用编译版本，否则存储过程的工作方式类似于查询；
4. 存储过程有助于减少应用程序和数据库服务器之间的流量，因为应用程序不必发送多个冗长的 SQL 语句，而只用发送存储过程的名称和参数；
5. 存储的程序对任何应用程序都是可重用的和透明的。存储过程将数据库接口暴露给所有应用程序，以便开发人员不必开发存储过程中已支持的功能；
6. 存储的程序是安全的。数据库管理员可以向访问数据库中存储过程的应用程序授予适当的权限，而不向基础数据库表提供任何权限。

### 存储过程的缺点

1. 如果使用大量存储过程，那么使用这些存储过程的每个连接的内存使用量将会大大增加。 此外，如果您在存储过程中过度使用大量逻辑操作，则 CPU 使用率也会增加，因为 MySQL 数据库最初的设计侧重于高效的查询，不利于逻辑运算；
2. 存储过程的构造使得开发具有复杂业务逻辑的存储过程变得更加困难；
3. 很难调试存储过程。只有少数数据库管理系统允许您调试存储过程。不幸的是，MySQL 不提供调试存储过程的功能；
4. 开发和维护存储过程并不容易。开发和维护存储过程通常需要一个不是所有应用程序开发人员拥有的专业技能。这可能会导致应用程序开发和维护阶段的问题。

## MySQL 中的存储过程

### 创建与调用过程

创建存储过程，代码如下所示：

```mysql
-- 创建存储过程 
create procedure mypro(in a int,in b int,out sum int) 
begin 
set sum = a+b; 
end;
```

调用存储过程，代码如下所示：

```mysql
call mypro(1,2,@s);-- 调用存储过程 
select @s;-- 显示过程输出结果
```

### 存储过程语法解析

- `create procedure` 用来创建过程；
- `mypro` 用来定义过程名称；
- `(in a int,in b int,out sum int)`表示过程的参数，其中 `in` 表示输入参数，`out` 表示输出参数。类似于 Java 定义方法时的形参和返回值；
- `begin` 与`end` 表示过程主体的开始和结束，相当于 Java 定义方法的一对大括号；
- `call`用来调用过程，`@s` 是用来接收过程输出参数的变量

### 存储过程的参数

> MySQL 存储过程的参数用在存储过程的定义，共有三种参数类型：

- `IN` 输入参数：表示调用者向过程传入值（传入值可以是字面量或变量）；
- `OUT` 输出参数：表示过程向调用者传出值(可以返回多个值)（传出值只能是变量）；
- `INOUT`输入输出参数：既表示调用者向过程传入值，又表示过程向调用者传出值（值只能是变量）。

存储过程根据参数可分为四种类别：

1).没有参数的过程；

2).只有输入参数的过程；

3).只有输出参数的过程；

4).包含输入和输出参数的过程。

## 变量

MySQL 中的存储过程类似 java 中的方法。

既然如此，在存储过程中也同样可以使用变量。java 中的局部变量作用域是变量所在的方法，而 MySQL 中的局部变量作用域是所在的存储过程。

### 变量定义

```mysql
DECLARE variable_name [,variable_name...] datatype [DEFAULT value];
1
```

- `declare`用于声明变量；

- `variable_name`表示变量名称；

- `datatype`为 MySQL 的数据类型；

- `default`用于声明默认值;

- 例如：

  ```mysql
  declare name varchar(20) default ‘jack’。
  1
  ```

### 变量赋值

```mysql
SET 变量名 = 表达式值 [,variable_name = expression ...]
1
```

在存储过程中使用变量，代码如下所示

```mysql
use schooldb;-- 使用 schooldb 数据库
-- 创建过程
create procedure mypro1()
begin
declare name varchar(20);
set name = '丘处机';
select * from studentinfo where studentname = name;
end;
-- 调用过程
call mypro1();
```

### 流程控制语句

#### if 条件语句

`IF` 语句包含多个条件判断，根据结果为 `TRUE`、`FALSE`执行语句，与编程语言中的 `if`、`else if`、`else` 语法类似。

定义存储过程，输入一个整数，使用 if 语句判断是正数还是负数，代码如下所示：

```mysql
case 条件语句

case是另一个条件判断的语句，类似于编程语言中的 choose、when语法。MySQL 中的 case语句有两种语法
格式。

定义存储过程，输入一个整数，使用 case 语句判断是正数还是负数，代码如下所示：

-- 创建过程
create procedure mypro3(in num int)
begin
case -- 条件开始
when num<0 then select '负数';
when num=0 then select '不是正数也不是负数';
else select '正数';
end case; -- 条件结束
end;
-- 调用过程
call mypro3(1);-- 创建过程
create procedure mypro2(in num int)
begin
if num<0 then -- 条件开始
select '负数';
elseif num=0 then
select '不是正数也不是负数';
else
select '正数';
end if;-- 条件结束
end;
-- 调用过程
call mypro2(-1);
```

定义存储过程，输入一个整数，使用 case 语句判断是 1 还是 2，代码如下所示：

```mysql
-- 创建过程
create procedure mypro4(in num int)
begin
case num -- 条件开始
when 1 then select '数值是 1';
when 2 then select '数值是 2';
else select '不是 1 也不是 2';
end case; -- 条件结束
end;
-- 调用过程
call mypro4(3);
```

> 两种 case 语法都可以实现条件判断，但第一种适合范围值判断，而第二种适合确定值判断。

#### while 循环语句

`while`语句的用法和 `java`中的 `while`循环类似。

定义存储过程，使用 while 循环输出 1 到 10 的累加和，代码如下所示：

```mysql
-- 创建过程
create procedure mypro5(out sum int)
begin
declare num int default 0;
set sum = 0;
while num<10 do -- 循环开始
set num = num+1;
set sum = sum+num;
end while; -- 循环结束
end;
-- 调用过程
call mypro5(@sum);
-- 查询变量值
select @sum;
```

#### repeat 循环语句

`repeat`语句的用法和 `java`中的 `do…while` 语句类似，都是先执行循环操作，再判断条件，区别是 `repeat`表达
 式值为 `false`时才执行循环操作，直到表达式值为 `true`停止。

定义存储过程，使用 repeat 循环输出 1 到 10 的累加和，代码如下所示：

```mysql
-- 创建过程
create procedure mypro6(out sum int)
begin
declare num int default 0;
set sum = 0;
repeat-- 循环开始
set num = num+1;
set sum = sum+num;
until num>=10
end repeat; -- 循环结束
end;
-- 调用过程
call mypro6(@sum);
-- 查询变量值
select @sum;
```

#### loop 循环语句

循环语句，用来重复执行某些语句。

执行过程中可使用 `leave`语句或 `iterate` 跳出循环，也可以嵌套 `IF`等判断语句。

- `leave`语句效果相当于 java 中的 `break`，用来终止循环；
- `iterate`语句效果相当于 java 中的 `continue`，用来结束本次循环操作，进入下一次循环。

定义存储过程，使用 loop 循环输出 1 到 10 的累加和，代码如下所示：

```mysql
-- 创建过程
create procedure mypro7(out sum int)
begin
declare num int default 0;
set sum = 0;
loop_sum:loop-- 循环开始
set num = num+1;
set sum = sum+num;
if num>=10 then
leave loop_sum;
end if;
end loop loop_sum; -- 循环结束
end;
-- 调用过程
call mypro7(@sum);
-- 查询变量值
select @sum;
```

> 代码中的 loop_sum 相当于给循环贴个标签，方便多重循环时灵活操作。

## 存储过程的管理

存储过程的管理主要包括：显示过程、显示过程源码、删除过程。

比较简单的方式就是利用 navicat 客户端工具进行管理，鼠标点击操作即可，如下图所示

### 显示存储过程

```mysql
SHOW PROCEDURE STATUS;
1
```

### 显示特定数据库的存储过程

```mysql
SHOW PROCEDURE status where db = 'schooldb';
1
```

### 显示特定模式的存储过程，要求显示名称中包含“my”的存储过程

```mysql
SHOW PROCEDURE status where name like '%my%';
1
```

### 显示存储过程“mypro1”的源码

```mysql
SHOW CREATE PROCEDURE mypro1;
```

### 删除存储过程“mypro1”

```mysql
drop PROCEDURE mypro1;
```

MySQL执行检索操作会返回一组称为结果集的行，这组返回的行都是与SQL 语句相匹配的行（零行或多行），但是，使用简单的select  语句，没有办法得到第一行、下一行、或前十行，也不存在一行地处理所有行简单方法（也就是成批地处理它们）,而有时，需要在检索出来的行中前进或后退一行或多行，怎么办来，之前了解的很难实现，那么本节的游标就可实现，，

**游标（cursor）**：**一个存储在mysql服务器上数据库查询，它不是一条select 语句，而是被语句检索出来的结果集。**

**好处：**在存储了游标之后，应用程序可以根据需要滚动或浏览其中的数据。

**主要用于:**交互式应用，其中用户需要滚动屏幕上的数据，并对数据进行浏览或做出更改。

**注意:不像多数DBMS，MySQL游标只能用于存储过程和函数。**

**版本：MySQL 5 添加了对游标的支持，要使用的话MySQL版本需要在mysql 5 及以后的版本**

**one、注意使用游标的主要步骤：**

1、在能够使用游标前，必须声明（定义）它。这个过程实际上没有检索数据，他只是使用select 语句。

2、一旦声明后，必须打开游标以供使用。这个过程用前面定义的select  语句把数据实际检索出来

3、对于填有数据游标，根据需要取出（检索）各行。

4、在结束游标使用时，必须关闭游标

在声明游标后，可根据需要频繁地打开和关闭游标。在游标打开后，可根据需要频繁地执行取操作。

**two、创建游标**

游标用declare 语句创建。DECLARE 命名游标，并定义相应地select 语句，根据需要带where 和其他子句。

下面在存储过程中使用declare 定义一个游标,存储过程完成后游标也相应消失。

```sql
-- declare  游标名称 cursor for 查询语句 
 delimiter $$ 
 create procedure proces_orders()      
 begin 
    declare cursor_ornumber cursor for 
      select order_num from orders;     
 end $$
```

 打开和关闭游标

```sql
---  OPEN 游标名；
 open   proces_orders;
```

在处理open 语句时执行查询，存储检索出地数据以供浏览和滚动游标处理后，要关闭游标

```sql
---  CLOSE 游标名； 
close  proces_orders;
```

**close会释放游标使用的所有内部内存和资源，所有游标使用后都要进行关闭操作**

在一个游标关闭后，如果没有重新打开，则不能使用它。但是使用声明过的游标不需要再次声明，使用open 语句打开就行。

**如果不明确的关闭游标，mysql 将会在到达end 语句的时候自动关闭它。**

上述可以修改为：

```sql
mysql> create procedure proces_orders()
    ->  begin
    -> --  创建一个游标
    -> declare cursor_onum cursor for select order_num from orders;
    -> -- 打开这个游标
    -> open cursor_onum;
    -> -- 关闭这个游标
    -> close cursor_onum;
    -> end $$
```

 上述的存储过程声明、打开和关闭一个游标，但对检索出的数据什么也没有做

 **three、使用游标数据  FETCH**

在一个游标被打开后，可以使用 fetch 语句分别访问它的每一行。

**fetch 指定检索什么数据（所需的列），检索出来的数据存储在什么地方。还向前移动游标中的内部指针，使下一条fetch语句检索下一行（避免重复读取一行）。**

```sql
--  从游标中检索单个行（第一行）
create procedure proce_orders()
  begin
 -- 创建一个本地变量
 declare onum int;
 -- 创建一个存储过程
 declare cursor_onum cursor for select order_num from orders;
 -- 打开游标
 open cursor_onum;
 -- 获取当前行（第一行）
 fetch cursor_onum into onum;
 -- 关闭游标
 close cursor_onum;
 end ##
```

fetch 检索当前行的order_num 列（将自动从第一行开始）买到一个名为onum 的局部变量中，对检索出的数据不做任何处理。

```sql
-- 循环检索数据，从第一行到最后一行
create procedure proce_orders()
  begin
 -- 创建两个局部变量 done 的初始值为假的
 declare done boolean default 0;
 declare onum int;

 -- 创建一个游标
 declare cursor_onum cursor for select order_num from orders;
--  当没有行可以循环时  done 为真
declare continue  handler for sqlstate '02000' set done=1;

 -- 打开游标
 open cursor_onum;

-- 遍历所有行
repeat

 --  获取订单号
 fetch cursor_onum into onum;
-- 直到完成结束重复;
until done end repeat;

 -- 关闭这个游标
 close cursor_onum;
 end ##
```

上述使用fetch 检索当前order_num 到声明为onum 的变量中，但是 这个fetch  在repeat 内，因此他会反复执行直到done 为真（由nutil done end repeat ;规定）为使它起作用用一个defaut 0 定义变量 done ，那么done 根据以下代码设置为真

  declare **continue**  **handler** for **sqlstate** '02000' set done=1;

上述，定义了一个**CONTINUE HANDLER（继续处理程序） ,他是在条件出现时执行的代码**，这里是指当SQLSTATE '02000' 出现时，SET done =1.

**SQLSTATE '02000' 是一个未找到条件，当REPEAT 由于没有更多的行供循环而不能继续时出现** 



**four、注意：**

1、declare 语句的发布存在特定的次序，用户declare 语句定义的局部变量必须定义任意游标或句柄之前的定义，而句柄必须在游标之后定义，不遵守此顺序将产生错误信息。

2、如果调用这个存储过程，他将定义几个变量和一个continue handler ，定义并打开一个游标，重复读取所有的行，然后关闭游标。如果一切正常可以在循环内放入任意需要的处理（在fetch 语句之后，循环结束之前）

3、除了repeat 语句外，MySQL 还支持循环语句，它可以用来重复执行代码，直到使用 LEAVE 语句手动退出为止，通常REPEAT 语句的语法使它更适合于对游标进行循环。

##### MySQL 游标

游标的特性

- 不敏感：数据库可以选择不复制结果集
- 只读
- 不滚动：游标只能向一方向前进，并且不可以跳过任何一行数据

游标的优点

- 游标是针对行操作的，对从数据库中 select 查询得到的结果集的 每一行可以

  进行分开的独立的相同或者不相同的操作，是一种分离的思想。

游标的缺点

- 性能不高
- 只能一行一行操作
- 使用游标会产生死锁，造成内存开销大

游标的适用场景

- 存储过程
- 函数
- 触发器
- 事件

##### 游标的操作

 1、游标的定义

 DECLARE 光标名称 CURSOR FOR 查询语法

 declare cursor_name cursor for select_statement

2、打开游标

OPEN 光标名称

open cursor_name

3、取游标中的数据

FETCH 光标名称 INFO var_name [，var_name ].....

fetch cursor_name info var_name

4、关闭游标

CLOSE curso_name;

close 光标名称

5、释放游标

DEALLOCATE 光标名称

deallocate cursor_name;

##### 游标示例

```
create table student(
    stuId int primary key auto_increment,
    stuName varchar(20),
    stuSex varchar(2),
    stuAge int
)default charset=utf8;

insert into student(stuName,stuSex,stuAge) values
('小明','男',20),
('小花','女',19),
('大赤','男',20),
('可乐','男',19),
('莹莹','女',19);
```

```
delimiter //
create procedure p1()
begin
    declare id int;
    declare name varchar(100) character set utf8;
    declare done int default 0;
    -- 声明游标
    declare mc cursor for select stuId,stuName from student where stuAge >19;
    declare continue handler for not found set done = 1;
    -- 打开游标
    open mc;
    -- 获取结果
    fetch mc into id,name;
    -- 这里是为了显示获取结果
    select id,name;
    -- 关闭游标
    close mc;
end //
delimiter ;
```

```
试使用 三种方式 使用游标创建一个存储过程，统计年龄大于19的记录的数量
Loop循环

-- 定义语法结束符号
delimiter //
-- 创建一个 名称为 p2 的存储过程
create procedure p2()
begin
    -- 创建 用于接收游标值的变量
    declare id,age,total int;
    -- 注意 接收游标值为中文时 需要 给变量 指定 字符集为utf8
    declare name,sex varchar(20) character set utf8;
    
    -- 游标结束的标志
    declare done int default 0;
    -- 声明游标
    declare cur cursor for select stuId,stuName,stuSex,stuAge from student where stuAge > 19;
    -- 指定游标循环结束时的返回值 
    declare continue handler for not found set done =1;
    -- 打开游标
    open cur;
    
    -- 初始化 变量
    set total = 0;
    
    -- loop 循环
    xxx:loop
        -- 根据游标当前指向的一条数据  
        fetch cur into id,name,sex,age;
        -- 当 游标的返回值为 1 时 退出 loop循环 
        if done = 1 then
            leave xxx;
        end if;
        -- 累计
        set total = total + 1;
    end loop;
    -- 关闭游标
    close cur;
    -- 输出 累计的结果
    select total;
end //
delimiter ;
```

##### while 循delimiter /-- 创建一个 名称为 p3 的存储过程***create procedure p3()***

```
delimiter //
-- 创建一个 名称为 p3 的存储过程
create procedure p3()
begin
    -- 创建 用于接收游标值的变量
    declare id,age,total int;
    -- 注意 接收游标值为中文时 需要 给变量 指定 字符集为utf8
    declare name,sex varchar(20) character set utf8;
    -- 游标结束的标志
    declare done int default 0;
    -- 声明游标
    declare cur cursor for select stuId,stuName,stuSex,stuAge from student where stuAge > 19;
    -- 指定游标循环结束时的返回值 
    declare continue handler for not found set done = 1;
    -- 打开游标
    open cur;
    
    -- 初始化 变量
    set total = 0;
    
    -- while 循环
    while done != 1 do
        fetch cur into id,name,sex,age;
          if done != 1 then
             set total = total + 1;
          end if;    
    end while;
    -- 关闭游标
    close cur;
    -- 输出 累计的结果
    select total;
end //
delimiter ;
```

##### repeat 循环

```
delimiter //
-- 创建一个 名称为 p3 的存储过程
create procedure p3()
begin
    -- 创建 用于接收游标值的变量
    declare id,age,total int;
    -- 注意 接收游标值为中文时 需要 给变量 指定 字符集为utf8
    declare name,sex varchar(20) character set utf8;
    -- 游标结束的标志
    declare done int default 0;
    -- 声明游标
    declare cur cursor for select stuId,stuName,stuSex,stuAge from student where stuAge > 19;
    -- 指定游标循环结束时的返回值 
    declare continue handler for not found set done = 1;
    -- 打开游标
    open cur;
    
    -- 初始化 变量
    set total = 0;
    
    -- repeat 循环
    repeat
        fetch cur into id,name,sex,age;
           if done != 1 then
              set total = total + 1;
           end if;
        until done = 1
    end repeat;
    -- 关闭游标
    close cur;
    -- 输出 累计的结果
    select total;
end //
delimiter ;
```

 while 循环 repeat 循环 不知道 是不是理解错了 会多循环一次…(还是游标多走了一次…) ---->  进行累加计算时，先判断游标的结束标志（done） 是否是为

# 【用法】

  一、声明一个游标: declare 游标名称 CURSOR for table;(这里的table可以是你查询出来的任意集合)
  二、打开定义的游标:open 游标名称;
  三、获得下一行数据:FETCH  游标名称 into testrangeid,versionid;
  四、需要执行的语句(增删改查):这里视具体情况而定
  五、释放游标:CLOSE 游标名称;
 注:mysql存储过程每一句后面必须用;结尾，使用的临时字段需要在定义游标之前进行声明。

# 【实例】

```
-  
BEGIN  
  
--定义变量  
declare testrangeid BIGINT;  
declare versionid BIGINT;   
declare done int;  
--创建游标，并存储数据  
declare cur_test CURSOR for   
   select id as testrangeid,version_id as versionid from tp_testrange;  
--游标中的内容执行完后将done设置为1  
 DECLARE CONTINUE HANDLER FOR NOT FOUND SET done=1;   
--打开游标  
open cur_test;  
--执行循环  
  posLoop:LOOP  
--判断是否结束循环  
        IF done=1 THEN    
      LEAVE posLoop;  
    END IF;   
--取游标中的值  
    FETCH  cur_test into testrangeid,versionid;  
--执行更新操作  
    update tp_data_execute set version_id=versionid where testrange_id = testrangeid;  
  END LOOP posLoop;  
--释放游标  
CLOSE cur_test;  
  
END  
-
```

```
--在windows系统中写存储过程时，如果需要使用declare声明变量，需要添加这个关键字，否则会报错。  
delimiter //  
drop procedure if exists StatisticStore;  
CREATE PROCEDURE StatisticStore()  
BEGIN  
    --创建接收游标数据的变量  
    declare c int;  
    declare n varchar(20);  
    --创建总数变量  
    declare total int default 0;  
    --创建结束标志变量  
    declare done int default false;  
    --创建游标  
    declare cur cursor for select name,count from store where name = 'iphone';  
    --指定游标循环结束时的返回值  
    declare continue HANDLER for not found set done = true;  
    --设置初始值  
    set total = 0;  
    --打开游标  
    open cur;  
    --开始循环游标里的数据  
    read_loop:loop  
    --根据游标当前指向的一条数据  
    fetch cur into n,c;  
    --判断游标的循环是否结束  
    if done then  
        leave read_loop;    --跳出游标循环  
    end if;  
    --获取一条数据时，将count值进行累加操作，这里可以做任意你想做的操作，  
    set total = total + c;  
    --结束游标循环  
    end loop;  
    --关闭游标  
    close cur;  
  
    --输出结果  
    select total;  
END;  
--调用存储过程  
call StatisticStore();
```

fetch是获取游标当前指向的数据行，并将指针指向下一行，当游标已经指向最后一行时继续执行会造成游标溢出。
使用loop循环游标时，他本身是不会监控是否到最后一条数据了，像下面代码这种写法，就会造成死循环；

```
read_loop:loop  
fetch cur into n,c;  
set total = total+c;  
end loop;  
```



在MySql中，造成游标溢出时会引发mysql预定义的NOT FOUND错误，所以在上面使用下面的代码指定了当引发not found错误时定义一个continue 的事件，指定这个事件发生时修改done变量的值。

```
declare continue HANDLER for not found set done = true;  
```

所以在循环时加上了下面这句代码：

```
--判断游标的循环是否结束  
if done then  
    leave read_loop;    --跳出游标循环  
end if;  
```

如果done的值是true，就结束循环。继续执行下面的代码

使用方式

游标有三种使用方式：
第一种就是上面的实现，使用loop循环；
第二种方式如下，使用while循环：

```
drop procedure if exists StatisticStore1;  
CREATE PROCEDURE StatisticStore1()  
BEGIN  
    declare c int;  
    declare n varchar(20);  
    declare total int default 0;  
    declare done int default false;  
    declare cur cursor for select name,count from store where name = 'iphone';  
    declare continue HANDLER for not found set done = true;  
    set total = 0;  
    open cur;  
    fetch cur into n,c;  
    while(not done) do  
        set total = total + c;  
        fetch cur into n,c;  
    end while;  
      
    close cur;  
    select total;  
END;  
  
call StatisticStore1();
```

```
drop procedure if exists StatisticStore2;  
CREATE PROCEDURE StatisticStore2()  
BEGIN  
    declare c int;  
    declare n varchar(20);  
    declare total int default 0;  
    declare done int default false;  
    declare cur cursor for select name,count from store where name = 'iphone';  
    declare continue HANDLER for not found set done = true;  
    set total = 0;  
    open cur;  
    repeat  
    fetch cur into n,c;  
    if not done then  
        set total = total + c;  
    end if;  
    until done end repeat;  
    close cur;  
    select total;  
END;  
  
call StatisticStore2();
```

### 游标嵌套

在mysql中，每个begin end 块都是一个独立的scope区域，由于MySql中同一个error的事件只能定义一次，如果多定义的话在编译时会提示Duplicate handler declared in the same block。

```
drop procedure if exists StatisticStore3;  
CREATE PROCEDURE StatisticStore3()  
BEGIN  
    declare _n varchar(20);  
    declare done int default false;  
    declare cur cursor for select name from store group by name;  
    declare continue HANDLER for not found set done = true;  
    open cur;  
    read_loop:loop  
    fetch cur into _n;  
    if done then  
        leave read_loop;  
    end if;  
    begin  
        declare c int;  
        declare n varchar(20);  
        declare total int default 0;  
        declare done int default false;  
        declare cur cursor for select name,count from store where name = 'iphone';  
        declare continue HANDLER for not found set done = true;  
        set total = 0;  
        open cur;  
        iphone_loop:loop  
        fetch cur into n,c;  
        if done then  
            leave iphone_loop;  
        end if;  
        set total = total + c;  
        end loop;  
        close cur;  
        select _n,n,total;  
    end;  
    begin  
            declare c int;  
            declare n varchar(20);  
            declare total int default 0;  
            declare done int default false;  
            declare cur cursor for select name,count from store where name = 'android';  
            declare continue HANDLER for not found set done = true;  
            set total = 0;  
            open cur;  
            android_loop:loop  
            fetch cur into n,c;  
            if done then  
                leave android_loop;  
            end if;  
            set total = total + c;  
            end loop;  
            close cur;  
        select _n,n,total;  
    end;  
    begin  
      
    end;  
    end loop;  
    close cur;  
END;  
  
call StatisticStore3();
```

上面就是实现一个嵌套循环，当然这个例子比较牵强。凑合看看就行。

### 动态SQL

Mysql 支持动态SQL的功能

```
set @sqlStr='select * from table where condition1 = ?';  
prepare s1 for @sqlStr;  
--如果有多个参数用逗号分隔  
execute s1 using @condition1;  
--手工释放，或者是 connection 关闭时， server 自动回收  
deallocate prepare s1;  
```



# 一、什么是[触发器](https://so.csdn.net/so/search?q=触发器&spm=1001.2101.3001.7020)

   当我们对一个表进行数据操作时，需要同步对其它的表执行相应的操作，正常情况下，如果我们使用sql语句进行更新，将需要执行多条操作语句！

  触发器（TRIGGER）是由事件来触发某个操作。这些事件包括INSERT语句、UPDATE语句和DELETE语句。当数据库系统执行这些事件时，就会激活触发器执行相应的操作。MySQL从5.0.2版本开始支持触发器。

# 

# 二、创建触发器

  在MySQL中创建触发器通过SQL语句CREATE TRIGGER来实现，其语法形式如下：

```sql
CREATE trigger trigger_name BEFORE|AFTER trigger_EVENT     



ON TABLE_NAME FOR EACH ROW trigger_STMT 
```

```sql
CREATE trigger trigger_name BEFORE|AFTER trigger_EVENT     



ON TABLE_NAME FOR EACH ROW trigger_STMT 
```

> - 参数trigger_name表示要创建的触发器名；
> - 参数BEFORE和AFTER指定了触发器执行的时间，前者在触发器事件之前执行触发器语句，后者在触发器事件之后执行触发器语句；
> - 参数trigger_EVENT表示触发事件，即触发器执行条件（触发事件），包含DELETE、INSERT和UPDATE语句；
> - 参数TABLE_NAME表示触发事件的操作表名；
> - 参数FOR EACH ROW表示任何一条记录上的操作满足触发事件都会触发该触发器；
> - 参数trigger_STMT（sql语句）表示激活触发器后被执行的语句。执行语句中如果要引用更新记录中的字段，对于INSERT语句，只有NEW是合法的，表示当前已插入的记录；对于DELETE语句，只有OLD才合法，表示当前删除的记录；而UPDATE语句可以和NEW（更新后）以及OLD（更新前）同时使用。
>
> ***\*注意：\****
>
> 1. **不能创建具有相同名字的触发器。**
> 2. **对于具有相同触发程序动作时间和事件的给定表，不能有两个触发器（比如after insert插入之后有一个触发器那么就不能再有触发器是after的了，但是before insert是可以的）。**
>
> 因此，在创建触发器之前，需要查看MySQL中是否已经存在该标识符的触发器和触发器的相关事件。 

  例如，对下面的class班级表和student学生表之间创建触发器，要求当student表中插入学生数据时，班级表同步更新班级人数：

## ①创建一个insert事件触发器

  对于insert事件，使用new才表示插入的记录，因此这里要使用class.id=new.class_id; 

```sql
create trigger tri_insert_student after insert 



    on student for each row 



    update class set count=count+1 where class.id=new.class_id;
```

   插入一些记录

```sql
insert into student 



    values(1,'小花',101,'M'),



          (2,'小红',102,'F'),



          (3,'小军',102,'F'),



          (4,'小白',101,'F');
```

  class表的count字段也跟着跟新了。

## ②创建一个delete 事件触发器 

  对于delete事件，使用old才表示删除的记录

```sql
create trigger tri_delete_student after delete 



on student for each row update class set count=count-1 where old.class_id=class.id;
```

  删除一条记录

# ***\*三、触发器包含多条执行语句\****

```sql
CREATE   trigger trigger_name BEFORE|AFTER trigger_EVENT     



ON TABLE_NAME FOR EACH ROW                                 



    BEGIN                                                        



        trigger_STMT                                                 



    END; 
```

  在上述语句中，比“只有一条执行语句的触发器”语法多出来两个关键字BEGIN和END，在这两个关键字之间是所要执行的多个执行语句的内容，执行语句之间用分号隔开。

  在MySQL中，一般情况下用“;”符号作为语句的结束符号，可是在创建触发器时，需要用到“;”符号作为执行语句的结束符号。为了解决该问题，可以使用关键字DELIMITER语句。例如，"DELIMITER $'$"可以将结束符号设置成“$$”。

  例如，再添加一张如下的score表，每次student表增删时同步到score表和class表

```sql
DELIMITER $$   #将分号“；”声明为“$$”                                                            



create trigger tri_delete_student after delete on student for each row 



    BEGIN                                    



        Delete from grade where id = OLD.id;  #删除成绩表中的记录                                                        



        update class set count=count-1 where id = OLD.class_id; #更新班级表中的记录   



    END; #分号要有                                   



$$                                       



DELIMITER ;  #再将分号声明回来
```

# ***\*四、查看触发器\**** 

### ***\*①SHOW TRIGGERS语句查看触发器\****

  查看MySQL软件中已经存在的触发器。在MySQL软件中查看已经存在的触发器，通过SQL语句SHOW 语句来实现，其语法形式如下：

```sql
SHOW TRIGGERS ;
```

### ***\*②查看系统表triggers实现查看触发器\**** 

  在MySQL中，在系统数据库information_schema中存在一个存储所有触发器信息的系统表triggers，因此查询该表格的记录也可以实现查看触发器功能。系统表triggers的表结构

```sql
use information_schema;   #选择数据库information_schema                  



select * from triggers;                                                        



select * from triggers where trigger_name='tri_delete_student'; #查询系统表triggers中的触发器   
```



# ***\*五、触发器的删除\**** 

在MySQL中，删除触发器可以通过SQL语句DROP TRIGGER来实现，其语法形式如下： 

```sql
DROP TRIGGER trigger_name; 
```

> - 参数trigger_name表示所要删除的触发器名称。

## 1. 课前题目

给student表建立一个credit 学分列，记载每个同学已经获得的学分（学习的课程大于60分才算获得学分,每门课程学分在course表中有)
 写一个存储过程p_c,输入班级号，可以重新计算该班级中的同学已经获得的学分并更新在对应的credit上。

```mysql
#新增一个列
alter table student add credit int;

#先找出你输入班级对应的学生,根据这些学生找出他们大于成绩60分的课程号。
#将学号、课程号和成绩用游标遍历，

CREATE PROCEDURE p_c(IN cid VARCHAR(20))
BEGIN
	DECLARE coid,sid VARCHAR(20);
	DECLARE gra int;
	DECLARE done boolean DEFAULT true;
	DECLARE cur CURSOR FOR
		SELECT studentid,courseid,grade
		FROM grade
		WHERE studentid IN(
			SELECT studentid
			FROM student
			WHERE classid = cid
		) AND grade>=60;
	DECLARE CONTINUE HANDLER FOR NOT found SET done = false;
	#学分初始值要清零而不是让它为null,因为null和数值相加依然为null。
	#修改学分一定要满足课程和学号的值确定。
	UPDATE student SET credit = 0 
	WHERE studentid 
	IN(SELECT studentid FROM 
	#为什么要加一个中间临时表？因为在MYSQL里，不能先select一个表的记录，在按此条件进行更新和删除同一个表的记录，
		(SELECT * FROM student)a 
		WHERE ClassID = cid);

	OPEN cur;
	FETCH cur INTO sid,coid,gra;
	while done Do
		UPDATE student SET credit = credit+(
				SELECT credit
				FROM	course 
				WHERE courseid = coid)	WHERE StudentID = sid;
		FETCH cur INTO sid,coid,gra;
	END while;
	CLOSE cur;
END;

CALL p_c('Cs010902');
```

## 2. 触发器定义

同存储过程和函数类似，MySQL中的触发器也是存储在系统内部的一段程序代码，可以把它看作是一个特殊的存储过程。所不同的是，触发器无需人工调用，当程序满足定义条件时就会被MySQL自动调用。这些条件可以称为触发事件，包括[INSERT](https://so.csdn.net/so/search?q=INSERT&spm=1001.2101.3001.7020)、UPDATE和DELETE操作。

## 3. 创建触发器语法

```mysql
CREATE TRIGGER trigger_name trigger_time trigger_event

ON table_name FOR EACH ROW 

trigger_body

trigger_time：触发器触发时机，有before和after

trigger_event：触发器触发事件，有insert,update,delete三种

trigger_body：触发器主体语句
1234567891011
```

从MySQL5.7开始，可以为一张表定义具有相同触发事件和触发时机的多个触发器。默认情况下，具有相同触发事件和触发时机的触发器按其创建顺序激活。

## 4. 触发器

### 4.1 after触发器

AFTER触发器是指触发器监视的触发事件执行之后，再激活触发器，激活后所执行的操作无法影响触发器所监视的事件。

#### 4.1.1 delete触发器

建一个触发器t_d_s，当删除表student中某个学生的信息时，同时将grade表中与该学生有关的数据全部删除。

```mysql
CREATE TRIGGER trigger_t1
AFTER DELETE ON student
FOR EACH ROW
BEGIN 
	DELETE FROM grade WHERE studentid = old.studentid;
END
123456
```

#### 4.1.2 new和old

触发器不会产生new表和old表，所谓new，old只是指insert,delete,update操作执行前的所在表状态和执行后的状态

对insert而言，只有new合法，新插入的行用new来表示，行中每一列的值用new.列名来表示

对于delete而言，只有old合法，删除的行用old来表示，行中每一列的值用old.列名来表示

对于update而言，被修改的行，修改前的数据，用old来表示，old.列名；修改后的数据，用new来表示，new.列名

#### 4.1.3 UPDATE

创建一触发器t_u_s，实现在更新学生表的学号时，同时更新grade表中的相关记录的studentid值。

```mysql
CREATE TRIGGER t_u_s
AFTER UPDATE ON student
for EACH ROW
BEGIN
	UPDATE grade SET studentid = new.studentid WHERE studentid = old.studentid;
END
123456
```

#### 4.1.4 INSERT

1. 创建一个存储过程，根据student表中数据，一次性更新class表中每个班的人数

```mysql
CREATE PROCEDURE p_tao()
BEGIN
	DECLARE num int;
	DECLARE cid VARCHAR(20);
	DECLARE done boolean DEFAULT true;
	DECLARE cur CURSOR FOR
		SELECT classid,COUNT(*)
		FROM student
		GROUP BY classid;	
	DECLARE CONTINUE HANDLER FOR NOT found SET done = false;
	
	UPDATE class set studentnum = 0;
	OPEN cur;
	FETCH cur INTO cid,num;
	WHILE	done DO		
		UPDATE class SET StudentNum = num WHERE classid = cid;	
		FETCH cur INTO cid,num;	
	END WHILE;
	CLOSE cur;
END

CALL p_tao();
```

1. 创建一个触发器t_i_s，当student表插入新学生时，class表中该班级人数加1

```mysql
CREATE TRIGGER t_i_s
AFTER INSERT
ON student
for EACH ROW
BEGIN
	UPDATE class SET studentnum = studentnum + 1 WHERE classid = new.classid;
END;
```

### 4.2 before触发器

BEFORE触发器是指触发器在所监视的触发事件执行之前激活，激活后执行的操作先于监视的事件，这样就有机会进行一些判断，或修改即将发生的操作。

Before与After区别：

before：(insert、update)可以对new进行修改，after不能对new进行修改，三者都不能修改old数据。

#### 4.2.1 INSERT

给teacher表创建一个列， salary列，记录教师的工资

建一个触发器t_d_t，插入教师信息时，如果教师工资小于3000，则自动调整成3000

```mysql
#给teacher表创建一个列， salary列，记录教师的工资
ALTER table teacher ADD salary int;
#建一个触发器tdt，插入教师信息时，如果教师工资小于3000，则自动调整成3000
CREATE TRIGGER tdt 
BEFORE INSERT 
ON teacher
for each ROW
BEGIN
	if new.salary <3000 THEN SET new.salary = 3000;
  END if;
END;

INSERT INTO teacher(TeacherID,Teachername,sex,salary) VALUES('123','位老师','女',2999);
INSERT INTO teacher(TeacherID,Teachername,sex,salary) VALUES('124','文老师','男',3001);
```

#### 4.2.2 UPDATE

给grade表建立一个学分列，并创建一个触发器，当修改grade表中数据时，如果修改后的成绩小于60分，则触发器将该成绩对应的课程学分修改为0，否则将学分改成对应课程的学分

```mysql
ALTER TABLE grade ADD credit int;

CREATE TRIGGER trigger_ch 
BEFORE UPDATE
ON grade
FOR EACH ROW
BEGIN
	IF new.grade<60	THEN SET new.credit = 0;
	ELSE SET new.credit = (
		SELECT credit
		FROM coure
		WHERE courseid = new.courseid
	);
	END if;
END

UPDATE grade SET grade = 50 WHERE courseid ="Dp010001" AND studentid = "St0109010003"
```

## 5. 中断触发器

假设软件B1802班级最多只能有4个人，当往b_student表中增加新生信息时，b_class班级表内学生人数会随之增加，当人数大于4人时，由于超过人数限制，会报系统错误，错误提示为“超过人数限制”，并且该触发器所有操作（包括引发触发器的操作）均不能成功。

```mysql
#创建b_classs表存放班级人数，如果班级人数大于4就提示"超出人数限制"
CREATE TABLE B_class(
	Cid VARCHAR(20) PRIMARY KEY  COMMENT "班级名称",
	num int COMMENT "人数"
);
#插入初始数值，初始数值软件B1802班没有人
INSERT INTO b_class VALUES("软件B1802",0);


#创建一个b_student表存放学生信息
CREATE TABLE b_student(
	studentid VARCHAR(20) PRIMARY KEY COMMENT "学号",
	studentname VARCHAR(20) not null COMMENT "姓名",
	classid VARCHAR(20)  DEFAULT '软件B1802' COMMENT "班级",
	CONSTRAINT FK_ID FOREIGN KEY(classid) REFERENCES B_class(Cid)
	ON DELETE RESTRICT on UPDATE CASCADE
)DEFAULT CHARSET = utf8;


#要注意的是，我们在插入学生信息的时候，我们要使用触发器来更新班级表中的人数，不然尽管你在学生信息表插入多条数据，班级表中的人数会一直保持不表，也就不会出现超出人数限制的情况。
CREATE TRIGGER add_trigger
AFTER INSERT
ON b_student
for EACH ROW
BEGIN
	UPDATE b_class SET num = num + 1 WHERE Cid = new.classid;
END;


#创建抛出自定义异常的触发器，当插入学生人数超过4人时，就会抛出异常。
CREATE TRIGGER exception BEFORE INSERT ON b_student for each row
BEGIN
	DECLARE number int;
	SELECT num INTO number from b_class WHERE cid = new.classid;
	if number = 4  THEN	SIGNAL SQLSTATE '45000'	
	SET message_text = '超出人数限制',MYSQL_ERRNO = 1333;	
	END if;
END;

INSERT INTO b_student(studentid,studentname) VALUES('238','位傲气'),('239','阮氏问'),('240','王陇镇'),('250','周志豪');


INSERT INTO b_student(studentid,studentname) VALUES('241','刘洋');
```

`SQL` 检索操作返回结果集，如果简单地使用 `SELECT` 语句，没有办法得到第一行、下一行或前 10 行。有时，需要在检索出来的行中前进或后退一行或多行，这就是游标的用途所在。游标（`cursor`）是一个存储在 `DBMS` 服务器上的数据库查询， 它不是一条 `SELECT` 语句，而是被该语句检索出来的结果集。在存储了 游标之后，应用程序可以根据需要滚动或浏览其中的数据。



### 使用游标

游标使用的步骤：

- 在使用游标前，必须声明（定义）它。这个过程实际上没有检索数据， 它只是定义要使用的 `SELECT` 语句和游标选项。
- 一旦声明，就必须打开游标以供使用。这个过程用前面定义的 `SELECT` 语句把数据实际检索出来。
- 对于填有数据的游标，根据需要取出（检索）各行。
- 在结束游标使用时，必须关闭游标，可能的话，释放游标。

声明游标后，可以根据需要频繁地 **打开或关闭** 游标。在游标打开时，可根据需要频繁地执行 **取** 操作。

注意：不像多数DBMS，MySQL游标只能用于存储过程（和函数）。



### 创建游标

使用 `DECLEAR` 来创建游标，`DECLARE` 命名游标，并定义相应的 `SELECT` 语句，根据需要带 `WHERE` 和 其他子句。

下面的语句定义了名为 `ordernumbers` 的游标，使用了可以检索所有订单的 `SELECT` 语句。

```
DROP PROCEDURE IF EXISTS processorder;
CREATE PROCEDURE processorder()
BEGIN
	-- 定义游标
	DECLARE ordernumbers CURSOR
	FOR
	SELECT order_num FROM orders;
END;

作者：Dream丶Killer
链接：https://juejin.cn/post/7068639568257351687
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```



使用 `OPEN` 语句来打开游标，`CLOSE` 语句关闭游标，在一个游标被打开后，可以使用 `FETCH` 语句分别访问它的每一行。`FETCH` 指定检索的数据（所需的列），数据存储的位置（定义的变量）。 它还向前移动游标中的内部行指针，使下一条 `FETCH` 语句检索下一行（不重复读取同一行）。

```
DROP PROCEDURE IF EXISTS processorder;
CREATE PROCEDURE processorder()
BEGIN
    -- 定义局部变量
    DECLARE num INT;
    -- 定义游标
    DECLARE ordernumbers CURSOR
    FOR
    SELECT order_num FROM orders;
    -- 打开游标
    OPEN ordernumbers;
    -- 获取第一行数据
    FETCH ordernumbers INTO num;
    -- 查询结果
    SELECT num;
    -- 关闭游标
    CLOSE ordernumbers;
END;
CALL processorder();
```

其中 `FETCH` 用来检索当前行的 `order_num` 列（将自动从第一行开始）到一个名为 `num` 的局部变量中，并将查询 `num` 的结果。由于只检索到第一行，所以 `num` 的值为 '20005'。

下面，循环检索数据，从第一行到最后一行。

```
DROP PROCEDURE IF EXISTS processorder;
CREATE PROCEDURE processorder()
BEGIN
	-- 定义局部变量
	DECLARE done BOOLEAN DEFAULT false;
	DECLARE num INT;
	-- 定义游标
	DECLARE ordernumbers CURSOR
	FOR
	SELECT order_num FROM orders;
	-- 定义CONTINUE HANDLER
	DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done=true;
	-- 打开游标
	OPEN ordernumbers;
	-- 循环所有行
	REPEAT
		-- 获取第一行数据
		FETCH ordernumbers INTO num;
	-- 结束循环
	UNTIL done END REPEAT;
	-- 查询结果
	SELECT num;
	-- 关闭游标
	CLOSE ordernumbers;
END;
CALL processorder();
复制代码
```

循环了结果集的所有行，所以 `num` 的值是最后一行的数据。

与上一个例子不同之处是，这个例子的 `FETCH` 是在 `REPEAT` 内，因此它反复执行直到 `done` 为真。

> DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done=true;

这条语句定义了一个 `CONTINUE HANDLER`，它是在条件出现时被执行的代码。这里，它指出当 `SQLSTATE '02000'` 出现时，`SET done=true`。`SQLSTATE '02000'`是一个未找到条件，当 `REPEAT` 由于没有更多的行供循环而不能继续时，出现这个条件。

### 游标的优缺点

**优点**：游标是面向集合与面向行的设计思想之间的一种桥梁，因为游标是针对行操作的，所以对从数据库中 `SELECT` 查询得到的每一行可以进行分开的独立的相同或不同的操作，是一种分离的思想。可以满足对某个结果行进行特殊的操作。如基于游标位置的增删改查能力。

**缺点**：

- 速度较慢
- 会产生死锁现象
- 内存大

### 1、隐藏索引

隐藏索引的特性对于性能调试非常有用。在 8.0 中，索引可以被“隐藏”和“显示”。当一个索引隐藏时，它不会被查询优化器所使用。

也就是说，我们可以隐藏一个索引，然后观察对数据库的影响。如果数据库性能有所下降，就说明这个索引是有用的，于是将其“恢复显示”即可；如果数据库性能看不出变化，说明这个索引是多余的，可以删掉了。

隐藏一个索引的语法是：

```javascript
ALTER TABLE t ALTER INDEX i INVISIBLE;
```

复制

恢复显示该索引的语法是：

```javascript
ALTER TABLE t ALTER INDEX i VISIBLE;
```

复制

当一个索引被隐藏时，我们可以从 show index 命令的输出中看到，该索引的 Visible 属性值为 NO。

>    ❝   注意：当索引被隐藏时，它的内容仍然是和正常索引一样实时更新的，这个特性本身是专门为优化调试使用。如果你长期隐藏一个索引，那还不如干脆删掉，因为毕竟索引的存在会影响插入、更新和删除的性能。   ❞  

### 2、设置持久化

MySQL 的设置可以在运行时通过 SET GLOBAL 命令来更改，但是这种更改只会临时生效，到下次启动时数据库又会从配置文件中读取。

MySQL 8 新增了 SET PERSIST 命令，例如：

```javascript
SET PERSIST max_connections = 500;
```

复制

MySQL 会将该命令的配置保存到数据目录下的 mysqld-auto.cnf 文件中，下次启动时会读取该文件，用其中的配置来覆盖缺省的配置文件。

### 3、UTF-8 编码

从 MySQL 8 开始，数据库的缺省编码将改为 utf8mb4，这个编码包含了所有 emoji 字符。多少年来我们使用 MySQL 都要在编码方面小心翼翼，生怕忘了将缺省的 latin 改掉而出现乱码问题。从此以后就不用担心了。

### 4、通用表表达式（Common Table Expressions）

复杂的查询会使用嵌入式表，例如：

```javascript
SELECT t1.*, t2.* FROM 
  (SELECT col1 FROM table1) t1,
  (SELECT col2 FROM table2) t2;
```

复制

而有了 CTE，我们可以这样写：

```javascript
WITH
  t1 AS (SELECT col1 FROM table1),
  t2 AS (SELECT col2 FROM table2)SELECT t1.*, t2.* 
FROM t1, t2;
```

复制

这样看上去层次和区域都更加分明，改起来也更清晰的知道要改哪一部分。

关于 CTE 的更详细介绍请看：`https://dev.mysql.com/doc/refman/8.0/en/with.html`

### 5、窗口函数（Window Functions）

MySQL 被吐槽最多的特性之一就是缺少 rank() 函数，当需要在查询当中实现排名时，必须手写 @ 变量。但是从 8.0 开始，MySQL 新增了一个叫窗口函数的概念，它可以用来实现若干新的查询方式。

窗口函数有点像是 SUM()、COUNT() 那样的集合函数，但它并不会将多行查询结果合并为一行，而是将结果放回多行当中。也就是说，窗口函数是不需要 GROUP BY 的。

假设我们有一张 “班级学生人数” 表：

```javascript
mysql> select * from classes;
+--------+-----------+
| name   | stu_count |
+--------+-----------+
| class1 |        41 |
| class2 |        43 |
| class3 |        57 |
| class4 |        57 |
| class5 |        37 |
+--------+-----------+
5 rows in set (0.00 sec)
```

复制

如果我要对班级人数从小到大进行排名，可以这样利用窗口函数：

```javascript
mysql> select *, rank() over w as `rank` from classes
    -> window w as (order by stu_count);
+--------+-----------+------+
| name   | stu_count | rank |
+--------+-----------+------+
| class5 |        37 |    1 |
| class1 |        41 |    2 |
| class2 |        43 |    3 |
| class3 |        57 |    4 |
| class4 |        57 |    4 |
+--------+-----------+------+
5 rows in set (0.00 sec)
```

复制

在这里我们创建了名为 w 的 window，规定它对 stu_count 字段进行排序，然后在 select 子句中对 w 执行 rank() 方法，将结果输出为 rank 字段。

其实，window 的创建是可选的。例如我要在每一行中加入学生总数，则可以这样：

```javascript
mysql> select *, sum(stu_count) over() as total_count
    -> from classes;
+--------+-----------+-------------+
| name   | stu_count | total_count |
+--------+-----------+-------------+
| class1 |        41 |         235 |
| class2 |        43 |         235 |
| class3 |        57 |         235 |
| class4 |        57 |         235 |
| class5 |        37 |         235 |
+--------+-----------+-------------+
5 rows in set (0.00 sec)
```

复制

这样做有什么用呢？这样我们就可以一次性将每个班级的学生人数占比查出来了：

```javascript
mysql> select *,
    -> (stu_count)/(sum(stu_count) over()) as rate
    -> from classes;
+--------+-----------+--------+
| name   | stu_count | rate   |
+--------+-----------+--------+
| class1 |        41 | 0.1745 |
| class2 |        43 | 0.1830 |
| class3 |        57 | 0.2426 |
| class4 |        57 | 0.2426 |
| class5 |        37 | 0.1574 |
+--------+-----------+--------+
5 rows in set (0.00 sec)
```

> 在开发中，除了可以在脚本代码中控制开发者对MySQL数据库数据表的权限，还可以在mysql层面进行控制。
>
>  
>
> 对mysql的权限的控制可以大致分为三个层面：①连接上允不允许（是否能登录到mysql服务器）②数据库层面上：允许用户操作哪些数据库③数据标层面上：允许用户操作哪些表，并可以定义对表的操作权限：比如[insert](https://so.csdn.net/so/search?q=insert&spm=1001.2101.3001.7020)，create，update等。如果还觉得不够精细，MySQL还可以精确到对某表某列控制操作权限。
>
>  
>
> ①连接到数据库的权限：我们在安装MySQL的过程中，会有一个会话定义你的用户名和密码，这里我用的是root和123456，这个用户名，是最开始连接到MySQL的用户，那么该怎么查看MySQL的用户信息呢？我们用root和123456连接到MySQL之后，show databases;可以看到有很多数据库

use mysql;使用mysql那个数据库，在这个数据库里，可以看到两个表：user表，db表和table_priv。

> 用select *from db\G 可以从db表中看到哪些用户拥有对哪些数据库的权限。查看tables_priv可以查看用户拥有哪些表的操作权限。
>
>  
>
> 查看user表则可以看到能登录到MySQL的用户信息：（以下的user表均指的是mysql库下的user表）
>
>  

```sql
select host,user,password from user;
```

> 正确的定义方法是
>
>  

```cobol
grant [权限1，权限2...] on 某库.某表 to 新用户名@'主机名/IP地址' identified by '密码';
```

 

我们可以定义一个用户并让他拥有所有库，所有表的所有增删改查等操作权限，语句如下：

 

```cobol
grant all on *.* to hehe@'localhost' identified by '123456';
```

>  
>
> 如果要删除这个用户，用delete语句就可以了。
>
>  
>
> ②库权限的控制：我们可以定义用户可以操作的库，只需要在上面的语句中，改各参数即可，你可能已经猜到了：上面语句中的"某库"修改成对应的库名即可。例如，给hehe用户赋予操作test库的所有权限：
>
>  

```cobol
grant all on test.* to hehe@'localhost' identified by '123456';
```

 

③精细到对表的权限的控制：改一下"某表"和"权限X"就可以了。例如：定义给用户hehe操作test库的goods表的insert，select，update的权限，代码如下：

 

 

```cobol
grant insert,select,update on test.goods to hehe@'localhost' identified by '123456';
```

 

最后，怎样回收用户的库级和表级权限呢？语法如下：

```cobol
revoke [权限1，权限2...] on 某库.某表 from 用户名@'主机名/IP';
```

 

例如：回收用户hehe对test库的所有表的update的权限：

```cobol
revoke update on test.* from hehe@'localhost';
```

# 数据库MySQL之如何查看表?

------

## 查看数据表列表语法

```sql
SHOW TABLES [FROM db_name] [LIKE 'pattern' | WHERE expr]
1
```



### 1. 查看当前数据库中的表

```sql
SHOW TABLES;
1
```



### 2. FROM之后，当前数据库不会发生改变

```sql
SHOW TABLES FROM mysql; 
1
```



### 3. 查看tb1中的数据表结构

```sql
SHOW COLUMNS FROM tb1; 
```

## MySQL角色简介

通常，MySQL数据库拥有多个相同权限集合的用户。以前，向多个用户授予和撤销权限的唯一方法是单独更改每个用户的权限，假如用户数量比较多的时候，这是非常耗时的。

为了用户权限管理更容易，MySQL提供了一个名为`role`的新对象，它是一个命名的特权集合。

如果要向多个用户授予相同的权限集，则应如下所示：

- *首先*，创建新的角色。
- *第二*，授予角色权限。
- *第三*，授予用户角色。

如果要更改用户的权限，则需要仅更改授权角色的权限。这些更改角色的权限将对授予角色的所有用户生效。

## MySQL角色的例子

首先，创建一个名为`crmdb`的新数据库，用于存储客户关系管理数据。

```sql
CREATE DATABASE crmdb;
SQL
```

接下来，切换到`crmdb`数据库：

```sql
USE crmdb;
SQL
```

然后，在`crmdb`数据库中创建一个客户信息表：`customer`，其结构如下 - 

```sql
USE crmdb;
CREATE TABLE `crmdb`.`customer`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(255) NOT NULL, 
    last_name VARCHAR(255) NOT NULL, 
    phone VARCHAR(32) NOT NULL,
    email VARCHAR(255)
);
SQL
```

之后，将一些数据插入到客户(`customer`)表中。

```sql
INSERT INTO customer(first_name,last_name,phone,email)
VALUES('Max','Su','(+86)-0898-66887654','max.su@yiibai.com'),
      ('Lily','Bush','(+86)-0898-66887985','lily.bush@yiibai.com');
SQL
```

最后，使用以下[SELECT语句](http://www.yiibai.com/mysql/select-statement-query-data.html)验证插入结果：

```shell
mysql> SELECT * FROM customer;
+----+------------+-----------+---------------------+----------------------+
| id | first_name | last_name | phone               | email                |
+----+------------+-----------+---------------------+----------------------+
|  1 | Max        | Su        | (+86)-0898-66887654 | max.su@yiibai.com    |
|  2 | Lily       | Bush      | (+86)-0898-66887985 | lily.bush@yiibai.com |
+----+------------+-----------+---------------------+----------------------+
2 rows in set
Shell
```

### 创建角色

假设您开发了一个使用`crmdb`数据库的应用程序。要与`crmdb`数据库进行交互，您需要为需要完全访问数据库的开发人员创建帐户。此外，需要为仅需读取访问权限的用户创建帐户，以及为读取/写入访问权限的用户创建帐户。

要避免单独为每个用户帐户授予权限，您可以创建一组角色，并为每个用户帐户授予相应的角色。

要创建新角色，请使用`CREATE ROLE`语句，我们根据上面所述，一共要创建三个角色：

```sql
CREATE ROLE IF NOT EXISTS 'crm_dev', 'crm_read', 'crm_write';
SQL
```

角色名称类似于由用户和主机部分组成的用户帐户：`role_name@host_name` 。

如果省略主机部分，则默认为“`%`”，表示任何主机。

### 授予角色权限

要授予角色权限，您可以使用`GRANT`语句。 以下语句是向`crm_dev`角色授予`crmdb`数据库的所有权限：

```sql
GRANT ALL ON crmdb.* TO crm_dev;
SQL
```

以下语句授予`crm_read`角色`SELECT`权限：

```sql
GRANT SELECT ON crmdb.* TO crm_read;
SQL
```

以下语句赋予`crm_write`角色`INSERT`，`UPDATE`和`DELETE`权限：

```sql
GRANT INSERT, UPDATE, DELETE ON crm.* TO crm_write;
SQL
```

### 将角色分配给用户帐户

假设您需要一个用户帐户是开发人员，一个是具有只读访问权限的用户帐户和两个具有读/写访问权限的用户帐户。

要创建新用户，请使用[CREATE USER](http://www.yiibai.com/mysql/create-user.html)语句，如下所示：

```sql
-- developer user 
CREATE USER crm_dev1@localhost IDENTIFIED BY 'passwd1990';
-- read access user
CREATE USER crm_read1@localhost IDENTIFIED BY 'passwd1990';    
-- read/write users
CREATE USER crm_write1@localhost IDENTIFIED BY 'passwd1990';   
CREATE USER crm_write2@localhost IDENTIFIED BY 'passwd1990';
SQL
```

> 为了方便演示使用，所有用户密码都设置成一样的。

要为用户分配角色，请使用`GRANT`语句：

```sql
GRANT crm_dev TO crm_dev1@localhost;

GRANT crm_read TO crm_read1@localhost;

GRANT crm_read, crm_write TO crm_write1@localhost, crm_write2@localhost;
SQL
```

请注意，`crm_write1@localhost`和`crm_write2@localhost`帐户的`GRANT`语句同时授予`crm_read`和`crm_write`角色。

要验证角色分配，请使用`SHOW GRANTS`语句，如下所示：

```sql
SHOW GRANTS FOR crm_dev1@localhost;
SQL
```

该语句返回以下结果集：

```sql
+-----------------------------------------------+
| Grants for crm_dev1@localhost                 |
+-----------------------------------------------+
| GRANT USAGE ON *.* TO `crm_dev1`@`localhost`  |
| GRANT `crm_dev`@`%` TO `crm_dev1`@`localhost` |
+-----------------------------------------------+
2 rows in set (0.02 sec)
SQL
```

正如你所看到的，它只返回授予角色。要显示角色所代表的权限，请使用`USING`子句和授权角色的名称，如下所示：

```sql
SHOW GRANTS FOR crm_write1@localhost USING crm_write;
SQL
```

该语句返回以下输出：

```sql
+---------------------------------------------------------------------+
| Grants for crm_write1@localhost                                     |
+---------------------------------------------------------------------+
| GRANT USAGE ON *.* TO `crm_write1`@`localhost`                      |
| GRANT INSERT, UPDATE, DELETE ON `crm`.* TO `crm_write1`@`localhost` |
| GRANT `crm_read`@`%`,`crm_write`@`%` TO `crm_write1`@`localhost`    |
+---------------------------------------------------------------------+
SQL
```

### 设置默认角色

现在，如果您使用`crm_read1`用户帐户连接到MySQL，并尝试访问`yiibaidb`数据库：

```sql
mysql -u crm_read1 -p
Enter password: ***********
mysql>USE crmdb;
SQL
```

上面语句发出以下错误信息：

```sql
ERROR 1044 (42000): Access denied for user 'crm_read1'@'localhost' to database 'crmdb'
SQL
```

这是因为在向用户帐户授予角色时，当用户帐户连接到数据库服务器时，它不会自动使角色变为活动状态。

如果调用`CURRENT_ROLE()`函数：

```sql
SELECT current_role();

+----------------+
| current_role() |
+----------------+
| NONE           |
+----------------+
1 row in set (0.00 sec)
SQL
```

它返回`NONE`，意味着没有启用角色。

要在每次用户帐户连接到数据库服务器时指定哪些角色应该处于活动状态，请使用`SET DEFAULT ROLE`语句。

以下语句为`crm_read1@localhost`帐户的所有分配角色设置默认值。

```sql
SET DEFAULT ROLE ALL TO crm_read1@localhost;
SQL
```

现在，如果当使用`crm_read1`用户帐户连接到MySQL数据库服务器并调用`CURRENT_ROLE()`函数：

```sql
> mysql -u crm_read1 -p
Enter password: ***********
>SELECT CURRENT_ROLE();
SQL
```

您将看到`crm_read1`用户帐户的默认角色，如下所示 - 

```sql
SQL
```

可以通过将当前数据库切换到`crmdb`数据库，执行`SELECT`语句和`DELETE`语句来测试`crm_read`帐户的权限，如下所示：

```sql
mysql> use crmdb;
Database changed
mysql> SELECT COUNT(*) FROM customer;
+----------+
| COUNT(*) |
+----------+
|        2 |
+----------+
1 row in set (0.00 sec)

mysql> DELETE FROM customer;
ERROR 1142 (42000): DELETE command denied to user 'crm_read1'@'localhost' for table 'customer'
SQL
```

如上面结果所示，它的确按预期那样工作。当我们发出`DELETE`语句时，就收到一个错误，因为`crm_read1`用户帐户只能读取访问权限。

### 设置活动角色

用户帐户可以通过指定哪个授权角色处于活动状态来修改当前用户在当前会话中的有效权限。

以下语句将活动角色设置为`NONE`，表示没有活动角色。

```sql
SET ROLE NONE;
SQL
```

要将活动角色设置为所有授予的角色，请使用：

```sql
SET ROLE ALL;
SQL
```

要将活动角色设置为由`SET DEFAULT ROLE`语句设置的默认角色，请使用：

```sql
SET ROLE DEFAULT;
SQL
```

要设置活动的命名角色，请使用：

```sql
SET ROLE granted_role_1, granted_role_2, ...
SQL
```

### 撤销角色的权限

要从特定角色撤销权限，请使用`REVOKE`语句。`REVOKE`语句不仅起到角色的作用，而且也赋予任何授予角色的帐户。

例如，要临时使所有读/写用户只读，您可以更改`crm_write`角色，如下所示：

```sql
REVOKE INSERT, UPDATE, DELETE ON crmdb.* FROM crm_write;
SQL
```

要恢复权限，需要重新授予它们权限，如下所示：

```sql
GRANT INSERT, UPDATE, DELETE ON crmdb.* FOR crm_write;
SQL
```

### 删除角色

要删除一个或多个角色，请使用`DROP ROLE`语句，如下所示：

```sql
DROP ROLE role_name, role_name, ...;
SQL
```

像`REVOKE`语句一样，`DROP ROLE`语句从其授予的每个用户帐户中撤销角色。

例如，要删除`crm_read`，`crm_write`角色，请使用以下语句：

```sql
DROP ROLE crm_read, crm_write;
SQL
```

### 将权限从用户帐户复制到另一个用户

MySQL将用户帐户视为角色，因此，可以将用户帐户授予另一个用户帐户，例如向该用户帐户授予角色。这允许将用户的权限复制到另一个用户。

假设您需要`crmdb`数据库的另一个开发人员帐户：

首先，创建新的用户帐户：

```sql
CREATE USER crm_dev2@localhost IDENTIFIED BY 'passwd1990';
SQL
```

其次，将`crm_dev1`用户帐户的权限复制到`crm_dev2`用户帐户，如下所示：

```sql
GRANT crm_dev1@localhost TO crm_dev2@localhost;
```

```c
#include<stdio.h>
int main()
{
	char c=8;
	int  i=32;
	printf("%s", sizeof(c    ));  // 结果:1, 因为char就是1字节
	printf("%s", sizeof(c+i  ));  // 结果:4, i是4字节, 运算时c值被隐式转换成int, 运算值是4字节
	printf("%s", sizeof(c=c+i));  // 结果:1, 等同于(c), 编译时, 因为=不被执行, 所以=的右边只是个屁 
}
```





```c
#include<stdio.h>
int main()
{
	// 字节对齐,为快速处理数据,内存是按32位读取写的,而不是一字节一字节地读写
	// 结构体的首地址自动对齐至能被对齐字节数大小所整除。
	// 结构体每个成员在结构体内的偏移地址都是成员大小的整数倍，否则, 在前方填充byte。
	// 结构体的总大小为结构体对齐字节数大小的整数倍
	
	struct T1{
		int   a;                  // 成员随意位置
		char  b;
		int   c;
		short d;
	}t1;
	printf("%ld\t", sizeof(t1));     // 结果:16, 4+4+4+4
		
		struct T2{
			int   a;                  // 合理安排成员位置
			char  b;
			short d;
			int   c;
		}t2;
		printf("%ld\t", sizeof(t2));    // 结果:12, 4+4+4, 设计结构时，调整成员的位置，可节省存储空间。
}
```

临时的修改：执行mysql命令 set global time_zone=’+08:00’，立即生效，重启mysql后失效

```sql
set time_zone = '+8:00';
set global time_zone='+08:00';
```

  首先，order by是用来写在where之后，给多个字段来排序的一个DQL查询语句。

  其次，order by写法：

  \1.  select 字段列表/* from 表名 where 条件 order by 字段名1 asc/desc, 字段名2 asc/desc,.......

  \2.  select 字段列表/* from 表名 where 条件 order by 字段序号 asc/desc, 字段序号 asc/desc,....... （此时字段序号要从1开始）

  \3.  select 字段列表/* from 表名 where 条件 order by 字段别名1 asc/desc, 字段别名2 asc/desc,.......（这里类似于第一种，无非就是把字段名加了个别名来代替而已。）

  然后，order by的方式：

  1.asc 升序，可以省略，是数据库默认的排序方式

  2.desc 降序，跟升序相反。

  最后要注意order by的原则，写在最前面的字段，他的优先级最高，也就是写法中第一个的字段名1的优先级最高，优先执行他的内容。

```
select * from student t order by t.sclass desc;
```

# 解析一:

### 用的地方不一样

  where可以用于select、update、delete和insert into values(select * from table where ..)语句中。
   having只能用于select语句中

### 执行的顺序不一样

  where的搜索条件是在执行语句进行分组之前应用
   having的搜索条件是在分组条件后执行的
   即如果where和having一起用时，where会先执行，having后执行

### 子句有区别

  where子句中的条件表达式having都可以跟，而having子句中的有些表达式where不可以跟；having子句可以用集合函数（sum、count、avg、max和min），而where子句不可以。

###  总结

1.WHERE 子句用来筛选 FROM 子句中指定的操作所产生的行。
 2.GROUP BY 子句用来分组 WHERE 子句的输出。
 3.HAVING 子句用来从分组的结果中筛选行

### **1. 什么是分页**

一般在客户端实现分页功能的时候，要显示当前页的数据、当前所在页数、临近页面的按钮以及总页数等等。这些数据随着翻页的进行能够动态的变化，为了实现这样的效果，一般会采取两种办法：**真分页**和**假分页**。这样的划分方式是从与数据库的交互方式出发的，是每次翻页时都进行查询还是一次性查出所有的数据。

### **2. 真分页**

真分页指的是每次在进行翻页时都只查询出当前页面的数据，特点就是与数据库的交互次数较多，但是每次查询的数据量较少，数据也不需要一直保存在内存中。适用于数据量比较大的场景，数据不适合全量查出的情况。

### **3. 假分页**

假分页指的是对于要显示的数据一次性全部查出，一直存在在服务端或客户端，在前端进行分页或由服务端控制分页。将根据当前所在页来计算应该显示的数据所在下标，用循环取出目标数据。只有当会话断开或页面关闭，相应的资源才会被释放。

### **4. 缓存层**

真分页和假分页都要和数据库进行交互，对于真分页来说不需要担心数据同步的问题，因为每次都是查询出最新的，但是数据库的负担会很重，尤其是用户量大的情况下。假分页可以在一定程度上减轻数据库的压力，但是数据不能及时得到同步，除非重新请求或页面刷新。一般在企业中会有缓存层的存在，既能有效降低数据库的压力，又能及时的进行数据同步。在对数据库中的数据进行修改后，要将变更后的数据及时同步到缓存层，在进行数据查询时从缓存层获取。

## **二、MySQL实现分页**

本文将介绍如何通过真分页的方式，每次取出所需数据。对于不同的数据，实现分页有不同的方式，在MySQL中可以使用LIMIT来限制查询出的数据。

### **1. LIMIT用法**

LIMIT出现在查询语句的最后，可以使用一个参数或两个参数来限制取出的数据。其中第一个参数代表偏移量：offset（可选参数），第二个参数代表取出的数据条数：rows。

- 单参数用法

当指定一个参数时，默认省略了偏移量，即偏移量为0，从第一行数据开始取，一共取rows条。

```javascript
/* 查询前5条数据 */
SELECT * FROM Student LIMIT 5;
```

- 双参数用法

当指定两个参数时，需要注意偏移量的取值是从0开始的，此时可以有两种写法：

```javascript
/* 查询第1-10条数据 */
SELECT * FROM Student LIMIT 0,10;
/* 查询第11-20条数据 */
SELECT * FROM Student LIMIT 10 OFFSET 10;
```

### **2. 分页公式**

- 总页数计算

在进行分页之前，我们需要先根据数据总量来得出总页数，这需要用到COUNT函数和向上取整函数CEIL，SQL如下：

```javascript
/* 获得数据总条数 */
SELECT COUNT(*) FROM Student;
/* 假设每页显示10条，则直接进行除法运算，然后向上取整 */
SELECT CEIL(COUNT(*) / 10) AS pageTotal FROM Student;
```

- 核心信息
  - 当前页：pageNumber
  - 每页数据量：pageSize

在实际操作中，我们能够得到的信息有当前所在页以及每页的数据量，同时要注意一下是否超出了最大页数。以每页10条为例，则前三页的数据应为：

- 第1页：第1~10条，SQL写法：LIMIT 0,10
- 第2页：第11~20条，SQL写法：LIMIT 10,10
- 第3页：第21~30条，SQL写法：LIMIT 20,10

据此我们可以总结出，LIMIT所需要的两个参数计算公式如下：

- offset：(pageNumber - 1) * pageSize
- rows：pageSize

#                  [     DBMS_SQL使用      ](https://www.cnblogs.com/zjfjava/p/7979633.html)             

### 一、简介

DBMS_SQL包提供一个接口，用于执行**动态SQL（包括DDL 和DML）**。

DBMS_SQL定义了一个实体叫**游标ID**，游标ID是一个PL/SQL整型数，通过游标ID，可以对游标进行操作。

DBMS_SQL包和本地动态SQL在功能上有许多重叠的地方，但是有的功能只能通过本地动态SQL实现，而有些功能只能通过DBMS_SQL实现。

### 二、主要函数

DBMS_SQL封装过程中的主要函数：
1、**OPEN_CURSOR**：返回新游标的ID值
2、**PARSE**：解析要执行的语句
3、**BIND_VARIABLE**：将给定的数量与特定的变量相连接
4、**DEFINE_COLOUMN**：定义字段变量，其值对应于指定游标中某个位置元素的值 （仅用于SELECT语句） 
5、**EXECUTE**：执行指定的游标 
6、**EXECUTE_AND_FETCH**：执行指定的游标并取记录 
7、**FETCH_ROWS**：从指定的游标中取出记录 
8、**COLUMN_VALUE**：返回游标中指定位置的元素 
9、**IS_OPEN**：当指定的游标状态为OPEN时返回真值 
10、**CLOSE_CURSOR**：关闭指定的游标并释放内存 
11、**LAST_ERROR_POSITION**：返回出错SQL语句的字节偏移量 
12、**LAST_ROW_ID**：返回最后一条记录的ROWID 
13、**LAST_SQL_FUNCTION_CODE**：返回语句的SQL FUNCTION CODE

### 三、一般过程

对于一般的select 操作,如果使用**动态的sql语句**则需要进行以下几个步骤:  
open  cursor --->parse--->define column--->excute--->fetch rows--->close cursor;  
而对于**dml操作(****insert ,** **update )**则需要进行以下几个步骤:  
open  cursor --->parse--->bind variable--->execute--->close cursor;  
对于**delete 操作**只需要进行以下几个步骤:  
open  cursor --->parse--->execute--->close cursor;  
对**DDL操作**需要进行一下几个步骤
open cursor--->parse---->close cursor;

```
利用DBMS_SQL执行DDL语句：
CREATE OR REPLACE PROCEDURE CreateTable2(tablename VARCHAR2)
IS
SQL_string VARCHAR2(1000);--存放SQL语句
V_cur integer;--定义整形变量，用于存放游标
BEGIN
SQL_string := 'CREATE TABLE ' || tablename || '(nameVARCHAR(20))';
V_cur := dbms_sql.open_cursor;--打开游标
dbms_sql.parse(V_cur,SQL_string,DBMS_SQL.NATIVE);--解析并执行SQL语句
dbms_sql.close_cursor(V_cur);--关闭游标
END;
利用DBMS_SQL执行SELECT语句：
open  cursor--->parse---> define  column--->excute---> fetch  rows--->close  cursor;
   DECLARE
 v_cursor NUMBER;--游标ID
 sqlstring VARCHAR2(200);--用于存放SQL语句
 v_phone_name VARCHAR2(20);--手机名字
 v_producer VARCHAR2(20);--手机生产商
 v_price  NUMBER :=500;--手机价钱
 v_count INT;--在这里无意义，只是存放函数返回值
BEGIN
 --:p是占位符
 --SELECT 语句中的第1列是phone_name,第2列是producer,第3列是price
 sqlstring :='SELECTphone_name,producer,price FROM phone_infor WHERE price> :p';
 v_cursor :=dbms_sql.open_cursor;--打开游标；
 dbms_sql.parse(v_cursor ,sqlstring,dbms_sql.native);--解析动态SQL语句；
 
 --绑定输入参数，v_price的值传给 :p
 dbms_sql.bind_variable(v_cursor,':p',v_price);
 
      --定义列，v_phone_name对应SELECT 语句中的第1列
 dbms_sql.define_column(v_cursor,1,v_phone_name,20);
 --定义列，v_producer对应SELECT语句中的第2列
 dbms_sql.define_column(v_cursor,2,v_producer,20);
  --定义列，v_price对应SELECT语句中的第3列
 dbms_sql.define_column(v_cursor,3,v_price);
  
  v_count := dbms_sql.EXECUTE(v_cursor);--执行动态SQL语句。
  
  LOOP
  --从游标中把数据检索到缓存区（BUFFER）中，缓冲区的值只能被函数COULUMN_VALUE()所读取
 EXIT WHENdbms_sql.fetch_rows(v_cursor)<=0;
  --函数column_value()把缓冲区的列的值读入相应变量中。
  --第1列的值被读入v_phone_name中
 dbms_sql.column_value(v_cursor,1,v_phone_name);
  --第2列的值被读入v_producer中
 dbms_sql.column_value(v_cursor,2,v_producer);
 --第2列的值被读入v_price中
 dbms_sql.column_value(v_cursor,3,v_price);
 --打印变量的值
 dbms_output.put_line(v_phone_name || ' '||v_producer|| ' '||v_price);
 
 END LOOP;
 dbms_sql.close_cursor(v_cursor);--关闭游标
 END;
利用DBMS_SQL执行DML语句：
open  cursor--->parse---> bind  variable--->execute---> close  cursor;
  DECLARE
 v_cursor NUMBER;--游标ID
 sqlstring VARCHAR2(200);--用于存放SQL语句
 v_phone_name VARCHAR2(20);--手机名字
 v_producer VARCHAR2(20);--手机生产商
 v_price  NUMBER :=500;--手机价钱
 v_count INT;--被DML语句影响的行数
BEGIN
 
 sqlstring :='INSERT INTO phone_infor values(:a,:b,:c)';-- :a,:b,:c 是占位符

 v_phone_name  :='S123';
 v_producer  :='索尼AA';
 v_price   := 999;

 v_cursor :=dbms_sql.open_cursor;--打开游标；
 dbms_sql.parse(v_cursor ,sqlstring,dbms_sql.native);--解析动态SQL语句；
 
 --绑定输入参数，v_price的值传给 :p
 dbms_sql.bind_variable(v_cursor,':a',v_phone_name);
 dbms_sql.bind_variable(v_cursor,':b',v_producer);
 dbms_sql.bind_variable(v_cursor,':c',v_price);

  v_count := dbms_sql.EXECUTE(v_cursor);--执行动态SQL语句。
  
 dbms_sql.close_cursor(v_cursor);--关闭游标
  dbms_output.put_line(' INSERT ' || to_char(v_count) ||' row ');--打印有多少行被插入
  COMMIT;
 END;
```

1、ABS(x)：返回 x 的绝对值

```
mysql> select abs(-0.8),abs(0.8);
+-----------+----------+
| abs(-0.8) | abs(0.8) |
+-----------+----------+
|       0.8 |      0.8 |
+-----------+----------+
```

 

2、CEIL(x)：返回不小于 x 的最小整数，也就是说得大于或等于x的最小整数

　　同义词：ceiling(x)

```
mysql> select ceil(1);
+---------+
| ceil(1) |
+---------+
|       1 |
+---------+

mysql> select ceil(1.23),ceiling(-1.23);
+------------+----------------+
| ceil(1.23) | ceiling(-1.23) |
+------------+----------------+
|          2 |             -1 |
+------------+----------------+
```

 

3、FLOOR(x)：返回不大于 x 的最大整数(与CEIL的用法刚好相反)

```
mysql> select floor(1.23),floor(-1.23);
+-------------+--------------+
| floor(1.23) | floor(-1.23) |
+-------------+--------------+
|           1 |           -2 |
+-------------+--------------+
```

 

4、MOD(x，y)：返回数字x除以y后的余数：x mod y

　　和 x%y 的结果相同；

　　模数和被模数任何一个为NULL(无效数)结果都为 NULL

```
mysql> select mod(123,10),234%7,3 mod 2;
+-------------+-------+---------+
| mod(123,10) | 234%7 | 3 mod 2 |
+-------------+-------+---------+
|           3 |     3 |       1 |
+-------------+-------+---------+
```

注意：余数可以有小数；除数为0不抛出异常

```
mysql> select mod(3.14,3),mod(3,0);
+-------------+----------+
| mod(3.14,3) | mod(3,0) |
+-------------+----------+
|        0.14 |     NULL |
+-------------+----------+
```

 

5、ROUND(X[,D])：将数字X四舍五入到指定的小数位数D

　　①如果不指定D，则默认为0

　　②如果D是负数，表示从小数点的左边进行四舍五入

```
mysql> select round(1.58),round(1.298,1);
+-------------+----------------+
| round(1.58) | round(1.298,1) |
+-------------+----------------+
|           2 |            1.3 |
+-------------+----------------+

mysql> select round(1.58,0),round(1.298,-1);
+---------------+-----------------+
| round(1.58,0) | round(1.298,-1) |
+---------------+-----------------+
|             2 |               0 |
+---------------+-----------------+
```

 

6、TRUNCATE(X,D)：将数字X截断到指定的小数位数D（不四舍五入）

　　①如果D为0，表示不要小数

　　②如果D是负数，表示从小数点的左边进行截断

```
mysql> select truncate(1.999,1),truncate(1.999,0);
+-------------------+-------------------+
| truncate(1.999,1) | truncate(1.999,0) |
+-------------------+-------------------+
|               1.9 |                 1 |
+-------------------+-------------------+

mysql> select truncate(-1.999,1),truncate(123,-2);
+--------------------+------------------+
| truncate(-1.999,1) | truncate(123,-2) |
+--------------------+------------------+
|               -1.9 |              100 |
+--------------------+------------------+
```

注意：TRUNCATE 和 ROUND 的区别在于 TRUNCATE 仅仅是截断，而不进行四舍五入

```
mysql> select round(1.235,2),truncate(1.235,2);
+----------------+-------------------+
| round(1.235,2) | truncate(1.235,2) |
+----------------+-------------------+
|           1.24 |              1.23 |
+----------------+-------------------+
```

 

7、RAND()：返回一个随机浮点数v(0<=v<1.0)

```
mysql> select rand(),rand();
+--------------------+---------------------+
| rand()             | rand()              |
+--------------------+---------------------+
| 0.7085628693071779 | 0.19879874978102627 |
+--------------------+---------------------+
```

RAND(x)：指定整数x，则用作种子值，产生一个可重复的数字序列

```
mysql> select rand(1),rand(2),rand(1);
+---------------------+--------------------+---------------------+
| rand(1)             | rand(2)            | rand(1)             |
+---------------------+--------------------+---------------------+
| 0.40540353712197724 | 0.6555866465490187 | 0.40540353712197724 |
+---------------------+--------------------+---------------------+
```

利用RAND()函数可以取任意指定范围内的随机数

　　类似于shell> $((RANDOM % 100))得到随机值　　

比如：产生 0～100 内的任意随机整数

```
mysql> select ceil(100*rand()),ceil(100*rand());
+------------------+------------------+
| ceil(100*rand()) | ceil(100*rand()) |
+------------------+------------------+
|               87 |               75 |
+------------------+------------------+
```

之前遇到一个问题，就是MySQL的信息如何加密。其实加密的思路有两种，一种是在数据库外部加密后存入数据库，第二种是在数据库内部对数据进行加密。这两种的区别就是第二种比第一种在使用上要更加方便，因为在外部加密的话每一次的查找如果是按照被加密的项来的话，都需要先算出加密后的数据再放入sql中，同时返回的也是加密的数据，需要在外部进行解密；而第二种的话可以直接在sql中传原值和加密的key即可，解密也可以在sql中完成。这使得部分组合sql查询使用第一种办法就无法完成了，比如查询的字段是另一场查询的结果这种，因为必须经过一个外部加密的过程

## 双向加密

双向加密有三种方法：

1. ENCODE/DECODE

   传入两个值，一个是要加密的记录，一个是加密和解密的key.**加密之后的二进制字符长度和原始长度是一样的**，以blob类型存储

   > BLOB 类型的字段用于存储二进制数据 MySQL 中，BLOB  是个类型系列，包括：TinyBlob、Blob、MediumBlob、LongBlob，这几个类型之间的唯一区别是在存储文件的最大大小上不同。  MySQL 的四种 BLOB 类型 类型 大小 (单位：字节) TinyBlob 最大 255 Blob 最大 65K Medium。

   加密:

   `SELECT ENCODE('mytext','mykeystring');`

   	结果:

   > ```sql
   > mysql> SELECT ENCODE('mytext','mykeystring');
   > +--------------------------------+
   > | ENCODE('mytext','mykeystring') |
   > +--------------------------------+
   > | ">¿¡È                         | 
   > +--------------------------------+
   > 1 row in set (0.00 sec)
   > ```

   解密:

   `SELECT   DECODE(ENCODE('mytext','mykeystring'),'mykeystring');`

   	结果:

   > ```sql
   > mysql> SELECT DECODE(ENCODE('mytext','mykeystring'),'mykeystring');
   > +------------------------------------------------------+
   > | DECODE(ENCODE('mytext','mykeystring'),'mykeystring') |
   > +------------------------------------------------------+
   > | mytext                                               | 
   > +------------------------------------------------------+
   > 1 row in set (0.00 sec)
   > ```

2. AES_ENCRYPT/AES_DECRYPT

   这种加密算法使用AES(高级加密标准，Advanced Encryption Standard)，使用key_str加密，key_str的长度可以达到256位，加密的结果是一个二进制的字符串，以blob类型存储

   加密:

   `SELECT AES_ENCRYPT('mytext', 'mykeystring');`

   结果:

   ```sql
   mysql> SELECT   AES_ENCRYPT('mytext', 'mykeystring');
   +--------------------------------------+
   | AES_ENCRYPT('mytext', 'mykeystring') |
   +--------------------------------------+
   | ­•›¨í ƒðbáÒ9•j                     | 
   +--------------------------------------+
   1 row in set (0.00 sec)
   ```

   解密:

   `SELECT   AES_DECRYPT(AES_ENCRYPT('mytext','mykeystring'), 'mykeystring');`

3. DES_ENCRYPT/DES_DECRYPT

   这种加密方法使用了3DES（三重加密数据算法，听着就知道加密等级比较gap），加密时可以选择使用key_num还是key_str

   例如:

   `SELECT DES_ENCRYPT('mytext',5),DES_ENCRYPT('mytext','mypassward');`

   输出为:

   ```vhdl
   mysql> SELECT DES_ENCRYPT('mytext',5),DES_ENCRYPT('mytext','mypassward');
   +-------------------------+------------------------------------+
   | DES_ENCRYPT('mytext',5) | DES_ENCRYPT('mytext','mypassward') |
   +-------------------------+------------------------------------+
   | …ÿc}æ¤~               | ÿ]ï×ñ”Å                          | 
   +-------------------------+------------------------------------+
   1 row in set (0.00 sec)
   ```

   解密时使用DES_DECRYPT

   但是w3resource中有一句:This function works only with Secure Sockets Layer  (SSL) if support for SSL is available in MySql  configuration.我个人的理解是如果使用这种加密方法，就必须使用SSL安全连接的方式连接数据库，否则就浪费了较高的加密等级了

## 单向加密

其实关于单向加密是不是加密的争论网上一直有，比如[MD5 到底是不是加密？](https://developer.51cto.com/art/202002/611256.htm),我这里就把它当成加密算法了，不抬杠

1. MD5加密

   MD5加密的结果是32位十六进制数的二进制字符串

   `SELECT MD5('w3resource'); `

   结果为:

   ```sql
   mysql> SELECT MD5('w3resource'); 
   +----------------------------------+
   | MD5('w3resource')                |
   +----------------------------------+
   | b273cb2263eb88f61f7133cd308b4064 | 
   +----------------------------------+
   1 row in set (0.04 sec)
   ```

2. ENCRYPT加密

   ENCRYPT使用Unix的crypt()系统调用实现，，返回一个二进制字符串。因为它是基于Unix系统调用的，所以在Windows中会返回NULL

   加密:

   `SELECT ENCRYPT('w3resource', 'encode');`

   ```sql
   mysql> SELECT ENCRYPT('w3resource', 'encode');
   +---------------------------------+
   | ENCRYPT('w3resource', 'encode') |
   +---------------------------------+
   | NULL                            | 
   +---------------------------------+
   1 row in set (0.00 sec)
   ```

3. SHA1加密

   SHA1返回的是40位的十六进制数字的二进制字符串，输入是NULL的时候输出也是NULL

   `SELECT SHA1('w3resource');`

   ```sql
   mysql> SELECT SHA1('w3resource');
   +------------------------------------------+
   | SHA1('w3resource')                       |
   +------------------------------------------+
   | d228359c41174cede6b3c401eb8d11746a4ad1eb | 
   +------------------------------------------+
   1 row in set (0.00 sec)
   ```

4. PASSWORD

   这个一般是用来加密密码的

   输入为NULL时输出也是NULL

   ```sql
   mysql> SELECT PASSWORD('w3resource');
   +-------------------------------------------+
   | PASSWORD('w3resource')                    |
   +-------------------------------------------+
   | *EE0804DDC2CC3E85A47191ECCCBA29B775DFFA77 | 
   +-------------------------------------------+
   1 row in set (0.00 sec)
   ```

 在介绍加密函数之前，首先要了解一下存储加密数据的数据类型------BLOB。BLOB是一个二进制的大型对象，能存储大小不同的数据，根据存储数据能力的大小通常将其分为四种：TinyBlob（最大为255）、Blob（最大65K）、MediumBlob（最大16M）、LongBlob（最大4G）。

**单向加密（实质上是对用户密码做了一个HASH，本质上不算做加密，只是利用了HASH的单向性，使明文到密文变得可行，但从密文无法查看到明文）**

先创建一个student表，当做测试样表，建表语句如下：

```
create table student (
    -> sid varchar(8) primary key,
    -> spass blob);
```

1.MD5加密

**语法：MD5(‘密码’)**

向student中插入一条数据，语句如下：

```
insert into student values ('03163180', MD5('12345'));
1
```

成功之后查看表中的内容，可以看到刚才插入的数据密码已经变成了一串我们看不懂的字符串，如下图：

\2. PASSWORD加密

**语法：PASSWORD(‘密码’)**

向student中插入一条数据，语句如下：

```
insert into student values ('03163181', PASSWORD('000000'));
```

**双向加密（双向加密就是明文可以变成密文存储在数据库中，同时密文也能通过相应的解密方法查看到明文）**

**加密语法：ENCODE(‘密码’, ‘任意字符’)**

向student中插入一条数据，语句如下：

```
insert into student values ('03163182', ENCODE('222222', 'abc'));
```

成功之后输入查看student表的命令，可以看到用ENCODE加密形成的密文比用MD5和PASSWORD加密形成的密文更复杂且更短，如下图：

**解密语法：DECODE(‘密码’, ‘任意字符’)**注意：解密的任意字符必须和加密时所用的任意字符相同

查看明文的语句如下：

```
select sid, DECODE(spass, 'abc') as spass from student where sid = '03163182';
1
```

可以看到明文已经被正确地解密出来了，结果如下图：

**创建原始明文数据表**

```sql
/*  创建原始数据表 */

 CREATE TABLE `f_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/*  新增原始数据 */
INSERT INTO `f_user` VALUES (1,'曹操','10000000000','Cc@123'),(2,'关羽','21000000000','Guanyu@21'),(3,'刘备','20000000000','LB#200000');
```

**创建MySQL加密表**

```
CREATE TABLE `f_user_m` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `pwd` varbinary(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```

**创建python加密表**

```
CREATE TABLE `f_user_p` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `pwd` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```

##  聚合函数介绍

- 什么是聚合函数
  聚合函数作用于一组数据，并对一组数据返回一个值。

**聚合函数类型**

AVG()

SUM()

MAX()

MIN()

COUNT()

#### 1.1 AVG和SUM函数

可以对数值型数据使用AVG 和 SUM 函数。

```sql
 SELECT AVG(salary), MAX(salary),MIN(salary), SUM(salary) FROM employees WHERE job_id LIKE '%REP%';
/*
+-------------+-------------+-------------+-------------+
| AVG(salary) | MAX(salary) | MIN(salary) | SUM(salary) |
+-------------+-------------+-------------+-------------+
| 8272.727273 |    11500.00 |     6000.00 |   273000.00 |
+-------------+-------------+-------------+-------------+
*/
12345678
```

#### 1.2 MIN和MAX函数

可以对任意数据类型的数据使用 MIN 和 MAX 函数。

```sql
SELECT MIN(hire_date), MAX(hire_date)
FROM employees;
/*
+----------------+----------------+
| MIN(hire_date) | MAX(hire_date) |
+----------------+----------------+
| 1987-06-17     | 2000-04-21     |
+----------------+----------------+
*/
123456789
```

#### 1.3 COUNT函数

- COUNT(*)返回表中记录总数，适用于任意数据类型。

```sql
SELECT COUNT(*)
FROM employees
WHERE department_id = 50;
/*
+----------+
| COUNT(*) |
+----------+
|       45 |
+----------+
*/
12345678910
```

- COUNT(expr) 返回expr不为空的记录总数。

```sql
SELECT COUNT(commission_pct)
FROM employees
WHERE department_id = 50;
/*
+-----------------------+
| COUNT(commission_pct) |
+-----------------------+
|                     0 |
+-----------------------+
*/
12345678910
```

**问题：用count( \* )，count(1)，count(列名)谁好呢?**
 其实，对于MyISAM引擎的表是没有区别的。这种引擎内部有一计数器在维护着行数。

Innodb引擎的表用count(* ),count(1)直接读行数，复杂度是O(n)，因为innodb真的要去数一遍。但好于具体的count(列名)。

**问题：能不能使用count(列名)替换count( \* )?**
 不要使用 count(列名)来替代 count(* ) ， count(* ) 是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。
 说明：count(* )会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行。

#### 演示代码

```sql
#1. 常见的几个聚合函数
#1.1 AVG / SUM ：只适用于数值类型的字段（或变量）

SELECT AVG(salary),SUM(salary),AVG(salary) * 107
FROM employees;
/*输出
+-------------+-------------+-------------------+
| AVG(salary) | SUM(salary) | AVG(salary) * 107 |
+-------------+-------------+-------------------+
| 6461.682243 |   691400.00 |     691400.000000 |
+-------------+-------------+-------------------+
*/
#如下的操作没有意义
SELECT SUM(last_name),AVG(last_name),SUM(hire_date)
FROM employees;


#1.2 MAX / MIN :适用于数值类型、字符串类型、日期时间类型的字段（或变量）
SELECT MAX(salary),MIN(salary)
FROM employees;
/*输出
+-------------+-------------+
| MAX(salary) | MIN(salary) |
+-------------+-------------+
|    24000.00 |     2100.00 |
+-------------+-------------+
*/
SELECT MAX(last_name),MIN(last_name),MAX(hire_date),MIN(hire_date)
FROM employees;
/*输出
+----------------+----------------+----------------+----------------+
| MAX(last_name) | MIN(last_name) | MAX(hire_date) | MIN(hire_date) |
+----------------+----------------+----------------+----------------+
| Zlotkey        | Abel           | 2000-04-21     | 1987-06-17     |
+----------------+----------------+----------------+----------------+
*/

#1.3 COUNT：
# ① 作用：计算指定字段在查询结构中出现的个数（不包含NULL值的）
SELECT COUNT(employee_id),COUNT(salary),COUNT(2 * salary),COUNT(1),COUNT(2),COUNT(*)
FROM employees ;
/*输出：
+--------------------+---------------+-------------------+----------+----------+----------+
| COUNT(employee_id) | COUNT(salary) | COUNT(2 * salary) | COUNT(1) | COUNT(2) | COUNT(*) |
+--------------------+---------------+-------------------+----------+----------+----------+
|                107 |           107 |               107 |      107 |      107 |      107 |
+--------------------+---------------+-------------------+----------+----------+----------+
*/

SELECT *
FROM employees;

#如果计算表中有多少条记录，如何实现？
#方式1：COUNT(*)
#方式2：COUNT(1)
#方式3：COUNT(具体字段) : 不一定对！

#② 注意：计算指定字段出现的个数时，是不计算NULL值的。
SELECT COUNT(commission_pct)#COUNT(具体字段)
FROM employees;
/*
+-----------------------+
| COUNT(commission_pct) |
+-----------------------+
|                    35 |
+-----------------------+
*/
SELECT commission_pct#具体字段
FROM employees
WHERE commission_pct IS NOT NULL;
/* 35条记录
+----------------+
| commission_pct |
+----------------+
|           0.40 |
|           0.30 |
|           0.30 |
*/

#③ 公式：AVG = SUM / COUNT（有没有空值都成立）
SELECT AVG(salary),SUM(salary)/COUNT(salary),
AVG(commission_pct),SUM(commission_pct)/COUNT(commission_pct),
SUM(commission_pct) / 107
FROM employees;
/*
+-------------+---------------------------+---------------------+-------------------------------------------+---------------------------+
| AVG(salary) | SUM(salary)/COUNT(salary) | AVG(commission_pct) | SUM(commission_pct)/COUNT(commission_pct) | SUM(commission_pct) / 107 |
+-------------+---------------------------+---------------------+-------------------------------------------+---------------------------+
| 6461.682243 |               6461.682243 |            0.222857 |                                  0.222857 |                  0.072897 |
+-------------+---------------------------+---------------------+-------------------------------------------+---------------------------+
*/

#需求：查询公司中平均奖金率
#错误的！
SELECT AVG(commission_pct)
FROM employees;

#SUM也不考虑空值NULL
#正确的：
SELECT SUM(commission_pct) / COUNT(IFNULL(commission_pct,0)),#等同于COUNT(IFNULL(commission_pct,1/2/3/4/))
AVG(IFNULL(commission_pct,0))
FROM employees;
/*输出：
+-------------------------------------------------------+-------------------------------+
| SUM(commission_pct) / COUNT(IFNULL(commission_pct,0)) | AVG(IFNULL(commission_pct,0)) |
+-------------------------------------------------------+-------------------------------+
|                                              0.072897 |                      0.072897 |
+-------------------------------------------------------+-------------------------------+
*/

# 如何需要统计表中的记录数，使用COUNT(*)、COUNT(1)\COUNT(常数)、COUNT(具体字段) 哪个效率更高呢？
# 如果使用的是MyISAM 存储引擎，则三者效率相同，时间复杂度都是O(1)
# 如果使用的是InnoDB 存储引擎，则三者效率：COUNT(*) = COUNT(1)> COUNT(字段)
```



**可以使用GROUP BY子句将表中的数据分成若干组**

```sql
SELECT column, group_function(column)
FROM table
[WHERE condition]
[GROUP BY group_by_expression]
[ORDER BY column];
12345
```

> **明确：WHERE一定放在FROM后面**

**在SELECT列表中所有未包含在组函数中的列都应该包含在 GROUP BY子句中**

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id ;
/*
+---------------+--------------+
| department_id | AVG(salary)  |
+---------------+--------------+
|          NULL |  7000.000000 |
|            10 |  4400.000000 |
|            20 |  9500.000000 |
|            30 |  4150.000000 |
|            40 |  6500.000000 |
|            50 |  3475.555556 |
|            60 |  5760.000000 |
|            70 | 10000.000000 |
|            80 |  8955.882353 |
|            90 | 19333.333333 |
|           100 |  8600.000000 |
|           110 | 10150.000000 |
+---------------+--------------+
*/
123456789101112131415161718192021
```

**包含在 GROUP BY 子句中的列不必包含在SELECT 列表中**

```sql
SELECT AVG(salary) FROM employees 
GROUP BY department_id ;
/*
+--------------+
| AVG(salary)  |
+--------------+
|  7000.000000 |
|  4400.000000 |
|  9500.000000 |
|  4150.000000 |
|  6500.000000 |
|  3475.555556 |
|  5760.000000 |
| 10000.000000 |
|  8955.882353 |
| 19333.333333 |
|  8600.000000 |
| 10150.000000 |
+--------------+
*/
1234567891011121314151617181920
```

#### 2.2 使用多个列分组

```sql
SELECT department_id dept_id, job_id, SUM(salary)
FROM employees
GROUP BY department_id, job_id ;
/*
+---------+------------+-------------+
| dept_id | job_id     | SUM(salary) |
+---------+------------+-------------+
|    NULL | SA_REP     |     7000.00 |
|      10 | AD_ASST    |     4400.00 |
|      20 | MK_MAN     |    13000.00 |
|      20 | MK_REP     |     6000.00 |
|      30 | PU_CLERK   |    13900.00 |
|      30 | PU_MAN     |    11000.00 |
|      40 | HR_REP     |     6500.00 |
|      50 | SH_CLERK   |    64300.00 |
|      50 | ST_CLERK   |    55700.00 |
|      50 | ST_MAN     |    36400.00 |
|      60 | IT_PROG    |    28800.00 |
|      70 | PR_REP     |    10000.00 |
|      80 | SA_MAN     |    61000.00 |
|      80 | SA_REP     |   243500.00 |
|      90 | AD_PRES    |    24000.00 |
|      90 | AD_VP      |    34000.00 |
|     100 | FI_ACCOUNT |    39600.00 |
|     100 | FI_MGR     |    12000.00 |
|     110 | AC_ACCOUNT |     8300.00 |
|     110 | AC_MGR     |    12000.00 |
+---------+------------+-------------+
*/
1234567891011121314151617181920212223242526272829
```

使用 WITH [ROLLUP](https://so.csdn.net/so/search?q=ROLLUP&spm=1001.2101.3001.7020) 关键字之后，在所有查询出的分组记录之后增加一条记录，该记录计算查询出的所有记录的总和，即统计记录数量。

```sql
SELECT department_id,AVG(salary)
FROM employees
WHERE department_id > 80
GROUP BY department_id WITH ROLLUP;
/*
+---------------+--------------+
| department_id | AVG(salary)  |
+---------------+--------------+
|            90 | 19333.333333 |
|           100 |  8600.000000 |
|           110 | 10150.000000 |
|          NULL | 11809.090909 |
+---------------+--------------+
*/
1234567891011121314
```

> 注意：
> 当使用ROLLUP时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的。

## 演示代码

```sql
#其他：方差、标准差、中位数
#2. GROUP BY 的使用

#需求：查询各个部门的平均工资，最高工资
SELECT department_id,AVG(salary),SUM(salary)
FROM employees
GROUP BY department_id
/*输出：
+---------------+--------------+-------------+
| department_id | AVG(salary)  | SUM(salary) |
+---------------+--------------+-------------+
|          NULL |  7000.000000 |     7000.00 |
|            10 |  4400.000000 |     4400.00 |
|            20 |  9500.000000 |    19000.00 |
|            30 |  4150.000000 |    24900.00 |
|            40 |  6500.000000 |     6500.00 |
|            50 |  3475.555556 |   156400.00 |
|            60 |  5760.000000 |    28800.00 |
|            70 | 10000.000000 |    10000.00 |
|            80 |  8955.882353 |   304500.00 |
|            90 | 19333.333333 |    58000.00 |
|           100 |  8600.000000 |    51600.00 |
|           110 | 10150.000000 |    20300.00 |
+---------------+--------------+-------------+
*/

#需求：查询各个job_id的平均工资
SELECT job_id,AVG(salary)
FROM employees
GROUP BY job_id;
/*输出
+------------+--------------+
| job_id     | AVG(salary)  |
+------------+--------------+
| AC_ACCOUNT |  8300.000000 |
| AC_MGR     | 12000.000000 |
| AD_ASST    |  4400.000000 |
| AD_PRES    | 24000.000000 |
| AD_VP      | 17000.000000 |
| FI_ACCOUNT |  7920.000000 |
| FI_MGR     | 12000.000000 |
| HR_REP     |  6500.000000 |
| IT_PROG    |  5760.000000 |
| MK_MAN     | 13000.000000 |
| MK_REP     |  6000.000000 |
| PR_REP     | 10000.000000 |
| PU_CLERK   |  2780.000000 |
| PU_MAN     | 11000.000000 |
| SA_MAN     | 12200.000000 |
| SA_REP     |  8350.000000 |
| SH_CLERK   |  3215.000000 |
| ST_CLERK   |  2785.000000 |
| ST_MAN     |  7280.000000 |
+------------+--------------+
*/

#需求：查询各个department_id,job_id的平均工资
#方式1：
SELECT department_id,job_id,AVG(salary)
FROM employees
GROUP BY  department_id,job_id;
/*部分输出
+---------------+------------+--------------+
| department_id | job_id     | AVG(salary)  |
+---------------+------------+--------------+
|          NULL | SA_REP     |  7000.000000 |
|            10 | AD_ASST    |  4400.000000 |
|            20 | MK_MAN     | 13000.000000 |
|            20 | MK_REP     |  6000.000000 |
|            30 | PU_CLERK   |  2780.000000 |
|            30 | PU_MAN     | 11000.000000 |
|            40 | HR_REP     |  6500.000000 |
|            50 | SH_CLERK   |  3215.000000 |
*/
#方式2：    方式1和方式2其实是一样的(都按job_id,department_id分组)
SELECT job_id,department_id,AVG(salary)
FROM employees
GROUP BY job_id,department_id;
/*部分输出
+------------+---------------+--------------+
| job_id     | department_id | AVG(salary)  |
+------------+---------------+--------------+
| AC_ACCOUNT |           110 |  8300.000000 |
| AC_MGR     |           110 | 12000.000000 |
| AD_ASST    |            10 |  4400.000000 |
| AD_PRES    |            90 | 24000.000000 |
| AD_VP      |            90 | 17000.000000 |
| FI_ACCOUNT |           100 |  7920.000000 |
| FI_MGR     |           100 | 12000.000000 |
*/


#错误的！-->SELECT的job_id字段没有在GROUP BY中出现故错误
#AVG(salary)中的salary出现在组函数中，没有错
SELECT department_id,job_id,AVG(salary)
FROM employees
GROUP BY department_id;#只按department_id分组Oracle中报错
#由上面错误引出的结论：
#结论1：SELECT中出现的非组函数的字段必须声明在GROUP BY 中。
#      反之，GROUP BY中声明的字段可以不出现在SELECT中。
#结论2：GROUP BY 声明在FROM后面、WHERE后面，ORDER BY 前面、LIMIT前面
#结论3：MySQL中GROUP BY中可使用WITH ROLLUP

#WITH ROLLUP举例：
#WITH ROLLUP：分完组后，在末尾添加整体的组函数结果
#如下面例子中，在末尾添加所有员工的AVG(salary) 6461.682243 
SELECT department_id,AVG(salary)
FROM employees
GROUP BY department_id WITH ROLLUP;
/*
+---------------+--------------+
| department_id | AVG(salary)  |
+---------------+--------------+
|          NULL |  7000.000000 |
|            10 |  4400.000000 |
|            20 |  9500.000000 |
|            30 |  4150.000000 |
|            40 |  6500.000000 |
|            50 |  3475.555556 |
|            60 |  5760.000000 |
|            70 | 10000.000000 |
|            80 |  8955.882353 |
|            90 | 19333.333333 |
|           100 |  8600.000000 |
|           110 | 10150.000000 |
|          NULL |  6461.682243 |
+---------------+--------------+
*/

#需求A：查询各个部门的平均工资，按照平均工资升序排列
SELECT department_id,AVG(salary) avg_sal
FROM employees
GROUP BY department_id
ORDER BY avg_sal ASC;
/*
+---------------+--------------+
| department_id | avg_sal      |
+---------------+--------------+
|            50 |  3475.555556 |
|            30 |  4150.000000 |
|            10 |  4400.000000 |
|            60 |  5760.000000 |
|            40 |  6500.000000 |
|          NULL |  7000.000000 |
|           100 |  8600.000000 |
|            80 |  8955.882353 |
|            20 |  9500.000000 |
|            70 | 10000.000000 |
|           110 | 10150.000000 |
|            90 | 19333.333333 |
+---------------+--------------+
*/

#接着需求A引出以下说明：
#说明：当使用ROLLUP时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的。
#错误的：
SELECT department_id,AVG(salary) avg_sal
FROM employees
GROUP BY department_id WITH ROLLUP
ORDER BY avg_sal ASC;
```



## GROUP BY





## 1. 获得需要的记录的特定字段

语法：`SELECT`后加上需要的结果映射到的字段，若为`*`则为选取所有字段。

```sql
#单个字段查询
SELECT
	last_name 
FROM
	employees;
```

```sql
#多个字段
SELECT
	last_name,
	salary,
	email 
FROM
	employees;
```

```sql
#所有字段
SELECT
	* 
FROM
	employees;
```

## 2. 查询常量值

```sql
#查询常量值
SELECT 100;
SELECT "john";
```

## 3. 查询表达式

例：

```sql
SELECT 100%98;
```

## 4. 查询函数

例：

```sql
SELECT VERSION();
```

## 5. 起别名

为查询结果的列起一个新的名字，语法：

```sql
SELECT 表中的列名 AS 自己起的新名字
FROM 表名;
```

或者省略`AS`：

```sql
SELECT 表中的列名 自己起的新名字
FROM 表名;
12
```

例：

```sql
SELECT last_name AS 姓, first_name AS 名 
FROM employees;

SELECT last_name 姓, first_name 名 
FROM employees;
```

## 6. 去重

```sql
SELECT DISTINCT 字段名
FROM 表名;
12
```

实际过程：

1. 查询到对应的记录
2. 映射到对应的字段
3. 最终结果去重

例：

```sql
SELECT DISTINCT department_id 
FROM employees;
```

## 7. CONCAT函数的简单使用

```sql
SELECT
	CONCAT( last_name, first_name ) AS 姓名 
FROM
	employees;
1234
```

实际过程：

1. 到表中没有这个字段，然后为所有的记录添加这个新字段，内容为last_name字段和first_name字段的链接
2. 查出相应的记录
3. 将所有记录映射到姓名字段中

# 三、过滤数据

主要语法：

```sql
SELECT		查询列表
FROM 		表名
WHERE		条件;
123
```

## 大纲

- 按条件表达式筛选：   

  - 简单条件运算符: `> < = != <> >= <=`

- 逻辑表达式：   

  - `&& || !`
  - `AND OR NOT`

- 模糊查询：   

  - ```
    LIKE
    ```

    - 一般和通配符搭配使用
    - 通配符：       
      - `%` 任意多个字符，包含0个字符
      - `_` 任意单个字符

  - ```
    BETWEEN AND
    ```

    - 简洁
    - 闭区间
    - 不可调换顺序

  - ```
    IN
    ```

    - 简洁
    - `IN`列表的值类型必须统一或兼容

  - ```
    IS NULL
    ```

    - 可用`IS NULL` 和 `IS NOT NULL`来判断是否为空

## 1. 按条件表达式筛选

查询**工资>12000的员工信息**：

```sql
SELECT * 
FROM employees 
WHERE salary > 12000;
123
```

查询**部门编号不等于90号的员工名和部门编号**

```sql
SELECT last_name, department_id
FROM  employees
WHERE department_id <> 90
ORDER BY department_id; #排序
```

## 2. 使用逻辑表达式

查询**工资在10000~20000之间**的员工的**员工名，工资及奖金**

```sql
SELECT  last_name, salary, commission_pct
FROM 	employees
WHERE 	salary>=10000 AND salary<=20000;
123
```

部门编号不在90到110之间，或者工资高于15000的员工信息：

```sql
SELECT 	*
FROM 	employees
WHERE	department_id<90 	
		OR 	department_id>110	
		OR	salary>15000
12345
```

或

```sql
SELECT  *
FROM  	employees
WHERE	NOT(department_id>=90 AND department_id<=110)
		OR 	salary>15000
1234
```

## 3. 模糊查询

### LIKE

员工名中包含字符a的员工信息：

```sql
SELECT 	last_name
FROM  	employees
WHERE 	last_name LIKE '%a%';
```

员工名中第三个字符为`n`，第五个字符为`t`的员工名和工资：

```sql
SELECT 	last_name, salary
FROM  	employees
WHERE 	last_name LIKE '__n_t%';
```

员工名中第二个字符为_的员工名：

```sql
SELECT 	last_name
FROM 	employees
WHERE 	last_name LIKE '_$_%' ESCAPE '$';# 转义
123
```

### BETWEEN AND

员工编号在100到120之间的员工信息

```sql
SELECT 	*
FROM  	employees
WHERE 	employee_id >= 100 AND employee_id <= 120;
#================使用BETWEEN AND================
SELECT 	*
FROM  	employees
WHERE 	employee_id BETWEEN 100 AND 120;
1234567
```

### IN

查询员工的工种编号是`IT_PROG`、`AD_VP`、`AD_PRES`中的一个的员工名和工种编号

```sql
SELECT 	last_name, job_id
FROM 	employees
WHERE 	job_id IN ('IT_PROG','AD_VP','AD_PRES');
123
```

### IS NULL

查询没有奖金的员工名和奖金律

```sql
SELECT 	last_name, commission_pct
FROM 	employees
WHERE 	commission_pct IS NULL;
```

查询有奖金的员工名和奖金律

```sql
SELECT 	last_name, commission_pct
FROM 	employees
WHERE 	commission_pct IS NOT NULL;
```

### 安全等于 <=>

```sql
SELECT 	last_name, commission_pct
FROM 	employees
WHERE 	commission_pct <=> NULL;
```

# MySQL——[子查询](https://so.csdn.net/so/search?q=子查询&spm=1001.2101.3001.7020)用法

## 1、子查询概述

> 子查询简介

子查询指一个查询语句嵌套在另一个查询语句内部的查询，内部的查询是外部查询的条件，这个特性从MySQL4.1开始引入。

SQL中子查询的使用大大增强了SELECT查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。

> 子查询基本使用

语法：

```sql
SELECT -- 主查询
    select_list
FROM
    table
WHERE
    expr operator > (SELECT -- 子查询
            select_list
        FROM
            table);
123456789
```

子查询(内查询)在主查询之前执行完成。

子查询的结果被主查询(外查询)使用。

注意事项：

- 子查询要包含在括号内
- 将子查询放在比较条件的右侧
- 单行操作符对应单行子查询，多行操作符对应多行子查询

> 子查询的分类

按子查询的结果返回一条还是多条记录，将子查询分为单行子查询和多行子查询。

按子查询是否被执行多次，将子查询划分为相关(或关联)子查询和不相关(或非关联)子查询。

## 2、子查询的使用

### 2.1、单行子查询

> 单行比较操作符

=等于，>大于，>=大于等于，<小于，<=小于等于，<>不等于

> 使用实例

```sql
-- 查找薪水大于所有员工平均薪水的员工
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees);

-- 查询工资大于149号员工工资的员工的信息
select employee_id,last_name,salary
from employees
where salary > (
    select salary from employees where employee_id = 149)
   
-- 返回job_id与141号员工相同，salary比143号员工多的员工姓名，job _id和工资
select last_name,job_id,salary
from employees
where job_id = (
    select job_id from employees where employee_id = 141
    )
and salary > (
    select salary from employees where employee_id = 143
    );

-- 返回公司工资最少的员工的last_name,job_id和salary
select last_name,job_id,salary
from employees
where salary = (
    select min(salary) from employees
    );

-- 查询与147号员工的manager_id和department_id相同的其他员工的employee_id，manager_id，department_id
select employee_id,manager_id,department_id
from employees
where manager_id = (
    select manager_id from employees where employee_id = 147
    )
and department_id = (
    select department_id from employees where employee_id = 147
    )
and employee_id <> 147;    
    
-- 查询最低工资大于50号部门最低工资的部门id和其最低工资
select department_id,min(salary) min_salary
from employees
where department_id is not null
group by department_id
having min_salary > (
    select min(salary) from employees where department_id = 50
    );
    
    

```

### 2.2、多行子查询

> 多行子查询比较操作符

| 操作符 | 含义                                                     |
| ------ | -------------------------------------------------------- |
| IN     | 等于列表中的任意一个                                     |
| ANY    | 需要和单行比较操作符一起使用，和子查询返回的某一个值比较 |
| ALL    | 需要和单行比较操作符一起使用，和子查询返回的所有值比较   |
| SOME   | 实际上是ANY的别名，作用相同，一般常使用ANY               |

```sql
-- 查找属于位置ID为1700的所有员工
SELECT
    employee_id, first_name, last_name
FROM
    employees
WHERE
    department_id IN (SELECT
            department_id
        FROM
            departments
        WHERE
            location_id = 1700)
ORDER BY first_name , last_name;

-- 返回其它job id中比job id为'IT_PROG’部门任一工资低的员工的员工号姓名、job id以及salary
select last_name,job_id,salary
from employees
where salary < any (
    select salary from employees where job_id = 'IT_PROG'
)
and job_id <> 'IT_PROG';

-- 返回其它job id中比job id为'IT_PROG’部门所有工资低的员工的员工号姓名、job id以及salary
select last_name,job_id,salary
from employees
where salary < all (
    select salary from employees where job_id = 'IT_PROG'
)
and job_id <> 'IT_PROG';

-- 查询平均工资最低的部门ID
-- 方式一：
select department_id,avg(salary) from employees group by department_id order by avg(salary) limit 1;
-- 方式二：
select department_id
from employees
group by department_id
having avg(salary) = (
    select min(avg_sal)
    from (
     select avg(salary) avg_sal from employees group by department_id
         ) t_dept_avg_sal
    )
-- 方式三：
select department_id
from employees
group by department_id
having avg(salary) <= all (
    select avg(salary) from employees group by department_id
);

-- 查询员工表中是领导的员工信息
select employee_id,last_name,manager_id
from employees
where employee_id in (
    select manager_id from employees
    );
    
-- 查询员工表中不是领导的员工信息
select employee_id,last_name,manager_id
from employees
where employee_id not in (
    select manager_id from employees where manager_id is not null
    );
12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364
```

### 2.3、[相关子查询](https://so.csdn.net/so/search?q=相关子查询&spm=1001.2101.3001.7020)

如果子查询的执行依赖于外部查询，通常情况下都是因为子查询中的表用到了外部的表，并进行了条件关联，因此每执行一次外部查询，子查询都要重新计算一次，这样的子查询就称之为关联子查询。

相关子查询按照一行接一行的顺序执行，主查询的每一行都执行一次子查询。

> 使用实例

```sql
-- 查询员工中工资大于本部门平均工资的员工的last_name, salary和其department_id
-- 方式一
select last_name,salary,department_id
from employees e1
where salary > (
    select avg(salary) from employees e2 where e1.department_id = e2.department_id
    );
-- 方式二
select last_name,salary,e.department_id
from employees e ,(select department_id,avg(salary) avg_sal from employees group by department_id) t_dept_avg_sal
where e.department_id = t_dept_avg_sal.department_id
and e.salary > t_dept_avg_sal.avg_sal;

-- 查询员工的id,salary,按照department_name排序
select employee_id,salary
from employees e
order by (
    select department_name from departments d where e.department_id = d.department_id
             );
                     
1234567891011121314151617181920
```

> EXISTS与NOT EXISTS

`EXISTS`运算符用于指定子查询中是否存在满足条件的行，

如果子查询包含任何行，则`EXISTS`运算符返回`true`。 否则它返回`false`。

`EXISTS`运算符在找到行后立即终止查询处理，因此，可以利用`EXISTS`运算符的此功能来提高查询性能

NOT EXISTS 表示如果不存在某种条件，则返回true，否则返回true。

使用实例：

```sql
-- 查找管理者的id，姓名，工作和部门id
select employee_id,last_name,job_id,department_id
from employees e1
where exists(
    select * from employees e2 where e1.employee_id = e2.manager_id
          )
          
-- 查询departments表中，不存在于employees表中的部门的department_id和department_name
-- 方式一
select department_id,department_name
from departments d
where not exists(
    select * from employees e where d.department_id = e.department_id
    );
-- 方式二
select d.department_id,department_name
from departments d left join employees e on d.department_id = e.department_id
where e.department_id is null;          
          
12345678910111213141516171819
```

### 子查询练习题

```sql
#1.查询和Zlotkey相同部门的员工姓名和工资
select last_name,salary
from employees
where department_id in (
    select department_id from employees where last_name = 'Zlotkey'
    )
and last_name <> 'Zlotkey';

#2.查询工资比公司平均工资高的员工的员工号，姓名和工资。
select employee_id,last_name,salary
from employees
where salary > (
    select avg(salary) from employees
    );

#3.选择工资大于所有JOB_ID = 'SA_MAN'的员工的工资的员工的last_name，job_id, salary
select last_name,job_id,salary
from employees
where salary > (
    select max(salary) from employees where job_id = 'SA_MAN'
    );

#4.查询和姓名中包含字母u的员工在相同部门的员工的员工号和姓名
select employee_id,last_name
from employees
where department_id in (
    select department_id from employees where last_name like '%u%'
    );

#5.查询在部门的location_id为1700的部门工作的员工的员工号
select employee_id
from employees e
where department_id in (
    select department_id from departments where location_id = 1700
    );

#6.查询管理者是King的员工姓名和工资
select last_name,salary
from employees
where  manager_id in (
    select employee_id from employees where last_name = 'K_ing'
    );


#7.查询工资最低的员工信息: last_name,salary
select last_name,salary
from employees
order by salary
limit 1;

select last_name,salary
from employees
where salary = (
    select min(salary) from employees
    );

#8.查询平均工资最低的部门信息
-- 方式一：
select * from departments
where department_id = (
    select department_id
    from employees
    group by department_id
    order by avg(salary)
    limit 1
    );
-- 方式二：
select * from departments
where department_id = (
    select department_id
    from employees
    group by department_id
    having avg(salary) = (
       select min(avg_sal) from (select avg(salary) avg_sal from employees group by department_id) t_sal
    )
);
-- 方式三：
select * from departments
where department_id = (
    select department_id
    from employees
    group by department_id
    having avg(salary) <= all (select avg(salary) from employees group by department_id)
    );

#9.查询平均工资最低的部门信息和该部门的平均工资,子查询可以写在查询字段里面
select d.* ,(select avg(salary) from employees where department_id = d.department_id) avg_sal
from departments d
where department_id = (
    select department_id
    from employees
    group by department_id
    having avg(salary) <= all (select avg(salary) from employees group by department_id)
    );

#10.查询平均工资最高的job 信息
-- 方式一：
select * from jobs
where job_id = (
    select job_id
    from employees
    group by job_id
    having avg(salary) >= all (
        select avg(salary) from employees group by job_id )
    );
-- 方式二：
select * from jobs
where job_id = (
    select job_id
    from employees
    group by job_id
    order by avg(salary) desc
    limit 1
    );

#11.查询平均工资高于公司平均工资的部门有哪些?
select distinct department_id
from employees
where department_id is not null
group by department_id
having avg(salary) > (
    select avg(salary) from employees
    );

#12.查询出公司中所有manager 的详细信息
-- 方式一
select employee_id,last_name,salary,department_id
from employees e1
where exists(
    select * from employees e2 where e1.employee_id = e2.manager_id
          );
-- 方式二
select distinct man.employee_id,man.last_name,man.salary,man.department_id
from employees emp
join employees man
on emp.manager_id = man.employee_id  ;

-- 方式三 子查询
select employee_id,last_name,salary,department_id
from employees
where employee_id in (
    select distinct manager_id from employees
    );

#13.查各个部门最高的工资中 最低的那个部门的最低工资多少
-- 方式一：
select department_id,min(salary) from employees
where department_id = (
    select department_id from employees
    group by department_id
    having max(salary) = (
    select min(max_sal)
        from employees e, ( select max(salary) max_sal
                            from employees
                            where department_id is not null
                            group by department_id ) t_min_sal
    ));
-- 方式二：
select department_id,min(salary) from employees
where department_id = (
    select department_id from employees
    group by department_id
    having max(salary) <= all (
        select max(salary) from employees
        group by department_id)
    );
-- 方式三：
select min(salary) from employees
where department_id = (
    select department_id from employees
    group by department_id
    having max(salary) = (
       select max(salary) from employees
       group by department_id
       order by max(salary)
       limit 1 )
    );
-- 方式四：
select min(salary) from employees e,( select department_id, max(salary) from employees
                                    group by department_id
                                    order by max(salary)
                                    limit 1) t_max_sal
where e.department_id = t_max_sal.department_id;
#14.查询平均工资最高的部门的 manager的详细信息: last_name，department_id,email,salary
-- 方式一：
select last_name,department_id,email,salary
from employees
where employee_id = (
    select manager_id
    from departments
    where department_id = (
        select department_id from employees
        group by department_id
        order by avg(salary) desc
        limit 1)
    );
-- 方式二：
select last_name,department_id,email,salary
from employees
where employee_id = (
select manager_id from departments
where department_id = (
    select department_id
    from employees
    group by department_id
    having avg(salary) >= all (
        select avg(salary)
        from employees
        where department_id is not null
        group by department_id)
    )
 );
-- 方式三：
select last_name,department_id,email,salary from employees
where employee_id = (
    select manager_id from departments
    where department_id = (
        select department_id
        from employees
        group by department_id
        having avg(salary) = (
           select max(avg_sal) from (select avg(salary) avg_sal
           from employees
           where department_id is not null
           group by department_id) t_avg_sql
    ))
 );
#15．查询部门的部门号，其中不包括job_id是"ST_CLERK"的部门号
-- 方式一：
select department_id
from departments
where department_id not in (
    select distinct department_id
    from employees e1
    where job_id = 'ST_CLERK'
    );
-- 方式二：
select department_id
from departments d
where  not exists (
    select *
    from employees e1
    where d.department_id = e1.department_id and job_id = 'ST_CLERK'
    );
#16．选择所有没有管理者的员工的last_name
select last_name
from employees e1
where not exists(
    select * from employees e2 where e1.manager_id = e2.employee_id
    );

#17．查询员工号、姓名、雇用时间、工资，其中员工的管理者为 'De Haan '
-- 方式一：自连接
select e1.employee_id,e1.last_name,e1.hiredate,e1.salary
from employees e1,employees e2
where e1.manager_id = e2.employee_id and e2.last_name = 'De Haan';

-- 方式二：子查询
select employee_id,last_name,hiredate,salary
from employees
where manager_id in (
    select employee_id from employees where last_name = 'De Haan'
    );

#18.查询各部门中工资比本部门平均工资高的员工的员工号，姓名和工资（相关子查询)
-- 方式一：
select employee_id,salary,last_name
from employees e1
where salary > (
    select avg(salary) from employees e2 where e1.department_id = e2.department_id
    );
-- 方式二：
select employee_id,salary,last_name
from employees e,(select department_id,avg(salary) avg_sal from employees group by department_id) t_avg_sal
where e.department_id = t_avg_sal.department_id and e.salary > t_avg_sal.avg_sal;

#19.查询每个部门下的部门人数大于5的部门名称（相关子查询)I
select department_name
from departments d
where 5 < (
    select count(*) from employees e where e.department_id = d.department_id
    );
#20.查询每个国家下的部门个数大于2的国家编号(相关子查询)
select country_id
from locations l
where 2 < (
    select count(*) from departments d where l.location_id = d.location_id
    );
```

# 子查询

子查询就是指的在一个完整的查询语句之中，嵌套若干个不同功能的小查询，从而一起完成复杂查询的一种编写形式，为了让读者更加清楚子查询的概念。

**子查询返回结果**
**子查询可以返回的数据类型一共分为四种：**

1. 1. 单行单列：返回的是一个具体列的内容，可以理解为一个单值数据；
   2. 单行多列：返回一行数据中多个列的内容；
   3. 多行单列：返回多行记录之中同一列的内容，相当于给出了一个操作范围；
   4. 多行多列：查询返回的结果是一张临时表；

## **在****WHERE****子句中使用子查询**

**在WHERE子句之中处理单行单列子查询、多行单列子查询、单行多列子查询。**

### **单行单列子查询**

 **示例一、**查询公司之中工资最低的雇员的完整信息

```
--查询公司之中工资最低的雇员的完整信息
SELECT * 
FROM emp e
WHERE e.sal=(
  SELECT MIN(sal) 
  FROM emp);
```

**例二、**查询出基本工资比ALLEN低的全部雇员信息

```
-- 查询出基本工资比ALLEN低的全部雇员信息
SELECT * 
FROM emp e
WHERE e.sal<(
 SELECT sal 
 FROM emp 
 WHERE ename='ALLEN'
);
```

***\*示例三、\****查询基本工资高于公司平均薪金的全部雇员信息

```
--查询基本工资高于公司平均薪金的全部雇员信息
SELECT *
FROM emp e
WHERE e.sal>(
SELECT AVG(sal)
FROM emp);
```

### ***\*单行多列子查询。\****

**示例四、**查找出与ALLEN从事同一工作，并且基本工资高于雇员编号为7521的全部雇员信息,

```
--查找出与ALLEN从事同一工作，并且基本工资高于雇员编号为7521的全部雇员信息,
SELECT *
FROM emp e
WHERE e.job=(
  SELECT job
  FROM emp 
  WHERE ename='ALLEN') 
  AND e.sal>(
  SELECT sal
  FROM emp 
  WHERE empno=7521);
```

***\*示例五、\****查询与SCOTT从事同一工作且工资相同的雇员信息

```
SELECT *
FROM emp e
WHERE (e.job,e.sal) = (
  SELECT job,sal
  FROM emp 
  WHERE ename='SCOTT')
  AND ename<>'SCOTT';
```

**示例六、**查询与雇员7566从事同一工作且领导相同的全部雇员信息

```
--查询与雇员7566从事同一工作且领导相同的全部雇员信息
SELECT *
FROM emp e
WHERE (e.job,e.mgr) =(
        SELECT job,mgr
        FROM emp
      WHERE empno=7566
);
```

***\*示例七、\****查询与ALLEN从事同一工作且在同一年雇佣的全部雇员信息（包括ALLEN）

```
--查询与ALLEN从事同一工作且在同一年雇佣的全部雇员信息（包括ALLEN）
SELECT *
FROM emp e
WHERE (e.job,to_char(e.hiredate,'yyyy'))=(
           SELECT job,to_char(hiredate,'YYYY')
            FROM emp
            WHERE ename='ALLEN'
);
```

### 多行单列子查询

 

主要使用三种操作符：IN、ANY、ALL

 **IN操作**

**示例八、**查询出与每个部门中最低工资相同的全部雇员信息

```
--查询出与每个部门中最低工资相同的全部雇员信息
SELECT *
FROM emp e
WHERE e.sal IN(
     SELECT MIN(sal)
    FROM emp
    GROUP BY deptno
);
```

***\*示例九、\****查询出不与每个部门中最低工资相同的全部雇员信息

```\
--查询出不与每个部门中最低工资相同的全部雇员信息
SELECT *
FROM emp e
WHERE e.sal NOT IN(
     SELECT MIN(sal)
    FROM emp
    GROUP BY deptno
);
```

**ANY在使用中有如下三种使用形式：**
=ANY：表示与子查询中的每个元素进行比较，功能与IN类似（然而<>ANY不等价于NOT IN）
\>ANY：比子查询中返回结果的最小的要大（还包含了>=ANY）
<ANY：比子查询中返回结果的最大的要小（还包含了<=ANY）

**示例十、**查询出每个部门经理的工资

```
--查询出每个部门经理的工资

SELECT  * 
FROM emp 
WHERE sal = ANY (
   SELECT MIN (sal)
  FROM emp
  WHERE job='MANAGER'
  GROUP BY deptno
);
```

***\*示例十一、\****查询出每个部门大于经理的工资

```
--查询出每个部门大于经理的工资
SELECT  * 
FROM emp 
WHERE sal > ANY (
   SELECT MIN (sal)
  FROM emp
  WHERE job='MANAGER'
  GROUP BY deptno
);
```

**示例十二、**查询出每个部门小于经理的工资

```
--查询出每个部门小于经理的工资
SELECT  * 
FROM emp 
WHERE sal < ANY (
   SELECT MIN (sal)
  FROM emp
  WHERE job='MANAGER'
  GROUP BY deptno
);
```

**ALL操作符有以下三种用法：**
<>ALL：等价于NOT IN（但是=ALL并不等价于IN）
\>ALL：比子查询中最大的值还要大（还包含了>=ALL）
<ALL：比子查询中最小的值还要小（还包含了<=ALL）

***\*示例十三、\****查询出每个部门不等于经理的工资

```
--查询出每个部门不等于经理的工资
SELECT  * 
FROM emp 
WHERE sal <> ALL (
   SELECT MIN (sal)
  FROM emp
  WHERE job='MANAGER'
  GROUP BY deptno
);
```

**示例十四、**

```
SELECT  * 
FROM emp 
WHERE sal < ALL (
   SELECT MIN (sal)
  FROM emp
  WHERE job='MANAGER'
  GROUP BY deptno
);
```

***\*示例十五、\****

```
SELECT  * 
FROM emp 
WHERE sal >ALL (
   SELECT MIN (sal)
  FROM emp
  WHERE job='MANAGER'
  GROUP BY deptno
);
```

空数据判断

在SQL之中提供了一个exists结构用于判断子查询是否有数据返回。如果子查询中有数据返回，则exists结构返回true，反之返回false。

***\**\*\*\*示例十五、\*\*\*\*\****验证exists结构

```
--验证exists结构
SELECT * FROM emp
    WHERE EXISTS(   --返回空值，没有内容输出
      SELECT * FROM emp WHERE empno=9999); --没有这个编号的员工
```

***\*示例十六、\****

```
 SELECT * FROM emp
 WHERE EXISTS(SELECT * FROM emp);--有内容将返回数据
```

***\**\*示例十七、\*\**\***

```
  SELECT * FROM emp
 WHERE NOT EXISTS(SELECT * FROM emp);--有数据，但取返，没有内容输出
 SELECT * FROM emp
 WHERE NOT EXISTS(SELECT * FROM emp);--有数据，但取返，没有内容输出
```