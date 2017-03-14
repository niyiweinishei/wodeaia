$(document).ready(function () {

/*
|--------------------------------------------------------------------------
| Cached selectors
|--------------------------------------------------------------------------
*/
    var $bojanBlock = $('.bojan-block'),
        $martaBlock = $('.marta-block'),
        $bojanClickMe = $('.bojan-clickme'),
        $martaClickMe = $('.marta-clickme'),
        $meetUsInPerson = $('#layer-meetUsInPerson-characters');



/*
|--------------------------------------------------------------------------
| Init Motio object
|--------------------------------------------------------------------------
*/
    var klackalica = new Motio($meetUsInPerson[0], {
        fps: 25,
        frames: 34
    });

/*
|--------------------------------------------------------------------------
|
|--------------------------------------------------------------------------
*/

    function bojanFocus() {
        $bojanBlock.fadeIn(2000).animate({bottom: "250px"}, {queue: false}, 2000);
        $martaBlock.animate({bottom: "210px"}, {queue: false}, 1000).fadeOut(400);
        $bojanClickMe.stop(true).fadeOut(100);
        $martaClickMe.stop(true).delay(700).fadeIn(1500);

        klackalica.to(17);

        setInterval(function () {
            martaAttention()
        }, 1000)
    }

    function martaFocus() {
        $martaBlock.fadeIn(2000).animate({bottom: "250px"}, {queue: false}, 2000);
        $bojanBlock.animate({bottom: "210px"}, {queue: false}, 1000).fadeOut(400);
        $martaClickMe.stop(true).fadeOut(100);
        $bojanClickMe.stop(true).delay(700).fadeIn(1500);

        klackalica.toEnd();

        setInterval(function () {
            bojanAttention()
        }, 1000)
    }

    function bojanAttention() {
        $bojanClickMe.animate({bottom: "120px"}, 1000).animate({bottom: "135px"}, 1000);
        // bojanAttention();
    }

    function martaAttention() {
        $martaClickMe.animate({bottom: "90px"}, 1000).animate({bottom: "105px"}, 1000);
        // martaAttention();
    }


    $meetUsInPerson.on('click', function () {
        if ($martaBlock.css('display') != 'none') {
            bojanFocus();
            martaAttention();
        } else {
            martaFocus();
            bojanAttention();
        }
    });

    setInterval(function () {
        bojanAttention()
    }, 1000)


    // GALLERY ANIMATIONS

    /*$('ul.thumbs li').hover(function () {
        $(this).find("img").stop().animate({
            top: '-330px'
        }, 700, 'easeOutCubic')

    }, function () {
        $(this).find("img").stop().animate({
            top: '0px'
        }, 250)
    });*/

    // SOCIAL HOVER ANIMATIONS

    $('.social a, a.linkedin').hover(function(){
        $(this).stop().animate({
            opacity: 1
        });
    }, function(){
        $(this).stop().animate({
            opacity: 0.5
        });
    });

    // SERVICE HOVER ANIMATIONS

    $('a.surprise').hover(function(){
        $(this).find('li').stop().animate({
            'margin-top': '-30px'
        },800);
        $('.suprise-msg').stop().delay(500).fadeIn();
    }, function(){
        $('.suprise-msg').stop().fadeOut(400);
        $(this).find('li').delay(500).animate({
            'margin-top': '0px'
        },1000);
    });

    // SCROLL RELATED ANIMATIONS

    $(document).scroll(function (e) {

        // grab the scroll amount and the window height
        var scrollAmount = $(window).scrollTop();
        var documentHeight = $(document).height();

        // calculate the percentage the user has scrolled down the page
        var scrollPercent = (scrollAmount / documentHeight) * 100;

        // RUN TIMELINE ANIMATION
        if (scrollPercent > 4) {
            animateTimeline();
        }

        // RUN SERVICES ANIMATION
        if (scrollPercent > 32) {
            animateServices();
        }

        // TIMELINE ANIMATION
        function animateTimeline() {
            // $('.text-section p, .text-section a').hide()
            $.each($('.timeline li'), function (i, item) {

                setTimeout(function () {
                    $(item).find('.middle-section').animate({
                            width: "60px",
                            height: "60px"
                        },
                        300).find('p').delay(300).fadeIn(500);
//            		console.log($(item));

                    $(item).find('.text-section p').delay(600).fadeIn(500);
                    $(item).find('.text-section').delay(400).animate({
                            'margin-left': "30px",
                            'margin-right': "30px"
                        },
                        800);
                    $(item).find('.text-section a').delay(1200).animate({
                            opacity: "1",
                            padding: "0px"
                        },
                        {
                            easing: 'easeInOutCirc',
                            duration: '1000'
                        }
                    );

                    $(item).find(".vertical-lines").delay(400).animate({
                            height: "60px"
                        },
                        800);

                }, 450 * i);


            });
        }

        // 	  function animateTimeline() {
        // $.each($('.timeline li .middle-section'), function(i, item) {

        //     setTimeout(function() {
        //         $('.timeline li .middle-section:nth-child('+i+')').animate({
        //         	width: "70px",
        //         	height: "70px"},
        //         	500);
        //         $('.middle-section p').delay(1500).fadeIn(500);
        //     }, 450 * i);

        // });
        //   }

        // SERVICES ANIMATION
        function animateServices() {
            $.each($('ul.services li'), function (i, item) {

                setTimeout(function () {
                    $(item).fadeIn(1000);
                }, 350 * i);

            });
        }

    });

});