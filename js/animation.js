document.addEventListener('DOMContentLoaded', () => {
    landingPageAnimation();
    pageScroll();
})


function landingPageAnimation(){
    const tl = gsap.timeline({defaults: {ease: "power2.easeInOut"}});

    tl.to('.header', {y: "0%", duration: 1, opacity: 1});
    tl.to('.hide-text', {y: "0%", duration: 1, stagger: 0.15});

    tl.from('.intro-btn', {y: '100%', duration: 1, opacity: 0})

}





// scroll reveal


function pageScroll(){

    window.sr = ScrollReveal();


    sr.reveal('.animate-left', {
        opacity: 0,
        duration: 2000,
        distance: '10%',
        delay: 300
    });

    sr.reveal('.left-container-content', {
        origin: 'right',
        distance: '10%',
        opacity: 0,
        duration: 2000,
        distance: '10%',
        delay: 300
    });



    sr.reveal('.animate-right', {
        origin: 'left',
        opacity: 0,
        duration: 2000,
        delay: 300
    });


    sr.reveal('.right-container-content', {
        origin: 'left',
        distance: '10%',
        opacity: 0,
        duration: 2000,
        distance: '10%',
        delay: 300
    });
    

    sr.reveal('.footer-items', {
        origin: 'top',
        distance: '10%',
        opacity: 0,
        duration: 1500,
        delay: 400
    });
    sr.reveal('.footer-contact', {
        origin: 'bottom',
        distance: '10%',
        opacity: 0,
        duration: 1500,
        delay: 600
    });
    
}
    

//sticky navbar
let height = $('.header').height()

$(window).scroll(function (){
    if($(this).scrollTop() > height){
        $('.header').addClass('sticky');
    }else{
        $('.header').removeClass('sticky');

    }
})


