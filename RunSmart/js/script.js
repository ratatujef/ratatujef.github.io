$(document).ready(function () {
    $('.carousel__slider').slick({
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/arrow_l.png" alt="prev" > </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="img/arrow_r.png" alt="next" > </button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]

    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabItem_acive)', function () {
        $(this)
            .addClass('catalog__tabItem_acive').siblings().removeClass('catalog__tabItem_acive')
            .closest('section.catalog').find('div.catalog__tabContent').removeClass('catalog__tabContent_active').eq($(this).index()).addClass('catalog__tabContent_active');
    });
    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
    $('.catalog-item__linkBack').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });

    $('[data-modal=consultation]').on('click', function () {
        $('.modal, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function () {
        $('.modal, #consultation, #order, #thanks').fadeOut();
    });
    //(закрытие формы по клику внеобласти)
    $(document).mouseup(function (e) {
        let container = $('.modal, #consultation, #order, #thanks');
        if (container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });
    $('.button_catalog').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal-form__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.modal, #order').fadeIn();
        });
    });
    function formValidate(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                email: {
                    required: true,

                }
            },
            messages: {
                name: {
                    required: 'Пожалуйста, ведите ваше имя!',
                    minlength: jQuery.validator.format("минимум {0} символа!")
                },
                phone: 'Пожалуйста, введите ваш номер телефона!',
                email: {
                    required: 'Пожалуйста, введите вашу почту!',
                    email: 'Пожалуйста, введите правильную почту!'
                }

            }
        });
    }
    formValidate('#order form');
    formValidate('.form form');
    formValidate('#consultation form');
    $('input[name=phone]').mask("+7(999) 999-99-99");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.toUp').fadeIn();
        }
        else {
            $('.toUp').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.modal, #thanks').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });

});

