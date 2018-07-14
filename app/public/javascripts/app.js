$(function() {
    $('#slide-out').sidenav({
        edge: 'right'
    });
    $( "[data-bg]" ).each(function() {
        var attr = $(this).attr('data-bg');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background', 'url('+attr+')');
        }
    });
});

