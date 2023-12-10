package com.qf.weather.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor@ToString
public class Weather {
    private List<String> timeList;
    private List<String> weatherList;
    private List<String> highList;
    private List<String> lowList;
}
