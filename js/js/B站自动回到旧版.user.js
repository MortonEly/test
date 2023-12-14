// ==UserScript==
// @name         B站自动回到旧版
// @namespace space_bilibili.com_435022639
// @version      0.7
// @description  自动让B站界面回到旧版，如果需要切到新版请关闭脚本后点击切回新版按钮,该脚本免费获得
// @author       深蓝之亘
// @match        *://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    document.cookie = "i-wanna-go-back=1; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "go-back-dyn=1; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";//视频界面所需的cookie第一调整值
    document.cookie = "go-back-dyn=1; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";//动态界面所需的cookie值调整
    document.cookie = "buvid3=7BCEB767-5439-60A7-B824-A709C4F4D09744047infoc; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "buvid4=6678A7B6\-9A9C\-F451\-7042\-EA6AFE0FC44C30900\-023071215\-QzuQxZU\%2FtBR4UUgJSIp4jQ\%3D\%3D; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "go_old_video=1; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";//视频界面所需的cookie第二调整值
    document.cookie = "FEED_LIVE_VERSION=V_LIVE_2; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "PVID=3; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "browser_resolution=1536-715; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.cookie = "nostalgia_conf=2; domain=.bilibili.com; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
})();