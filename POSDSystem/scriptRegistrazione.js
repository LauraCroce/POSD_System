$(document).ready(function() {
    var current_fs, next_fs, previous_fs;
    var opacity;

    $(".next").click(function() {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        next_fs.show();
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });

    $(".previous").click(function() {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        previous_fs.show();
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });

    $(".submit").click(function() {
        return false;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const footerSpace = document.querySelector('.footer-space');
    const footerHeight = document.querySelector('footer').offsetHeight;
    footerSpace.style.height = footerHeight + 'px';

    window.addEventListener('resize', function() {
        footerSpace.style.height = document.querySelector('footer').offsetHeight + 'px';
    });
});
