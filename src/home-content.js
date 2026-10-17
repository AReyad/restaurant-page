export function displayHomeContent(targetEle) {
    const header = document.createElement("h1");
    header.textContent = "My Awesome Restaurant";
    const descriptionDiv = document.createElement('div');
    const descriptionText = document.createElement('p');
    descriptionText.textContent = "Our awesome restaurent serves awesome breakfast try it now, and get addicted to it!";
    descriptionDiv.append(descriptionText);
    targetEle.append(header);
    targetEle.append(descriptionDiv);
}
