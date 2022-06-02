(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(426)),a=["components"],c={title:"1.19.3"},l={unversionedId:"release-notes/1.19.3",id:"release-notes/1.19.3",isDocsHomePage:!1,title:"1.19.3",description:"General",source:"@site/../docs/release-notes/1.19.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.3",permalink:"/documentation/release-notes/1.19.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.19.3.md",version:"current",frontMatter:{title:"1.19.3"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],s={toc:u};function b(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: remove leftovers of dict.iteritems for python3 compatibility ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2207"},"#2207")),Object(i.b)("li",{parentName:"ul"},"Rules: Relay of constituent rule to archive rule should not consider temporary unavailable replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2233"},"#2233"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: generic metadata problems ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2141"},"#2141")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Detection of client location fails on IPv6-only node ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2245"},"#2245")),Object(i.b)("li",{parentName:"ul"},"Recovery: Minos is not able to handle PFNs with different schemes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2221"},"#2221"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: missing default value for filter options in downloadclient ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2249"},"#2249"))))}b.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(a,".").concat(m)]||b[m]||p[m]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);