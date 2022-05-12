(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(387)),i=["components"],c={title:"Running rucio-judge-evaluator"},s={unversionedId:"bin/rucio-judge-evaluator",id:"bin/rucio-judge-evaluator",isDocsHomePage:!1,title:"Running rucio-judge-evaluator",description:"`",source:"@site/../docs/bin/rucio-judge-evaluator.md",sourceDirName:"bin",slug:"/bin/rucio-judge-evaluator",permalink:"/documentation/bin/rucio-judge-evaluator",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-judge-evaluator.md",version:"current",frontMatter:{title:"Running rucio-judge-evaluator"},sidebar:"docs",previous:{title:"Running rucio-judge-cleaner",permalink:"/documentation/bin/rucio-judge-cleaner"},next:{title:"Running rucio-judge-injector",permalink:"/documentation/bin/rucio-judge-injector"}},l=[],d={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"usage: rucio-judge-evaluator [-h] [--run-once] [--threads THREADS]\n                             [--sleep-time SLEEP_TIME] [--did-limit DID_LIMIT]\n\nThe Judge-Evaluator daemon is responsible for execution and reevaluation of\nreplication rules. First it checks if there are DIDs that have changed content\ne.g. attached or detached DIDs.In case of a new attachment, the replication\nrule for the dataset has to be applied to the attached DID, too. If the\nattached DID has already a replica on a RSE that satisfies the RSE expression\nof the rule, then the lock counter of that replica gets increased. If it does\nnot have any replica satisfying the rule, then a new replica has to be\ncreated. In case of a new detachment, the replica has to be removed or the\nlock counter of the replica has to be decreased, depending on which RSE the\nreplica exist. If the DID is a dataset, its properties like size and length\nalso get updated and also an entry is saved to mark a change for possible\ncollection replicas which have to be updated by another daemon.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n  --did-limit DID_LIMIT\n                        Maximum number of dids to evaluate\n\nSame RSEs: Create a dataset with a replication rule and upload a file to the\nsame RSE. Then attach it to the dataset:: $ rucio add-dataset mock:dataset $\nrucio add-rule mock:dataset 1 MOCK $ rucio upload --scope mock --rse MOCK\n--name file filename.txt $ rucio attach mock:dataset mock:file Check the rules\nand locks for the dataset and the replica:: $ rucio list-rules mock:dataset ID\nACCOUNT SCOPE:NAME STATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC)\nCREATED (UTC) -------------------------------- --------- ------------\n---------------------- ---------------- -------- ---------------\n------------------- e95941c165d54e38b6e46990de06d3d4 root mock:dataset\nOK[0/0/0] MOCK 1 2018-12-03 12:35:43 $ rucio list-rule mock:file ID ACCOUNT\nSCOPE:NAME STATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED\n(UTC) -------------------------------- --------- ------------\n---------------------- ---------------- -------- ---------------\n------------------- cfec9a944cdd4543b7267a34a2584631 root mock:file OK[1/0/0]\nMOCK 1 2018-12-11 08:29:49 $ python from rucio.db.sqla import session, models\nfrom rucio.core.rse import get_rse_id rse_id = get_rse_id('MOCK')\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().lock_cnt // 1 There is one rule for the\ndataset which we created before and one lock and one rule for the replica\nwhich got created with the upload of the file. Run the daemon:: $ rucio-judge-\nevaluator --run-once Check the locks for the replica again:: $ python from\nrucio.db.sqla import session, models from rucio.core.rse import get_rse_id\nrse_id = get_rse_id('MOCK')\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().lock_cnt // 2 The replica of the DID\nmock:file has now 2 locks on RSE MOCK, because it is protected by the\nreplication rule of the dataset and the first replication rule Different RSEs:\nCreate a dataset with a replication rule and upload a file to another RSE.\nThen attach it to the dataset:: $ rucio add-dataset mock:dataset $ rucio add-\nrule mock:dataset 1 MOCK $ rucio upload --scope mock --rse MOCK2 --name file\nfilename.txt $ rucio attach mock:dataset mock:file Check the rules and locks\nfor the dataset and the replica:: $ rucio list-rules mock:dataset ID ACCOUNT\nSCOPE:NAME STATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED\n(UTC) -------------------------------- --------- ------------\n---------------------- ---------------- -------- ---------------\n------------------- e95941c165d54e38b6e46990de06d3d4 root mock:dataset\nOK[0/0/0] MOCK 1 2018-12-03 12:35:43 $ rucio list-rule mock:file ID ACCOUNT\nSCOPE:NAME STATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED\n(UTC) -------------------------------- --------- ------------\n---------------------- ---------------- -------- ---------------\n------------------- cfec9a944cdd4543b7267a34a2584631 root mock:file OK[1/0/0]\nMOCK2 1 2018-12-11 08:29:49 $ python from rucio.db.sqla import session, models\nfrom rucio.core.rse import get_rse_id rse_id = get_rse_id('MOCK2')\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().lock_cnt // 1 There is one rule for the\ndataset which we created before and one lock and one rule for the replica\nwhich got created with the upload of the file. Run the daemon:: $ rucio-judge-\nevaluator --run-once Check the replicas for the DID mock:file:: $ python from\nrucio.db.sqla import session, models\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock').first() // [{'name': 'file','lock_cnt': 1, 'state': COPYING,\n'scope': 'mock', 'rse_id': 'f81f366593754c01b0c340fa5ea0ab90'}, // {'scope':\n'mock', 'rse_id': '1330d5daee37474c88ba888101d7b859', 'name': 'file', 'state':\nAVAIABLE, 'lock_cnt': 1}] The DID mock:file has now two replicas with one lock\neach. As the file replica is attached to the dataset and the rule for the\ndataset specifies another RSE MOCK instead of the upload RSE, it has to be\nreplicated to this RSE. Therefor a second replica in state COPYING got created\non RSE MOCK.\n")))}u.isMDXComponent=!0},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,p=u["".concat(i,".").concat(f)]||u[f]||h[f]||a;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);