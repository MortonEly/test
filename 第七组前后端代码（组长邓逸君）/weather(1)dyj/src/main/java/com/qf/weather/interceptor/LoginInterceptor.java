package com.qf.weather.interceptor;

import com.qf.weather.bean.ResultVO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

/**
 * DYJ
 */
@Component
public class LoginInterceptor implements HandlerInterceptor {
//  前置拦截器   //所有的受限请求都会被此拦截器拦截：
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String method = request.getMethod();

        if ("OPTIONS".equals(method)){
            return true;
        }
        String token = request.getHeader("token");

        if (token==null){
            response.setCharacterEncoding("utf-8");
            //返回前端给到json格式
            response.setContentType("application/json");
            ResultVO vo = new ResultVO(501,"请先登录",null);

            PrintWriter writer = response.getWriter();
            writer.print(new ObjectMapper().writer().writeValueAsString(vo));
            writer.flush();
            writer.close();
            return false;
        }else if (!token.endsWith("djj")){
            response.setCharacterEncoding("utf-8");
            //返回前端给到json格式
            response.setContentType("application/json");
            ResultVO vo = new ResultVO(502,"请重新登录",null);
            PrintWriter writer = response.getWriter();
            writer.print(new ObjectMapper().writer().writeValueAsString(vo));
            writer.flush();
            writer.close();
            return false;
        }
        else {
            return true;
        }
//        HttpSession session = request.getSession();
//        if( session.getAttribute("user") == null){
//
//            ResultVO vo = new ResultVO(501,"请先登录",null);
//            //把vo对象转换成json格式
//            String s = new ObjectMapper().writeValueAsString(vo);
//
//            response.setCharacterEncoding("utf-8");
//            //返回前端给到json格式
//            response.setContentType("application/json");
//
//            PrintWriter writer = response.getWriter();
//            writer.print(s);
//            writer.close();
//            //如果session中没有用户信息，则表示用户未登录
//            response.sendRedirect("/login.html");
//            return false;
//        }else{
//            //登录成功
//            return true;


    }

}
