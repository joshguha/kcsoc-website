(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4xVr":function(e,a,t){e.exports=t.p+"static/chanting-f60beff6cd60ed92cbb19b458b6400b9.jpg"},"Fyd+":function(e,a,t){e.exports={container:"setUpAKCSOCInfo-module--container--qwECI",infoContainer:"setUpAKCSOCInfo-module--info-container--2EeAT",instruction:"setUpAKCSOCInfo-module--instruction--2nbnn",chanting:"setUpAKCSOCInfo-module--chanting--1TMYV"}},yfdy:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var n=t("q1tI"),r=t.n(n),s=t("n8cy"),l=t("LbRr"),o=t("Fyd+"),i=t.n(o),m=t("4xVr"),c=t.n(m);function u(){return r.a.createElement("div",{className:i.a.container},r.a.createElement("h1",null,"Set up a KCSOC"),r.a.createElement("div",null,r.a.createElement("div",{className:i.a.infoContainer},r.a.createElement("div",null,r.a.createElement("p",null,"KCSOC has grown over the years! We now have over 30 different societies in universities around the UK and abroad. However, we're always looking to expand and bring the joy of Krishna Consciousness, philosophy and meditation to as many people as possible."),r.a.createElement("p",null,"Don't see a KCSOC near you? Does a KCSOC not exist in your university? Help start one up!"),r.a.createElement("p",null,"The KCSOC National Team can help you set up a KCSOC at your university, find speakers and ambassadors and help run all events. We've got your back and can support you 100%!")),r.a.createElement("img",{className:i.a.chanting,src:c.a,alt:"Chanting"})),r.a.createElement("p",{className:i.a.instruction},"Fill out your information below and a member of the KCSOC National team will reach out to help you set up a KCSOC.")))}var p=t("o0o1"),d=t.n(p),f=(t("ls82"),t("HaE+")),b=t("NKCw"),h=t("oFu4"),E=t.n(h);function N(){var e=Object(n.useState)(!1),a=e[0],t=e[1],s=Object(n.useState)(""),l=s[0],o=s[1],i=Object(b.a)(),m=i.register,c=i.handleSubmit,u=i.errors,p=i.reset,h="https://server.kcsoc-demo.tk/".replace(/\/$/,""),N=function(){var e=Object(f.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),o(""),e.next=5,fetch(h+"/forms/set-up-a-kcsoc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:n=e.sent,p(),201===n.status?o("Form submitted successfully"):o("Form submission failed"),t(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:E.a.container},r.a.createElement("form",{className:E.a.form,onSubmit:c(N)},r.a.createElement("label",{htmlFor:"firstName",className:E.a.label},"First Name"),r.a.createElement("input",{name:"firstName",ref:m({required:!0})}),u.firstName&&r.a.createElement("p",{className:E.a.errorMessage},"First name is required."),r.a.createElement("label",{htmlFor:"lastName",className:E.a.label},"Last Name"),r.a.createElement("input",{name:"lastName",ref:m({required:!0})}),u.lastName&&r.a.createElement("p",{className:E.a.errorMessage},"Last name is required."),r.a.createElement("label",{htmlFor:"email",className:E.a.label},"Email Address"),r.a.createElement("input",{name:"email",ref:m({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Hello"}})}),u.email&&!u.email.message&&r.a.createElement("p",{className:E.a.errorMessage},"Email address is required."),u.email&&u.email.message&&r.a.createElement("p",{className:E.a.errorMessage},"Valid email address required."),r.a.createElement("label",{htmlFor:"phoneNumber",className:E.a.label},"Phone Number"),r.a.createElement("input",{name:"phoneNumber",ref:m({required:!0})}),u.phoneNumber&&r.a.createElement("p",{className:E.a.errorMessage},"Phone number is required."),r.a.createElement("input",{type:"submit",disabled:a}),r.a.createElement("p",{className:E.a.message},l)))}function C(){return r.a.createElement(s.a,null,r.a.createElement(l.a,{isOpaque:!0,dark:!0}),r.a.createElement(u,null),r.a.createElement(N,null))}}}]);
//# sourceMappingURL=component---src-pages-set-up-a-kcsoc-js-730ff6482278017dede6.js.map