const dropDown = document.querySelector(".drop-down");
const list = document.querySelector(".list");

dropDown.addEventListener("click", () => {
    list.classList.toggle("open");
    
    dropDown.classList.toggle("open");
});