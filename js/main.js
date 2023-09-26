
$('.service-owl').owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        576: {
            items: 4
        },
        768: {
            items: 5
        },
        1000: {
            items: 7
        }
    }
})




$('.business').owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left next"></i>', '<i class="fa-solid fa-angle-right priv"></i>'],
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
