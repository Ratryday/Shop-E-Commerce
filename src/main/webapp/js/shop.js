const shopListEndpoint = "/shop/list/"
let page = 4;
let size = 16;
document.addEventListener("DOMContentLoaded", getHomeItemList(page))

async function getHomeItemList(page) {
    let response = await fetch(shopListEndpoint + "?" + new URLSearchParams({
        page: page,
        size: size
    }
    ));
    if (response.ok) {
        let json = await response.json();
        setItemsToFrames(json);
    } else {
        alert("Error: " + response.status);
    }
}

async function setItemsToFrames(json) {
    let shopProductsButtonsBlock = document.querySelector(".shop-products__buttons-block")

    let productsList = document.createElement("ul");
    productsList.classList.add("products__list");
    let productsItems = json['data'];

    shopProductsButtonsBlock.before(productsList);

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

document.addEventListener("DOMContentLoaded", getShopProductsButtonsBlock(page));

async function getShopProductsButtonsBlock(page) {
    let response = await fetch(shopListEndpoint + "?" + new URLSearchParams({
        page: page,
        size: size
    }));
    if (response.ok) {
        let json = await response.json();
        setButtonsToFrame(json);
    } else {
        alert("Error: " + response.status);
    }
}

async function setButtonsToFrame(json) {
    let count = json['count'];
    let countPages = count / size;
    let shopProductsButtonsBlock = document.querySelector(".shop-products__buttons-block");
    console.log(shopProductsButtonsBlock);
    for(let i = 1; i <= countPages; i++) {
        let shopProductsBtn = document.createElement("button");
        shopProductsBtn.classList.add("shop-products__btn");
        shopProductsBtn.setAttribute("id", i);
        shopProductsBtn.textContent = i;
        shopProductsButtonsBlock.append(shopProductsBtn);

        let shopProductsBtnId = shopProductsBtn.id;
        
        shopProductsBtn.addEventListener("click", () => {

            console.log("click" + shopProductsBtnId);
            let productsList = document.querySelector(".products__list");
            console.log(productsList);
            productsList.outerHTML = "";
            shopProductsBtn.classList.toggle("shop-products__btn_active");
            getHomeItemList(shopProductsBtnId);
        })

    }

    if(page !== 1) {
        let shopProductsBtnPrev = document.createElement("button");
        shopProductsBtnPrev.classList.add("shop-products__btn", "shop-products__btn-prev");
        shopProductsBtnPrev.textContent = "Prev";
        shopProductsButtonsBlock.prepend(shopProductsBtnPrev);
    } 
    if(page !== countPages) {
        let shopProductsBtnNext = document.createElement("button");
        shopProductsBtnNext.classList.add("shop-products__btn", "shop-products__btn-next");
        shopProductsBtnNext.textContent = "Next";
        shopProductsButtonsBlock.append(shopProductsBtnNext);
    }

}
