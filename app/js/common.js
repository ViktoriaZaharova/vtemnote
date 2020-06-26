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

$('.panel_heading .block_title').click(function () {
    $('.panel_heading').removeClass('in');
    $(this).parents('.panel_heading').addClass('in');
});

$('.btn-details').click(function (e) {
    e.preventDefault();
    $(this).siblings('.price-box').find('.price-box__hover').fadeIn();
});

$(window).on('load resize', function() {
    if ($(window).width() < 1100) {
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

