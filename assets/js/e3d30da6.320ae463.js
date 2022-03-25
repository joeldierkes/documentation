(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{341:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),i=(a(0),a(381)),r=["components"],d={id:"did-meta",title:"DID Metadata",sidebar_label:"DID Metadata"},s={unversionedId:"did-meta",id:"did-meta",isDocsHomePage:!1,title:"DID Metadata",description:"Rucio supports adding Metadata on the dids.",source:"@site/../docs/did_meta.md",sourceDirName:".",slug:"/did-meta",permalink:"/documentation/did-meta",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/did_meta.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1648218602,formattedLastUpdatedAt:"3/25/2022",sidebar_label:"DID Metadata",frontMatter:{id:"did-meta",title:"DID Metadata",sidebar_label:"DID Metadata"}},c=[{value:"How to develop a custom metadata solution",id:"how-to-develop-a-custom-metadata-solution",children:[]},{value:"How to configure which metadata plugin to use",id:"how-to-configure-which-metadata-plugin-to-use",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rucio supports adding Metadata on the dids."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# Create a dataset to use on the Example\n$ rucio add-dataset mock:testing_metadata\n\n# Add 'optimized' metadata that exist as columns in the did table\n$ rucio set-metadata --did mock:testing_metadata --key panda_id --value 9999\n\n# Add 'generic' metadata. If there is no custom metadata plugin,\n# the plugin 'JSON' will be used\n$ rucio set-metadata --did mock:testing_metadata --key random_key_name --value 8888\n\n# Get the 'optimized' metadata\n$ rucio get-metadata mock:testing_metadata\n\n# Get the Generic metadata\n$ rucio get-metadata mock:testing_metadata --plugin JSON\n\n# Get all the metadata\n$ rucio get-metadata mock:testing_metadata --plugin ALL\n\n# List dids according to metadata\n$ rucio list-dids-extended mock:* --filter \"type=ALL,panda_id=9999\"\n$ rucio list-dids-extended mock:* --filter \"type=ALL,random_key_name=8888\"\n")),Object(i.b)("p",null,"Even though regular users use metadata out of the box using the CLI, advanced\nusers and Rucio admins should be aware that in the backend there are multiple\noptions on how to store and manage the did metadata per experiment needs."),Object(i.b)("p",null,"The concepts of DID Metadata Plugins exists on Rucio. While deploying the Rucio\nserver you can configure which existing did plugins to use or even develop your\nown."),Object(i.b)("p",null,"The default plugin in use the one originally developed for the needs of ATLAS,\nstores the metadata on fixed columns on the DID table and is the most optimal\nfor the specific metadata."),Object(i.b)("p",null,"Another option available is the JSON metadata plugin which stores the metadata\nin JSON blobs in the relational databased used by the Rucio Server."),Object(i.b)("p",null,"When you are trying to add or fetch a VALUE for a given KEY, Rucio which asks in\norder each configured metadata plugin if it supports this KEY."),Object(i.b)("h2",{id:"how-to-develop-a-custom-metadata-solution"},"How to develop a custom metadata solution"),Object(i.b)("p",null,"The module you develop needs to extend the ",Object(i.b)("a",{parentName:"p",href:"/"},"DidMetaPlugin")," Abstract\nclass. The methods needed are:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'get_metadata(scope, name, session=None)\n"""\nReturns metadata stored in Plugin for given scope:name\n"""\n\nset_metadata(scope, name, key, value, recursive, session=None)\n"""\nSets the metadata in Plugin for given scope:name\n"""\n\ndelete_metadata(scope, name, key, session=None)\n"""\nRemoves the metadata from the Plugin for given scope:name\n"""\n\nlist_dids(scope, filters, type=\'collection\', ignore_case=False, limit=None, \\\n  offset=None, long=False, recursive=False, session=None)\n"""\nReturns a list of dids for given filters.\nFor long = True return should be a list of dictionaries having the keys \'scope\',\n\'name\', \'did_type\', \'bytes\', \'length\'.\nFor long = False return should be a list of strings containing the did names.\n"""\n\nmanages_key(key, session=None)\n"""\nReturns if Plugin is willing to manage metadata with given KEY.\nSome Plugins might decide to accept only specific hardcoded keys, others might match\nagainst a particular regex while other might accept all possible keys.\n"""\n')),Object(i.b)("h2",{id:"how-to-configure-which-metadata-plugin-to-use"},"How to configure which metadata plugin to use"),Object(i.b)("p",null,"Configuration options for Metadata are::"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"[metadata]\n# plugins = [list_of_plugins,comma_separated]\nplugins = [rucio.core.did_meta_plugins.did_column_meta.DidColumnMeta, escape.rucio.did_meta_plugin]\n")))}u.isMDXComponent=!0},381:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return g}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=n,g=u["".concat(r,".").concat(p)]||u[p]||m[p]||i;return a?o.a.createElement(g,d(d({ref:t},c),{},{components:a})):o.a.createElement(g,d({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,r[1]=d;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);