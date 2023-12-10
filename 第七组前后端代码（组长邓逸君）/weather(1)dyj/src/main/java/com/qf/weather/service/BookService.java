package com.qf.weather.service;

import com.qf.weather.bean.Book;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BookService {

    List<Book> findAll();
    int deleteById(int bookId);
    int add(Book book);
    int update(Book book);
}
