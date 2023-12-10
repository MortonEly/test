package com.qf.weather.service.impl;

import com.qf.weather.bean.Book;
import com.qf.weather.bean.User;
import com.qf.weather.bean.Users;
import com.qf.weather.dao.UserMapper;
import com.qf.weather.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    UserMapper userMapper;

    @Override
    public User findByNameAndPwd(String userName, String userPwd) {
        return userMapper.findByNameAndPwd(userName,userPwd);
    }

    @Override
    public int addUser(User user) {
        return userMapper.addUser(user);
    }

    @Override
    public List<User> listUser() {
        return userMapper.listUser();
    }

    @Override
    public int deleteById(int userId) {
        return userMapper.deleteById(userId);
    }

    //加该注解后，方法为一个事务
//    @Transactional
//    @Override
//    public String transfer(String userName,String userPwd,String money,String forName,String toName) {
//        Users one = userMapper.verifyforname(userName);
//        if ( one==null){
//            return "您输入的账户不存在";
//        }
//        Users two = userMapper.verifytoname(userName);
//        if ( two==null){
//            return "对方的账户不存在";
//        }
//        Users three = userMapper.verifyfornamemoney(forName, money);
//        if ( three.getMoney()==null){
//            return "我方账户余额充足";
//        }
//        userMapper.updateforname(forName, money);
//
//        userMapper.updatetoname(toName, money);
//        return "转账成功";
//    }
}
