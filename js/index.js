// 获取目标元素
var closeBtn = document.getElementById('close_btn')
var maskLayer = document.getElementsByClassName('mask-layer')[0]
var open = document.getElementById('open')
var open1 = document.getElementById('open1')
var download = document.getElementById('download')

// 判断设备类型
var ua = window.navigator.userAgent
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;

// 点击关闭提示层
closeBtn.onclick = function () {
    maskLayer.style.display = 'none'
}
// 打开App
if (ua.indexOf('MicroMessenger') === -1) { // 非微信端
    // window.location.href = "com.cebbank.xyk://"
} else {
    // maskLayer.style.display = 'block'
}

// 下载App
download.onclick = function () {
    if (!isAndroid) {
        // window.location.href = "http://itunes.apple.com/cn/app/id794862904"
    } else {
        // window.location.href = "https://yghsh.cebbank.com/static/download/APPphone/apk/ebank_mobile_card.apk?ver=5.0.5";
    }
    window.location.href = "http://itunes.apple.com/cn/app/id794862904"
}
// 打开App
open.onclick = function () {
    if (!isAndroid) {
        //window.location.href = "com.smoothzhang.WechatDemo://jump"
        // window.location.href = "http://itunes.apple.com/cn/app/id794862904"
    } else {
        //window.location.href = "https://yghsh.cebbank.com/static/download/APPphone/apk/ebank_mobile_card.apk?ver=5.0.5";
    }
    
    window.location.href = 'https://yanazhangabc.github.io/app/'
}
// linkUL打开App
open1.onclick = function () {
    // window.location.href = 'https://zyzmlc.github.io/'
    // window.location.href = 'https://sifuweifang.com/'
    window.location.href = 'https://cwma.cebbank.com/applinkUL'
}

ULink.start({
  id: 'usruisrboasjdhp', /* 平台为每个应用分配的方案link ID，必填 */
  data: {} /* 自定义参数，选填 */
}).ready(function(ctx) { /* 初始化完成的回调函数 */
  document.getElementById('open1').onclick = function(e){
    ctx.wakeup(); /* 用户点击某个按钮时启动app */
  };
});

