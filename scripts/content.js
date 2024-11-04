const url = window.location.href;

let newsWebsites = {"theatlantic.com":-4.00,"democracynow.com":-4.00,"msnbc.com":-3.71,"nytimes.com":-4.00,"vox.com":-3.50,"newyorker.com":-4.00
    ,"abcnews.go.com":-1.42,"apnews.com":-1.30,"axios.com":-1.70,"bloomberg.com":-2.40,"cnn.com":-1.30,"theguardian.com":-2.40,"nbcnews.com":-1.80,"npr.org":-2.00,"washingtonpost.com":-2.20,"usatoday.com":-2.00
    ,"bbc.com":-0.81,"www.cnbc.com":-0.90,"forbes.com":-0.50,"reuters.com":-0.89,"wsj.com":-0.20,
    "foxbusiness.com":2.00,"nypost.com":2.93,"washingtontimes.com":2.93,
    "theamericanconservative.com":4.00,"breitbart.com":5.00,"dailymail.co":4.00,"foxnews.com":3.88,"oann.com":3.10,
    "https://github.com/datletu":0
};
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
  if (leftLevel < -3.00) {
    alert("This is a left-wing news website");
  }
  else if (leftLevel < -1.00) {
    alert("This is a center-left news website");
  }
  else if (leftLevel < 1) {
    alert("This is a center news website");
  }
  else if (leftLevel < 3.00) {
    alert("This is a center-right news website");
  }
  else {
    alert("This is a right-wing news website");
  }
}
else {
  alert("This is not in our news websites database");
} 