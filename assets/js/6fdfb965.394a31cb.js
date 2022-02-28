(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{192:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(376)),o=["components"],c={title:"1.26.9",sidebar_label:"1.26.9"},s={unversionedId:"release-notes/1.26.9",id:"release-notes/1.26.9",isDocsHomePage:!1,title:"1.26.9",description:"General",source:"@site/../docs/release-notes/1.26.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.9",permalink:"/documentation/release-notes/1.26.9",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.9.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646040190,formattedLastUpdatedAt:"2/28/2022",sidebar_label:"1.26.9",frontMatter:{title:"1.26.9",sidebar_label:"1.26.9"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Replicas: Sorting of replicas with list_replicas in non metalink case ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4923"},"#4923"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Overly restrictive proxy permission check causes compatibility problems ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4580"},"#4580")),Object(a.b)("li",{parentName:"ul"},"Deletion: Add an option to archive DID in the reaper workflow ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4852"},"#4852")),Object(a.b)("li",{parentName:"ul"},"Life time model: Introduce option to enable/disable the submission of new exceptions ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4843"},"#4843")),Object(a.b)("li",{parentName:"ul"},"Protocols: Error message 'NoSuchBucket' not matched via stringification ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3925"},"#3925")),Object(a.b)("li",{parentName:"ul"},"Rules: Add the ability to quicken the transition of STUCK rules to REPLICATING ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4634"},"#4634"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: Templates folder missing from Flask folder in server package ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4963"},"#4963")),Object(a.b)("li",{parentName:"ul"},"Transfers: exception on missing external_host in submitter ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4912"},"#4912"))))}b.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);