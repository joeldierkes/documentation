(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return s}));var o=n(3),l=n(7),r=(n(0),n(412)),c=["components"],b={title:"AccountLimitClient"},i={unversionedId:"client_api/accountlimitclient",id:"client_api/accountlimitclient",isDocsHomePage:!1,title:"AccountLimitClient",description:"set\\account\\limit",source:"@site/../docs/client_api/accountlimitclient.md",sourceDirName:"client_api",slug:"/client_api/accountlimitclient",permalink:"/documentation/client_api/accountlimitclient",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/accountlimitclient.md",version:"current",frontMatter:{title:"AccountLimitClient"},sidebar:"docs",previous:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"},next:{title:"BaseClient",permalink:"/documentation/client_api/baseclient"}},a=[{value:"set_account_limit",id:"set_account_limit",children:[]},{value:"delete_account_limit",id:"delete_account_limit",children:[]},{value:"set_local_account_limit",id:"set_local_account_limit",children:[]},{value:"delete_local_account_limit",id:"delete_local_account_limit",children:[]},{value:"set_global_account_limit",id:"set_global_account_limit",children:[]},{value:"delete_global_account_limit",id:"delete_global_account_limit",children:[]}],u={toc:a};function s(e){var t=e.components,n=Object(l.a)(e,c);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"set_account_limit"},"set","_","account","_","limit"),Object(r.b)("p",null,"Sets an account limit for a given limit scope."),Object(r.b)("table",{style:{border:"none"}},Object(r.b)("tbody",null,Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,"  True if quota was created successfully else False."))))),Object(r.b)("h2",{id:"delete_account_limit"},"delete","_","account","_","limit"),Object(r.b)("p",null,"Deletes an account limit for a given limit scope."),Object(r.b)("table",{style:{border:"none"}},Object(r.b)("tbody",null,Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,"  True if quota was created successfully else False."))))),Object(r.b)("h2",{id:"set_local_account_limit"},"set","_","local","_","account","_","limit"),Object(r.b)("p",null,"Sends the request to set an account limit for an account."),Object(r.b)("table",{style:{border:"none"}},Object(r.b)("tbody",null,Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,"  True if quota was created successfully else False."))))),Object(r.b)("h2",{id:"delete_local_account_limit"},"delete","_","local","_","account","_","limit"),Object(r.b)("p",null,"Sends the request to remove an account limit."),Object(r.b)("table",{style:{border:"none"}},Object(r.b)("tbody",null,Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Raises"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,"  True if quota was removed successfully. False otherwise."))))),Object(r.b)("h2",{id:"set_global_account_limit"},"set","_","global","_","account","_","limit"),Object(r.b)("p",null,"Sends the request to set a global account limit for an account."),Object(r.b)("table",{style:{border:"none"}},Object(r.b)("tbody",null,Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,"  True if quota was created successfully else False."))))),Object(r.b)("h2",{id:"delete_global_account_limit"},"delete","_","global","_","account","_","limit"),Object(r.b)("p",null,"Sends the request to remove a global account limit."),Object(r.b)("table",{style:{border:"none"}},Object(r.b)("tbody",null,Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Raises"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),Object(r.b)("tr",{style:{border:"none"}},Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),":")),Object(r.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(r.b)("p",null,"  True if quota was removed successfully. False otherwise."))))))}s.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var o=n(0),l=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=l.a.createContext({}),u=function(e){var t=l.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=u(e.components);return l.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,O=s["".concat(c,".").concat(d)]||s[d]||p[d]||r;return n?l.a.createElement(O,b(b({ref:t},a),{},{components:n})):l.a.createElement(O,b({ref:t},a))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:o,c[1]=b;for(var a=2;a<r;a++)c[a]=n[a];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);