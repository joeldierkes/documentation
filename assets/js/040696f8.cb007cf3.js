(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{376:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=i,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return t?a.a.createElement(m,r(r({ref:n},p),{},{components:t})):a.a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,c[1]=r;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),o=(t(0),t(376)),c=["components"],r={id:"policy_packages",title:"Policy Packages"},l={unversionedId:"policy_packages",id:"policy_packages",isDocsHomePage:!1,title:"Policy Packages",description:"Overview",source:"@site/../docs/policy_packages.md",sourceDirName:".",slug:"/policy_packages",permalink:"/documentation/policy_packages",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/policy_packages.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646040190,formattedLastUpdatedAt:"2/28/2022",frontMatter:{id:"policy_packages",title:"Policy Packages"},sidebar:"docs",previous:{title:"Component development leads",permalink:"/documentation/component_leads"},next:{title:"Notifications",permalink:"/documentation/notifications"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Creating a policy package",id:"creating-a-policy-package",children:[]},{value:"Deploying Policy Packages in containers",id:"deploying-policy-packages-in-containers",children:[{value:"Installing the policy package",id:"installing-the-policy-package",children:[]},{value:"Adding the policy package to the server&#39;s PYTHONPATH",id:"adding-the-policy-package-to-the-servers-pythonpath",children:[]},{value:"Specifying the policy package in the configuration file",id:"specifying-the-policy-package-in-the-configuration-file",children:[]}]}],s={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Policy packages are separate Python packages that can be used to add\nexperiment-specific customisations to Rucio. They typically customise\nRucio's handling of permissions and schema as well as optionally adding\ntheir own algorithms for various purposes, such as lfn to pfn conversion\nand surl construction."),Object(o.b)("p",null,"Policy packages may be installed from a Python package repository such\nas ",Object(o.b)("a",{parentName:"p",href:"https://pypi.python.org/"},"PyPi")," or they may simply be installed in a\nlocal directory. In the latter case this directory will need to be added\nto the Rucio server's ",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH")," environment variable."),Object(o.b)("p",null,"The name of the policy package in use is specified by the ",Object(o.b)("inlineCode",{parentName:"p"},"package")," value\nin the ",Object(o.b)("inlineCode",{parentName:"p"},"policy")," section of the Rucio configuration file. Alternatively,\nthe package can be specified by the ",Object(o.b)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE")," environment\nvariable (if both are set, the environment variable takes priority). If\nno package is specified, a built in generic policy will be used. If a\npackage is specified but cannot be loaded, Rucio will exit with an error."),Object(o.b)("p",null,"Multi-VO Rucio installations can load a different policy package for each\nVO. In this case, the configuration parameter or environment variable name\nis suffixed with the VO name (for example, ",Object(o.b)("inlineCode",{parentName:"p"},"package-vo1")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE_VO1"),")."),Object(o.b)("h2",{id:"creating-a-policy-package"},"Creating a policy package"),Object(o.b)("p",null,"The structure of a policy package is very simple. It contains the\nfollowing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"permission.py")," module implementing permission\ncustomisations."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"schema.py")," module implementing schema customisations."),Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"__init__.py")," file that can optionally return a dictionary of\nalgorithms provided by the package."),Object(o.b)("li",{parentName:"ul"},"It should also contain a SUPPORTED_VERSION field.")),Object(o.b)("p",null,"The easiest way to create the ",Object(o.b)("inlineCode",{parentName:"p"},"permission.py")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"schema.py")," modules is to modify the generic versions from\nthe Rucio codebase. These can be found in\n",Object(o.b)("inlineCode",{parentName:"p"},"lib/rucio/core/permission/generic.py")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"lib/rucio/common/schema/generic.py")," respectively."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"has_permission")," function you may wish to default to\nthe generic permission checks if your experiment does not need specific\nfunctionality for a particular action, or so that new actions added to\nRucio will work without your policy package having to be updated. This\nfallback can be implemented with code similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import rucio.core.permission.generic\nif action not in perm:\n    return rucio.core.permission.generic.has_permission(issuer, action, kwargs)\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"__init__.py")," should include a\n",Object(o.b)("inlineCode",{parentName:"p"},"SUPPORTED_VERSION")," field indicating the version of Rucio\nthat your package was developed against. This may be checked by Rucio in\nthe event that the policy package interface changes in the future.\nExample:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'SUPPORTED_VERSION = "1.20.7"\n')),Object(o.b)("p",null,"It can also contain an optional function called ",Object(o.b)("inlineCode",{parentName:"p"},"get_algorithms"),' that\nreturns a dictionary of custom algorithms implemented within the package.\nIn fact, this structure should be a "dictionary of dictionaries" where\nthe outer dictionary contains algorithm types, and each inner\ndictionary contains all the algorithms provided by the package for that\ntype. Currently supported types are ',Object(o.b)("inlineCode",{parentName:"p"},"surl")," for SURL algorithms,\n",Object(o.b)("inlineCode",{parentName:"p"},"lfn2pfn")," for LFN2PFN algorithms, and ",Object(o.b)("inlineCode",{parentName:"p"},"scope")," for scope extraction\nalgorithms."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def get_algorithms():\n    return { 'surl':\n             { 'voname_surl': construct_surl_voname },\n         'lfn2pfn':\n         { 'voname_lfn2pfn': lfn2pfn_voname },\n         'scope':\n         { 'voname_extract_scope': extract_scope_voname } }\n")),Object(o.b)("p",null,"In all cases the names used to register the functions must be prefixed\nwith the name of the virtual organisation that owns the policy package,\nto avoid naming conflicts on multi-VO Rucio installations."),Object(o.b)("h2",{id:"deploying-policy-packages-in-containers"},"Deploying Policy Packages in containers"),Object(o.b)("p",null,"It is now common to deploy Rucio using containers managed by software\nsuch as Docker and Kubernetes. This section of the documentation is\nintended to give guidance on how policy packages can be deployed in\nthis type of environment."),Object(o.b)("p",null,"Broadly speaking, three things must happen in order for a policy\npackage to be deployed successfully:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The policy package code must be available to the Rucio server\n(and possibly other components such as daemons)."),Object(o.b)("li",{parentName:"ol"},"The directory containing the policy package must be in the server's\n",Object(o.b)("inlineCode",{parentName:"li"},"PYTHONPATH"),"."),Object(o.b)("li",{parentName:"ol"},"The policy package name must be set in the Rucio configuration file,\nor using the ",Object(o.b)("inlineCode",{parentName:"li"},"RUCIO_POLICY_PACKAGE")," environment variable.")),Object(o.b)("h3",{id:"installing-the-policy-package"},"Installing the policy package"),Object(o.b)("p",null,"There are a few possible ways to get the policy package code into the\ncontainer where the server runs. One way is to build a custom\nexperiment-specific container image based on the generic Rucio server\nimage, and to install the policy package at build time in the\n",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),", either by directly copying the files in, or by installing\nit from some sort of repository. For experiments that already customise\nthe container image, this is likely to be the easiest option."),Object(o.b)("p",null,"Alternatively, the standard Rucio container can be used and a volume\ncontaining the policy package files can be mounted at run time (using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"-v")," or ",Object(o.b)("inlineCode",{parentName:"p"},"--volume")," command line flag). When using Kubernetes, there\nis also a third possibility: use an\n",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"init container"),"\nto install the policy package onto a shared volume, which is then mounted\nby the server container when it starts up."),Object(o.b)("h3",{id:"adding-the-policy-package-to-the-servers-pythonpath"},"Adding the policy package to the server's PYTHONPATH"),Object(o.b)("p",null,"It is possible to set environment variables within the container when\nstarting it (using Docker's ",Object(o.b)("inlineCode",{parentName:"p"},"-e")," command line flag). This can be used to\nset ",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH"),", however this will replace the original value rather\nthan appending to it, so there is a risk of removing other important\nitems from the path. A safer option is to override Rucio's\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-entrypoint.sh")," script and instead use a script that appends the\npolicy package's directory to ",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH")," before starting the HTTP server.\nThis can be done either at build time in the ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),", or at run time\nusing the ",Object(o.b)("inlineCode",{parentName:"p"},"--entrypoint")," command line option."),Object(o.b)("p",null,"When deploying using Kubernetes and Helm charts, it is possible to specify\nthe policy package directory in the ",Object(o.b)("inlineCode",{parentName:"p"},"optional_config:")," section of\n",Object(o.b)("inlineCode",{parentName:"p"},"values.yaml"),". This is then propagated to the container as an environment\nvariable, which can be added to ",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH")," by the entry point script. For\nexample, include this in ",Object(o.b)("inlineCode",{parentName:"p"},"values.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"optional_config:\n  policy_pkg_path: /opt/rucio/policy\n")),Object(o.b)("p",null,"This will appear in the container's environment as a variable called\n",Object(o.b)("inlineCode",{parentName:"p"},"POLICY_PKG_PATH"),", which can be added to ",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH")," by the entry point\nscript before starting the server:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'if [ ! -z "$POLICY_PKG_PATH" ]; then\n    export PYTHONPATH=${POLICY_PKG_PATH}:${PYTHONPATH:+:}${PYTHONPATH}\nfi\n')),Object(o.b)("h3",{id:"specifying-the-policy-package-in-the-configuration-file"},"Specifying the policy package in the configuration file"),Object(o.b)("p",null,"It is likely that most experiments are already customising the Rucio\nconfiguration file, in which case the policy package (",Object(o.b)("inlineCode",{parentName:"p"},"package = name")," in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"[policy]")," section) can simply be added to the existing customised file.\nAlternatively, the package name can be set in the ",Object(o.b)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE"),"\nenvironment variable (see previous section for how to pass environment\nvariables into the server container)."),Object(o.b)("p",null,"When deploying using Kubernetes and Helm charts, it is possible to specify\nconfiguration options in ",Object(o.b)("inlineCode",{parentName:"p"},"values.yaml"),". Values included in the ",Object(o.b)("inlineCode",{parentName:"p"},"config:"),"\nsection of this file are automatically merged into ",Object(o.b)("inlineCode",{parentName:"p"},"rucio.cfg")," by the\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-entrypoint.sh")," script, so the policy package can be set as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"config:\n  policy:\n    package: packagename\n")))}b.isMDXComponent=!0}}]);