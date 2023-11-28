---
title: 书籍分享
date: 2023-03-23 22:41:33
type: books
comment: false #是否显示评论
aside: false #是否显示侧边
recommend: false  #是否推荐
---

 <p style="  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); font-size: 30px; font-weight: 500;">
            <font color="#002fa7" style=" ">看过的书籍：</font>
        </p>
<br>
<div class="bookshelf">
  <div class="book">
    <div class="book-cover" style="background-image: url(https://images-cn.ssl-images-amazon.cn/images/I/41GoDJIIu+L._AC_UY218_.jpg); background-size: cover;">
    </div>
    <div class="book-spine"></div>
    <div class="book-pages"></div>
  </div>
  <div class="book">
    <div class="book-cover" style="background-image: url(https://images-cn.ssl-images-amazon.cn/images/I/81cKxQUK7-L._AC_UY218_.jpg); background-size: cover;">
    </div>
    <div class="book-spine"></div>
    <div class="book-pages"></div>
  </div>
  <div class="book">
    <div class="book-cover" style="background-image: url(https://images-cn.ssl-images-amazon.cn/images/I/817VndlHfFL._AC_UY218_.jpg); background-size: cover;">
    </div>
    <div class="book-spine"></div>
    <div class="book-pages"></div>
  </div>
</div>
	
<style>
  .bookshelf {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .book {
    position: relative;
    width: 100px;
    height: 150px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  .book:hover {
    transform: rotateY(-30deg);
  }
  .book-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transform: translateZ(10px);
  }
  .book-spine {
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    border-left: 2px solid #ccc;
    transform: translateX(-50%) rotateY(90deg);
  }
  .book-pages {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e8e1cc7d;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transform: translateZ(-10px);
  }
</style>
