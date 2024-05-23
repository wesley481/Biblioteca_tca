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
const price = document.getElementById("price")

let cart = [];


// Abriri o moodal do carrinho 
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})

//Fechar o modal quando clicar fora 
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})


menu.addEventListener("click", function(){
   // console.log(event.target)



   let parentButton = event.target.closest(".add-to-cart-btn")
      if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
       addToCart(name,price)
            //Adicionar no carrinho
      }
})

// Função para adicionar no carrinho 
function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name)

    if(existingItem){
        //se o item já existe, aumente apenas a quantidada + 1 
       existingItem.quantiy += 1;
        return;
    }

    cart.push({
        name,
        price,
        quantiy: 1,
    })

}

