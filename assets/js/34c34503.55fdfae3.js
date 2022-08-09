(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var l=n(3),r=n(7),b=(n(0),n(434)),a=["components"],i={title:"ReplicaClient"},o={unversionedId:"client_api/replicaclient",id:"client_api/replicaclient",isDocsHomePage:!1,title:"ReplicaClient",description:"quarantine\\_replicas",source:"@site/../docs/client_api/replicaclient.md",sourceDirName:"client_api",slug:"/client_api/replicaclient",permalink:"/documentation/client_api/replicaclient",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/replicaclient.md",version:"current",frontMatter:{title:"ReplicaClient"},sidebar:"docs",previous:{title:"PingClient",permalink:"/documentation/client_api/pingclient"},next:{title:"RequestClient",permalink:"/documentation/client_api/requestclient"}},c=[{value:"quarantine_replicas",id:"quarantine_replicas",children:[]},{value:"declare_bad_file_replicas",id:"declare_bad_file_replicas",children:[]},{value:"declare_bad_did_replicas",id:"declare_bad_did_replicas",children:[]},{value:"declare_suspicious_file_replicas",id:"declare_suspicious_file_replicas",children:[]},{value:"get_did_from_pfns",id:"get_did_from_pfns",children:[]},{value:"list_replicas",id:"list_replicas",children:[]},{value:"list_suspicious_replicas",id:"list_suspicious_replicas",children:[]},{value:"add_replica",id:"add_replica",children:[]},{value:"add_replicas",id:"add_replicas",children:[]},{value:"delete_replicas",id:"delete_replicas",children:[]},{value:"update_replicas_states",id:"update_replicas_states",children:[]},{value:"list_dataset_replicas",id:"list_dataset_replicas",children:[]},{value:"list_dataset_replicas_bulk",id:"list_dataset_replicas_bulk",children:[]},{value:"list_dataset_replicas_vp",id:"list_dataset_replicas_vp",children:[]},{value:"list_datasets_per_rse",id:"list_datasets_per_rse",children:[]},{value:"add_bad_pfns",id:"add_bad_pfns",children:[]},{value:"set_tombstone",id:"set_tombstone",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,a);return Object(b.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"quarantine_replicas"},"quarantine","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Add quaratined replicas for RSE."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"replicas"),": List of replica infos: {'scope': \\<scope",">"," (optional), 'name': \\<name",">"," (optional), 'path':\\<path",">"," (required)}."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": RSE name."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse_id"),": RSE id. Either RSE name or RSE id must be specified, but not both")))))),Object(b.b)("h2",{id:"declare_bad_file_replicas"},"declare","_","bad","_","file","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Declare a list of bad replicas."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"replicas"),": Either a list of PFNs (string) or a list of dicts {'scope': \\<scope",">",", 'name': \\<name",">",", 'rse_id': \\<rse_id",">"," or 'rse': \\<rse_name",">","}"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"reason"),": The reason of the loss.")))))),Object(b.b)("h2",{id:"declare_bad_did_replicas"},"declare","_","bad","_","did","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Declare a list of bad replicas."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": The RSE where the bad replicas reside"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"dids"),": The DIDs of the bad replicas"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"reason"),": The reason of the loss.")))))),Object(b.b)("h2",{id:"declare_suspicious_file_replicas"},"declare","_","suspicious","_","file","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Declare a list of bad replicas."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"pfns"),": The list of PFNs."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"reason"),": The reason of the loss.")))))),Object(b.b)("h2",{id:"get_did_from_pfns"},"get","_","did","_","from","_","pfns"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Get the DIDs associated to a PFN on one given RSE"),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"pfns"),": The list of PFNs."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": The RSE name."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  A list of dictionaries {pfn: {'scope': scope, 'name': name}}")))))),Object(b.b)("h2",{id:"list_replicas"},"list","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"List file replicas for a list of data identifiers (DIDs)."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"dids"),": The list of data identifiers (DIDs) like :\n","[{'scope': \\<scope1",">",", 'name': \\<name1",">","}, {'scope': \\<scope2",">",", 'name': \\<name2",">","}, ...]"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"schemes"),": A list of schemes to filter the replicas. (e.g. file, http, ...)"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"ignore_availability"),": Also include replicas from blocked RSEs into the list"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"metalink"),": ",Object(b.b)("inlineCode",{parentName:"p"},"False")," (default) retrieves as JSON,\n",Object(b.b)("inlineCode",{parentName:"p"},"True")," retrieves as metalink4+xml."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse_expression"),": The RSE expression to restrict replicas on a set of RSEs."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"client_location"),": Client location dictionary for PFN modification {'ip', 'fqdn', 'site', 'latitude', 'longitude'}"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"sort"),": Sort the replicas: ",Object(b.b)("inlineCode",{parentName:"p"},"geoip")," - based on src/dst IP topographical distance\n",Object(b.b)("inlineCode",{parentName:"p"},"closeness")," - based on src/dst closeness\n",Object(b.b)("inlineCode",{parentName:"p"},"dynamic")," - Rucio Dynamic Smart Sort (tm)"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"domain"),": Define the domain. None is fallback to 'wan', otherwise 'wan, 'lan', or 'all'"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"signature_lifetime"),": If supported, in seconds, restrict the lifetime of the signed PFN."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"nrandom"),": pick N random replicas. If the initial number of replicas is smaller than N, returns all replicas."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"resolve_archives"),": When set to True, find archives which contain the replicas."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"resolve_parents"),": When set to True, find all parent datasets which contain the replicas."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"updated_after"),": epoch timestamp or datetime object (UTC time), only return replicas updated after this time"))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  A list of dictionaries with replica information.")))))),Object(b.b)("h2",{id:"list_suspicious_replicas"},"list","_","suspicious","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"List file replicas tagged as suspicious."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse_expression"),": The RSE expression to restrict replicas on a set of RSEs."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"younger_than"),": Datetime object to select the replicas which were declared since younger_than date. Default value = 10 days ago."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"nattempts"),": The minimum number of replica appearances in the bad_replica DB table from younger_than date. Default value = 0."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"state"),": State of the replica, either 'BAD' or 'SUSPICIOUS'. No value returns replicas with either state.")))))),Object(b.b)("h2",{id:"add_replica"},"add","_","replica"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Add file replicas to a RSE."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": the RSE name."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"scope"),": The scope of the file."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"name"),": The name of the file."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"bytes_"),": The size in bytes."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"adler32"),": adler32 checksum."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"pfn"),": PFN of the file for non deterministic RSE."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"md5"),": md5 checksum."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"meta"),": Metadata attributes."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  True if files were created successfully.")))))),Object(b.b)("h2",{id:"add_replicas"},"add","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Bulk add file replicas to a RSE."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": the RSE name."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"files"),": The list of files. This is a list of DIDs like :\n","[{'scope': \\<scope1",">",", 'name': \\<name1",">","}, {'scope': \\<scope2",">",", 'name': \\<name2",">","}, ...]"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"ignore_availability"),": Ignore the RSE blocklsit."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  True if files were created successfully.")))))),Object(b.b)("h2",{id:"delete_replicas"},"delete","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Bulk delete file replicas from a RSE."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": the RSE name."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"files"),": The list of files. This is a list of DIDs like :\n","[{'scope': \\<scope1",">",", 'name': \\<name1",">","}, {'scope': \\<scope2",">",", 'name': \\<name2",">","}, ...]"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"ignore_availability"),": Ignore the RSE blocklist."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  True if files have been deleted successfully.")))))),Object(b.b)("h2",{id:"update_replicas_states"},"update","_","replicas","_","states"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Bulk update the file replicas states from a RSE."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": the RSE name."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"files"),": The list of files. This is a list of DIDs like :\n","[{'scope': \\<scope1",">",", 'name': \\<name1",">",", 'state': \\<state1",">","}, {'scope': \\<scope2",">",", 'name': \\<name2",">",", 'state': \\<state2",">","}, ...]",",\nwhere a state value can be either of:\n'A' (AVAILABLE)\n'U' (UNAVAILABLE)\n'C' (COPYING)\n'B' (BEING_DELETED)\n'D' (BAD)\n'T' (TEMPORARY_UNAVAILABLE)"))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  True if replica states have been updated successfully, otherwise an exception is raised.")))))),Object(b.b)("h2",{id:"list_dataset_replicas"},"list","_","dataset","_","replicas"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"List dataset replicas for a did (scope:name)."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"scope"),": The scope of the dataset."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"name"),": The name of the dataset."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"deep"),": Lookup at the file level."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  A list of dict dataset replicas.")))))),Object(b.b)("h2",{id:"list_dataset_replicas_bulk"},"list","_","dataset","_","replicas","_","bulk"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"List dataset replicas for a did (scope:name)."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"dids"),": The list of DIDs of the datasets."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  A list of dict dataset replicas.")))))),Object(b.b)("h2",{id:"list_dataset_replicas_vp"},"list","_","dataset","_","replicas","_","vp"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"List dataset replicas for a DID (scope:name) using the"),Object(b.b)("p",null,"Virtual Placement service."),Object(b.b)("p",null,"NOTICE: This is an RnD function and might change or go away at any time."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"scope"),": The scope of the dataset."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"name"),": The name of the dataset."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"deep"),": Lookup at the file level."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  If VP exists a list of dicts of sites")))))),Object(b.b)("h2",{id:"list_datasets_per_rse"},"list","_","datasets","_","per","_","rse"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"List datasets at a RSE."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"rse"),": the rse name."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"filters"),": dictionary of attributes by which the results should be filtered."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"limit"),": limit number."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  A list of dict dataset replicas.")))))),Object(b.b)("h2",{id:"add_bad_pfns"},"add","_","bad","_","pfns"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Declare a list of bad replicas."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"pfns"),": The list of PFNs."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"reason"),": The reason of the loss."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"state"),": The state of the replica. Either BAD, SUSPICIOUS, TEMPORARY_UNAVAILABLE"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"expires_at"),": Specify a timeout for the TEMPORARY_UNAVAILABLE replicas. None for BAD files."))),Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,"  True if PFNs were created successfully.")))))),Object(b.b)("h2",{id:"set_tombstone"},"set","_","tombstone"),Object(b.b)("span",{style:{"white-space":"pre"}},Object(b.b)("p",null,"Set a tombstone on a list of replicas."),Object(b.b)("table",{style:{border:"none"}},Object(b.b)("tbody",null,Object(b.b)("tr",{style:{border:"none"}},Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Arguments"),":")),Object(b.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"replicas"),": list of replicas.")))))))}p.isMDXComponent=!0},434:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var l=n(0),r=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=l,O=p["".concat(a,".").concat(u)]||p[u]||d[u]||b;return n?r.a.createElement(O,i(i({ref:t},c),{},{components:n})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,a=new Array(b);a[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<b;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);