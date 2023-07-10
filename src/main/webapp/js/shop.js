document.addEventListener("DOMContentLoaded", getHomeItemList)

async function getHomeItemList() {
    let response = await fetch('/shop/list/?' + new URLSearchParams({
        page: "",
        size: ""
    }
    ));
    if (response.ok) {
        let json = await response.json();
        mapItemsToFrames(json);
        console.log(json);
    } else {
        alert("Error: " + response.status);
    }
}

async function mapItemsToFrames(json) {
    alert('hello');
}