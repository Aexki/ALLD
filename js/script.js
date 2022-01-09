function goDown(x) {
    console.log('scrolling')
    window.scroll({
        top: x,
        behavior: 'smooth'
    });
}

function scrollToElement(e) {
    $('html,body').animate({
        scrollTop: $("." + e).offset().top - 50
    });
}