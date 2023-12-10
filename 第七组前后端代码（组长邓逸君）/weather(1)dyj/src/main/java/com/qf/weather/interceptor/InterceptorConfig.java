package com.qf.weather.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * DYJ
 */
@Configuration
//配置拦截器
public class InterceptorConfig implements WebMvcConfigurer {
//    @Autowired
//    private LoginInterceptor loginInterceptor;
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        //配置登录拦截器：拦截所有请求，放行非受限请求的路径
//        registry.addInterceptor(loginInterceptor)
//                .addPathPatterns("/**")   //此拦截器会拦截所有请求
//                .excludePathPatterns("/user/**") //放行/user/**路径
//                .excludePathPatterns("/index.html")
//                .excludePathPatterns("/login.html");
//    }
}
