// Control the navigation logo size
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {

        $('.navbar-brand img').css("height", "55px");
    } else {
        $('.navbar-brand img').css("height", "155px");
    }
});