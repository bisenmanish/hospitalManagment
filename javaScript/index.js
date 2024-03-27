// scroll to top functionality

const scrollbtn=document.querySelector('#scroll-to-top')

window.addEventListener("scroll", ()=>{
    if(window.scrollY >300){
        scrollbtn.style.display='block';

    }else{

        scrollbtn.style.display='none';
    }



});

scrollbtn.addEventListener('click',()=>{

window.scrollTo({

    top:0,
    behavior:"smooth"
});

});


// // ------------------start testomonial js

let mySlides=document.getElementsByClassName("mySlides");
let dots=document.getElementsByClassName('dots');
let slides_data=0;


document.querySelector('.next').addEventListener("click",()=>{
    slideshow(slides_data+1);



});

document.querySelector('.prev').addEventListener('click',()=>{
 slideshow(slides_data-1);



})


function slideshow(num){
if(num>=mySlides.length){
num=0;

}

if(num<0){
num=mySlides.length-1;


}
for(let x of mySlides){

x.style.display='none';
}


mySlides[slides_data].classList.toggle("actives");

dots[slides_data].classList.toggle("activeDots");
mySlides[num].classList.toggle("actives");
dots[num].classList.toggle("activeDots");
slides_data=num;





let Active=document.querySelector('.actives');




Active.style.display='block';

}
document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
bullet.addEventListener("click",()=>{

if(slides_data !== bulletIndex){

    slideshow(bulletIndex);
}
});

});

window.onload=setInterval(function(){

slideshow(slides_data+1)
},3000);
