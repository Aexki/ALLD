function scrollToElement(e) {
    if (e == 'contact') {
        $('html,body').animate({
            scrollTop: $("." + e).offset().top - 120
        });
        return;
    }
    $('html,body').animate({
        scrollTop: $("." + e).offset().top - 50
    });
}

var officeInfo = {
    'USA': {
        'office-address': '518 144th Ave NE Redmond, WA 98052', 'office-phone': '+1 989-234 - 8892'
    },
    'INDIA': {
        'office-address': 'Bhubaneswar, Odisha, PIN-751003', 'office-phone': '+91 0000-000-000'
    }
}
var currentOffice = 'USA';

function changeOffice(place) {
    document.getElementById('office-address').innerHTML = officeInfo[place]['office-address'];
    // document.getElementById('office-phone').innerHTML = officeInfo[place]['office-phone'];
    document.getElementById(place).classList.add('active');
    document.getElementById(currentOffice).classList.remove('active');
    currentOffice = place;
}
