(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(426)),o=["components"],c={title:"1.23.7"},s={unversionedId:"release-notes/1.23.7",id:"release-notes/1.23.7",isDocsHomePage:!1,title:"1.23.7",description:"General",source:"@site/../docs/release-notes/1.23.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.7",permalink:"/documentation/release-notes/1.23.7",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.7.md",version:"current",frontMatter:{title:"1.23.7"}},l=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Add functional Flask endpoints ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1817"},"#1817"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Provide a better error description for list_dataset_replicas_bulk client API ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3981"},"#3981")),Object(a.b)("li",{parentName:"ul"},"Transfers: Protection for negative ranking needed in multihop resolve algorithm ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3997"},"#3997"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Incomplete XML returned when calling list_replicas with metalink option ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2029"},"#2029")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Problem handling unicode characters ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2915"},"#2915")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Caching collisions with rse_attributes and rse_info ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3998"},"#3998")),Object(a.b)("li",{parentName:"ul"},"Deletion: Integrity error when deleting last replica ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3965"},"#3965")),Object(a.b)("li",{parentName:"ul"},"Release management: Using the new pip resolver ends in an endless-loop ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4006"},"#4006")),Object(a.b)("li",{parentName:"ul"},"Transfers: source replica expression ignored for multi-hop transfers ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4029"},"#4029"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: xrootd: stat broken on py3 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4004"},"#4004"))))}b.isMDXComponent=!0},426:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,c(c({ref:t},l),{},{components:r})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);