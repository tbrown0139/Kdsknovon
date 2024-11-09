function showOverlay(feature) {
  const overlay = document.getElementById('overlay');
  document.getElementById('overlay-title').textContent = `${feature} Feature`;
  overlay.style.display = 'flex';
}

function showMDMOverlay() {
  const overlay = document.getElementById('overlay');
  document.getElementById('overlay-title').textContent = 'MDM Management';

  const buttonsContainer = document.getElementById('overlay-buttons');
  buttonsContainer.innerHTML = '';

  const manageButton = document.createElement('button');
  manageButton.textContent = 'Manage My MDM';
  manageButton.onclick = () => window.open('https://zmdm.co/0zj3l', '_blank');

  const installButton = document.createElement('button');
  installButton.textContent = 'Install My MDM';
  installButton.onclick = () => alert('Install My MDM functionality coming soon!');

  buttonsContainer.appendChild(manageButton);
  buttonsContainer.appendChild(installButton);

  overlay.style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
