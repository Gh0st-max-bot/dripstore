// DRIP STORE interactions — plain JavaScript, no libraries required.
document.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('siteSearch');

  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', () => {
      const isOpen = searchPanel.classList.toggle('open');
      searchToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen && searchInput) searchInput.focus();
    });
  }

  if (searchPanel) {
    searchPanel.addEventListener('submit', (event) => {
      event.preventDefault();
      const term = (searchInput?.value || '').trim();
      if (!term) {
        searchInput?.focus();
        return;
      }
      // Replace this demo behavior with your product-search endpoint when ready.
      alert(`Search for “${term}” — connect your product catalogue to enable live results.`);
    });
  }

  const videoDialog = document.getElementById('videoDialog');
  const videoButton = document.getElementById('videoButton');
  const mobileVideoButton = document.getElementById('mobileVideoButton');
  const closeVideo = document.getElementById('closeVideo');
  const brandVideo = document.getElementById('brandVideo');

  // To enable video playback, set VIDEO_SOURCE to a file such as "assets/drip-promo.mp4".
  const VIDEO_SOURCE = '';
  const openVideoDialog = () => {
    if (!videoDialog) return;
    if (VIDEO_SOURCE && brandVideo) {
      brandVideo.src = VIDEO_SOURCE;
      brandVideo.hidden = false;
    }
    if (typeof videoDialog.showModal === 'function') videoDialog.showModal();
    else alert('Add your promo video in drip.js by setting VIDEO_SOURCE.');
  };

  videoButton?.addEventListener('click', openVideoDialog);
  mobileVideoButton?.addEventListener('click', openVideoDialog);
  closeVideo?.addEventListener('click', () => {
    brandVideo?.pause();
    if (videoDialog?.open) videoDialog.close();
  });
  videoDialog?.addEventListener('click', (event) => {
    if (event.target === videoDialog) {
      brandVideo?.pause();
      videoDialog.close();
    }
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
