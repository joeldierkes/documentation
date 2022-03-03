(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{359:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(377)),c=["components"],o={title:"1.22.4",sidebar_label:"1.22.4"},u={unversionedId:"release-notes/1.22.4",id:"release-notes/1.22.4",isDocsHomePage:!1,title:"1.22.4",description:"General",source:"@site/../docs/release-notes/1.22.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.4",permalink:"/documentation/release-notes/1.22.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.4.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1646300120,formattedLastUpdatedAt:"3/3/2022",sidebar_label:"1.22.4",frontMatter:{title:"1.22.4",sidebar_label:"1.22.4"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-2",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: changing output of auth core function used in conveyor-submitter ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3523"},"#3523")),Object(a.b)("li",{parentName:"ul"},"Consistency checks: Adapt Auditor to changes in Rucio DB dumps ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3554"},"#3554")),Object(a.b)("li",{parentName:"ul"},"Testing: Supplied git pre-commit hook is using Python 2 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3405"},"#3405")),Object(a.b)("li",{parentName:"ul"},"Testing: add test with file/dataset overlap to test_rule ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3495"},"#3495"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: OAuth2/OIDC: fix cookie domain settings ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3520"},"#3520"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Improvements in meta CLI tools ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3534"},"#3534"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Import of community schema crashes client ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3546"},"#3546"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"bugs-2"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Auth endpoint in webui broken with reversed DN ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3529"},"#3529"))))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return n?i.a.createElement(d,o(o({ref:t},s),{},{components:n})):i.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);