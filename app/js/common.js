$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});


$(".go_to-links").on('click', '[href*="#"]', function(e){
    e.preventDefault();
    var fixed_offset = $('.mobile-menu').height();
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
});


$('.panel_heading .block_title').click(function () {
    $('.panel_heading').removeClass('in');
    $(this).parents('.panel_heading').addClass('in');
});

$('.btn-details').click(function (e) {
    e.preventDefault();
    $(this).siblings('.price-box').find('.price-box__hover').fadeIn();
});

$('.price-box').hover(function () {
    $('.price-box').removeClass('price-box__open')
    $(this).toggleClass('price-box__open');
});

$(window).on('load resize', function() {
    if ($(window).width() < 1101) {
        $('.price-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            arrows: true,
            appendArrows: '.price-wrapper__nav',
            appendDots: '.price-wrapper__nav',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
        });

        $('.reviews-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: false,
            speed: 100,
            slidesToShow: 2,
            arrows: true,
            appendArrows: '.reviews-slider__nav',
            appendDots: '.reviews-slider__nav',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,

                    }
                }
            ]
        });

        $('.scripts-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            arrows: true,
            appendArrows: '.scripts-slider__nav',
            appendDots: '.scripts-slider__nav',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
        });

    } else {
        $(".price-slider.slick-initialized").slick("unslick");
        $(".reviews-slider.slick-initialized").slick("unslick");
        $(".scripts-slider.slick-initialized").slick("unslick");
    }
});

$(".form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $(".form").trigger("reset");
    });
    return false;
});

$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});

