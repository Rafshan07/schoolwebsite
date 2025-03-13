document.addEventListener("DOMContentLoaded", function () {
  let scale = 1;

  window.openImage = function (imgElement) {
    const popupImage = document.getElementById("popupImage");
    popupImage.src = imgElement.querySelector("img").src;

    // Reset zoom when opening a new image
    scale = 1;
    popupImage.style.transform = `scale(${scale})`;
    popupImage.style.cursor = "zoom-in";
  };

  window.toggleZoom = function (event) {
    event.stopPropagation(); // Prevents modal close when clicking image
    const popupImage = document.getElementById("popupImage");

    if (scale === 1) {
      scale = 2; // Zoom in
      popupImage.style.cursor = "zoom-out";
    } else {
      scale = 1; // Zoom out
      popupImage.style.cursor = "zoom-in";
    }

    popupImage.style.transform = `scale(${scale})`;
  };
});
