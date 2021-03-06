function getEngine(keyword){
	var array = engine();
	searchKeyword(array,keyword);
}

var T = document.getElementById("searchButton");
if(T){
	T.addEventListener("click",function(){
		var keyWord = document.getElementById("keyword").value;
		getEngine(keyWord);
	});

}

function searchKeyword(array,keyword){
	var sURL;
	for(var i=0;i<array.length;i++){
		var engineName = array[i];
		console.log(engineName);
		switch(engineName){
			case "amazon":
				sURL = "http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "baidu":
				sURL = "https://www.baidu.com/s?wd=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "bing":
				sURL = "https://www.bing.com/search?q=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "codeproject":
				sURL = "http://www.codeproject.com/search.aspx?q=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "duckduckgo":
				sURL = "https://www."+engineName+".com/" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "flipkart":
				sURL = "https://www.flipkart.com/search?q=" + keyword;
				chrome.tabs.create({url:sURL});
				break;


			case "google":
				sURL = "https://www.google.com/search?q="+keyword;
				chrome.tabs.create({url:sURL});

				break;

			case "expertexchange":
				sURL = "https://www.experts-exchange.com/searchResults.jsp?searchTerms=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "infibeam":
				sURL = "http://www.infibeam.com/search?q=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "stackoverflow":
				sURL = "http://stackoverflow.com/search?q="+ keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "shopclues":
				sURL = "http://search.shopclues.com/?q=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "snapdeal":
				sURL = "https://www.snapdeal.com/search?keyword=" + keyword;
				chrome.tabs.create({url:sURL});
				break;



			case "yandex":
				sURL = "https://www.yandex.com/search/?text="+ keyword;
				chrome.tabs.create({url:sURL});
				break;


			case "yahoo":
				sURL = "https://search.yahoo.com/search?p="+keyword;
				chrome.tabs.create({url:sURL});

				break;

			case "youtube":
				sURL = "https://www.youtube.com/results?search_query="+keyword;
				chrome.tabs.create({url:sURL});
				break;


		}
		}
	window.close();
}
