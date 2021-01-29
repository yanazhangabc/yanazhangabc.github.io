// 获取目标元素
var closeBtn = document.getElementById('close_btn')
var maskLayer = document.getElementsByClassName('mask-layer')[0]

var open1 = document.getElementById('open1')

// 判断设备类型
var ua = window.navigator.userAgent
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;

// 点击按钮
//open1.onclick = function () {
//    window.location.href = 'https://cwma.cebbank.com/applinkUL'
//}

ULink.start({
  id: 'usruisrboasjdhp', /* 平台为每个应用分配的方案link ID，必填 */
  data: {} /* 自定义参数，选填 */
}).ready(function(ctx) { /* 初始化完成的回调函数 */
  document.getElementById('open1').onclick = function(e){
    ctx.wakeup(); /* 用户点击某个按钮时启动app */
  };
});

