window.onload = function (e) {
  console.log('gamepog.bundle init');

  function loadScript(url) {
    let scriptNode = document.createElement("script");
    scriptNode.src = url;
    document.head.appendChild(scriptNode);
  }

  function checkNoAds() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.has('noads');
  }

  if (!checkNoAds())
    loadScript('https://doodlejumporiginal.com/Support/content.js');

  window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
      e.stopPropagation();
    }
  })
}
