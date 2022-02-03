(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(376)),o=["components"],c={title:"1.21.8",sidebar_label:"1.21.8"},l={unversionedId:"release-notes/1.21.8",id:"release-notes/1.21.8",isDocsHomePage:!1,title:"1.21.8",description:"General",source:"@site/../docs/release-notes/1.21.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.8",permalink:"/documentation/release-notes/1.21.8",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.8.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643824426,formattedLastUpdatedAt:"2/2/2022",sidebar_label:"1.21.8",frontMatter:{title:"1.21.8",sidebar_label:"1.21.8"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs",children:[]}]}],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper should stop operating if there is a judge-evaluator backlog ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1578"},"#1578")),Object(i.b)("li",{parentName:"ul"},"Functional tests: Possibility to specify different dataset convention in Automatix ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/700"},"#700"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Upload with gsiftp fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3286"},"#3286")),Object(i.b)("li",{parentName:"ul"},"Recovery: Declaring temporary unavailable replicas also declares the files lost ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3292"},"#3292"))))}p.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);