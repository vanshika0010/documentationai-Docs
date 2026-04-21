(function () {
  var PAGES_TO_HIDE = [
    '/sop/account-kyc',  
  ];

  function shouldHidePage() {
    var path = window.location.pathname;
    return PAGES_TO_HIDE.some(function (p) {
      return path === p || path.startsWith(p);
    });
  }

  function hideAskAI() {
    if (!shouldHidePage()) return;

    document.querySelectorAll('span').forEach(function (span) {
      if (span.textContent.trim() === 'Ask AI') {
        var button = span.closest('button') || span.parentElement;
        if (button) {
          button.style.setProperty('display', 'none', 'important');
        }
      }
    });
  }

  // Keep watching for the button to appear in the DOM
  var observer = new MutationObserver(function () {
    hideAskAI();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Also run immediately in case it's already there
  hideAskAI();

  // Handle SPA navigation
  window.addEventListener('popstate', function () {
    hideAskAI();
  });
})();