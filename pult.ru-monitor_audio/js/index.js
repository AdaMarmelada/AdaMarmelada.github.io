$(document).ready(function() {
    $("body").on("click", ".js-toggle-link", function () {
        var $parent = $(this).parent();
        $parent.find('.js-toggle-link').removeClass('active');
        $(this).addClass('active');

        $($(this).attr("data-target")).attr("href", $(this).attr("data-url"));
        $($(this).attr("data-src-target")).attr("src", $(this).attr("data-src"));
    });
    $('html,body').on("click", "a[href^='#']", function(e){
        var anchor = $(this);
        if ($(anchor.attr('href')).length > 0) {
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 500);
            e.preventDefault();
        }
    });
});
