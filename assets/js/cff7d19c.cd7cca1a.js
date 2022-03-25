(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(381)),i=["components"],c={id:"setting_up_demo",title:"Setting up a Rucio demo environment"},s={unversionedId:"setting_up_demo",id:"setting_up_demo",isDocsHomePage:!1,title:"Setting up a Rucio demo environment",description:"Prerequisites",source:"@site/../docs/setting_up_demo.md",sourceDirName:".",slug:"/setting_up_demo",permalink:"/documentation/setting_up_demo",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/setting_up_demo.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1648218602,formattedLastUpdatedAt:"3/25/2022",frontMatter:{id:"setting_up_demo",title:"Setting up a Rucio demo environment"},sidebar:"docs",previous:{title:"Policy Packages",permalink:"/documentation/policy_packages"},next:{title:"Developing with Rucio",permalink:"/documentation/developing_with_rucio"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Preparing the environment",id:"preparing-the-environment",children:[]},{value:"Using the standard environment",id:"using-the-standard-environment",children:[]},{value:"Using the environment including storage",id:"using-the-environment-including-storage",children:[]},{value:"Using the environment including monitoring",id:"using-the-environment-including-monitoring",children:[]},{value:"Development",id:"development",children:[]},{value:"Development tricks",id:"development-tricks",children:[{value:"Server changes",id:"server-changes",children:[]},{value:"Database access",id:"database-access",children:[]},{value:"Docker is eating my disk space",id:"docker-is-eating-my-disk-space",children:[]},{value:"Where do I find the Dockerfile",id:"where-do-i-find-the-dockerfile",children:[]},{value:"I need a Docker based on another branch! (not rucio/master)",id:"i-need-a-docker-based-on-another-branch-not-ruciomaster",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"We provide a containerised version of the Rucio development environment\nfor a quick start. Our containers are ready-made for Docker, which means\nyou need to have a working Docker installation. To install Docker for\nyour platform, please refer to the ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/install/"},Object(r.b)("strong",{parentName:"a"},"Docker installation\nguide")),", for example, for CentOS\n",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/docker-ce/centos/"},Object(r.b)("strong",{parentName:"a"},"follow these instructions for the Docker Community\nEdition")),".\nPlease make sure that you install this recent Docker version especially\nif you are on CentOS, i.e. its default version is ancient and does not\nsupport some features we rely on."),Object(r.b)("p",null,"Start the Docker daemon with ","[sudo systemctl start docker]","{.title-ref}.\nYou can confirm that Docker is running properly by executing (might need\n",Object(r.b)("inlineCode",{parentName:"p"},"sudo"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run hello-world\n")),Object(r.b)("p",null,"If successful, this will print an informational message telling you that\nyou are ready to go. Now, also install the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),"\nhelper tool with ",Object(r.b)("inlineCode",{parentName:"p"},"sudo yum install docker-compose")," (might\nneed ",Object(r.b)("a",{parentName:"p",href:"https://fedoraproject.org/wiki/EPEL"},Object(r.b)("strong",{parentName:"a"},"EPEL"))," enabled). You are now\nready to install the Rucio development environment."),Object(r.b)("h2",{id:"preparing-the-environment"},"Preparing the environment"),Object(r.b)("p",null,"The first step is to check if SELinux is running. SELinux will block\naccess to the directories mounted inside the container, and so depending\non you node might need to be put in permissive mode with ",Object(r.b)("inlineCode",{parentName:"p"},"setenforce\npermissive"),"."),Object(r.b)("p",null,"The second step is to fork the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio"},Object(r.b)("strong",{parentName:"a"},"main Rucio repository on\nGitHub"))," by clicking the yellow Fork Star\nbutton, and then clone your private forked Rucio repository to your\n",Object(r.b)("inlineCode",{parentName:"p"},"/dev/rucio"),". Afterwards add the main upstream repository\nas an additional remote to be able to submit pull requests later on:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/dev\ngit clone git@github.com:<your_username>/rucio.git\ncd rucio\ngit remote add upstream git@github.com:rucio/rucio.git\ngit fetch --all\n")),Object(r.b)("p",null,"Now, ensure that the ",Object(r.b)("inlineCode",{parentName:"p"},".git/config")," is proper, i.e.,\nmentioning your full name and email address, and create the\n",Object(r.b)("inlineCode",{parentName:"p"},".githubtoken")," file that contains a full access token from\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/settings/tokens"},Object(r.b)("strong",{parentName:"a"},"Github Account Settings")),"."),Object(r.b)("p",null,"Next, startup the Rucio development environment with docker-compose.\nThere are three different types: a standard one to just run the\nunittests and do basic development, which includes just Rucio without\nany transfer capabilities. One slightly larger one, which includes the\nFile Transfer Service (FTS) and three XrootD storage servers to develop\nupload/download and transfers capabilities. And a third large one, which\nadds the full monitoring stack with Logstash, Elasticsearch, Kibana and\nGrafana."),Object(r.b)("h2",{id:"using-the-standard-environment"},"Using the standard environment"),Object(r.b)("p",null,"Run the containers using docker-compose (again might need\n",Object(r.b)("inlineCode",{parentName:"p"},"sudo"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose.yml up -d\n")),Object(r.b)("p",null,"And verify that it is running properly:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),Object(r.b)("p",null,"This should show you a few running containers: the Rucio server, the\nPostgreSQL database and the Graphite monitoring."),Object(r.b)("p",null,"Finally, you can jump into the container with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\n")),Object(r.b)("p",null,"To verify that everything is in order, you can now either run the full\nunit tests or only set up the database. Running the full testing suite\ntakes ","~","10 minutes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh\n")),Object(r.b)("p",null,"Alternatively, you can bootstrap the test environment once with the\n",Object(r.b)("inlineCode",{parentName:"p"},"-i"),"option and then selectively or repeatedly run test case\nmodules, test case groups, or even single test cases, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -i\npytest -v --full-trace lib/rucio/tests/test_replica.py\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore.test_delete_replicas_from_datasets\n")),Object(r.b)("h2",{id:"using-the-environment-including-storage"},"Using the environment including storage"),Object(r.b)("p",null,"Again run the containers using docker-compose:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose-storage.yml up -d\n")),Object(r.b)("p",null,"This should show you a few more running containers: the Rucio server,\nthe PostgreSQL database, FTS and its associated MySQL database, the\nGraphite monitoring, and three XrootD storage servers."),Object(r.b)("p",null,"With this container you can upload and download data to/from the storage\nand submit data transfers. To set this up, add the ",Object(r.b)("inlineCode",{parentName:"p"},"-r"),"\noption to the setup."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -ir\n")),Object(r.b)("p",null,"This creates a few random files and uploads them, creates a few datasets\nand containers, and requests a replication rule for the container, which\nstarts in state REPLICATING. To demonstrate the transfer capability, the\ndaemons can be run in single-execution mode in order:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info <rule-id>\n\nrucio-conveyor-submitter --run-once\nrucio-conveyor-poller --run-once  --older-than 0\nrucio-conveyor-finisher --run-once\n\nrucio rule-info <rule-id>\n")),Object(r.b)("p",null,"On the second display of the rule, its state has cleared to OK."),Object(r.b)("h2",{id:"using-the-environment-including-monitoring"},"Using the environment including monitoring"),Object(r.b)("p",null,"Again run the containers using docker-compose:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose-storage-monit.yml up -d\n")),Object(r.b)("p",null,"Now you will have the same containers as before plus a full monitoring\nstack with Logstash, Elasticsearch, Kibana and Grafana."),Object(r.b)("p",null,"To create some events and write them to Elasticsearch first run again\nthe tests as before:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -ir\n")),Object(r.b)("p",null,"Then you will have to run the transfer daemons (conveyor-","*",") and\nmessaging daemon (hermes) to send the events to ActiveMQ. There a script\nfor that which repeats these daemons in single execution mode from the\nsection in a loop:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"run_daemons\n")),Object(r.b)("p",null,"When all the daemons ran you will be able to find the events in Kibana.\nIf you run the docker environment on you local machine you can access\nKibana at ",Object(r.b)("inlineCode",{parentName:"p"},"<http://localhost:5601>"),". The necessary index pattern will be\nadded automatically. There is also one dashboard available in Kibana. If\nit is running on remote machine you can SSH forward it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"ssh -L 5601:127.0.0.1:5601 <hostname>\n")),Object(r.b)("p",null,"Additionally, there is also a Grafana server running with one simple\ndashboard. You can access it at ",Object(r.b)("inlineCode",{parentName:"p"},"<http://localhost:3000>"),'. The default\ncredentials are \\"admin/admin\\". Also ActiveMQ web console can be\naccessed at ',Object(r.b)("inlineCode",{parentName:"p"},"<http://localhost:8161>"),"."),Object(r.b)("p",null,"If you would like to continously create some transfers and events there\nare scripts available for that. Open two different shells and in one\nrun:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"create_monit_data\n")),Object(r.b)("p",null,"And in the other run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"run_daemons\n")),Object(r.b)("h2",{id:"development"},"Development"),Object(r.b)("p",null,"The idea for containerised development is that you use your host machine\nto edit the files, and test the changes within the container\nenvironment. On your host machine, you should be able to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/dev/rucio\nemacs <file>\n")),Object(r.b)("p",null,"To see your changes in action the recommended way is to jump twice into\nthe container in parallel. One terminal to follow the output of the\nRucio server with a shortcut to tail the logfiles\n(",Object(r.b)("inlineCode",{parentName:"p"},"logshow"),"), and one terminal to actually run interactive\ncommands:"),Object(r.b)("p",null,'From your host, get a separate Terminal 1 (the Rucio \\"server log\nshow\\"):'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\nlogshow\n")),Object(r.b)("p",null,'Terminal 1 can now be left open, and then from your host go into a new\nTerminal 2 (the \\"interactive\\" terminal):'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\nrucio whoami\n")),Object(r.b)("p",null,"The command will output in Terminal 2, and at the same time the server\ndebug output will be shown in Terminal 1."),Object(r.b)("p",null,"The same ",Object(r.b)("inlineCode",{parentName:"p"},"logshow")," is also available in the FTS container:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_fts_1 /bin/bash\nlogshow\n")),Object(r.b)("h2",{id:"development-tricks"},"Development tricks"),Object(r.b)("h3",{id:"server-changes"},"Server changes"),Object(r.b)("p",null,"If you edit server-side files, e.g. in ",Object(r.b)("inlineCode",{parentName:"p"},"lib/rucio/web"),", and\nyour changes are not showing up then it is usually helpful to flush the\nmemcache and force the webserver to restart without having to restart\nthe container. Inside the container execute:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"echo 'flush_all' | nc localhost 11211 && httpd -k graceful**\n")),Object(r.b)("h3",{id:"database-access"},"Database access"),Object(r.b)("p",null,"The default database is PostgreSQL, and ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," is\nconfigured to open its port to the host machine. Using your favourite\nSQL navigator, e.g., ",Object(r.b)("a",{parentName:"p",href:"https://dbeaver.io"},Object(r.b)("strong",{parentName:"a"},"DBeaver")),", you can connect to\nthe database using the default access on ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:5432")," to\ndatabase name ",Object(r.b)("inlineCode",{parentName:"p"},"rucio"),", schema name ",Object(r.b)("inlineCode",{parentName:"p"},"dev"),", with\nusername ",Object(r.b)("inlineCode",{parentName:"p"},"rucio")," and password ",Object(r.b)("inlineCode",{parentName:"p"},"secret"),"."),Object(r.b)("h3",{id:"docker-is-eating-my-disk-space"},"Docker is eating my disk space"),Object(r.b)("p",null,"You can reclaim this with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker system prune -f --volumes\n")),Object(r.b)("h3",{id:"where-do-i-find-the-dockerfile"},"Where do I find the Dockerfile"),Object(r.b)("p",null,"This container can be found on Dockerhub as\n",Object(r.b)("inlineCode",{parentName:"p"},"rucio/rucio-dev"),", and the corresponding\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/rucio/containers/tree/master/dev"},Object(r.b)("strong",{parentName:"a"},"Dockerfile"))," is\nalso available. It provides a Rucio environment which allows you to\nmount your local code in the containers ",Object(r.b)("inlineCode",{parentName:"p"},"bin"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"lib"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," directory. The container is\nset up to run against a PostgreSQL database with fsync and most\ndurability features for the WAL disabled to improve testing IO\nthroughput. Tests and checks can be run against the development code\nwithout having to rebuild the container."),Object(r.b)("h3",{id:"i-need-a-docker-based-on-another-branch-not-ruciomaster"},"I need a Docker based on another branch! (not rucio/master)"),Object(r.b)("p",null,"In such cases, you can download the Rucio container files and e.g. choose\nto modify the dev container before build:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd /opt\nsudo git clone https://github.com/rucio/containers\ncd ../containers/dev\n")),Object(r.b)("p",null,"Change anything you need, e.g. the code branch cloned to your docker\ncontainer:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# from\nRUN git clone https://github.com/rucio/rucio.git /tmp/rucio\n# to e.g.:\nRUN git clone --single-branch --branch next https://github.com/rucio/rucio.git /tmp/rucio\n#build your docker\nsudo docker build -t rucio/rucio-dev\n")),Object(r.b)("p",null,"Compose as usual using docker-compose:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd /opt/rucio\nsudo docker-compose --file etc/docker/dev/docker-compose.yml up -d\n")),Object(r.b)("p",null,"Start the daemons"),Object(r.b)("p",null,"Daemons are not running in the docker environment, but all daemons\nsupport single-execution mode with the ","-","-run-once argument. Reset the\nsystem first with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests_docker.sh -ir\n")),Object(r.b)("p",null,"Some files are created. Let\\'s add them to a new dataset:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio add-dataset test:mynewdataset\nrucio attach test:mynewdataset test:file1 test:file2 test:file3 test:file4\n")),Object(r.b)("p",null,"If you run the command below, the files are not in the RSE XRD3, but\nonly in XRD1 and 2.:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ **rucio list-file-replicas test:mynewdataset**\n+-------+-------+-----------+----------+-----------------------------------+\n| SCOPE | NAME  | FILESIZE  | ADLER32  | RSE: REPLICA                      |\n|-------|-------|-----------|----------|-----------------------------------|\n| test  | file1 | 10.486 MB | 141a641e | XRD1: root://xrd1:1094//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD1: root://xrd1:1094//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD2: root://xrd2:1095//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD2: root://xrd2:1095//rucio/... |\n+-------+-------+-----------+----------+-----------------------------------+\n")),Object(r.b)("p",null,"So let\\'s add a new rule on our new dataset to oblige Rucio to create\nreplicas also on XRD3:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio add-rule test:mynewdataset 1 XRD3**\n1aadd685d891400dba050ad43e71fea9**\n")),Object(r.b)("p",null,"Now we can check the status of the rule. We will see there are 4 files\nin ",Object(r.b)("inlineCode",{parentName:"p"},"Replicating")," state:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks**\nLocks OK/REPLICATING/STUCK: 0/4/0**\n")),Object(r.b)("p",null,"Now we can run the daemons. First the rule evaluation daemon\n(judge-evaluator) will pick up our rule. Then the transfer submitter\ndaemon (conveyor-submitter) will send the newly created transfers\nrequests to the FTS server. After that, the transfer state check daemon\n(conveyor-poller) will retrieve from FTS the transfer state information.\nFinally, the transfer sign-off daemon (conveyor-finisher) updates the\ninternal state of the Rucio catalogue to reflect the changes.:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio-judge-evaluator --run-once**\nrucio-conveyor-submitter --run-once**\nrucio-conveyor-poller --run-once**\nrucio-conveyor-finisher --run-once**\n")),Object(r.b)("p",null,"If we see the state of the rule now, we see the locks are OK:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks\nLocks OK/REPLICATING/STUCK: 4/0/0**\n")),Object(r.b)("p",null,"And if we look at the replicas of the dataset, we see the there are\nreplicas of the files also in XRD3:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-file-replicas test:mynewdataset\n+-------+-------+-----------+----------+-----------------------------------+\n| SCOPE | NAME  | FILESIZE  | ADLER32  | RSE: REPLICA                      |\n|-------|-------|-----------|----------|-----------------------------------|\n| test  | file1 | 10.486 MB | 141a641e | XRD3: root://xrd3:1096//rucio/... |\n| test  | file1 | 10.486 MB | 141a641e | XRD1: root://xrd1:1094//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD3: root://xrd3:1096//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD1: root://xrd1:1094//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD2: root://xrd2:1095//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD3: root://xrd3:1096//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD2: root://xrd2:1095//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD3: root://xrd3:1096//rucio/... |\n+-------+-------+-----------+----------+-----------------------------------+\n")))}d.isMDXComponent=!0},381:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);