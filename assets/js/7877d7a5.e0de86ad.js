(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{235:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(426)),a=["components"],i={title:"1.14.2"},u={unversionedId:"release-notes/1.14.2",id:"release-notes/1.14.2",isDocsHomePage:!1,title:"1.14.2",description:"Rucio",source:"@site/../docs/release-notes/1.14.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.2",permalink:"/documentation/release-notes/1.14.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.2.md",version:"current",frontMatter:{title:"1.14.2"}},s=[{value:"Rucio",id:"rucio",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],l={toc:s};function b(e){var t=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"rucio"},"Rucio"),Object(c.b)("h3",{id:"enhancements"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Core & Internals: db: fix sqlalchemy text conversion ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/288"},"#288")),Object(c.b)("li",{parentName:"ul"},"Documentation: Adapt setup.py for buildthedocs ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/285"},"#285")),Object(c.b)("li",{parentName:"ul"},"Infrastructure: Include postgres client into the CC7 docker image ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/282"},"#282")),Object(c.b)("li",{parentName:"ul"},"Probes: Upload/download probe for rucio-clients ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/272"},"#272")),Object(c.b)("li",{parentName:"ul"},"Release management: Add Extras dependency on the possible rucio backend (oracle, mysql, postgresql) ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/281"},"#281")),Object(c.b)("li",{parentName:"ul"},"Testing: Enable travis postgresql tests ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/280"},"#280"))),Object(c.b)("h3",{id:"bugs"},"Bugs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Core & Internals: Make all queries fully postgresql compatible ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/265"},"#265")),Object(c.b)("li",{parentName:"ul"},"Documentation: Fixed badly merged conf.py file  ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/307"},"#307"))),Object(c.b)("h2",{id:"webui"},"WebUI"),Object(c.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"WebUI: Policy-based generation of RucioUI pages ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/245"},"#245"))))}b.isMDXComponent=!0},426:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(a,".").concat(m)]||b[m]||p[m]||c;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);