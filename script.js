function showOverlay(feature) {
  document.getElementById('overlay-title').textContent = `${feature} Feature`;
  document.getElementById('overlay-buttons').innerHTML = ''; // Clear any buttons
  document.getElementById('overlay').style.display = 'flex';
}

function showMDMOverlay() {
  document.getElementById('overlay-title').textContent = 'MDM Management';
  const buttonsContainer = document.getElementById('overlay-buttons');

  // Create "Manage My MDM" button
  const manageButton = document.createElement('button');
  manageButton.textContent = 'Manage My MDM';
  manageButton.classList.add('overlay-button');
  manageButton.onclick = () => {
    window.open('https://zmdm.co/0zj3l', '_blank');
  };

  // Create "Install My MDM" button
  const installButton = document.createElement('button');
  installButton.textContent = 'Install My MDM';
  installButton.classList.add('overlay-button');
  installButton.onclick = () => {
    alert('Install My MDM functionality coming soon!');
  };

  // Add buttons to the overlay
  buttonsContainer.innerHTML = ''; // Clear existing buttons
  buttonsContainer.appendChild(manageButton);
  buttonsContainer.appendChild(installButton);

  document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
