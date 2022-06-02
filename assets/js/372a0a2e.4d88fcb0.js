(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(426)),c=["components"],o={title:"1.28.0rc2"},l={unversionedId:"release-notes/1.28.0rc2",id:"release-notes/1.28.0rc2",isDocsHomePage:!1,title:"1.28.0rc2",description:"Release Candidate",source:"@site/../docs/release-notes/1.28.0rc2.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.0rc2",permalink:"/documentation/release-notes/1.28.0rc2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.0rc2.md",version:"current",frontMatter:{title:"1.28.0rc2"}},s=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],b={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(i.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Introduction of the ",Object(i.b)("inlineCode",{parentName:"p"},"transfer_hops")," table for the transfer system. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"0f1adb7a599a"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_read")," and ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_write")," replace the ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy")," priority for protocols (",Object(i.b)("inlineCode",{parentName:"p"},"rse_protocols")," table) (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"fe1a65b176c9"),")"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Introduction of default values for  ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_read")," and ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_write")," (",Object(i.b)("inlineCode",{parentName:"p"},"rse_protocols")," table)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Migrate script copies ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy")," values to the ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_read")," and ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy_write")," column")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy")," column will be removed from the table at a later release"))))),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This release drops the ",Object(i.b)("inlineCode",{parentName:"p"},"gfalv2")," protocol implementation which is replaced by the ",Object(i.b)("inlineCode",{parentName:"p"},"gfal.NoRename")," protocol. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In case you run multiple releases (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"1.28.0rc1")," for integration, ",Object(i.b)("inlineCode",{parentName:"p"},"1.27.X")," in production) in your Rucio deployment, please be aware that this release is in general incompatible with older releases, due to the changes in the transfer machinery. Such a mixed production/integration deployment will only be possible with the Rucio ",Object(i.b)("inlineCode",{parentName:"p"},"1.27.11")," release."))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consistency checks: Create CMS-style consistency checking daemon ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5113"},"#5113")),Object(i.b)("li",{parentName:"ul"},"Metadata: Add MongoDB metadata plugin ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5143"},"#5143")),Object(i.b)("li",{parentName:"ul"},"Remove deprecated CLI arguments ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5078"},"#5078")),Object(i.b)("li",{parentName:"ul"},"REST & API: decorate some APIs function with session handler and pass session ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5002"},"#5002")),Object(i.b)("li",{parentName:"ul"},"Transfers: REST interfaces for request_history ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4949"},"#4949"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consistency checks: Remove/change ",Object(i.b)("inlineCode",{parentName:"li"},"bz2file")," dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5348"},"#5348")),Object(i.b)("li",{parentName:"ul"},"Monitoring & Logging: Upgrade ",Object(i.b)("inlineCode",{parentName:"li"},"prometheus_client")," to newer version ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5345"},"#5345")),Object(i.b)("li",{parentName:"ul"},"Protocols: Remove gfalv2 implementation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5227"},"#5227")),Object(i.b)("li",{parentName:"ul"},"Rebalancing: BB8 rewrite ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4706"},"#4706")),Object(i.b)("li",{parentName:"ul"},"Recovery: Necromancer update-history procedure is wasteful when there\u2019s a backlog ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5268"},"#5268")),Object(i.b)("li",{parentName:"ul"},"Release management: Remove forecast extension and numpy as a dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5172"},"#5172")),Object(i.b)("li",{parentName:"ul"},"Rules: Allow overriding all possible options in move_rule ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4995"},"#4995")),Object(i.b)("li",{parentName:"ul"},"Testing: Enabling tests for different policy package ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3878"},"#3878")),Object(i.b)("li",{parentName:"ul"},"Testing: add pymongo to requirements & mongodb container to CI pipeline ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5260"},"#5260")),Object(i.b)("li",{parentName:"ul"},"Testing: Remove py37 and py38 test workflows from autotests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5349"},"#5349")),Object(i.b)("li",{parentName:"ul"},"Transfers: Switch protocol selection to third_party_copy read/write ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3254"},"#3254")),Object(i.b)("li",{parentName:"ul"},"Transfers: Protection to prevent getting files from GCS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3510"},"#3510")),Object(i.b)("li",{parentName:"ul"},"Transfers: Disentangle fts3 specific code from conveyor poller and receiver  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4873"},"#4873")),Object(i.b)("li",{parentName:"ul"},"Transfers: delete conveyor-fts-throttler executable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5203"},"#5203"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transfers: fix conveyor problems detected in 1.28rc1 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5379"},"#5379")," ")),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Load policy packages in client ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4918"},"#4918"))))}p.isMDXComponent=!0},426:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);