(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),c=(n(0),n(411)),i=["components"],a={title:"TouchClient"},l={unversionedId:"client_api/touchclient",id:"client_api/touchclient",isDocsHomePage:!1,title:"TouchClient",description:"touch",source:"@site/../docs/client_api/touchclient.md",sourceDirName:"client_api",slug:"/client_api/touchclient",permalink:"/documentation/client_api/touchclient",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/touchclient.md",version:"current",frontMatter:{title:"TouchClient"},sidebar:"docs",previous:{title:"SubscriptionClient",permalink:"/documentation/client_api/subscriptionclient"},next:{title:"UploadClient",permalink:"/documentation/client_api/uploadclient"}},p=[{value:"touch",id:"touch",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"touch"},"touch"),Object(c.b)("span",{style:{"white-space":"pre"}},Object(c.b)("p",null,"Sends a touch trace for a given file or dataset."),Object(c.b)("table",{style:{border:"none"}},Object(c.b)("tbody",null,Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"scope"),": the scope of the file/dataset to update."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"name"),": the name of file/dataset to update."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"rse"),": optional parameter if a specific replica should be touched."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Raises"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DataIdentifierNotFound"),": if given dids does not exist."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"RSENotFound"),": if rse is not None and given rse does not exist."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"UnsupportedDIDType"),": if type of the given DID is not FILE or DATASET."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"RucioException"),": if trace could not be sent successfully.")))))))}b.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||s[d]||c;return n?o.a.createElement(f,a(a({ref:t},p),{},{components:n})):o.a.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);