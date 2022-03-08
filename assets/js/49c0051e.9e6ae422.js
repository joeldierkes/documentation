(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(378)),c=["components"],o={title:"1.18.4",sidebar_label:"1.18.4"},s={unversionedId:"release-notes/1.18.4",id:"release-notes/1.18.4",isDocsHomePage:!1,title:"1.18.4",description:"General",source:"@site/../docs/release-notes/1.18.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.4",permalink:"/documentation/release-notes/1.18.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.4.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646660442,formattedLastUpdatedAt:"3/7/2022",sidebar_label:"1.18.4",frontMatter:{title:"1.18.4",sidebar_label:"1.18.4"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Cannot specify rse_type in add_rse ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1647"},"#1647")),Object(a.b)("li",{parentName:"ul"},"Documentation: Outdated flask api doc string ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1686"},"#1686")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: Rucio user account synchronization improvements (python paged search) ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1664"},"#1664")),Object(a.b)("li",{parentName:"ul"},"Rebalancing: Rebalancing breaks in decomissioning mode ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/312"},"#312")),Object(a.b)("li",{parentName:"ul"},"Release management: Force urllib3 version to 1.23 to unblock tests ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1682"},"#1682")),Object(a.b)("li",{parentName:"ul"},"Rules: Rule forward from constituent to archive should be enforced if there is only a constituent-tape-replica available ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1663"},"#1663")),Object(a.b)("li",{parentName:"ul"},"Testing: Python3 compatibility test ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1505"},"#1505")),Object(a.b)("li",{parentName:"ul"},"Traces: Extract the suspicious files from the traces ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1623"},"#1623")),Object(a.b)("li",{parentName:"ul"},"Transfers: Fix options for rucio-conveyor-finisher ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1701"},"#1701"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Exception not catched for PostgreSQL when attaching DIDs twice. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1668"},"#1668")),Object(a.b)("li",{parentName:"ul"},"Recovery: list_bad_replicas_status implicitely uses SRM ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1635"},"#1635")),Object(a.b)("li",{parentName:"ul"},"Release management: Requests 2.20.0 not Python 2.6 compatible ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1698"},"#1698"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Change list-dids to type collection, only ALL if --filter is given ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1422"},"#1422")),Object(a.b)("li",{parentName:"ul"},"Clients: Output of list-rse-usage --show-accounts should be one line per account ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1672"},"#1672")),Object(a.b)("li",{parentName:"ul"},"Clients: Rucio attach should chunk the DIDSs array up accordingly to the 1000 server limits ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/30"},"#30"))))}b.isMDXComponent=!0},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,o(o({ref:t},u),{},{components:r})):i.a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);