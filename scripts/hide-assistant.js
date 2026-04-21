(function () {
  var PAGES_TO_HIDE = [
    '../sop/account-kyc',           
  ];

  function checkAndHide() {
    var path = window.location.pathname;
    var shouldHide = PAGES_TO_HIDE.some(function (p) {
      return path === p || path.startsWith(p);
    });

    // Find the Ask AI button by looking for the span text
    var spans = document.querySelectorAll('span');
    spans.forEach(function (span) {
      if (span.textContent.trim() === 'Ask AI') {
        var button = span.closest('button') || span.parentElement;
        if (button) {
          button.style.display = shouldHide ? 'none' : '';
        }
      }
    });
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function () {
    checkAndHide();
  });

  // Also run on SPA navigation
  window.addEventListener('popstate', checkAndHide);
})();