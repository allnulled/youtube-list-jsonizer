(function() {
 const links = [];
 document.querySelectorAll("ytd-playlist-panel-video-renderer").forEach(item => {
  const a = item.querySelectorAll("a")[0];
  links.push({
   title: item.querySelectorAll("#video-title")[0].getAttribute("aria-label"),
   link: a.href
  });
 });
 console.log(JSON.stringify(links, null, 4));
})();