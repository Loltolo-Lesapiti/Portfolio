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

  // Modal
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
  const heading2m = document.createElement('h2');
  content.appendChild(heading2m);
  heading2m.textContent = card.header2;
  heading2m.className = 'h2formodal';
  const canopyDivm = document.createElement('div');
  canopyDivm.className = 'canopy canopymodal';
  content.appendChild(canopyDivm);
  const mobileImagem = document.createElement('img');
  mobileImagem.className = 'mobile_image enlm';
  mobileImagem.src = card.desktopImage;
  content.appendChild(mobileImagem);
  const DesktopImagem = document.createElement('img');
  DesktopImagem.className = 'desktop_image  enl';
  DesktopImagem.src = card.desktopImage;
  content.appendChild(DesktopImagem);
  const ContentDivm = document.createElement('div');
  ContentDivm.className = 'flex_content pop';
  content.appendChild(ContentDivm);
  const heading3m = document.createElement('h3');
  canopyDivm.appendChild(heading3m);
  heading3m.className = 'modalHeader';
  heading3m.textContent = card.heading3;
  const paragraphm = document.createElement('p');
  paragraphm.className = 'card-info popParagrah';
  ContentDivm.appendChild(paragraphm);
  paragraphm.textContent = card.paragraph;
  const list1m = document.createElement('ul');
  list1m.className = 'canopy-list ul1formodal';
  canopyDivm.appendChild(list1m);
  for (let j = 0; j < card.list1.length; j++) {
    const list1Elements = document.createElement('li');
    list1Elements.textContent = card.list1[j];
    list1m.appendChild(list1Elements);
  }
  const list2BTNDivm = document.createElement('div');
  list2BTNDivm.className = 'list2Btn';
  ContentDivm.appendChild(list2BTNDivm);
  const list2m = document.createElement('ul');
  list2m.className = 'list second ulformodal';
  list2BTNDivm.appendChild(list2m);
  for (let j = 0; j < card.list2.length; j++) {
    const list2Elements = document.createElement('li');
    list2Elements.textContent = card.list2[j];
    list2m.appendChild(list2Elements);
  }
  const btnDivm = document.createElement('div');
  btnDivm.className = 'btnDiv';
  list2BTNDivm.appendChild(btnDivm);
  const liveLink = document.createElement('a');
  liveLink.href = card.cardButton1;
  const cardButton1 = document.createElement('button');
  cardButton1.className = 'see-more';
  liveLink.appendChild(cardButton1);
  cardButton1.textContent = 'See Live';
  btnDivm.appendChild(liveLink);

  const source = document.createElement('a');
  source.href = card.cardButton2;
  const cardButton2 = document.createElement('button');
  cardButton2.className = 'see-more';
  source.appendChild(cardButton2);
  cardButton2.innerHTML = 'See Source';
  btnDivm.appendChild(source);

  //Button action.
  cardButton.addEventListener("click",()=>{
    modal.style.display="block";
  })

  closebtn.addEventListener("click",()=>{
    modal.style.display="none";
  })

  //Form validation.

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
  storeUserInput();
});

// Local storage.
const first_name= document.querySelector("#name");
const message= document.querySelector("#textarea");

const contactInfo={
  name: "",
  email: "",
  message:""
}
function storeUserInput(){
  contactInfo.name=first_name.value;
  contactInfo.message=message.value;
  contactInfo.email=email.value;
if(window.localStorage.getItem(contactInfo)===null){
  localStorage.setItem("contactInfo",JSON.stringify(contactInfo));
}else{
  contactInfo.name=JSON.parse(window.localStorage.getItem("contactInfo")).name.value;
  contactInfo.email=JSON.parse(window.localStorage.getItem("contactInfo")).email.value;
  contactInfo.message=JSON.parse(window.localStorage.getItem("contactInfo")).message.value;
}
 }




