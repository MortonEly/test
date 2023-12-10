package com.qf.weather.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * description:
 * author:姚哥
 * 公众号:java架构栈
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Users {

    private int userId;
    private String userName;
    private String userPwd;
    private String money;

    public Users(int userId, String userName, String userPwd) {
        this.userId = userId;
        this.userName = userName;
        this.userPwd = userPwd;
    }
}
