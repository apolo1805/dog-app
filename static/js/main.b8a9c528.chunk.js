(this["webpackJsonpdog-book"]=this["webpackJsonpdog-book"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(32),a=c.n(s),i=(c(39),c(18),c(15)),j=c(4),d=(c(40),c(19)),b=c.n(d),o=c(33),u=c(13),l=c(14),h=c.n(l),O=c(75),f=c(1);var x=function(e){var t=e.breed,c=e.subBreed,r=Object(n.useState)(""),s=Object(u.a)(r,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){return h.a.get("https://dog.ceo/api/breed/"+t+"/"+c+"/images/random").then((function(e){return i(e.data.message)}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:c}),Object(f.jsx)("img",{src:a,width:"200px"})]})};var g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(j.f)(),a=Object(j.g)().breed;function i(){return(i=Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://dog.ceo/api/breed/"+a+"/list").then((function(e){return r(e.data.message)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return function(){return i.apply(this,arguments)}()}),[a]),Object(f.jsxs)("div",{children:[Object(f.jsxs)("h3",{children:["Breed: ",a]}),Object(f.jsx)("ul",{children:0===c.length?Object(f.jsx)("p",{children:"There are no sub breeds for this dog breed"}):c.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)(x,{breed:a,subBreed:e})},t)}))}),Object(f.jsx)(O.a,{onClick:function(){return s.goBack()},children:"Back"})]})},p=c(73),m=c(76),v=c(74),k=c(72);c(66);var B=function(e){var t=e.dogName,c=(e.changeSubBreed,Object(n.useState)("")),r=Object(u.a)(c,2),s=r[0],a=r[1],j="/"+t;return Object(n.useEffect)((function(){h.a.get("https://dog.ceo/api/breed/"+t+"/images/random").then((function(e){a(e.data.message)}))}),[]),Object(f.jsx)("div",{className:"c-breed",children:Object(f.jsxs)(v.a,{children:[Object(f.jsx)(v.a.Body,{children:Object(f.jsx)(i.b,{to:j,children:Object(f.jsx)("h5",{children:t})})}),Object(f.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("div",{className:"img-container",children:s?Object(f.jsx)("img",{src:s,alt:"specific dog breed"}):Object(f.jsx)(k.a,{animation:"border",role:"status",children:Object(f.jsx)("span",{className:"sr-only",children:"Loading..."})})})})]})})};c(67);var C=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(u.a)(s,2),i=a[0],j=a[1];return Object(n.useEffect)((function(){h.a.get("https://dog.ceo/api/breeds/list/all").then((function(e){r(e.data.message)}))}),[c]),Object(f.jsxs)("div",{className:"p-breeds",children:[Object(f.jsx)("h1",{children:"Dogs Breeds"}),Object(f.jsx)("p",{children:"Click each dog's breed photo to see the phot in full screen, or filter a dog breed by input field"}),Object(f.jsx)("div",{children:Object(f.jsx)(O.a,{onClick:function(){r({})},children:"Change Pictures"})}),Object(f.jsxs)(p.a,{className:"mb-3",children:[Object(f.jsx)(p.a.Prepend,{children:Object(f.jsx)(p.a.Text,{id:"inputGroup-sizing-default",children:"Filter Dog Breed"})}),Object(f.jsx)(m.a,{value:i,onChange:function(e){return j(e.target.value)},"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object.keys(c).filter((function(e){return e.includes(i.toLowerCase())})).map((function(e,t){return Object(f.jsx)(B,{dogName:e},t)}))]})};var N=function(e){return Object(f.jsxs)("div",{className:"p-home",children:[Object(f.jsx)("h1",{children:"Dog Book"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"Click here to enter the dog book website"}),Object(f.jsx)(i.b,{className:"btn btn-primary",to:"/breeds",children:"Woof"})]})]})};var y=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(i.a,{children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",children:Object(f.jsx)(N,{})}),Object(f.jsx)(j.a,{exact:!0,path:"/breeds",children:Object(f.jsx)(C,{})}),Object(f.jsx)(j.a,{exact:!0,path:"/:breed",children:Object(f.jsx)(g,{})})]})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),S()}},[[71,1,2]]]);
//# sourceMappingURL=main.b8a9c528.chunk.js.map