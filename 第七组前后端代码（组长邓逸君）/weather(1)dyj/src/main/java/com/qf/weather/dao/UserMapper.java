package com.qf.weather.dao;

import com.qf.weather.bean.User;
import com.qf.weather.bean.Users;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    User findByNameAndPwd(@Param("userName") String userName,@Param("userPwd") String userPwd);

    int addUser(User user);

    List<User> listUser();

    int deleteById(@Param("userId")int userId);


    //验证我方账户是否存在
//    Users verifyforname(@Param("forName")String forName);
//
//    //验证对方账户是否存在
//    Users verifytoname(@Param("toName")String toName);
//
//    //查询账户是否有钱
//    Users verifyfornamemoney(@Param("forName")String forName,@Param("money")String money);
//
//    //我方账户减钱
//    void updateforname(@Param("forName")String forName,@Param("money")String money);
//
//
//    //对方账户加钱
//    void updatetoname(@Param("toName")String toName,@Param("money")String money);
}
