(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,n){e.exports={nav_links_main:"Header_nav_links_main__3gG3d",link_section:"Header_link_section__3xDTt",junior_link_box:"Header_junior_link_box__CVW4d",junior_link:"Header_junior_link__3znNc",button:"Header_button__3qLBw",active:"Header_active__UVqQd"}},function(e,a,n){e.exports={error:"Greeting_error__xa3lY",throwError:"Greeting_throwError__3Zbrr",main:"Greeting_main__2TWGo",btn:"Greeting_btn__3rG92",btn_err:"Greeting_btn_err__2qH9e",input_css:"Greeting_input_css__3vbJB",div_create:"Greeting_div_create__vV09x",empty_div:"Greeting_empty_div__G8KHL",user_qty:"Greeting_user_qty__3C9sV"}},,function(e,a,n){e.exports={main:"Message_main__3v6lU",round_div:"Message_round_div__DZpxy",img:"Message_img__2fi-H",message_box:"Message_message_box__1Pcby",name:"Message_name__2efdc",message:"Message_message__gCXps",time:"Message_time__1VSKs",bubble_div:"Message_bubble_div__20W5v"}},,function(e,a,n){e.exports={doubleRange_box:"SuperDoubleRange_doubleRange_box__n0IJd",value_num:"SuperDoubleRange_value_num__1jJWe",range_form:"SuperDoubleRange_range_form__2hoT_",range_second:"SuperDoubleRange_range_second__1SNiu",super_range:"SuperDoubleRange_super_range__1JFXv"}},,,,,function(e,a,n){e.exports={affair:"Affair_affair__zxI7T",name:"Affair_name__X_OsI",priority:"Affair_priority__2YGiJ",btn:"Affair_btn__2w--C"}},function(e,a,n){e.exports={btn:"Affairs_btn__38rMl"}},function(e,a,n){e.exports={span:"main_span__3TxkT",input:"main_input__jniD_",btns:"main_btns__3b9uF"}},function(e,a,n){e.exports={btn:"HW9_btn__18YBo",time:"HW9_time__1rpvj",date:"HW9_date__2--i1"}},,,,function(e,a,n){e.exports={superInput:"SuperInputText_superInput__G3neq",errorInput:"SuperInputText_errorInput__3PWAR",error:"SuperInputText_error__1AbTl"}},function(e,a,n){e.exports={blue:"HW4_blue__8n5lA",column:"HW4_column__2H4xu",testSpanError:"HW4_testSpanError__3KgtO"}},,function(e,a,n){e.exports={default:"SuperButton_default__2qv5j",red:"SuperButton_red__3UGrw"}},function(e,a,n){e.exports={checkbox:"SuperCheckbox_checkbox__1-KLJ",spanClassName:"SuperCheckbox_spanClassName__3ap0o"}},function(e,a,n){e.exports={name:"main_name__1IV0L",user:"main_user__2CM3W"}},function(e,a,n){e.exports={range_box:"HW11_range_box__3Sdfm"}},function(e,a,n){e.exports={dark:"HW12_dark__2X0cO","dark-text":"HW12_dark-text__1tXAR",red:"HW12_red__cpmqL","red-text":"HW12_red-text__2Z6oh",some:"HW12_some__ehBie","some-text":"HW12_some-text__1BCdA",bg_box:"HW12_bg_box__1qL80"}},,,,,,function(e,a,n){e.exports={App:"App_App__RKiBJ"}},function(e,a,n){e.exports={main:"main_main__2DIog"}},,function(e,a,n){e.exports={loader_img:"HW10_loader_img__3bw7s"}},function(e,a,n){e.exports=n.p+"static/media/loader.da832510.gif"},function(e,a,n){e.exports={range:"SuperRange_range__DBMHQ"}},,function(e,a,n){e.exports=n(55)},,,,,function(e,a,n){},,,,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(20),c=n.n(l),o=(n(48),n(36)),u=n.n(o),i=n(9),s=n.n(i),m=function(e){return r.a.createElement("div",{className:s.a.main},r.a.createElement("div",{className:s.a.round_div},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:s.a.img})),r.a.createElement("div",{className:s.a.message_box},r.a.createElement("div",{className:s.a.name},e.name),r.a.createElement("div",{className:s.a.message},e.message),r.a.createElement("div",{className:s.a.bubble_div},r.a.createElement("span",{className:s.a.time},e.time))))},_="https://icdn.lenta.ru/images/2020/04/23/16/20200423160206740/square_320_de8d86cd47467b7a80bbdf24ddb9cd9b.png",d="Cheb friend",v="\u041f\u043e\u0433\u043e\u0434\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0445\u043e\u0440\u043e\u0448\u0430\u044f",E="22:20";var p=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"HTML input text style",r.a.createElement(m,{avatar:_,name:d,message:v,time:E}),r.a.createElement("hr",null))},b=n(1),g=n(16),f=n.n(g);var h=function(e){var a="";switch(e.affair.priority){case"low":a="green";break;case"middle":a="gold";break;case"high":a="red"}var n={color:a};return r.a.createElement("div",{className:f.a.affair},r.a.createElement("div",{className:f.a.name},e.affair.name),r.a.createElement("div",{className:f.a.priority,style:n},"[ ",e.affair.priority," ]"),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:f.a.btn},"X"))},C=n(17),N=n.n(C);var k=function(e){var a=e.data.map((function(a){return r.a.createElement(h,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:N.a.btn},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:N.a.btn},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:N.a.btn},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:N.a.btn},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var j=function(){var e=Object(t.useState)(O),a=Object(b.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)("all"),o=Object(b.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(n,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(n,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=n(13),x=n(7),w=n.n(x),S=function(e){var a=e.name,n=e.setNameCallback,t=e.addUser,l=e.error,c=e.totalUsers,o=e.addUserByEnterCallback,u=l?w.a.error:"",i=l?w.a.btn_err:"",s=l?r.a.createElement("div",{className:w.a.throwError},"Invalid name"):r.a.createElement("div",{className:w.a.empty_div});return r.a.createElement("div",{className:w.a.main},r.a.createElement("div",{className:w.a.div_create},"Create new user:"),r.a.createElement("input",{value:a,onChange:n,onKeyPress:o,className:u+" "+w.a.input_css}),r.a.createElement("button",{onClick:t,className:w.a.btn+" "+i},"add"),r.a.createElement("span",{className:w.a.user_qty},"( User QTY: ",c," )"),s)},T=function(e){var a=e.users,n=e.addUserCallback,l=Object(t.useState)(""),c=Object(b.a)(l,2),o=c[0],u=c[1],i=Object(t.useState)(!1),s=Object(b.a)(i,2),m=s[0],_=s[1],d=function(){var e=o.trim();v(e)?(alert("Hello ".concat(e," !")),n(e),u("")):(_(!0),u(""))},v=function(e){return!!e},E=a.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){_(!1),u(e.currentTarget.value)},addUser:d,addUserByEnterCallback:function(e){"Enter"===e.key&&d()},error:m,totalUsers:E})},H=n(57);var R=function(){var e=Object(t.useState)([]),a=Object(b.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(T,{users:n,addUserCallback:function(e){var a={_id:Object(H.a)(),name:e};l([].concat(Object(y.a)(n),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=n(3),A=n(23),L=n.n(A),U=function(e){e.type;var a=e.onChange,n=e.onChangeText,t=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(L.a.error," ").concat(u||""),m="".concat(c?L.a.errorInput:""," ").concat(L.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},W=n(24),J=n.n(W),D=n(26),B=n.n(D),G=function(e){var a=e.red,n=e.className,t=Object(I.a)(e,["red","className"]),l="".concat(a?B.a.red:B.a.default," ").concat(n);return r.a.createElement("button",Object.assign({className:l},t))},M=n(27),P=n.n(M),F=function(e){e.type;var a=e.onChange,n=e.onChangeChecked,t=e.className,l=(e.spanClassName,e.children),c=e.checked,o=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children","checked"]),u="".concat(P.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),n&&n(e.currentTarget.checked)},className:u,checked:c},o)),l&&r.a.createElement("span",{className:P.a.spanClassName},l))};var q=function(){var e=Object(t.useState)(""),a=Object(b.a)(e,2),n=a[0],l=a[1],c=n?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},u=Object(t.useState)(!0),i=Object(b.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(U,{value:n,onChangeText:l,onEnter:o,error:c,spanClassName:J.a.testSpanError}),r.a.createElement(U,{className:J.a.blue}),r.a.createElement(G,null,"default"),r.a.createElement(G,{red:!0,onClick:o},"delete "),r.a.createElement(G,{disabled:!0},"disabled"),r.a.createElement(F,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(F,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=function(e){e.autoFocus;var a=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(t.useState)(!1),u=Object(b.a)(o,2),i=u[0],s=u[1],m=l||{},_=m.children,d=m.onDoubleClick,v=m.className,E=Object(I.a)(m,["children","onDoubleClick","className"]),p="".concat(c.spanClassName," ").concat(v);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),n&&n()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),d&&d(e)},className:p},E),_||c.value))};function V(e,a){var n=JSON.stringify(a);localStorage.setItem(e,n)}function X(e,a){var n=a,t=localStorage.getItem(e);return null!==t&&(n=JSON.parse(t)),n}V("test",{x:"A",y:1});X("test",{x:"",y:0});var Z=n(18),Y=n.n(Z);var z=function(){var e=Object(t.useState)(""),a=Object(b.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:Y.a.span},r.a.createElement(K,{value:n,onChangeText:l,spanProps:{children:n?void 0:"enter text..."},spanClassName:Y.a.input})),r.a.createElement(G,{onClick:function(){V("editable-span-value",n)},className:Y.a.btns},"save"),r.a.createElement(G,{onClick:function(){var e=X("editable-span-value","No saved data");l(e)},className:Y.a.btns},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(j,null),r.a.createElement(R,null),r.a.createElement(q,null),r.a.createElement(z,null))},$=function(e){var a=e.options,n=(e.onChange,e.onChangeOption),t=Object(I.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e.currentTarget.value)}},t),l)},ee=function(e){e.type;var a=e.name,n=e.options,t=e.value,l=(e.onChange,e.onChangeOption),c=(Object(I.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=n?n.map((function(e,n){return r.a.createElement("label",{key:a+"-"+n},r.a.createElement("input",{name:"radioBtn"+n,type:"radio",checked:e===t,value:e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ae=n(37),ne=n.n(ae),te=["x","y","z"];var re=function(){var e=Object(t.useState)(te[1]),a=Object(b.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement($,{options:te,value:n,onChangeOption:l,className:ne.a.main})),r.a.createElement("div",null,r.a.createElement(ee,{name:"radio",options:te,value:n,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=function(e,a){switch(a.type){case"sort":if("up"===a.payload)return Object(y.a)(e.sort((function(e,a){return e.name.toLowerCase()<a.name.toLowerCase()?-1:e.name.toLowerCase()>a.name.toLowerCase()?1:0})));if("down"===a.payload)return Object(y.a)(e.sort((function(e,a){return a.name.toLowerCase()<e.name.toLowerCase()?-1:a.name.toLowerCase()>e.name.toLowerCase()?1:0})));case"check":if(18===a.payload)return Object(y.a)(e.filter((function(e){return e.age<=18})));default:return e}},ce=n(28),oe=n.n(ce),ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ie=function(){var e=Object(t.useState)(ue),a=Object(b.a)(e,2),n=a[0],l=a[1],c=n.map((function(e){return r.a.createElement("div",{key:e._id,className:oe.a.user},r.a.createElement("span",{className:oe.a.name},e.name),r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(G,{onClick:function(){return l(le(ue,{type:"sort",payload:"up"}))}},"sort name A-Z"),r.a.createElement(G,{onClick:function(){return l(le(ue,{type:"sort",payload:"down"}))}},"sort name Z-A"),r.a.createElement(G,{onClick:function(){return l(le(ue,{type:"check",payload:18}))}},"Check age under 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},se=n(19),me=n.n(se);var _e=function(){var e=Object(t.useState)(0),a=Object(b.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)(),o=Object(b.a)(c,2),u=o[0],i=o[1],s=Object(t.useState)(!1),m=Object(b.a)(s,2),_=m[0],d=m[1],v=function(){clearTimeout(n)},E=(new Date).toLocaleDateString(),p=null===u||void 0===u?void 0:u.toLocaleTimeString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},className:me.a.time},p),_&&r.a.createElement("div",{className:me.a.date},E,p),r.a.createElement(G,{onClick:function(){v();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)},className:me.a.btn},"start"),r.a.createElement(G,{onClick:v,className:me.a.btn},"stop"))};var de=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(_e,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ve=n(10),Ee=n(22),pe={loading:!1},be=function(e){return{type:"SWITCH-LOADER",value:e}},ge=n(39),fe=n.n(ge),he=n(40),Ce=n.n(he);var Ne=function(){var e=Object(ve.c)((function(e){return e.loading})),a=Object(ve.b)(),n=e.loading;return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",n?r.a.createElement("div",null,r.a.createElement("img",{src:Ce.a,className:fe.a.loader_img,alt:"loading"})):r.a.createElement("div",null,r.a.createElement(G,{onClick:function(){a(be(!0)),setTimeout((function(){a(be(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ke=n(41),Oe=n.n(ke),je=function(e){e.type;var a=e.onChange,n=e.onChangeRange,t=e.className,l=e.value,c=Object(I.a)(e,["type","onChange","onChangeRange","className","value"]),o="".concat(Oe.a.range," ").concat(t||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",value:l,onChange:function(e){a&&a(e),n&&n(+e.currentTarget.value)},className:o},c)))},ye=n(11),xe=n.n(ye),we=function(e){var a=e.onChange,n=e.onChangeRange,l=e.value,c=e.min,o=e.max,u=e.step,i=e.className,s=Object(t.useState)(!1),m=Object(b.a)(s,2),_=m[0],d=m[1],v=0,E=100;if(l){var p=Object(b.a)(l,2);v=p[0],E=p[1]}c&&(v=v<c?c:v),o&&(E=E>o?o:E),v>E&&(v=u?E-u:E),u&&(v%u!==0&&(v=+Math.round(v/u)*u),E%u!==0&&(E=+Math.round(E/u)*u));var g=function(e){a&&a(+e),"value1"===e.currentTarget.name&&+e.currentTarget.value<E&&n&&n([+e.currentTarget.value,E]),"value2"===e.currentTarget.name&&+e.currentTarget.value>v&&n&&n([v,+e.currentTarget.value])},f=function(){d(!1)},h=function(){d(!0)},C="".concat(xe.a.super_range," ").concat(i||"");return r.a.createElement("div",{className:xe.a.doubleRange_box},_?r.a.createElement("input",{type:"number",name:"value1",value:v,min:null!==c&&void 0!==c?c:v,max:null!==o&&void 0!==o?o:E,step:null!==u&&void 0!==u?u:1,onChange:g,onBlur:f}):r.a.createElement("span",{className:xe.a.value_num,onDoubleClick:h},v),r.a.createElement("form",{className:xe.a.range_form},r.a.createElement("input",{type:"range",name:"value1",value:v,step:null!==u&&void 0!==u?u:1,onChange:g,className:"".concat(C," ").concat(xe.a.range_second)}),r.a.createElement("input",{type:"range",name:"value2",value:E,step:null!==u&&void 0!==u?u:1,onChange:g,className:C})),_?r.a.createElement("input",{type:"number",name:"value2",value:E,min:null!==c&&void 0!==c?c:v,max:null!==o&&void 0!==o?o:E,step:null!==u&&void 0!==u?u:1,onChange:g,onBlur:f}):r.a.createElement("span",{className:xe.a.value_num,onDoubleClick:h},E))},Se=n(29),Te=n.n(Se);var He=function(){var e=Object(t.useState)(0),a=Object(b.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)(100),o=Object(b.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",{className:Te.a.range_box},r.a.createElement("span",{className:Te.a.value_num},n),r.a.createElement(je,{onChangeRange:l,value:n})),r.a.createElement(we,{value:[null!==n&&void 0!==n?n:0,null!==u&&void 0!==u?u:100],onChangeRange:function(e){var a=Object(b.a)(e,2),n=a[0],t=a[1];l(n),i(t)},min:20,max:80,step:5}),r.a.createElement("hr",null),r.a.createElement("hr",null))},Re=function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(ie,null),r.a.createElement(de,null),r.a.createElement(Ne,null),r.a.createElement(He,null))},Ie=n(30),Ae=n.n(Ie),Le={styles:{default:"none",style1:"blue",style2:"green",style3:"yellow"},current:"none"};var Ue=function(){var e=Object(ve.c)((function(e){return e.style})),a=Object(ve.b)(),n=Object.keys(e.styles);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("span",{className:Ae.a["some-text"]},"homeworks 12"),r.a.createElement("div",null,r.a.createElement($,{options:n,onChangeOption:function(e){a(function(e){return{type:"CHANGE-BG",value:e}}(e))}})),r.a.createElement("hr",null),r.a.createElement("div",{className:Ae.a.bg_box,style:{background:e.current}}))},We=function(){return r.a.createElement("div",null,r.a.createElement(Ue,null))},Je=n(2),De=n(8);var Be=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement(De.b,{to:Ge.DEFAULT},"Main Page"))},Ge={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus",DEFAULT:"/react_tasks"};var Me=function(){return r.a.createElement("div",null,r.a.createElement(Je.d,null,r.a.createElement(Je.b,{path:Ge.DEFAULT,exact:!0,render:function(){return r.a.createElement(Je.a,{to:Ge.PRE_JUNIOR})}}),r.a.createElement(Je.b,{path:Ge.PRE_JUNIOR,exact:!0,component:Q}),r.a.createElement(Je.b,{path:Ge.JUNIOR,exact:!0,component:Re}),r.a.createElement(Je.b,{path:Ge.JUNIOR_PLUS,exact:!0,component:We}),r.a.createElement(Je.b,{render:function(){return r.a.createElement(Be,null)}})))},Pe=n(6),Fe=n.n(Pe),qe=function(){return r.a.createElement("div",{className:Fe.a.nav_links_main},r.a.createElement("section",{className:Fe.a.link_section},r.a.createElement(De.b,{to:Ge.PRE_JUNIOR,activeClassName:Fe.a.active,className:Fe.a.junior_link},r.a.createElement("div",{className:Fe.a.junior_link_box},"Pre-Junior")),r.a.createElement(De.b,{to:Ge.JUNIOR,activeClassName:Fe.a.active,className:Fe.a.junior_link},r.a.createElement("div",{className:Fe.a.junior_link_box},"Junior")),r.a.createElement(De.b,{to:Ge.JUNIOR_PLUS,activeClassName:Fe.a.active,className:Fe.a.junior_link},r.a.createElement("div",{className:Fe.a.junior_link_box},"JuniorPlus")),r.a.createElement("div",{className:Fe.a.button},"Slide me")))};var Ke=function(){return r.a.createElement("div",null,r.a.createElement(De.a,null,r.a.createElement(qe,null),r.a.createElement(Me,null)))};var Ve=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=n(32),Ze=Object(Xe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SWITCH-LOADER":return Object(Ee.a)({},e,{loading:a.value});default:return e}},style:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE-BG":var t=Object.keys(a.styles),r=null!==(e=t.find((function(e){return e===n.value})))&&void 0!==e?e:"default";return Object(Ee.a)({},a,{current:a.styles[r]});default:return a}}}),Ye=Object(Xe.b)(Ze),ze=Ye;window.store=Ye,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve.a,{store:ze},r.a.createElement(Ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.aafae78d.chunk.js.map