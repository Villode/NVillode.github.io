---
title: 说说
date: 2024-04-29 14:45:09
---
<head>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/gh/Uyoahz26/daodao@main/dist/qexo-dao.min.js"></script>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <div id="qexoDaoDao"></div>
  <script>
    qexoDaodao?.init({
      el: "#qexoDaoDao",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2496091142&s=640",
      title: "说说",
      name: "小骏",
      limit: 10,
      useLoadingImg: false,
      baseURL: "https://qexo-wheat-iota.vercel.app/",
    }).then(function (){
      console.log("qexoDaodao加载完成");
    })
  </script>
</body>