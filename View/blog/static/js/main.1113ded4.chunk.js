(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{16:function(e,c,n){e.exports={PageCont:"Block2_PageCont__zo5Tg",card:"Block2_card__3lavH",content:"Block2_content__4-68G",title:"Block2_title__24TMc",sketch:"Block2_sketch__FMt_J"}},17:function(e,c,n){e.exports={About:"Block3_About__1pMjw",info:"Block3_info__2TbCm",Title:"Block3_Title__GpdxG"}},2:function(e,c,n){e.exports={Header:"Header_Header__3nb8w",Section:"Header_Section__2hkhg",Logo:"Header_Logo__3gsnG",Nav:"Header_Nav__1RkY6",Ul:"Header_Ul__3omXI",Li:"Header_Li__1eaZW",Link:"Header_Link__2flFy",I:"Header_I__1XrxK",MenuUl:"Header_MenuUl__1B7-K",MenuLi:"Header_MenuLi__1T2tV",Himage:"Header_Himage__1CZVO",comein_Himage:"Header_comein_Himage__PSPrv",image:"Header_image__l0Dgr",comein_image:"Header_comein_image__1kvEy",icon:"Header_icon__3kMES",Menu:"Header_Menu__10GzC"}},290:function(e,c,n){},291:function(e,c,n){},293:function(e,c,n){},294:function(e,c,n){"use strict";n.r(c);var t=n(1),a=n.n(t),s=n(37),i=n.n(s),l=n(5),r=n(3),o=n(44),j=n(2),d=n.n(j),b=n(0);var m=function(e){var c=e.NowPage;return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{className:d.a.Header,children:Object(b.jsxs)("section",{className:d.a.Section,children:[Object(b.jsx)(l.b,{to:"/home",className:d.a.Logo,children:"Will"}),Object(b.jsx)("label",{htmlFor:"toggle-1",className:d.a.Menu,children:Object(b.jsxs)("ul",{className:d.a.MenuUl,children:[Object(b.jsx)("li",{className:d.a.MenuLi}),Object(b.jsx)("li",{className:d.a.MenuLi}),Object(b.jsx)("li",{className:d.a.MenuLi})]})}),Object(b.jsx)("input",{type:"checkbox",id:"toggle-1"}),Object(b.jsx)("nav",{className:d.a.Nav,children:Object(b.jsxs)("ul",{className:d.a.Ul,children:[Object(b.jsx)("li",{className:d.a.Li,children:Object(b.jsxs)(l.b,{to:"/home",className:d.a.Link,children:[Object(b.jsx)("i",{className:d.a.I}),"\u9996\u9875"]})}),Object(b.jsx)("li",{className:d.a.Li,children:Object(b.jsxs)(l.b,{to:"/notes",className:d.a.Link,children:[Object(b.jsx)("i",{className:d.a.I}),"\u968f\u8bb0"]})}),Object(b.jsx)("li",{className:d.a.Li,children:Object(b.jsxs)(l.b,{to:"/about",className:d.a.Link,children:[Object(b.jsx)("i",{className:d.a.I}),"\u5173\u4e8e"]})}),Object(b.jsx)("li",{className:d.a.Li,children:Object(b.jsxs)(l.b,{to:"/sum",className:d.a.Link,children:[Object(b.jsx)("i",{className:d.a.I}),"\u5f52\u6863"]})})]})})]})}),1===c&&Object(b.jsxs)("div",{className:d.a.Himage,style:{backgroundImage:'url("https://w.wallhaven.cc/full/pk/wallhaven-pkw6y3.jpg")'},children:["Will ",Object(b.jsxs)("div",{className:d.a.icon,children:[" ",Object(b.jsx)(o.a,{})," "]})]}),2===c&&Object(b.jsx)("div",{className:d.a.image,style:{backgroundImage:'url("https://w.wallhaven.cc/full/e7/wallhaven-e79j6o.jpg")'},children:"\u968f\u8bb0"}),3===c&&Object(b.jsx)("div",{className:d.a.image,style:{backgroundImage:'url("https://w.wallhaven.cc/full/pk/wallhaven-pkwq73.jpg")'},children:"\u5173\u4e8e"}),4===c&&Object(b.jsx)("div",{className:d.a.image,style:{backgroundImage:'url("https://w.wallhaven.cc/full/k7/wallhaven-k71pl1.jpg")'},children:"\u5f52\u6863"})]})},h=n(11),x=n.n(h),O=n(13),u=n(15),_=n(14),N=n.n(_),p=n(4),v=n.n(p);var g=function(){var e=Object(t.useState)([]),c=Object(u.a)(e,2),n=c[0],a=c[1];return Object(t.useEffect)((function(){function e(){return(e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:8080/api/v1/article?pagesize=6&pagenum=1");case 2:c=e.sent,a(c.data.data),console.log(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:v.a.body,children:[Object(b.jsx)("main",{className:v.a.PageCont,children:n.map((function(e){return Object(b.jsx)(l.b,{to:"/article/".concat(e.id),className:v.a.card,style:{backgroundImage:"url(".concat(e.img,")")},children:Object(b.jsxs)("div",{className:v.a.content,children:[Object(b.jsx)("h2",{className:v.a.title,children:e.title}),Object(b.jsx)("p",{className:v.a.sketch,children:e.desc})]})})}))}),Object(b.jsxs)("div",{className:v.a.side,children:[Object(b.jsx)("div",{className:v.a.info,children:Object(b.jsxs)("div",{className:v.a.sidecontent,children:[Object(b.jsx)("img",{className:v.a.photo,src:"http://qxb2o0r7y.hb-bkt.clouddn.com/FmILLj7KL2rlH18npwfE-D5jasV_",alt:"\u5934\u50cf"}),Object(b.jsxs)("div",{className:v.a.cardinfo,children:[Object(b.jsx)("div",{className:v.a.carddata,children:Object(b.jsxs)(l.b,{to:"/sum",className:v.a.Link,children:[Object(b.jsx)("div",{children:"\u6587\u7ae0"}),Object(b.jsx)("div",{children:8})]})}),Object(b.jsx)("div",{className:v.a.carddata,children:Object(b.jsxs)(l.b,{to:"/sum",className:v.a.Link,children:[Object(b.jsx)("div",{children:"\u4e66\u7c4d"}),Object(b.jsx)("div",{children:3})]})}),Object(b.jsx)("div",{className:v.a.carddata,children:Object(b.jsxs)(l.b,{to:"/sum",className:v.a.Link,children:[Object(b.jsx)("div",{children:"\u5206\u7c7b"}),Object(b.jsx)("div",{children:4})]})})]})]})}),Object(b.jsxs)("div",{className:v.a.notic,children:[Object(b.jsx)("div",{className:v.a.noticHeader,children:"\u516c\u544a"}),Object(b.jsx)("div",{className:v.a.noticContent,children:"\u95ee\u9898\u7684\u5173\u952e\u7a76\u7adf\u4e3a\u4f55\uff1f \u5e26\u7740\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u6765\u5ba1\u89c6\u4e00\u4e0b\u4f60\u597d\u3002 \u53ef\u662f\uff0c\u5373\u4f7f\u662f\u8fd9\u6837\uff0c\u4f60\u597d\u7684\u51fa\u73b0\u4ecd\u7136\u4ee3\u8868\u4e86\u4e00\u5b9a\u7684\u610f\u4e49\u3002"})]})]})]})},f=n(16),k=n.n(f);var w=function(){var e=Object(t.useState)([]),c=Object(u.a)(e,2),n=c[0],a=c[1];return Object(t.useEffect)((function(){function e(){return(e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:8080/api/v1/article?pagesize=6&pagenum=1");case 2:c=e.sent,a(c.data.data),console.log(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("main",{className:k.a.PageCont,children:n.map((function(e){return Object(b.jsx)(l.b,{to:"/article/".concat(e.id),className:k.a.card,style:{backgroundImage:"url(".concat(e.img,")")},children:Object(b.jsxs)("div",{className:k.a.content,children:[Object(b.jsx)("h2",{className:k.a.title,children:e.title}),Object(b.jsx)("p",{className:k.a.sketch,children:e.desc})]})})}))})},S=n(17),P=n.n(S);var B=function(){return Object(b.jsxs)("div",{className:P.a.About,children:[Object(b.jsxs)("div",{className:P.a.info,children:[Object(b.jsx)("p",{className:P.a.Title,children:"\u5173\u4e8e\u6211"}),"\u5bf9\u6211\u4e2a\u4eba\u800c\u8a00\uff0c\u6211\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u91cd\u5927\u7684\u4e8b\u4ef6\uff0c\u8fd8\u53ef\u80fd\u4f1a\u6539\u53d8\u6211\u7684\u4eba\u751f\u3002 \u4e00\u822c\u6765\u8bb2\uff0c\u6211\u4eec\u90fd\u5fc5\u987b\u52a1\u5fc5\u614e\u91cd\u7684\u8003\u8651\u8003\u8651\u3002 \u65e2\u7136\u5982\u6b64\uff0c \u4e00\u822c\u6765\u8bb2\uff0c\u6211\u4eec\u90fd\u5fc5\u987b\u52a1\u5fc5\u614e\u91cd\u7684\u8003\u8651\u8003\u8651\u3002 \u5c31\u6211\u4e2a\u4eba\u6765\u8bf4\uff0c\u6211\u5bf9\u6211\u7684\u610f\u4e49\uff0c\u4e0d\u80fd\u4e0d\u8bf4\u975e\u5e38\u91cd\u5927\u3002 \u8fd9\u6837\u770b\u6765\uff0c \u65af\u5bbe\u8bfa\u838e\u5728\u4e0d\u7ecf\u610f\u95f4\u8fd9\u6837\u8bf4\u8fc7\uff0c\u6700\u5927\u7684\u9a84\u50b2\u4e8e\u6700\u5927\u7684\u81ea\u5351\u90fd\u8868\u793a\u5fc3\u7075\u7684\u6700\u8f6f\u5f31\u65e0\u529b\u3002\u5e26\u7740\u8fd9\u53e5\u8bdd\uff0c\u6211\u4eec\u8fd8\u8981\u66f4\u52a0\u614e\u91cd\u7684\u5ba1\u89c6\u8fd9\u4e2a\u95ee\u9898\uff1a \u8fd9\u6837\u770b\u6765\uff0c \u6211\u56e0\u4f55\u800c\u53d1\u751f\uff1f \u6b4c\u5fb7\u66fe\u7ecf\u63d0\u5230\u8fc7\uff0c\u51b3\u5b9a\u4e00\u4e2a\u4eba\u7684\u4e00\u751f\uff0c\u4ee5\u53ca\u6574\u4e2a\u547d\u8fd0\u7684\uff0c\u53ea\u662f\u4e00\u77ac\u4e4b\u95f4\u3002\u8fd9\u542f\u53d1\u4e86\u6211\u3002"]}),Object(b.jsxs)("div",{className:P.a.info,children:[Object(b.jsx)("p",{className:P.a.Title,children:"\u5173\u4e8e\u5c0f\u7ad9"}),"\u672c\u4eba\u4e5f\u662f\u7ecf\u8fc7\u4e86\u6df1\u601d\u719f\u8651\uff0c\u5728\u6bcf\u4e2a\u65e5\u65e5\u591c\u591c\u601d\u8003\u8fd9\u4e2a\u95ee\u9898\u3002 \u6211\u4eec\u4e0d\u5f97\u4e0d\u9762\u5bf9\u4e00\u4e2a\u975e\u5e38\u5c34\u5c2c\u7684\u4e8b\u5b9e\uff0c\u90a3\u5c31\u662f\uff0c \u9a6c\u4e91\u5728\u4e0d\u7ecf\u610f\u95f4\u8fd9\u6837\u8bf4\u8fc7\uff0c\u6700\u5927\u7684\u6311\u6218\u548c\u7a81\u7834\u5728\u4e8e\u7528\u4eba\uff0c\u800c\u7528\u4eba\u6700\u5927\u7684\u7a81\u7834\u5728\u4e8e\u4fe1\u4efb\u4eba\u3002\u8fd9\u542f\u53d1\u4e86\u6211\uff0c \u7ecf\u8fc7\u4e0a\u8ff0\u8ba8\u8bba\uff0c \u751f\u6d3b\u4e2d\uff0c\u82e5\u5c0f\u7ad9\u51fa\u73b0\u4e86\uff0c\u6211\u4eec\u5c31\u4e0d\u5f97\u4e0d\u8003\u8651\u5b83\u51fa\u73b0\u4e86\u7684\u4e8b\u5b9e\u3002 \u7f8e\u534e\u7eb3\u8bf4\u8fc7\u4e00\u53e5\u5bcc\u6709\u54f2\u7406\u7684\u8bdd\uff0c\u52ff\u95ee\u6210\u529f\u7684\u79d8\u8bc0\u4e3a\u4f55\uff0c\u4e14\u5c3d\u5168\u529b\u505a\u4f60\u5e94\u8be5\u505a\u7684\u4e8b\u5427\u3002\u5e26\u7740\u8fd9\u53e5\u8bdd\uff0c\u6211\u4eec\u8fd8\u8981\u66f4\u52a0\u614e\u91cd\u7684\u5ba1\u89c6\u8fd9\u4e2a\u95ee\u9898\uff1a \u8981\u60f3\u6e05\u695a\uff0c\u5c0f\u7ad9\uff0c\u5230\u5e95\u662f\u4e00\u79cd\u600e\u4e48\u6837\u7684\u5b58\u5728\u3002"]})]})},L=n(39),H=n.n(L);n(74);var y=function(){var e=Object(t.useState)([]),c=Object(u.a)(e,2),n=c[0],a=c[1];return Object(t.useEffect)((function(){function e(){return(e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:8080/api/v1/article?pagesize=6&pagenum=1");case 2:c=e.sent,a(c.data.data),console.log(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("div",{className:"Bcard",children:Object(b.jsx)("div",{className:"row example-centered",children:Object(b.jsx)("div",{className:"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2",children:Object(b.jsxs)("ul",{className:"timeline timeline-centered",children:[Object(b.jsxs)("li",{className:"timeline-item period",children:[Object(b.jsx)("div",{className:"timeline-info"}),Object(b.jsx)("div",{className:"timeline-marker"}),Object(b.jsx)("div",{className:"timeline-content",children:Object(b.jsx)("h2",{className:"timeline-title",children:"2021"})})]}),n.map((function(e){var c=H()("".concat(e.CreatedAt)).format("MMMM D");return Object(b.jsx)(l.b,{to:"/article/".concat(e.id),children:Object(b.jsxs)("li",{className:"timeline-item",children:[Object(b.jsx)("div",{className:"timeline-info",children:Object(b.jsx)("span",{children:c})}),Object(b.jsx)("div",{className:"timeline-marker"}),Object(b.jsxs)("div",{className:"timeline-content",children:[Object(b.jsx)("h3",{className:"timeline-title",children:e.title}),Object(b.jsxs)("p",{children:[e.desc," "]})]})]})})}))]})})})})},M=n(40),A=n.n(M);var C=function(e){var c=e.NowPage;return Object(b.jsxs)("div",{className:A.a.Content,children:[1===c&&Object(b.jsx)(g,{}),2===c&&Object(b.jsx)(w,{}),3===c&&Object(b.jsx)(B,{}),4===c&&Object(b.jsx)(y,{})]})},I=n(41),G=n.n(I);var F=function(){return Object(b.jsx)("div",{className:G.a.Footer,children:"2021 - wang - will"})};var D=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{NowPage:1}),Object(b.jsx)(C,{NowPage:1}),Object(b.jsx)(F,{})]})};var T=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{NowPage:2}),Object(b.jsx)(C,{NowPage:2}),Object(b.jsx)(F,{})]})};var E=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{NowPage:3}),Object(b.jsx)(C,{NowPage:3}),Object(b.jsx)(F,{})]})};var V=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{NowPage:4}),Object(b.jsx)(C,{NowPage:4}),Object(b.jsx)(F,{})]})},z=n(20),U=n.n(z),W=n(42),Y=n.n(W),q=n(43),J=n.n(q);n(290),n(291),n(292);var K=function(){var e=U()("# \u7f51\u7edc\u5c42\u2014\u2014\u63a7\u5236\u5e73\u9762\n\n### \u8def\u7531\u9009\u62e9\u7b97\u6cd5\n\n**\u7528\u56fe\u6765\u8868\u793a\u8def\u7531\u9009\u62e9\uff0c\u56fe\u7684\u6700\u77ed\u8def\u5f84\u8868\u793a\u8def\u7531\u9009\u62e9\u7684\u6700\u5c0f\u5f00\u9500**\n\n> **\u8def\u7531\u9009\u62e9\u7b97\u6cd5\u7684\u7b2c\u4e00\u79cd\u5206\u7c7b**\n\n* **\u96c6\u4e2d\u5f0f\u8def\u7531\u9009\u62e9\u7b97\u6cd5**\n  **\u7528\u5b8c\u6574\u7684\u94fe\u8def\u4fe1\u606f\u6765\u8ba1\u7b97\u51fa\u6700\u77ed\u8def\u5f84\uff0c\u8981\u6c42\u5df2\u77e5\u6240\u6709\u7f51\u7edc\u7684\u5b8c\u6574\u4fe1\u606f**\n  **\u4e5f\u88ab\u79f0\u4e3a\u94fe\u8def\u72b6\u6001\u7b97\u6cd5(LS)**\n* **\u5206\u6563\u5f0f\u8def\u7531\u9009\u62e9\u7b97\u6cd5**\n  **\u8def\u7531\u5668\u4ee5\u8fed\u4ee3\uff0c\u5206\u5e03\u5f0f\u7684\u65b9\u5f0f\u8ba1\u7b97\u51fa\u6700\u4f4e\u5f00\u9500\u8def\u5f84\uff0c\u4e0d\u4e86\u89e3\u6240\u6709\u7684\u7f51\u7edc   \u4fe1\u606f\uff0c\u5982\u8ddd\u79bb\u5411\u91cf\u7b97\u6cd5(DV)**\n\n> **\u8def\u7531\u9009\u62e9\u7b97\u6cd5\u7684\u53e6\u5916\u51e0\u79cd\u5206\u7c7b**\n\n* **\u9759\u6001/\u52a8\u6001**\n* **\u8d1f\u8f7d\u654f\u611f/\u8d1f\u8f7d\u8fdf\u949d**\n  **\u5f53\u4eca\u5927\u6570\u56e0\u7279\u7f51\u7684\u8def\u7531\u9009\u62e9\u7b97\u6cd5\u662f\u8d1f\u8f7d\u8fdf\u949d\u7684**\n\n> **\u94fe\u8def\u72b6\u6001\u8def\u7531\u9009\u62e9\u7b97\u6cd5**\n\n**\u56fe\u6c42\u6700\u77ed\u8def\u5f84\u7684\u7b97\u6cd5\uff0c\u6743\u503c\u662f\u94fe\u8def\u7684\u5f00\u9500**\n\n> **\u8ddd\u79bb\u5411\u91cf\u8def\u7531\u9009\u62e9\u7b97\u6cd5**\n\n`dx(y) = minv{c(x,u) + dv(y)}`\n\n> **LS \u4e0e DV  \u7684\u6bd4\u8f83**\n\n* **\u62a5\u6587\u7684\u590d\u6742\u6027**\n  **LS\u8981\u53d1\u9001O\uff08|N||E|)\u4e2a\u62a5\u6587\uff0c\u800c\u4e14\u4efb\u4f55\u4e00\u6761\u94fe\u8def\u7684\u5f00\u9500\u6539\u53d8\u65f6\uff0c\u5fc5\u987b\u5411\u6240\u6709\u7684\u8282\u70b9\u53d1\u9001\u65b0\u7684\u94fe\u8def\u5f00\u9500\uff0cDV\u53ea\u5728\u76f4\u63a5\u76f8\u8fde\u7684\u90bb\u5c45\u4e4b\u95f4\u4ea4\u6362\u62a5\u6587\uff0c\u800c\u4e14\u94fe\u8def\u5f00\u9500\u6539\u53d8\u65f6\uff0c\u9664\u975e\u5bfc\u81f4\u6700\u4f4e\u5f00\u9500\u4e5f\u6539\u53d8\uff0c\u624d\u4f20\u64ad\u65b0\u7684\u94fe\u8def\u5f00\u9500**\n* **\u6536\u655b\u901f\u5ea6**\n  **LS\u662fO(N^2)\u7b97\u6cd5\uff0c\u800cDV\u6536\u655b\u8f83\u6162\uff0c\u4e14\u53ef\u80fd\u53d1\u751f\u65e0\u7a77\u8ba1\u6570\u7b49\u95ee\u9898**\n* **\u5065\u58ee\u6027**\n  **\u5f53\u8def\u7531\u5668\u53d1\u9001\u9519\u8bef\uff0cLS\u5411\u5176\u5b83\u8fde\u63a5\u7684\u94fe\u8def\u5e7f\u64ad\u4e0d\u6b63\u786e\u7684\u5f00\u9500\uff0c\u4f46\u662f\u8282\u70b9\u4ec5\u8ba1\u7b97\u81ea\u5df1\u7684\u8f6c\u53d1\u8868\uff0c\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u662f\u5206\u79bb\u7684\uff0c\u800cDV\u7b97\u6cd5\u4f1a\u4f20\u9012\u7ed9\u5b83\u7684\u90bb\u5c45\uff0c\u5b83\u7684\u90bb\u5c45\u5728\u4e0b\u4e00\u4e2a\u8fed\u4ee3\u4f1a\u7ed9\u53e6\u4e00\u4e2a\u90bb\u5c45\uff0c\u53ef\u80fd\u9519\u8bef\u7684\u5f00\u9500\u4f1a\u6269\u6563\u5230\u6574\u4e2a\u7f51\u7edc\u3002**\n\n### \u56e0\u7279\u7f51\u4e2d\u81ea\u6cbb\u7cfb\u7edf\u5185\u90e8\u7684\u8def\u7531\u9009\u62e9\uff1a`OSPF`\n\n> **\u81ea\u6cbb\u7cfb\u7edf(AS)**\n\n**\u89e3\u51b3\u56e0\u7279\u7f51\u4e2d\u8def\u7531\u9009\u62e9\u7b97\u6cd5\u4e2d\u89c4\u6a21\u5de8\u5927\uff0cISP\u7ba1\u7406\u81ea\u6cbb\u7684\u95ee\u9898**\n\n**\u4e00\u7ec4AS\u901a\u5e38\u7531\u5904\u4e8e\u76f8\u540c\u7ba1\u7406\u63a7\u5236\u4e0b\u7684\u8def\u7531\u5668\u7ec4\u6210\u3002**\n\n**\u5728\u76f8\u540cAS\u4e2d\u7684\u8def\u7531\u5668\u90fd\u8fd0\u884c\u7740\u76f8\u540c\u7684\u8def\u7531\u9009\u62e9\u7b97\u6cd5\u5e76\u4e14\u62e5\u6709\u5f7c\u6b64\u7684\u4fe1\u606f\u3002**\n\n> **\u5f00\u653e\u6700\u77ed\u8def\u4f18\u5148**`(OSPF)`\n\n`OSPF`\u662f\u4e00\u79cd\u94fe\u8def\u72b6\u6001\u534f\u8bae\uff0c\u5b83\u4f7f\u7528\u6d2a\u6cdb\u94fe\u8def\u72b6\u6001\u4fe1\u606f\u548cDijkstra\u6700\u4f4e\u5f00\u9500\u8def\u5f84\u7b97\u6cd5\uff0c\u6bcf\u53f0\u81ea\u5236\u7cfb\u7edf\u4e2d\u7684\u8def\u7531\u5668\u6709\u4e00\u5f20\u5b8c\u6574\u7684\u81ea\u6cbb\u7cfb\u7edf\u7684\u62d3\u6251\u56fe\uff0c\u7528\u4e8e\u8ba1\u7b97\u81ea\u5df1\u5230\u6839\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84\uff0c\u534f\u8bae\u89c4\u5b9a\u5468\u671f\u6027\u7684\u5e7f\u64ad\u94fe\u8def\u72b6\u6001\u3002\n\n> `OSPF`\u7684\u4f18\u70b9\n\n* **\u5b89\u5168 \uff1a \u80fd\u591f\u9274\u522b**`OSPF`\u8def\u7531\u5668\u4e4b\u95f4\u7684\u4ea4\u6362\n* **\u591a\u6761\u76f8\u540c\u5f00\u9500\u7684\u8def\u5f84 \uff1a\u5f53\u5f00\u9500\u76f8\u540c\u65f6\uff0c**`OSPF`\u5141\u8bb8\u4f7f\u7528\u591a\u6761\u8def\u5f84\n* **\u5bf9\u5355\u64ad\u548c\u591a\u64ad\u8def\u7531\u9009\u62e9\u7684\u7efc\u5408\u652f\u6301**\n* **\u652f\u6301\u5728\u5355\u4e2aAS\u4e2d\u7684\u5c42\u6b21\u7ed3\u6784**\n\n### ISP\u4e4b\u95f4\u7684\u8def\u7531\u9009\u62e9\uff1a`BGP`\n\n`\u8fb9\u754c\u7f51\u5173\u534f\u8bae`\u6240\u6709\u7684AS\u8fd0\u884c\u76f8\u540c\u7684AS\u95f4\u7684\u8def\u7531\u9009\u62e9\u534f\u8bae\n\n> `BGP`\u7684\u4f5c\u7528\n\n**\u4f5c\u4e3a\u4e00\u79cdAS\u4e4b\u95f4\u7684\u8def\u7531\u9009\u62e9\u534f\u8bae\uff0c**`BGP`\u5b8c\u6210\u4e86\u4ee5\u4e0b\u4efb\u52a1\n\n1. **\u4ece\u90bb\u5c45AS\u83b7\u5f97\u524d\u7f00\u7684\u53ef\u8fbe\u6027\u4fe1\u606f\uff0c**`BGP`\u5141\u8bb8\u6bcf\u4e2a\u5b50\u7f51\u5411\u56e0\u7279\u7f51\u7684\u5176\u4f59\u90e8\u5206\u901a\u544a\u5b83\u7684\u5b58\u5728\u3002\n2. **\u786e\u5b9a\u5230\u8be5\u524d\u7f00\u7684\u201c\u6700\u597d\u7684\u201d\u8def\u7531\u3002**\n\n> **\u901a\u544a**`BGP`\u8def\u7531\u4fe1\u606f\n\n1. `BGP`\u8fde\u63a5\uff1a\u6bcf\u5bf9\u8def\u7531\u5668\u901a\u8fc7\u4f7f\u7528179\u7aef\u53e3\u534a\u6c38\u4e45`TCP`\u8fde\u63a5\u4ea4\u6362\u8def\u7531\u9009\u62e9\u4fe1\u606f\uff0c\u6bcf\u6761\u76f4\u63a5\u8fde\u63a5\u4ee5\u53ca\u6240\u6709\u901a\u8fc7\u8be5\u8fde\u63a5\u53d1\u9001\u7684`BGP`\u62a5\u6587\u3002\n   * `\u5916\u90e8BGP\u8fde\u63a5`\uff1a\u8de8\u8d8a\u4e24\u4e2aAS\u7684`BGP`\u8fde\u63a5\u3002\n   * `\u5185\u90e8BGP\u8fde\u63a5`\uff1a\u76f8\u540cAS\u4e2d\u7684\u4e24\u53f0\u8def\u7531\u5668\u4e4b\u95f4\u7684`BGP`\u4f1a\u8bdd\u3002\n\n> **\u786e\u5b9a\u6700\u597d\u7684\u8def\u7531**\n\n1. **\u70ed\u571f\u8c46\u8def\u7531\u9009\u62e9\uff1a**\n   **\u5bf9\u4e8e\u8def\u7531\u5668\uff0c\u5c3d\u53ef\u80fd\u5feb\u5730\u5c06\u5206\u7ec4\u9001\u51fa\u5176AS(\u7528\u53ef\u80fd\u7684\u6700\u4f4e\u5f00\u9500)\uff0c\u800c\u4e0d\u62c5\u5fc3\u5176AS\u5916\u90e8\u5230\u76ee\u7684\u5730\u7684\u4f59\u4e0b\u90e8\u5206\u7684\u5f00\u9500\u3002**\n2. **\u5b9e\u9645\u7684\u8def\u7531\u9009\u62e9\u7b97\u6cd5\uff1a**\n   * **\u8def\u7531\u88ab\u6307\u6d3e\u4e00\u4e2a\u672c\u5730\u504f\u597d\u503c\uff0c\u9009\u62e9\u6700\u9ad8\u672c\u5730\u504f\u597d\u503c\u3002**\n   * **\u4ece\u4f59\u4e0b\u7684\u8def\u7531\u4e2d\uff0c\u5c06\u9009\u62e9\u5177\u6709\u6700\u77ed\u7684AS-PATH\u7684\u8def\u7531**\n   * **\u4ece\u4f59\u4e0b\u7684\u8def\u7531\u4e2d\uff0c\u4f7f\u7528\u70ed\u571f\u8c46\u8def\u7531\u9009\u62e9**\n   * **\u5982\u679c\u4ecd\u7559\u4e0b\u591a\u6761\u8def\u7531\uff0c\u8be5\u8def\u7531\u4f7f\u7528**`BGP`\u6807\u8bc6\u7b26\u9009\u62e9\u8def\u7531\n\n> `IP`\u4efb\u64ad\n\n### `SDN`\u63a7\u5236\u5e73\u9762\n\n> `SDN`\u4f53\u7cfb\u7ed3\u6784\u76844\u4e2a\u5173\u952e\u7279\u5f81\n\n* **\u57fa\u4e8e\u6d41\u7684\u8f6c\u53d1**\n* **\u6570\u636e\u5e73\u9762\u4e0e\u63a7\u5236\u5e73\u9762\u5206\u79bb**\n* **\u7f51\u7edc\u63a7\u5236\u529f\u80fd**\n* **\u53ef\u7f16\u7a0b\u7684\u7f51\u7edc**\n\n### `ICMP`\u56e0\u7279\u7f51\u63a7\u5236\u62a5\u6587\u534f\u8bae\n\n**\u88ab\u4e3b\u673a\u548c\u8def\u7531\u5668\u7528\u6765\u5f7c\u6b64\u6c9f\u901a\u7f51\u7edc\u5c42\u7684\u4fe1\u606f\u3002**\n");return U.a.setOptions({renderer:new U.a.Renderer,highlight:function(e){return J.a.highlightAuto(e).value},gfm:!0,pedantic:!1,sanitize:!1,tables:!0,smartLists:!0,smartypants:!1}),Object(t.useEffect)((function(){Y.a.init({tocSelector:".Catelog",contentSelector:".markdown-body",headingSelector:"h1, h2, h3 , h4 , h5 , h6",hasInnerContainers:!0,scrollSmooth:!0,collapseDepth:!0,scrollSmoothOffset:-80})})),Object(b.jsxs)("div",{className:"Articlebody",children:[Object(b.jsxs)("div",{className:"Articleside",children:[Object(b.jsx)("div",{className:"Catelog"}),Object(b.jsx)(l.b,{to:"/notes",children:Object(b.jsx)("button",{className:"return",children:"\u8fd4\u56de"})})]}),Object(b.jsx)("div",{className:"Articlemain",children:Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:e},className:"markdown-body"})})]})};n(293);var R=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/sum",component:V}),Object(b.jsx)(r.a,{path:"/about",component:E}),Object(b.jsx)(r.a,{path:"/notes",component:T}),Object(b.jsx)(r.a,{path:"/home",component:D}),Object(b.jsx)(r.a,{path:"/article",component:K}),Object(b.jsx)(r.a,{exact:!0,path:"/",component:D})]})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root"))},4:function(e,c,n){e.exports={body:"Block1_body__31Qe2",PageCont:"Block1_PageCont__1hLxi",card:"Block1_card__3x5_2",content:"Block1_content__3MmSv",title:"Block1_title__18jH8",sketch:"Block1_sketch__3V_Am",side:"Block1_side__yQYGH",info:"Block1_info__2uWeB",sidecontent:"Block1_sidecontent__3r8Du",photo:"Block1_photo__39hMT",cardinfo:"Block1_cardinfo__b62pp",carddata:"Block1_carddata__2mB13",notic:"Block1_notic__1PMNz",noticContent:"Block1_noticContent__3YuqT"}},40:function(e,c,n){e.exports={Content:"Content_Content__1Y6NM"}},41:function(e,c,n){e.exports={Footer:"Footer_Footer__24lR7",Gradient:"Footer_Gradient__34Dfw",words:"Footer_words__25TgE"}},74:function(e,c,n){}},[[294,1,2]]]);
//# sourceMappingURL=main.1113ded4.chunk.js.map