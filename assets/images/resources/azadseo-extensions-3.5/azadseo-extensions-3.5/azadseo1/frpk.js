$(".banner-content")
    .remove();
$(".site-header-nav.site-header-nav-right")
    .remove();
$("#footer-tall")
    .remove();
$(".skills-prompt")
    .remove();
$(".community")
    .remove();
$(".nav-menu-groups.nav-item")
    .remove();
$('a[href="https://www.skillshare.com/home?via=header"]')
    .remove();
$(".class-menus-container")
    .remove();
$(".project-buttons")
    .remove();
$("#comments")
    .remove();
$(".js-abuse-flag-href.abuse-flag")
    .remove();
$(".site-header-logo")
    .html('<a href="https://www.skillshare.com/browse?via=header" class="site-header-logo-image js-site-header-logo"></a>');
$('.follow-button-wrapper-class-details')
    .remove();
$('.follow-button-wrapper')
    .remove();

$('body')
    .mouseover(function() {
        $(".community")
            .remove();
    });