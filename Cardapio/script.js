
const menu = document.getElementById("menu")

const cartBtn = document.getElementById("cart-btn")

const cartModal = document.getElementById("cart-modal")

const cartItemsContainer = document.getElementById("cart-items")

const cartTotal = document.getElementById("cart-total")

const checkoutBtn = document.getElementById("checkout-btn")

const closeModalBtn = document.getElementById("close-modal-btn")

const cartCounter = document.getElementById("cart-count")

const addressInput = document.getElementById("address")

const addressWarn = document.getElementById("address-warn")

const removeProductButtons=document.getElementsByClassName("remove-product-button")



cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
     cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){
  //  console.log(event.target)

  let parentButton = event.target.closest(".add-to-cart-btn")
  if(parentButton){
    const name = parentButton.getAttribute("data-name")
    const price = parentButton.getAttribute("data-price")

    console.log(name)
    console.log(price)
  }
})
console.log(removeProductButtons)
for (var i = 0; i < removeProductButtons.length; i++){
  removeProductButtons[i].addEventListener("click", function(event){
    event.target.parentElement.parentElement.remove()

   
  })

  let totalAmount = 0
  const cartProducts = document.getElementsByClassName("cardt-product")
  for(var i = 0; i <cartProducts.length; i++){
    console.log(cartProducts[i])
    const productPrice = cartProducts[i].getElementsByClassName("card-product-price")[0].innerText.replece("R$", "").replece(",",".")
    const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
    console.log(productPrice)
     
    totalAmount += (productPrice * productQuantity)

  }
  document.querySelector(".cart-total-container span").innerText ="R$" + totalAmount
}
