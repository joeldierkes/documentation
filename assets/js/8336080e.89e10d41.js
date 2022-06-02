(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{247:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),r=(a(0),a(426)),o=["components"],s={id:"replica_workflow",title:"Typical Replica Workflow"},c={unversionedId:"replica_workflow",id:"replica_workflow",isDocsHomePage:!1,title:"Typical Replica Workflow",description:"This section gives an overview of what happens within Rucio, for a typical",source:"@site/../docs/replica_workflow.md",sourceDirName:".",slug:"/replica_workflow",permalink:"/documentation/replica_workflow",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/replica_workflow.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1654177078,formattedLastUpdatedAt:"6/2/2022",frontMatter:{id:"replica_workflow",title:"Typical Replica Workflow"},sidebar:"docs",previous:{title:"Subscriptions",permalink:"/documentation/subscriptions"},next:{title:"Release Policy",permalink:"/documentation/releasepolicy"}},l=[{value:"Replica paths on storage",id:"replica-paths-on-storage",children:[]},{value:"Deterministic algorithm based on hashes",id:"deterministic-algorithm-based-on-hashes",children:[]},{value:"Deterministic algorithm based on naming convention",id:"deterministic-algorithm-based-on-naming-convention",children:[]},{value:"Non-Deterministic algorithm based on parent dataset",id:"non-deterministic-algorithm-based-on-parent-dataset",children:[]},{value:"Replica is uploaded with the command line client",id:"replica-is-uploaded-with-the-command-line-client",children:[]},{value:"Replica is created by a replication rule",id:"replica-is-created-by-a-replication-rule",children:[]}],p={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section gives an overview of what happens within Rucio, for a typical\nreplica workflow. Two workflows are described: When a replica is uploaded to\nRucio via a client and when a replica is created by a site to site transfer due\nto the creation of a ",Object(r.b)("a",{parentName:"p",href:"/documentation/replica_management"},"replication rule"),"."),Object(r.b)("h2",{id:"replica-paths-on-storage"},"Replica paths on storage"),Object(r.b)("p",null,"Rucio has two basic paradigms in deciding the path for a replica on a specific\nstorage system. ",Object(r.b)("strong",{parentName:"p"},"Deterministic")," and ",Object(r.b)("strong",{parentName:"p"},"Non-deterministic")," paths. If we assume\na file whose data identifier is ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1"),", thus the scope is\n",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe")," and the name is ",Object(r.b)("inlineCode",{parentName:"p"},"test.file.1"),". In Rucio a deterministically created\npath is a path which can be generated solely knowing the scope and name of a\ndata identifier (Ignoring the static prefix of the storage endpoint). For a\nnon-deterministic path additional information describing the file is necessary,\nsuch as meta-data, the dataset the file belongs to, etc."),Object(r.b)("p",null,"Rucio supports pluggable algorithms for both deterministic and non-deterministic\nalgorithms. This section explains a few of them."),Object(r.b)("h2",{id:"deterministic-algorithm-based-on-hashes"},"Deterministic algorithm based on hashes"),Object(r.b)("p",null,"The hash deterministic algorithm is an algorithm commonly used in Rucio. The\nadvantage of this algorithm is that, due to the characteristics of cryptographic\nhash functions, the files are evenly distributed to directories. This can be an\nimportant characteristic for storage systems whose access performance degrades\nbased on the number of files in a directory."),Object(r.b)("p",null,"For a data identifier, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," a md5-hashsum is calculated\n",Object(r.b)("inlineCode",{parentName:"p"},"077c8119053bebb168d125034bff64ac"),". The generated path is then based on the\nfirst four characters of the hashsum. e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"/07/7c/user.jdoe/test.file.1"),"."),Object(r.b)("h2",{id:"deterministic-algorithm-based-on-naming-convention"},"Deterministic algorithm based on naming convention"),Object(r.b)("p",null,"If a specific naming convention is enforced on the filenames, a possible\ndeterministic algorithm can be based on it."),Object(r.b)("p",null,"For the data identifier ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," the first part of the filename\n(",Object(r.b)("inlineCode",{parentName:"p"},"test"),") is extracted and used to generate the path: ",Object(r.b)("inlineCode",{parentName:"p"},"/test/user.jdoe/file.1")),Object(r.b)("h2",{id:"non-deterministic-algorithm-based-on-parent-dataset"},"Non-Deterministic algorithm based on parent dataset"),Object(r.b)("p",null,"If the file is part of a dataset, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"data:dataset1234")," the dataset can be\nused in the path of the filename. This is useful for e.g. tape storage systems,\nto keep the files belonging to the same dataset on the same tape."),Object(r.b)("p",null,"For the data identifier ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," which is part of the dataset\n",Object(r.b)("inlineCode",{parentName:"p"},"data:dataset1234")," the generated path is:\n",Object(r.b)("inlineCode",{parentName:"p"},"/data/dataset1234/user.jdoe/test.file.1")),Object(r.b)("h2",{id:"replica-is-uploaded-with-the-command-line-client"},"Replica is uploaded with the command line client"),Object(r.b)("p",null,"This is a typical workflow when a user uploads multiple files, which are part of\na dataset, via the command line client."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The dataset ",Object(r.b)("inlineCode",{parentName:"p"},"test.dataset")," is being registered at the server.  All files, or\ndatasets are associated to a ",Object(r.b)("a",{parentName:"p",href:"/documentation/file_dataset_container"},"scope"),", if not\nspecifically mentioned the client will assume the default scope of the user,\nsuch as ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe"),". Thus the full data identifier for the dataset is\n",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.dataset"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The client queries the RSE information from the server. This not only gives a\nlist of prioritized write protocols to use but also the information if the\nRSE is a deterministic or non-deterministic one.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The file replica is registered as ",Object(r.b)("inlineCode",{parentName:"p"},"COPYING")," on the RSE.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Based on the identified naming algorithm of the RSE and the list of\nprioritized write protocols, the file URL is calculated.  e.g. using the hash\nalgorithm from above:\n",Object(r.b)("inlineCode",{parentName:"p"},"https://storageserver.organization.org/VO/data/07/7c/user.jdoe/test.file.1"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The file upload is done with the first prioritized protocol. If the upload\nfails, step 4 is repeated with the second prioritized protocol, etc.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the upload is successfully finished, the replica state is changed to\n",Object(r.b)("inlineCode",{parentName:"p"},"AVAILABLE"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Step 3-6 are repeated (done in parallel) with all other files part of the\nuploaded dataset."))),Object(r.b)("h2",{id:"replica-is-created-by-a-replication-rule"},"Replica is created by a replication rule"),Object(r.b)("p",null,"This is a typical workflow if a file already exists in Rucio but the user wants\nto replicate it to a different RSE."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The user creates a replication rule for the dataset ",Object(r.b)("inlineCode",{parentName:"p"},"user.jdoe:test.dataset"),"\nat the server.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Rucio server creates internal requests for each single file in the\ndataset and puts them in a queue to be read by the data transfer service.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The data transfer submitter picks these requests up and queries the\ndestination RSE information for each file.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Based on the identified naming algorithm of the destination RSE it creates\nthe destination URLs and creates the file replicas in ",Object(r.b)("inlineCode",{parentName:"p"},"COPYING")," state.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The transfer service then submits the transfer job to the connected transfer\ntool (e.g. FTS)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the transfers are finished the transfer tool notifies Rucio about the\ntransfer success and the transfer services mark the replicas as ",Object(r.b)("inlineCode",{parentName:"p"},"AVAILABLE"),"."))))}d.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(o,".").concat(h)]||d[h]||b[h]||r;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);