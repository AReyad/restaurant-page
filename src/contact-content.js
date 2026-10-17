export function displayContactContent(targetEle) {
    const headerEle = document.createElement("h1");
    headerEle.textContent = "Contact Us";
    const contactEle = document.createElement('a');
    const email = "awesome-resturant@email.com";
    contactEle.setAttribute("href", `mailto:${email}`);
    contactEle.textContent = email;
    targetEle.append(headerEle);
    targetEle.append(contactEle);
}
