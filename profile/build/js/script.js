!function(a){"use strict";function b(a,c,d){if(!(0>d)){var e=c-a.scrollTop,f=e/d*10;setTimeout(function(){a.scrollTop=a.scrollTop+f,a.scrollTop==c||a.offsetHeight+a.scrollTop+1>=a.scrollHeight||b(a,c,d-10)},10)}}var c,d=a.querySelector(".main-nav"),e=a.querySelector("main");d.addEventListener("click",function(d){if("A"===d.target.nodeName){d.preventDefault();var f=d.target.getAttribute("href"),g=a.querySelector(f);c=g.offsetTop,b(e,c,500)}},!1)}(this.document);