---
aside: true
categories:
- - 招聘
cc: 网络
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
title: 南宁地区招聘避雷黑榜
---
<body>
  <h2>黑榜</h2>

  <input type="text" id="searchInput" placeholder="搜索公司名称">

  <table id="blacklistTable">
    <tr>
      <th>序号</th>
      <th>公司名称</th>
      <th>原因</th>
      <th>地址/备注</th>
    </tr>
  </table>

  <script>
    const apiUrl = "http://powernod.com/u/f4a2242f3831ada9"; // 替换为你的外部链接

    async function fetchDataAndPopulateTable() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const table = document.getElementById("blacklistTable");
        let html = "";

        data.forEach((row) => {
          html += "<tr>";
          Object.values(row).forEach((value) => {
            html += "<td>" + value + "</td>";
          });
          html += "</tr>";
        });

        table.innerHTML += html;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataAndPopulateTable();

    document.getElementById("searchInput").addEventListener("keyup", function() {
      let input, filter, tr, td, i, txtValue;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      tr = document.querySelectorAll("#blacklistTable tr");

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
