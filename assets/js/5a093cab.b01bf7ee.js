(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(376)),o=["components"],c={title:"1.26.5",sidebar_label:"1.26.5"},l={unversionedId:"release-notes/1.26.5",id:"release-notes/1.26.5",isDocsHomePage:!1,title:"1.26.5",description:"General",source:"@site/../docs/release-notes/1.26.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.5",permalink:"/documentation/release-notes/1.26.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.5.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643824426,formattedLastUpdatedAt:"2/2/2022",sidebar_label:"1.26.5",frontMatter:{title:"1.26.5",sidebar_label:"1.26.5"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],u={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: ATLAS: Do not restrict viewing the global account usage ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4838"},"#4838")),Object(i.b)("li",{parentName:"ul"},"Replicas: Replica sorting not enabled for JSON ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4105"},"#4105")),Object(i.b)("li",{parentName:"ul"},"Transfers: Remove ",Object(i.b)("inlineCode",{parentName:"li"},"retry_other_fts")," option from conveyor ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4812"},"#4812"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dataset deletion: Bug affecting detach in delete_did ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4848"},"#4848"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Fix spelling mistakes in bin/rucio ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4846"},"#4846")),Object(i.b)("li",{parentName:"ul"},"Clients: Improve CSV export ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4847"},"#4847"))))}b.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);