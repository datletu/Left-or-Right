document.getElementById('checkUrl').addEventListener('click', async () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    let newsWebsites = {"cnn.com":20, "bbc.com":0, "nytimes.com":0, "theguardian.com":0};
    let source = "";
    let leftLevel = 0;
    let isNewsWebsite = false;
    for (let website in newsWebsites) {
      if (url.includes(website)) {
        isNewsWebsite = true;
        source = website;
        leftLevel = newsWebsites[website];
        break;
      }
    }
    if (isNewsWebsite) {
      alert(leftLevel);
    }
    else {
      alert("This is not in our news websites database");
    }
   
});
});