


const filterbutton=document.querySelectorAll(".buttons button");

const filterablecard=document.querySelectorAll('.doctors-details .card');

//define filtercards function
const filterCards=e=>{
    document.querySelector('.active').classList.remove("active");
    e.target.classList.add("active");
    filterablecard.forEach(card=>{
        card.classList.add("hide")
        if(card.dataset.name===e.target.dataset.name||e.target.dataset.name==='all'){

            card.classList.remove("hide")
        }

    });
};

filterbutton.forEach(button => button.addEventListener('click',filterCards))