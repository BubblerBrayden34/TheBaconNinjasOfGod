(function(zonevars) {
	var zonemasters = zonevars.zonemasters;
	var top_loc=null,top_href="",top_hash="";
	function getQueryHash() {
		top_hash = (top_hash=top_href.match(/[\?\&]cpmstarhash=([^\&\#]*)/))==null?"":"#"+top_hash[1];		
	}
	try { top_loc=window.top.location; top_href=top_loc.href; top_hash=top_loc.hash; } catch(err) {
		var top_win = window;
		try { while (top_win.parent && top_win.parent.document !== top_win.document && top_win.parent.document.location.href) { top_win = top_win.parent; } } catch(e) {}		
		try { top_loc = top_win.location; top_href = top_loc.href; } catch(e) {}
		getQueryHash();
	}
	if(!top_hash) getQueryHash();

    var x=(10+((x*7)%26)).toString(36)+(x=window.location.href.split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>1},0));
	var y=window.location.href.split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>1},0);y=(10+((y*7)%26)).toString(36)+y.toString(36);
	var z=window.location.href.split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>0},0);z=(10+((z*7)%26)).toString(36)+z.toString(36);
	var q=window.location.href.split('#')[0].split('').reduce(function(a,b){return(a<<5)-a+b.charCodeAt(0)>>>1},0);q=(10+((q*7)%26)).toString(36)+q.toString(36);
	var cpmstarx="cpmstarx";
	if(window[x]) window[y] = window[x];
	if(window[y]) window[z] = window[y];
	if(window[z]) window[q] = window[z];
	if(window[q]) window[cpmstarx] = window[q];
    
    var dev = top_hash == "#cpmstarDev";
	var staging = (top_hash == "#cpmstarStaging" || top_hash == "#urlzing");
	if(typeof window[cpmstarx]!=="object") window[x] = window[y] = window[z] = window[q] = window[cpmstarx] = {};
	
	if(typeof(window[cpmstarx].zonevars)==="object") return;
	window[cpmstarx].zonevars = zonevars;

	var ver = "1346";
	window[cpmstarx].zonevars.ver = ver;


	if(top_hash == "#urlzing") {
		var qs = new URLSearchParams(window.location.search);
		if(qs.has('cpmstarDev')) {
			dev = true;
		}
	}

	for(var i=0; i<zonemasters.length; i++) { //Insert all the zonemasters
		var zonemasterobj = (typeof zonemasters[i]==="string")?{path:'/cached/zonemasters/'+zonemasters[i]}:zonemasters[i];

		var s = document.createElement('script'); 
		s.type = 'text/javascript'; 
		s.async = true;
		
		var proto = (window.location.protocol == "http:")?"http:":"https:";
		if(zonemasterobj.host == null) {            
			if(dev) zonemasterobj.host = "dev.server.cpmstar.com";
			else if(staging) zonemasterobj.host = "staging.server.cpmstar.com";
			else if(proto == "https:") zonemasterobj.host = "ssl.cdne.cpmstar.com";
			else zonemasterobj.host = "cdn.cpmstar.com";
		}else{
			if(staging) {
				if(zonevars.jbcheck) zonevars.jbcheck.host = "staging.urlzing.com";				
				zonemasterobj.host = "staging.urlzing.com"; 				
			}
		}
		
		s.src = proto + "//" + zonemasterobj.host + zonemasterobj.path + "?ver="+ver;
		var s2=document.getElementsByTagName('script')[0];
		s2.parentNode.insertBefore(s, s2);
	}
})(
{
  "zonemasters": [
    "mobilemodules.js",
    {
      "path": "/cached/zonemasters/cpmstarjsgameapi.js",
      "api": "game"
    }
  ],
  "requests": {
    "hb": {
      "kind": "hb",
      "pbjsfile": "starprebid.js",
      "PREBID_TIMEOUT": 3000,
      "adUnits": [
        {
          "bids": [
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "18645471"
              },
              "campaignid": 455731,
              "campaignids": {
                "300x250": 455731
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "c35oTE5Vyr7PblrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 455754,
              "campaignids": {
                "300x250": 455754
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "New Zealand",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "c35oTE5Vyr7PblrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 456022,
              "campaignids": {
                "300x250": 456022
              },
              "discrep": 1.054216476145291,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "New Zealand",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696393"
              },
              "campaignid": 456216,
              "campaignids": {
                "300x250": 456216
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696393"
              },
              "campaignid": 456632,
              "campaignids": {
                "300x250": 456632
              },
              "discrep": 1.1009904496487128,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541079638"
              },
              "campaignid": 458586,
              "campaignids": {
                "300x250": 458586
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 459745,
              "campaignids": {
                "300x250": 459745
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 274658
              },
              "campaignid": 461413,
              "campaignids": {
                "300x250": 461413
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "779213"
              },
              "campaignid": 462171,
              "campaignids": {
                "300x250": 462171
              },
              "discrep": 4.31343885958672,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "51360",
                "ip": "%%IP%%"
              },
              "campaignid": 464192,
              "campaignids": {
                "300x250": 464192
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "testpb=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379387"
              },
              "campaignid": 464864,
              "campaignids": {
                "300x250": 464864
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "469216",
              "campaignids": {
                "300x250": 469216
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "QFEYA9KZH2qLSyRthreq3GJe"
              },
              "campaignid": "469230",
              "campaignids": {
                "300x250": 469230
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "66559",
                "ip": "%%IP%%"
              },
              "campaignid": 470046,
              "campaignids": {
                "300x250": 470046
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471569,
              "campaignids": {
                "300x250": 471569
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "473432"
                }
              },
              "campaignid": "473432",
              "campaignids": {
                "300x250": 473432
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "justbuild.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "boxfight.io",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "zonewars.io",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606535,
                "cur": "USD"
              },
              "campaignid": 478457,
              "campaignids": {
                "300x250": 478457
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "boxfight.io",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480645,
              "campaignids": {
                "300x250": 480645
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "438754"
              },
              "campaignid": 480883,
              "campaignids": {
                "300x250": 480883
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smilewanted",
              "params": {
                "zoneId": "cpmstar.com_hb_display"
              },
              "campaignid": 491294,
              "campaignids": {
                "300x250": 491294
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "WORLDWIDE",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smartadserver",
              "params": {
                "networkId": 4872,
                "siteId": 644032,
                "pageId": 1946819,
                "formatId": 129302
              },
              "campaignid": 492798,
              "campaignids": {
                "300x250": 492798
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493172"
              },
              "campaignid": "493172",
              "campaignids": {
                "300x250": 493172
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "insticator",
              "params": {
                "adUnitId": "01HVPQ7KMQYCF4D36QPK8FFRS6"
              },
              "campaignid": 493930,
              "campaignids": {
                "300x250": 493930
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "4f3255523a045142b589"
              },
              "campaignid": 493953,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "4f3255523a045142b589"
              },
              "campaignid": 493955,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493959"
              },
              "campaignid": "493959",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  300,
                  250
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83023
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$83023"
        },
        {
          "bids": [
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "18645477"
              },
              "campaignid": 455733,
              "campaignids": {
                "728x90": 455733
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "c35oTE5Vyr7PblrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 455753,
              "campaignids": {
                "728x90": 455753
              },
              "discrep": 1.054216476145291,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "New Zealand",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696395"
              },
              "campaignid": 456633,
              "campaignids": {
                "728x90": 456633
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541079637"
              },
              "campaignid": 458533,
              "campaignids": {
                "728x90": 458533
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 459730,
              "campaignids": {
                "728x90": 459730
              },
              "discrep": 0.9451795851049394,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "779214"
              },
              "campaignid": 462172,
              "campaignids": {
                "728x90": 462172
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "728",
                "height": "90",
                "placementId": "51361",
                "ip": "%%IP%%"
              },
              "campaignid": 463582,
              "campaignids": {
                "728x90": 463582
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "467467",
              "campaignids": {
                "728x90": 467467
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "QFEYA9KZH2qLSyRthreq3GJe"
              },
              "campaignid": "469229",
              "campaignids": {
                "728x90": 469229
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "728",
                "height": "90",
                "placementId": "66555",
                "ip": "%%IP%%"
              },
              "campaignid": 470045,
              "campaignids": {
                "728x90": 470045
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493173"
              },
              "campaignid": "493173",
              "campaignids": {
                "728x90": 493173
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smartadserver",
              "params": {
                "networkId": 4872,
                "siteId": 644032,
                "pageId": 1946819,
                "formatId": 129302
              },
              "campaignid": 493733,
              "campaignids": {
                "728x90": 493733
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  728,
                  90
                ],
                [
                  970,
                  90
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83024
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$83024"
        },
        {
          "bids": [
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "18645475"
              },
              "campaignid": 455732,
              "campaignids": {
                "300x250": 455732
              },
              "discrep": 0.577702307792742,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "c35oTE5Vyr7PblrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 455754,
              "campaignids": {
                "300x250": 455754
              },
              "discrep": 1.054216476145291,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "New Zealand",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696394"
              },
              "campaignid": 456217,
              "campaignids": {
                "300x250": 456217
              },
              "discrep": 1.2602374472604567,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "696394"
              },
              "campaignid": 456631,
              "campaignids": {
                "300x250": 456631
              },
              "discrep": 1.2602374472604567,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541079862"
              },
              "campaignid": 458585,
              "campaignids": {
                "300x250": 458585
              },
              "discrep": 1.3388994304685076,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 459746,
              "campaignids": {
                "300x250": 459746
              },
              "discrep": 0.9451795851049394,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 274658
              },
              "campaignid": 461414,
              "campaignids": {
                "300x250": 461414
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "779212"
              },
              "campaignid": 462170,
              "campaignids": {
                "300x250": 462170
              },
              "discrep": 0.8228301996697706,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "51360",
                "ip": "%%IP%%"
              },
              "campaignid": 463596,
              "campaignids": {
                "300x250": 463596
              },
              "filters": [
                {
                  "type": "Param",
                  "data": "testpb=1",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379388"
              },
              "campaignid": 464865,
              "campaignids": {
                "300x250": 464865
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "467468",
              "campaignids": {
                "300x250": 467468
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "QFEYA9KZH2qLSyRthreq3GJe"
              },
              "campaignid": "469231",
              "campaignids": {
                "300x250": 469231
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "66559",
                "ip": "%%IP%%"
              },
              "campaignid": 470046,
              "campaignids": {
                "300x250": 470046
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471569,
              "campaignids": {
                "300x250": 471569
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "473432"
                }
              },
              "campaignid": "473432",
              "campaignids": {
                "300x250": 473432
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "justbuild.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "boxfight.io",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "zonewars.io",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606535,
                "cur": "USD"
              },
              "campaignid": 478457,
              "campaignids": {
                "300x250": 478457
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "boxfight.io",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480645,
              "campaignids": {
                "300x250": 480645
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "438754"
              },
              "campaignid": 480883,
              "campaignids": {
                "300x250": 480883
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smilewanted",
              "params": {
                "zoneId": "cpmstar.com_hb_display"
              },
              "campaignid": 491294,
              "campaignids": {
                "300x250": 491294
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "WORLDWIDE",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smartadserver",
              "params": {
                "networkId": 4872,
                "siteId": 644032,
                "pageId": 1946819,
                "formatId": 129302
              },
              "campaignid": 492798,
              "campaignids": {
                "300x250": 492798
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493172"
              },
              "campaignid": "493172",
              "campaignids": {
                "300x250": 493172
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "insticator",
              "params": {
                "adUnitId": "01HVPQ7KMQYCF4D36QPK8FFRS6"
              },
              "campaignid": 493930,
              "campaignids": {
                "300x250": 493930
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "4f3255523a045142b589"
              },
              "campaignid": 493953,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "4f3255523a045142b589"
              },
              "campaignid": 493955,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493959"
              },
              "campaignid": "493959",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  300,
                  250
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83025,
            "width": 300,
            "height": 250
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$83025"
        },
        {
          "bids": [
            {
              "bidder": "unruly",
              "params": {
                "siteId": 277007
              },
              "campaignid": 461489,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "51474",
                "ip": "%%IP%%"
              },
              "campaignid": 463580,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541166423",
                "video": {
                  "mimes": [
                    "application/javascript",
                    "video/mp4"
                  ]
                }
              },
              "campaignid": 464854,
              "campaignids": {},
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379390@0x0",
                "video": {
                  "mimes": [
                    "video/mp4",
                    "video/ogg",
                    "video/webm",
                    "application/javascript"
                  ],
                  "skippable": true,
                  "playbackmethod": [
                    1,
                    2
                  ],
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "playback_method": [
                    "auto_play_sound_on",
                    "auto_play_sound_off"
                  ],
                  "linearity": 1,
                  "maxduration": 30,
                  "startdelay": 0,
                  "placement": 1,
                  "api": [
                    1,
                    2
                  ]
                }
              },
              "campaignid": 464866,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "467028"
              },
              "campaignid": "467028",
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986",
                "sizes": [
                  201
                ],
                "video": {
                  "language": "en",
                  "minduration": 0,
                  "maxduration": 30,
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "startdelay": 0,
                  "mimes": [
                    "video/mp4",
                    "application/javascript"
                  ],
                  "linearity": 1,
                  "api": [
                    1,
                    2
                  ],
                  "boxingallowed": 1,
                  "pos": 1
                }
              },
              "campaignid": "467492",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "Ay05RVeSmGzBBZJlp8Ne0DMR"
              },
              "campaignid": "469232",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "66556",
                "ip": "%%IP%%"
              },
              "campaignid": 470043,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "debug=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "67179",
                "ip": "%%IP%%"
              },
              "campaignid": 470175,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471584,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "26615007"
              },
              "campaignid": 478305,
              "campaignids": {},
              "discrep": 0.5339958101637033,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606576,
                "cur": "USD"
              },
              "campaignid": 479357,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "boxfight.io",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "zone": "k8tyx4rl"
              },
              "campaignid": 483696,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "490973"
                }
              },
              "campaignid": "490973",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "justbuild.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smilewanted",
              "params": {
                "zoneId": "cpmstar.com_hb_display"
              },
              "campaignid": 491295,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "WORLDWIDE",
                  "exclude": true
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "cuEn6aM2Cr7OohrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 491709,
              "campaignids": {},
              "discrep": 0.6032301542116313,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "New Zealand",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smartadserver",
              "params": {
                "networkId": 4872,
                "siteId": 644032,
                "pageId": 1946819,
                "formatId": 129173
              },
              "campaignid": 493266,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "WORLDWIDE",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "7d478a7d486c5d394925"
              },
              "campaignid": 493954,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "7d478a7d486c5d394925"
              },
              "campaignid": 493956,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "3HQl7KxnoIXjTgW315T4THMu"
              },
              "campaignid": "494206",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "video": {
              "placement": 1,
              "playerSize": [
                960,
                540
              ],
              "w": 960,
              "h": 540,
              "context": "instream",
              "pos": 1,
              "api": [
                2,
                2
              ],
              "protocols": [
                1,
                2,
                3,
                6
              ],
              "mimes": [
                "video/ogg",
                "video/webm",
                "video/mp4",
                "application/javascript"
              ],
              "minduration": 0,
              "maxduration": 30,
              "linearity": 1,
              "startdelay": 1
            }
          },
          "fallback": {
            "kind": "video",
            "poolid": 83026,
            "vast": true,
            "w": 960,
            "h": 540,
            "minBid": 7
          },
          "minBid": {
            "1v1.lol": 8,
            "default": -1
          },
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "video": 0
            }
          },
          "code": "instream",
          "gamPageUrl": "1v1.lol",
          "forceFallback": true
        },
        {
          "bids": [],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  728,
                  90
                ],
                [
                  800,
                  100
                ],
                [
                  970,
                  90
                ],
                [
                  320,
                  50
                ],
                [
                  300,
                  50
                ],
                [
                  216,
                  36
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 83028
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "anchor"
        },
        {
          "bids": [
            {
              "bidder": "33across",
              "params": {
                "siteId": "auD08Exw0r6ROqaKkv7mNO",
                "productId": "siab"
              },
              "campaignid": 455756,
              "campaignids": {
                "728x90": 455756
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "justbuild.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "543845676"
              },
              "campaignid": 465403,
              "campaignids": {
                "970x250": 465403
              },
              "discrep": 1,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "250",
                "placementId": "66559",
                "ip": "%%IP%%"
              },
              "campaignid": 470046,
              "campaignids": {
                "300x250": 470046
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493173"
              },
              "campaignid": "493173",
              "campaignids": {
                "728x90": 493173
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493202"
              },
              "campaignid": "493202",
              "campaignids": {
                "970x250": 493202
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smartadserver",
              "params": {
                "networkId": 4872,
                "siteId": 644032,
                "pageId": 1946819,
                "formatId": 129302
              },
              "campaignid": 493733,
              "campaignids": {
                "728x90": 493733
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "c35oTE5Vyr7PblrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 494210,
              "campaignids": {
                "970x250": 494210
              },
              "discrep": 1.054216476145291,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  728,
                  90
                ],
                [
                  300,
                  250
                ],
                [
                  970,
                  90
                ],
                [
                  970,
                  250
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 84818
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$84818"
        },
        {
          "bids": [
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "20800872"
              },
              "campaignid": 465398,
              "campaignids": {
                "300x600": 465398
              },
              "discrep": 1.338517866605048,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "467571"
              },
              "campaignid": "467571",
              "campaignids": {
                "300x600": 467571
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 274658
              },
              "campaignid": 470069,
              "campaignids": {
                "300x600": 470069
              },
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986"
              },
              "campaignid": "470070",
              "campaignids": {
                "300x600": 470070
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "triplelift",
              "params": {
                "inventoryCode": "1v1_ROS_HDX"
              },
              "campaignid": 470071,
              "campaignids": {
                "300x600": 470071
              },
              "discrep": 0.9451795851049394,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sovrn",
              "params": {
                "tagid": "911884"
              },
              "campaignid": 470074,
              "campaignids": {
                "300x600": 470074
              },
              "discrep": 1.4494715361250727,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "fJuIUmdryDTCVw2fQc8EVJ1X"
              },
              "campaignid": "470077",
              "campaignids": {
                "300x600": 470077
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3731916"
              },
              "campaignid": 470091,
              "campaignids": {
                "300x600": 470091
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "600",
                "placementId": "67111",
                "ip": "%%IP%%"
              },
              "campaignid": 470149,
              "campaignids": {
                "300x600": 470149
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "testpb=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 470208,
              "campaignids": {
                "300x600": 470208
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "473433"
                }
              },
              "campaignid": "473433",
              "campaignids": {
                "300x600": 473433
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "justbuild.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "300",
                "height": "600",
                "placementId": "78975",
                "ip": "%%IP%%"
              },
              "campaignid": 474918,
              "campaignids": {
                "300x600": 474918
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "between",
              "params": {
                "s": 4606537,
                "cur": "USD"
              },
              "campaignid": 478458,
              "campaignids": {
                "300x600": 478458
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "boxfight.io",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "eplanning",
              "params": {
                "ci": "59ca2"
              },
              "campaignid": 480644,
              "campaignids": {
                "300x600": 480644
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "inSlot": "438755"
              },
              "campaignid": 480884,
              "campaignids": {
                "300x600": 480884
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "559618501"
              },
              "campaignid": 487698,
              "campaignids": {
                "300x600": 487698
              },
              "discrep": 1.4881110361113499,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "cC44ByM2Cr7OohrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 491710,
              "campaignids": {
                "300x600": 491710
              },
              "discrep": 1.0820352318888498,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "New Zealand",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smartadserver",
              "params": {
                "networkId": 4872,
                "siteId": 644032,
                "pageId": 1946819,
                "formatId": 129302
              },
              "campaignid": 492861,
              "campaignids": {
                "300x600": 492861
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "rtb": 1,
              "bidder": "sharethrough",
              "params": {
                "pkey": "QFEYA9KZH2qLSyRthreq3GJe"
              },
              "campaignid": "493035",
              "campaignids": {
                "300x600": 493035
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "smilewanted",
              "params": {
                "zoneId": "cpmstar.com_hb_display"
              },
              "campaignid": 493265,
              "campaignids": {
                "300x600": 493265
              },
              "filters": [
                {
                  "type": "Country",
                  "data": "WORLDWIDE",
                  "exclude": true
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "4f3255523a045142b589"
              },
              "campaignid": 493953,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "4f3255523a045142b589"
              },
              "campaignid": 493955,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "493959"
              },
              "campaignid": "493959",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "banner": {
              "sizes": [
                [
                  300,
                  600
                ]
              ]
            }
          },
          "fallback": {
            "poolid": 85420,
            "width": 300,
            "height": 600
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "banner": 0
            }
          },
          "code": "/JustBuild.lol_[IO]/$85420"
        },
        {
          "bids": [
            {
              "bidder": "openx",
              "params": {
                "delDomain": "cpmstar-d.openx.net",
                "unit": "541166571",
                "video": {
                  "mimes": [
                    "application/javascript",
                    "video/mp4"
                  ]
                }
              },
              "campaignid": 459915,
              "campaignids": {},
              "discrep": 0.517427463729432,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "unruly",
              "params": {
                "siteId": 277007
              },
              "campaignid": 461489,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "51474",
                "ip": "%%IP%%"
              },
              "campaignid": 463580,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "pubmatic",
              "params": {
                "publisherId": "160251",
                "adSlot": "3379390@0x0",
                "video": {
                  "mimes": [
                    "video/mp4",
                    "video/ogg",
                    "video/webm",
                    "application/javascript"
                  ],
                  "skippable": true,
                  "playbackmethod": [
                    1,
                    2
                  ],
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "playback_method": [
                    "auto_play_sound_on",
                    "auto_play_sound_off"
                  ],
                  "linearity": 1,
                  "maxduration": 30,
                  "startdelay": 0,
                  "placement": 1,
                  "api": [
                    1,
                    2
                  ]
                }
              },
              "campaignid": 464866,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "amx",
              "params": {
                "tagId": "Y3Btc3Rhci5jb20",
                "adUnitId": "467028"
              },
              "campaignid": "467028",
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "rubicon",
              "params": {
                "accountId": "23330",
                "siteId": "368500",
                "zoneId": "2006986",
                "sizes": [
                  201
                ],
                "video": {
                  "language": "en",
                  "minduration": 0,
                  "maxduration": 30,
                  "protocols": [
                    2,
                    3,
                    5,
                    6
                  ],
                  "startdelay": 0,
                  "mimes": [
                    "video/mp4",
                    "application/javascript"
                  ],
                  "linearity": 1,
                  "api": [
                    1,
                    2
                  ],
                  "boxingallowed": 1,
                  "pos": 1
                }
              },
              "campaignid": "467492",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "Ay05RVeSmGzBBZJlp8Ne0DMR"
              },
              "campaignid": "469232",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Germany",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Spain",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "66556",
                "ip": "%%IP%%"
              },
              "campaignid": 470043,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Param",
                  "data": "debug=1",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "awesomeads",
              "params": {
                "endpoint": "proxy",
                "width": "0",
                "height": "0",
                "placementId": "67179",
                "ip": "%%IP%%"
              },
              "campaignid": 470175,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            },
            {
              "bidder": "nobid",
              "params": {
                "siteId": "22451380099"
              },
              "campaignid": 471584,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "appnexus",
              "params": {
                "placementId": "26615007"
              },
              "campaignid": 478305,
              "campaignids": {},
              "discrep": 0.5339958101637033,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "gumgum",
              "params": {
                "zone": "k8tyx4rl"
              },
              "campaignid": 483696,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "onetag",
              "params": {
                "pubId": "753930a353d6990",
                "ext": {
                  "placement_name": "490973"
                }
              },
              "campaignid": "490973",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "justbuild.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smilewanted",
              "params": {
                "zoneId": "cpmstar.com_hb_display"
              },
              "campaignid": 491295,
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "WORLDWIDE",
                  "exclude": true
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Referer",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Referer",
                  "data": "1v1.school",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "33across",
              "params": {
                "siteId": "cuEn6aM2Cr7OohrkHcnlKl",
                "productId": "siab"
              },
              "campaignid": 491709,
              "campaignids": {},
              "discrep": 0.6032301542116313,
              "filters": [
                {
                  "type": "Country",
                  "data": "Northern Mariana Islands",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Domain",
                  "data": "1v1.school",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "New Zealand",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "smartadserver",
              "params": {
                "networkId": 4872,
                "siteId": 644032,
                "pageId": 1946819,
                "formatId": 129173
              },
              "campaignid": 493266,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "WORLDWIDE",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "7d478a7d486c5d394925"
              },
              "campaignid": 493954,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Domain",
                  "data": "1v1.lol",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sonobi",
              "params": {
                "placement_id": "7d478a7d486c5d394925"
              },
              "campaignid": 493956,
              "campaignids": {},
              "filters": [
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                }
              ]
            },
            {
              "bidder": "sharethrough",
              "params": {
                "pkey": "3HQl7KxnoIXjTgW315T4THMu"
              },
              "campaignid": "494206",
              "campaignids": {},
              "filters": [
                {
                  "type": "Country",
                  "data": "Australia",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Canada",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "Italy",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United Kingdom",
                  "exclude": false
                },
                {
                  "type": "Country",
                  "data": "United States",
                  "exclude": false
                },
                {
                  "type": "Impressions",
                  "data": "",
                  "exclude": true
                }
              ]
            }
          ],
          "mediaTypes": {
            "video": {
              "placement": 1,
              "playerSize": [
                960,
                540
              ],
              "w": 960,
              "h": 540,
              "context": "instream",
              "pos": 1,
              "api": [
                2,
                2
              ],
              "protocols": [
                1,
                2,
                3,
                6
              ],
              "mimes": [
                "video/mp4",
                "application/javascript"
              ],
              "minduration": 0,
              "maxduration": 60,
              "linearity": 1,
              "startdelay": 1
            }
          },
          "fallback": {
            "kind": "video",
            "poolid": 87004,
            "vast": true,
            "w": 960,
            "h": 540
          },
          "minBid": 0,
          "floors": {
            "currency": "USD",
            "schema": {
              "fields": [
                "mediaType"
              ]
            },
            "values": {
              "video": 0
            }
          },
          "code": "rewarded",
          "gamPageUrl": "1v1.lol"
        }
      ],
      "PREBID_SERVER_IF_COPPA": true,
      "PREBID_SERVER_BIDDERS": [
        "onetag",
        "pulsepoint",
        "appnexus",
        "pubmatic",
        "openx",
        "rubicon",
        "rhythmone",
        "sharethrough",
        "sovrn",
        "triplelift",
        "conversant"
      ],
      "FALLBACK_BID_MULITPLIER": 0,
      "GAM": true,
      "GAMCHILDNETWORKCODE": "21834398356",
      "GAMFILTERS": false,
      "FAILSAFE_TIMEOUT": 3500,
      "publisherid": 49986,
      "bidderDiscreps": {
        "appnexus": {
          "tagperadunit": true,
          "totalgross": 2.082255,
          "totallocalgross": 2.8578640034484666,
          "discrep": 0.7286053491304796
        },
        "33across": {
          "tagperadunit": true,
          "totalgross": 19638.210000000003,
          "totallocalgross": 18713.25663646406,
          "discrep": 1.0494277068660305
        },
        "sovrn": {
          "tagperadunit": true,
          "totalgross": 22.303989182,
          "totallocalgross": 18.242305007936775,
          "discrep": 1.2226519166462837
        },
        "openx": {
          "tagperadunit": true,
          "totalgross": 211.74272699999997,
          "totallocalgross": 176.26983906956576,
          "discrep": 1.2012419601542534
        },
        "triplelift": {
          "tagperadunit": true,
          "totalgross": 0.04,
          "totallocalgross": 0.042319999955943786,
          "discrep": 0.9451795851049394
        },
        "unruly": {
          "tagperadunit": false,
          "totalgross": 4162.88,
          "totallocalgross": 4049.3335278052664,
          "discrep": 1.0280407803938727
        },
        "awesomeads": {
          "tagperadunit": false,
          "totalgross": 5.877999999999999,
          "totallocalgross": 4.921999952383338,
          "discrep": 1.1942299993631136
        },
        "pubmatic": {
          "tagperadunit": false,
          "totalgross": 490.82773000000003,
          "totallocalgross": 310.1920150882513,
          "discrep": 1.5823351541152886
        },
        "rubicon": {
          "tagperadunit": false,
          "totalgross": 1940.001,
          "totallocalgross": 3574.8216100229065,
          "discrep": 0.5426847019612733
        },
        "sharethrough": {
          "tagperadunit": false,
          "totalgross": 1396.29333,
          "totallocalgross": 1529.1214420597933,
          "discrep": 0.9131343604201455
        },
        "nobid": {
          "tagperadunit": false,
          "totalgross": 2103.161,
          "totallocalgross": 2002.407385631094,
          "discrep": 1.05031624188559
        },
        "onetag": {
          "tagperadunit": false,
          "totalgross": 157.63,
          "totallocalgross": 393.54962969253006,
          "discrep": 0.4005339812494606
        },
        "between": {
          "tagperadunit": false,
          "totalgross": 10.894544,
          "totallocalgross": 6.499560001632781,
          "discrep": 1.6761971575403778
        },
        "eplanning": {
          "tagperadunit": false,
          "totalgross": 1612.59,
          "totallocalgross": 2383.861024771265,
          "discrep": 0.6764614141693643
        },
        "gumgum": {
          "tagperadunit": false,
          "totalgross": 174.39999999999998,
          "totallocalgross": 84.67826490804217,
          "discrep": 2.0595603864745304
        },
        "smilewanted": {
          "tagperadunit": false,
          "totalgross": 298.3678,
          "totallocalgross": 286.3739499617703,
          "discrep": 1.0418817774445994
        },
        "smartadserver": {
          "tagperadunit": false,
          "totalgross": 4254.2339,
          "totallocalgross": 3537.885580491392,
          "discrep": 1.2024792218998535
        },
        "amx": {
          "tagperadunit": false,
          "totalgross": 948.915141,
          "totallocalgross": 901.0739215707688,
          "discrep": 1.0530935567925808
        },
        "insticator": {
          "tagperadunit": false,
          "totalgross": 6.50115686,
          "totallocalgross": 5.456798021080903,
          "discrep": 1.1913867500472788
        },
        "sonobi": {
          "tagperadunit": false,
          "totalgross": 909.261,
          "totallocalgross": 931.938183891712,
          "discrep": 0.9756666436855139
        }
      }
    },
    "instream": {
      "kind": "json",
      "vast": true,
      "poolid": 83026
    },
    "bypassanchor": {
      "kind": "editorial",
      "multi": "7",
      "json": "nc_editorial",
      "css": "h1{margin:0}.box,h1{font-weight:700}h1{color:#69b8ee;border-bottom:1px solid #69b8ee;line-height:1.5em;font-size:18px;font-family:Helvetica,Arial,sans-serif}body .box:last-child{margin-right:0}.box{box-shadow: #0000008a 3px 3px 1px 4px; position:relative;width:100px;height:100px;display:inline-block;vertical-align:text-bottom;margin:0 12px 12px 0;color:#000;text-decoration:none;font-size:14px;font-family:helvetica;overflow:hidden;border-radius:15px}.cpmstar-editorial-image{height:100px;width:100px;background-color:green;margin:auto} .box:hover{ cursor: pointer;} .box:hover .cpmstar-editorial-image{transform:scale(1.2);transition:.33s ease-in-out}.cpmstar-editorial-title{height:30%;bottom:0;left:0;position:absolute;z-index:1;display:block;font-family:helvetica;font-size:11px;line-height:14px;font-weight:500;background-color:rgba(0,125,179,.8);color:#fff;padding-top:2px;text-align:center;width:100%}.editorial_container{margin-left:35px}  a:nth-child(odd) div.cpmstar-editorial-title {background-color:darkcyan;}",
      "template": "{{~it.creatives :creative:index}} <a style=\"display:inline-block; border-bottom:none;\" href=\"{{=creative.clickUrl}}\" target=\"_blank\" class=\"box\"> <div class=\"imagebox\"> <img src=\"{{=creative.imageUrl}}\" height=\"100\" width=\"100\" class=\"cpmstar-editorial-image\"> </div> <div class=\"cpmstar-editorial-title\"> {{=creative.title}} </div> </a>{{~}}",
      "options": {
        "thumbWidth": 100,
        "thumbHeight": 100,
        "imageHeight": 100,
        "imageWidth": 100
      },
      "style": {
        "height": 105,
        "width": 810
      },
      "poolid": 83027
    },
    "anchor": {
      "kind": "banner",
      "poolid": 83028
    },
    "bypassvideo": {
      "kind": "editorial",
      "json": "nc_editorial",
      "multi": "1",
      "options": {
        "width": "348px",
        "height": "348px",
        "thumbWidth": 100,
        "thumbHeight": 100,
        "imageHeight": 100,
        "imageWidth": 100
      },
      "requiredmacros": "IMAGE800X288|IMAGE180X100",
      "style": {
        "width": "348px",
        "height": "348px"
      },
      "css": {},
      "template": "<h1>Brought to you by some dudes!</h1>",
      "poolid": 83029
    },
    "rewarded": null
  },
  "modules": [
    {
      "kind": "banner",
      "info": {
        "name": "POOL 83023"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$83023"
        }
      },
      "options": {
        "maxHeight": 250,
        "refreshrate": 40000,
        "autorefresh": false,
        "timeslice": 1,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$83023"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 83024"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$83024"
        }
      },
      "options": {
        "maxHeight": 90,
        "refreshrate": 40000,
        "autorefresh": false,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$83024"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 83025"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$83025"
        }
      },
      "options": {
        "maxHeight": 250,
        "refreshrate": 40000,
        "autorefresh": false,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$83025"
    },
    {
      "kind": "banner",
      "info": {
        "name": "anchor"
      },
      "conditions": [
        {
          "wait": true,
          "jbStatus": [
            "0",
            "1"
          ],
          "request": "hb"
        },
        {
          "wait": true,
          "jbStatus": "2",
          "request": "bypassanchor"
        }
      ],
      "options": {
        "maxHeight": 100
      },
      "request": "hb",
      "adUnitPath": "anchor",
      "blueprint": "hybridanchor"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 84818"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$84818"
        }
      },
      "options": {
        "maxHeight": 250
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$84818"
    },
    {
      "kind": "banner",
      "info": {
        "name": "POOL 85420"
      },
      "conditions": {
        "target": {
          "kind": "replace",
          "find": "$85420"
        }
      },
      "options": {
        "maxHeight": 600,
        "refreshrate": 40000,
        "autorefresh": false,
        "minslice": 15000
      },
      "request": "hb",
      "adUnitPath": "/JustBuild.lol_[IO]/$85420"
    },
    {
      "info": {
        "name": "banner300x250"
      },
      "kind": "banner",
      "request": "hb",
      "adUnitPath": "banner300x250",
      "conditions": {
        "wait": true
      },
      "options": {
        "width": 300,
        "height": 250
      }
    },
    {
      "info": {
        "name": "banner728x90"
      },
      "kind": "banner",
      "request": "hb",
      "adUnitPath": "banner728x90",
      "conditions": {
        "wait": true
      },
      "options": {
        "width": 728,
        "height": 90
      }
    },
    {
      "info": {
        "name": "preroll"
      },
      "blueprint": "instreamvideo",
      "request": "hb",
      "adUnitPath": "instream",
      "options": {
        "requireViewable": false,
        "autoSizeToTarget": true,
        "clickToPlay": true,
        "autoSkippability": true,
        "forceSkippability": true
      },
      "conditions": [
        {
          "wait": true,
          "gap": 60000
        }
      ],
      "css": {
        ".cpmsvideoclosebanner:after": {
          "content": "'Start Game'"
        }
      }
    },
    {
      "conditions": [
        {
          "wait": true,
          "gap": 60000
        }
      ],
      "info": {
        "name": "interstitial"
      },
      "blueprint": "hybridinstreamvideo",
      "options": {
        "autoSkippability": true,
        "forceSkippability": true
      }
    },
    {
      "conditions": {
        "wait": true
      },
      "info": {
        "name": "rewardedvideo"
      },
      "blueprint": "instreamvideo",
      "request": "hb",
      "adUnitPath": "rewarded",
      "options": {
        "autoSkippability": false
      }
    }
  ],
  "conditions": {
    "geo": [
      {
        "exclude": true,
        "countryCode": [
          "kp",
          "ir",
          "sy",
          "cu",
          "lb"
        ]
      },
      {
        "exclude": true,
        "region": [
          "donetsk",
          "crimea",
          "luhansk",
          "donetsk oblast"
        ]
      },
      {
        "exclude": true,
        "city": [
          "donetsk",
          "crimea",
          "luhansk"
        ]
      }
    ]
  },
  "options": {
    "referrerRevshare": 1
  },
  "info": {
    "id": 372,
    "tags": [
      57
    ],
    "zonepools": {
      "83023": {
        "module": "POOL 83023"
      },
      "83024": {
        "module": "POOL 83024"
      },
      "83025": {
        "module": "POOL 83025"
      },
      "83026": {
        "module": "preroll"
      },
      "83028": {
        "module": "anchor"
      },
      "84818": {
        "module": "POOL 84818"
      },
      "85420": {
        "module": "POOL 85420"
      },
      "87004": {
        "module": "rewardedvideo"
      }
    }
  }
}
);