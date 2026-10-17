export function displayMenuContent(targetEle) {
    const headerEle = document.createElement("h1");
    headerEle.textContent = "Menu";
    const menuDiv = document.createElement('div');
    targetEle.append(headerEle);
    targetEle.append(menuDiv);
    createMenuItem("Scrambled Eggs", "10$", menuDiv);
    createMenuItem("Boiled Eggs", "8$", menuDiv);
    createMenuItem("Coffee", "5$", menuDiv);
}


function createMenuItem(name, price, parentEle) {
    const item = document.createElement("div");
    const itemName = document.createElement("h3");
    itemName.textContent = name;
    const itemPrice = document.createElement("p");
    itemPrice.textContent = price;
    item.append(itemName);
    item.append(itemPrice);
    item.classList.add("menu-item");
    parentEle.append(item);
}
