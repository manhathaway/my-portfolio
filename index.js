// Loading Screen
setTimeout(function() {
    $("#loading-screen").fadeOut(500);
}, 1000);



// Toggle Menu 
$("#overlay-menu").hide();
toggleFade("#overlay-menu-icon", "#overlay-menu");
fadeOut("#overlay-menu button", "#overlay-menu");

// Toggle Sliders
$(".projects-desc").hide();
toggleSlide(".projects-sffpc");
toggleSlide(".projects-musix");

// Toggle Musix
$("#overlay-musix").hide();
toggleFade(".musix-desc-link", "#overlay-musix");
toggleFade(".musix-desc-link-sm", "#overlay-musix");
fadeOut("#overlay-musix button", "#overlay-musix");

// Toggle Resume
$("#overlay-resume").hide();
toggleFade(".footer-cell-resume-button", "#overlay-resume");
fadeOut(".overlay-resume-button", "#overlay-resume");

// Toggle About Me
$("#overlay-about").hide();
toggleFade(".footer-cell-about-button", "#overlay-about");
fadeOut(".overlay-about-button", "#overlay-about");


// Functions
function toggleFade(button, overlay) {
    $(button).click(function() {
        $(overlay).fadeToggle();
    });
}

function fadeOut(button, overlay) {
    $(button).click(function() {
        $(overlay).fadeOut();
    });
}

function toggleSlide(project) {
    $(project + " .projects-button").click(function() {
        $(project + " .projects-desc").slideToggle();
    });
}