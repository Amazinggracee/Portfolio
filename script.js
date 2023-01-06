// mobile menu popup
const hamburgerIcon = document.querySelector('#hamburger');
const navList = document.querySelector('.nav ul');
const navBar = document.querySelector('.nav');
const item = document.querySelectorAll('.nav-item');

function displayMenu() {
  navList.classList.toggle('desktop');
  navBar.classList.toggle('mobile-menu');
  item.forEach((itemElement) => itemElement.classList.toggle('non-display'));
  navList.addEventListener('click', displayMenu);
}

hamburgerIcon.addEventListener('click', displayMenu);

// Project card objects
const projects = [
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Project Art Printing Data',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item8',
    featuredImage: './Images/Desktop-modal.png',
    mobileModalHeading: 'Multi Post Stories',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: 'https://github.com/Amazinggracee/Portfolio/window-pop',
  },
  {
    nameMobile: 'Website Protfolio ',
    nameDesk: 'Website Protfolio ',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item9',
    featuredImage: './Images/Img Placeholder (1).png',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: 'https://github.com/Amazinggracee/Portfolio/window-pop',
  },
  {
    nameMobile: 'Profesional Art Printing Data More',
    nameDesk: 'Profesional Art Printing Data More',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item10',
    featuredImage: './Images/Img Placeholder (2).png',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: 'https://github.com/Amazinggracee/Portfolio/window-pop',
  },
  {
    nameMobile: 'Data Dashboard Healthcare',
    nameDesk: 'Data Dashboard Healthcare',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item11',
    featuredImage: './Images/Img Placeholder (3).png',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: 'https://github.com/Amazinggracee/Portfolio/window-pop',
  },
  {
    nameMobile: 'Website Protfolio ',
    nameDesk: 'Website Protfolio ',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item12',
    featuredImage: './Images/Img Placeholder (1).png',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: 'https://github.com/Amazinggracee/Portfolio/window-pop',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Website Portfolio',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item13',
    featuredImage: './Images/Desktop-modal.png',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: 'https://github.com/Amazinggracee/Portfolio/window-pop',
  },
];

// Project Cards Display
const container = document.querySelector('.grid-container');

for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement('div');
  container.appendChild(div);
  const h2 = document.createElement('h2');
  if (window.innerWidth <= 768) {
    div.classList.add('grid', 'mobile');
    h2.textContent = projects[i].nameMobile;
  } else {
    div.classList.add('grid', 'desktop', projects[i].DesktopItem);
    h2.textContent = projects[i].nameDesk;
  }
  div.appendChild(h2);
}

let count = 0;

const arr = [...container.children];

for (let i = 2; i < arr.length; i += 1) {
  const span = document.createElement('span');
  span.innerHTML = `
    <p>${projects[count].description}</p>
    <div class="lang">
    <ul>
      <li><button>${projects[count].technologies[0]}</button></li>
      <li><button>${projects[count].technologies[1]}</button></li>
      <li><button>${projects[count].technologies[2]}</button></li>
    </ul>

  </div>
  <button class="see-project btn">See Project</button>
`; arr[i].appendChild(span);
  count += 1;
}

// PROJECT POPUP MENU
const seeProjectBtn = document.querySelectorAll('.works .see-project');
const modalDisplay = document.createElement('div');
modalDisplay.classList.add('modal-display');
const allElement = document.querySelector('#all-element'); // for both desktop and mobile

// function called when see project button is clicked;
function modal() {
  document.body.appendChild(modalDisplay);
  allElement.classList.add('bluring');
  document.querySelector('#modal-close').addEventListener('click', () => {
    modalDisplay.remove();
    allElement.classList.remove('bluring');
  });
}

// modal display design
for (let i = 0; i < projects.length; i += 1) {
  modalDisplay.innerHTML = `<div class="modal-headings">
  <h2 class=" mobile modal-Heading">${projects[i].mobileModalHeading}</h2>
  <h2 class=" desktop modal-Heading">${projects[i].desktopModalHeading}</h2>
  <div><img src="images/Icon - Cancel.png" alt="close-icon" id="modal-close" /></div>
  </div>
  <div class="lang modal list">
  <ul>
    <li><button>${projects[i].technologiesModal[0]}</button></li>
    <li><button>${projects[i].technologiesModal[1]}</button></li>
    <li><button>${projects[i].technologiesModal[2]}</button></li>
  </ul>
  </div>

  <div class='In-flex'>
  <img src="./Images/Desktop-modal.png" class=" mobile image" />
  <img src="./Images/Desktop-modal.png" alt="close-icon" class=" desktop image" />

  <div class="flex-right">
  <p>${projects[i].modalDescription}</p>
  <div class="live-btns">
  <a href="https://github.com/Amazinggracee/Portfolio/window-pop" target="_blank"><button class="modal see-project">See Live <img src="images/Icon.png" alt="Github-icon" /></button></a>
  <a href="https://github.com/henry-dura/portfolio-mobile-first" target="_blank"><button class="modal see-project">See Source <img src="images/Icon -GitHub.png" alt="Github-icon" /></button></a>

  </div>
  </div>

  </div>
  `;
}

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', modal);
});
