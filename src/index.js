import { createNav, createLink, createButton, createDiv, createUl, createLi, createSpan, createImg } from './nav_skeleton'

let mainNav = createNav();
mainNav.className = "navbar navbar-expand-md navbar-dark bg-dark";

let homeLink = createLink();
homeLink.className = "navbar-brand";
homeLink.innerText = "expatriate"; 
homeLink.setAttribute("href", "#");



let logo = createImg();
logo.className = "d-inline-block align-top";
logo.setAttribute("width", "50");
logo.setAttribute("height", "50");
logo.setAttribute("src", "logo.png");

homeLink.insertBefore(logo, homeLink.childNodes[0]);


let collapseButton = createButton();
collapseButton.className = "navbar-toggler collapsed";
collapseButton.setAttribute("data-toggle", "collapse");
collapseButton.setAttribute("data-target", "#navBars");
collapseButton.setAttribute("aria-controls", "navBars")
collapseButton.setAttribute("aria-expanded", "false")
collapseButton.setAttribute("aria-label", "Toggle navigation");

let collapseIcon = createSpan();
collapseIcon.className = "navbar-toggler-icon";

let navDiv = createDiv();
navDiv.className = "navbar-collapse collapse";
navDiv.id = "navBars";

let navList = createUl();
navList.className = "navbar-nav mr-auto";

let navItem = createLi();
navItem.className = "nav-item";

let navLink = createLink();
navLink.className = "nav-link";
navLink.innerHTML = "Home";
navLink.setAttribute("href","#");

navItem.appendChild(navLink);

navList.appendChild(navItem);

navDiv.appendChild(navList);

collapseButton.appendChild(collapseIcon);

mainNav.appendChild(homeLink);
mainNav.appendChild(collapseButton);
mainNav.appendChild(navDiv);


document.getElementById("container").appendChild(mainNav)

