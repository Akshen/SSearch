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
			case "baidu":
				sURL = "https://www.baidu.com/s?wd=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "bing":
				sURL = "https://www.bing.com/search?q=" + keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "duckduckgo":
				sURL = "https://www."+engineName+".com/"+keyword;
				chrome.tabs.create({url:sURL});
				break;

		//Need to work on autoClick
			case "google":
				sURL = "https://www.google.com/?q="+keyword;
				chrome.tabs.create({url:sURL});
				//console.log(document.getElementById("lst-ib").value);
				break;

			case "stackoverflow":
				sURL = "http://stackoverflow.com/search?q="+ keyword;
				chrome.tabs.create({url:sURL});
				break;

			case "yandex":
				sURL = "https://www.yandex.com/search/?text="+ keyword;
				chrome.tabs.create({url:sURL});
				break;

		//Need to work on autoClick
			case "yahoo":
				sURL = "https://www.yahoo.com/search?p="+keyword;
				chrome.tabs.create({url:sURL});
				//document.getElementsByName("p").click();
				break;

			case "youtube":
				sURL = "https://www.youtube.com/results?search_query="+keyword;
				chrome.tabs.create({url:sURL});
				break;


		}
		}
	//window.close();
}
