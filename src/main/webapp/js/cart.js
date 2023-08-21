'use strict'
document.addEventListener("DOMContentLoaded", performCartAction);

let body = document.querySelector(".body")
let cart = document.querySelector(".cart");
let btnCart = document.querySelector(".btn__cart");
let cartClose = document.querySelector(".cart__close");
let cartProducts = document.querySelectorAll(".cart__products-item");


let cartItemsClose = document.querySelectorAll(".cart__item-close");

function performCartAction() {
    openCart();
    closeItemCart();
    closeCart();
    
}

function openCart() {
    btnCart.addEventListener("click", () => {
        cart.style.display = "block";
        toggleBackgroundBody();
    })
}

function closeCart() {
    cartClose.addEventListener("click", () => {
        cart.style.display = "none";
        toggleBackgroundBody();
    })
}

function toggleBackgroundBody() {
    body.classList.toggle('background-body')
}
function closeItemCart(cartId) {
    
}