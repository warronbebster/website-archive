var scrollMe = [];
var scrollLeft = 0;
var currentSection = 0;
var section = [];

$(function() {

    //this should happen every time something changes
    //this measures all the sections distance from the left

    $('section').each(function(i, el) {
        scrollMe.push(this.offsetLeft); //add to array
    });


    //this should happen every time something changes
    $('window').resize(function() {

      scrollMe = [];

        $('section').each(function(i, el) {
            scrollMe.push(this.offsetLeft); //add to array
        });
    });

    console.log(scrollMe);




    //this code scrolls to the link item
    // $('a[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html, .scroller').animate({
    //                 scrollLeft: target.offset().left
    //             }, 800);
    //             return false;
    //         }
    //         console.log('cool');
    //     }
    // });

    // var currentHash = "#initial_hash"


    //new menu shit


    $('.menu li').click(function() {

        var target = $(this).index() + 1;

        $('html, .scroller').animate({ scrollLeft: scrollMe[target] + 10 }, 500);
    });


    $('.scroller').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 1);
        e.preventDefault();
    });

    $('.scroller').scroll(function() {
        //anything in this block happens on scroll


        //this bit can be a better url updater
        // var left = window.pageXOffset;
        // for(var i=0; i<scrollMe.length;i++){
        //   if(left > scrollMe[i]){

        //     break;
        //   }

        // }

        scrollLeft = $(this).scrollLeft();
        console.log(scrollLeft);


        // this bit currently updates your url
        // $('.project').each(function() {
        //     //does this make more sense to write as: check distance from left when the page loads (or something happens) and
        //     // then check every scroll event against that measurement?
        //     var left = window.pageXOffset;
        //     var distance = left - $(this).offset().left;
        //     var hash = $(this).attr('id');
        //     // 30 is an arbitrary padding choice, 
        //     // if you want a precise check then use distance===0
        //     if (distance < 30 && distance > -30 && currentHash != hash) {
        //         window.location.hash = (hash);
        //         currentHash = hash;
        //         // console.log(currentHash);
        //     }
        // });


        //new scrolling JS code
        // console.log(scrollMe);
        // console.log(scrollLeft);

        //this bit updates current section
        for (var i = scrollMe.length - 1; i >= 0; i--) {
            if (scrollLeft > scrollMe[i]) {
                currentSection = i;
                break;
            }
        }

        // console.log($('section').eq(currentSection).attr('id'));

        var hash = $('section').eq(currentSection).attr('id');


        //this bit makes the arrows go away if you're at the end or beginning
        if (currentSection == 0){
          $('#left-arrow').addClass('hide');
        } else if (currentSection == scrollMe.length-1){
          $('#right-arrow').addClass('hide');
        } else {
          $('#arrows div').removeClass('hide');
        }



        // this bit hides/shows the menu when ur at the start
        if ($(window).width() > 739) {
            // if big window
            if (scrollLeft > 200) {
                $('.menusvg svg').fadeIn(400);
                $('.menusvg').removeClass('menuActive');
                $('header').removeClass('activeHeader');
                $('.background').removeClass('activeHeaderBackground');
            } else {
                $('.menusvg svg').fadeOut(400);
                $('.menusvg').addClass('menuActive');
                $('header').addClass('activeHeader');
                $('.background').addClass('activeHeaderBackground');
            }
        } else {
            $('.menusvg svg').fadeIn(400);
            $('.menusvg').removeClass('menuActive');
            $('header').removeClass('activeHeader');
            $('.background').removeClass('activeHeaderBackground');
        }

    });



    // this bit expands sets of images
    $('.image-set').click(function() {

        $(this).parent('section').find('.image-hold').toggleClass('expanded');
        // $(this).parent('section').find('.image-hold').css({
        //     "max-width": "20000px",
        // });
        var images_element = $(this).parent('section').find('.image-hold');
        var images_length = $(this).parent('section').find('.image-hold').length;
        for (var i = 1; i < images_length; i++) {
            if ($(images_element[i]).hasClass('expanded')) {
                images_element[i].style.maxWidth = images_element[i].children[0].width + "px";
            } else {
                images_element[i].style.maxWidth = "20px";
            }
        }

         //this measures all the sections distance from the left
        //reset scroll positions (use timeout because of css transitions)
        setTimeout(function() {
            scrollMe = [];
            $('section').each(function(i, el) {
                scrollMe.push(this.offsetLeft); //add to array
            });
            console.log(scrollMe);
        }, 600);

    });


    // this bit does arrow navigation
    $('#left-arrow').click(function() {
        // var dir = false;
        // var targetLeft = -1;

        // dir = -1;

        // if (dir) {
        //     winLeft = $('.scroller').scrollLeft();
        //     $.each(scrollMe, function(i, v) {
        //         if ((dir == 1 && winLeft < v && targetLeft < 0) ||
        //             (dir == -1 && winLeft > v)) {
        //             targetLeft = v;
        //         }
        //     });
        //     if (targetLeft >= 0) {
        //         $('html, .scroller').animate({ scrollLeft: targetLeft }, 500);
        //     }
        // }


        scrollMe = [];

        $('section').each(function(i, el) {
            scrollMe.push(this.offsetLeft); //add to array
        });

        console.log(currentSection);
        console.log(scrollMe[currentSection]);

        if (currentSection == 0) {
            // if at start of page

        } else {
            $('html, .scroller').animate({ scrollLeft: scrollMe[currentSection - 1] + 10 }, 500);
        }


    });

    $('#right-arrow').click(function() {
        // var dir = false;
        // var targetLeft = -1;

        // dir = 1;

        // if (dir) {
        //     winLeft = $('.scroller').scrollLeft();
        //     $.each(scrollMe, function(i, v) {
        //         if ((dir == 1 && winLeft < v && targetLeft < 0) ||
        //             (dir == -1 && winLeft > v)) {
        //             targetLeft = v;
        //         }
        //     });
        //     if (targetLeft >= 0) {
        //         $('html, .scroller').animate({ scrollLeft: targetLeft }, 500);
        //     }
        // }

        scrollMe = [];

        $('section').each(function(i, el) {
            scrollMe.push(this.offsetLeft); //add to array
        });

        console.log(currentSection);
        console.log(scrollMe[currentSection]);
        console.log(scrollMe[currentSection + 1]);

        // if (currentSection == 0){
        //     // console.log("first section");
        //     $('html, .scroller').animate({ scrollLeft: scrollMe[currentSection + 1] +10}, 500);
        // } else 
        if (currentSection == scrollMe.length - 1) {
            console.log('last!');
        } else {
            $('html, .scroller').animate({ scrollLeft: scrollMe[currentSection + 1] + 10 }, 500);
        }

        // $('html, .scroller').animate({ scrollLeft: scrollMe[currentSection + 2] - 200 }, 500);
    });


    // this bit does scroll anim on key press
    $(document).keydown(function(e) {
        var dir = false;
        var targetLeft = -1;

        switch (e.keyCode) {
            case 37:
                // dir = -1;
                console.log('left');
                $('html, .scroller').animate({ scrollLeft: scrollMe[currentSection - 1] + 10 }, 500);
                break;

            case 39:
                // dir = 1;
                console.log('right');
                if (currentSection == scrollMe.length - 1) {
                    console.log('last!');
                } else {
                    $('html, .scroller').animate({ scrollLeft: scrollMe[currentSection + 1] + 10 }, 500);
                }
                break;

            default:
                break;
        }

        // if (dir) {
        //     e.preventDefault();
        //     winLeft = $('.scroller').scrollLeft();
        //     $.each(scrollMe, function(i, v) {
        //         if ((dir == 1 && winLeft < v && targetLeft < 0) ||
        //             (dir == -1 && winLeft > v)) {
        //             targetLeft = v;
        //         }
        //     });
        //     if (targetLeft >= 0) {
        //         $('html, .scroller').animate({ scrollLeft: targetLeft }, 500);
        //     }
        // }
    });


    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens
    // bigger screens

    if ($(window).width() > 739) {
        // bigger screens
        // bigger screens
        // bigger screens
        // bigger screens
        // bigger screens
        // bigger screens
        // bigger screens
        // bigger screens

        //this bit scrolls you sideways when you scroll down

        // this bit changes menu colors when you hover categories
        $("#categories li").hover(
            function() {
                //on mouse on
                console.log($(this).text());
                var str = $(this).text().toLowerCase();
                $("." + str).addClass('activeLink');
            },
            function() {
                // mouse off
                $('.menu li').removeClass('activeLink');
            }
        );


        // this changes the image at the bottom
        $(".menu li").hover(
            function() {
                //on mouse on
                console.log($(this).attr('id'));
                var str = $(this).attr('id');
                str = str.slice(0, -5);
                str = "#" + str + "_thumb";
                $(str).css({
                    "opacity": "1"
                });
                $(str).siblings().css({
                    "opacity": "0"
                });

                var classlist = this.className.split(/\s+/); //get all class names for the element

                console.log(classlist);

                //for each tag the project has
                for (var i = 0; i < classlist.length; i++) {
                    //upercase first letter
                    classlist[i] = classlist[i].toLowerCase().replace(/\b[a-z]/g, function(letter) {
                        return letter.toUpperCase();
                    });

                    //light up the tag list
                    $("#categories ul li:contains(" + classlist[i] + ")").addClass('activeCategory');
                }


            },
            function() {
                //on mouse off
                $("#about_image").css({
                    "opacity": "1"
                });
                $("#about_image").siblings().css({
                    "opacity": "0"
                });
                $("#categories ul li").removeClass('activeCategory');
            }
        );


        $('#caroline').click(
            function() {
                //on mouse on
                $('#hidableNav').fadeOut();
                $('#about').fadeIn();
            }
        );

        // $('#about').mouseleave(
        //     function() {
        //         $('#hidableNav').fadeIn();
        //         $('#about').fadeOut();
        //     }
        // );

        $('#about').click(
            function() {
                $('#hidableNav').fadeIn();
                $('#about').fadeOut();
            }
        );


        $('.menusvg').click(
            function() {
                //on mouse on
                if (scrollLeft > 200) {
                    $(this).toggleClass('menuActive');
                    $('header').toggleClass('activeHeader');
                    $('.background').toggleClass('activeHeaderBackground');
                }

            // $(this).css({
            //   'stroke-width':'1'
            // });

            }
        );



        // $('header').mouseleave(
        //     function() {
        //         //on mouse on
        //         $('.menusvg').removeClass('menuActive');
        //         $(this).removeClass('activeHeader');
        //         $('.background').removeClass('activeHeaderBackground');
        //     }
        // );


        // this bit disappears the image when you're not on the menu
        // $("header").hover(
        //     function() {
        //         //on mouse on
        //         $('#images').css({
        //             "opacity": "1"
        //         });
        //         console.log('hovering menu');
        //     },
        //     function() {
        //         //on mouse off
        //         $('#images').css({
        //             "opacity": "0"
        //         });
        //     }
        // );



    } else {
        $('.menusvg svg').fadeIn(400);
        $('.menusvg').removeClass('menuActive');
        $('header').removeClass('activeHeader');
        $('.background').removeClass('activeHeaderBackground');
        // smaller screens
        // smaller screens
        // smaller screens
        // smaller screens
        // smaller screens
        // smaller screens
        // smaller screens
        // smaller screens
        $('.menusvg').click(
            function() {
                //on mouse on
                $(this).toggleClass('menuActive');
                $('header').toggleClass('activeHeader');
                $('.background').toggleClass('activeHeaderBackground');
            }
        );

        $('#caroline').click(
            function() {
                //on mouse on
                $('#hidableNav').fadeOut();
                $('#about').fadeIn();
            }
        );

        // $('#about').mouseleave(
        //     function() {
        //         $('#hidableNav').fadeIn();
        //         $('#about').fadeOut();
        //     }
        // );

        $('#about').click(
            function() {
                $('#hidableNav').fadeIn();
                $('#about').fadeOut();
            }
        );

    }

});
