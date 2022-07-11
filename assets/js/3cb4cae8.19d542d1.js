(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(432)),o=["components"],c={title:"1.29.0"},l={unversionedId:"release-notes/1.29.0",id:"release-notes/1.29.0",isDocsHomePage:!1,title:"1.29.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.29.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.29.0",permalink:"/documentation/release-notes/1.29.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.29.0.md",version:"current",frontMatter:{title:"1.29.0"}},b=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],s={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),Object(i.b)("p",null,"This release marks the start of the 1.29 ",Object(i.b)("strong",{parentName:"p"},"Long Term Support (LTS)")," release line. This release line will be supported with security and critical patches until at least ",Object(i.b)("strong",{parentName:"p"},"July 2024"),"."),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Introduction of the ",Object(i.b)("inlineCode",{parentName:"p"},"availability_read"),", ",Object(i.b)("inlineCode",{parentName:"p"},"availability_write")," and ",Object(i.b)("inlineCode",{parentName:"p"},"availability_delete")," columns in ",Object(i.b)("inlineCode",{parentName:"p"},"rses")," table. This will replace the ",Object(i.b)("inlineCode",{parentName:"p"},"availability")," column in a later release. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"1677d4d803c8"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Extend ",Object(i.b)("inlineCode",{parentName:"p"},"refresh_token")," column in ",Object(i.b)("inlineCode",{parentName:"p"},"tokens")," table. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"fa7a7d78b602"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Drop ",Object(i.b)("inlineCode",{parentName:"p"},"third_party_copy")," column in ",Object(i.b)("inlineCode",{parentName:"p"},"rse_protocols")," table. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"d6e2c3b2cf26"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Creation of several global temporary tables on Oracle. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"f41ffe206f37"),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Migration of RSE Settings (",Object(i.b)("inlineCode",{parentName:"p"},"city"),", ",Object(i.b)("inlineCode",{parentName:"p"},"region_code"),", ",Object(i.b)("inlineCode",{parentName:"p"},"country_name"),", ",Object(i.b)("inlineCode",{parentName:"p"},"continent"),", ",Object(i.b)("inlineCode",{parentName:"p"},"time_zone"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ISP"),") from ",Object(i.b)("inlineCode",{parentName:"p"},"rses")," table to ",Object(i.b)("inlineCode",{parentName:"p"},"rse_attr_map"),"; These columns will be dropped from ",Object(i.b)("inlineCode",{parentName:"p"},"rses")," in a future release. (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"2190e703eb6e"),")"))),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This release drops the, long deprecated, DQ2 compatibility clients.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Full removal of Python 2.7 compatibility. If you require Python 2.7 compatibility on the clients side, please consider the Rucio 1.26 LTS release line which will still be supported until mid-2023."))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Passing scope to construct_surl() ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4836"},"#4836")),Object(i.b)("li",{parentName:"ul"},"Database: Further integration of temporary tables to other major workflows ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5441"},"#5441")),Object(i.b)("li",{parentName:"ul"},"Documentation: Fix client API documentation page ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5444"},"#5444")),Object(i.b)("li",{parentName:"ul"},"Messaging: Hermes 2 evolution ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4610"},"#4610")),Object(i.b)("li",{parentName:"ul"},"Release management: Removal of Python 2.7 dependencies from the code ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5435"},"#5435"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Replace deprecated ",Object(i.b)("inlineCode",{parentName:"li"},"oauth2client")," dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5343"},"#5343")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Replace dependency ",Object(i.b)("inlineCode",{parentName:"li"},"python-memcached")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5341"},"#5341")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Calculation of container ",Object(i.b)("inlineCode",{parentName:"li"},"length")," and ",Object(i.b)("inlineCode",{parentName:"li"},"events")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5422"},"#5422")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Cannot update ",Object(i.b)("inlineCode",{parentName:"li"},"continent")," attribute of RSE ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5464"},"#5464")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: rucio-admin rse update shows no error for unsupported options ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5491"},"#5491")),Object(i.b)("li",{parentName:"ul"},"Database: Add poolclass configuration options for database engine ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5391"},"#5391")),Object(i.b)("li",{parentName:"ul"},"Database: Add additional operators in metadata filter engine for Oracle ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5503"},"#5503")),Object(i.b)("li",{parentName:"ul"},"Database: global temp table detection query is costly on oracle ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5714"},"#5714")),Object(i.b)("li",{parentName:"ul"},"Documentation: Further OIDC and SSO optimization and documentation ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5437"},"#5437")),Object(i.b)("li",{parentName:"ul"},"Metadata: Using plugin ALL or JSON returns DataIdentifierNotFound if json metadata is not set ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4512"},"#4512")),Object(i.b)("li",{parentName:"ul"},"Remove third_party_copy column ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5634"},"#5634")),Object(i.b)("li",{parentName:"ul"},"Introduce a heartbeat handler to kronos ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5685"},"#5685")),Object(i.b)("li",{parentName:"ul"},"Protocols: Remove legacy S3 protocols and libraries ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5346"},"#5346")),Object(i.b)("li",{parentName:"ul"},"Protocols: Check before deleting with GFAL ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5622"},"#5622")),Object(i.b)("li",{parentName:"ul"},"Recovery: Heartbeat handler for bad_replicas daemons ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5562"},"#5562")),Object(i.b)("li",{parentName:"ul"},"Recovery: Create rules for suspicious replicas with only one declaration ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5591"},"#5591")),Object(i.b)("li",{parentName:"ul"},"Testing: mypy static code analysis ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4455"},"#4455"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cache detection code results in wrong logging level  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5697"},"#5697")),Object(i.b)("li",{parentName:"ul"},"global temporary tables not used on oracle ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5710"},"#5710")),Object(i.b)("li",{parentName:"ul"},"Transfers: Logic error in FTS3 transfertool checksum validation strategy ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5670"},"#5670"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Remove DQ2 Client ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5584"},"#5584"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Config not found RuntimeError in version 1.29.0rc1 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5704"},"#5704"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Make subscriptions page real-time ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5583"},"#5583"))))}u.isMDXComponent=!0},432:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);