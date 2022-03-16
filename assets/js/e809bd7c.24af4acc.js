(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{343:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(378)),c=["components"],o={title:"1.27.5",sidebar_label:"1.27.5"},s={unversionedId:"release-notes/1.27.5",id:"release-notes/1.27.5",isDocsHomePage:!1,title:"1.27.5",description:"General",source:"@site/../docs/release-notes/1.27.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.5",permalink:"/documentation/release-notes/1.27.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.5.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1647441415,formattedLastUpdatedAt:"3/16/2022",sidebar_label:"1.27.5",frontMatter:{title:"1.27.5",sidebar_label:"1.27.5"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Documentation: Delete redundant README files ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5193"},"#5193"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Database: Add query hint to list_dids query ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5225"},"#5225")),Object(i.b)("li",{parentName:"ul"},"Replicas: make geoip database expiration delay configurable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5210"},"#5210")),Object(i.b)("li",{parentName:"ul"},"Testing: fix flakiness in test-coveyor  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5190"},"#5190")),Object(i.b)("li",{parentName:"ul"},"Transfers: Homogenize daemon loops in conveyor ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5231"},"#5231"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Bug in the filter_thread_work algorithm for Postgres backend ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5207"},"#5207")),Object(i.b)("li",{parentName:"ul"},"Transfers: allow_user_oidc_tokens config item not retrieved as boolean ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5219"},"#5219"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: user environment variables to override client_cert and client_key of rucio.cfg ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5216"},"#5216"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Suspicious replicas page is misinterpreting the date picker ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4184"},"#4184"))))}b.isMDXComponent=!0},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,o(o({ref:t},u),{},{components:r})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);