---
title: 即刻短文静态部署版
date: 2014-6-1
updated: 2023-9-6
cover: https://img.villode.us.kg/null_text.png
description: 即刻短文静态部署版 #文章描述
keywords: HEXO #文章关键字
tags:
  - 教程
categories:
  - Hexo
cc: 转载 #原创
locate: 北京 #IP位置
excerpt: 100  #文章权重
aside: true #是否显示侧边
comment: true #是否显示评论
recommend: true  #是否推荐
---
> 腾讯云已经跑路了，挂在腾讯云函数的twikoo已经私有部署了，还剩下一个即刻短文还跑在腾讯云开发的服务上。
>
> 找了黑石原来的leancloud方案，主要黑石的公众号是订阅号不是服务号，发起来很麻烦，没有开源无法私有部署。
>
> 难道真的要像木木学习魔改Twikoo？
>
> 在改友链的时候突然想到为什么不能用与butterfly相同的yml生成方式呢？
>
> 这个文章就简单发一下生成逻辑和代码。
>
> 本教程仅作为开源使用，需要有一定魔改基础。具体参考[哔哔](https://blog.zhheo.com/p/a6947667.html)
>
> **即刻短文静态部署版测试中，本文可能会不定时更新。**

## **什么是即刻短文**

相比发博客文章需要考虑选题、编写详细的内容，即刻短文可以提供一个快捷的短文字解决方案，避免博客短文章过多造成的整站文章质量下降。

## **与黑石哔哔有何不同？**

有一个表格介绍一下


| 不同之处   | 黑石哔哔             | 即刻短文（静态部署版）                 | 即刻短文（旧版）   |
| ---------- | -------------------- | -------------------------------------- | ------------------ |
| 部署服务   | leancloud动态部署    | 静态部署                               | 腾讯云动态部署     |
| 费用       | 免费                 | 免费                                   | 首月免费           |
| 服务位置   | ✅leancloud          | ✅本地                                 | 腾讯云             |
| 发表方式   | 指定公众号绑定后发布 | 修改本地yml文件发布                    | ✅get请求          |
| 加载速度   | js请求leancloud数据  | ✅静态html读取                         | js请求json数据     |
| 支持媒体   | 图片                 | ✅图片、音乐、链接                     | 图片               |
| 第三方支持 | 图片灯箱             | ✅图片灯箱、瀑布流、回复动态、首页滚动 | 回复动态、首页滚动 |

创建数据
创建`source/_data/essay.yml`

我这里提供一些示例数据：

```yml
- class_name: 即刻短文
  essay_list:
    - content: 即刻短文用上了木木发的waterfall的js，瀑布流真令人愉悦
      date: 2022-08-12
    - content: iOS16现在感觉已经很稳定了，bug比较少，令人讨厌的就是一个是切换横竖屏抖音和b站都有点问题，然后就是软件请求剪贴板弹窗真的烦
      date: 2022-08-12
    - content: 现在即刻短文已经纯本地化部署完成，不再依赖任何第三方服务了
      date: 2022-08-12
    - content: 在整理转载文章的时候发现很多文章原文都无法访问了，所以本地保存网页是非常重要的
      date: 2022-08-05T06:08:54.978Z
    - content: adguardhome真的不能设置太久的缓存时间，否则非常容易卡和无响应。然后就是注意添加白名单
      date: 2022-08-04T10:10:09.984Z
```

创建页面文件
创建**`themes/butterfly/layout/includes/page/essay.pug`**

```pug
.title-and-tips
  h1.page-title(style='display: inline;')= page.title
  .page-tips 静态部署版
#bber
  section.timeline.page-1
    ul#waterfall.list
      each i in site.data.essay
        each item, index in i.essay_list
          if index < 30
            li.item
              .bber-content
                p.datacont= item.content
                  if item.image
                    a.bber-content-img(href=item.image, target="_blank")
                      img(src=item.image)
              .bber-bottom
                .bber-info
                  - var datedata = new Date(item.date).toISOString()
                  time.datatime(datetime= item.date)= datedata
#bber-tips(style='color: var(--heo-secondtext);')
  | - 只展示最近30条短文 -
```

创建md文件
创建`source/essay/index.md`

```markdown
---
title: 即刻短文
date: 2020-07-22 22:06:17
comments: true
aside: false
type: essay
---
```

修改Page文件
修改`themes/butterfly/layout/page.pug`

在`case page.type`子项里面添加

```pug
when 'essay'
  include includes/page/essay.pug
```

首页BB（可选）
创建dom
编辑`themes/butterfly/layout/includes/bbTimeList.pug`

```pug
#bbTimeList.bbTimeList.container
    i.bber-logo.iconfont.icon-bblogo(onclick=`pjax.loadUrl("/essay/")`,title="即刻短文",style="font-size: 2rem;")
    #bbtalk.swiper-container.swiper-no-swiping(tabindex="-1")
      #bber-talk.swiper-wrapper(onclick=`pjax.loadUrl("/essay/")`)
        each i in site.data.essay
          each item, index in i.essay_list
            if index < 10
              - var contentText = item.image ? item.content + ' [图片]' : item.content
              .li-style.swiper-slide= contentText

    i.bber-gotobb.fas.fa-arrow-circle-right(onclick=`pjax.loadUrl("/essay/")`,title="查看全文")
script(src='https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',data-pjax='')
```

引入到主页

```diff
block content
  include ./includes/mixins/post-ui.pug
  #recent-posts.recent-posts
    include includes/categoryList.pug
+    include includes/bbTimeList.pug
    +postUI
    include includes/pagination.pug
```

引入css
在`themes/butterfly/_config.yml`中的`inject`属性的`head`里添加

```yaml
inject:
  head:
		- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">
		- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/js-heo@1.0.11/bb/showbb_in_index.css">
```

执行js
执行滚动函数，这个可以插入到任意js中，保证每次加载页面执行即可。

```Code
if (document.querySelector('#bber-talk')) {
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true,
        autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
      },
      });
    }
```

本文转载自张洪Heo

Hexo的Butterfly魔改：即刻短文静态部署版 原文链接：
https://blog.zhheo.com/p/557c9e72.html
