(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{376:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,h=d["".concat(r,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(h,s(s({ref:t},u),{},{components:n})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),i=(n(0),n(376)),r=["components"],s={id:"using_the_client",title:"Using the Client"},c={unversionedId:"using_the_client",id:"using_the_client",isDocsHomePage:!1,title:"Using the Client",description:"Rucio provides several commands for the end-user. See executables.",source:"@site/../docs/using_the_client.md",sourceDirName:".",slug:"/using_the_client",permalink:"/documentation/using_the_client",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/using_the_client.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1646069840,formattedLastUpdatedAt:"2/28/2022",frontMatter:{id:"using_the_client",title:"Using the Client"},sidebar:"docs",previous:{title:"Setting Up the Rucio Client",permalink:"/documentation/setting_up_the_rucio_client"},next:{title:"Using the Admin Client",permalink:"/documentation/using_the_admin_client"}},u=[{value:"Getting user information",id:"getting-user-information",children:[]},{value:"Open ID Connect authentication examples",id:"open-id-connect-authentication-examples",children:[]},{value:"Querying basic information about RSEs",id:"querying-basic-information-about-rses",children:[]},{value:"Querying information about DIDs",id:"querying-information-about-dids",children:[]},{value:"Rules operations",id:"rules-operations",children:[]},{value:"Accessing files",id:"accessing-files",children:[]}],l={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,r);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rucio provides several commands for the end-user. See ",Object(i.b)("a",{parentName:"p",href:"/documentation/bin"},"executables"),"."),Object(i.b)("h2",{id:"getting-user-information"},"Getting user information"),Object(i.b)("p",null,"The first thing you might try is to check who you are:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@blahblah.com\n")),Object(i.b)("p",null,"You can switch between different accounts by setting the RUCIO_ACCOUNT\nvariable:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ export RUCIO_ACCOUNT=root\n$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@blahblah.com\n")),Object(i.b)("p",null,"If you try to authenticate with an account that is not mapped with your\ncredentials:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ export RUCIO_ACCOUNT=janedoe\n$ rucio whoami\ncannot get auth_token\n2018-01-30 16:50:08,554 ERROR   Cannot authenticate.\nDetails: x509 authentication failed\n2018-01-30 16:50:08,554 ERROR   Please verify that your proxy is \\\n  still valid and renew it if needed.\n")),Object(i.b)("p",null,"If you're running a multi-VO instance of Rucio, then the VO to\nauthenticate against is set in the configuration file. However you can\nspecify a different VO as a CLI argument if your credentials map to an\naccount there too:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@normalvo.com\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio --vo abc --account root whoami\nstatus     : ACTIVE\naccount    : root\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@abc.com\n")),Object(i.b)("h2",{id:"open-id-connect-authentication-examples"},"Open ID Connect authentication examples"),Object(i.b)("p",null,"There are 3 CLI login methods. Two were introduced in order to avoid typing the\npassword in the Rucio CLI. The default Identity Provider (IdP)/issuer is\nconfigured on the side of Rucio server. In case multiple IdPs are supported,\nuser can specify which one he desires to use by ",Object(i.b)("inlineCode",{parentName:"p"},"--oidc-issuer=\\<IdP nickname\\>"),"\noption (where IdP nickname is the key under which issuers are configured on\nRucio server side in the ","[idpsecrets.json]","{.title-ref} file). In the following\nexamples we assume that user does not want to use the rucio account name\nspecified in the rucio.cfg file on the client side (if so ",Object(i.b)("inlineCode",{parentName:"p"},"-a")," parameter can be\nomitted).  If ","[auth_type]","{.title-ref}",'[ is specified to be \\"oidc\\" in the\nrucio.cfg file, ]',"{.title-ref}","[-S]","{.title-ref}","`"," can be omitted as well.\nFurthermore, we use the same default issuer as configured on Rucio server side."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Login via user's browser + fetch code:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> -S=OIDC -v whoami\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Login via user's browser + polling Rucio auth server:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> -S=OIDC --oidc-polling -v whoami\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Automatic login:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> \\\n  -S=OIDC --oidc-user=\\<idp_username\\> \\\n  --oidc-password=\\<idp_password\\> \\\n  --oidc-auto \\\n  -v \\\n  whoami\n")))),Object(i.b)("p",null,"We strongly discourage this approach, typing your password in CLI does\nnot comply with OAuth2/OIDC standard !"),Object(i.b)("p",null,"Options for automatic token refresh: Assuming the rucio-oauth-manager daemon is\nrunning on the Rucio server side, one can also grant Rucio a refresh token and\nspecify the time for which Rucio should act on behalf of the user (in hours)\nusing the ",Object(i.b)("inlineCode",{parentName:"p"},"--refresh-lifetime")," option:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'rucio -a=\\<rucio_account_name\\> \\\n  -S=OIDC \\\n  --oidc-scope="openid profile offline_access" \\\n  --oidc-refresh-lifetime=24 \\\n  -v \\\n  whoami\n')),Object(i.b)("p",null,"If Rucio Server is granted a user both valid access and refresh tokens,\nit is also possible to configure Rucio Client to ask Rucio Server for\ntoken refresh. Assuming user used one of the 3 CLI authentication\nmethods above + requested offline_access in the scope, rucio.cfg file\ncan be configured with the following parameters in the client\nsection:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"[client]\nauth_oidc_refresh_active true\nauth_oidc_refresh_before_exp 20\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_active")," is false by default. If set to true, the\nRucio Client will be following up token expiration timestamp. As soon as\nthe current time gets to ",Object(i.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes (20 min\ndefault) before token expiration, Rucio Client will ask Rucio Server for\ntoken refresh with every command. If the token has been refreshed in the\nrecent 5 min already once, the same one will be returned (protection on\nthe Rucio Server side). If the presented token has been refreshed\nautomatically on the Rucio Server side by a oauth_manager daemon run, it\nwill return this existing new token. If the presented token is\ninvalid/expired/does not have refresh token in the DB, no refresh will\nbe attempted."),Object(i.b)("p",null,"Example of rucio.cfg file configuration with automatic token refresh:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},"[client]\n\nrucio_host = https://\\<rucio_host\\>:443\nauth_host = https://\\<rucio_auth_host\\>:443\nauth_type = oidc\naccount = \\<rucio_account_name\\>\noidc_audience = rucio\noidc_scope = openid profile offline_access\noidc_issuer = wlcg\nauth_oidc_refresh_active true\nauth_oidc_refresh_before_exp 20\n")),Object(i.b)("p",null,"Then, you should be able to do simply:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rucio -v whoami\n")),Object(i.b)("p",null,"and follow the instruction for first log-in with your browser. New token\nwill be requested before the current expires if a user types a rucio\ncommand within ",Object(i.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes before the expiry.\nNote: If user does not use Rucio Client within\n",Object(i.b)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes before token expires, it will be\nnecessary to re-authenticate asking for a new offline_access token."),Object(i.b)("p",null,"If a user wishes to authenticate with Rucio using a JSON web token not issued\nvia the Rucio login mechanisms (CLI, WebUI), one has to make sure that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The token scope claim is no less than the minimum scope (e.g. 'openid\nprofile') required by the Rucio Auth server (configured there in the rucio.cfg\nfile)."),Object(i.b)("li",{parentName:"ul"},"same as above is true for the use of audience claim"),Object(i.b)("li",{parentName:"ul"},"token issuer is known to Rucio Authentication server"),Object(i.b)("li",{parentName:"ul"},'the identity of the token ("SUB=\\<user sub claim',">",", ISS=\\<issuer url",">",'") is\nassigned to an existing Rucio account (pre-provisioned)')),Object(i.b)("p",null,"If so, one can directly present the token to the Rucio REST endpoint in\nthe \\'X-Rucio-Auth-Token\\' header, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'python\nimport requests\ns=requests.session()\nyour_token=\\<your JWT access token string\\>\nheaders={\'X-Rucio-Auth-Token\': your_token}\naddress=\'https://\\<Rucio Auth Server Name\\>/accounts/guenther\'\nresult=s.get(address, headers=headers, verify=False)\nresult.text\nu\'{\n  "status": "ACTIVE",\n  "account": "guenther",\n  "account_type": "USER",\n  "created_at": "2019-11-13T13:01:58",\n  "suspended_at": null,\n  "updated_at": "2019-11-13T13:01:58",\n  "deleted_at": null,\n  "email": "jaroslav.guenther@gmail.com"\n}\'\n')),Object(i.b)("p",null,"There is also an option to specify a ",Object(i.b)("inlineCode",{parentName:"p"},"auth_token_file_path")," in the\n",Object(i.b)("inlineCode",{parentName:"p"},"client")," section of the rucio.cfg file. Rucio Client will then store\nand search for user's token saved in such file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},"[client]\nauth_token_file_path = /path/to/token/file\n")),Object(i.b)("h2",{id:"querying-basic-information-about-rses"},"Querying basic information about RSEs"),Object(i.b)("p",null,"You can query the list of available RSEs:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-rses\nSITE1_DISK\nSITE1_TAPE\nSITE2_DISK\nSITE2_SCRATCH\nSITE3_TAPE\n")),Object(i.b)("p",null,"If the RSEs are tagged with attributes you can build RSE expressions and\nquery the sites matching these expressions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ rucio list-rses --expression "tier=1&disk=1"\nSITE1_DISK\nSITE2_DISK\n')),Object(i.b)("h2",{id:"querying-information-about-dids"},"Querying information about DIDs"),Object(i.b)("p",null,"To list all the possible scopes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-scopes\nmc\ndata\nuser.jdoe\nuser.janedoe\n")),Object(i.b)("p",null,"You can query the DIDs matching a certain pattern. It always requires to\nspecify the scope in which you want to search:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-dids user.jdoe:*\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n| user.jdoe:user.jdoe.test.dataset.1        | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2        | DATASET      |\n| user.jdoe:test.file.1                     | FILE         |\n| user.jdoe:test.file.2                     | FILE         |\n| user.jdoe:test.file.3                     | FILE         |\n|-------------------------------------------+--------------|\n")),Object(i.b)("p",null,"You can filter by key/value, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-dids --filter type=CONTAINER\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n|-------------------------------------------+--------------|\n")),Object(i.b)("p",null,"If you want to resolve a collection (CONTAINER or DATASET) into the list of its\nconstituents:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-content user.jdoe:user.jdoe.test.container.1234.1\n+------------------------------------+--------------+\n| SCOPE:NAME                         | [DID TYPE]   |\n|------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.dataset.1 | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2 | DATASET      |\n+------------------------------------+--------------+\n")),Object(i.b)("p",null,"You can resolve also the collections (CONTAINER or DATASET) into the list of\nfiles:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-files user.jdoe:user.jdoe.test.container.1234.1\n+-----------------------+---------+-------------+------------+----------+\n| SCOPE:NAME            | GUID    | ADLER32     | FILESIZE   | EVENTS   |\n|-----------------------+---------+-------------+------------+----------|\n| user.jdoe:test.file.1 | 9DF3... | ad:56fb0723 | 39.247 kB  |          |\n| user.jdoe:test.file.2 | 67E8... | ad:e3e573b5 | 636.075 kB |          |\n| user.jdoe:test.file.3 | 32CD... | ad:22849380 | 641.427 kB |          |\n+-----------------------+---------+-------------+------------+----------+\nTotal files : 3\nTotal size : 1.316 MB:\n")),Object(i.b)("h2",{id:"rules-operations"},"Rules operations"),Object(i.b)("p",null,"You can create a new rule like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ rucio add-rules --lifetime 1209600 \\\n  user.jdoe:user.jdoe.test.container.1234.1 1 \\\n  "tier=1&disk=1"\na12e5664555a4f12b3cc6991db5accf9\n')),Object(i.b)("p",null,"The command returns the rule_id of the rule."),Object(i.b)("p",null,"You can list the rules for a particular DID:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-rules user.jdoe:user.jdoe.test.container.1234.1\nID    ACCOUNT  SCOPE:NAME  STATE[OK/REPL/STUCK]  RSE_EXPRESSION  COPIES  EXPIRES\n----  -------  ----------  --------------------  --------------  ------  -------\na...  jdoe     user....    OK[3/0/0]             tier=1&disk=1   1       2018...\nb...  janedoe  user....    REPLICATING[4/1/1     tier=1&tape=1   2\n4...  mc       user....    OK[3/0/0]             tier=1&tape=1   2\n")),Object(i.b)("p",null,"The state indicates how many locks (physical replicas of the files) are OK,\nReplicating or Stuck"),Object(i.b)("h2",{id:"accessing-files"},"Accessing files"),Object(i.b)("p",null,"The command to download DIDs locally is called rucio download. It supports\nvarious sets of option. You can invoke it like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# rucio download user.jdoe:user.jdoe.test.container.1234.1\n2018-02-02 15:13:08,450 INFO    Thread 1/3 : Starting the download of user.jdoe:test.file.2\n2018-02-02 15:13:08,451 INFO    Thread 2/3 : Starting the download of user.jdoe:test.file.3\n2018-02-02 15:13:08,451 INFO    Thread 3/3 : Starting the download of user.jdoe:test.file.1\n2018-02-02 15:13:08,503 INFO    Thread 1/3 : File user.jdoe:test.file.2 trying \\\n  from SITE1_DISK\n2018-02-02 15:13:08,549 INFO    Thread 2/3 : File user.jdoe:test.file.3 trying \\\n  from SITE2_DISK\n2018-02-02 15:13:08,551 INFO    Thread 3/3 : File user.jdoe:test.file.1 trying \\\n  from SITE1_DISK\n2018-02-02 15:13:10,399 INFO    Thread 3/3 : File user.jdoe:test.file.1 \\\n  successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,415 INFO    Thread 2/3 : File user.jdoe:test.file.3 \\\n  successfully downloaded from SITE2_DISK\n2018-02-02 15:13:10,420 INFO    Thread 3/3 : File user.jdoe:test.file.1 \\\n  successfully downloaded. 39.247 kB in 1.85 seconds = 0.02 MBps\n2018-02-02 15:13:10,537 INFO    Thread 2/3 : File user.jdoe:test.file.3 \\\n  successfully downloaded. 641.427 kB in 1.87 seconds = 0.34 MBps\n2018-02-02 15:13:10,614 INFO    Thread 1/3 : File user.jdoe:test.file.2 \\\n  successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,633 INFO    Thread 1/3 : File user.jdoe:test.file.2 \\\n  successfully downloaded. 636.075 kB in 2.11 seconds = 0.3 MBps\n----------------------------------\nDownload summary\n----------------------------------------\nDID user.jdoe:user.jdoe.test.container.1234.1\nTotal files :                                 3\nDownloaded files :                            3\nFiles already found locally :                 0\nFiles that cannot be downloaded :             0\n")))}d.isMDXComponent=!0}}]);