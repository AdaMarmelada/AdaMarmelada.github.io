$(document).ready(function() {
    $("body").on("click", ".js-toggle-link", function () {
        var $parent = $(this).parent();
        $parent.find('.js-toggle-link').removeClass('active');
        $(this).addClass('active');

        $($(this).attr("data-target")).attr("href", $(this).attr("data-url"));
    });
});
