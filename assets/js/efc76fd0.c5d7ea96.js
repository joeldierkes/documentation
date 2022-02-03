(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{349:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(376)),c=["components"],o={title:"1.27.4",sidebar_label:"1.27.4"},s={unversionedId:"release-notes/1.27.4",id:"release-notes/1.27.4",isDocsHomePage:!1,title:"1.27.4",description:"General",source:"@site/../docs/release-notes/1.27.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.4",permalink:"/documentation/release-notes/1.27.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.4.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643824426,formattedLastUpdatedAt:"2/2/2022",sidebar_label:"1.27.4",frontMatter:{title:"1.27.4",sidebar_label:"1.27.4"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Rules: Add \u2018split_rule\u2019 functionality in the core ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4660"},"#4660")),Object(a.b)("li",{parentName:"ul"},"Testing: Integrate the ",Object(a.b)("inlineCode",{parentName:"li"},"add_header")," script in the CI/CD ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4980"},"#4980"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Closed datasets with NULL bytes or events ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5111"},"#5111")),Object(a.b)("li",{parentName:"ul"},"Deletion: Dark reaper improvements due to DB load ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5192"},"#5192")),Object(a.b)("li",{parentName:"ul"},"Documentation: Duplicated Contributing guide ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5176"},"#5176")),Object(a.b)("li",{parentName:"ul"},"Monitoring & Logging: support prometheus metrics in daemons and servers ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3416"},"#3416")),Object(a.b)("li",{parentName:"ul"},"Testing: Pre commit script ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4971"},"#4971")),Object(a.b)("li",{parentName:"ul"},"Transfers: Multihop monitoring ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3902"},"#3902"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: memory leak due to incorrect cache usage ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5152"},"#5152")),Object(a.b)("li",{parentName:"ul"},"Replicas: Stabilize geoip based replica selection ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5133"},"#5133")),Object(a.b)("li",{parentName:"ul"},'Testing: Job check actions fails with "fatal: Need to specify how to reconcile divergent branches." ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5188"},"#5188")),Object(a.b)("li",{parentName:"ul"},"Testing: Add_header lint job checks out wrong commit ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5197"},"#5197")),Object(a.b)("li",{parentName:"ul"},"Traces: NoneType errors during trace validation ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5156"},"#5156")),Object(a.b)("li",{parentName:"ul"},"Traces: Download Schema validation errors ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5157"},"#5157")),Object(a.b)("li",{parentName:"ul"},"Transfers: concurrent multihop submission on same did can flag request as NO_SOURCES ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5028"},"#5028")),Object(a.b)("li",{parentName:"ul"},"Transfers: source replica expression not always correctly respected on multihops ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5170"},"#5170"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Issue with stat/exists and lan/wan protocols ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4984"},"#4984")),Object(a.b)("li",{parentName:"ul"},"Clients: bin/rucio download with --pfn option raises in AttributeError ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5178"},"#5178")),Object(a.b)("li",{parentName:"ul"},"Clients: transfer-speed-timeout Warning message always printed for download --pfn ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5185"},"#5185"))))}b.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,o(o({ref:t},u),{},{components:r})):i.a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);