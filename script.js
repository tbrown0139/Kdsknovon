function showOverlay(feature) {
  document.getElementById('overlay-text').textContent = `${feature} feature is coming soon.`;
  document.getElementById('overlay-buttons').innerHTML = ''; // Clear any buttons
  document.getElementById('overlay').style.display = 'flex';
}

function showMDMOverlay() {
  document.getElementById('overlay-text').textContent = 'MDM Options';
  const buttonsContainer = document.getElementById('overlay-buttons');

  // Create "Install New Device" button
  const installButton = document.createElement('button');
  installButton.textContent = 'Install New Device';
  installButton.onclick = () => {
    alert('Install New Device functionality coming soon!');
  };

  // Create "Manage My Device" button
  const manageButton = document.createElement('button');
  manageButton.textContent = 'Manage My Device';
  manageButton.onclick = () => {
    alert('Manage My Device functionality coming soon!');
  };

  // Add buttons to the overlay
  buttonsContainer.innerHTML = ''; // Clear existing buttons
  buttonsContainer.appendChild(installButton);
  buttonsContainer.appendChild(manageButton);

  document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
