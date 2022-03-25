(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var i=a(3),n=a(7),r=(a(0),a(381)),o=["components"],l={title:"1.19.0.post2 'Fantastic Donkeys'",sidebar_label:"1.19.0.post2 'Fantastic Donkeys'"},c={unversionedId:"release-notes/1.19.0.post2",id:"release-notes/1.19.0.post2",isDocsHomePage:!1,title:"1.19.0.post2 'Fantastic Donkeys'",description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.19.0.post2.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.0.post2",permalink:"/documentation/release-notes/1.19.0.post2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.19.0.post2.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1648218602,formattedLastUpdatedAt:"3/25/2022",sidebar_label:"1.19.0.post2 'Fantastic Donkeys'",frontMatter:{title:"1.19.0.post2 'Fantastic Donkeys'",sidebar_label:"1.19.0.post2 'Fantastic Donkeys'"}},b=[{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],s={toc:b};function u(e){var t=e.components,a=Object(n.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(r.b)("p",null,"This feature release requires a database schema upgrade. Please consult the\n",Object(r.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about\nupgrading your database schema."),Object(r.b)("p",null,"The following changes are necessary and are covered by the ",Object(r.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"bad_replicas_table")," changes (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"b96a1c7e1cc4"),")"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"New ",Object(r.b)("inlineCode",{parentName:"li"},"expires_at")," column."),Object(r.b)("li",{parentName:"ul"},"Primary key change."),Object(r.b)("li",{parentName:"ul"},"New ",Object(r.b)("inlineCode",{parentName:"li"},"BAD_REPLICAS_EXPIRES_AT_IDX")," Index."),Object(r.b)("li",{parentName:"ul"},"Constraint ",Object(r.b)("inlineCode",{parentName:"li"},"BAD_REPLICAS_STATE_CHK")," change."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"New ",Object(r.b)("inlineCode",{parentName:"p"},"bad_pfns")," table (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"b96a1c7e1cc4"),")")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change of ",Object(r.b)("inlineCode",{parentName:"p"},"rse_attr_map")," and ",Object(r.b)("inlineCode",{parentName:"p"},"account_attr_map")," boolean values (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"9eb936a81eb1"),")"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"True")," to ",Object(r.b)("inlineCode",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"False")," to ",Object(r.b)("inlineCode",{parentName:"li"},"false")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Changes in history tables (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"bf3baa1c1474"),")"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Drop of Primary Key ",Object(r.b)("inlineCode",{parentName:"li"},"CONTENTS_HIST_PK")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"contents_history"),"."),Object(r.b)("li",{parentName:"ul"},"Drop of Primary Key ",Object(r.b)("inlineCode",{parentName:"li"},"ARCH_CONTENTS_HISOTRY_PK")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"archive_contents_history"),"."),Object(r.b)("li",{parentName:"ul"},"Creation of Index ",Object(r.b)("inlineCode",{parentName:"li"},"ARCH_CONT_HIST_IDX")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"archive_contents_history"),"."),Object(r.b)("li",{parentName:"ul"},"Drop of Primary Key ",Object(r.b)("inlineCode",{parentName:"li"},"RULES_HIST_RECENT_PK")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"rules_hist_recent"),"."),Object(r.b)("li",{parentName:"ul"},"Drop of column ",Object(r.b)("inlineCode",{parentName:"li"},"history_id")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"rules_hist_recent"),"."),Object(r.b)("li",{parentName:"ul"},"Drop of Primary Key ",Object(r.b)("inlineCode",{parentName:"li"},"RULES_HIST_LONGTERM_PK")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"rules_history"),"."),Object(r.b)("li",{parentName:"ul"},"Drop of column ",Object(r.b)("inlineCode",{parentName:"li"},"history_id")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"rules_history"),"."),Object(r.b)("li",{parentName:"ul"},"Drop of Primary Key ",Object(r.b)("inlineCode",{parentName:"li"},"MESSAGES_HIST_ID_PK")," for table ",Object(r.b)("inlineCode",{parentName:"li"},"messages_history"),"."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Adding of new ",Object(r.b)("inlineCode",{parentName:"p"},"payload_nolimit")," column to messages tables (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"90f47792bb76"),")"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Add column ",Object(r.b)("inlineCode",{parentName:"li"},"payload_nolimit")," to table ",Object(r.b)("inlineCode",{parentName:"li"},"messages"),"."),Object(r.b)("li",{parentName:"ul"},"Add column ",Object(r.b)("inlineCode",{parentName:"li"},"payload_nolimit")," to table ",Object(r.b)("inlineCode",{parentName:"li"},"messages_history"),"."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change of constraint ",Object(r.b)("inlineCode",{parentName:"p"},"RULES_NOTIFICATION_CHK")," for ",Object(r.b)("inlineCode",{parentName:"p"},"rules")," (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"01eaf73ab656"),")")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change of Primary Key ",Object(r.b)("inlineCode",{parentName:"p"},"REPLICAS_PK")," for table ",Object(r.b)("inlineCode",{parentName:"p"},"replicas")," (Alembic revision ",Object(r.b)("inlineCode",{parentName:"p"},"3345511706b8"),")"))),Object(r.b)("p",null,"The following change are necessary and are ",Object(r.b)("strong",{parentName:"p"},"NOT")," covered by the ",Object(r.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The boolean values upgrade on the ",Object(r.b)("inlineCode",{parentName:"li"},"rse_attr_map")," and ",Object(r.b)("inlineCode",{parentName:"li"},"account_attr_map"),"\ntables from ",Object(r.b)("inlineCode",{parentName:"li"},"0")," to ",Object(r.b)("inlineCode",{parentName:"li"},"false")," and ",Object(r.b)("inlineCode",{parentName:"li"},"1")," to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," need to be executed manually,\nsince the script cannot distinguish between the integer or boolean\ninterpretation of the attribute. It is very important that you only upgrade\n",Object(r.b)("inlineCode",{parentName:"li"},"0")," and ",Object(r.b)("inlineCode",{parentName:"li"},"1")," which actualy correspond to boolean values, otherwise\nfunctionality might be degraded (Alembic revision ",Object(r.b)("inlineCode",{parentName:"li"},"9eb936a81eb1"),")")),Object(r.b)("h2",{id:"general"},"General"),Object(r.b)("h3",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Core & Internals: Mark replicas as temporarily unavailable ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1550"},"#1550")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: PK in history tables mostly wrong ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1818"},"#1818")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Limit the maximum space usage on an RSE ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1965"},"#1965")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Messages payload are limited to 4000 characters and throw exception ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/48"},"#48")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: json based import for RSEs, protocols, distances ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/716"},"#716")),Object(r.b)("li",{parentName:"ul"},"Rules: New Rule Notification Mode ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1922"},"#1922")),Object(r.b)("li",{parentName:"ul"},"Transfers: Remove conveyor-transfer-submitter ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1632"},"#1632"))),Object(r.b)("h3",{id:"enhancements"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clients: Allow upload of replicas to non-det RSEs by users ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1172"},"#1172")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Core migration to python3 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1912"},"#1912")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Daemon migration to python3 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1924"},"#1924")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: fix last python3 incompatibilities ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1961"},"#1961")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: Add missing wsgi alias for import/export ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1990"},"#1990")),Object(r.b)("li",{parentName:"ul"},"Messaging: improve connection handling to broker ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1479"},"#1479")),Object(r.b)("li",{parentName:"ul"},"Rebalancing: bb8 - replacing sql query with sql alchemy ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1861"},"#1861")),Object(r.b)("li",{parentName:"ul"},"Rebalancing: BB8 should avoid reducing the replication factor of a dataset ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/484"},"#484")),Object(r.b)("li",{parentName:"ul"},"Release management: Address security issue in paramiko due to CVE-2018-1000805 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1646"},"#1646")),Object(r.b)("li",{parentName:"ul"},"Release management: Upgrade of dependencies for 1.19.0 ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2028"},"#2028")),Object(r.b)("li",{parentName:"ul"},"Release management: Rucio py3 compatibility ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/67"},"#67")),Object(r.b)("li",{parentName:"ul"},"Testing: switch oracle image for travis tests ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2010"},"#2010")),Object(r.b)("li",{parentName:"ul"},"Traces: kronos: activemq connect is missing wait=True ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/321"},"#321"))),Object(r.b)("h3",{id:"bugs"},"Bugs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Core & Internals: Primary Key for replicas table is in wrong order in models.py ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1749"},"#1749")),Object(r.b)("li",{parentName:"ul"},"Core & Internals: list-rse-usage with --show-accounts does not work ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2040"},"#2040")),Object(r.b)("li",{parentName:"ul"},"Deletion: The reaper may ignore some rses if there is more than one rse handled per thread ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1729"},"#1729")),Object(r.b)("li",{parentName:"ul"},"Deletion: Reaper crashes if no RSEs are defined ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1917"},"#1917")),Object(r.b)("li",{parentName:"ul"},"Documentation: Documentation build fails ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1774"},"#1774")),Object(r.b)("li",{parentName:"ul"},"Documentation: Broken links in documentation sidebar ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2065"},"#2065")),Object(r.b)("li",{parentName:"ul"},"Probes & Alarms: The FTS probe sometimes doesn't whitelist a SE after the end of downtime ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2015"},"#2015")),Object(r.b)("li",{parentName:"ul"},"Probes & Alarms: Synchronisation with VOMS fails under Nagios due to non-ASCII characters ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2051"},"#2051")),Object(r.b)("li",{parentName:"ul"},"Rebalancing: BB8 crash with RSEBlacklisted exception ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/313"},"#313")),Object(r.b)("li",{parentName:"ul"},"Release management: Define stricter depdency ranges for pip-requires-client ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1692"},"#1692")),Object(r.b)("li",{parentName:"ul"},"Transfers: REST call for requests is broken by '/' in DIDs ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1791"},"#1791"))),Object(r.b)("h2",{id:"clients"},"Clients"),Object(r.b)("h3",{id:"features-1"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clients: Expose request details (e.g. FTS job ID) to the client ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1786"},"#1786"))),Object(r.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clients: rucio download should be able to use locally cached metalink ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1415"},"#1415")),Object(r.b)("li",{parentName:"ul"},"Clients: Handling of istape=False in the client ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1455"},"#1455")),Object(r.b)("li",{parentName:"ul"},"Clients: fix python3 incompatibilities not found by pylint ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2020"},"#2020"))),Object(r.b)("h3",{id:"bugs-1"},"Bugs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clients: authentication type selection safeguard ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2006"},"#2006"))),Object(r.b)("h2",{id:"webui"},"WebUI"),Object(r.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"WebUI: View for suspicious files ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2054"},"#2054"))))}u.isMDXComponent=!0},381:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return a?n.a.createElement(h,l(l({ref:t},b),{},{components:a})):n.a.createElement(h,l({ref:t},b))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var b=2;b<r;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);