package com.qf.weather.controller;

import com.qf.weather.bean.Weather;
import com.qf.weather.utils.HttpConn;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("weather")
@CrossOrigin
public class WeatherController {

    String url="https://tianqi.2345.com/";

    @RequestMapping("echarts")
    @ResponseBody

    public Weather weatherEcharts() {
        Weather weather = new Weather();


        try {
           String html = HttpConn.get(url);
            Document  document = Jsoup.parse(html);
         Elements elements = document.getElementsByClass("banner-right-con-list-time");
            List<String> timeList= new ArrayList<>();
            for (Element element : elements) {
                timeList.add(element.html());
            }
            weather.setTimeList(timeList);
            elements = document.getElementsByClass("banner-right-con-list-status");
            List<String> weatherList= new ArrayList<>();
            for (Element element : elements) {
                weatherList.add(element.html());
            }
            weather.setWeatherList(weatherList);
            elements = document.getElementsByClass("banner-right-con-list-temp");
            List<String> lowList= new ArrayList<>();
            List<String> highList= new ArrayList<>();
            for (Element element : elements) {
                String temp=element.html();
               String low= temp.split("~")[0];
                String high= temp.split("~")[1].replace("°","");
                lowList.add(low);
                highList.add(high);
            }
            weather.setLowList(lowList);
            weather.setHighList(highList);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return weather;
    }
}
