const share=document.querySelector(".share");
const icons=document.querySelector(".icons");

share.addEventListener("click",()=>{
if(icons.style.display=="none"){   icons.style.display="flex";}
else icons.style.display="none";
})