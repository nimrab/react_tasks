(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={nav_links_main:"Header_nav_links_main__3gG3d",link_section:"Header_link_section__3xDTt",junior_link_box:"Header_junior_link_box__CVW4d",junior_link:"Header_junior_link__3znNc",button:"Header_button__3qLBw",active:"Header_active__UVqQd"}},function(e,a,t){e.exports={error:"Greeting_error__xa3lY",throwError:"Greeting_throwError__3Zbrr",main:"Greeting_main__2TWGo",btn:"Greeting_btn__3rG92",btn_err:"Greeting_btn_err__2qH9e",input_css:"Greeting_input_css__3vbJB",div_create:"Greeting_div_create__vV09x",empty_div:"Greeting_empty_div__G8KHL",user_qty:"Greeting_user_qty__3C9sV"}},,function(e,a,t){e.exports={main:"Message_main__3v6lU",round_div:"Message_round_div__DZpxy",img:"Message_img__2fi-H",message_box:"Message_message_box__1Pcby",name:"Message_name__2efdc",message:"Message_message__gCXps",time:"Message_time__1VSKs",bubble_div:"Message_bubble_div__20W5v"}},,,function(e,a,t){e.exports={affair:"Affair_affair__zxI7T",name:"Affair_name__X_OsI",priority:"Affair_priority__2YGiJ",btn:"Affair_btn__2w--C"}},function(e,a,t){e.exports={btn:"Affairs_btn__38rMl"}},function(e,a,t){e.exports={span:"main_span__3TxkT",input:"main_input__jniD_",btns:"main_btns__3b9uF"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__G3neq",errorInput:"SuperInputText_errorInput__3PWAR",error:"SuperInputText_error__1AbTl"}},function(e,a,t){e.exports={blue:"HW4_blue__8n5lA",column:"HW4_column__2H4xu",testSpanError:"HW4_testSpanError__3KgtO"}},,function(e,a,t){e.exports={default:"SuperButton_default__2qv5j",red:"SuperButton_red__3UGrw"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1-KLJ",spanClassName:"SuperCheckbox_spanClassName__3ap0o"}},,,,,,function(e,a,t){e.exports={App:"App_App__RKiBJ"}},function(e,a,t){e.exports={main:"main_main__2DIog"}},,,,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),i=(t(36),t(26)),s=t.n(i),o=t(9),u=t.n(o),m=function(e){return r.a.createElement("div",{className:u.a.main},r.a.createElement("div",{className:u.a.round_div},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:u.a.img})),r.a.createElement("div",{className:u.a.message_box},r.a.createElement("div",{className:u.a.name},e.name),r.a.createElement("div",{className:u.a.message},e.message),r.a.createElement("div",{className:u.a.bubble_div},r.a.createElement("span",{className:u.a.time},e.time))))},_="https://icdn.lenta.ru/images/2020/04/23/16/20200423160206740/square_320_de8d86cd47467b7a80bbdf24ddb9cd9b.png",d="Cheb friend",E="\u041f\u043e\u0433\u043e\u0434\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0445\u043e\u0440\u043e\u0448\u0430\u044f",p="22:20";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"HTML input text style",r.a.createElement(m,{avatar:_,name:d,message:E,time:p}),r.a.createElement("hr",null))},v=t(2),f=t(12),h=t.n(f);var g=function(e){var a="";switch(e.affair.priority){case"low":a="green";break;case"middle":a="gold";break;case"high":a="red"}var t={color:a};return r.a.createElement("div",{className:h.a.affair},r.a.createElement("div",{className:h.a.name},e.affair.name),r.a.createElement("div",{className:h.a.priority,style:t},"[ ",e.affair.priority," ]"),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:h.a.btn},"X"))},N=t(13),k=t.n(N);var C=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:k.a.btn},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:k.a.btn},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:k.a.btn},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:k.a.btn},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var x=function(){var e=Object(n.useState)(O),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(v.a)(c,2),s=i[0],o=i[1],u=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:u,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(30),y=t(7),S=t.n(y),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=e.addUserByEnterCallback,s=l?S.a.error:"",o=l?S.a.btn_err:"",u=l?r.a.createElement("div",{className:S.a.throwError},"Invalid name"):r.a.createElement("div",{className:S.a.empty_div});return r.a.createElement("div",{className:S.a.main},r.a.createElement("div",{className:S.a.div_create},"Create new user:"),r.a.createElement("input",{value:a,onChange:t,onKeyPress:i,className:s+" "+S.a.input_css}),r.a.createElement("button",{onClick:n,className:S.a.btn+" "+o},"add"),r.a.createElement("span",{className:S.a.user_qty},"( User QTY: ",c," )"),u)},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),i=c[0],s=c[1],o=Object(n.useState)(!1),u=Object(v.a)(o,2),m=u[0],_=u[1],d=function(){var e=i.trim();E(e)?(alert("Hello ".concat(e," !")),t(e),s("")):(_(!0),s(""))},E=function(e){return!!e},p=a.length;return r.a.createElement(w,{name:i,setNameCallback:function(e){_(!1),s(e.currentTarget.value)},addUser:d,addUserByEnterCallback:function(e){"Enter"===e.key&&d()},error:m,totalUsers:p})},I=t(44);var T=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:t,addUserCallback:function(e){var a={_id:Object(I.a)(),name:e};l([].concat(Object(j.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(4),J=t(16),P=t.n(J),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=e.className,s=e.spanClassName,o=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(P.a.error," ").concat(s||""),m="".concat(c?P.a.errorInput:""," ").concat(P.a.superInput," ").concat(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},o)),c&&r.a.createElement("span",{className:u},c))},G=t(17),R=t.n(G),F=t(19),M=t.n(F),B=function(e){var a=e.red,t=e.className,n=Object(A.a)(e,["red","className"]),l="".concat(a?M.a.red:M.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},L=t(20),D=t.n(L),W=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=e.checked,i=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children","checked"]),s="".concat(D.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s,checked:c},i)),l&&r.a.createElement("span",{className:D.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!0),o=Object(v.a)(s,2),u=o[0],m=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:i,error:c,spanClassName:R.a.testSpanError}),r.a.createElement(H,{className:R.a.blue}),r.a.createElement(B,null,"default"),r.a.createElement(B,{red:!0,onClick:i},"delete "),r.a.createElement(B,{disabled:!0},"disabled"),r.a.createElement(W,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(W,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(A.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),i=Object(n.useState)(!1),s=Object(v.a)(i,2),o=s[0],u=s[1],m=l||{},_=m.children,d=m.onDoubleClick,E=m.className,p=Object(A.a)(m,["children","onDoubleClick","className"]),b="".concat(c.spanClassName," ").concat(E);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),d&&d(e)},className:b},p),_||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function z(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}V("test",{x:"A",y:1});z("test",{x:"",y:0});var X=t(14),Y=t.n(X);var Q=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:Y.a.span},r.a.createElement(K,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."},spanClassName:Y.a.input})),r.a.createElement(B,{onClick:function(){V("editable-span-value",t)},className:Y.a.btns},"save"),r.a.createElement(B,{onClick:function(){var e=z("editable-span-value","No saved data");l(e)},className:Y.a.btns},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(T,null),r.a.createElement(q,null),r.a.createElement(Q,null))},$=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(A.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},ee=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(A.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)},ae=t(27),te=t.n(ae),ne=["x","y","z"];var re=function(){var e=Object(n.useState)(ne[1]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement($,{options:ne,value:t,onChangeOption:l,className:te.a.main})),r.a.createElement("div",null,r.a.createElement(ee,{name:"radio",options:ne,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=function(){return r.a.createElement("div",null,r.a.createElement(re,null))},ce=function(){return r.a.createElement("div",null,"Hello! This is JuniorPlus tasks")},ie=t(1),se=t(8);var oe=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement(se.b,{to:ue.DEFAULT},"Main Page"))},ue={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus",DEFAULT:"/react_tasks"};var me=function(){return r.a.createElement("div",null,r.a.createElement(ie.d,null,r.a.createElement(ie.b,{path:ue.DEFAULT,exact:!0,render:function(){return r.a.createElement(ie.a,{to:ue.PRE_JUNIOR})}}),r.a.createElement(ie.b,{path:ue.PRE_JUNIOR,exact:!0,component:Z}),r.a.createElement(ie.b,{path:ue.JUNIOR,exact:!0,component:le}),r.a.createElement(ie.b,{path:ue.JUNIOR_PLUS,exact:!0,component:ce}),r.a.createElement(ie.b,{render:function(){return r.a.createElement(oe,null)}})))},_e=t(6),de=t.n(_e),Ee=function(){return r.a.createElement("div",{className:de.a.nav_links_main},r.a.createElement("section",{className:de.a.link_section},r.a.createElement(se.b,{to:ue.PRE_JUNIOR,activeClassName:de.a.active,className:de.a.junior_link},r.a.createElement("div",{className:de.a.junior_link_box},"Pre-Junior")),r.a.createElement(se.b,{to:ue.JUNIOR,activeClassName:de.a.active,className:de.a.junior_link},r.a.createElement("div",{className:de.a.junior_link_box},"Junior")),r.a.createElement(se.b,{to:ue.JUNIOR_PLUS,activeClassName:de.a.active,className:de.a.junior_link},r.a.createElement("div",{className:de.a.junior_link_box},"JuniorPlus")),r.a.createElement("div",{className:de.a.button},"Slide me")))};var pe=function(){return r.a.createElement("div",null,r.a.createElement(se.a,null,r.a.createElement(Ee,null),r.a.createElement(me,null)))};var be=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.3c8e8f10.chunk.js.map