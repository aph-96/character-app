function toggleCardContent(card) {
  var extraContent = card.querySelector(".extra-content");
  if (
    extraContent.style.display === "none" ||
    extraContent.style.display === ""
  ) {
    extraContent.style.display = "block"; // Show the additional content
  } else {
    extraContent.style.display = "none"; // Hide the additional content
  }
}
function showTab(tabId) {
  // Hide all content
  document
    .querySelectorAll(".content")
    .forEach((el) => el.classList.remove("active"));
  // Show selected tab
  document.getElementById(tabId).classList.add("active");
}
function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
