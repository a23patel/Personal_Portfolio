/* ---------Functionality for the Skills section--------- */
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked / 100);
    var points = "";
    var rotate = 360/dots;

    for(let i=0;i<dots;i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked');
    }
})

/* ---------Setting up the Copyright---------------------------*/
 document.addEventListener("DOMContentLoaded", function () {
        var currentYear = new Date().getFullYear();
        document.getElementById("copyright").innerHTML = "Copyright &copy; " + currentYear + " Abraar Patel | All Rights Reserved.";
 })


 /* -----------Toggling the icon navbar----------------- */
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 
/* -----------Scroll sections Active Link--------------------*/
 let sections = document.querySelectorAll('section')
 let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });


        }
    })

    /*-------- Sticky Navigation bar---------------- */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

 };
    
 /*-------- Scroll Animation Reveal-----------*/
    ScrollReveal({ 
        distance: '80px',
        duration:1500,
        delay:5 
    });


    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-image, .skills-main, .project-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /* ----------Typed JS for displaying multiple texts---------------*/
    const typed = new Typed('.multiple-texts', {
        strings: ['Passionate Programmer', 'Aspiring Software Developer', 'Aspriring Software Engineer', 'Aspiring Data Analyst', 'Aspiring Frontend Developer', 'Aspiring Web Designer'],
        typeSpeed:50,
        backSpeed:85,
        backDelay:500,
        loop:true
    });




