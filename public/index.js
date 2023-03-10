
let addCartButton = document.querySelectorAll(".button-primary");
let itemCount = document.querySelector("#count");
let selectedItemCount = 0;
addCartButton.forEach((btn, index) => {
  btn.addEventListener("click", function(e) {
    selectedItemCount++;
    itemCount.textContent= selectedItemCount;
    console.log(e.target, index);;
  });
})