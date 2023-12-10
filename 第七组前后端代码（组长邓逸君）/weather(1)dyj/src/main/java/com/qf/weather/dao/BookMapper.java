package com.qf.weather.dao;

import com.qf.weather.bean.Book;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BookMapper {

    //查询所有的信息
    List<Book> findAll();

    int deleteById(@Param("bookId" )int bookId);

    int add(Book book);

    int update(Book book);
}
