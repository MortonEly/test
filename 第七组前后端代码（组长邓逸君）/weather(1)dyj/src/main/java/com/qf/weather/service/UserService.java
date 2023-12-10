package com.qf.weather.service;

import com.qf.weather.bean.Book;
import com.qf.weather.bean.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserService {
    User findByNameAndPwd(String userName, String userPwd);

    int addUser(User user);

    List<User> listUser();

    int  deleteById(int userId);

//    String transfer(String userName,String userPwd,String money,String forName,String toName);

}
