package com.qf.weather.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * DYJ
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Commodity {
    private Integer commodityId;
    private String  commodityName;
    private String  commodityAuthor;
    private double  commodityPrice;
    private String  commodityDesc;
    private String img;
}
