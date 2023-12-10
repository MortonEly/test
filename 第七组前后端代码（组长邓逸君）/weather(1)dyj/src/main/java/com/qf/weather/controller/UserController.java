package com.qf.weather.controller;

import com.qf.weather.bean.*;
import com.qf.weather.service.UserService;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("user")
@CrossOrigin
public class UserController {
    @Resource
    UserService service;

// http://localhost:9999/user/login

    @RequestMapping("login")
    @ResponseBody
    public String login(@RequestBody User user) {
        User u = service.findByNameAndPwd(user.getUserName(), user.getUserPwd());
        String str = "{\"code\":200,\"msg\":\"success\"}";
    if (u == null){
        str ="{\"code\":500,\"msg\":\"err\"}";
    }
    return  str;
    }


    @RequestMapping("add")
    @ResponseBody
    public String add(@RequestBody User user) {
        System.out.println(user);
        int i = service.addUser(user);
        String str = "{\"code\":200,\"msg\":\"success\"}";
        if (i == 0) {
            str = "{\"code\":500,\"msg\":\"err\"}";
        }
        return str;
    }

    @RequestMapping("list")
    @ResponseBody
    public List<User> userList() {

        return service.listUser();
    }

    @RequestMapping("delete")
    @ResponseBody
    public String deleteuserid(int userId) {
        int i = service.deleteById(userId);
        String str = "{\"code\":200,\"msg\":\"success\"}";
        if (i == 0) {
            str = "{\"code\":500,\"msg\":\"err\"}";
        }
        return str;
    }

    @RequestMapping("/logins")
    public ResultVO login(String userName, String userPwd){
        if ("dyj".equals(userName) && "123456".equals(userPwd)){
//            登录成功以后将用户信息存放到session,并将sessionid响应给前端
            String token = userName+":djj";
            return new ResultVO(200,"success",token);
        }else {
            System.out.println("登录失败");
            return new ResultVO(500,"fail",null);
        }
    }

//    @RequestMapping("buy")
//    @ResponseBody
//    public String buy(String userName,String userPwd,String money,String forName,String toName) {
//       return service.transfer(userName,userPwd,money,forName,toName);
//    }
}

