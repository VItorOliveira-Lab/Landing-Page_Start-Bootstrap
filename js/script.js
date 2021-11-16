// Scroll Reveal -> Mostrar elementos quando der scroll na página


const scrollReveal = ScrollReveal({
    origin: "left",
    distance: "30px",
    duration: 400,
    reset: true
});

scrollReveal.reveal(`

    #header .logo, #header .sign,
    #one .text, #one input,
    #info .card,
    #banners .banner-text, #banners .banner-image,
    #peoples h1, #peoples .card-people,
    #form-footer .text, #form-footer .one-container form,
    #footer .links, #footer .social-links

    `,
    { interval: 30}
)