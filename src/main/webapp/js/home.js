const shopListEndpoint = "/shop/list/"

document.addEventListener("DOMContentLoaded", getHomeItemList)

async function getHomeItemList() {
    let response = await fetch(shopListEndpoint + "?" + new URLSearchParams({
        page: "1",
        size: "8"
    }
    ));
    if (response.ok) {
        let json = await response.json();
        mapItemsToFrames(json);
    } else {
        alert("Error: " + response.status);
    }
}

async function mapItemsToFrames(json) {
    let productsContent = document.querySelector(".products__content");
    let productsBtn = document.querySelector(".products__btn");
    let productsList = document.createElement("ul");
    productsList.classList.add("products__list");
    let productsItems = json['data'];
    productsBtn.before(productsList);
    for(let i = 0; i < productsItems.length; i++) {
        let productsItem = document.createElement("li");
        let productsImgBlock = document.createElement("div");
        let productsTextBlock = document.createElement("div");
        let img = document.createElement("img");
        let productsItemTitle = document.createElement("a");
        let productsItemDescription = document.createElement("p");
        let productsItemPrice = document.createElement("p");

        productsItem.classList.add("products__item");
        productsImgBlock.classList.add("products__img-block");
        productsTextBlock.classList.add("products__text-block");
        productsItemTitle.classList.add("products__item-title");
        productsItemDescription.classList.add("products__item-description");
        productsItemPrice.classList.add("products__item-price");

        img.setAttribute("src", "./images/products/" + productsItems[i].imageUrl);
        productsItemTitle.setAttribute("href", "");

        productsItemTitle.textContent = productsItems[i].name;
        productsItemDescription.textContent = productsItems[i].description;
        productsItemPrice.textContent = productsItems[i].price;

        productsList.append(productsItem);
        productsItem.append(productsImgBlock);
        productsImgBlock.append(img);
        productsItem.append(productsTextBlock);
        productsTextBlock.append(productsItemTitle);
        productsTextBlock.append(productsItemDescription);
        productsTextBlock.append(productsItemPrice);

        let responseHover = await fetch("view/templates/products-item-hover.html"); 
        if (responseHover.ok) {
            let productsItemHoverText = await responseHover.text();
            let productsItemHover = document.createElement("div");
            productsItemHover.classList.add("products__item-hover")
            productsItemHover.innerHTML = productsItemHoverText;
            productsItem.append(productsItemHover);

        } else {
            alert("Error: " + responseHover.status);
        }
    }
}
document.addEventListener("DOMContentLoaded", addListenerToShowMoreBtn)
function addListenerToShowMoreBtn() {
    let productsBtn = document.querySelector(".products__btn");
    console.log(productsBtn);
    productsBtn.addEventListener("click", getProducts);
}

let showMoreButtonCount = 0;

async function getProducts() {
    showMoreButtonCount++;
    let response = await fetch(shopListEndpoint + "?" + new URLSearchParams({
        page: showMoreButtonCount,
        size: "8"
    }))
    if (response.ok) {
        let json = await response.json();
        mapItemsToFrames(json);
    } else {
        alert("Error: " + response.status);
    }
}