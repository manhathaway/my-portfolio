// Loading Screen
setTimeout(function() {
    $("#loading-screen").fadeOut(500);
}, 1000);

// Toggle Menu 
$("#overlay-menu").hide();
toggleFade("#overlay-menu-icon", "#overlay-menu");
fadeOut("#overlay-menu button", "#overlay-menu");
fadeOut(".overlay-menu-option", "#overlay-menu")

// Toggle Sliders
$(".projects-desc").hide();
$(".projects-desc-content").hide();
projectsAnimation(".projects-sffpc");
projectsAnimation(".projects-musix");

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
        setTimeout(function(){
            $(overlay).css("transitionDuration", "2s");
            $(overlay).css("transitionTimingFunction", "cubic-bezier(0.075, 0.82, 0.165, 1)");
        }, 350);
    });

}

function fadeOut(button, overlay) {
    $(button).click(function() {
        $(overlay).fadeOut();
        $(overlay).css("transitionDuration", "unset");
        $(overlay).css("transitionTimingFunction", "unset");
    });
    $(document).on('keydown', function(event) {
        if (event.key == 'Escape') {
            $(overlay).fadeOut();
            $(overlay).css("transitionDuration", "unset");
            $(overlay).css("transitionTimingFunction", "unset");
        }
    });
}

function projectsAnimation(project) {
    let clickCounter = false;

    $(project + " .projects-button").click(function() {
        clickCounter = !clickCounter;
        
        if (clickCounter) {
            $(project + " .projects-button").text("▼");
            $(project + " .projects-desc").slideToggle();
            setTimeout(function(){
                $(project + " .projects-desc .projects-desc-content").fadeToggle();
            }, 500);
        } else {
            $(project + " .projects-desc .projects-desc-content").fadeToggle();
            setTimeout(function(){
                $(project + " .projects-desc").slideToggle();
                $(project + " .projects-button").text("▲");
            }, 500);
        }
    });
}