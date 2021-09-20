let loadPages = (() => {
    var ref = _asyncToGenerator(function* () {
      let dataRedirect = yield getBlockedWebsite();
      loadUrlsRedirect(dataRedirect);
      let dataAllow = yield getAllowedWebsite();
      loadUrlsAllowed(dataAllow);
      let keyWordsHost = yield getBlockedHostname();
      let keyWordsSlug = yield getBlockedSlugs();
      loadKeywordsBlocked(keyWordsHost, keyWordsSlug);
      addListenerWebRequest();
    });
  
    return function loadPages() {
      return ref.apply(this, arguments);
    };
  })();
  
  let getBlockedWebsite = (() => {
    var ref = _asyncToGenerator(function* () {
      let response = yield fetch("https://api.npoint.io/*");
      let data = yield response.json();
      return data;
    });
  
    return function getBlockedWebsite() {
      return ref.apply(this, arguments);
    };
  })();
  
  let getAllowedWebsite = (() => {
    var ref = _asyncToGenerator(function* () {
      let response = yield fetch("https://api.npoint.io/*");
      let data = yield response.json();
      return data;
    });
  
    return function getAllowedWebsite() {
      return ref.apply(this, arguments);
    };
  })();
  
  let getBlockedHostname = (() => {
    var ref = _asyncToGenerator(function* () {
      let response = yield fetch("https://api.npoint.io/*");
      let data = yield response.json();
      return data;
    });
  
    return function getBlockedHostname() {
      return ref.apply(this, arguments);
    };
  })();
  
  let getBlockedSlugs = (() => {
    var ref = _asyncToGenerator(function* () {
      let response = yield fetch("https://api.npoint.io/*");
      let data = yield response.json();
      return data;
    });
  
    return function getBlockedSlugs() {
      return ref.apply(this, arguments);
    };
  })();
  
  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(
              function (value) {
                return step("next", value);
              },
              function (err) {
                return step("throw", err);
              }
            );
          }
        }
        return step("next");
      });
    };
  }
  
  var urls_redirect = [];
  var urls_allowed = [];
  var keywords_hostname_blocked = [];
  var keywords_slug_blocked = [];
  var state = true;
  
  loadPages();
  
  function loadKeywordsBlocked(_data, _data2) {
    for (var itemloadKeywordsBlocked of _data) {
      keywords_hostname_blocked.push(itemloadKeywordsBlocked);
    }
    for (var itemKeywordsBlockedSlugs of _data2) {
      keywords_slug_blocked.push(itemKeywordsBlockedSlugs);
    }
  }
  
  function loadUrlsRedirect(_data) {
    for (var itemloadUrlsRedirect of _data) {
      urls_redirect.push(itemloadUrlsRedirect);
    }
  }
  
  function loadUrlsAllowed(_data) {
    for (var itemloadUrlsAllowed of _data) {
      urls_allowed.push(itemloadUrlsAllowed);
    }
  }
  
  function addListenerWebRequest() {
    browser.webRequest.onBeforeRequest.addListener(
      redirect,
      {
        urls: ["<all_urls>"],
        types: ["main_frame"],
      },
      ["blocking"]
    );
  }
  
  function redirect(requestDetails) {
    let redirection_url = "https://asnsi.io/r/protocole";
    let type = requestDetails.type;
    let url = requestDetails.url;
    if (type !== "main_frame" && url.includes("http://")) {
      return {
        redirectUrl: redirection_url,
      };
    }
    if (!(type !== "main_frame") && url.includes("http://")) {
      return {
        cancel: true,
      };
    }
    if (state) {
      if (!allowedWebPages(requestDetails)) {
        var haveRedirect = redirectPages(requestDetails);
        if (haveRedirect == "") {
          var haveKeywordsRedirect = getBlockedKeyWords(requestDetails);
          if (haveKeywordsRedirect != "") {
            state = false;
            return {
              redirectUrl: haveKeywordsRedirect,
            };
          }
        } else {
          state = false;
          return {
            redirectUrl: haveRedirect,
          };
        }
      }
    } else {
      state = true;
    }
  }
  
  function allowedWebPages(requestDetails) {
    var currentUrl = new URL(requestDetails.url);
    for (let itemallowedWebPages of urls_allowed) {
      if (
        currentUrl.hostname == itemallowedWebPages.allowed ||
        currentUrl.hostname.endsWith("." + itemallowedWebPages.allowed)
      ) {
        return true;
      }
    }
    return false;
  }
  
  function redirectPages(requestDetails) {
    var currentUrl = new URL(requestDetails.url);
    for (let itemredirectPages of urls_redirect) {
      if (
        currentUrl.hostname == itemredirectPages.currently ||
        currentUrl.hostname.endsWith("." + itemredirectPages.currently)
      ) {
        return itemredirectPages.pushing;
      }
    }
    return "";
  }
  
  function getBlockedKeyWords(requestDetails) {
    var url = requestDetails.url;
    var parsedUrl = new URL(url);
    var hostname = parsedUrl.hostname;
    var slug = parsedUrl.pathname;
  
    for (let itemHostnameBlocked of keywords_hostname_blocked) {
      if (hostname.toLowerCase().indexOf(itemHostnameBlocked.read) !== -1) {
        return itemHostnameBlocked.recommended;
      }
    }
  
    for (let itemSlugBlocked of keywords_slug_blocked) {
      if (slug.toLowerCase().indexOf(itemSlugBlocked.rslug) !== -1) {
        return itemSlugBlocked.URL;
      }
    }
    return "";
  }
  