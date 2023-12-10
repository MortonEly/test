package com.qf.weather.service;


import com.qf.weather.bean.Commodity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * DYJ
 */
public interface CommodityService {
    int add(Commodity commodity);

    List<Commodity> findAll();
}
