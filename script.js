function showOverlay(feature) {
  document.getElementById("overlay-text").textContent = `${feature} feature is coming soon.`;
  document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
