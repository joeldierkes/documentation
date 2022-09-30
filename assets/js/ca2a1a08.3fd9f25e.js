(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{361:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(3),o=n(7),i=(n(0),n(443)),a=["components"],c={title:"rucio-atropos"},u={unversionedId:"bin/rucio-atropos",id:"bin/rucio-atropos",isDocsHomePage:!1,title:"rucio-atropos",description:"`",source:"@site/../docs/bin/rucio-atropos.md",sourceDirName:"bin",slug:"/bin/rucio-atropos",permalink:"/documentation/bin/rucio-atropos",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-atropos.md",version:"current",frontMatter:{title:"rucio-atropos"},sidebar:"docs",previous:{title:"rucio-admin",permalink:"/documentation/bin/rucio-admin"},next:{title:"rucio-auditor",permalink:"/documentation/bin/rucio-auditor"}},l=[],p={toc:l};function s(e){var r=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-atropos [-h] [--run-once] [--dry-run] [--threads THREADS]\n                     [--grace-period GRACE_PERIOD] [--date-check DATE_CHECK]\n                     [--unlock-rules] [--spread-period SPREAD_PERIOD]\n                     [--purge-replicas] [--sleep-time SLEEP_TIME]\n\nThe Atropos Daemon is responsible for the deletion of rules with expired\neol_at (end the life at), according to the Lifetime Model. Once the rule is\ndeleted, the replicas covered by the rule will not be protected anymore and\neventually, will be deleted by another daemon.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --dry-run             Dry run mode\n  --threads THREADS     Concurrency control: number of threads\n  --grace-period GRACE_PERIOD\n                        Grace period for the rules. In seconds !!!\n  --date-check DATE_CHECK\n                        Date when the lifetime model will be applied. Cannot\n                        be used for a date in the future if dry-run is not\n                        enabled\n  --unlock-rules        Automatically unlock affected rules\n  --spread-period SPREAD_PERIOD\n                        Set the rules to randomly expire over a period (in\n                        seconds). Uses a uniform distribution\n  --purge-replicas      Set the replicas to be deleted instead of secondarised\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}s.isMDXComponent=!0},443:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=t,m=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return n?o.a.createElement(m,c(c({ref:r},l),{},{components:n})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);