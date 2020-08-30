var width = $(window).width();
var height = $(window).height();

$(window).resize(function() {
    width = $(window).width();
    height = $(window).height();
});

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

var scrollV;

// var body = document.body;
// var html = document.documentElement;


$(window).scroll(function() {
    scrollV = $(window).scrollTop();

    console.log(width);

    if (width > 640) {
        $(".corner").css({
            "transform": "rotate3d(15,10,10," + scrollV / 5 + "deg )"
        });

        $(".contain").css({
            "transform": "rotate3d(15,10,10," + scrollV / 100 + "deg )"
        });
    }




    // $("p").css({
    //     "transform": "skewX(" + .01 * (-scrollV + "deg )"
    //     // "margin-left": 0 + .09 * scrollV + "px"
    // });

    $("#one").css(
        "left", -scrollV * 3 + 3000
    );

    $("#two").css(
        "left", -scrollV * 3 + 3500
    );

    $("#three").css(
        "left", -scrollV * 3 + 4400
    );


    $("#four").css(
        "left", -scrollV * 3 + 6000
    );

    $("#five").css(
        "left", -scrollV * 3 + 6500
    );

    $("#six").css(
        "left", -scrollV * 3 + 7350
    );

    $("#seven").css(
        "left", -scrollV * 3 + 9000
    );

    $("#eight").css(
        "left", -scrollV * 3 + 9500
    );

    $("#nine").css(
        "left", -scrollV * 3 + 10400
    );

});
