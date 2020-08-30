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

var scrollV, scrollsnap;

// var body = document.body;
// var html = document.documentElement;

$(window).scroll(function() {
    scrollV = $(window).scrollTop();
    // console.log(scrollV);

    scrollsnap = Math.round(scrollV / 100) ;
    console.log(scrollsnap);

    // $('#snap').css('background-image', 'url(snapchat/' + scrollV + '.png)');
    $('img').attr("src",'snapchat/' + scrollsnap + '.png');



});
