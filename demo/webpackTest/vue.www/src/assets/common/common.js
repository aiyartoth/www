
let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
let animateClassNames = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
let animatedCss = {
  endEvent: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  className: ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"]
};

/**
 * 打印结果进行调试
 * @param {Object || Array} data 
 */
function printLog(data) {
  if (arguments.length == 1) {
    if (typeof data === "object") {
      console.dir(data);
    } else {
      console.log(data);
    }
  } else {
    console.log(...arguments);
  }
}
/**
 * 利用jquery及animate.css实现给元素添加动画后自动删除
 * @param {Object} jQnode 
 * @param {String} animationName 
 */
function animateCss(jQnode, animationName) {
  jQnode.addClass('animated ' + animationName).one(animatedCss.endEvent, function () {
    $(this).removeClass('animated ' + animationName);
  });
}
/**
 * 给jquery节点随机赋予样式
 * @param {Object} jQnode 
 */
function randomAnimateStyle(jQnode) {
  var index = Math.floor((Math.random() * animatedCss.className.length));
  animateCss(jQnode, animatedCss.className[index])
}
/**
 * 判断字符串长度,汉字占两个字符
 * @param {String} str 
 */
function strlen(str) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    //单字节加1   
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    }
    else {
      len += 2;
    }
  }
  return len;
}

export { printLog, animateCss, randomAnimateStyle }