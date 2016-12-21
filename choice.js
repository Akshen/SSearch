document.addEventListener("click", function(e) {
  function callOnActiveTab(callback) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      for (var tab of tabs) {
        if (tab.active) {
          callback(tab, tabs);
        }
      }
    });
  }

if (e.target.id === "call-settings") {
  chrome.tabs.create({url: "Settings/Settings.html"});
  }
else if (e.target.id === "call-search") {
    openWindow();
}

function openWindow()
{
	popupWindow("Search/Search.html","_blank",240,15);
}
  e.preventDefault();
});

function popupWindow(url, title, w, h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}
