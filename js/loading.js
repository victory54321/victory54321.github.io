(function() {

  var hasShownLoading = sessionStorage.getItem('loading_shown');
  if (hasShownLoading) return;

  var loadingHtml = `
    <div id="loading-box">
      <div id="loading-content">
        <div id="ring-container">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="ring"></div>
        </div>
        <div id="text-container">
          <div id="main-text">正在进入 Yuu 的博客</div>
          <div id="loading-text">loading...</div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', loadingHtml);

  var startTime = Date.now();
  var minDisplayTime = 2000;

  window.addEventListener('load', function() {

    var elapsed = Date.now() - startTime;
    var remaining = minDisplayTime - elapsed;

    function hideLoading() {
      var loadingBox = document.getElementById('loading-box');
      if (!loadingBox) return;

      loadingBox.style.opacity = '0';
      setTimeout(function() {
        loadingBox.remove();
      }, 500);
    }

    if (remaining > 0) {
      setTimeout(hideLoading, remaining);
    } else {
      hideLoading();
    }

    sessionStorage.setItem('loading_shown', 'true');
  });

})();