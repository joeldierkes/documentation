(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{236:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(378)),s=["components"],c={title:"1.26.6",sidebar_label:"1.26.6"},o={unversionedId:"release-notes/1.26.6",id:"release-notes/1.26.6",isDocsHomePage:!1,title:"1.26.6",description:"General",source:"@site/../docs/release-notes/1.26.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.6",permalink:"/documentation/release-notes/1.26.6",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.6.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1647441415,formattedLastUpdatedAt:"3/16/2022",sidebar_label:"1.26.6",frontMatter:{title:"1.26.6",sidebar_label:"1.26.6"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,s);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Policies: LSST schema ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4913"},"#4913"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Deletion: Report deletion events when the destination does not exist ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4258"},"#4258")),Object(a.b)("li",{parentName:"ul"},"Deletion: Deletion duration is not reported for unsuccesful attempts ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4867"},"#4867")),Object(a.b)("li",{parentName:"ul"},"Deletion: Introduce configurable timeout for deletion ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4908"},"#4908")),Object(a.b)("li",{parentName:"ul"},"Policies: LSST LFN2PFN algorithm ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4882"},"#4882")),Object(a.b)("li",{parentName:"ul"},"Testing: Switch oracle database to 18.4 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4805"},"#4805")),Object(a.b)("li",{parentName:"ul"},"Transfers: Don't resubmit intermediate transfers ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4809"},"#4809")),Object(a.b)("li",{parentName:"ul"},"Transfers: improve disk vs tape source prioritization ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4906"},"#4906"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Messaging: STOMP connections are not always cleanly closed ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2606"},"#2606")),Object(a.b)("li",{parentName:"ul"},"Transfers: source URL not updated correctly for multi-source transfers ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4223"},"#4223")),Object(a.b)("li",{parentName:"ul"},"Transfers: Request priority ignored at initial job submission to transfertool  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4623"},"#4623")),Object(a.b)("li",{parentName:"ul"},"Transfers: Failed multihop doesn't play nice with source_replica_expression ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4872"},"#4872")),Object(a.b)("li",{parentName:"ul"},"Transfers: LOST transfers incorrectly handled when FTS returns 404 status code ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4904"},"#4904"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: rucio update-rule --cancel-requests should using either --stuck or --suspend ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3838"},"#3838")),Object(a.b)("li",{parentName:"ul"},"Clients: Update client to support default accounts ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4802"},"#4802")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: set_rse_usage doesn't allow to set number of files ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4861"},"#4861"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: set-tombstone fails for non-ATLAS DID names ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4831"},"#4831")),Object(a.b)("li",{parentName:"ul"},"Clients: Traceback when requesting the global account usage with a specific RSE ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4870"},"#4870"))))}b.isMDXComponent=!0},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(s,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,c(c({ref:t},u),{},{components:r})):i.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);