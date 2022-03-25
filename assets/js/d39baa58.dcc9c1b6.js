(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{324:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(381)),c=["components"],i={title:"1.20.3",sidebar_label:"1.20.3"},s={unversionedId:"release-notes/1.20.3",id:"release-notes/1.20.3",isDocsHomePage:!1,title:"1.20.3",description:"General",source:"@site/../docs/release-notes/1.20.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.3",permalink:"/documentation/release-notes/1.20.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.3.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1648218602,formattedLastUpdatedAt:"3/25/2022",sidebar_label:"1.20.3",frontMatter:{title:"1.20.3",sidebar_label:"1.20.3"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: Replace use of RSE names with ids in core ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2500"},"#2500")),Object(o.b)("li",{parentName:"ul"},"Core & Internals: small enhancements for data import ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2725"},"#2725")),Object(o.b)("li",{parentName:"ul"},"Traces: Kronos needs rse_id update ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2737"},"#2737"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: Incorrectly passing strings to SQLAlchemy without an explicit text() declaration ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2732"},"#2732")),Object(o.b)("li",{parentName:"ul"},"Core & Internals: Daemon crashes in 1.20.3rc1 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2747"},"#2747"))))}p.isMDXComponent=!0},381:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);