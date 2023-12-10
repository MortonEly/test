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
public class ResultVO<T> {
    private int code;
    private String msg;
    private T data;
}
