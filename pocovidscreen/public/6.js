(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{85:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(6),c=t(8),o=t(10),s=t(7),m=t(20),i=t(29),u=t(26);function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}a.default=function(){var e=Object(r.useContext)(m.a),a=e.setCurrentUser,t=e.setToken,d=Object(i.a)("email"),f=Object(i.a)("password");return n.a.createElement(l.a,null,n.a.createElement(c.a,null,n.a.createElement("title",null,s.a.appTitle," - Sign in")),n.a.createElement(o.a,{additionalClass:"small",teaser:"Sign in"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(u.c)({email:d.value,password:f.value}).then((function(e){var r=e.user,n=e.token;t(n),a(r)})).catch((function(e){e.json().then((function(e){var a=e.errors;return d.parseServerError(a)}))}))},className:"form p-5"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("div",{className:"mb-4"},n.a.createElement("input",p({id:"email",name:"email",type:"email",required:!0,autoFocus:!0,className:"w-100 ".concat(d.error?"border-red-500":""),placeholder:"example@domain.com"},d.bind)),d.error&&n.a.createElement("p",{className:"text-red-500 text-xs"},d.error)),n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",p({name:"password",type:"password",className:"w-100 mb-2",required:!0},f.bind)),n.a.createElement("a",{href:"/forgot-password"},"Forgot password?"),n.a.createElement("button",{type:"submit",className:"button primary round w-100 text-uppercase mt-4"},"Sign in"),n.a.createElement("p",{className:"text-center mt-2"},"New to PocovidScreen? ",n.a.createElement("a",{href:"/sign-up",title:"Create an account"},"Create an account"),"."))))))}}}]);
//# sourceMappingURL=6.js.map