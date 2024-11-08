document.addEventListener('DOMContentLoaded', () => {
  const isPWA = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  const instructions = document.getElementById('instructions');
  const app = document.getElementById('app');

  if (isPWA) {
    instructions.classList.add('hidden');
    app.classList.remove('hidden');
  } else {
    instructions.classList.remove('hidden');
    app.classList.add('hidden');
  }
});

function showOverlay(feature) {
  document.getElementById('overlay-text').textContent = `${feature} feature is coming soon.`;
  document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
