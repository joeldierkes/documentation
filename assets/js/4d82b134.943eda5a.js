(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),i=(t(0),t(412)),c=["components"],a={title:"rucio-admin"},s={unversionedId:"bin/rucio-admin",id:"bin/rucio-admin",isDocsHomePage:!1,title:"rucio-admin",description:"`",source:"@site/../docs/bin/rucio-admin.md",sourceDirName:"bin",slug:"/bin/rucio-admin",permalink:"/documentation/bin/rucio-admin",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-admin.md",version:"current",frontMatter:{title:"rucio-admin"},sidebar:"docs",previous:{title:"rucio-abacus-rse",permalink:"/documentation/bin/rucio-abacus-rse"},next:{title:"rucio-atropos",permalink:"/documentation/bin/rucio-atropos"}},u=[],d={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'usage: rucio-admin [-h] [--version] [--verbose] [-H ADDRESS]\n                   [--auth-host ADDRESS] [-a ACCOUNT] [-S AUTH_STRATEGY]\n                   [-T TIMEOUT] [--vo VO] [-u USERNAME] [-pwd PASSWORD]\n                   [--oidc-user OIDC_USERNAME] [--oidc-password OIDC_PASSWORD]\n                   [--oidc-scope OIDC_SCOPE] [--oidc-audience OIDC_AUDIENCE]\n                   [--oidc-auto] [--oidc-polling]\n                   [--oidc-refresh-lifetime OIDC_REFRESH_LIFETIME]\n                   [--oidc-issuer OIDC_ISSUER] [--certificate CERTIFICATE]\n                   [--ca-certificate CA_CERTIFICATE]\n                   {data,account,identity,rse,scope,config,subscription,replicas}\n                   ...\n\npositional arguments:\n  {data,account,identity,rse,scope,config,subscription,replicas}\n    data                Import and export data\n    account             Account methods\n    identity            Identity methods\n    rse                 RSE (Rucio Storage Element) methods\n    scope               Scope methods\n    config              Configuration methods. The global configuration of\n                        data mangement system can by modified.\n    subscription        Subscription methods. The methods for automated and\n                        regular processing of some specific rules.\n    replicas            Replica methods\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --version             show program\'s version number and exit\n  --verbose, -v         Print more verbose output\n  -H ADDRESS, --host ADDRESS\n                        The Rucio API host\n  --auth-host ADDRESS   The Rucio Authentication host\n  -a ACCOUNT, --account ACCOUNT\n                        Rucio account to use\n  -S AUTH_STRATEGY, --auth-strategy AUTH_STRATEGY\n                        Authentication strategy (userpass, x509, ssh ...)\n  -T TIMEOUT, --timeout TIMEOUT\n                        Set all timeout values to SECONDS\n  --vo VO               VO to authenticate at. Only used in multi-VO mode.\n  -u USERNAME, --user USERNAME\n                        username\n  -pwd PASSWORD, --password PASSWORD\n                        password\n  --oidc-user OIDC_USERNAME\n                        OIDC username\n  --oidc-password OIDC_PASSWORD\n                        OIDC password\n  --oidc-scope OIDC_SCOPE\n                        Defines which (OIDC) information user will share with\n                        Rucio. Rucio requires at least -sc="openid profile".\n                        To request refresh token for Rucio, scope must include\n                        "openid offline_access" and there must be no active\n                        access token saved on the side of the currently used\n                        Rucio Client.\n  --oidc-audience OIDC_AUDIENCE\n                        Defines which audience are tokens requested for.\n  --oidc-auto           If not specified, username and password credentials\n                        are not required and users will be given a URL to use\n                        in their browser. If specified, the users explicitly\n                        trust Rucio with their IdP credentials.\n  --oidc-polling        If not specified, user will be asked to enter a code\n                        returned by the browser to the command line. If\n                        --polling is set, Rucio Client should get the token\n                        without any further interaction of the user. This\n                        option is active only if --auto is *not* specified.\n  --oidc-refresh-lifetime OIDC_REFRESH_LIFETIME\n                        Max lifetime in hours for this an access token will be\n                        refreshed by asynchronous Rucio daemon. If not\n                        specified, refresh will be stopped after 4 days. This\n                        option is effective only if --oidc-scope includes\n                        offline_access scope for a refresh token to be granted\n                        to Rucio.\n  --oidc-issuer OIDC_ISSUER\n                        Defines which Identity Provider is goign to be used.\n                        The issuer string must correspond to the keys\n                        configured in the /etc/idpsecrets.json auth server\n                        configuration file.\n  --certificate CERTIFICATE\n                        Client certificate file\n  --ca-certificate CA_CERTIFICATE\n                        CA certificate to verify peer against (SSL)\n')))}p.isMDXComponent=!0},412:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),d=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return t?r.a.createElement(m,a(a({ref:n},u),{},{components:t})):r.a.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);