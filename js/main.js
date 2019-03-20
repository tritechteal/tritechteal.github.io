// Control the navigation logo size
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50 ) {

        $('.navbar-brand img').css("height", "55px");
    } else if(screen.width > 768) {
        $('.navbar-brand img').css("height", "155px");
    }
});