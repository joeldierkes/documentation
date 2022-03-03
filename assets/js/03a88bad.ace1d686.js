(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),d=o,p=b["".concat(a,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),i=(n(0),n(377)),a=["components"],c={id:"index",title:"Welcome to Rucio's documentation!",sidebar_label:"Welcome!",slug:"/"},u={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Welcome to Rucio's documentation!",description:"Rucio is a project that provides services and associated libraries for allowing",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/index.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646241928,formattedLastUpdatedAt:"3/2/2022",sidebar_label:"Welcome!",frontMatter:{id:"index",title:"Welcome to Rucio's documentation!",sidebar_label:"Welcome!",slug:"/"},sidebar:"docs",next:{title:"Before you get started",permalink:"/documentation/before_you_get_started"}},l=[{value:"Before You Get Started",id:"before-you-get-started",children:[]},{value:"Try Rucio",id:"try-rucio",children:[]},{value:"Rucio User Playground",id:"rucio-user-playground",children:[]},{value:"Rucio Operator Documentation",id:"rucio-operator-documentation",children:[]},{value:"Rucio Developer Documentation",id:"rucio-developer-documentation",children:[]},{value:"Contributing to the Documentation",id:"contributing-to-the-documentation",children:[]},{value:"About Us",id:"about-us",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rucio is a project that provides services and associated libraries for allowing\nscientific collaborations to manage large volumes of data spread across\nfacilities at multiple institutions and organisations. Rucio has been developed\nby ",Object(i.b)("a",{parentName:"p",href:"https://atlas.cern/"},"the ATLAS experiment")),Object(i.b)("p",null,"Rucio offers advanced features, is highly scalable, and modular. It is a data\nmanagement solution that could cover the needs of different communities in the\nscientific domain (e.g., HEP, astronomy, biology)."),Object(i.b)("p",null,"Below are some resources to help you get you started on your journey."),Object(i.b)("h2",{id:"before-you-get-started"},Object(i.b)("a",{parentName:"h2",href:"/documentation/before_you_get_started"},"Before You Get Started")),Object(i.b)("p",null,"What exactly is Rucio? What were the motivations behind developing such a\nsystem? Who uses it? What powers these systems? Answers to all these questions\nand more can be found by browsing through the sub-sections of this topic."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/what_is_rucio"},"What is Rucio?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/main_components"},"Main Components")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/additional_layers_and_resources"},"Additional layers and Resources")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/concepts"},"Concepts & Terminology")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/releasepolicy"},"Release Policy"))),Object(i.b)("h2",{id:"try-rucio"},"Try Rucio"),Object(i.b)("p",null,"Get your hands dirty by trying to setup your very own demo environment on your\nlocal laptop/desktop. Make sure you read the pre-requisites section before\nstarting off, though!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"setting_up_demo"},"Pre-requisites")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"setting_up_demo"},"Setting up Demo environment")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/bin"},"Rucio executables"))),Object(i.b)("h2",{id:"rucio-user-playground"},"Rucio User Playground"),Object(i.b)("p",null,"Congratulations on setting up your Rucio environment! Let us now have a look at\nsome of the common things you can do using Rucio by setting up the Rucio\nclient. Also, this section will introduce you to some common CLI commands that\nyou, as a user, might find helpful when working with Rucio."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/setting_up_the_rucio_client"},"Setting up the Rucio Client")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/using_the_client"},"Rucio CLI playground"))),Object(i.b)("h2",{id:"rucio-operator-documentation"},"Rucio Operator Documentation"),Object(i.b)("p",null,"This section of the documentation deals with some of the material that an\noperator or administrator of a Rucio environment would require. For example, how\nto install a server or some quick tips for working with the administrative\nCLI. Take a deep dive, but not before you ensure you've read through the\npre-requisites section under each of the topics!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/installing_server"},"Installing Rucio Server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/installing_daemons"},"Installing Rucio Daemons")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/monitoring"},"Monitoring")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/configuration_parameters"},"Configuration parameters"))),Object(i.b)("h2",{id:"rucio-developer-documentation"},"Rucio Developer Documentation"),Object(i.b)("p",null,"Whether you want to develop with Rucio or contribute to the project, the\nDeveloper documentation will help you get started. Peruse some common REST API &\nClient API references that are directly derived from Rucio's python\nlibraries. We also have a contribution guide for those who wish to pitch in."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rucio_client_api"},"Client API Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"rucio_rest_api"},"REST API Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"database"},"Database")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"configure-rucio-globus"},"Configuring Rucio to use Globus as an Online Transfer\nTool")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"contributing"},"Contributing guide"))),Object(i.b)("h2",{id:"contributing-to-the-documentation"},"Contributing to the Documentation"),Object(i.b)("p",null,"Documentation is always a work in progress & we welcome both, qualitative and\ntechnical contributions from the community. Make sure you read through this\nsection & understand the pre-requisites before you submit your first PR!"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/types_of_pages"},"Types of pages")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/contribution_guide_for_documentation"},"Contribution Guide for Documentation"))),Object(i.b)("h2",{id:"about-us"},"About Us"),Object(i.b)("p",null,"Learn more about the brilliant minds pioneering the development & maintenance of\nRucio in this section. Should you wish to get in touch with us, we've also\nincluded several ways of doing so in the ",Object(i.b)("strong",{parentName:"p"},"Contact Us")," section."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/about_our_contributors"},"About Our Contributors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/documentation/contact_us"},"Contact Us"))))}b.isMDXComponent=!0}}]);