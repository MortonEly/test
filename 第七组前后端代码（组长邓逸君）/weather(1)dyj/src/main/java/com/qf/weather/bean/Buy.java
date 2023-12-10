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
public class Buy {
    private String userName;
    private  String userPwd;
    private  String money;
    private String forName;
    private String toName;
}
