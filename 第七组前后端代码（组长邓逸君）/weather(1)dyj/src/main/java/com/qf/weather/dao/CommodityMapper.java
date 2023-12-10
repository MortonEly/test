package com.qf.weather.dao;

import com.qf.weather.bean.Book;
import com.qf.weather.bean.Commodity;

import java.util.List;

/**
 * DYJ
 */
public interface CommodityMapper {
    int add(Commodity commodity);

    List<Commodity> findAll();
}
