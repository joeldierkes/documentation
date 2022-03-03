(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{223:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(377)),o=["components"],i={title:"1.23.10",sidebar_label:"1.23.10"},u={unversionedId:"release-notes/1.23.10",id:"release-notes/1.23.10",isDocsHomePage:!1,title:"1.23.10",description:"General",source:"@site/../docs/release-notes/1.23.10.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.10",permalink:"/documentation/release-notes/1.23.10",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.10.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646241928,formattedLastUpdatedAt:"3/2/2022",sidebar_label:"1.23.10",frontMatter:{title:"1.23.10",sidebar_label:"1.23.10"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"general"},"General"),Object(c.b)("h3",{id:"enhancements"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Core & Internals: Only return the per-account usage for the 'rucio' source ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4106"},"#4106")),Object(c.b)("li",{parentName:"ul"},"Replicas: Improve performance of abacus duplicate deletion query ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4100"},"#4100"))),Object(c.b)("h3",{id:"bugs"},"Bugs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Consistency checks: Incorrect use of arguments in Dark Reaper ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4037"},"#4037")),Object(c.b)("li",{parentName:"ul"},"Recovery: Race condition between Minos and Necromancer ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4109"},"#4109"))),Object(c.b)("h2",{id:"clients"},"Clients"),Object(c.b)("h3",{id:"bugs-1"},"Bugs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Clients: Cannot delete an RSE limit ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4074"},"#4074"))))}b.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);