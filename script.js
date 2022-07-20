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
    class: 'flex',
    header2: 'Tonic',
    heading3: 'CANOPY',
    list1: ['Back End Dev', '2015'],
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopImage: 'images/card1.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://loltolo-lesapiti.github.io/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/loltolo-lesapiti.github.io',
  },
  {
    class: 'flex reverse',
    header2: 'Multi-Post Stories',
    heading3: 'FACEBOOK',
    list1: ['Full Stack Dev', '2015'],
    paragraph: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    desktopImage: 'images/card2.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://loltolo-lesapiti.github.io/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/loltolo-lesapiti.github.io',
  },
  {
    class: 'flex',
    header2: 'Facebook 360',
    heading3: 'FACEBOOK',
    list1: ['Full Stack Dev', '2015'],
    paragraph: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    desktopImage: 'images/card3.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://loltolo-lesapiti.github.io/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/loltolo-lesapiti.github.io',
  },
  {
    class: 'flex reverse',
    header2: 'Uber Navigation',
    heading3: 'Uber',
    list1: ['Full Stack Dev', '2015'],
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopImage: 'images/card4.png',
    list2: ['html', 'css', 'javaScript'],
    cardButton: 'See Project',
    cardButton1: 'https://loltolo-lesapiti.github.io/',
    cardButton2: 'https://github.com/Loltolo-Lesapiti/loltolo-lesapiti.github.io',
  },
];
cards.forEach((card) => {
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
  DesktopImage.className = 'desktop_image  enl';
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
  const cardButton1 = document.createElement('button');
  cardButton1.className = 'see-more';
  liveLink.appendChild(cardButton1);
  cardButton1.textContent = 'See Live';
  btnDiv.appendChild(liveLink);

  const source = document.createElement('a');
  source.href = card.cardButton2;
  const cardButton2 = document.createElement('button');
  cardButton2.className = 'see-more';
  source.appendChild(cardButton2);
  cardButton2.innerHTML = 'See Source';
  btnDiv.appendChild(source);
});
const buttons = document.querySelectorAll('.displayModal');
const detailsWindow = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    detailsWindow.style.display = 'block';
  });
  closeModal.addEventListener('click', () => {
    detailsWindow.style.display = 'none';
  });
  window.onclick = function (event) {
    if (event.target === detailsWindow) {
      detailsWindow.style.display = 'none';
    }
  };
});
