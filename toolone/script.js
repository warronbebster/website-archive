var width = $(window).width();
var height = $(window).height();

$(window).resize(function() {
    width = $(window).width();
    height = $(window).height();
});

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

var body = document.body;
var html = document.documentElement;

// var windowHeight = Math.max(body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight);

$(window).scroll(function() {
    scrollV = $(window).scrollTop();
    scrollH = $(window).scrollLeft();
    console.log(scrollV + scrollH);

    $('body').css({
        "background-color": "rgba(0,0,0," + map_range((scrollV + scrollH), 0, 2000, 0, 1) + ")"
    });

    if ((scrollV + scrollH) > 300 && (scrollV + scrollH) < 800) {
        $('body').css({
            "color": "#417169"
        })
    } else{
        $('body').css({
            "color": "rgb(113, 225, 196)"
        })
    }

    $("h1").css({
        "transform": "rotate3d(10,10,10," + .1 * (scrollV / 2 + scrollH / 10) + "deg )",
        "right": 200 + -.1 * (scrollV + scrollH) + "px"
    });
    $("h2").css({
        "transform": "rotate3d(15,10,10," + -.2 * (scrollV / 8 + scrollH / 2) + "deg )"
    });
    $("#one").css({
        "transform": "skewX(" + .01 * (-scrollV - scrollH) + "deg )",
        "margin-left": 0 + .16 * (scrollV + scrollH) + "px"
    });
    $("p").css({
        "transform": "skewX(" + .01 * (-scrollV - scrollH) + "deg )",
        "margin-left": 0 + .09 * (scrollV + scrollH) + "px"
    });
    $("#two").css({
        "transform": "skewX(" + -.01 * (-scrollV - scrollH) + "deg )",
        "margin-left": 0 + .15 * (scrollV + scrollH) + "px"
    });
    $("#rotate").css({
        "left": 100 + .1 * (scrollV + scrollH) + "px"
    });
    $("#opa").css({
        "opacity": .0005 * (scrollV + scrollH)
    });

    // $("h1").css( "transform", "rotate3d("+ scrollV + "," + scrollH + ",0,20)" );

});
