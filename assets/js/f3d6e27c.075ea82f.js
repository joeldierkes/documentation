(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{405:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(426)),i=["components"],c={title:"1.24.3"},s={unversionedId:"release-notes/1.24.3",id:"release-notes/1.24.3",isDocsHomePage:!1,title:"1.24.3",description:"General",source:"@site/../docs/release-notes/1.24.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.3",permalink:"/documentation/release-notes/1.24.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.3.md",version:"current",frontMatter:{title:"1.24.3"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Database: Oracle optimisation for abacus-collection-replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4279"},"#4279")),Object(a.b)("li",{parentName:"ul"},"Policies: Too restrictive RSE Expression regular expressions for RSE names ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4277"},"#4277"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Consistency checks: Dark reaper mismatch between RSE ID and dictionary. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4285"},"#4285")),Object(a.b)("li",{parentName:"ul"},"Deletion: The deletion of replicas with Epoch tombstone doesn't start if no space is needed ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4288"},"#4288")),Object(a.b)("li",{parentName:"ul"},"Messaging: Hermes2: Submission of deletion events in local time ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4287"},"#4287")),Object(a.b)("li",{parentName:"ul"},"Messaging: Hermes throwing exception on python3 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4289"},"#4289"))))}p.isMDXComponent=!0},426:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);