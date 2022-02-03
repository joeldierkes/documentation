(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),m=o,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(376)),i=["components"],c={id:"index",title:"Welcome to Rucio's documentation!",sidebar_label:"Welcome!",slug:"/"},u={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Welcome to Rucio's documentation!",description:"Rucio is a project that provides services and associated libraries for allowing",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/index.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643824426,formattedLastUpdatedAt:"2/2/2022",sidebar_label:"Welcome!",frontMatter:{id:"index",title:"Welcome to Rucio's documentation!",sidebar_label:"Welcome!",slug:"/"},sidebar:"docs",next:{title:"Before you get started",permalink:"/documentation/Before-you-get-started"}},l=[{value:"Before You Get Started",id:"before-you-get-started",children:[]},{value:"Try Rucio!",id:"try-rucio",children:[]},{value:"Rucio User Playground",id:"rucio-user-playground",children:[]},{value:"Rucio Operator Documentation",id:"rucio-operator-documentation",children:[]},{value:"Rucio Developer Documentation",id:"rucio-developer-documentation",children:[]},{value:"Contributing to the Documentation",id:"contributing-to-the-documentation",children:[]},{value:"About Us",id:"about-us",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Rucio is a project that provides services and associated libraries for allowing\nscientific collaborations to manage large volumes of data spread across\nfacilities at multiple institutions and organisations. Rucio has been developed\nby ",Object(a.b)("a",{parentName:"p",href:"https://atlas.cern/"},"the ATLAS experiment")),Object(a.b)("p",null,"Rucio offers advanced features, is highly scalable, and modular. It is a data\nmanagement solution that could cover the needs of different communities in the\nscientific domain (e.g., HEP, astronomy, biology)."),Object(a.b)("p",null,"Below are some resources to help you get you started on your journey."),Object(a.b)("h2",{id:"before-you-get-started"},Object(a.b)("a",{parentName:"h2",href:"Before-you-get-started"},"Before You Get Started")),Object(a.b)("p",null,"What exactly is Rucio? What were the motivations behind developing such a\nsystem? Who uses it? What powers these systems? Answers to all these questions\nand more can be found by browsing through the sub-sections of this topic."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/What-is-rucio"},"What is Rucio?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/Main-components-of-rucio"},"Main Components of Rucio")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/Additional-layers-and-Resources"},"Additional layers and Resources")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/concepts"},"Concepts & Terminology")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/releasepolicy"},"Release Policy"))),Object(a.b)("h2",{id:"try-rucio"},Object(a.b)("a",{parentName:"h2",href:"/documentation/Try-rucio"},"Try Rucio!")),Object(a.b)("p",null,"Get your hands dirty by trying to setup your very own demo environment on your\nlocal laptop/desktop. Make sure you read the pre-requisites section before\nstarting off, though!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"setting-up-demo"},"Pre-requisites")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"setting-up-demo"},"Setting up Demo environment")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/bin"},"Rucio executables"))),Object(a.b)("h2",{id:"rucio-user-playground"},"Rucio User Playground"),Object(a.b)("p",null,"Congratulations on setting up your Rucio environment! Let us now have a look at\nsome of the common things you can do using Rucio by setting up the Rucio\nclient. Also, this section will introduce you to some common CLI commands that\nyou, as a user, might find helpful when working with Rucio."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"setting-up-rucio-client"},"Setting up Rucio Client")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"using-rucio-client"},"Rucio CLI playground"))),Object(a.b)("h2",{id:"rucio-operator-documentation"},Object(a.b)("a",{parentName:"h2",href:"operator"},"Rucio Operator Documentation")),Object(a.b)("p",null,"This section of the documentation deals with some of the material that an\noperator or administrator of a Rucio environment would require. For example, how\nto install a server or some quick tips for working with the administrative\nCLI. Take a deep dive, but not before you ensure you've read through the\npre-requisites section under each of the topics!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"installing-rucio-server"},"Installing Rucio Server")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"installing-rucio-daemons"},"Installing Rucio Daemons")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/documentation/monitoring"},"Monitoring")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"configuration-parameters"},"Configuration parameters"))),Object(a.b)("h2",{id:"rucio-developer-documentation"},Object(a.b)("a",{parentName:"h2",href:"developer"},"Rucio Developer Documentation")),Object(a.b)("p",null,"Whether you want to develop with Rucio or contribute to the project, the\nDeveloper documentation will help you get started. Peruse some common REST API &\nClient API references that are directly derived from Rucio's python\nlibraries. We also have a contribution guide for those who wish to pitch in."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"rucio_client_api"},"Client API Documentation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"rucio_rest_api"},"REST API Documentation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"database"},"Database")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"configure-rucio-globus"},"Configuring Rucio to use Globus as an Online Transfer\nTool")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"contributing"},"Contributing guide"))),Object(a.b)("h2",{id:"contributing-to-the-documentation"},Object(a.b)("a",{parentName:"h2",href:"Contributing"},"Contributing to the Documentation")),Object(a.b)("p",null,"Documentation is always a work in progress & we welcome both, qualitative and\ntechnical contributions from the community. Make sure you read through this\nsection & understand the pre-requisites before you submit your first PR!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"page-types"},"Types of pages")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"contributing-improvements"},"Contributing Improvements")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"new-content-contribution-guide"},"New Content Contribution Guide"))),Object(a.b)("h2",{id:"about-us"},"About Us"),Object(a.b)("p",null,"Learn more about the brilliant minds pioneering the development & maintenance of\nRucio in this section. Should you wish to get in touch with us, we've also\nincluded several ways of doing so in the ",Object(a.b)("strong",{parentName:"p"},"Contact Us")," section."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"about-our-contributors"},"About Our Contributors")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"how-to-reach-us"},"Contact Us"))))}b.isMDXComponent=!0}}]);