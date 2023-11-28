---
title: 友链申请
date: 2023-04-03 01:17:27
updated: 2023-9-6 01:17:27
cover: https://isgodata.files.wordpress.com/2023/04/e59bbee58fa8e58fa8_20230401_1640260.webp
comment: false #是否显示评论
aside: false #是否显示侧边
recommend: false  #是否推荐
---

<!DOCTYPE html>
<html>
  <head>
    <style>
      #loadBtn {
        display: inline-block;
        padding: 12px 24px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        background-color: #4e7dff;
        border-radius: 8px;
        border: none;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease-in-out;
        cursor: pointer;
      }
      #loadBtn:hover {
        transform: translateY(-2px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      }
      #floatingBox {
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        z-index: 999;
      }
      #floatingBox .closeBtn {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 16px;
        color: #aaa;
        cursor: pointer;
      }
    </style>
<script>
  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.wjx.top/handler/jqemed.ashx?activity=rjAMq9d&width=795&source=iframe&tm=1';
    // 将脚本添加到 scriptContainer 元素中
    var scriptContainer = document.getElementById('scriptContainer');
    scriptContainer.appendChild(script);
    // 禁用按钮
    var loadBtn = document.getElementById('loadBtn');
    loadBtn.disabled = true;
    loadBtn.classList.add('disabled');
    // 显示悬浮框
    var floatingBox = document.getElementById('floatingBox');
    floatingBox.style.display = 'block';
  }
  function closeFloatingBox() {
    var floatingBox = document.getElementById('floatingBox');
    floatingBox.style.display = 'none';
  }
  var reportLink = document.querySelector('a[href="https://www.wjx.cn/vm/Q0mluca.aspx?q1=rjAMq9d&q2=1"]');
  reportLink.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认的点击事件
    event.stopPropagation(); // 阻止事件冒泡
    return false; // 防止链接被打开
  });
</script>

  </head>
  <body>
    <div id="container">
      <button id="loadBtn" onclick="loadScript()">点击申请友链</button>
    </div>
    <div id="scriptContainer"></div>
    <div id="floatingBox" style="display: none;">
      <span class="closeBtn" onclick="closeFloatingBox()">X</span>
      <p>不要忘记把<font color="#fff" style="background-color: #002fa7;">萦芑Blog</font><br><font color="red">(ISGO.top)</font><br>添加到贵站的友链上呀！<br>2023.4.3-by: 萦芑</p>
      <img src="https://isgodata.files.wordpress.com/2023/04/r-c.gif" alt="萦芑" width="100%">
    </div>
  </body>
</html>
