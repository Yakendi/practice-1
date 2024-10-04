const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const emojiList = document.querySelector(".list");
const emojiItems = document.querySelectorAll("li");

const emojiWidth = 130;
const count = 3;
let position = 0;

nextButton.addEventListener("click", () => {
    position -= emojiWidth * count;
    position = Math.max(position, -emojiWidth * (emojiItems.length - count));
    emojiList.style.marginLeft = position + "px";
});

previousButton.addEventListener("click", () => {
    position += emojiWidth * count;
    position = Math.min(position, 0)
    emojiList.style.marginLeft = position + "px";
});