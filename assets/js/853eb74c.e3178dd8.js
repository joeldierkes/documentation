(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{223:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(378)),c=["components"],s={title:"1.23.5",sidebar_label:"1.23.5"},o={unversionedId:"release-notes/1.23.5",id:"release-notes/1.23.5",isDocsHomePage:!1,title:"1.23.5",description:"General",source:"@site/../docs/release-notes/1.23.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.5",permalink:"/documentation/release-notes/1.23.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.5.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646660442,formattedLastUpdatedAt:"3/7/2022",sidebar_label:"1.23.5",frontMatter:{title:"1.23.5",sidebar_label:"1.23.5"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Return files size when listing scope DIDs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3775"},"#3775"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: M-VO database conversion improvements ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3938"},"#3938")),Object(i.b)("li",{parentName:"ul"},"Messaging: Implement support of ActiveMQ in Hermes 2 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3880"},"#3880"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consistency checks: Dark Reaper isn\u2019t exiting early if there are no quarantined replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3952"},"#3952")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: long=True query string does not work for /dids/{scope}/dids/search REST API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3762"},"#3762")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Adding distance fails wiht 500 if already exists ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3767"},"#3767")),Object(i.b)("li",{parentName:"ul"},"DIRAC: addfile method fails with internal error is a file is attached to a container ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3922"},"#3922")),Object(i.b)("li",{parentName:"ul"},"Messaging: VO missing from reaper messages ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3948"},"#3948")),Object(i.b)("li",{parentName:"ul"},"Transfers: Off by one error in core/transfer.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3954"},"#3954"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Use X509_CERT_DIR if defined ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3970"},"#3970"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: rucio-admin scope list --account traceback ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3561"},"#3561")),Object(i.b)("li",{parentName:"ul"},"Clients: rucio-admin rse info does not return protocols and/or RSE usages ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3854"},"#3854"))))}b.isMDXComponent=!0},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,s(s({ref:t},u),{},{components:r})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);