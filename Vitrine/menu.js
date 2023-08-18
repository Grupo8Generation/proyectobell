const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classNameList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classNameList.remove("aside-visible");
})