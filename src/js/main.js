var addToCart = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");

addToCart.forEach(function () {
  addEventListener("click", () => {
    confirmation.classList.add("is-active");
  });
});
