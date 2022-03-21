document.getElementById("menu-icon").addEventListener("click", () => {
    document.getElementById('brandLinks').classList.toggle("nav-links-active");
});

const cards = document.getElementsByClassName("faqItem");
const cardsButtons = document.getElementsByClassName("faqButton");
for (let i = 0; i < cards.length; i++) {
    cardsButtons[i].addEventListener("click", () => {
        cards[i].classList.toggle("active");
    });
}