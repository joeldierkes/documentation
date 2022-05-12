(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(387)),i=["components"],s={title:"Running rucio-dumper"},u={unversionedId:"bin/rucio-dumper",id:"bin/rucio-dumper",isDocsHomePage:!1,title:"Running rucio-dumper",description:"`",source:"@site/../docs/bin/rucio-dumper.md",sourceDirName:"bin",slug:"/bin/rucio-dumper",permalink:"/documentation/bin/rucio-dumper",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-dumper.md",version:"current",frontMatter:{title:"Running rucio-dumper"},sidebar:"docs",previous:{title:"Running rucio-dark-reaper",permalink:"/documentation/bin/rucio-dark-reaper"},next:{title:"Running rucio-follower",permalink:"/documentation/bin/rucio-follower"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"usage: rucio-dumper [-h] [--fields FIELDS | --hide HIDE | --group-by GROUP_BY]\n                    [--sum SUM]\n                    [--csv | --csv-nohead | --tabulate {fancy_grid,fancy_outline,github,grid,html,jira,latex,latex_booktabs,latex_longtable,latex_raw,mediawiki,moinmoin,orgtbl,pipe,plain,presto,pretty,psql,rst,simple,textile,tsv,unsafehtml,youtrack}]\n                    {dump-datasets,dump-complete-datasets,dump-replicas,consistency,consistency-manual}\n                    ...\n\nThis daemon is responsible to make file list dumps. The rucio-auditor daemon\nuse these dumps to discover dark data and check Rucio database consistency.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --fields FIELDS       Comma separated list of fields that should be printed\n  --hide HIDE           Comma separated list of fields that should not be\n                        printed\n  --group-by GROUP_BY   Group records, according to the the indicated fields\n                        FIXME\n  --sum SUM             Summatory of the values of the given fields (only\n                        numerical fields and should be used in combination\n                        with --group-by)\n  --csv                 Format the output as a CSV with headers\n  --csv-nohead          Format the output as a CSV without headers (default)\n  --tabulate {fancy_grid,fancy_outline,github,grid,html,jira,latex,latex_booktabs,latex_longtable,latex_raw,mediawiki,moinmoin,orgtbl,pipe,plain,presto,pretty,psql,rst,simple,textile,tsv,unsafehtml,youtrack}\n                        Format the output as a table (printing large tables\n                        can take several minutes)\n\ndump:\n  {dump-datasets,dump-complete-datasets,dump-replicas,consistency,consistency-manual}\n                        dump data FIXME\n    dump-datasets       List the dump of all datasets for a given RSE\n    dump-complete-datasets\n                        List the dump of all complete datasets for a given RSE\n    dump-replicas       List the dump of all replicas for a given RSE\n    consistency         Consistency check to verify possible lost files and\n                        dark data (replica dumps are downloaded automatically)\n    consistency-manual  Consistency check to verify possible lost files and\n                        dark data (replica dumps should be provided by the\n                        user)\n")))}p.isMDXComponent=!0},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);