// Loading Screen
setTimeout(function() {
    $("#loading-screen").fadeOut(500);
}, 1000);

// Toggle Menu 
$("#overlay-menu").hide();
toggleFade("#overlay-menu-icon", "#overlay-menu");
clickFadeOut("#overlay-menu button", "#overlay-menu");
escapeFadeOut("#overlay-menu");

// Toggle Sliders
$(".projects-desc").hide();
$(".projects-desc-content").hide();
projectsAnimation(".projects-sffpc");
projectsAnimation(".projects-musix");

// Toggle Musix
$("#overlay-musix").hide();
toggleFade(".musix-desc-link", "#overlay-musix");
toggleFade(".musix-desc-link-sm", "#overlay-musix");
clickFadeOut("#overlay-musix button", "#overlay-musix");
escapeFadeOut("#overlay-musix");

// Toggle Resume
$("#overlay-resume").hide();
toggleFade(".footer-cell-resume-button", "#overlay-resume");
clickFadeOut(".overlay-resume-button", "#overlay-resume");
escapeFadeOut("#overlay-resume");

// Toggle About Me
$("#overlay-about").hide();
toggleFade(".footer-cell-about-button", "#overlay-about");
clickFadeOut(".overlay-about-button", "#overlay-about");
escapeFadeOut("#overlay-about");


// Functions
function toggleFade(button, overlay) {
    $(button).click(function() {
        $(overlay).fadeToggle();
    });
}

function clickFadeOut(button, overlay) {
    $(button).click(function() {
        $(overlay).fadeOut();
    });
}

function escapeFadeOut(overlay) {
    $(document).on('keydown', function(event) {
        if (event.key == 'Escape') {
            $(overlay).fadeOut();
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