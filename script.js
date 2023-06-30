const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const menu = document.querySelector('.curtain');
const links = document.querySelectorAll('.menu-link');
openbtn.addEventListener('click', () => {
  menu.style.height = '100%';
  document.body.style.overflow = 'hidden';
});
closebtn.addEventListener('click', () => {
  menu.style.height = '0';
  document.body.style.overflow = 'visible';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.height = '0';
    document.body.style.overflow = 'visible';
  });
});
const cards = [
  {
    class: 'flex reverse',
    header2: 'Taas Homes',
    heading3: 'Petro',
    list1: ['Full Stack Dev', '2022'],
    paragraph: 'Taas Homes is a real estate company website. Taas homes is located in Nairobi Kenya and it deals with house purchase.',
    desktopImage: './images/Taas_homes.PNG',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://loltolo-lesapiti.github.io/Taas-Real-Estate/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/Taas-Real-Estate',
  },
  {
    class: 'flex reverse',
    header2: 'Virtual Chef',
    heading3: 'Petro',
    list1: ['Full Stack Dev', '2022'],
    paragraph: 'An application that showcases an array of authentic Jamaican dishes. Explores the vibrant culinary culture, engages with fellow users through comments, and allows users to reserve their favorite dish recipe with ease.',
    desktopImage: './images/Vitual-cheff.PNG',
    list2: ['html', 'css', 'JavaScript', 'Webpack'],
    cardButton: 'See Project',
    cardButton1: 'https://loltolo-lesapiti.github.io/Virtual-cheff/dist/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/Virtual-cheff',
  },
  {
    class: 'flex',
    header2: 'Taas Forex',
    heading3: 'Petro',
    list1: ['Back End Dev', '2022'],
    paragraph: 'This application makes use of financial modeling API to show real time exchange information of all major currencies.',
    desktopImage: './images/forex.jpg',
    list2: ['html', 'css', 'react'],
    cardButton: 'See Project',
    cardButton1: 'https://stunning-pastelito-fea99b.netlify.app/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/Metrics-webapp',
  },
  {
    class: 'flex',
    header2: 'Budget App',
    heading3: 'Petro',
    list1: ['Full Stack Dev', '2022'],
    paragraph: 'Your user-friendly budgeting app with secure authentication, intuitive interface, effortless budget item addition and categorization, real-time tracking of spending habits, and seamless recording of transactions for effective money management.',
    desktopImage: './images/budget.PNG',
    list2: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    cardButton: 'See Project',
    cardButton1: 'https://budgetaas.onrender.com/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/Budget-App',
  }
];
cards.forEach((card, index) => {
  const cardDiv = document.createElement('div');
  cardDiv.className = card.class;
  document.querySelector('.work').appendChild(cardDiv);

  const imageDiv = document.createElement('div');
  imageDiv.className = 'flex_image';
  cardDiv.appendChild(imageDiv);

  const ContentDiv = document.createElement('div');
  ContentDiv.className = 'flex_content';
  cardDiv.appendChild(ContentDiv);

  const heading2 = document.createElement('h2');
  ContentDiv.appendChild(heading2);
  heading2.textContent = card.header2;

  const canopyDiv = document.createElement('div');
  canopyDiv.className = 'canopy formodal';
  ContentDiv.appendChild(canopyDiv);

  const mobileImage = document.createElement('img');
  mobileImage.className = 'mobile_image';
  mobileImage.src = card.desktopImage;
  imageDiv.appendChild(mobileImage);

  const DesktopImage = document.createElement('img');
  DesktopImage.className = 'desktop_image';
  DesktopImage.src = card.desktopImage;
  imageDiv.appendChild(DesktopImage);

  const heading3 = document.createElement('h3');
  canopyDiv.appendChild(heading3);
  heading3.textContent = card.heading3;

  const paragraph = document.createElement('p');
  paragraph.className = 'card-info';
  ContentDiv.appendChild(paragraph);
  paragraph.textContent = card.paragraph;

  const list1 = document.createElement('ul');
  list1.className = 'canopy-list';
  canopyDiv.appendChild(list1);

  for (let j = 0; j < card.list1.length; j++) {
    const list1Elements = document.createElement('li');
    list1Elements.textContent = card.list1[j];
    list1.appendChild(list1Elements);
  }

  const list2 = document.createElement('ul');
  list2.className = 'list second';
  ContentDiv.appendChild(list2);

  for (let j = 0; j < card.list2.length; j++) {
    const list2Elements = document.createElement('li');
    list2Elements.textContent = card.list2[j];
    list2.appendChild(list2Elements);
  }

  const cardButton = document.createElement('button');
  cardButton.className = 'see-more displayModal';
  cardButton.textContent = card.cardButton;
  ContentDiv.appendChild(cardButton);

  // Add a custom attribute to store the index of the card
  cardButton.setAttribute('data-index', index);
});

cards.forEach((card) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  document.querySelector('.work').appendChild(modal);

  const content = document.createElement('div');
  content.className = 'modal-content';
  modal.appendChild(content);

  const closebtn = document.createElement('span');
  closebtn.innerHTML = '&times;';
  content.appendChild(closebtn);
  closebtn.className = 'closeModal';

  const heading2 = document.createElement('h2');
  content.appendChild(heading2);
  heading2.textContent = card.header2;
  heading2.className = 'h2formodal';

  const canopyDiv = document.createElement('div');
  canopyDiv.className = 'canopy canopymodal';
  content.appendChild(canopyDiv);

  const mobileImage = document.createElement('img');
  mobileImage.className = 'mobile_image enlm';
  mobileImage.src = card.desktopImage;
  content.appendChild(mobileImage);

  const DesktopImage = document.createElement('img');
  DesktopImage.className = 'desktop_image enl';
  DesktopImage.src = card.desktopImage;
  content.appendChild(DesktopImage);

  const ContentDiv = document.createElement('div');
  ContentDiv.className = 'flex_content pop';
 content.appendChild(ContentDiv);

const heading3 = document.createElement('h3');
canopyDiv.appendChild(heading3);
heading3.className = 'modalHeader';
heading3.textContent = card.heading3;

const paragraph = document.createElement('p');
paragraph.className = 'card-info popParagrah';
ContentDiv.appendChild(paragraph);
paragraph.textContent = card.paragraph;

const list1 = document.createElement('ul');
list1.className = 'canopy-list ul1formodal';
canopyDiv.appendChild(list1);

for (let j = 0; j < card.list1.length; j++) {
const list1Elements = document.createElement('li');
list1Elements.textContent = card.list1[j];
list1.appendChild(list1Elements);
}

const list2BTNDiv = document.createElement('div');
list2BTNDiv.className = 'list2Btn';
ContentDiv.appendChild(list2BTNDiv);

const list2 = document.createElement('ul');
list2.className = 'list second ulformodal';
list2BTNDiv.appendChild(list2);

for (let j = 0; j < card.list2.length; j++) {
const list2Elements = document.createElement('li');
list2Elements.textContent = card.list2[j];
list2.appendChild(list2Elements);
}

const btnDiv = document.createElement('div');
btnDiv.className = 'btnDiv';
list2BTNDiv.appendChild(btnDiv);

const liveLink = document.createElement('a');
liveLink.href = card.cardButton1;
liveLink.target = '_blank';

const cardButton1 = document.createElement('button');
cardButton1.className = 'see-more';
liveLink.appendChild(cardButton1);
cardButton1.textContent = 'See Live';
btnDiv.appendChild(liveLink);

const source = document.createElement('a');
source.href = card.cardButton2;
source.target = '_blank';

const cardButton2 = document.createElement('button');
cardButton2.className = 'see-more';
source.appendChild(cardButton2);
cardButton2.innerHTML = 'See Source';
btnDiv.appendChild(source);
});

const buttons = document.querySelectorAll('.displayModal');
const detailsWindow = document.querySelector('.modal');
const closeModal = document.querySelectorAll('.closeModal');

buttons.forEach((button) => {
button.addEventListener('click', () => {
const index = button.getAttribute('data-index');
const modals = document.querySelectorAll('.modal');
const modal = modals[index];
modal.style.display = 'block';
});
});

closeModal.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal');
    modal.style.display = 'none';
  });
});

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};

const form = document.querySelector('.form-container');
const email = form.querySelector('#email');

form.addEventListener('submit', (e) => {
if (email.value !== email.value.toLowerCase()) {
e.preventDefault();
document.querySelector('.errorMessage').style.color = 'red';
setTimeout(() => {
document.querySelector('.errorMessage').style.color = '#6070ff';
}, 2500);
}
});

// JavaScript to handle dropdown toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        this.classList.toggle('open');
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});






