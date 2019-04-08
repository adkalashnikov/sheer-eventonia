$(document).ready(function () {
    $(document).on('click', '.mobile-menu', function(e) {
        $('.header').toggleClass('js-menu-visible');
    });

    $(document).on('click', '.mobile-menu__close', function(e) {
        $('.header').toggleClass('js-menu-visible');
    });


    if($('.js-crousel-1').length) {
        $('.js-crousel-1').slick({
            mobileFirst: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: false,
                        nextArrow: "<svg class=\"svg-sprite-icon icon-arr-left slick-prev slick-arrow\"><use xlink:href=\"#arr-left\"></use></svg>",
                        prevArrow: "<svg class=\"svg-sprite-icon icon-arr-right slick-next slick-arrow\"><use xlink:href=\"#arr-right\"></use></svg>",
                    }
                }
            ]
        });
    }

    if($('.js-crousel-2').length) {
        $('.js-crousel-2').slick({
            mobileFirst: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: false,
                        nextArrow: "<svg class=\"svg-sprite-icon icon-arr-left slick-prev slick-arrow\"><use xlink:href=\"#arr-left\"></use></svg>",
                        prevArrow: "<svg class=\"svg-sprite-icon icon-arr-right slick-next slick-arrow\"><use xlink:href=\"#arr-right\"></use></svg>",
                    }
                }
            ]
        });
    }


    $("input[type='tel']").mask("+7 (999) 999-99-99");


    if($('.text-section').length) {
        $(document).on('click', '.text-section .btn', function() {
            var parentWrapper = $(this).parents('.text-section');

            $(parentWrapper).find('.text-section__bottom').remove();

            $(parentWrapper).find('.text-section__text').animate({
                height: $(parentWrapper).find('.text-section__text').get(0).scrollHeight
            }, 500 );
        });
    }

    $("[data-fancybox]").fancybox({
        padding: 0,
        scrolling: 'auto'
    });

    $(".btn[data-fancybox]").fancybox({
        padding: 0,
        scrolling: 'auto',
        wrapCSS: 'modal-wrap',
        tpl : {
            closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">' +
                '<svg class="svg-sprite-icon icon-cross">\n' +
                '<use xlink:href="#icon-cross"></use>\n' +
                '</svg>' +
                '</a>'
        }
    });


    $("[data-fancybox-video]").click(function() {
        $.fancybox({
            maxWidth: "90%",
            padding: 0,
            transitionIn: 'none',
            transitionOut: 'none',
            href: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            type: 'swf',
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true'
            }
        });

        return false;
    });


    if($('#map_master').length) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map_master', {
                    center: [59.968542, 30.316511],
                    zoom: 12,
                    type: 'yandex#map',
                    controls: []
                }, {
                    suppressMapOpenBlock: true
                }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: '',
                    balloonContent: ''
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'static/images/general/loc-marker.svg',
                    iconImageSize: [34, 52],
                    iconImageOffset: [-17, -52]
                });
            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects.add(myPlacemark);
        });
    }
});
