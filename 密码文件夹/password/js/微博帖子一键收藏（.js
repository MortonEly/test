// ==UserScript==
// @name         微博帖子一键收藏（A656）
// @namespace    http://tampermonkey.net/
// @version      0.42
// @description  在微博网页端，为每个帖子创建一个收藏按钮，来试图解决帖子收藏的成本较高的问题。
// @author       Fat Cabbage
// @license      MIT
// @match        https://weibo.com/*
// @match        https://s.weibo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weibo.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

let blockConfig = new Map();
let onScrollFlag = false;
const buttonClassName = 'button_a656';

let rootNodeClass;
let postNodeFullClass;
let postNodeQuerySelector;
let buttonLocateClass;

let blogCache = {};

let domain;
const domainWeibo = 'weibo.com';
const domainSWeibo = 's.weibo.com';

(function () {
    'use strict';

    domain = document.domain;
    if (domain === domainWeibo) {
        rootNodeClass = 'vue-recycle-scroller__item-wrapper';
        postNodeFullClass = 'vue-recycle-scroller__item-view';
        buttonLocateClass = 'head_main';
    } else if (domain === domainSWeibo) {
        rootNodeClass = 'main-full';
        postNodeFullClass = 'card';
        buttonLocateClass = 'menu s-fr';
    } else {
        return;
    }

    setTimeout(() => {
        loadStyle();

        window.onscroll = () => {
            onScrollFlag = true;
        }

        updateFavoriteButton();
        listenRootBlock();

    }, 2000);
})();

function loadStyle() {
    let styleElement = document.createElement("style");
    document.body.parentElement.appendChild(styleElement);

    styleElement.sheet.insertRule(`.${buttonClassName}{${a565_button_style}}`, styleElement.sheet.cssRules.length);
}

function updateFavoriteButton() {
    onScrollFlag = true;
    setInterval(() => {
        if (onScrollFlag) {
            let list = [];

            for (let [node, config] of blockConfig) {
                let isVisible = isInViewPortOfOne(node)
                blockConfig.get(node)['isVisible'] = isVisible;

                if (isVisible) {
                    if (!config['isUpdated']) {
                        blockConfig.get(node)['isUpdated'] = true;
                        list.push(node);
                    }

                } else {
                    blockConfig.get(node)['isUpdated'] = false;
                }
            }

            let i = 0;
            let timer2 = setInterval(() => {
                if (i < list.length) {
                    let node = list[i++];
                    let blogID = getBlogID(node);

                    // let updateButtonText = () => {
                    //     let text;
                    //     if (blogCache[blogID]['favorited']) {
                    //         text = '取消收藏'
                    //     } else {
                    //         text = '收藏'
                    //     }
                    //     node.querySelector(`button[class="${buttonClassName}"]`).innerText = text;
                    // }

                    let buttonNode = node.querySelector(`button[class="${buttonClassName}"]`);

                    if (blogCache[blogID] == null) {
                        getFavoriteStatus(blogID).then(() => {
                            updateButtonText(blogID, buttonNode)
                        });

                    } else {
                        updateButtonText(blogID, buttonNode);
                    }

                    // let subFunc = function () {
                    //     getFavoriteStatus(node)
                    //         .then(value => {
                    //             node.querySelector(`button[class="${buttonClassName}"]`).innerText = value.toString();
                    //             node.click();
                    //         })
                    //         .catch(() => {
                    //             // Note: @Deprecated
                    //             // if (isInViewPortOfOne(node)) {
                    //             //     setTimeout(() => subFunc(), 50);
                    //             // }
                    //         });
                    // };
                    // subFunc();

                } else {
                    onScrollFlag = false;
                    clearInterval(timer2);
                }
            }, 100);
        }
    }, 100);
}

function listenRootBlock() {
    setInterval(() => {
        let rootNode = document.querySelector(`div[class="${rootNodeClass}"]`);
        if (rootNode == null) {
            return;
        }

        let isLoadEvent = rootNode.getAttribute('data_a656_is_load_event');
        if (isLoadEvent != null) {
            return;
        }

        rootNode.setAttribute('data_a656_is_load_event', true.toString());

        if (domain === domainWeibo) {
            rootNode.addEventListener('DOMNodeInserted', ev => {
                let target = getTopBlock(ev.target);
                if (target == null) {
                    return;
                }

                if (blockConfig.get(target) == null) {
                    blockConfig.set(target, {});
                }

                placeFavoriteButton(target);
            });
            onScrollFlag = true;

            let postList = rootNode.querySelectorAll(`div[class="${postNodeFullClass}"]`)
            postList.forEach(node => placeFavoriteButton(node));

        } else if (domain === domainSWeibo) {
            let postList = rootNode.querySelectorAll(`div[class="${postNodeFullClass}"]`);
            // postList.forEach(post => {
            //     if (blockConfig.get(post) == null) {
            //         blockConfig.set(post, {});
            //     }
            // });
            onScrollFlag = true;
            placeFavoriteButton(postList);
        }

    }, 500);
}

function placeFavoriteButton(node) {
    if (node == null) {
        return;
    }

    if (node.getAttribute('data_a656_value1') === 'true') {
        return;
    }

    node.setAttribute('data_a656_value1', true.toString());

    let buttonNode = createFavoriteButton();

    if (domain === domainWeibo) {
        let openButton = createOpenButton();

        let targetNode = node.querySelector(`div[class*="${buttonLocateClass}"]`);
        // targetNode.parentNode.insertBefore(openButton, targetNode.nextSibling);
        targetNode.parentNode.insertBefore(buttonNode, targetNode.nextSibling);

    } else if (domain === domainSWeibo) {
        let targetNode = node.querySelector(`div[class*="${buttonLocateClass}"]`);
        targetNode.appendChild(buttonNode);
    }
}

function createFavoriteButton() {
    let buttonNode = document.createElement('button');
    buttonNode.className = buttonClassName;
    // buttonNode.style.cssText = a565_button_style;
    buttonNode.addEventListener('click', ev => {

        let node = ev.target;
        let topNode = getTopBlock(node);
        let blogID = getBlogID(topNode);

        if (domain === 'weibo.com') {
            setTimeout(() => {

                topNode.querySelector('i[class*="morepop_action"]').click();

                setTimeout(() => {
                    let optionList = topNode.getElementsByClassName('woo-box-flex woo-box-alignCenter woo-pop-item-main');

                    optionList.forEach(ev => {
                        if (ev.innerText === '收藏' || ev.innerText === '取消收藏') {
                            ev.click();

                            setTimeout(() => {
                                getFavoriteStatus(blogID).then(favorited => {
                                    let info;
                                    if (favorited) {
                                        info = '取消收藏';
                                    } else {
                                        info = '收藏';
                                    }
                                    node.innerText = `${info}`;
                                })
                            }, 50);
                        }
                    });
                }, 10);
            }, 10);

        } else if (domain === 's.weibo.com') {
            // setTimeout(() => {
            //
            //     if (domain === domainWeibo) {
            //         topNode.querySelector('i[class*="morepop_action"]').click();
            //
            //     } else if (domain === domainSWeibo) {
            //         topNode.querySelector('a[action-type="fl_menu"] > i').click();
            //
            //     } else {
            //         return;
            //     }
            //
            //     setTimeout(() => {
            //         let optionList;
            //         if (domain === domainWeibo) {
            //             optionList = topNode.getElementsByClassName('woo-box-flex woo-box-alignCenter woo-pop-item-main');
            //
            //         } else if (domain === domainSWeibo) {
            //             optionList = topNode.querySelectorAll('ul[node-type="fl_menu_right"] > ul > a');
            //
            //         } else {
            //             return;
            //         }
            //
            //         optionList.forEach(ev => {
            //             if (ev.innerText === '收藏' || ev.innerText === '取消收藏') {
            //                 ev.click();
            //
            //                 let info;
            //                 if (ev.innerText === '收藏') {
            //                     info = '取消收藏';
            //                 } else {
            //                     info = '收藏';
            //                 }
            //                 node.innerText = `${info}`;
            //                 // toast(`已${ev.innerText}`, 500);
            //             }
            //         });
            //     }, 10);
            // }, 10);

        }


        // if (domain === 'weibo.com') {
        //
        //
        // } else if (domain === 's.weibo.com') {
        //     if (ev.innerText === '收藏' || ev.innerText === '取消收藏') {
        //         ev.click();
        //
        //         let info;
        //         if (ev.innerText === '收藏') {
        //             info = '取消收藏';
        //         } else {
        //             info = '收藏';
        //         }
        //         node.innerText = `${info}`;
        //     }
        // }

    });
    return buttonNode;
}

function createOpenButton() {
    let buttonNode = document.createElement('button');
    buttonNode.className = buttonClassName;
    // buttonNode.style.cssText = a565_button_style;
    buttonNode.addEventListener('click', ev => {
        let node = ev.target;
        let link = node.querySelector('a[class^="head-info_time"]').href;
        window.open(link);
    });
    return buttonNode;
}

function getBlogID(node) {
    let a = node.querySelector('a[class^="head-info_time"]').href;
    let index = a.lastIndexOf('/');
    return a.substring(index + 1);
}

function getFavoriteStatus(blogID) {
    return new Promise(resolve => {
        $.get(`https://weibo.com/ajax/statuses/show?id=${blogID}`).then(value => {
            blogCache[blogID] = {
                'ID': value.mid,
                'blogID': value.mblogid,
                'favorited': value.favorited
            };
            resolve(value.favorited);
        });

        // // topNode.querySelector('i[class*="morepop_action"]');
        // el.querySelector('i[class*="morepop_action"]').click();
        //
        // setTimeout(() => {
        //     el.getElementsByClassName('woo-box-flex woo-box-alignCenter woo-pop-item-main').forEach(ev => {
        //         if (ev.innerText === '收藏' || ev.innerText === '取消收藏') {
        //             resolve(ev.innerText);
        //         }
        //     });
        //     reject('收藏状态未知')
        // }, 50);
    });
}

function isInViewPortOfOne(el) {
    let viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    let screenTop = document.documentElement.scrollTop
    let screenBottom = screenTop + viewPortHeight

    let bounding = el.getBoundingClientRect();
    let top = screenTop + bounding.top;
    let bottom = bounding.bottom;

    return screenTop <= top && top <= screenBottom
}

function getTopBlock(node) {
    while (node != null) {
        if (node.className === postNodeFullClass) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}

function updateButtonText(blogID, buttonNode) {
    let text;
    if (blogCache[blogID]['favorited']) {
        text = '取消收藏'
    } else {
        text = '收藏'
    }
    // node.querySelector(`button[class="${buttonClassName}"]`).innerText = text;
    buttonNode.innerText = text;
}

function toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    let m = document.createElement('div');
    m.innerHTML = msg;

    m.style.setProperty('font-size', '20px', 'important');
    m.style.setProperty('color', 'rgb(255, 255, 255)', 'important');
    m.style.setProperty('background-color', 'rgba(0,0,0,0.6)', 'important');
    m.style.setProperty('border-style', 'solid', 'important');
    m.style.setProperty('border-color', '#ffffff', 'important');
    m.style.setProperty('z-index', '256', 'important');

    m.style.cssText = 'font-size: 20px; ' +
        'color: rgb(255, 255, 255); ' +
        'background-color: rgba(0,0,0,0.6); ' +
        'border-style: solid; ' +
        'border-color: #ffffff; ' +
        'z-index: 256; ' +
        'padding: 10px 15px; ' +
        'margin: 0 0 0 -60px; ' +
        'border-radius: 4px; ' +
        'position: fixed; ' +
        'top: 50%; ' +
        'left: 50%; ' +
        'width: 130px; ' +
        'text-align: center;';

    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(m)
        }, d * 1000);
    }, duration);
}

const a565_button_style = 'color-scheme: dark !important; ' +
    '--darkreader-neutral-background: #000000; ' +
    '--darkreader-neutral-text: #fffaf3; ' +
    '--darkreader-selection-background: #0036bd; ' +
    '--darkreader-selection-text: #ffffff; ' +
    '--w-picture-hover: rgba(0,0,0,0.15); ' +
    '--w-avatar-hover: rgba(0,0,0,0.15); ' +
    '--w-badge-size: 0.9375rem; ' +
    '--w-badge-text: var(--w-contrast); ' +
    '--w-liked-color: var(--w-special); ' +
    '--w-panel-background: var(--w-card-background); ' +
    '--w-radio-border: var(--w-disabled); ' +
    '--w-radio-check-color: var(--w-brand); ' +
    '--w-checkbox-border: var(--w-disabled); ' +
    '--w-checkbox-check-color: var(--w-brand); ' +
    '--w-layer-radius: 0.5rem; ' +
    '--w-layer-shadow: 0 0.125rem 0.25rem 0 rgba(0,0,0,0.1); ' +
    '--w-pop-wrap-radius: 0.4375rem; ' +
    '--w-pop-item-hover: var(--w-pophover-background); ' +
    '--w-switch-border-width: 0.09375em; ' +
    '--w-switch-height: 2em; ' +
    '--w-switch-inset: var(--w-switch-height); ' +
    '--w-switch-off-background: var(--w-contrast); ' +
    '--w-switch-off-border-color: var(--w-off-border); ' +
    '--w-switch-on-background: var(--w-brand); ' +
    '--w-tip-border: rgba(0,0,0,0.1); ' +
    '--w-tip-error-bg: rgba(255,237,219,0.95); ' +
    '--w-tip-warn-bg: #daeeff; ' +
    '--w-tip-warn: #507daf; ' +
    '--w-icon-size: 0.875em; ' +
    '--w-icon-an-dur: 2.1s; ' +
    '--w-icon-an-step: 15; ' +
    '--w-icon-an-count: 3; ' +
    '--darkreader-bg--w-picture-hover: rgba(0, 0, 0, 0.15); ' +
    '--w-avatar-size: 2.5em; ' +
    '--w-avatar-default: 1rem; ' +
    '--w-avatar-line: rgba(0,0,0,0.05); ' +
    '--w-avatar-cover: -0.5em -0.125em 0 -0.125em; ' +
    '--darkreader-bg--w-avatar-hover: rgba(0, 0, 0, 0.15); ' +
    '--darkreader-border--w-badge-size: 0.9375rem; ' +
    '--w-badge-gap: 0.125rem; ' +
    '--darkreader-text--w-badge-text: var(--darkreader-text--w-contrast); ' +
    '--w-badge-message: 0.75rem; ' +
    '--w-badge-dot: 0.625rem; ' +
    '--w-like-size: 1rem; ' +
    '--w-like-icon-size: 0.9375em; ' +
    '--w-like-font-size: 0.75em; ' +
    '--w-like-space: 0.625em; ' +
    '--darkreader-text--w-liked-color: var(--darkreader-text--w-special); ' +
    '--w-like-an-dur: 1s; ' +
    '--w-like-effect-size: 11.25rem; ' +
    '--darkreader-bg--w-panel-background: var(--darkreader-bg--w-card-background); ' +
    '--w-radio-size: 0.875em; ' +
    '--darkreader-text--w-radio-border: var(--darkreader-text--w-disabled); ' +
    '--w-radio-inset: 0.1875em; ' +
    '--darkreader-bg--w-radio-check-color: var(--darkreader-bg--w-brand); ' +
    '--darkreader-text--w-radio-check-color: var(--darkreader-text--w-brand); ' +
    '--w-radio-gap: 0.625em; ' +
    '--w-checkbox-size: 0.875em; ' +
    '--darkreader-text--w-checkbox-border: var(--darkreader-text--w-disabled); ' +
    '--w-checkbox-icon: 0.75em; ' +
    '--darkreader-bg--w-checkbox-check-color: var(--darkreader-bg--w-brand); ' +
    '--darkreader-text--w-checkbox-check-color: var(--darkreader-text--w-brand); ' +
    '--w-checkbox-gap: 0.625em; ' +
    '--w-checkbox-radius: 0.125em; ' +
    '--darkreader-border--w-layer-radius: 0.5rem; ' +
    '--darkreader-bg--w-layer-shadow: 0 0.125rem 0.25rem 0 rgba(0,0,0,0.1); ' +
    '--w-bubble-x: 1.25rem; ' +
    '--w-bubble-y: 1rem; ' +
    '--darkreader-border--w-pop-wrap-radius: 0.4375rem; ' +
    '--darkreader-bg--w-pop-item-hover: var(--darkreader-bg--w-pophover-background); ' +
    '--w-pop-item-icon: 1.125rem; ' +
    '--w-switch-default-size: 1rem; ' +
    '--darkreader-bg--w-switch-border-width: 0.09375em; ' +
    '--w-switch-width: 3.1875em; ' +
    '--darkreader-bg--w-switch-height: 2em; ' +
    '--w-switch-button: 1.875em; ' +
    '--w-switch-dur: 0.3s; ' +
    '--w-switch-radius: var(--w-switch-height); ' +
    '--darkreader-bg--w-switch-inset: var(--darkreader-bg--w-switch-height); ' +
    '--darkreader-bg--w-switch-off-background: var(--darkreader-bg--w-contrast); ' +
    '--darkreader-bg--w-switch-off-border-color: var(--darkreader-bg--w-off-border); ' +
    '--darkreader-bg--w-switch-on-background: var(--darkreader-bg--w-brand); ' +
    '--w-dialog-min-width: 15.375rem; ' +
    '--w-dialog-max-width: 25rem; ' +
    '--w-dialog-radius: 0.5rem; ' +
    '--w-dialog-close-color: var(--w-fonticon); ' +
    '--w-dialog-gap: 1.875rem; ' +
    '--w-tip-icon-size: 1rem; ' +
    '--darkreader-border--w-tip-border: rgba(146, 131, 109, 0.1); ' +
    '--darkreader-bg--w-tip-error-bg: rgba(48, 0, 0, 0.95); ' +
    '--darkreader-bg--w-tip-warn-bg: #000000; ' +
    '--darkreader-text--w-tip-warn: #6da9dc; ' +
    '--w-mask-background: rgba(0,0,0,0.5); ' +
    '--w-color-gray-3: #838383; ' +
    '--w-color-gray-8: #e9e9e9; ' +
    '--w-color-gray-9: #f8f8fb; ' +
    '--w-color-orange-3: #eb7350; ' +
    '--w-color-red: #e14123; ' +
    '--w-border-radius: 4px; ' +
    '--w-toast-text: var(--w-contrast); ' +
    '--w-toast-background: rgba(0,0,0,0.8); ' +
    '--w-color-orange-2: #ff5900; ' +
    '--w-b-flat-primary: var(--w-contrast); ' +
    '--w-b-flat-primary-bg: var(--w-brand); ' +
    '--w-b-flat-primary-bg-hover: var(--w-brand-hover); ' +
    '--w-b-flat-default: var(--w-main); ' +
    '--w-b-line-primary: var(--w-brand); ' +
    '--w-b-line-primary-bg-hover: rgba(51,51,51,0.1); ' +
    '--w-b-line-default: var(--w-main); ' +
    '--w-b-line-default-bg-hover: rgba(51,51,51,0.1); ' +
    '--w-color-light: #fff; ' +
    '--w-color-gray-1: #333; ' +
    '--w-color-gray-6: #f0f1f4; ' +
    '--w-color-gray-7: #ccc; ' +
    '--w-color-gray-2: #939393; ' +
    '--w-color-red-2: red; ' +
    '--w-color-orange-1: #ff8200; ' +
    '--darkreader-bg--w-mask-background: rgba(0, 0, 0, 0.5); ' +
    '--w-mask-opacity: 1; ' +
    '--w-modal-dur: 0.2s; ' +
    '--darkreader-text--w-color-gray-3: #a69986; ' +
    '--darkreader-border--w-color-gray-3: #3f494d; ' +
    '--w-color-gray-4: #f2f2f5; ' +
    '--w-color-gray-5: #fbfbfb; ' +
    '--darkreader-bg--w-color-gray-8: #000002; ' +
    '--darkreader-border--w-color-gray-8: #151c1f; ' +
    '--darkreader-bg--w-color-gray-9: #000000; ' +
    '--w-color-gray-10: #dfe1e8; ' +
    '--darkreader-bg--w-color-orange-3: #a20b00; ' +
    '--darkreader-text--w-color-orange-3: #ff7545; ' +
    '--darkreader-border--w-color-orange-3: #970800; ' +
    '--darkreader-text--w-color-red: #ff3f18; ' +
    '--w-gap: 8px; ' +
    '--darkreader-border--w-border-radius: 4px; ' +
    '--w-border-radius-l: 8px; ' +
    '--w-index-layer: 9999; ' +
    '--w-index-mask: 999; ' +
    '--w-index-nav: 99; ' +
    '--w-toast-width: 200px; ' +
    '--w-toast-height: 134px; ' +
    '--w-toast-radius: 8px; ' +
    '--darkreader-text--w-toast-text: var(--darkreader-text--w-contrast); ' +
    '--darkreader-bg--w-toast-background: rgba(0, 0, 0, 0.8); ' +
    '--w-toast-icon: 42px; ' +
    '--w-toast-message: 14px; ' +
    '--w-toast-message-line: 20px; ' +
    '--w-toast-message-gap: 14px; ' +
    '--w-toast-gap: 30px; ' +
    '--darkreader-bg--w-color-orange-2: #ee2e00; ' +
    '--darkreader-text--w-color-orange-2: #ff6000; ' +
    '--w-base-font-size: 16; ' +
    '--w-index-flow: 9; ' +
    '--w-color-schemes: primary,default; ' +
    '--darkreader-text--w-b-flat-primary: var(--darkreader-text--w-contrast); ' +
    '--darkreader-bg--w-b-flat-primary-bg: var(--darkreader-bg--w-brand); ' +
    '--darkreader-bg--w-b-flat-primary-bg-hover: var(--darkreader-bg--w-brand-hover); ' +
    '--darkreader-text--w-b-flat-default: var(--darkreader-text--w-main); ' +
    '--darkreader-text--w-b-line-primary: var(--darkreader-text--w-brand); ' +
    '--darkreader-bg--w-b-line-primary-bg-hover: rgba(0, 4, 5, 0.1); ' +
    '--w-b-line-primary-border: var(--w-brand-hover); ' +
    '--darkreader-text--w-b-line-default: var(--darkreader-text--w-main); ' +
    '--darkreader-bg--w-b-line-default-bg-hover: rgba(0, 4, 5, 0.1); ' +
    '--w-b-line-default-border: var(--w-sub); ' +
    '--w-button-round: 36px; ' +
    '--w-button-size: l,m,s; ' +
    '--w-button-padding: 16px 24px,9px 30px,8px 14px; ' +
    '--w-button-font-size: 16px,14px,12px; ' +
    '--w-button-hover: 0.8; ' +
    '--w-button-disabled: 0.5; ' +
    '--w-button-trans-dur: 0.2s; ' +
    '--w-button-icon-gap: calc(6em/var(--w-base-font-size)); ' +
    '--w-input-radius: 8px; ' +
    '--w-input-height: 38px; ' +
    '--w-input-indent: 12px; ' +
    '--w-input-font-size: 14px; ' +
    '--w-input-icon-size: 16px; ' +
    '--darkreader-bg--w-color-light: #000000; ' +
    '--darkreader-text--w-color-light: #ffffff; ' +
    '--darkreader-border--w-color-light: #0c1215; ' +
    '--darkreader-text--w-color-gray-1: #e9e1d7; ' +
    '--darkreader-bg--w-color-gray-6: #000000; ' +
    '--darkreader-border--w-color-gray-6: #12181b; ' +
    '--darkreader-bg--w-color-gray-7: #13191c; ' +
    '--darkreader-text--w-color-gray-7: #e9e1d7; ' +
    '--darkreader-border--w-color-gray-7: #21292c; ' +
    '--darkreader-text--w-color-gray-2: #b4a997; ' +
    '--darkreader-border--w-color-gray-2: #384246; ' +
    '--darkreader-text--w-color-red-2: #ff0000; ' +
    '--darkreader-border--w-color-red-2: #ca0000; ' +
    '--darkreader-bg--w-color-orange-1: #ee5d00; ' +
    '--darkreader-text--w-color-orange-1: #ff9600; ' +
    '--darkreader-border--w-color-orange-1: #ca4b00; ' +
    '--feed-skeleton-bg: var(--w-dividing-line); ' +
    '--feed-skeleton-shine-color: rgba(0,0,0,0.1); ' +
    '--feed-skeleton-shine-bg: linear-gradient(90deg,var(--feed-skeleton-bg),var(--feed-skeleton-shine-color) 50%,var(--feed-skeleton-bg)); ' +
    '--feed-picture-tag-bg: #eb7350; ' +
    '--feed-picture-mask-bg: rgba(0,0,0,0.5); ' +
    '--feed-picture-mask-color: #fff; ' +
    '--feed-video-story-text-color: #fff; ' +
    '--vote-skin-bd-item: var(--w-off-border); ' +
    '--vote-skin-bd-curr: var(--w-alink); ' +
    '--vote-skin-bg-item: var(--w-repost-background); ' +
    '--vote-skin-bg-curr: #f5e4dc; ' +
    '--vote-skin-icon-curr: var(--w-brand); ' +
    '--feed-title-color: var(--w-sub); ' +
    '--feed-title-trends-color: var(--w-alink); ' +
    '--feed-retweet-bg: var(--w-retweet-background); ' +
    '--feed-retweet-bg-hover: var(--w-repost-background); ' +
    '--feed-detail-og-color: var(--w-main); ' +
    '--weibo-top-nav-icon-badge-color: var(--w-badge-background); ' +
    '--weibo-top-nav-icon-active-color: var(--w-brand); ' +
    '--weibo-top-nav-icon-badge-border-color: var(--w-badge-border-color); ' +
    '--weibo-top-nav-aria-btn-color: var(--w-main); ' +
    '--weibo-top-nav-pub-icon-bg: linear-gradient(180deg,#f87c45,#f36126); ' +
    '--weibo-top-nav-search-bar-bg: var(--w-input-background); ' +
    '--weibo-top-nav-search-bar-bd: var(--w-input-background); ' +
    '--weibo-top-nav-search-bar-color: var(--w-main); ' +
    '--weibo-top-nav-search-bar-placeholder: var(--w-sub); ' +
    '--weibo-top-nav-search-bar-focus: var(--w-main); ' +
    '--weibo-top-nav-borderTop: 2px solid var(--w-brand); ' +
    '--weibo-top-nav-bgColor: transparent; ' +
    '--weibo-top-nav-boxShadow: none; ' +
    '--weibo-top-nav-loginBtn-bg: var(--w-brand); ' +
    '--weibo-top-nav-loginBtn-color: var(--w-contrast); ' +
    '--weibo-top-nav-registerBtn-color: var(--w-sub); ' +
    '--w-likediyed-color: var(--w-brand); ' +
    '--darkreader-bg--feed-skeleton-bg: var(--darkreader-bg--w-dividing-line); ' +
    '--darkreader-bgimg--feed-skeleton-bg: var(--darkreader-bg--w-dividing-line); ' +
    '--darkreader-bgimg--feed-skeleton-shine-color: rgba(0,0,0,0.1); ' +
    '--darkreader-bgimg--feed-skeleton-shine-bg: linear-gradient(90deg, var(--darkreader-bg--feed-skeleton-bg), var(--darkreader-bg--feed-skeleton-shine-color) 50%, var(--darkreader-bg--feed-skeleton-bg)); ' +
    '--frame-mod-gap-space: 8px; ' +
    '--darkreader-bg--feed-picture-tag-bg: #a20b00; ' +
    '--feed-picture-tag-font-size: 12px; ' +
    '--feed-picture-tag-line-height: 12px; ' +
    '--feed-picture-tag-border-radius: 8px 0 8px 0; ' +
    '--feed-picture-mask-border-width: 8px; ' +
    '--darkreader-bg--feed-picture-mask-bg: rgba(0, 0, 0, 0.5); ' +
    '--darkreader-text--feed-picture-mask-color: #ffffff; ' +
    '--feed-picture-mask-font-size: 20px; ' +
    '--feed-picture-mask-line-height: 20px; ' +
    '--feed-annotation-font-size: 12px; ' +
    '--feed-annotation-height: 24px; ' +
    '--feed-annotation-icon-size: 14px; ' +
    '--feed-video-detail-shadow: 0 0 4px rgba(0,0,0,0.1); ' +
    '--feed-video-story-logo-width: 80px; ' +
    '--darkreader-text--feed-video-story-text-color: #ffffff; ' +
    '--vote-pic-ani-width-l: 0; ' +
    '--vote-pic-ani-width-r: 0; ' +
    '--vote-skin-bg-o: var(--feed-retweet-bg); ' +
    '--darkreader-border--vote-skin-bd-item: var(--darkreader-border--w-off-border); ' +
    '--darkreader-border--vote-skin-bd-curr: var(--darkreader-border--w-alink); ' +
    '--darkreader-bg--vote-skin-bg-item: var(--darkreader-bg--w-repost-background); ' +
    '--darkreader-bg--vote-skin-bg-curr: #1f0000; ' +
    '--darkreader-text--vote-skin-icon-curr: var(--darkreader-text--w-brand); ' +
    '--header-height: var(--w-bar-height); ' +
    '--feed-outer-gap: 10px; ' +
    '--feed-inner-gap: 20px; ' +
    '--feed-inner-gap-bottom: 16px; ' +
    '--feed-row-gap: 10px; ' +
    '--feed-col-gap: 10px; ' +
    '--feed-title-width: 14px; ' +
    '--feed-title-height: 14px; ' +
    '--darkreader-text--feed-title-color: var(--darkreader-text--w-sub); ' +
    '--darkreader-text--feed-title-trends-color: var(--darkreader-text--w-alink); ' +
    '--feed-title-font-size: 12px; ' +
    '--feed-title-line-height: 16px; ' +
    '--darkreader-bg--feed-retweet-bg: var(--darkreader-bg--w-retweet-background); ' +
    '--darkreader-bg--feed-retweet-bg-hover: var(--darkreader-bg--w-repost-background); ' +
    '--feed-head-avatar-size: 50px; ' +
    '--feed-head-nick-font-size: 14px; ' +
    '--feed-head-nick-line-height: 20px; ' +
    '--feed-head-fast-line-height: 18px; ' +
    '--feed-head-info-font-size: 12px; ' +
    '--darkreader-text--feed-detail-og-color: var(--darkreader-text--w-main); ' +
    '--feed-detail-og-font-size: 14px; ' +
    '--feed-detail-og-line-height: 24px; ' +
    '--feed-detail-re-font-size: 12px; ' +
    '--feed-detail-re-line-height: 20px; ' +
    '--feed-slim-width: 66.6667%; ' +
    '--feed-tiny-width: 50%; ' +
    '--feed-toolbar-item-width: 88px; ' +
    '--feed-toolbar-height: 40px; ' +
    '--feed-toolbar-line-gap: 80px; ' +
    '--w-bar-height: 44px; ' +
    '--weibo-top-nav-icon-hover-width: 70px; ' +
    '--weibo-top-nav-icon-hover-height: 38px; ' +
    '--weibo-top-nav-icon-size: 30px; ' +
    '--darkreader-bg--weibo-top-nav-icon-badge-color: var(--darkreader-bg--w-badge-background); ' +
    '--darkreader-text--weibo-top-nav-icon-active-color: var(--darkreader-text--w-brand); ' +
    '--darkreader-border--weibo-top-nav-icon-badge-border-color: var(--darkreader-border--w-badge-border-color); ' +
    '--darkreader-text--weibo-top-nav-aria-btn-color: var(--darkreader-text--w-main); ' +
    '--bubble-bg: rgba(245,178,42,0.98); ' +
    '--bubble-text: hsla(0,0%,100%,0.85); ' +
    '--bubble-text-hover: #fff; ' +
    '--darkreader-bgimg--weibo-top-nav-pub-icon-bg: linear-gradient(180deg, #b01500, #ca1b00); ' +
    '--darkreader-bg--weibo-top-nav-search-bar-bg: var(--darkreader-bg--w-input-background); ' +
    '--darkreader-border--weibo-top-nav-search-bar-bd: var(--darkreader-border--w-input-background); ' +
    '--darkreader-text--weibo-top-nav-search-bar-color: var(--darkreader-text--w-main); ' +
    '--darkreader-text--weibo-top-nav-search-bar-placeholder: var(--darkreader-text--w-sub); ' +
    '--darkreader-text--weibo-top-nav-search-bar-focus: var(--darkreader-text--w-main); ' +
    '--full-width: 1320px; ' +
    '--main-width: 1122px; ' +
    '--simple-width: 832px; ' +
    '--mini-width: 790px; ' +
    '--weibo-top-nav-height: 60px; ' +
    '--weibo-top-nav-paddingTop: 0; ' +
    '--darkreader-border--weibo-top-nav-borderTop: 2px solid var(--darkreader-border--w-brand); ' +
    '--darkreader-bg--weibo-top-nav-bgColor: rgba(0, 0, 0, 0); ' +
    '--weibo-top-nav-bgImage: none; ' +
    '--darkreader-bg--weibo-top-nav-boxShadow: none; ' +
    '--weibo-top-nav-panel-bgColor: var(--w-card-background); ' +
    '--weibo-top-nav-panel-bd: var(--w-dividing-line); ' +
    '--weibo-top-nav-panel-bgImage: none; ' +
    '--weibo-top-nav-panel-bgImage-s: none; ' +
    '--darkreader-bg--weibo-top-nav-loginBtn-bg: var(--darkreader-bg--w-brand); ' +
    '--darkreader-text--weibo-top-nav-loginBtn-color: var(--darkreader-text--w-contrast); ' +
    '--darkreader-text--weibo-top-nav-registerBtn-color: var(--darkreader-text--w-sub); ' +
    '--feed-icon-height: 14px; ' +
    '--feed-icon-margin: 4px; ' +
    '--feed-icon-vertical: -3px; ' +
    '--w-likediy-size: 16px; ' +
    '--w-likediy-icon-size: 1em; ' +
    '--w-likediy-font-size: 0.75em; ' +
    '--w-likediy-space: 0.625em; ' +
    '--darkreader-text--w-likediyed-color: var(--darkreader-text--w-brand); ' +
    '--w-tip-green: #2aa045; ' +
    '--w-tip-green-bg: #1e2c20; ' +
    '--w-tip-green-a: #6290c3; ' +
    '--w-brand: #ea8011; ' +
    '--w-brand-hover: #e54f00; ' +
    '--w-main: #d3d3d3; ' +
    '--w-sub: #999; ' +
    '--w-hover: rgba(234,128,17,0.1); ' +
    '--w-contrast: #e5e5e5; ' +
    '--w-error: #d70000; ' +
    '--w-fonticon: #b2b2b2; ' +
    '--w-disabled: #939393; ' +
    '--w-alink: #d36747; ' +
    '--w-special: #ca3a1f; ' +
    '--w-retweet-background: #111114; ' +
    '--w-repost-background: #25252c; ' +
    '--w-card-background: #16161a; ' +
    '--w-input-background: #25252c; ' +
    '--w-pophover-background: #25252c; ' +
    '--w-whitebtn-background: hsla(0,0%,100%,0.2); ' +
    '--w-dividing-line: #202025; ' +
    '--w-card-border: #202025; ' +
    '--w-layer-border: #373741; ' +
    '--w-image-border: hsla(0,0%,100%,0.1); ' +
    '--w-off-border: #29292b; ' +
    '--w-off-border-new: #999; ' +
    '--w-badge-background: #e51c22; ' +
    '--w-badge-border-color: #16161a; ' +
    '--w-b-flat-default-bg: #25252c; ' +
    '--w-b-flat-default-bg-hover: #373741; ' +
    '--w-icon-skin: #16161a; ' +
    '--w-bubble-bg: rgba(209,133,10,0.98); ' +
    '--w-bubble-text: hsla(0,0%,82.7%,0.85); ' +
    '--w-bubble-text-hover: #d3d3d3; ' +
    '--frame-background: #0c0c0c; ' +
    '--weibo-top-nav-logo-color: #d3d3d3; ' +
    '--weibo-top-nav-configs-bg: #3e3e48; ' +
    '--weibo-top-nav-configs-bg-hover: #686877; ' +
    '--weibo-top-nav-configs-color: #d3d3d3; ' +
    '--weibo-top-nav-search-icon: #d3d3d3; ' +
    '--weibo-top-nav-search-bg: #3e3e48; ' +
    '--weibo-top-nav-icon-color: #d3d3d3; ' +
    '--weibo-top-nav-icon-bg-hover: #25252c; ' +
    '--weibo-top-nav-line: #202025; ' +
    '--weibo-logo-us: url(https://h5.sinaimg.cn/upload/1005/526/2021/09/09/logo_dark.png); ' +
    '--profile-tag-default-bg: #25252c; ' +
    '--viewer-button-color: rgba(54,54,54,0.8); ' +
    '--viewer-button-color-hover: rgba(30,30,30,0.9); ' +
    '--weibo-gradient-h1: linear-gradient(270deg,rgba(22,22,26,0),rgba(22,22,26,0.8) 50%,#16161a 75%,#16161a); ' +
    '--weibo-gradient-h2: linear-gradient(90deg,rgba(22,22,26,0),rgba(22,22,26,0.8) 50%,#16161a 75%,#16161a); ' +
    '--icon-bg-spe-1: #e58405; ' +
    '--icon-bg-spe-2: #e4354d; ' +
    '--icon-bg-spe-3: #e06000; ' +
    '--icon-bg-spe-4: #499de5; ' +
    '--icon-bg-spe-5: #930000; ' +
    '--icon-bg-spe-6: #e4b028; ' +
    '--darkreader-text--w-tip-green: #5cfe80; ' +
    '--darkreader-bg--w-tip-green-bg: #000000; ' +
    '--darkreader-text--w-tip-green-a: #63aae7; ' +
    '--w-tip-green-icon-opacity: 0.176; ' +
    '--w-tip-green-icon-color: #1e2c20; ' +
    '--darkreader-bg--w-brand: #d65b00; ' +
    '--darkreader-text--w-brand: #ff9706; ' +
    '--darkreader-border--w-brand: #ba4c00; ' +
    '--darkreader-bg--w-brand-hover: #d02200; ' +
    '--darkreader-text--w-brand-hover: #ff7006; ' +
    '--darkreader-text--w-main: #eee9de; ' +
    '--darkreader-text--w-sub: #baaf9f; ' +
    '--darkreader-border--w-sub: #363f43; ' +
    '--darkreader-bg--w-hover: rgba(214, 91, 0, 0.1); ' +
    '--darkreader-bg--w-contrast: #000406; ' +
    '--darkreader-text--w-contrast: #fffaf3; ' +
    '--darkreader-border--w-contrast: #161e21; ' +
    '--darkreader-text--w-error: #ff1515; ' +
    '--darkreader-border--w-error: #dc0000; ' +
    '--darkreader-text--w-fonticon: #d0c7ba; ' +
    '--darkreader-border--w-fonticon: #2c3538; ' +
    '--darkreader-bg--w-disabled: #424c52; ' +
    '--darkreader-text--w-disabled: #b4a997; ' +
    '--darkreader-border--w-disabled: #384246; ' +
    '--darkreader-bg--w-alink: #a32200; ' +
    '--darkreader-text--w-alink: #fd6d42; ' +
    '--darkreader-border--w-alink: #8f1900; ' +
    '--darkreader-text--w-special: #ff4f2b; ' +
    '--darkreader-bg--w-retweet-background: #000000; ' +
    '--darkreader-bg--w-repost-background: #000000; ' +
    '--darkreader-border--w-repost-background: #7f725d; ' +
    '--darkreader-bg--w-card-background: #000000; ' +
    '--darkreader-text--w-card-background: #fffdf6; ' +
    '--darkreader-border--w-card-background: #867965; ' +
    '--darkreader-bg--w-input-background: #000000; ' +
    '--darkreader-border--w-input-background: #7f725d; ' +
    '--w-drop-background: #25252c; ' +
    '--darkreader-bg--w-pophover-background: #000000; ' +
    '--darkreader-bg--w-whitebtn-background: rgba(0, 0, 0, 0.2); ' +
    '--darkreader-bg--w-dividing-line: #000000; ' +
    '--darkreader-text--w-dividing-line: #f7f1e9; ' +
    '--darkreader-border--w-dividing-line: #827360; ' +
    '--darkreader-bgimg--w-dividing-line: #202025; ' +
    '--darkreader-bg--w-card-border: #000000; ' +
    '--darkreader-border--w-card-border: #827360; ' +
    '--darkreader-border--w-layer-border: #756956; ' +
    '--darkreader-border--w-image-border: rgba(12, 18, 21, 0.1); ' +
    '--darkreader-bg--w-off-border: #000000; ' +
    '--darkreader-border--w-off-border: #7d705d; ' +
    '--darkreader-bg--w-off-border-new: #3e464c; ' +
    '--darkreader-bg--w-badge-background: #cf0000; ' +
    '--darkreader-border--w-badge-border-color: #867965; ' +
    '--darkreader-bg--w-b-flat-default-bg: #000000; ' +
    '--darkreader-bg--w-b-flat-default-bg-hover: #080e11; ' +
    '--darkreader-text--w-icon-skin: #fffdf6; ' +
    '--darkreader-bg--w-bubble-bg: rgba(185, 96, 0, 0.98); ' +
    '--darkreader-text--w-bubble-text: rgba(238, 233, 222, 0.85); ' +
    '--darkreader-text--w-bubble-text-hover: #eee9de; ' +
    '--darkreader-bg--frame-background: #000000; ' +
    '--darkreader-text--weibo-top-nav-logo-color: #eee9de; ' +
    '--darkreader-bg--weibo-top-nav-configs-bg: #0f1619; ' +
    '--darkreader-bg--weibo-top-nav-configs-bg-hover: #404b4f; ' +
    '--darkreader-text--weibo-top-nav-configs-color: #eee9de; ' +
    '--darkreader-text--weibo-top-nav-search-icon: #eee9de; ' +
    '--darkreader-bg--weibo-top-nav-search-bg: #0f1619; ' +
    '--darkreader-text--weibo-top-nav-icon-color: #eee9de; ' +
    '--darkreader-bg--weibo-top-nav-icon-bg-hover: #000000; ' +
    '--darkreader-text--weibo-top-nav-line: #f7f1e9; ' +
    '--darkreader-bgimg--weibo-logo-us: url("https://h5.sinaimg.cn/upload/1005/526/2021/09/09/logo_dark.png"); ' +
    '--darkreader-bg--profile-tag-default-bg: #000000; ' +
    '--comment-highlight: #25252c; ' +
    '--darkreader-bg--viewer-button-color: rgba(2, 6, 9, 0.8); ' +
    '--darkreader-bg--viewer-button-color-hover: rgba(0, 0, 0, 0.9); ' +
    '--feed-card-link-fliter: grayscale(100%) brightness(180%); ' +
    '--darkreader-bgimg--weibo-gradient-h1: linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 50%, #000000 75%, #000000); ' +
    '--darkreader-bgimg--weibo-gradient-h2: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 50%, #000000 75%, #000000); ' +
    '--place-color: #43658d; ' +
    '--darkreader-bg--icon-bg-spe-1: #d06000; ' +
    '--darkreader-bg--icon-bg-spe-2: #b70004; ' +
    '--darkreader-bg--icon-bg-spe-3: #ca3600; ' +
    '--darkreader-bg--icon-bg-spe-4: #004da6; ' +
    '--darkreader-bg--icon-bg-spe-5: #720000; ' +
    '--darkreader-bg--icon-bg-spe-6: #855600; ' +
    '-webkit-box-direction: normal; ' +
    'box-sizing: border-box; ' +
    'cursor: pointer; ' +
    'line-height: 1; ' +
    'outline: 0; ' +
    'position: relative; ' +
    '-webkit-user-select: none; ' +
    'border: 1px solid; ' +
    'font-size: .75rem; ' +
    'font-weight: 400; ' +
    'background-color: transparent; ' +
    'outline-color: initial; ' +
    '-webkit-tap-highlight-color: rgba(255, 255, 255, 0); ' +
    'border-color: initial; ' +
    'width: 64px; ' +
    'height: 28px; ' +
    'padding: 0!important; ' +
    'border-radius: var(--w-button-round); ' +
    'color: var(--darkreader-text--w-b-line-primary); '