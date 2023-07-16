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
    // 替换成你的JSON数据
    const tableData = [
      {
        "序号": "1",
        "公司名称": "天天飞",
        "原因": "欠工资, pua",
        "地址/备注": "现办公室准备搬走，拖工资，不交社保，老板爱挑刺，发工资前要跟员工一对一面谈这个月做了什么然后借机打压"
      },
      // 添加更多行数据...
    ];

    const table = document.getElementById("blacklistTable");

    function populateTable(data) {
      let html = "";
      data.forEach((row) => {
        html += "<tr>";
        Object.values(row).forEach((value) => {
          html += "<td>" + value + "</td>";
        });
        html += "</tr>";
      });
      table.innerHTML += html;
    }

    populateTable(tableData);

    document.getElementById("searchInput").addEventListener("keyup", function() {
      let input, filter, tr, td, i, txtValue;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
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
