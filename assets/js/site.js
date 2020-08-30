document.addEventListener("DOMContentLoaded", function(event) {
    //do work
    var windowWidth = $(window).width();
    $(window).resize(function() {
        windowWidth = $(window).width();
    });


    // var elem = document.querySelector('.projects');

    // var msnry = new Masonry(elem, {
    //     // options
    //     itemSelector: '.unit',
    //     columnWidth: '.grid-sizer',
    //     percentPosition: true,
    //     // gutter: 50
    // });

    // var elem2 = document.querySelector('.project');

    // var msnry2 = new Masonry(elem2, {
    //     // options
    //     itemSelector: '.unit-project',
    //     columnWidth: '.grid-sizer-project',
    //     percentPosition: true,
    //     // gutter: 50
    // });



	$('.container').imagesLoaded(function() {
	    $('.container').masonry({
			itemSelector: '.unit',
	        columnWidth: '.grid-sizer',
	        percentPosition: true,
	    });
	});


	$('.projects').imagesLoaded(function() {
	    $('.projects').masonry({
	        itemSelector: '.unit',
	        columnWidth: '.grid-sizer',
	        percentPosition: true,
	    });
 	});

    $('#question').click(function(){
        $('.hidden').toggleClass('showHidden');
        var checkit = $(this).html();
        console.log(checkit);
        if(checkit == "?"){
            $(this).html("X");
        } else {
            $(this).html("?");
        }
    });




    
        //this bit shows the name of project on hover
        $('.showcase-image').hover(function(event) {
            if(windowWidth > 640){

                $(this).mousemove(function(event) {
                    var x = event.pageX;
                    var y = event.pageY;
                    //or $(this).offset(); if you really just want the current element's offset
                    // var msg = "Handler for .mousemove() called at ";
                    $(".showcase-caption-hover").css({
                        // "position":"fixed",
                        "opacity": "1",
                        "left": x-18,
                        "top": y-12
                    });
                    var name = $(this).parent().find(".showcase-caption").html();

                    $(".showcase-title-hover").html(name);

                });
            }

        },
        function() {
            if(windowWidth > 640){
                $(".showcase-caption-hover").css({
                    "opacity": "0"
                });
            }

        });




    // $("#target").mousemove(function(event) {
    //     var msg = "Handler for .mousemove() called at ";
    //     msg += event.pageX + ", " + event.pageY;
    //     $("#log").append("<div>" + msg + "</div>");
    // });


});
