// --------------------modal----------------------

const section = document.querySelector('.second-section');
section.innerHTML = `
<div class="second-sec-div second-section">
<section class="works">
    <h2 title="Projects">
        My Recent Works
        <hr id="hrh1" />
    </h2>
    <hr />

    <div title="Multi-Post Stories" class="placeholder-image"></div>

    <h3 title="Project Title">Profesional Art Printing Data</h3>

    <p title="Project Description">
        A daily selection of privately personalized reads; no accounts or
        sign-ups required. Has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a standard dummy text.
    </p>
    <div title="Tech Used" id="grid-case">
        <ul class="grid-container">
            <li class="item1">CSS</li>
            <li class="item2">HTML</li>
            <li class="item3">JavaScript</li>
            <li class="item4">Ruby</li>
        </ul>
        <button type="button" class="see-project">See Project</button>
    </div>
</section>

<main class="pro-art">
    <div title="professional art" class="pro-div">
        <section title="The art work" class="art-work1 works-card" id="myPop1">
        <h2 class="pro-h1></h2>
        <p class="pro-h3"></p>
            <button type="button" id="see-project1" class="trigger">
                See Project
            </button>
        </section>

        <section title="The art work" class="art-work2 works-card" id="myPop2">
            <h2 title="Profesional" class="pro-h1 work-cards">
                Data Dashboard Healthcare
            </h2>
            <p class="pro-h3">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. has been the industry's standard
            </p>

            <ul title="Arting tools" class="btn3">
                <li class="btnh">HTML</li>
                <li class="btnb">BOOTSTRAP</li>
                <li class="btnr">RUBY</li>
            </ul>

            <button type="button" id="see-project2" class="trigger">See Project</button>
        </section>

        <section title="The art work" class="art-work3 works-card" id="myPop3">
            <h2 title="Profesional" class="pro-h1 work-cards">
                Website Protfolio
            </h2>
            <p class="pro-h3">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. has been the industry's standard
            </p>

            <ul title="Arting tools" class="btn3">
                <li class="btnh">HTML</li>
                <li class="btnb">BOOTSTRAP</li>
                <li class="btnr">RUBY</li>
            </ul>

            <button type="button" class="trigger">See Project</button>
        </section>
    </div>
    <div title="professional art" class="pro-div">
        <section title="The art work" class="art-work4 works-card" id="myPop4">
            <h2 title="Profesional" class="pro-h1 work-cards">
                Profesional Art Printing Data
            </h2>
            <p class="pro-h3">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. has been the industry's standard
            </p>

            <ul title="Arting tools" class="btn3">
                <li class="btnh">HTML</li>
                <li class="btnb">BOOTSTRAP</li>
                <li class="btnr">RUBY</li>
            </ul>
            <button type="button" class="see-project4">See Project</button>
        </section>
        <section title="The art work" class="art-work2 works-card" id="myPop2">
            <h2 title="Profesional" class="pro-h1 work-cards">
                Data Dashboard Healthcare
            </h2>
            <p class="pro-h3">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. has been the industry's standard
            </p>

            <ul title="Arting tools" class="btn3">
                <li class="btnh">HTML</li>
                <li class="btnb">BOOTSTRAP</li>
                <li class="btnr">RUBY</li>
            </ul>
            <button type="button" class="trigger">See Project</button>
        </section>
        <section title="The art work" class="art-work3 works-card" id="myPop3">
            <h2 title="Profesional" class="pro-h1 work-cards">
                Website Protfolio
            </h2>
            <p class="pro-h3">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. has been the industry's standard
            </p>

            <ul title="Arting tools" class="btn3">
                <li class="btnh">HTML</li>
                <li class="btnb">BOOTSTRAP</li>
                <li class="btnr">RUBY</li>
            </ul>
            <button type="button" class="trigger">See Project</button>
        </section>
    </div>
</main>
</div>`;

const projectDetails = [
  {
    name: 'Data Dashboard HealthCare',
    description: 'This is a Data Dashboard Healthcare. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Website Portfolio',
    description: 'Hello this is a website portfolio. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Professional Art',
    description: 'This is a Professional Art project. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'SmartHub Groceries',
    description: 'This is  Smart Hub Groceries project. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'BloodBank Management',
    description: 'This is a Blood bank management system. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Professional Art Printing Data',
    description: 'Hey, this is Professional Art Printing Data. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
];

const names = document.querySelectorAll('.pro-h1');
for (let i = 0; i < names.length; i += 1) {
  names[i].textContent = projectDetails[i].name;
}

const descriptions = document.querySelectorAll('.pro-h3');
for (let i = 0; i < descriptions.length; i += 1) {
  descriptions[i].textContent = projectDetails[i].description;
}

const body = document.querySelector('body');
const main = document.createElement('section');
main.classList.add('popup-section');
main.innerHTML = `
<div title="Projects" id="popUpSec">
        <div class="popUpDiv">
            <h2 id="popMobile" class="pop-mobile"></h2>
            <button class="modal-close modal-exit">X</button>
        </div>
        <ul id="pop-lang">
            <li class="btn-pop">html</li>
            <li class="btn-pop">Bootstrap</li>
            <li class="btn-pop">Ruby on rails</li>
        </ul>
        <div class="change">
            <img src="./Images/Snapshoot Portfolio.png" alt="snapshoot" class="pop-work" />

            <div class="pop-des">
                <p class="descr-t">
                </p>
                <div class="pop-btnSub">
                    <button class="pop-btnSub">
                        See Live<img src="./Images/Icon - Export.png" alt="Export" />
                    </button>
                    <button class="pop-btnSub">
                        See Source<img src="./Images/Icon -GitHub.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>`;

body.appendChild(main);

const openPopup = document.querySelectorAll('.works-card button');
openPopup.forEach((item) => {
  item.addEventListener('click', () => {
    const popWinHeader = document.querySelector('.pop-mobile');
    popWinHeader.textContent = item.parentElement.children[0].textContent;

    const popWinPar = document.querySelector('.descr-t');
    popWinPar.textContent = item.parentElement.children[1].textContent;
    main.classList.toggle('active');
  });
});

const closePopup = document.querySelector('.modal-close');
closePopup.addEventListener('click', () => {
  main.classList.remove('active');
});

const multiPostProject = document.querySelector('.btn-project');
multiPostProject.addEventListener('click', () => {
  const popWinHeader = document.querySelector('pop-mobile');
  popWinHeader.textContent = multiPostProject.parentElement.children[0].children[0].textContent;

  const popWinPar = document.querySelector('.descr-t');
  popWinPar.textContent = multiPostProject.parentElement.children[0].children[1].textContent;
  main.classList.toggle('active');
});

