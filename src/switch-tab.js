import { displayHomeContent } from './home-content.js';
import { displayContactContent } from './contact-content.js';
import { displayMenuContent } from './menu-content.js';

export function switchTab(tab, contentElement) {
    const tabName = tab.toLowerCase();
    contentElement.innerHTML = "";
    if(tabName == "home") return displayHomeContent(contentElement);
    if(tabName == "contact") return displayContactContent(contentElement);
    if(tabName == "menu") return displayMenuContent(contentElement);
};