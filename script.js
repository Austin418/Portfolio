$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
            $('.link-buttons').css('right', '50px')
        } else {
            $('#scroll').fadeOut();
            $('.link-buttons').css('right', '0px')
        }
    });
});

$('.circle').on('mouseover', function () {
    $(this).css('height', '55px')
    $(this).css('width', '55px')
})
$('.circle').on('mouseout', function () {
    $(this).css('height', '50px')
    $(this).css('width', '50px')
})



// slider

$(function () {
    let width = 720;
    let animationSpeed = 2000;
    let pause = 4000; //2000 + 500 delay



    //cache DOM elements
    let $slideContainer = $('.slides')
    let $slides = $('.slide');

    let interval;
    let currentSlide = 1

    // create a function that will start a slider function

    function startSlider() {
        interval = setInterval(function () {
            //animating the slice container will cause the action in the function to happen every delay 
            $slideContainer.animate(
                { 'margin-left': '-=' + width },
                animationSpeed,
                function () {
                    currentSlide++
                    if (currentSlide == $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0)
                    }
                })
        }, pause)
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    startSlider()

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider)
})

let getColor
let $main = $('#slider')
function colorRandomizer() {
    let num1 = Math.ceil(Math.random() * (180 - 133) + 100) //100 - 180
    let num2 = Math.ceil(Math.random() * (100 - 102) + 0) //0 - 100
    let num3 = Math.ceil(Math.random() * (255 - 66) + 150) //150 - 255
    getColor = `0 0 30px rgb(${num1}, ${num2}, ${num3})`
    return getColor
}


//for yellow box-shadow -- 
// let num1 = Math.ceil(Math.random() * (255 - 133) + 133) //100 - 180
// let num2 = Math.ceil(Math.random() * (166 - 102) + 102) //0 - 100
// let num3 = Math.ceil(Math.random() * (0 - 66) + 66) //150 - 255

function boxShadowChange() {
    interval = setInterval(function () {
        $main.css(
            { 'box-shadow': colorRandomizer() },
        )
    }, 300
    )
}
boxShadowChange();
//for nixon game have for loop with - value and i++, apply it to the size of the button on click



// $('.scroll').each.slideUp(0)


$(function () {  // $(document).ready shorthand
    $('#main').fadeIn('slow');
});

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.scroll').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);
                $(this).slideDown(500);


            }

        });

    });

});