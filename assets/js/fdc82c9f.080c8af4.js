(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{373:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),i=(t(0),t(378)),a=["components"],l={id:"configure-rucio-globus",title:"Configure Rucio To Use Globus Online as a Transfer Tool",sidebar_label:"Configure Rucio To Use Globus Online as a Transfer Tool"},s={unversionedId:"configure-rucio-globus",id:"configure-rucio-globus",isDocsHomePage:!1,title:"Configure Rucio To Use Globus Online as a Transfer Tool",description:"This document walks through an example configuration of Rucio to use Globus",source:"@site/../docs/configure_globus_transfertool.md",sourceDirName:".",slug:"/configure-rucio-globus",permalink:"/documentation/configure-rucio-globus",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/configure_globus_transfertool.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1647441415,formattedLastUpdatedAt:"3/16/2022",sidebar_label:"Configure Rucio To Use Globus Online as a Transfer Tool",frontMatter:{id:"configure-rucio-globus",title:"Configure Rucio To Use Globus Online as a Transfer Tool",sidebar_label:"Configure Rucio To Use Globus Online as a Transfer Tool"},sidebar:"docs",previous:{title:"Configuration parameters",permalink:"/documentation/configuration_parameters"},next:{title:"Setting up a Rucio demo environment",permalink:"/documentation/setting_up_demo"}},u=[{value:"Register Application with Globus",id:"register-application-with-globus",children:[]},{value:"RSE Setup",id:"rse-setup",children:[]},{value:"Rucio Configuration File",id:"rucio-configuration-file",children:[]},{value:"Globus Configuration File",id:"globus-configuration-file",children:[]}],c={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document walks through an example configuration of Rucio to use Globus\nOnline as a transfer tool. There are four configuration points shown here:\nregistration of your application with Globus, RSE setup (properties and\nparameters), the Rucio configuration file rucio.cfg and the Globus configuration\nfile config.yml."),Object(i.b)("p",null,"Use of both Globus Server endpoints and Globus Personal endpoints has been\ntested with the below approach. Creation of the Globus endpoints is outside the\nscope here. Some knowledge of Rucio setup and familiarity with Globus\nconfiguration is presumed."),Object(i.b)("h2",{id:"register-application-with-globus"},"Register Application with Globus"),Object(i.b)("p",null,"Using Globus Online as a transfer tool requires\n",Object(i.b)("a",{parentName:"p",href:"https://developers.globus.org"},"registering")," the client application with Globus\nOnline. Be sure to select Native App and include a scope for\nurn:globus:auth:scope:transfer.api.globus.org:all. Once you have the Client ID\nyou\u2019ll need to install the globus sdk and run the below Python code to obtain a\nrefresh token."),Object(i.b)("p",null,"There is a ",Object(i.b)("a",{parentName:"p",href:"https://globus-sdk-python.readthedocs.io/en/stable/tutorial.html"},"helpful\nwalk-through"),"\nthat goes into more detail around OAuth and token retrieval."),Object(i.b)("p",null,"Obtain a refresh token to access Globus resources:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"# obtain authorization code\nimport globus_sdk\nCLIENT_ID = '' # your client ID obtained from registering application\nclient = globus_sdk.NativeAppAuthClient(CLIENT_ID)\nclient.oauth2_start_flow(refresh_tokens=True)\nclient.oauth2_get_authorize_url() # Use URL returned here to obtain the authorization\nAUTH_CODE = '' # Use authorization code returned by authenticating to Globus Online\n\n# use the authorization code to create a refresh token\ntoken_response = client.oauth2_exchange_code_for_tokens(AUTH_CODE)\nrefresh_token = token_response.by_resource_server['transfer.api.globus.org']['refresh_token']\n")),Object(i.b)("h2",{id:"rse-setup"},"RSE Setup"),Object(i.b)("p",null,"Below shows a typical setup for a test RSE. Options for CLI given when\nsupported."),Object(i.b)("p",null,"The following code will create a non-determinisic RSE."),Object(i.b)("p",null,"Python:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"# set up the target non-deterministic rse (TEST_RSE)\nfrom rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\nrse_properties = {\n  'ASN': 'ASN',\n  'availability': 7,\n  'deterministic': False,\n  'volatile': False,\n  'city': 'Upton',\n  'region_code': 'DE',\n  'country_name': 'US',\n  'continent': 'NA',\n  'time_zone': 'America/New_York',\n  'ISP': None, 'staging_area': False,\n  'rse_type': 'DISK',\n  'longitude': 40.868352,\n  'latitude': -72.878871\n}\nr = rseclient.add_rse(rse_name, **rse_properties) # r is true on success\n")),Object(i.b)("p",null,"CLI alternative: RSE creation not supported at time of writing of this document\nas there is no way to pass the properties."),Object(i.b)("p",null,"The following code creates a schema to connect to Globus for the RSE created\nabove."),Object(i.b)("p",null,"Python:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"from rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\n# Globus scheme\nprefix = '/~/scratch-space/' # Be sure to use a relative path for your endpoint\nparams = {\n  'scheme': 'globus',\n  'prefix': prefix,\n  'impl': 'rucio.rse.protocols.globus.GlobusRSEProtocol',\n  'third_party_copy': 1,\n  'domains': {\n    \"lan\": {\"read\": 1,\"write\": 1,\"delete\": 1},\n    \"wan\": {\"read\": 1,\"write\": 1,\"delete\": 1}\n  }\n}\np = rseclient.add_protocol(rse_name, params) # p is true on success\n")),Object(i.b)("p",null,"CLI alternative: (the hostname value is required for the CLI command but is\narbitrary as it is ultimately not used in the scheme):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'> rucio-admin rse add-protocol --scheme \'globus\' --prefix \'/~/scratch-space\' \\\n    --impl \'rucio.rse.protocols.globus.GlobusRSEProtocol\' --domain-json \\\n    \'{"wan": {"read": 1, "write": 1, "third_party_copy": 1, "delete": 1}, \\\n    "lan": {"read": 1, "write": 1, "third_party_copy": 1, "delete": 1}}\' \\\n    --hostname \'globus_online\' TEST_RSE\n')),Object(i.b)("p",null,"The following code sets some attributes for the RSE."),Object(i.b)("p",null,"Python:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"from rucio.client.rseclient import RSEClient\nrseclient = RSEClient()\nrse_name = 'TEST_RSE' # rse name MUST BE UPPER CASE\n\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'naming_convention', value = 'bnl') # This is the value for relative SURL\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'globus_endpoint_id', value = 'd6ae63d8-503f-11e9-a620-0a54e005f849')\nresult = rseclient.add_rse_attribute(rse = rse_name, \\\n  key = 'istape', value = False)\n")),Object(i.b)("p",null,"CLI alternative:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> rucio-admin rse set-attribute --rse TEST_RSE --key naming_convention --value bnl\n> rucio-admin rse set-attribute --rse TEST_RSE --key globus_endpoint_id --value d6ae63d8-503f-11e9-a620-0a54e005f849\n> rucio-admin rse set-attribute --rse TEST_RSE --key istape --value false\n")),Object(i.b)("h2",{id:"rucio-configuration-file"},"Rucio Configuration File"),Object(i.b)("p",null,"The Rucio configuration file rucio.cfg should contain the following for the\nconveyor mechanism. More schemes can be included but globus is required. You\nonly need the file scheme if you plan on using the upload method for\nreplicas. If the transfertype value is bulk Rucio will bundle many files into a\ntransfer task. If single then each file will be submitted on individual transfer\ntasks.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"[conveyor]\nscheme = file,globus\ntransfertool = globus\ntransfertype = bulk\nglobus_auth_app = MyGlobusAuthApp\n")),Object(i.b)("p",null,"globus_auth_app is the application given in config.yml (see below)"),Object(i.b)("h2",{id:"globus-configuration-file"},"Globus Configuration File"),Object(i.b)("p",null,"The Globus configuration file ./lib/rucio/transfertool/config.yml is a file of\nYAML syntax and should include at minimum the registered application name, the\nclient ID and refresh token:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"globus:\n  apps:\n    RucioGlobusXferNativeApp:\n      client_id: a758...\n      refresh_token: Agjo...\n")))}p.isMDXComponent=!0},378:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),c=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return t?r.a.createElement(f,l(l({ref:n},u),{},{components:t})):r.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);