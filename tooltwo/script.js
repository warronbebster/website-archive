// var width = $(window).width();
// var height = $(window).height();

// $(window).resize(function() {
//     width = $(window).width();
//     height = $(window).height();
// });

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// $(document).bind('mousemove', function(e) {
//     $('body').css({
//         // left: e.pageX,
//         // top: e.pageY,
//         "color": "rgb(113, 225, 196)"
//     });
// });

var scrollV;
var scrollH;

// var body = document.body;
// var html = document.documentElement;

$(window).scroll(function() {
    scrollV = $(window).scrollTop();
    scrollH = $(window).scrollLeft();

    // $('canvas').css({
    //     "background-color": "rgba(0,0,0," + map_range((scrollV + scrollH), 0, 2000, 0, .1) + ")"
    // });

});

$(document).on('keydown', function(e) {
    if (e.metaKey) {
        // console.log("LLLLL");
        $('#popup').css({
            display: "none"
        });
    }
});

$(document).mousedown(function(){

    // console.log("LLLLL");
    $('#popup').css({
        display: "block"
    });

});
