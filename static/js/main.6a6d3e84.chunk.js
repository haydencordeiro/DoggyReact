(this.webpackJsonpapi_learn=this.webpackJsonpapi_learn||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(11),n(2)),i=n.n(s),u=n(5),l=n(1);n(13),n(14);var m=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),s=Object(l.a)(o,2),m=s[0],f=s[1],b=Object(a.useState)(""),d=Object(l.a)(b,2),g=d[0],p=d[1];Object(a.useEffect)((function(){h()}),[m]);var h=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/image/random");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.message),c(a.message),0===m&&p(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{align:"center"},r.a.createElement("div",{class:"text-center"},r.a.createElement("img",{src:n,className:"image",alt:"Loading.."})),r.a.createElement("button",{onClick:function(){c(g)},className:"btn btn-danger m-2"},"Prev Image"),r.a.createElement("button",{onClick:function(){p(n),f(m+1)},className:"btn btn-primary m-2"},"Generate Random"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.6a6d3e84.chunk.js.map