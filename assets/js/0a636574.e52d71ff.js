(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{381:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(381)),o=["components"],c={title:"1.24.5",sidebar_label:"1.24.5"},l={unversionedId:"release-notes/1.24.5",id:"release-notes/1.24.5",isDocsHomePage:!1,title:"1.24.5",description:"General",source:"@site/../docs/release-notes/1.24.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.5",permalink:"/documentation/release-notes/1.24.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.5.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1648218602,formattedLastUpdatedAt:"3/25/2022",sidebar_label:"1.24.5",frontMatter:{title:"1.24.5",sidebar_label:"1.24.5"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],s={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Policies: Xenon LFN2PFN function ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4336"},"#4336")),Object(i.b)("li",{parentName:"ul"},"Testing: Replace ",Object(i.b)("inlineCode",{parentName:"li"},"links")," in docker-compose ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4316"},"#4316"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper2 __check_rse_usage issues ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4341"},"#4341")),Object(i.b)("li",{parentName:"ul"},"Deletion: list_and_mark_unlocked_replicas needs to handle BEING_DELETED replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4342"},"#4342")),Object(i.b)("li",{parentName:"ul"},"Deletion: reaper2 jumps out if deletion loop if an RSE has no delete protocol ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4345"},"#4345")),Object(i.b)("li",{parentName:"ul"},"REST & API: Flask endpoints return error with wrong Content-Type where webpy endpoints don't ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4314"},"#4314")),Object(i.b)("li",{parentName:"ul"},"Rules: core/rule.py reencodes meta over and over again ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4337"},"#4337"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Documentation: "rucio download --no-subdir" behavior is different from its documentation ',Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4323"},"#4323"))))}b.isMDXComponent=!0}}]);