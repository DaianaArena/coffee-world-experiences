import './assets/css/style.scss';

const wrapper = document.querySelector(".travel");
const cards = wrapper.querySelectorAll(".card");
const info = wrapper.querySelectorAll(".card__info");
const close = wrapper.querySelectorAll(".close");
let details;

cards.forEach(card => {
    card.addEventListener('click', () => {
       
        let cardAttribute = card.getAttribute("place");
        info.forEach(info =>{
            if (info.getAttribute("place") == cardAttribute){
                info.classList.add("active");
                details = info.querySelector(".card__info__details");
                details.style.display = "flex";
            } else if (info.classList.contains('active')){
                info.classList.remove("active");
                details = info.querySelector(".card__info__details");
                details.style.display = "none";
            }
        })
    });
});

close.forEach(close => {
    close.addEventListener('click', () => {
        if (close.parentElement.parentElement.classList.contains('active')){
            close.parentElement.parentElement.classList.remove("active");
            close.parentElement.style.display = "none";
        }
    });
});