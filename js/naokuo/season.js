"use strict";
!function () {
  var t, n, e = new Image, i = (new Date).getMonth() + 1;
  function s(t, n, e, i, s) {
    this.x = t,
      this.y = n,
      this.s = e,
      this.r = i,
      this.fn = s
  }
  let r;
  function o(t) {
    let n, e;
    switch (t) {
      case "x":
        n = Math.random() * window.innerWidth;
        break;
      case "y":
        n = Math.random() * window.innerHeight;
        break;
      case "s":
        n = Math.random();
        break;
      case "r":
        n = 6 * Math.random();
        break;
      case "fnx":
        e = -.5 + Math.random(),
          n = function (t) {
            return t + .5 * e - 1.7
          }
          ;
        break;
      case "fny":
        e = 1.5 + .7 * Math.random(),
          n = function (t, n) {
            return n + e
          }
          ;
        break;
      case "fnr":
        e = .03 * Math.random(),
          n = function (t) {
            return t + e
          }
    }
    return n
  }
  if (e.src = i >= 3 && i <= 5 ? "https://cdn.cbd.int/naokuo-blog-static@1.0.12/img/season/lvye.svg" : i >= 6 && i <= 8 ? "https://cdn.cbd.int/naokuo-blog-static@1.0.12/img/season/taiyang.svg" : i >= 9 && i <= 11 ? "https://cdn.cbd.int/naokuo-blog-static@1.0.12/img/season/qiutian.svg" : "https://cdn.cbd.int/naokuo-blog-static@1.0.12/img/season/xuehua.svg",
    s.prototype.draw = function (t) {
      t.save();
      let n = 40 * this.s;  // - 大小
      t.translate(this.x, this.y),
        t.rotate(this.r),
        t.drawImage(e, 0, 0, n, n),
        t.restore()
    }
    ,
    s.prototype.update = function () {
      this.x = this.fn.x(this.x, this.y),
        this.y = this.fn.y(this.y, this.y),
        this.r = this.fn.r(this.r),
        (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) && (this.r = o("fnr"),
          Math.random() > .4 ? (this.x = o("x"),
            this.y = 0,
            this.s = o("s"),
            this.r = o("r")) : (this.x = window.innerWidth,
              this.y = o("y"),
              this.s = o("s"),
              this.r = o("r")))
    }
    ,
    r = function () {
      this.list = []
    }
    ,
    r.prototype.push = function (t) {
      this.list.push(t)
    }
    ,
    r.prototype.update = function () {
      let t = 0
        , n = this.list.length;
      for (; t < n; t++)
        this.list[t].update()
    }
    ,
    r.prototype.draw = function (t) {
      let n = 0
        , e = this.list.length;
      for (; n < e; n++)
        this.list[n].draw(t)
    }
    ,
    r.prototype.get = function (t) {
      return this.list[t]
    }
    ,
    r.prototype.size = function () {
      return this.list.length
    }
    ,
    screen.width >= 768) {
    function a() {
      if (n) {
        var e = document.getElementById("canvas_season");
        e.parentNode.removeChild(e),
          window.cancelAnimationFrame(t),
          n = !1
      } else
        !function () {
          let e, i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame, 
          a = document.getElementById("canvas_season");
          n = !0,
            a.height = window.innerHeight,
            a.width = window.innerWidth,
            e = a.getContext("2d");
          let h = new r;
          for (let t = 0; t < 15; t++) { // - 数量
            let t, n, i, r, a, d, u, w;
            n = o("x"),
              i = o("y"),
              a = o("r"),
              r = o("s"),
              d = o("fnx"),
              u = o("fny"),
              w = o("fnr"),
              t = new s(n, i, r, a, {
                x: d,
                y: u,
                r: w
              }),
              t.draw(e),
              h.push(t)
          }
          t = i((function n() {
            e.clearRect(0, 0, a.width, a.height),
              h.update(),
              h.draw(e),
              t = i(n)
          }
          ))
        }()
    }
    e.onload = function () {
      a()
      window.onresize = function () {
        let t = document.getElementById("canvas_season");
        t.width = window.innerWidth,
          t.height = window.innerHeight
      }
    }
  }
}();
