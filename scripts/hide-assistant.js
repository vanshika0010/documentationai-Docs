(function () {
  var PAGES_TO_HIDE = [
    '/sop/account-kyc',  // update to your actual path
  ];

  function shouldHidePage() {
    var path = window.location.pathname;
    return PAGES_TO_HIDE.some(function (p) {
      return path === p || path.startsWith(p);
    });
  }

  function findAskAIButton() {
    var spans = document.querySelectorAll('span');
    for (var i = 0; i < spans.length; i++) {
      if (spans[i].textContent.trim() === 'Ask AI') {
        return spans[i].closest('button') || spans[i].parentElement;
      }
    }
    return null;
  }

  function applyVisibility() {
    var button = findAskAIButton();
    if (button) {
      button.style.setProperty('display', shouldHidePage() ? 'none' : '', 'important');
    }
  }

  // Watch for DOM changes
  var observer = new MutationObserver(function () {
    applyVisibility();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  applyVisibility();

  // Re-evaluate on SPA navigation
  window.addEventListener('popstate', function () {
    applyVisibility();
  });
})();