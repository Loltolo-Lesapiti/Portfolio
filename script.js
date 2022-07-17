/*---Declaring variables*/
let openbtn= document.querySelector(".open");
let closebtn= document.querySelector(".close");
let menu=document.querySelector(".curtain");
let links=document.querySelectorAll(".menu-link");

/*---Triggers the menu to open-- */
openbtn.addEventListener("click",()=>{
    menu.style.height="100%";
})

/*----Trigers the menu to close----- */

closebtn.addEventListener("click",()=>{
    menu.style.height="0";
})

links.forEach((link)=>{
    link.addEventListener("click",()=>{
        menu.style.height="0";
    })
})



