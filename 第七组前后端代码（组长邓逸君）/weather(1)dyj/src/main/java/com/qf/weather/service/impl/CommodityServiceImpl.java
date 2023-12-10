package com.qf.weather.service.impl;

import com.qf.weather.bean.Commodity;
import com.qf.weather.dao.BookMapper;
import com.qf.weather.dao.CommodityMapper;
import com.qf.weather.service.CommodityService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * DYJ
 */
@Service
public class CommodityServiceImpl implements CommodityService {
    @Resource
    CommodityMapper mapper;
    @Override
    public int add(Commodity commodity) {

        return mapper.add(commodity);

    }

    @Override
    public List<Commodity> findAll() {
        return mapper.findAll();
    }
}
