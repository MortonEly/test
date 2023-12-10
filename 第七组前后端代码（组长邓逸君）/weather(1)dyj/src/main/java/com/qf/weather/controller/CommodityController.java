package com.qf.weather.controller;

import com.qf.weather.bean.Book;
import com.qf.weather.bean.Commodity;
import com.qf.weather.service.BookService;
import com.qf.weather.service.CommodityService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * DYJ
 */
@Controller
@RequestMapping("commodity")
@CrossOrigin
public class CommodityController {
    @Resource
    CommodityService service;

    @RequestMapping("add")
    @ResponseBody
    public String add(@RequestBody Commodity commodity) {
        int i = service.add(commodity);
        String str = "{\"code\":200,\"msg\":\"success\"}";
        if (i == 0) {
            str = "{\"code\":500,\"msg\":\"err\"}";
        }
        return str;
    }
    @RequestMapping("list")
    @ResponseBody
    public List<Commodity> commodityList() {

        return service.findAll();
    }
}
