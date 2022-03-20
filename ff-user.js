

// about:config

// Settings | General
// Disable "Recommend extensions/features as you browse"
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Settings | Home
// Home Page and New Windows = blank page
// New Tabs = blank page
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.url", "about:blank")
user_pref("browser.startup.homepage", "about:blank")

// Settings | Privacy & Security
// Set Enhanced Tracking Protection = Strict
user_pref("browser.contentblocking.category", "strict");
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("privacy.annotate_channels.strict_list.enabled", true);
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// Delete cookies and site date when Firefox is closed
user_pref("network.cookie.lifetimePolicy", 2);
// Logins and Passwords
user_pref("signon.rememberSignons", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
// Address Bar - Firefox Suggest
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.topsites", false);
// Location - Block new requests asking to access your location
user_pref("permissions.default.geo", 2);
// Camera - Block new requests asking to access your camera
user_pref("permissions.default.camera", 2);
// Microphone - Block new requests asking to access your microphone
user_pref("permissions.default.microphone", 2);
// Opt Out
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
// Block Deceptive Content
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// Disable Geolocation
// https://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled", false);

// Disable WebRTC and related settings
// https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.no_host",  true);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.video.enabled", false);

// Disable Media Navigator
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
user_pref("media.navigator.enabled", false);

// Disable Battery API
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
user_pref("dom.battery.enabled", false);

