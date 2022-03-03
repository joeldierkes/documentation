(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(377)),c=["components"],o={title:"1.18.6",sidebar_label:"1.18.6"},l={unversionedId:"release-notes/1.18.6",id:"release-notes/1.18.6",isDocsHomePage:!1,title:"1.18.6",description:"General",source:"@site/../docs/release-notes/1.18.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.6",permalink:"/documentation/release-notes/1.18.6",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.6.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1646300120,formattedLastUpdatedAt:"3/3/2022",sidebar_label:"1.18.6",frontMatter:{title:"1.18.6",sidebar_label:"1.18.6"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],u={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Improve error message for PFN mismatch ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/483"},"#483"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dataset deletion: Undertaker crash when a DID is attach/detached many times ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1772"},"#1772")),Object(i.b)("li",{parentName:"ul"},"Documentation: Typo in Client API reference ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/935"},"#935")),Object(i.b)("li",{parentName:"ul"},"Rebalancing: bb8 is failing with division by 0 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1792"},"#1792"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Possibility to download DIDs by giving metadata filter ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/782"},"#782"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: fix webui authentication to work with new token generation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1811"},"#1811")),Object(i.b)("li",{parentName:"ul"},"WebUI: fix dashboard link in webui ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1814"},"#1814"))))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);