---
layout: post
title:  "基于640px定宽的移动web规范"
date:   2016-08-09 09:37:00 +0800
categories: normal-study
---

<b>为了适应各种尺寸的移动端设备，一种常见的做法是固定移动设备的宽度。
我们都知道移动端的物理像素和视口像素都是通过一个缩放比来对应，而
这个缩放比是可以动态设置的，于是我们就可以在页面头部同过加载一段
js代码来根据设备的实际宽度和指定的视口宽度来确定这个初始缩放比，
也就是initial-scale的值，以下代码可供参考</b>

{% highlight javascript %}
window.mobileUtil = (function(win, doc) {
    var UA = navigator.userAgent,
        isAndroid = /android|adr/gi.test(UA),
        // 据说某些国产机的UA会同时包含 android iphone 字符
        isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,
        // 粗略的判断
        isMobile = isAndroid || isIos;
    return {
        isAndroid: isAndroid,
        isIos: isIos,
        isMobile: isMobile,
        isNewsApp: /NewsApp\/[\d\.]+/gi.test(UA),
        isWeixin: /MicroMessenger/gi.test(UA),
        isQQ: /QQ\/\d/gi.test(UA),
        isYixin: /YiXin/gi.test(UA),
        isWeibo: /Weibo/gi.test(UA),
        isTXWeibo: /T(?:X|encent)MicroBlog/gi.test(UA),
        tapEvent: isMobile ? 'tap' : 'click',
        /**
         * 缩放页面
         */
        fixScreen: function() {
            var metaEl = doc.querySelector('meta[name="viewport"]'),
                metaCtt = metaEl ? metaEl.content : '',
                matchScale = metaCtt.match(/initial\-scale=([\d\.]+)/),
                matchWidth = metaCtt.match(/width=([^,\s]+)/);
            if ( !metaEl ) { // REM
                var docEl = doc.documentElement,
                    maxwidth = docEl.dataset.mw || 750, // 每 dpr 最大页面宽度
                    dpr = isIos ? Math.min(win.devicePixelRatio, 3) : 1,
                    scale = 1 / dpr, tid;
                docEl.removeAttribute('data-mw');
                docEl.dataset.dpr = dpr;
                metaEl = doc.createElement('meta');
                metaEl.name = 'viewport';
                metaEl.content = fillScale(scale);
                docEl.firstElementChild.appendChild(metaEl);
                var refreshRem = function() {
                    var width = docEl.getBoundingClientRect().width;
                    if (width / dpr > maxwidth) {
                        width = maxwidth * dpr;
                    }
                    var rem = width / 16;
                    docEl.style.fontSize = rem + 'px';
                };
                win.addEventListener('resize', function() {
                    clearTimeout(tid);
                    tid = setTimeout(refreshRem, 300);
                }, false);
                win.addEventListener('pageshow', function(e) {
                    if (e.persisted) {
                        clearTimeout(tid);
                        tid = setTimeout(refreshRem, 300);
                    }
                }, false);
                refreshRem();
            } else if ( isMobile && !matchScale && ( matchWidth && matchWidth[1] != 'device-width' ) ) { // 定宽
                var    width = parseInt(matchWidth[1]),
                    iw = win.innerWidth || width,
                    ow = win.outerWidth || iw,
                    sw = win.screen.width || iw,
                    saw = win.screen.availWidth || iw,
                    ih = win.innerHeight || width,
                    oh = win.outerHeight || ih,
                    ish = win.screen.height || ih,
                    sah = win.screen.availHeight || ih,
                    w = Math.min(iw,ow,sw,saw,ih,oh,ish,sah);
                scale = w / width;
                if ( scale < 1 ) {
                    metaEl.content = metaCtt + ',' + fillScale(scale);
                }
            }
            function fillScale(scale) {
                return 'initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no';
            }
        },
        /**
         * 转href参数成键值对
         * @param href {string} 指定的href，默认为当前页href
         * @returns {object} 键值对
         */
        getSearch: function(href) {
            href = href || win.location.search;
            var data = {},reg = new RegExp( "([^?=&]+)(=([^&]*))?", "g" );
            href && href.replace(reg,function( $0, $1, $2, $3 ){
                data[ $1 ] = $3;
            });
            return data;
        }
    };
})(window, document);
// 默认直接适配页面
mobileUtil.fixScreen();
{% endhighlight %}

<b>当然，以上并非我们的重点。现在我们有了固定的宽度（640px）,基于这个宽度我们有必要制定
一个规范，以便我们在各种尺寸的设备都有比较统一的视觉效果。下面我们重点看一下这个具体规
范:</b>

## 标题

一级标题 &emsp; font-size: 44px
===========================

二级标题 &emsp; font-size: 38px
===========================

三级标题 &emsp; font-size: 32px
===========================

## 正文

一级正文 &emsp; font-size: 30px
===========================

二级正文 &emsp; font-size: 27px
===========================

三级正文 &emsp; font-size: 24px
===========================

注&emsp;&emsp;释 &emsp; font-size: 20px
=====================================

内&ensp;边&ensp;距 &emsp; padding: 24px
========================

行&emsp;&emsp;高 &emsp; line-height: font-size + 10px
===================================================

## 按钮

<style>
.btn-group {
  padding: 24px;
}
.btn-group button {
  margin-right: 20px;
  margin-bottom: 20px;
}
.btn-group .btn {
  width: 140px;
  height: 60px;
  border: 0 solid transparent;
  font-size: 30px;
  background-color: #19b5ee;
  color: #fff;
}
.btn-group .btn:focus {
  outline: none;
}
.btn-group .btn-big {
  width: 160px;
  height: 72px;
  font-size: 32px;
}
.btn-group .btn-small {
  width: 120px;
  height: 48px;
  font-size: 28px;
}
</style>

<div class="btn-group">
    <button class="btn btn-small">确认</button><label>120x48,28px</label><br>
    <button class="btn">确认</button><label>140x60,30px</label><br>
    <button class="btn btn-big">确认</button><label>160x72,32px</label>
</div>
> 注意这些按钮尺寸在640px定宽的手机可不是这样

> 后面还有待补充













