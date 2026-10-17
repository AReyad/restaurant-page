const contentElement = document.querySelector("#content");
const tabButtons = document.querySelectorAll(".tab-button");

import { switchTab } from './switch-tab.js';

window.onload = switchTab("home", contentElement);

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.textContent, contentElement));
});