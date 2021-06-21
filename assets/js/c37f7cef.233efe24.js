(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{274:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(347)),i=["components"],c={id:"What-is-rucio",title:"What is Rucio?",sidebar_label:"What is Rucio?"},s={unversionedId:"What-is-rucio",id:"What-is-rucio",isDocsHomePage:!1,title:"What is Rucio?",description:"Having demonstrated very large scale data management capabilities, Don Quijote (DQ2), the ATLAS Distributed Data Management System used for HEP experiments at CERN had reached its limits in terms of scalability. The primary concerns were",source:"@site/../docs/What-is-rucio.md",sourceDirName:".",slug:"/What-is-rucio",permalink:"/documentation/What-is-rucio",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/What-is-rucio.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1624278235,formattedLastUpdatedAt:"6/21/2021",sidebar_label:"What is Rucio?",frontMatter:{id:"What-is-rucio",title:"What is Rucio?",sidebar_label:"What is Rucio?"},sidebar:"docs",previous:{title:"Before you get started",permalink:"/documentation/Before-you-get-started"},next:{title:"Main Components of Rucio",permalink:"/documentation/Main-components-of-rucio"}},u=[{value:"So what can Rucio do?",id:"so-what-can-rucio-do",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Having demonstrated very large scale data management capabilities, Don Quijote (DQ2), the ",Object(o.b)("strong",{parentName:"p"},"ATLAS Distributed Data Management System")," used for ",Object(o.b)("strong",{parentName:"p"},"HEP experiments at CERN")," had reached its limits in terms of scalability. The primary concerns were"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the requirement of a large number of support staff to operate."),Object(o.b)("li",{parentName:"ul"},"difficulty in interfacing with new technologies")),Object(o.b)("p",null,"To address these very scaling requirements for HEP experiments, ",Object(o.b)("strong",{parentName:"p"},"Rucio")," as a Distributed Data Management System was developed. Drawing benefits from advances in Cloud & Big Data computations, it relies on a conceptual data model to ensure system stability. Dataflow autonomy and automation are the key design principles guiding the development of Rucio. To reduce the operational overheads of the support staff, it employs an automation framework and also accounts for newer use cases & user requirements of the LHC Run2 experiments. "),Object(o.b)("h2",{id:"so-what-can-rucio-do"},"So what can Rucio do?"),Object(o.b)("p",null,"Standing on the shoulders of its predecessor, ",Object(o.b)("strong",{parentName:"p"},"ATLAS"),", the capabilities of Rucio are currently leveraged for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Storage of detector data, simulator data, and user data"),Object(o.b)("li",{parentName:"ul"},"Unified interfacing of heterogenous network & storage infrastructure"),Object(o.b)("li",{parentName:"ul"},"Support for newer protocols in Storage & Network using plugins"),Object(o.b)("li",{parentName:"ul"},"Data Recovery"),Object(o.b)("li",{parentName:"ul"},"Adaptive Replication")))}p.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);