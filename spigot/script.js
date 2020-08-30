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

var body = document.body;
var html = document.documentElement;

$("#1").css(
    "left", -scrollV + 1000
);


$(window).scroll(function() {
    scrollV = $(window).scrollTop();
    // console.log(scrollV);

    if (scrollV > 650) {
        $('#two3').css(
            "opacity", 1
        );
    } else {
        $('#two3').css(
            "opacity", 0
        );
    }

    if (scrollV > 500) {
        $('#two2').css(
            "opacity", 1
        );
    } else {
        $('#two2').css(
            "opacity", 0
        );
    }

    if (scrollV > 300) {
        $('#two1').css(
            "opacity", 1
        );
    } else {
        $('#two1').css(
            "opacity", 0
        );
    }

    $("#one").css(
        "left", -scrollV + 1050
    );

    $("#two").css(
        "left", -scrollV + 1000
    );

    $("#two1").css(
        "left", -scrollV + 1332
    );

    $("#two2").css(
        "left", -scrollV + 1500
    );
    $("#two3").css(
        "left", -scrollV + 1500
    );

    $("#three").css(
        "left", -scrollV + 2800
    );
    $("#three2").css(
        "left", -scrollV + 3200
    );

    $("#four").css(
        "left", -scrollV + 3400
    );

    $("#five").css(
        "left", -scrollV + 4650
    );

    $("#six").css(
        "left", -scrollV + 6300
    );

    $("#seven").css(
        "left", -scrollV + 8250
    );


});

var video = document.getElementById('video');
video.addEventListener('click',function(){
  video.play();
},false);
