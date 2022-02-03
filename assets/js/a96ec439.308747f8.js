(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{250:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return p})),n.d(e,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(376)),o=["components"],c={id:"notifications",title:"Notifications",sidebar_label:"Notifications"},s={unversionedId:"notifications",id:"notifications",isDocsHomePage:!1,title:"Notifications",description:"External applications can require synchronisation on events relative to",source:"@site/../docs/notifications.md",sourceDirName:".",slug:"/notifications",permalink:"/documentation/notifications",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/notifications.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643824426,formattedLastUpdatedAt:"2/2/2022",sidebar_label:"Notifications",frontMatter:{id:"notifications",title:"Notifications",sidebar_label:"Notifications"},sidebar:"docs",previous:{title:"Policy packages",permalink:"/documentation/policy-packages"},next:{title:"Metadata attributes",permalink:"/documentation/metadata-attributes"}},p=[],u={toc:p};function l(t){var e=t.components,n=Object(a.a)(t,o);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"External applications can require synchronisation on events relative to\ndata availability and can subscribe to particular events, e.g., dataset\nstate changes, replication rule state changes, etc. Rucio publishes\nmessages via the ",Object(i.b)("a",{parentName:"p",href:"https://stomp.github.io"},"STOMP")," protocol (to e.g.\n",Object(i.b)("a",{parentName:"p",href:"https://activemq.apache.org"},"ActiveMQ"),") when these events happen."))}l.isMDXComponent=!0},376:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a.a.createContext({}),u=function(t){var e=a.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=u(n),d=r,b=l["".concat(o,".").concat(d)]||l[d]||f[d]||i;return n?a.a.createElement(b,c(c({ref:e},p),{},{components:n})):a.a.createElement(b,c({ref:e},p))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);