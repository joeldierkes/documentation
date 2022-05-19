(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{386:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),i=(n(0),n(412)),a=["components"],c={title:"rucio-dark-reaper"},u={unversionedId:"bin/rucio-dark-reaper",id:"bin/rucio-dark-reaper",isDocsHomePage:!1,title:"rucio-dark-reaper",description:"`",source:"@site/../docs/bin/rucio-dark-reaper.md",sourceDirName:"bin",slug:"/bin/rucio-dark-reaper",permalink:"/documentation/bin/rucio-dark-reaper",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-dark-reaper.md",version:"current",frontMatter:{title:"rucio-dark-reaper"},sidebar:"docs",previous:{title:"rucio-conveyor-throttler",permalink:"/documentation/bin/rucio-conveyor-throttler"},next:{title:"rucio-dumper",permalink:"/documentation/bin/rucio-dumper"}},s=[],p={toc:s};function l(e){var r=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-dark-reaper [-h] [--run-once] [--total-workers TOTAL_WORKERS]\n                         [--chunk-size CHUNK_SIZE] [--scheme SCHEME]\n                         [--rses RSES [RSES ...]]\n                         [--exclude-rses EXCLUDE_RSES]\n                         [--include-rses INCLUDE_RSES] [--vos VOS [VOS ...]]\n                         [--sleep-time SLEEP_TIME]\n\nThe Dark-Reaper daemon is responsible for the deletion of quarantined\nreplicas.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-workers TOTAL_WORKERS\n                        Total number of workers per process\n  --chunk-size CHUNK_SIZE\n                        Chunk size\n  --scheme SCHEME       Force the reaper to use a particular protocol, e.g.,\n                        mock.\n  --rses RSES [RSES ...]\n                        List of RSEs\n  --exclude-rses EXCLUDE_RSES\n                        RSEs expression to exclude RSEs\n  --include-rses INCLUDE_RSES\n                        RSEs expression to include RSEs\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}l.isMDXComponent=!0},412:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=t,f=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(f,c(c({ref:r},s),{},{components:n})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);