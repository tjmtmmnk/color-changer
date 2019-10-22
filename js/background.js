chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.browserAction.getBadgeText({}, function (text) {

    chrome.browserAction.setBadgeText({ text: "on" });
    chrome.browserAction.setBadgeBackgroundColor({ color: "black" });

    var msg = {};
    msg.color = "blue";

    var queryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(queryInfo, function (result) {
      var currentTab = result.shift();
      console.log(currentTab);

      // 現在表示しているタブにメッセージを送る
      chrome.tabs.sendMessage(currentTab.id, msg, function () { });
    });
  });
});