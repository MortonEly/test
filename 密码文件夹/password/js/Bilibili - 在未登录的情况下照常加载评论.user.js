// ==UserScript==
// @name         Bilibili - 在未登录的情况下照常加载评论
// @namespace    https://bilibili.com/
// @version      0.5
// @description  在未登录的情况下照常加载评论 | V0.5 调整等级tag和UP主tag的高度
// @license      GPL-3.0
// @author       DD1969
// @match        https://www.bilibili.com/video/*
// @icon         https://www.bilibili.com/favicon.ico
// @require      https://lib.baomitu.com/viewerjs/1.11.4/viewer.min.js
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  // no need to continue this script if user has logged in
  if (document.cookie.includes('DedeUserID')) return; 

  // reload page when url changed
  const re = /https:\/\/www\.bilibili\.com\/video\/.*/;
  const oldHref = window.location.href;
  const timer4Url = setInterval(() => {
    const newHref = window.location.href;
    if (newHref === oldHref) return;
    if (re.test(newHref) || re.test(oldHref)) {
      clearInterval(timer4Url);
      window.location.reload();
    }
  }, 200);
  
  // get hash and make sure reply list appears
  const { rootReplyHash, subReplyHash, replyList } = await new Promise(resolve => {
    const timer = setInterval(() => {
      const rootReplyHashMatchResult = document.head.innerHTML.match(/\.reply-item\[(?<rootReplyHash>data-v-[a-z0-9]{8})\]/);
      const subReplyHashMatchResult = document.head.innerHTML.match(/\.sub-reply-item\[(?<subReplyHash>data-v-[a-z0-9]{8})\]/);
      const replyList = document.querySelector('.reply-list');
      if (rootReplyHashMatchResult && subReplyHashMatchResult && replyList) {
        replyList.innerHTML = '';
        clearInterval(timer);
        resolve({
          rootReplyHash: rootReplyHashMatchResult.groups.rootReplyHash,
          subReplyHash: subReplyHashMatchResult.groups.subReplyHash,
          replyList
        });
      }
    }, 200);
  });

  // style patch
  await addStyle();

  let paginationCounter = 1;
  const replyPool = {};
  const oid = window.__INITIAL_STATE__.aid;

  // get data of first pagination
  const firstPaginationData = await getPaginationData(paginationCounter);
  const createrID = firstPaginationData.upper.mid;
  console.log(firstPaginationData);

  // load the top reply if it exists
  if (firstPaginationData.top_replies && firstPaginationData.top_replies.length !== 0) {
    const topReplyData = firstPaginationData.top_replies[0];
    appendReplyItem(topReplyData, true);
  }

  // script ends here if there is no reply of this video 
  if (firstPaginationData.replies.length === 0) {
    console.log('All replies are loaded.');
    return;
  }

  // load normal replies
  for (const replyData of firstPaginationData.replies) {
    appendReplyItem(replyData);
  }

  // add anchor
  addAnchor();

  // get reply data according to pagination number
  async function getPaginationData(paginationNumber) {
    const paginationString = `{"offset":"{\\\"type\\\":1,\\\"direction\\\":1,\\\"data\\\":{\\\"pn\\\":${paginationNumber}}}"}`;
    return await fetch(`https://api.bilibili.com/x/v2/reply/main?oid=${oid}&pagination_str=${encodeURIComponent(paginationString)}&type=1&mode=3`).then(res => res.json()).then(json => json.data);
  }

  function appendReplyItem(replyData, isTopReply) {
    if (replyPool[replyData.rpid_str]) return;

    const replyItemElement = document.createElement('div');
    replyItemElement.classList.add('reply-item');
    replyItemElement.innerHTML = `
      <div class="root-reply-container" ${rootReplyHash}>
        <div class="root-reply-avatar" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}" ${rootReplyHash}>
          <div class="avatar" ${rootReplyHash}>
            <div class="bili-avatar">
              <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${replyData.member.avatar}@160w_160h_1c_1s_!web-avatar-comment.avif" alt="" src="${replyData.member.avatar}@160w_160h_1c_1s_!web-avatar-comment.avif">
              ${
                replyData.member.pendant.image
                ? `
                <div class="bili-avatar-pendent-dom" style="transform: scale(0.85);">
                  <img class="bili-avatar-img" data-src="${replyData.member.pendant.image}@240w_240h_!web-avatar-comment.avif" alt="" src="${replyData.member.pendant.image}@240w_240h_!web-avatar-comment.avif">
                </div>
                `
                : ''
              }
              <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-40"></span>
            </div>
          </div>
        </div>
        <div class="content-warp" ${rootReplyHash}>
          <div class="reply-decorate" ${rootReplyHash}>
            <div class="user-sailing" ${rootReplyHash}>
              ${
                replyData.member.user_sailing?.cardbg
                ? `
                <img class="user-sailing-img" src="${replyData.member.user_sailing.cardbg.image}@576w.webp" ${rootReplyHash}>
                <div class="user-sailing-text" ${rootReplyHash} style="color: ${replyData.member.user_sailing.cardbg.fan.color}">
                  <span class="sailing-text" ${rootReplyHash}>NO.</span>
                  <br ${rootReplyHash}>
                  <span class="sailing-text" ${rootReplyHash}>${replyData.member.user_sailing.cardbg.fan.number.toString().padStart(6, '0')}</span>
                </div>
                `
                : ''
              }
            </div>
          </div>
          <div class="user-info" ${rootReplyHash}>
            <div class="user-name" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}" ${rootReplyHash} style="color: ${replyData.member.vip.nickname_color ? replyData.member.vip.nickname_color : '#61666d'}">${replyData.member.uname}</div>
            <span style="height: 16px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 12px; color: white; border-radius: 2px; background-color: ${getMemberLevelColor(replyData.member.level_info.current_level)};">LV${replyData.member.level_info.current_level}</span>
            ${
              createrID === replyData.mid
              ? '<i class="svg-icon up-web up-icon" ${rootReplyHash} style="width: 24px; height: 24px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>'
              : ''
            }
          </div>
          <div class="root-reply" ${rootReplyHash}>
            <span class="reply-content-container root-reply" ${rootReplyHash} style="padding-bottom: 8px;">
              <span class="reply-content">${isTopReply? '<i class="top-icon">置顶</i>': ''}${replyData.content.pictures ? `<div class="note-prefix" style="transform: translateY(-2px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>` : ''}${getConvertedMessage(replyData.content)}</span>
            </span>
            ${
              replyData.content.pictures
              ? `
              <div class="image-exhibition" ${rootReplyHash} style="margin: 8px 0; user-select: none;">
                <div class="preview-image-container" style="display: flex;">
                  ${getImageItems(replyData.content.pictures)}
                </div>
              </div>
              `
              : ''
            }
            <div class="reply-info" ${rootReplyHash}>
              <span class="reply-time" ${rootReplyHash} style="margin-right: 20px;">${getFormattedTime(replyData.ctime)}</span>
              <span class="reply-like" ${rootReplyHash}>
                <i class="svg-icon like use-color like-icon" ${rootReplyHash} style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${replyData.like}</span>
              </span>
              <span class="reply-dislike" ${rootReplyHash}>
                <i class="svg-icon dislike use-color dislike-icon" ${rootReplyHash} style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3933" width="200" height="200"><path d="M594.112 872.768a34.048 34.048 0 0 1-29.12-10.816c-11.264-13.248-15.872-24.064-21.504-40.064l-1.92-5.632c-5.632-16.128-12.8-36.864-27.712-63.232-25.344-44.928-50.24-74.432-86.144-97.024-23.104-14.528-43.648-26.432-65.024-32.64V203.84a4570.24 4570.24 0 0 1 339.072 4.672c38.656 2.048 72 21.12 88.896 52.032 21.504 39.36 47.232 95.744 63.552 163.008 16.448 67.52 21.568 123.776 22.592 163.008 0.448 16.832-13.44 32.256-35.392 32.256h-197.248a32 32 0 0 0-28.608 46.336l0.128 0.32 0.64 1.28 2.56 5.568c2.176 4.8 5.12 11.776 8.384 20.16 6.528 17.088 13.568 39.04 16.768 60.416 4.928 33.344 3.712 60.16-9.344 84.992-14.08 26.688-30.016 33.728-40.576 34.944z m97.728-190.016h149.568c52.8 0 100.864-40.128 99.392-97.92a846.336 846.336 0 0 0-24.32-176.448 742.016 742.016 0 0 0-69.632-178.56c-29.248-53.44-84.48-82.304-141.824-85.248-55.68-2.88-138.24-5.952-235.712-5.952-96 0-183.488 3.008-244.672 5.76-66.368 3.136-123.328 51.392-130.944 119.872a1380.608 1380.608 0 0 0-0.768 296.704c7.68 72.768 70.4 121.792 140.032 121.792h97.728c13.76 0 28.16 5.504 62.976 27.392 24.064 15.168 42.432 35.264 64.448 74.368 11.968 21.12 17.472 36.864 22.976 52.736l2.048 5.888c6.656 18.88 14.336 38.4 33.216 60.416 19.456 22.72 51.456 36.736 85.184 32.768 35.2-4.096 67.776-26.88 89.792-68.672 22.208-42.112 21.888-84.8 16-124.288a343.04 343.04 0 0 0-15.488-60.608zM298.688 205.568v413.184H232.96c-40.512 0-72.448-27.712-76.352-64.512a1318.912 1318.912 0 0 1 0.64-282.88c3.904-34.816 32.896-61.248 70.4-62.976 20.8-0.96 44.736-1.92 71.04-2.816z" p-id="3934" fill="#9499a0"></path></svg></i>
              </span>
              <span class="reply-btn" ${rootReplyHash}>回复</span>
            </div>
            ${
              replyData.up_action.like
              ? `<div class="reply-tag-list" ${rootReplyHash} style="margin-bottom: 4px;"><div class="reply-tag-item" ${rootReplyHash} style="background-color: rgb(244, 244, 244); color: rgb(117, 117, 117);">UP主觉得很赞</div></div>`
              : ''
            }
          </div>
        </div>
      </div>
      <div class="sub-reply-container" ${rootReplyHash}>
        <div class="sub-reply-list" ${rootReplyHash}>
          ${getSubReplyItems(replyData.replies) || ''}
          ${
            replyData.rcount > 3
            ? `
            <div class="view-more" style="padding-left: 8px; font-size: 13px; color: #9499A0;">
              <div class="view-more-default">
                <span>共${replyData.rcount}条回复, </span>
                <span class="view-more-btn" style="cursor: pointer;">点击查看</span>
              </div>
            </div>
            `
            : ''
          }
        </div>
      </div>
      <div class="bottom-line" ${rootReplyHash}></div>
    `;
    replyList.appendChild(replyItemElement);
    replyPool[replyData.rpid_str] = true;

    // setup image viewer
    const previewImageContainer = replyItemElement.querySelector('.preview-image-container');
    if (previewImageContainer) new Viewer(previewImageContainer, { title: false, toolbar: false, tooltip: false, keyboard: false });

    // setup view more button
    const subReplyList = replyItemElement.querySelector('.sub-reply-list');
    const viewMoreBtn = replyItemElement.querySelector('.view-more-btn');
    viewMoreBtn && viewMoreBtn.addEventListener('click', () => loadAllSubReplies(replyData.rpid, subReplyList));
  }

  function getFormattedTime(ms) {
    const time = new Date(ms * 1000);
    const year = time.getFullYear();
    const month = (time.getMonth() + 1).toString().padStart(2, '0');
    const day = time.getDate().toString().padStart(2, '0');
    const hour = time.getHours().toString().padStart(2, '0');
    const minute = time.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}`;
  }

  function getMemberLevelColor(level) {
    return ({
      1: '#BBBBBB',
      2: '#8BD29B',
      3: '#7BCDEF',
      4: '#FEBB8B',
      5: '#EE672A',
      6: '#F04C49'
    })[level];
  }

  function getConvertedMessage(content) {
    let result = content.message;

    // convert emote tag to image
    if (content.emote) {
      for (const [key, value] of Object.entries(content.emote)) {
        const imageElementHTML = `<img class="emoji-${['', 'small', 'large'][value.meta.size]}" src="${value.url}" alt="${key}">`;
        result = result.replaceAll(key, imageElementHTML);
      }
    }

    // convert timestamp to link
    result = result.replaceAll(/\d{1,2}(:|：)\d{1,2}/g, (timestamp) => {
      const [minute, second] = timestamp.replace('：', ':').split(':');
      const totalSecond = parseInt(minute) * 60 + parseInt(second);
      if (Number.isNaN(totalSecond)) return timestamp;
      return `<a class="jump-link video-time" href="${window.location.origin + window.location.pathname + '?t=' + totalSecond}">${timestamp.replace('：', ':')}</a>`;
    });

    // convert url to link
    if (Object.keys(content.jump_url).length) {
      for (const [key, value] of Object.entries(content.jump_url)) {
        const href = key.startsWith('BV') ? `https://www.bilibili.com/video/${key}` : (value.pc_url || key);
        const linkElementHTML = `<img class="icon normal" src="${value.prefix_icon}" style="${value.extra && value.extra.is_word_search && 'width: 12px;'}"><a class="jump-link normal" href="${href}" target="_blank" noopener noreferrer>${value.title}</a>`;
        result = result.replaceAll(key, linkElementHTML);
      }
    }

    // convert @ user
    if (content.at_name_to_mid) {
      for (const [key, value] of Object.entries(content.at_name_to_mid)) {
        const linkElementHTML = `<a class="jump-link user" data-user-id="${value}" href="https://space.bilibili.com/${value}" target="_blank" noopener noreferrer>@${key}</a>`;
        result = result.replaceAll(`@${key}`, linkElementHTML);
      }
    }

    return result;
  }

  function getImageItems(images) {
    images = images.slice(0, 3);
    const imageSizeConfig = ({
      1: 'max-width: 280px; max-height: 180px;',
      2: 'width: 128px; height: 128px;',
      3: 'width: 96px; height: 96px;',
    })[images.length];

    let result = '';
    for (const image of images) {
      result += `<div class="image-item-wrap" style="margin-right: 4px; cursor: zoom-in;"><img src="${image.img_src}" style="border-radius: 4px; ${imageSizeConfig}"></div>`;
    }
    return result;
  }

  function getSubReplyItems(subReplies) {
    if (!subReplies || subReplies.length === 0) return;

    let result = '';
    for (const replyData of subReplies) {
      result += `
        <div class="sub-reply-item" ${subReplyHash}>
          <div class="sub-user-info" ${subReplyHash}>
            <div class="sub-reply-avatar" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}" ${subReplyHash}>
              <div class="avatar" ${subReplyHash}>
                <div class="bili-avatar">
                  <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${replyData.member.avatar}@160w_160h_1c_1s_!web-avatar-comment.avif" alt="" src="${replyData.member.avatar}@160w_160h_1c_1s_!web-avatar-comment.avif">
                  <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-24"></span>
                </div>
              </div>
            </div>
            <div class="sub-user-name" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}" ${subReplyHash} style="color: ${replyData.member.vip.nickname_color ? replyData.member.vip.nickname_color : '#61666d'}">${replyData.member.uname}</div>
            <span style="height: 16px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 12px; color: white; border-radius: 2px; background-color: ${getMemberLevelColor(replyData.member.level_info.current_level)};">LV${replyData.member.level_info.current_level}</span>
            ${
              createrID === replyData.mid
              ? `<i class="svg-icon up-web up-icon" ${subReplyHash} style="width: 24px; height: 24px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>`
              : ''
            }
          </div>
          <span class="reply-content-container sub-reply-content" ${subReplyHash}>
            <span class="reply-content">${getConvertedMessage(replyData.content)}</span>
          </span>
          <div class="sub-reply-info" ${subReplyHash} style="margin: 4px 0;">
            <span class="sub-reply-time" ${subReplyHash} style="margin-right: 20px;">${getFormattedTime(replyData.ctime)}</span>
            <span class="sub-reply-like" ${subReplyHash}>
              <i class="svg-icon like use-color sub-like-icon" ${subReplyHash} style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
              <span>${replyData.like}</span>
            </span>
            <span class="sub-reply-dislike" ${subReplyHash}>
              <i class="svg-icon dislike use-color sub-dislike-icon" ${subReplyHash} style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3933" width="200" height="200"><path d="M594.112 872.768a34.048 34.048 0 0 1-29.12-10.816c-11.264-13.248-15.872-24.064-21.504-40.064l-1.92-5.632c-5.632-16.128-12.8-36.864-27.712-63.232-25.344-44.928-50.24-74.432-86.144-97.024-23.104-14.528-43.648-26.432-65.024-32.64V203.84a4570.24 4570.24 0 0 1 339.072 4.672c38.656 2.048 72 21.12 88.896 52.032 21.504 39.36 47.232 95.744 63.552 163.008 16.448 67.52 21.568 123.776 22.592 163.008 0.448 16.832-13.44 32.256-35.392 32.256h-197.248a32 32 0 0 0-28.608 46.336l0.128 0.32 0.64 1.28 2.56 5.568c2.176 4.8 5.12 11.776 8.384 20.16 6.528 17.088 13.568 39.04 16.768 60.416 4.928 33.344 3.712 60.16-9.344 84.992-14.08 26.688-30.016 33.728-40.576 34.944z m97.728-190.016h149.568c52.8 0 100.864-40.128 99.392-97.92a846.336 846.336 0 0 0-24.32-176.448 742.016 742.016 0 0 0-69.632-178.56c-29.248-53.44-84.48-82.304-141.824-85.248-55.68-2.88-138.24-5.952-235.712-5.952-96 0-183.488 3.008-244.672 5.76-66.368 3.136-123.328 51.392-130.944 119.872a1380.608 1380.608 0 0 0-0.768 296.704c7.68 72.768 70.4 121.792 140.032 121.792h97.728c13.76 0 28.16 5.504 62.976 27.392 24.064 15.168 42.432 35.264 64.448 74.368 11.968 21.12 17.472 36.864 22.976 52.736l2.048 5.888c6.656 18.88 14.336 38.4 33.216 60.416 19.456 22.72 51.456 36.736 85.184 32.768 35.2-4.096 67.776-26.88 89.792-68.672 22.208-42.112 21.888-84.8 16-124.288a343.04 343.04 0 0 0-15.488-60.608zM298.688 205.568v413.184H232.96c-40.512 0-72.448-27.712-76.352-64.512a1318.912 1318.912 0 0 1 0.64-282.88c3.904-34.816 32.896-61.248 70.4-62.976 20.8-0.96 44.736-1.92 71.04-2.816z" p-id="3934" fill="#9499a0"></path></svg></i>
            </span>
            <span class="sub-reply-btn" ${subReplyHash}>回复</span>
          </div>
        </div>
      `;
    }
    return result;
  }

  async function loadAllSubReplies(rootReplyID, subReplyList) {
    let subPaginationCounter = 1;
    while(true){
      const subReplyData = await fetch(`https://api.bilibili.com/x/v2/reply/reply?oid=${oid}&pn=${subPaginationCounter++}&ps=20&root=${rootReplyID}&type=1`).then(res => res.json()).then(json => json.data);
      if (subPaginationCounter - 1 === 1) subReplyList.innerHTML = '';
      if (subReplyData.replies) subReplyList.innerHTML += getSubReplyItems(subReplyData.replies);
      else break;
    }
  }

  async function addStyle() {
    // normal style
    const commonCSS = document.createElement('style');
    commonCSS.textContent = `
      .reply-item .root-reply-avatar .avatar .bili-avatar {
        width: 48px;
        height: 48px;
      }

      .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
        width: 30px;
        height: 30px;
      }

      .sub-reply-container .view-more-btn:hover {
        color: #00AEEC;
      }

      @media screen and (max-width: 1620px) {
        .reply-item .root-reply-avatar .avatar .bili-avatar {
          width: 40px;
          height: 40px;
        }

        .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
          width: 24px;
          height: 24px;
        }
      }
    `;
    document.head.appendChild(commonCSS);

    // viewerjs
    const viewerjsCSS = document.createElement('style');
    viewerjsCSS.textContent = await fetch('https://lib.baomitu.com/viewerjs/1.11.4/viewer.min.css').then(res => res.text());
    document.head.appendChild(viewerjsCSS);
  }

  function addAnchor() {
    const anchorElement = document.createElement('div');
    anchorElement.textContent = '正在加载...';
    anchorElement.style = `
      width: calc(100% - 22px);
      height: 40px;
      margin-left: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-60px);
      color: #61666d;
    `;
    document.querySelector('#comment .reply-warp').appendChild(anchorElement);

    const ob = new IntersectionObserver(async (entries) => {
      if (!entries[0].isIntersecting) return;

      const newPaginationData = await getPaginationData(++paginationCounter);
      if (newPaginationData.replies.length === 0) {
        anchorElement.textContent = '所有评论已加载完毕';
        ob.disconnect();
        return;
      }

      for (const replyData of newPaginationData.replies) {
        appendReplyItem(replyData);
      }
    });

    ob.observe(anchorElement);
  }

})();