$(document).ready(function() {

    // var hT = $('#cause').offset().top,
    //     hH = $('#cause').outerHeight(),
    //     wH = $(window).height();

    // $(window).scroll(function() {
    //     wS = $(this).scrollTop();
    //     console.log((hT - wH), wS);
    //     if (wS > (hT + hH - wH)) {
    //         console.log('you have scrolled to the h1!');
    //         $('h1').css('opacity','0');
    //         $('#cause h1').css('opacity', '1');

    //         //make else if statments here to decide which title gets shown
    //     }
    // });


    // $(".menuItem").each(function() {
    //     var wayPointID = $(this).find('a').attr("href");
    //     var menuItemID = wayPointID.replace("#", "");

    //     $('.projectTitle' + wayPointID + '_title').waypoint(function(direction) {

    //         if (direction == 'down') {
    //             $('.menuItem#menuItem_' + menuItemID).find('a').css('color', 'red');
    //             console.log(menuItemID);
    //         } else if (direction === 'up') {
    //             $('.menuItem#menuItem_' + menuItemID).find('a').css('color', 'blue');
    //             console.log(menuItemID);
    //         }
    //     });

    // });

    $('a[href^="#"]').click(function(event) {

        // The id of the section we want to go to.
        var id = $(this).attr("href");

        // An offset to push the content down from the top.
        var offset = 0;

        // Our scroll target : the top position of the
        // section that has the id referenced by our href.
        var target = $(id).offset().top - offset;

        // The magic...smooth scrollin' goodness.
        $('html, body').animate({ scrollTop: target }, 300);

        //prevent the page from jumping down to our section.
        event.preventDefault();
    });

    var waypoint = new Waypoint({
        element: document.getElementById('two'),
        handler: function(direction) {
            $('#menuItem_two a').toggleClass('active');
            if (direction == 'down') {
                $('#two h1').css('opacity', '1');
                $('#one h1').css('opacity', '0');


            } else {
                $('#two h1').css('opacity', '0');
                $('#one h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('three'),
        handler: function(direction) {
            $('#menuItem_three a').toggleClass('active');
            if (direction == 'down') {

                $('#three h1').css('opacity', '1');
                $('#two h1').css('opacity', '0');
            } else {
                $('#three h1').css('opacity', '0');
                $('#two h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('four'),
        handler: function(direction) {
            $('#menuItem_four a').toggleClass('active');
            if (direction == 'down') {
                $('#four h1').css('opacity', '1');
                $('#three h1').css('opacity', '0');
            } else {
                $('#four h1').css('opacity', '0');
                $('#three h1').css('opacity', '1');

            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('five'),
        handler: function(direction) {
            $('#menuItem_five a').toggleClass('active');
            if (direction == 'down') {
                $('#five h1').css('opacity', '1');
                $('#four h1').css('opacity', '0');
            } else {
                $('#five h1').css('opacity', '0');
                $('#four h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('speed'),
        handler: function(direction) {
            $('#menuItem_speed a').toggleClass('active');
            if (direction == 'down') {
                $('#speed h1').css('opacity', '1');
                $('#five h1').css('opacity', '0');
            } else {
                $('#speed h1').css('opacity', '0');
                $('#five h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('multiplicity'),
        handler: function(direction) {
            $('#menuItem_multiplicity a').toggleClass('active');
            if (direction == 'down') {
                $('#multiplicity h1').css('opacity', '1');
                $('#speed h1').css('opacity', '0');
            } else {
                $('#multiplicity h1').css('opacity', '0');
                $('#speed h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('noise'),
        handler: function(direction) {
            $('#menuItem_noise a').toggleClass('active');
            if (direction == 'down') {
                $('#noise h1').css('opacity', '1');
                $('#multiplicity h1').css('opacity', '0');
            } else {
                $('#noise h1').css('opacity', '0');
                $('#multiplicity h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('mistranslation'),
        handler: function(direction) {
            $('#menuItem_mistranslation a').toggleClass('active');
            if (direction == 'down') {
                $('#mistranslation h1').css('opacity', '1');
                $('#noise h1').css('opacity', '0');
            } else {
                $('#mistranslation h1').css('opacity', '0');
                $('#noise h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('interdependence'),
        handler: function(direction) {
            $('#menuItem_interdependence a').toggleClass('active');
            if (direction == 'down') {
                $('#interdependence h1').css('opacity', '1');
                $('#mistranslation h1').css('opacity', '0');
            } else {
                $('#interdependence h1').css('opacity', '0');
                $('#mistranslation h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('thanks'),
        handler: function(direction) {
            $('#menuItem_thanks a').toggleClass('active');
            if (direction == 'down') {
                $('#thanks h1').css('opacity', '1');
                $('#interdependence h1').css('opacity', '0');
            } else {
                $('#thanks h1').css('opacity', '0');
                $('#interdependence h1').css('opacity', '1');
            }
        },
        offset: 600
    })

    var waypoint = new Waypoint({
        element: document.getElementById('projects'),
        handler: function(direction) {
            if (direction == 'down') {
                $('body').css({
                    'background-color': '#111111',
                });
                $('.menu li a').css({
                    'background': '-moz-linear-gradient(left, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 0) 100%)',
                    'background': '-webkit-linear-gradient(left, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 0) 100%)',
                    'background': 'linear-gradient(to right, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 0) 100%)',
                    'filter': "progid: DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#00eeeeee', GradientType=1)",
                    'color': '#EEEEEE'
                });
                $('.pholder').css({
                    'background': '-moz-linear-gradient(left, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 0) 100%)',
                    'background': '-webkit-linear-gradient(left, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 0) 100%)',
                    'background': 'linear-gradient(to right, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 1) 83%, rgba(17, 17, 17, 0) 100%)',
                    'filter': "progid: DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#00eeeeee', GradientType=1)"
                });
                $('.gradient').css({
                    'border-left': '1px solid #EEEEEE',
                    'background-image': '-webkit-linear-gradient(left, #EEEEEE 0%, transparent 100%), -webkit-linear-gradient(left, #EEEEEE 0%, transparent 100%)',
                    'background-image': '-moz-linear-gradient(left, #EEEEEE 0%, transparent 100%), -moz-linear-gradient(left, #EEEEEE 0%, transparent 100%)',
                    'background-image': '-o-linear-gradient(left, #EEEEEE 0%, transparent 100%), -o-linear-gradient(left, #EEEEEE 0%, transparent 100%)',
                    'background-image': 'linear-gradient(to right, #EEEEEE 0%, transparent 100%), linear-gradient(to right, #EEEEEE 0%, transparent 100%)'
                });
                $('p').css({
                    'color': '#EEEEEE'
                });

            } else {
                $('body').css({
                    'background-color': '#EEEEEE'
                });
                $('.menu li a').css({
                    'background': '-moz-linear-gradient(left, rgba(238,238,238, 1) 83%, rgba(238,238,238, 1) 83%, rgba(238,238,238, 0) 100%)',
                    'background': '-webkit-linear-gradient(left, rgba(238,238,238, 1) 83%, rgba(238,238,238, 1) 83%, rgba(238,238,238, 0) 100%)',
                    'background': 'linear-gradient(to right, rgba(238,238,238, 1) 83%, rgba(238,238,238, 1) 83%, rgba(238,238,238, 0) 100%)',
                    'filter': "progid: DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#00eeeeee', GradientType=1)",
                    'color': '#111111'
                });
                $('.pholder').css({
                    'background': '-moz-linear-gradient(left, rgba(238,238,238, 1) 83%, rgba(238,238,238, 1) 83%, rgba(238,238,238, 0) 100%)',
                    'background': '-webkit-linear-gradient(left, rgba(238,238,238, 1) 83%, rgba(238,238,238, 1) 83%, rgba(238,238,238, 0) 100%)',
                    'background': 'linear-gradient(to right, rgba(238,238,238, 1) 83%, rgba(238,238,238, 1) 83%, rgba(238,238,238, 0) 100%)',
                    'filter': "progid: DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#00eeeeee', GradientType=1)"
                });
                $('.gradient').css({
                    'border-left': '1px solid #111111',
                    'background-image': '-webkit-linear-gradient(left, #111111 0%, transparent 100%), -webkit-linear-gradient(left, #111111 0%, transparent 100%)',
                    'background-image': '-moz-linear-gradient(left, #111111 0%, transparent 100%), -moz-linear-gradient(left, #111111 0%, transparent 100%)',
                    'background-image': '-o-linear-gradient(left, #111111 0%, transparent 100%), -o-linear-gradient(left, #111111 0%, transparent 100%)',
                    'background-image': 'linear-gradient(to right, #111111 0%, transparent 100%), linear-gradient(to right, #111111 0%, transparent 100%)'
                });
                $('p').css({
                    'color': '#111111'
                });
            }
        },
        offset: 600
    })





});
