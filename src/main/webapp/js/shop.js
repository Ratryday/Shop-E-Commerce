document.addEventListener("DOMContentLoaded", getHomeItemList)

async function getHomeItemList() {
    let response = await fetch('/shop/list/?' + new URLSearchParams({
        page: 1,
        size: 16
    }
    ));
    if (response.ok) {
        let json = await response.json();
        console.log(json);
    } else {
        alert("Error: " + response.status);
    }
}