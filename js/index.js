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
}
// 打开App
open.onclick = function () {
    if (!isAndroid) {
        window.location.href = "com.cebbank.xyk://"
        window.location.href = "http://itunes.apple.com/cn/app/id794862904"
    } else {
        window.location.href = "https://yghsh.cebbank.com/static/download/APPphone/apk/ebank_mobile_card.apk?ver=5.0.5";
    }
}
open1.onclick = function () {
    window.location.href = 'https://weightzhang.github.io'
}

