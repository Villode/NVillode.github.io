const naokuo = {
  intersectionObserver: function (lazyLoad, id) {
    //创建IntersectionObserver实例
    const naokuooptions = {
      root: null, // 根元素，默认为浏览器视口
      rootMargin: '0px', // 根元素的外边距 
      threshold: 0.6 // 交叉比例的阈值，触发回调函数的条件 
    };
    const observer = new IntersectionObserver(naokuocallback, naokuooptions);
    //定义回调函数
    function naokuocallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 元素进入了视口
          // 执行相应的操作，比如加载图片、添加动画等
          // console.log("echarts测试"); 
          lazyLoad?.();
          observer.unobserve(id);
        }
      });
    }
    //将目标元素与 IntersectionObserver 关联起来：
    observer.observe(id);
  },
  resizeObserver: function (myChart, id, delay = 2000) {
    const naokuoobserver = new ResizeObserver(callback);
    let canResize = true;
    function callback(entries, observer) {
      entries.forEach(entry => {
        if (entry.borderBoxSize) {
          myChart?.();
        }
      });
    }
    setTimeout(function () {
      //1秒后执行刷新
      naokuoobserver.observe(id);
    }, delay); //单位是毫秒
  }
}
