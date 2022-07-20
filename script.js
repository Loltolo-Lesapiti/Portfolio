/* ---Declaring variables */
const openbtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const menu = document.querySelector('.curtain');
const links = document.querySelectorAll('.menu-link');

/* ---Triggers the menu to open-- */
openbtn.addEventListener('click', () => {
  menu.style.height = '100%';
  document.body.style.overflow = 'hidden';
});

/* ----Trigers the menu to close----- */

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
/******************************* *
Code for Dinamically displaying the cards. 
***********************************/
 
const cards = [
    {
      header2: 'Tonic',
      heading3: "CANOPY",
      list1: ['Back End Dev', '2015'],
      paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      mobileImage:"images/card1-image.png",
      desktopImage:"images/card1.png",
      list2: ['html', 'css', 'javaScript'],
      cardButton: "See Project",
    cardButton1: 'See Live',
    cardButton2: 'See More',
    },
    {
    header2: 'Multi-Post Stories',
    heading3: "FACEBOOK",
    list1: ['Full Stack Dev', '2015'],
    paragraph: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    mobileImage:"images/card2-image.png",
    desktopImage:"images/card2.png",
    list2: ['html', 'css', 'javaScript'],
    cardButton: "See Project",
    cardButton1: 'See Live',
    cardButton2: 'See More',
      },
      {
        header2: 'Facebook 360',
        heading3: "FACEBOOK",
        list1: ['Full Stack Dev', '2015'],
        paragraph: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
        mobileImage:"images/card3-image.png",
        desktopImage:"images/card3.png",
        list2: ['html', 'css', 'javaScript'],
        cardButton: "See Project",
    cardButton1: 'See Live',
    cardButton2: 'See More',
        },
        {
        header2: 'Uber Navigation',
        heading3: "Uber",
        list1: ['Full Stack Dev', '2015'],
        paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        mobileImage:"images/card4-image.png",
        desktopImage:"images/card4.png",
        list2: ['html', 'css', 'javaScript'],
        cardButton: "See Project",
    cardButton1: 'See Live',
    cardButton2: 'See More',
            }
  ];

// Creating a card div 
cards.forEach((card)=>{
let cardDiv=document.createElement("div");
cardDiv.className="flex";
document.querySelector(".work").appendChild(cardDiv);
let imageDiv=document.createElement("div");
imageDiv.className="flex_image";
cardDiv.appendChild(imageDiv);
let ContentDiv=document.createElement("div");
ContentDiv.className="flex_content"
cardDiv.appendChild(ContentDiv);
// The title header
let heading2= document.createElement("h2");
ContentDiv.appendChild(heading2);
heading2.textContent=card.header2;

let canopyDiv=document.createElement("div");
canopyDiv.className="canopy formodal"
ContentDiv.appendChild(canopyDiv);
 // Images for mobile and desktop
let mobileImage=document.createElement("img");
mobileImage.className="mobile_image";
mobileImage.src=card.mobileImage;
imageDiv.appendChild(mobileImage);
let DesktopImage=document.createElement("img");
DesktopImage.className="desktop_image";
DesktopImage.src= card.desktopImage;
imageDiv.appendChild(DesktopImage);


let heading3= document.createElement("h3");
canopyDiv.appendChild(heading3);
heading3.textContent=card.heading3;
let paragraph=document.createElement("p");
paragraph.className="card-info";
ContentDiv.appendChild(paragraph);
paragraph.textContent=card.paragraph;

//Creating lists and list items.
let list1=document.createElement("ul");
list1.className="canopy-list";
canopyDiv.appendChild(list1);
for(let j=0; j<card.list1.length;j++){
let list1Elements= document.createElement("li");
list1Elements.textContent=card.list1[j];
list1.appendChild(list1Elements)
}


//List two.
let list2=document.createElement("ul");
list2.className="list second"
ContentDiv.appendChild(list2);
for(let j=0; j<card.list2.length;j++){
    let list2Elements= document.createElement("li");
    list2Elements.textContent=card.list2[j];
    list2.appendChild(list2Elements)
    }

//Creating a button
let cardButton= document.createElement("button");
cardButton.className="see-more displayModal";
cardButton.textContent=card.cardButton;
ContentDiv.appendChild(cardButton);
});

/**
 * Code for creating PopUp content
 */

 cards.forEach((card)=>{
  let modal= document.createElement("div");
  modal.className="modal";
  document.querySelector(".work").appendChild(modal);
  let content= document.createElement("div");
  content.className="modal-content";
  modal.appendChild(content);
  let closebtn=document.createElement("span");
  closebtn.innerHTML="&times;";
  content.appendChild(closebtn);
  closebtn.className="closeModal";
  
  // The title header
  let heading2= document.createElement("h2");
  content.appendChild(heading2);
  heading2.textContent=card.header2;
  heading2.className="h2formodal"
  
  let canopyDiv=document.createElement("div");
  canopyDiv.className="canopy canopymodal"
  content.appendChild(canopyDiv);
  
   // Images for mobile and desktop
   let imageDiv=document.createElement("div");
   imageDiv.className="flex_image";
   content.appendChild(imageDiv);
  let mobileImage=document.createElement("img");
  mobileImage.className="mobile_image popImage";
  mobileImage.src=card.mobileImage;
  imageDiv.appendChild(mobileImage);
  let DesktopImage=document.createElement("img");
  DesktopImage.className="desktop_image";
  DesktopImage.src= card.desktopImage;
  imageDiv.appendChild(DesktopImage);
  // Pagraph and the buttton
  let ContentDiv=document.createElement("div");
  ContentDiv.className="flex_content pop"
  content.appendChild(ContentDiv);
  let heading3= document.createElement("h3");
  canopyDiv.appendChild(heading3);
  heading3.className="modalHeader";
  heading3.textContent=card.heading3;
  let paragraph=document.createElement("p");
  paragraph.className="card-info popParagrah";
  ContentDiv.appendChild(paragraph);
  paragraph.textContent=card.paragraph;
  
  //Creating lists and list items.
  let list1=document.createElement("ul");
  list1.className="canopy-list ul1formodal";
  canopyDiv.appendChild(list1);
  for(let j=0; j<card.list1.length;j++){
  let list1Elements= document.createElement("li");
  list1Elements.textContent=card.list1[j];
  list1.appendChild(list1Elements)
  }
  //List two.
  let list2BTNDiv= document.createElement("div")
  list2BTNDiv.className="list2Btn";
  ContentDiv.appendChild(list2BTNDiv);
  let list2=document.createElement("ul");
  list2.className="list second ulformodal"
  list2BTNDiv.appendChild(list2);
  for(let j=0; j<card.list2.length;j++){
      let list2Elements= document.createElement("li");
      list2Elements.textContent=card.list2[j];
      list2.appendChild(list2Elements)
      }
  
  let btnDiv=document.createElement("div");
  btnDiv.className="btnDiv"
  list2BTNDiv.appendChild(btnDiv);
      //Creating a button
  let cardButton1= document.createElement("button");
  cardButton1.className="see-more";
  cardButton1.textContent=card.cardButton1;
  btnDiv.appendChild(cardButton1);
  
  let cardButton2= document.createElement("button");
  cardButton2.className="see-more";
  cardButton2.textContent=card.cardButton2;
  btnDiv.appendChild(cardButton2);
  
   });

   /**
    * Javascript to Display the modal
    */
    let buttons=document.querySelectorAll(".displayModal");
    let detailsWindow=document.querySelector(".modal");
    let closeModal=document.querySelector(".closeModal");
    buttons.forEach((button)=>{
      button.addEventListener("click",()=>{
        detailsWindow.style.display="block";

    });
    closeModal.addEventListener("click",()=>{
      detailsWindow.style.display="none";
    });
    window.onclick = function(event) {
       if (event.target == detailsWindow) {
        detailsWindow.style.display = "none";
       }
     }
   });
  

