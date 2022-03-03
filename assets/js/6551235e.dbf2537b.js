(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),i=(n(0),n(377)),a=["components"],c={id:"contribution_guide_for_documentation",title:"Contribution Guide for Documentation"},u={unversionedId:"contribution_guide_for_documentation",id:"contribution_guide_for_documentation",isDocsHomePage:!1,title:"Contribution Guide for Documentation",description:"There are two types of documentation hosted on Rucio as detailed in the [__Types",source:"@site/../docs/contribution_guide_for_documentation.md",sourceDirName:".",slug:"/contribution_guide_for_documentation",permalink:"/documentation/contribution_guide_for_documentation",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/contribution_guide_for_documentation.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646241928,formattedLastUpdatedAt:"3/2/2022",frontMatter:{id:"contribution_guide_for_documentation",title:"Contribution Guide for Documentation"},sidebar:"docs",previous:{title:"Types of Pages",permalink:"/documentation/types_of_pages"},next:{title:"About Our Contributors",permalink:"/documentation/about_our_contributors"}},s=[{value:"API Documentation",id:"api-documentation",children:[]},{value:"Markdown documentation",id:"markdown-documentation",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two types of documentation hosted on Rucio as detailed in the ",Object(i.b)("a",{parentName:"p",href:"/documentation/types_of_pages"},Object(i.b)("strong",{parentName:"a"},"Types\nof Pages"))," section. Should you wish to contribute\nimprovements to any of them, kindly follow the guidelines below per the section."),Object(i.b)("h2",{id:"api-documentation"},"API Documentation"),Object(i.b)("p",null,"The source for this section lives in the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/rucio"))," GitHub repository. Below are\nthe two sub-categories that we maintain documentation for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/tree/master/lib/rucio/web/rest/flaskapi/v1"},Object(i.b)("strong",{parentName:"a"},"Rest API"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/tree/master/lib/rucio/client"},Object(i.b)("strong",{parentName:"a"},"Client API")))),Object(i.b)("p",null,"Since the documentation is directly derived from the source, any change to the\ndocumentation needs to be made in the Source code.  Please submit an issue or\npull request to the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/rucio")),"\nrepository with your suggestions for contribution.  Once the changes have been\napproved & pushed into the main branch, the changes will be available at\n",Object(i.b)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation"},"https://rucio.cern.ch/documentation")," on the next day."),Object(i.b)("h2",{id:"markdown-documentation"},"Markdown documentation"),Object(i.b)("p",null,"The source for this section lives in the ",Object(i.b)("inlineCode",{parentName:"p"},"docs")," folder within the main branch\nof the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/documentation"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/documentation"))," GitHub\nrepository. Improvements may be suggested by submitting an issue or pull request\nto the ",Object(i.b)("strong",{parentName:"p"},"main")," branch of the repository.  Once the changes are approved, GitHub\nActions will trigger the build process and publish on to GitHub pages."))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=p(n),l=o,m=b["".concat(a,".").concat(l)]||b[l]||d[l]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);