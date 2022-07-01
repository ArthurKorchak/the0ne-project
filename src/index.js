(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {

    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    
    });
})();

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows:false,
        speed: 300,
        easing:'ease',
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        touchThreshold: 7,
        dotsClass: "slider-icons__list",
        // appendDots:$(this).siblings('slider-icons__list'),

    })


});

