import {
  createNav,
  createLink,
  createButton,
  createDiv,
  createUl,
  createLi,
  createSpan,
  createImg
} from "./el_builder";

const pageInfo = {
  title: "EXPATRIATE",
  logo: "logo.png",
  links: {
    link1: {
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
    }
  },
  address: {
    line1: "5424 NE 30th Ave",
    line2: "PDX, OR 97211 USA",
    url: "https://goo.gl/maps/VWVonZEzDP92"
  }
};

let mainNav = createNav();
mainNav.className = "navbar fixed-top navbar-expand-sm navbar-dark";

let homeLink = createLink();
Object.assign(homeLink, {
  className: "navbar-brand",
  href: "#"
});
homeLink.innerText = pageInfo.title;

let logo = createImg();
Object.assign(logo, {
  className: "d-inline-block align-top",
  height: 50, // pixels
  width: 50, // pixels
  src: pageInfo.logo
});

homeLink.insertBefore(logo, homeLink.childNodes[0]);

let collapseButton = createButton();
collapseButton.className = "navbar-toggler collapsed";
collapseButton.setAttribute("data-toggle", "collapse");
collapseButton.setAttribute("data-target", "#navBars");
collapseButton.setAttribute("aria-controls", "navBars");
collapseButton.setAttribute("aria-expanded", "false");
collapseButton.setAttribute("aria-label", "Toggle navigation");

let collapseIcon = createSpan();
collapseIcon.className = "navbar-toggler-icon";

let navDiv = createDiv();
navDiv.className = "navbar-collapse collapse";
navDiv.id = "navBars";

let navList = createUl();
navList.className = "navbar-nav mr-auto";

let links = Object.entries(pageInfo.links);

for (let i = 0; i + 1 <= links.length; i++) {
  let navItem = createLi();
  navItem.className = "nav-item";
  let navLink = createLink();
  navLink.className = "nav-link";
  navLink.innerHTML = links[i][1].text;
  navLink.setAttribute("href", links[i][1].url);

  navItem.appendChild(navLink);

  navList.appendChild(navItem);
}

let address = createLink();
Object.assign(address, {
  className: "address",
  href: pageInfo.address.url
});
address.innerHTML = pageInfo.address.line1 + "<br>" + pageInfo.address.line2;

navDiv.appendChild(navList);
navDiv.appendChild(address);
collapseButton.appendChild(collapseIcon);

mainNav.appendChild(homeLink);
mainNav.appendChild(collapseButton);
mainNav.appendChild(navDiv);

document.getElementById("mainNav").appendChild(mainNav);
