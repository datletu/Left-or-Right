document.getElementById('checkUrl').addEventListener('click', async () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    let newsWebsites = ["cnn.com", "bbc.com", "nytimes.com", "theguardian.com"];
    let isNewsWebsite = newsWebsites.some(site => url.includes(site));
    const notification = isNewsWebsite ? "This is a news website." : "This is not a news website.";
    alert(notification);
    
});
});