(function () {
  var PAGES_TO_HIDE = [
    '../sop/account-kyc',           
  ];

  function checkAndHide() {
    var path = window.location.pathname;
    var shouldHide = PAGES_TO_HIDE.some(function (p) {
      return path === p || path.startsWith(p);
    });

    // Target the Ask AI button/widget - adjust selector if needed
    var askAI = document.querySelector('[data-ask-ai], .ask-ai-button, button[aria-label*="Ask AI"]');
    if (askAI) {
      askAI.style.display = shouldHide ? 'none' : '';
    }
  }

  // Run on load and on SPA navigation
  checkAndHide();
  window.addEventListener('popstate', checkAndHide);
})();