var addToCart = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");

function showConfirmation() {
  confirmation.classList.add("is-active");
  setTimeout(hideConfirmation, 2000);
}

function hideConfirmation() {
  confirmation.classList.remove("is-active");
}

addToCart.forEach(function (button) {
  button.addEventListener("click", showConfirmation);
});
