$(function() {
    $(".includeHTML").each(function() {
        $(this).load($(this).data("href"));
    });
});
