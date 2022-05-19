(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{314:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(412)),c=["components"],s={title:"1.17.6",sidebar_label:"1.17.6"},o={unversionedId:"release-notes/1.17.6",id:"release-notes/1.17.6",isDocsHomePage:!1,title:"1.17.6",description:"General",source:"@site/../docs/release-notes/1.17.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.6",permalink:"/documentation/release-notes/1.17.6",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.6.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1652868794,formattedLastUpdatedAt:"5/18/2022",sidebar_label:"1.17.6",frontMatter:{title:"1.17.6",sidebar_label:"1.17.6"}},l=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]},{value:"Bugs",id:"bugs-2",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transfers: Threadpool package is obsolete, needs to be replaced by something newer in conveyor ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/63"},"#63"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: client_extract flag needs to be added to metalink list_Replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1353"},"#1353")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: Replacing single 'raise' from rsemgr by 'raise e' ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1366"},"#1366")),Object(i.b)("li",{parentName:"ul"},"Transfers: Add  a activity, dest_rse policy in bulk_group_transfer ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1394"},"#1394"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: list_replicas with rse_Expression and resolve_archive makes 2 files out of 1 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1352"},"#1352")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: list_replicas with schemes=None and schemes=","[...]"," gives conflicting results ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1379"},"#1379")),Object(i.b)("li",{parentName:"ul"},"Transfers: Misleading error message from conveyor-transfer-submitter ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1168"},"#1168"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: clients: add option to create non-deterministic RSEs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1405"},"#1405"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RSE Manager: Upload fails to delete left-overs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1359"},"#1359"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Life time model: WebUI page to list Liftetime Model exceptions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1367"},"#1367"))),Object(i.b)("h3",{id:"bugs-2"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Lifetime exception request interface doesn't properly show errors ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1295"},"#1295")),Object(i.b)("li",{parentName:"ul"},"WebUI: WebUI : Wrong link to DDM Dashboard ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1410"},"#1410"))))}b.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,s(s({ref:t},l),{},{components:r})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);