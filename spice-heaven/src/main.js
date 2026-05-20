import './style.css'

 const first=document.getElementById('first_page');
 const burger=document.getElementById('burger_image');
 const menu=document.getElementById('menu_page');

 burger.addEventListener("click",()=>{
  burger.classList.add(
    "scale-150",
    "-translate-y-40",
    "opacity-0",
    "rotate-12"
  );
  first.classList.add(
    "opacity-0",
    "scale-95"
  );

  setTimeout(()=>{

    first.classList.add("hidden");
    menu.classList.remove("hidden");
    setTimeout(()=>{
      menu.classList.remove(
        "opacity-0",
        "translate-y-20"
      );
    },100);
  },100);
 });