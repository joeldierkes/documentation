(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),i=(n(0),n(411)),s=["components"],a={title:"rucio-conveyor-throttler"},c={unversionedId:"bin/rucio-conveyor-throttler",id:"bin/rucio-conveyor-throttler",isDocsHomePage:!1,title:"rucio-conveyor-throttler",description:"`",source:"@site/../docs/bin/rucio-conveyor-throttler.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-throttler",permalink:"/documentation/bin/rucio-conveyor-throttler",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-throttler.md",version:"current",frontMatter:{title:"rucio-conveyor-throttler"},sidebar:"docs",previous:{title:"rucio-conveyor-submitter",permalink:"/documentation/bin/rucio-conveyor-submitter"},next:{title:"rucio-dark-reaper",permalink:"/documentation/bin/rucio-dark-reaper"}},u=[],l={toc:u};function f(e){var t=e.components,n=Object(o.a)(e,s);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-conveyor-throttler [-h] [--run-once] [--sleep-time SLEEP_TIME]\n\nThe Conveyor-Throttler daemon is responsible for managing the internal queue of transfer requests. Depending on transfer limits of current and waiting transfers, it decides whether a transfer should be put in the queue or not.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n\nIn this example, the transfer limit will be one transfer which means that there should be only one active transfer at the time.\nThere will be two waiting transfer requests and no current active transfer.\nAfter running the daemon, there will be one transfer in the queue which can then be started.\n\nSetup the transfer limit::\n\n  $ python\n  from rucio.core.rse import set_rse_transfer_limits\n  set_rse_transfer_limits('MOCK2', 'User Subscriptions', max_transfers=1)\n  $ rucio-admin config set --section throttler --option 'User Subscriptions,MOCK2' --value 1\n\nIf Rucio is running in multi-VO mode, then the RSE ID should be used in place of its name when setting the config::\n\n  $ rucio-admin rse info MOCK2\n  Settings:\n  =========\n    ...\n  Attributes:\n  ===========\n    ...\n  Protocols:\n  ==========\n    ...\n  Usage:\n  ======\n    ...\n    rse_id: 9c54c73cbd534450b2202a576f809f1f\n  $ rucio-admin config set --section throttler --option 'User Subscriptions,9c54c73cbd534450b2202a576f809f1f' --value 1\n\nUpload two files and create replication rules to the same RSE::\n\n  $ rucio upload --scope mock --rse MOCK --name file1 filename.txt\n  $ rucio add-rule mock:file 1 MOCK2\n  $ rucio upload --scope mock --rse MOCK --name file2 filename.txt\n  $ rucio add-rule mock:file2 1 MOCK2\n\nCheck transfer requests::\n\n    $ python\n    from rucio.db.sqla import session,models\n    [request.to_dict() for request in session.get_session().query(models.Request).all()]\n    # [{'state': WAITING, ...}, {'state': WAITING, ...}\n\nTwo transfer requests with the state 'WAITING' got created.\n\nRun the daemon::\n\n  $ rucio-conveyor-throttler --run-once\n\nCheck transfer requests::\n\n    $ python\n    from rucio.db.sqla import session,models\n    [request.to_dict() for request in session.get_session().query(models.Request).all()]\n    # [{'state': WAITING, ...}, {'state': QUEUED, ...}\n\nFinally one of the transfer requests got put in the queue and can be picked up by the Conyevor-Submitter daemon to submit the transfer job to the transfertool.\nThe other request will have to wait until one of the queued requests is done or until the transfer limit changes.\n")))}f.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?o.a.createElement(d,a(a({ref:t},u),{},{components:n})):o.a.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);