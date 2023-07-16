---
aside: true
categories:
- - IDEA
cc: 原创
comment: true
cover: ''
date: '2022-03-25'
description: 黑榜
excerpt: '100'
keywords: 黑榜
locate: 广西
recommend: true
tags:
- IDEA
- JSP
title: IDEA使用JSP用户登录案例
---
<body>
  <h2>黑榜</h2>

  <input type="text" id="searchInput" placeholder="搜索公司名称">

  <table>
    <tr>
      <th>序号</th>
      <th>公司名称</th>
      <th>原因</th>
      <th>地址/备注</th>
    </tr>
    <tr>
      <td>1</td>
      <td>天天飞</td>
      <td>欠工资, pua</td>
      <td>现办公室准备搬走，拖工资，不交社保，老板爱挑刺，发工资前要跟员工一对一面谈这个月做了什么然后借机打压</td>
    </tr>
    <!-- Add more rows as needed -->
  </table>

  <script>
    document.getElementById("searchInput").addEventListener("keyup", function() {
      let input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      table = document.querySelector("table");
      tr = table.getElementsByTagName("tr");

      for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // 第2列是公司名称
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    });
  </script>
</body>
