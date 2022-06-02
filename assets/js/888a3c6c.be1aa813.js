(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(426)),c=["components"],o={title:"1.23.0"},s={unversionedId:"release-notes/1.23.0",id:"release-notes/1.23.0",isDocsHomePage:!1,title:"1.23.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.23.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.0",permalink:"/documentation/release-notes/1.23.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.0.md",version:"current",frontMatter:{title:"1.23.0"}},l=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),Object(i.b)("p",null,"This release marks the start of the 1.23 ",Object(i.b)("strong",{parentName:"p"},"Long Term Support (LTS)")," release line. This release line will be supported with security and critical patches until at least ",Object(i.b)("strong",{parentName:"p"},"July 2022"),"."),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adding column ",Object(i.b)("inlineCode",{parentName:"p"},"services")," to ",Object(i.b)("inlineCode",{parentName:"p"},"messages")," and ",Object(i.b)("inlineCode",{parentName:"p"},"messages_history")," table (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"a193a275255c"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Preparation for QoS feature (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"c0937668555f")," and ",Object(i.b)("inlineCode",{parentName:"p"},"50280c53117c"),")"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"rse_qos_map")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"qos_class")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"rses")," table")))),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Due to the metadata unification feature (",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3096"},"#3096"),") added in this release, the APIs for ",Object(i.b)("inlineCode",{parentName:"li"},"add_did_meta"),", ",Object(i.b)("inlineCode",{parentName:"li"},"get_did_meta"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"delete_did_meta")," were removed. This data is now available through the plugin mechanism of the common ",Object(i.b)("inlineCode",{parentName:"li"},"get_metadata")," API.")),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: MultiVO functionality for Rucio ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2635"},"#2635")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Unification of metadata interfaces ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3096"},"#3096")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: QoS: Core and interfaces ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3543"},"#3543")),Object(i.b)("li",{parentName:"ul"},"Messaging: Extending Hermes to submit to influxDB or Elastic ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3680"},"#3680"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: token exchange of JWTs not acquired via Rucio CLI (cases with offline_access scope) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3778"},"#3778")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Support bulk requests in the list_dataset_replicas CLI API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2459"},"#2459")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Introduce BelleII activities ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3771"},"#3771")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: GlobusRSEProtocol Modifications: remove RSEDeterministicTranslation and call super of protocol base class ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3584"},"#3584")),Object(i.b)("li",{parentName:"ul"},"Testing: Reaper tests make no assertions or deletions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3726"},"#3726")),Object(i.b)("li",{parentName:"ul"},"Transfers: Adding list and exists methods to GlobusRSEProtocol ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3346"},"#3346")),Object(i.b)("li",{parentName:"ul"},"Transfers: Introduce caching of a MultiHop path to optimize algorithm runtime ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3830"},"#3830"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: fix to py2/3 compatibility of common.utils  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3743"},"#3743")),Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Token validation for credential signing request ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3823"},"#3823")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Internal error during adding duplicate attribute to account ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3777"},"#3777")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Fix extract_scope method for BelleII ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3797"},"#3797")),Object(i.b)("li",{parentName:"ul"},"Transfers: Conveyor submitter creates partitions wrongly ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3752"},"#3752"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Moving upload method from rsemgr to client ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3084"},"#3084"))),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Allow passing the dynamic parameter to get_did() ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3760"},"#3760"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Python 3 error with uploadclient json.dump ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3747"},"#3747"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Harden security on the Web UI ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3757"},"#3757"))))}b.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(h,o(o({ref:t},l),{},{components:n})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);