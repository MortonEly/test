package com.qf.weather.controller;

import com.qf.weather.bean.Book;
import com.qf.weather.service.BookService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * description:
 * author:姚哥
 * 公众号:java架构栈
 */
@Controller
@RequestMapping("book")
@CrossOrigin
public class BookController {

    @Resource
    BookService service;

    //localhost:9999/book/list
    @RequestMapping("list")
    @ResponseBody
    public List<Book> bookList() {
        return service.findAll();
    }

    //http://localhost:9999/book/
    
    @RequestMapping("del")
    @ResponseBody
    public String deleteById(int bookId) {
        int i = service.deleteById(bookId);
        String str = "{\"code\":200,\"msg\":\"success\"}";
        if (i == 0) {
            str = "{\"code\":500,\"msg\":\"err\"}";
        }
        return str;
    }

    @RequestMapping("add")
    @ResponseBody
    public String add(@RequestBody Book book) {
        int i = service.add(book);
        String str = "{\"code\":200,\"msg\":\"success\"}";
        if (i == 0) {
            str = "{\"code\":500,\"msg\":\"err\"}";
        }
        return str;
    }

    @RequestMapping("update")
    @ResponseBody
    public String update(@RequestBody Book book) {
        int i = service.update(book);
        String str = "{\"code\":200,\"msg\":\"success\"}";
        if (i == 0) {
            str = "{\"code\":500,\"msg\":\"err\"}";
        }
        return str;
    }
}
