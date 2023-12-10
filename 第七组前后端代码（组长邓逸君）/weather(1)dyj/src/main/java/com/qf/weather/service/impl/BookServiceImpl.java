package com.qf.weather.service.impl;

import com.qf.weather.bean.Book;
import com.qf.weather.dao.BookMapper;
import com.qf.weather.service.BookService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * description:
 * author:姚哥
 * 公众号:java架构栈
 */
//@Service 表示将当前类交给spring管理
@Service
public class BookServiceImpl implements BookService {

    //依赖注入 相当于BookMapper mapper=new BookMapperImpl();
    @Resource
    BookMapper mapper;

    @Override
    public List<Book> findAll() {
        return mapper.findAll();
    }

    @Override
    public int deleteById(int bookId) {
        return mapper.deleteById(bookId);
    }

    @Override
    public int add(Book book) {
        return mapper.add(book);
    }

    @Override
    public int update(Book book) {
        return mapper.update(book);
    }
}
