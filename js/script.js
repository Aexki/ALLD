function goDown(x) {
    console.log('scrolling')
    window.scroll({
        top: x,
        behavior: 'smooth'
    });
}