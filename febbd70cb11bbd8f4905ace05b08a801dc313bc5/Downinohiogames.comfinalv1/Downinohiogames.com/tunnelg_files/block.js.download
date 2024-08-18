const observer = new MutationObserver(mutations => {
  mutations.forEach(({ addedNodes }) => {
    addedNodes.forEach(node => {
      if (node.tagName == 'SCRIPT') {
        if ((node.src.search('Unity') == -1) && (node.src.search('block.js') == -1)) {
          if (document.head.contains(node)) {
            document.head.removeChild(node);
          }
          if (document.body.contains(node)) {
            document.body.removeChild(node);
          }
        }
      } else if (node.tagName == 'LINK') {
        if (node.href.search('lablocked') != -1) {
          document.head.removeChild(node);
        }
      } else if (node.tagName == 'DIV') {
        if (node.id == 'preroll' || node.id == 'adsCode') {
          document.body.removeChild(node);
        }
      }
    })
  })
})

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
})

window.alert = function() {};
