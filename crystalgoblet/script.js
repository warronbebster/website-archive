var index;
// var currentMousePos = {
//     x: -1,
//     y: -1
// };

$(document).bind('mousemove', function(e) {
    // currentMousePos.x = event.pageX;
    // currentMousePos.y = event.pageY;
    $('.popup').css({
        left: e.pageX + 40,
        top: e.pageY - 40,
        "transform": "rotate3d(10,10,10," + .01 * (e.pageX + e.pageY) + "deg)"
    });
});

$(document).on('keydown', function(e) {
    if (e.metaKey) {
        // console.log("LLLLL");
        $('.popup').css({
            left: "",
            top: "",
            transform: "",
            display:""
        });
    }
});

$("span").hover(
    function() {
        index = $("span").index(this);
        // console.log("That was span index #" + index);
        $(".popup").eq(index).css({
            "display": "block",
        });
    },
    function() {
        $(".popup").eq(index).css({
            "display": "none",
        });
    }
);
