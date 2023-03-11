URLDecode = function(info){
  var query = info.selectionText;
  chrome.tabs.create({url: decodeURIComponent(query)});
};

chrome.contextMenus.create({
  id: "myContextMenuId",
  title: "URL Decode",
  contexts:["all"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  URLDecode(info)
});
