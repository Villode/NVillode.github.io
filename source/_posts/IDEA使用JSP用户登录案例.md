---
aside: true
categories:
- - 教程
cc: 原创
comment: true
cover: ''
date: '2022-03-25'
description: IDEA使用JSP用户登录案例
excerpt: '100'
keywords: IDEA使用JSP用户登录案例
locate: 广西
recommend: true
tags:
- IDEA
- JSP
title: IDEA使用JSP用户登录案例
---
## 导读

JSP实现用户登录、注销


### 准备工作

IDEA、tomcat、JDK18

#### 登录界面HTML

```

<title>用户登录</title>
</head>
<body>
<form action="index.jsp" method="post" >
    <h3><span>登录</span></h3>
    <a>用户名:</a><input type="text" name="username"><br>
    <a >密码:</a><input type="password" name="password"><br>
    <br>
    <div>
        <button >登录</button>
        <INPUT TYPE="reset" value="重置" >
        <INPUT TYPE="button" value="注册" >
    </div>
</form>

```


|  |  |
| - | - |

#### 登录信息密码账号正确或错误处理代码

```

<%
    request.setCharacterEncoding("UTF-8");
    String name=request.getParameter("username");
    String password=request.getParameter("password");
%>
<%
    if(name.equals("小梦")&&password.equals("666"))
    {
        out.print("输入正确");
        request.setCharacterEncoding("UTF-8");
        session.setAttribute("username",name);
        request.getRequestDispatcher("welcome.jsp").forward(request, response);

    }else{%>

<% }%>
账号或密码错误,等待 3s 跳转登录<br>
<input type="button"  value="返回登录" onclick='location.href=("login.html")'/>
<% response.setHeader("Refresh", "3,URL=login.html");%>

```


|  |  |
| - | - |

#### 登录成功界面

```

<% String name=(String)session.getAttribute("username");
    if(name!=null){%>

<div >
    <form action="index.jsp" method="post" >
        <h3><%=session.getAttribute("username")%><a>,欢迎光临,访问个人空间</a></h3>
        <div >
            <INPUT TYPE="reset" value="注销"onclick='location.href=("kill.jsp")' >
            <input type="button"  value="返回登录" onclick='location.href=("login.html")'/>
        </div>
    </form>
</div>
<%}else{ %>
<% response.setHeader("Refresh", "0,URL=kill.jsp");%>
<%} %>

```


|  |  |
| - | - |

#### 注销账号界面

```

<% String name=(String)session.getAttribute("username");
    if(name!=null){%>
<div  >
    <form action="index.jsp" method="post" >
        <h3><%=session.getAttribute("username")%><a>,正在注销账号登录,请等待5s</a></h3>
        <div>
            <%session.invalidate();
                response.setHeader("Refresh", "5,URL=login.html");
            %>
        </div>
            <%}else{ %>
        <div >
            <form action="index.jsp" method="post" >

                <h3><%=session.getAttribute("username")%><a>,原因:您未登录请登录后再拭,5s后自动回登录</a></h3>
                <div style="text-align: center">
                    <input type="button"  value="返回登录" onclick='location.href=("login.html")'/>
                </div>
            </form>
        </div>
            <% response.setHeader("Refresh", "5,URL=login.html");%>
            <%} %>
```


|  |  |
| - | - |
