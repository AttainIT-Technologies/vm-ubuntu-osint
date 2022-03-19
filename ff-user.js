

// about:config

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

