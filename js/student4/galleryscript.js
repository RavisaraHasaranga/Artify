function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup.classList.contains("active")) {
    popup.classList.remove("active");
  } else {
    popup.classList.add("active");
  }
}