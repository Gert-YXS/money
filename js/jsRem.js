(function(doc, win) {
    var docEl = doc.documentElement;
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';//判断是否有方向发生变化事件,没有就用窗口发生改变事件
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
