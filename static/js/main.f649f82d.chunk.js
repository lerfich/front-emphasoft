(this["webpackJsonpemphasoft-test"]=this["webpackJsonpemphasoft-test"]||[]).push([[0],{10:function(e,t,n){e.exports={modal:"Modal_modal__P3_V5",appear:"Modal_appear__3P-Ut",modalDialog:"Modal_modalDialog__3OEqW",animatetop:"Modal_animatetop__eULZH","slide-in":"Modal_slide-in__1YScK",modalHeader:"Modal_modalHeader__2ik2T",modalFooter:"Modal_modalFooter__2dKHi",modalClose:"Modal_modalClose__udA7j",modalBody:"Modal_modalBody__1CdAm",modalContent:"Modal_modalContent__1rYYD",modalTitle:"Modal_modalTitle__BrJuw"}},18:function(e,t,n){e.exports={box:"UserList_box__2mk2b",userList:"UserList_userList__3sO8c"}},19:function(e,t,n){e.exports={activeUserList:"ShowUsers_activeUserList__2mp2J",isOther:"ShowUsers_isOther__30bhD"}},32:function(e,t,n){e.exports={App:"App_App__16ZpL",wrapper:"App_wrapper__2Rh_f"}},33:function(e,t,n){e.exports={loginBlock:"LoginField_loginBlock__19fvA",ldsRing:"LoginField_ldsRing__MuapJ","lds-ring":"LoginField_lds-ring__6E2BH"}},34:function(e,t,n){e.exports={ldsRoller:"Loader_ldsRoller__16K5j"}},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(31),c=n.n(r),i=(n(41),n(13)),o=n(9),l=n.n(o),u=n(12),d=n(4),j=n(32),m=n.n(j),b=n(33),p=n.n(b),f=n(10),h=n.n(f),x=n(0),v=function(e){var t=e.visible,n=void 0!==t&&t,a=e.content,r=void 0===a?{}:a,c=e.footer,i=void 0===c?{}:c,o=e.onClose,l=function(e){switch(e.key){case"Escape":o()}};return s.a.useEffect((function(){return document.addEventListener("keydown",l),function(){return document.removeEventListener("keydown",l)}})),n?Object(x.jsx)("div",{className:h.a.modal,onClick:o,children:Object(x.jsxs)("div",{className:h.a.modalDialog,onClick:function(e){return e.stopPropagation()},children:[Object(x.jsx)("div",{className:h.a.modalHeader,children:Object(x.jsx)("span",{className:h.a.modalClose,onClick:o,children:"\xd7"})}),Object(x.jsx)("div",{className:h.a.modalBody,children:Object(x.jsx)("div",{className:h.a.modalContent,children:Object(x.jsx)("p",{children:r})})}),i&&Object(x.jsx)("div",{className:h.a.modalFooter,children:i})]})}):null},O=n(15),_=n.n(O),k=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:"test_super",password:"Nf<U4f<rDbtDxAPn"},console.log("lmaaaa"),e.next=4,_.a.post("http://emphasoft-test-assignment.herokuapp.com/api-token-auth/",n);case 4:a=e.sent,window.localStorage.setItem("token",a.data.token),console.log(a.data.token,"<- token; also got getItem ->",window.localStorage.getItem("token"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return window.localStorage.getItem("token")},w={accept:"application/json","content-type":"application/json"},N=g();N&&(w.Authorization="Token ".concat(N));var y=_.a.create({baseURL:"http://emphasoft-test-assignment.herokuapp.com/",headers:w});y.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var L=function(e){var t=e.onLogin,n=e.setLoading,a=s.a.useState(""),r=Object(d.a)(a,2),c=r[0],i=r[1],o=s.a.useState(""),j=Object(d.a)(o,2),m=j[0],b=j[1],f=s.a.useState(!1),h=Object(d.a)(f,2),O=h[0],_=h[1],g=s.a.useState(null),w=Object(d.a)(g,2),N=w[0],L=w[1],C=function(){return _(!1)},S=function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==!!c.trim()){e.next=6;break}return L("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),_(!0),e.abrupt("return");case 6:if(!1!==!!m.trim()){e.next=12;break}return L("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),_(!0),e.abrupt("return");case 12:if(!("a"!==c|"a"!==m)){e.next=16;break}return L("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),_(!0),e.abrupt("return");case 16:return k({username:"".concat(c),password:"".concat(m)}),n(!0),e.next=20,y.get("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/");case 20:a=e.sent,t({username:c,users:a}),n(!1);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){switch(e.key){case"Enter":S()}};return s.a.useEffect((function(){return document.addEventListener("keydown",E),function(){return document.removeEventListener("keydown",E)}})),Object(x.jsxs)("div",{className:p.a.loginBlock,children:[Object(x.jsx)(v,{visible:O,content:N,footer:Object(x.jsx)("button",{onClick:C,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),onClose:C}),Object(x.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",value:c,onChange:function(e){return i(e.target.value)}}),Object(x.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:m,onChange:function(e){return b(e.target.value)}}),Object(x.jsx)("button",{onClick:S,children:"\u0412\u043e\u0439\u0442\u0438"})]})},C=n(18),S=n.n(C),E=n(34),F=n.n(E);var R=function(e){return e.loading?Object(x.jsxs)("div",{className:F.a.ldsRoller,children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]}):Object(x.jsx)("div",{})},A=n(19),M=n.n(A);var B=function(e){var t=e.users;return Object(x.jsx)("ul",{className:M.a.activeUserList,children:t.map((function(e,t){var n=e.id,a=e.username;return Object(x.jsxs)("li",{className:M.a.isOther,children:[" ",a+" id-"+n," "]},n)}))})};var U=function(e){var t=e.onSort;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"xd",id:"inlineRadio1",onClick:function(){t("asc")}}),Object(x.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio1",children:"by asc id"})]}),Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"xd",id:"inlineRadio2",onClick:function(){t("desc")}}),Object(x.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"by desc id"})]}),Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"xd",id:"inlineRadio3",onClick:function(){t("byName")}}),Object(x.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio3",children:"by name"})]}),Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"xd",id:"inlineRadio4",onClick:function(){t(null)},defaultChecked:!0}),Object(x.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio4",children:"default"})]})]})};var D=function(e){var t=e.id,n=e.checked,a=e.addFilter,s=e.toShow,r=e.text,c=e.disabled;return Object(x.jsxs)("div",{className:"custom-control custom-switch",children:[Object(x.jsx)("input",{type:"checkbox",className:"custom-control-input",id:t,checked:n,onChange:function(){return a(s)},disabled:c}),Object(x.jsx)("label",{className:"custom-control-label",htmlFor:t,children:r})]})};var I=function(e){var t=e.onFilter,n=e.users,a=e.partName,r=s.a.useState(!1),c=Object(d.a)(r,2),i=c[0],o=c[1],l=s.a.useState(!1),u=Object(d.a)(l,2),j=u[0],m=u[1],b=s.a.useState(!1),p=Object(d.a)(b,2),f=p[0],h=p[1],v=function(e){switch(e){case"is_active":return void o(!i);case"is_superuser":return void m(!j);case"is_all":return void h(!f);default:return}},O=function(e,t){return e.trim()?t.filter((function(t){return t.username.toLowerCase().includes(e.toLowerCase())})):t};return s.a.useEffect((function(){if(f)t(O(a,n));else if(i&j){var e=n.filter((function(e){return!0===e.is_active&!0===e.is_superuser}));t(O(a,e))}else if(i&!j){var s=n.filter((function(e){return!0===e.is_active&!1===e.is_superuser}));t(O(a,s))}else if(!i&j){var r=n.filter((function(e){return!1===e.is_active&!0===e.is_superuser}));t(O(a,r))}else if(!i&!j){var c=n.filter((function(e){return!1===e.is_active&!1===e.is_superuser}));t(O(a,c))}}),[i,j,f,a]),Object(x.jsxs)("div",{children:[Object(x.jsx)(D,{id:"customAll",checked:f,addFilter:v,text:"show all",toShow:"is_all",disabled:!1}),Object(x.jsx)(D,{id:"customActive",checked:i,addFilter:v,text:"filter active",toShow:"is_active",disabled:f}),Object(x.jsx)(D,{id:"customSuper",checked:j,addFilter:v,text:"filter superuser",toShow:"is_superuser",disabled:f})]})};var H=function(e){var t=e.onSearch,n=s.a.useState(""),a=Object(d.a)(n,2),r=a[0],c=a[1],i=function(e){switch(e.key){case"Enter":t(r)}};return s.a.useEffect((function(){return document.addEventListener("keydown",i),function(){return document.removeEventListener("keydown",i)}})),Object(x.jsxs)("div",{className:"input-group rounded",children:[Object(x.jsx)("input",{className:"form-control rounded","aria-label":"Search","aria-describedby":"search-addon",type:"text",placeholder:"\u0418\u0441\u043a\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",value:r,onChange:function(e){return c(e.target.value)}}),Object(x.jsx)("span",{className:"input-group-text border-0",id:"search-addon",children:Object(x.jsx)("button",{className:"bi bi-search",onClick:function(){return t(r)},children:"  "})})]})};var J=function(e){var t=e.users,n=e.username,r=e.loading,c=s.a.useState(null),i=Object(d.a)(c,2),o=i[0],l=i[1],u=s.a.useState(t),j=Object(d.a)(u,2),m=j[0],b=j[1],p=s.a.useState(""),f=Object(d.a)(p,2),h=f[0],v=f[1];return window.dataOnauth=function(e){console.log("user-fucker",e),alert("leleks?")},Object(a.useEffect)((function(){var e=document.createElement("script");e.src="https://telegram.org/js/telegram-widget.js?15",e.setAttribute("data-telegram-login","Lin444Bot"),e.setAttribute("data-size","large"),e.setAttribute("data-request-access","write"),e.setAttribute("data-onauth","dataOnauth(user)"),e.async=!0,document.getElementById("lol").appendChild(e)})),Object(x.jsxs)("div",{id:"lol",className:S.a.box,children:[Object(x.jsxs)("div",{className:S.a.userList,children:["\u0412\u044b \u0437\u0430\u0448\u043b\u0438 \u0432 \u0445\u0430\u0431:)",Object(x.jsx)("hr",{}),Object(x.jsx)(I,{onFilter:function(e){b(e)},users:t,partName:h}),Object(x.jsx)(U,{onSort:function(e){l(e)}}),Object(x.jsx)(H,{onSearch:function(e){v(e)}}),Object(x.jsxs)("b",{children:["\u041e\u043d\u043b\u0430\u0439\u043d (",m.length,"):"]}),Object(x.jsx)(B,{users:function(e){switch(o){case"asc":return e.slice().sort((function(e,t){return e.id>t.id?1:-1}));case"desc":return e.slice().sort((function(e,t){return e.id>t.id?-1:1}));case"byName":return e.slice().sort((function(e,t){return e.username>t.username?1:-1}));default:return e}}(m)}),Object(x.jsx)(R,{loading:r})]}),Object(x.jsxs)("div",{children:[" Hello, ",n," "]})]})},P=function(e,t){switch(t.type){case"JOINED":return Object(i.a)(Object(i.a)({},e),{},{joined:!0,username:t.payload.username,users:t.payload.users});default:return e}},T=n(35),K=n(2);var Y=function(){var e=s.a.useReducer(P,{joined:!1,username:null,users:[]}),t=Object(d.a)(e,2),n=t[0],a=t[1],r=s.a.useState(!1),c=Object(d.a)(r,2),o=c[0],j=c[1],b=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t,"obj"),a({type:"JOINED",payload:t}),console.log("some1 has joined");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(T.a,{children:[Object(x.jsx)("div",{className:m.a.wrapper,children:n.joined?Object(x.jsx)(K.a,{to:"/userList"}):Object(x.jsx)(K.a,{to:"/"})}),Object(x.jsx)(K.b,{exact:!0,path:"/userList",children:Object(x.jsx)(J,Object(i.a)(Object(i.a)({},n),{},{loading:o}))}),Object(x.jsx)(K.b,{exact:!0,path:"/",children:Object(x.jsx)(L,{onLogin:b,setLoading:j})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(Y,{})}),document.getElementById("root")),q()}},[[67,1,2]]]);
//# sourceMappingURL=main.f649f82d.chunk.js.map