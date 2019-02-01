import { createNav, createLink, createButton, createDiv, createUl, createLi, createSpan, createImg } from './el_builder'

const pageInfo = {
    title: "EXPATRIATE",
    logo: "logo.png",
    links: {
        link1:{
            text: "MENU",
            url: "#"
        },
        link2: {
            text: "CONTACT",
            url: "#"
        },
        link3: {
            text: "ABOUT",
            url: "#"
        },

    }
}


let mainNav = createNav();
mainNav.className = "navbar navbar-expand-sm navbar-dark bg-dark";

let homeLink = createLink();
Object.assign(homeLink,{
    className: "navbar-brand",
    href: "#",
})
homeLink.innerText = pageInfo.title; 

let logo = createImg();
Object.assign(logo, {
    className: "d-inline-block align-top",
    height: 50, // pixels
    width: 50, // pixels
    src: pageInfo.logo
  })

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


let links = Object.entries(pageInfo.links);

for (let i = 0; i + 1 <= links.length; i++){
    let navItem = createLi();
    navItem.className = "nav-item";
    let navLink = createLink();
    navLink.className = "nav-link";
    navLink.innerHTML = links[i][1].text;
    navLink.setAttribute("href",links[i][1].url);
    
    navItem.appendChild(navLink);
    
    navList.appendChild(navItem);
};

navDiv.appendChild(navList);

collapseButton.appendChild(collapseIcon);

mainNav.appendChild(homeLink);
mainNav.appendChild(collapseButton);
mainNav.appendChild(navDiv);


document.getElementById("container").appendChild(mainNav)