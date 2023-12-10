package com.qf.weather.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

/**
 * description:
 * author:姚哥
 * 公众号:java架构栈
 */
/*
* @Data:替换掉get/set
* @AllArgsConstructor:替换掉全参构造器
* @NoArgsConstructor:替换掉无参构造器
* @ToString:替换掉toString方法
* 当需要获得一条数据时，可以使用一个实体类的对象来接收
* 当需要获得多条数据时，可以使用一个实体类的对象集合来接收 List<Book>
* */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Book {

    //名称规范
    private int     bookId;
    private String  bookName;
    private String  bookAuthor;
    private double  bookPrice;
    private String  bookDesc;
}
