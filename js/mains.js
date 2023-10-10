
var modalContainer = document.getElementById("modalContainer");
var openModalBtn = document.getElementById("openModalBtn");
var youtubeIframe = document.getElementById("youtubeIframe");

openModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

window.addEventListener("click", function (event) {
    if (event.target == modalContainer) {
      modalContainer.style.display = "none";
      youtubeIframe.src = youtubeIframe.src;
    }
  });