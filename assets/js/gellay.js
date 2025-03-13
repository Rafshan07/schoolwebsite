function openImage(imgElement) {
  const popupOverlay = document.getElementById("imagePopup");
  const popupImage = document.getElementById("popupImage");

  popupImage.src = imgElement.src;
  popupOverlay.classList.add("show");
}

function closeImage() {
  document.getElementById("imagePopup").classList.remove("show");
}
let scale = 1;

function openImage(imgElement) {
  const popupOverlay = document.getElementById("imagePopup");
  const popupImage = document.getElementById("popupImage");

  popupImage.src = imgElement.src;
  popupOverlay.classList.add("show");

  // Reset zoom scale when opening a new image
  scale = 1;
  popupImage.style.transform = `scale(${scale})`;

  // Change cursor to zoom-out when image is clicked
  popupImage.onclick = function () {
    if (scale === 1) {
      scale = 2; // Zoom in
      popupImage.style.cursor = "zoom-out";
    } else {
      scale = 1; // Zoom out
      popupImage.style.cursor = "zoom-in";
    }
    popupImage.style.transform = `scale(${scale})`;
  };
}













