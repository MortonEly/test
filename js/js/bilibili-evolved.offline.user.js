// ==UserScript==
// @name         Bilibili Evolved (Offline)
// @version      1246.26
// @description  Bilibili Evolved 的离线版, 所有功能都已内置于脚本中.
// @author       Grant Howard, Coulomb-G
// @copyright    2021, Grant Howard (https://github.com/the1812) & Coulomb-G (https://github.com/Coulomb-G)
// @license      MIT
// @match        *://*.bilibili.com/*
// @exclude      *://*.bilibili.com/*/mobile.html
// @exclude      *://*.bilibili.com/api/*
// @exclude      *://api.bilibili.com/*
// @exclude      *://api.*.bilibili.com/*
// @exclude      *://live.bilibili.com/h5/*
// @exclude      *://live.bilibili.com/*/h5/*
// @exclude      *://m.bilibili.com/*
// @exclude      *://mall.bilibili.com/*
// @exclude      *://member.bilibili.com/studio/bs-editor/*
// @exclude      *://www.bilibili.com/h5/*
// @exclude      *://www.bilibili.com/*/h5/*
// @exclude      *://bbq.bilibili.com/*
// @run-at       document-start
// @updateURL    https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/bilibili-evolved.offline.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/bilibili-evolved.offline.user.js
// @supportURL   https://github.com/the1812/Bilibili-Evolved/issues
// @homepage     https://github.com/the1812/Bilibili-Evolved
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.setClipboard
// @grant        GM.info
// @grant        GM.xmlHttpRequest
// @connect      raw.githubusercontent.com
// @connect      cdn.jsdelivr.net
// @connect      cn.bing.com
// @connect      www.bing.com
// @connect      translate.google.cn
// @connect      translate.google.com
// @connect      *
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.0/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js
// @require      https://cdn.jsdelivr.net/npm/jszip@3.1.5/dist/jszip.min.js
// @require      https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js
// @require      https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.js
// @icon         https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/images/logo-small.png
// @icon64       https://cdn.jsdelivr.net/gh/the1812/Bilibili-Evolved@master/images/logo.png
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
// @[ You can find all source codes in GitHub repo ]