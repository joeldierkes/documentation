(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{292:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(378)),c=["components"],o={title:"1.18.9",sidebar_label:"1.18.9"},s={unversionedId:"release-notes/1.18.9",id:"release-notes/1.18.9",isDocsHomePage:!1,title:"1.18.9",description:"General",source:"@site/../docs/release-notes/1.18.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.9",permalink:"/documentation/release-notes/1.18.9",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.9.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1647441415,formattedLastUpdatedAt:"3/16/2022",sidebar_label:"1.18.9",frontMatter:{title:"1.18.9",sidebar_label:"1.18.9"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Accounting & Dumps: Decrease chunksize in add_constituents_to_archive from 50 to 20 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1987"},"#1987")),Object(i.b)("li",{parentName:"ul"},"Consistency checks: Automatically report LOST files as suspicious ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1954"},"#1954")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Wrong cms RSE name pattern used when attaching dids ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1901"},"#1901")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: add default value to config table ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1948"},"#1948")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add caching (memcache) to config table methods ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1958"},"#1958")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Adapt thread handling of abbacus rse and account ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1985"},"#1985")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add schema and construct surl method for Belle2 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2007"},"#2007")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Porting oracle jobs/procedures to non-oracle backends ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/524"},"#524")),Object(i.b)("li",{parentName:"ul"},"Dataset deletion: Make undertaker expire_rules size configurable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1932"},"#1932")),Object(i.b)("li",{parentName:"ul"},"Documentation: Update Oracle schema/procedures/trigger definition ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1945"},"#1945")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: ATLAS: Probe need to set quota for groups on SCRATCHDISK endpoints ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1973"},"#1973")),Object(i.b)("li",{parentName:"ul"},"Release management: Update docker README and docs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1898"},"#1898")),Object(i.b)("li",{parentName:"ul"},"Release management: add new schema for DOMA TPC tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1942"},"#1942"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Metalink redirector sort=geoip seems to remove all urls ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2001"},"#2001")),Object(i.b)("li",{parentName:"ul"},"Rules: Injector can crash when split_container option is enabled ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1976"},"#1976")),Object(i.b)("li",{parentName:"ul"},"Testing: fix caching problem in config core for running tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2000"},"#2000")),Object(i.b)("li",{parentName:"ul"},"Transfers: stager_area RSEs don't work with a non-deterministic source RSE ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1967"},"#1967")),Object(i.b)("li",{parentName:"ul"},"Transfers: Adding a rule for a staging area without a lifetime causes an internal server error ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1970"},"#1970"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: client_extract=True replicas need to be extracted from the zip file ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1354"},"#1354")),Object(i.b)("li",{parentName:"ul"},"Clients: Call list_replicas in downloadclient only once ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1427"},"#1427"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Erroneous rucio download summary info ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1512"},"#1512"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Show users w/o quota but with used space on an RSE in the quota view ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1955"},"#1955"))))}b.isMDXComponent=!0},378:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(h,o(o({ref:t},u),{},{components:r})):a.a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);