//Global var
var RP = {};
(function ($) {
    // USE STRICT
    "use strict";
    //----------------------------------------------------/
    // Predefined Variables
    //----------------------------------------------------/
    var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $wrapper = $('.wrapper'),
        $topbar = $('#topbar'),
        $header = $('#header'),

        //Logo
        logo = $('#logo').find('.logo'),
        logoImg = logo.find('img').attr('src'),
        logoDark = logo.attr('data-dark-logo'),

        //Main menu
        mainmenuitems = $("#mainMenu > ul > li"),
        mainmenu = $('#mainMenu'),
        mainmenuitems = mainmenu.find('li.dropdown > a'),
        mainsubmenuitems = mainmenu.find('li.dropdown-submenu > a, li.dropdown-submenu > span'),

        //Vertical Dot Menu
        navigationItems = $('#vertical-dot-menu a'),

        //Side panel
        sidePanel = $('#side-panel'),
        sidePanellogo = $('#panel-logo').find('.logo'),
        sidePanellogoImg = sidePanellogo.find('img').attr('src'),
        sidePanellogoDark = sidePanellogo.attr('data-dark-logo'),

        //Fullscreen panel
        fullScreenPanel = $('#fullscreen-panel'),

        $topSearch = $('#top-search'),
        $parallax = $('.parallax'),
        $textRotator = $('.text-rotator'),

        //Window size control
        $fullScreen = $('.fullscreen') || $('.section-fullscreen'),
        $halfScreen = $('.halfscreen'),

        //Elements
        dataAnimation = $("[data-animation]"),
        $counter = $('.counter:not(.counter-instant)'),
        $countdownTimer = $('.countdown'),
        //$progressBar = $('.progress-bar'),
        $pieChart = $('.pie-chart'),
        $map = $('.map'),
        accordionType = "accordion",
        toogleType = "toggle",
        accordionItem = "ac-item",
        itemActive = "ac-active",
        itemTitle = "ac-title",
        itemContent = "ac-content",

        $lightbox_gallery = $('[data-lightbox-type="gallery"]'),
        $lightbox_image = $('[data-lightbox-type="image"]'),
        $lightbox_iframe = $('[data-lightbox-type="iframe"]'),
        $lightbox_ajax = $('[data-lightbox-type="ajax"]'),

        //Widgets
        $flickr_widget = $('.flickr-widget'),

        $ytPlayer = $('.youtube-background'),

        //Utilites
        classFinder = ".";

    //----------------------------------------------------/
    // UTILITIES
    //----------------------------------------------------/

    //Check if function exists
    $.fn.exists = function () {
        return this.length > 0;
    };

    //----------------------------------------------------/
    // MOBILE CHECK
    //----------------------------------------------------/
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    //----------------------------------------------------/
    // RESPONSIVE CLASSES
    //----------------------------------------------------/
    RP.responsiveClasses = function () {

        var jRes = jRespond([
            {
                label: 'smallest',
                enter: 0,
                exit: 479
                }, {
                label: 'handheld',
                enter: 480,
                exit: 767
                }, {
                label: 'tablet',
                enter: 768,
                exit: 991
                }, {
                label: 'laptop',
                enter: 992,
                exit: 1199
                }, {
                label: 'desktop',
                enter: 1200,
                exit: 10000
                }
            ]);
        jRes.addFunc([
            {
                breakpoint: 'desktop',
                enter: function () {
                    $body.addClass('device-lg');
                },
                exit: function () {
                    $body.removeClass('device-lg');
                }
                }, {
                breakpoint: 'laptop',
                enter: function () {
                    $body.addClass('device-md');
                },
                exit: function () {
                    $body.removeClass('device-md');
                }
                }, {
                breakpoint: 'tablet',
                enter: function () {
                    $body.addClass('device-sm');
                },
                exit: function () {
                    $body.removeClass('device-sm');
                }
                }, {
                breakpoint: 'handheld',
                enter: function () {
                    $body.addClass('device-xs');
                },
                exit: function () {
                    $body.removeClass('device-xs');
                }
                }, {
                breakpoint: 'smallest',
                enter: function () {
                    $body.addClass('device-xxs');
                },
                exit: function () {
                    $body.removeClass('device-xxs');
                }
                }
        ]);
    };

    //----------------------------------------------------/
    // CAROUSEL SLIDER
    //----------------------------------------------------/
    RP.carouselRP = function () {
        var $sliderCarousel = $('.carousel') || $('.owl-carousel'),
            $postCarousel = $(".post-mini-slider");
        if ($sliderCarousel.exists()) {
            $sliderCarousel.each(function () {
                var element = $(this),
                    sliderCarouselColumns = element.attr('data-carousel-col') || "4",
                    sliderCarouselColumnsMedium = element.attr('data-carousel-col-md') || "4",
                    sliderCarouselColumnsSmall = element.attr('data-carousel-col-sm') || "3",
                    sliderCarouselColumnsExtraSmall = element.attr('data-carousel-col-xs') || "1",
                    $sliderCarouselMargins = element.attr('data-carousel-margins') || "20",
                    $sliderCarouseDots = element.attr('data-carousel-dots') || false,
                    $sliderCarouseNav = false,
                    $sliderCarouseAutoPlay = element.attr('data-carousel-autoplay') || false,
                    $sliderCarouseVideo = element.attr('data-carousel-video') || false;
                if ($sliderCarouseDots === false) {
                    $sliderCarouseNav = true;
                } else {
                    $sliderCarouseDots = true;
                }
                if (sliderCarouselColumns == 1) {
                    element.owlCarousel({
                        margin: Number($sliderCarouselMargins),
                        nav: $sliderCarouseNav,
                        navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                        autoplay: $sliderCarouseAutoPlay,
                        autoplayHoverPause: true,
                        dots: $sliderCarouseDots,
                        items: 1,
                        autoHeight: false,
                        video: $sliderCarouseVideo,
                    });
                } else {
                    element.owlCarousel({
                        margin: Number($sliderCarouselMargins),
                        nav: $sliderCarouseNav,
                        navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                        autoplay: $sliderCarouseAutoPlay,
                        autoplayHoverPause: true,
                        dots: $sliderCarouseDots,
                        video: $sliderCarouseVideo,
                        responsive: {
                            0: {
                                items: sliderCarouselColumnsExtraSmall
                            },
                            600: {
                                items: sliderCarouselColumnsSmall
                            },
                            1000: {
                                items: sliderCarouselColumnsMedium
                            },
                            1200: {
                                items: sliderCarouselColumns
                            }
                        }
                    });
                }
            });
        }
        if ($postCarousel.exists()) {
            $postCarousel.each(function () {
                $postCarousel.owlCarousel({
                    autoplay: true,
                    autoplayHoverPause: true,
                    dots: true,
                    mouseDrag: false,
                    touchDrag: false,
                    items: 1,
                });

            });
        }
        if ($("#slider-carousel").exists()) {
            $("#slider-carousel").each(function () {
                $("#slider-carousel").owlCarousel({
                    margin: 0,
                    loop: true,
                    nav: true,
                    navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                    autoplay: true,
                    dots: false,
                    autoplayHoverPause: true,
                    navigation: true,
                    items: 1,
                    animateOut: 'fadeOut'
                });
                var owl = $("#slider-carousel");
                $('.owl-item.active .slider-content').addClass("animated fadeIn");
                owl.on('changed.owl.carousel', function (event) {
                    $('.owl-item:not(.active)').siblings().find(".slider-content").removeClass("animated fadeIn");
                    setTimeout(function () {
                        $('.owl-item.active .slider-content').addClass("animated fadeIn");
                    }, 300);
                    //stop embed videos if they exists
                    if ($("#slider-carousel .owl-item.active .slider-content iframe").length) {
                        var url = $("#slider-carousel .owl-item.active .slider-content iframe").attr("src");
                        $('iframe').attr('src', '');
                        $('iframe').attr('src', url);

                    }
                });
            });
        }
        // News ticker
        if ($('.news-ticker-content').exists()) {
            $('.news-ticker-content').each(function () {
                $('.news-ticker-content').owlCarousel({
                    autoplay: true,
                    autoplayHoverPause: true,
                    dots: false,
                    mouseDrag: true,
                    touchDrag: true,
                    margin: 40,
                    autoWidth: true,
                    autoplayTimeout: "3000",
                    loop: true,
                });

            });
        }
        if ($('.tab-carousel').exists()) {
            if ($('.tab-carousel').parent().hasClass('active')) {
                $('.tab-carousel').owlCarousel({
                    navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                    margin: 0,
                    nav: true,
                    dots: false,
                    items: 1
                });
            } else {
                $('.tabs-navigation li a').click(function () {
                    $('.tab-carousel').owlCarousel({
                        navText: ['<i class="fa fa-arrow-left icon-white"></i>',
                              '<i class="fa fa-arrow-right icon-white"></i>'],
                        margin: 0,
                        nav: true,
                        dots: false,
                        items: 1
                    });
                });
            }
        }
    };

    //----------------------------------------------------/
    // SMOTH SCROLL NAVIGATION
    //----------------------------------------------------/
    RP.naTo = function () {
        $('a.scroll-to, a.nav-to').on('click', function () {
            var $anchor = $(this);

            $('html, body').stop(true, false).animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            return false;
        });
    };

    //----------------------------------------------------/
    // GO TO TOP
    //----------------------------------------------------/
    RP.goToTop = function () {
        var $goToTop = $('.gototop'),
            scrollOffsetFromTop = 800;
        if ($window.scrollTop() > scrollOffsetFromTop) {
            $goToTop.fadeIn("slow");
        } else {
            $goToTop.fadeOut("slow");
        }
        $goToTop.on("click", function () {
            $('body,html').stop(true).animate({
                scrollTop: 0
            }, 1500, 'easeInOutExpo');
            return false;
        });
    };

    //----------------------------------------------------/
    // LOGO STATUS
    //----------------------------------------------------/
    RP.logoStatus = function () {
        if ($header.hasClass('header-navigation-light') && $window.width() < 991) {
            logo.find('img').attr('src', logoImg);
        } else {
            if ($header.hasClass('header-dark')) {
                if (logoDark) {
                    logo.find('img').attr('src', logoDark);
                } else {
                    logo.find('img').attr('src', logoImg);
                }

            } else {
                logo.find('img').attr('src', logoImg);
            }
        }
    };

    //----------------------------------------------------/
    // STICKY HEADER
    //----------------------------------------------------/
    RP.stickyHeaderStatus = function () {
        if ($header.exists()) {
            var headerOffset = $header.offset().top;
            if ($window.scrollTop() > headerOffset) {
                if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
                    if (!$header.hasClass("header-no-sticky")) {
                        $header.addClass('header-sticky');
                    }
                    if ($header.hasClass('header-navigation-light')) {
                        logo.find('img').attr('src', logoImg);
                    }
                } else {
                    $header.removeClass('header-sticky');
                }
            } else {
                $header.removeClass('header-sticky');
            }
        }
    };

    RP.stickyHeader = function () {
        $window.on('scroll', function () {
            RP.logoStatus();
            RP.stickyHeaderStatus();
        });
    };

    //----------------------------------------------------/
    // SCREEN SIZE CONTROL
    //----------------------------------------------------/
    RP.screenSizeControl = function () {
        if ($fullScreen.exists()) {
            var headerHeight = $header.height();
            var topbarHeight = $topbar.height();
            $fullScreen.each(function () {
                var $elem = $(this),
                    elemHeight = $window.height();
                $elem.css('height', elemHeight);
                if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
                    $elem.css('height', elemHeight);
                }else {
                    if ($topbar) {
                        $elem.css('height', elemHeight - (headerHeight + topbarHeight));
                    } else {
                        $elem.css('height', elemHeight - (headerHeight));
                    }
                }

            });
        }

        if ($halfScreen.exists()) {
            $halfScreen.each(function () {
                var $elem = $(this),
                    elemHeight = $window.height();

                $elem.css('height', elemHeight / 1.5);
            });
        }
    };

    //----------------------------------------------------/
    // TOP BAR
    //----------------------------------------------------/

    RP.topBar = function () {
        if ($topbar.exists()) {
            $("#topbar .topbar-dropdown .topbar-form").each(function (index, element) {                
                if ($window.width() - ($(element).width() + $(element).offset().left) < 0) {
                    $(element).addClass('dropdown-invert');
                }
            });
        }
    }

    //----------------------------------------------------/
    // TOP SEARCH
    //----------------------------------------------------/
    $("#top-search-trigger").on("click", function () {
        $body.toggleClass('top-search-active');
        $topSearch.find('input').focus();
        return false;
    });

    //----------------------------------------------------/
    // MAIN MENU FIXES
    //----------------------------------------------------/

    if (!$body.hasClass('device-lg') || !$body.hasClass('device-md')) {
        if (mainmenu.hasClass('mega-menu')) {
            mainmenuitems.on('click', function () {
                $(this).parent('ul li').toggleClass("resp-active", 1000, "easeOutSine");
                return false;
            });
            mainsubmenuitems.on('click', function () {
                $(this).parent('li').toggleClass('resp-active');
                return false;
            });
        }
    }

    RP.menuFix = function () {
        if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
            $('ul.main-menu .dropdown:not(.mega-menu-item) ul ul').each(function (index, element) {
                if ($window.width() - ($(element).width() + $(element).offset().left) < 0) {
                    $(element).addClass('menu-invert');
                }
            });
        }
    };

    //----------------------------------------------------/
    // Button lines
    //----------------------------------------------------/
    $(".lines-button").on("click", function () {
        $(this).toggleClass("lines-button-close");
    });

    //----------------------------------------------------/
    // Side panel
    //----------------------------------------------------/

    RP.sidePanel = function () {
        if (sidePanel.exists()) {
            if ($body.hasClass("side-panel-static")) {
                $body.addClass("side-push-panel side-panel-left side-panel-active");

            } else {
                $(".side-panel-button button").on("click", function () {
                    if ($body.hasClass("side-panel-active")) {
                        $body.removeClass("side-panel-active");
                    } else {
                        $body.addClass("side-panel-active");
                    }
                    return false;
                });
                $body.removeClass("side-panel-active");
                $body.addClass("side-push-panel side-panel-left");
            }

        } else {
            $body.removeClass("side-push-panel side-panel-left");
        }

        //Side Panel Dark logo version
        if (sidePanel.hasClass('side-panel-dark')) {
            if (sidePanellogoDark) {
                sidePanellogo.find('img').attr('src', sidePanellogoDark);
            } else {
                sidePanellogo.find('img').attr('src', sidePanellogoImg);
            }

        } else {
            sidePanellogo.find('img').attr('src', sidePanellogoImg);
        }
    };
    //----------------------------------------------------/
    // VERTICAL MENU (DOTS)
    //----------------------------------------------------/

    RP.verticalDotMenu = function () {
        if (navigationItems.exists()) {
            navigationItems.on('click', function () {
                navigationItems.removeClass('active');
                $(this).addClass('active');
                return false;
            });
        }
    };

    //----------------------------------------------------/
    // FULLSCREEN MENU
    //----------------------------------------------------/

    RP.fullScreenPanel = function () {
        if (fullScreenPanel.exists()) {
            $("#fullscreen-panel-button").on("click", function () {
                $body.toggleClass('fullscreen-panel-active');
                return false;
            });
        }
    };


    //----------------------------------------------------/
    // TEXT ROTATOR
    //----------------------------------------------------/
    RP.textRotator = function () {
        if ($textRotator.exists()) {
            $textRotator.each(function () {
                var $elem = $(this),
                    dataTextSeperator = $elem.attr('data-rotate-separator') || ",",
                    dataTextEffect = $elem.attr('data-rotate-effect') || "flipInX",
                    dataTextSpeed = $elem.attr('data-rotate-speed') || 2000;
                $textRotator.Morphext({
                    animation: dataTextEffect,
                    separator: dataTextSeperator,
                    speed: Number(dataTextSpeed)
                });
            });
        }
    };

    //----------------------------------------------------/
    // ACCORDION
    //----------------------------------------------------/
    RP.accordion = function () {
        var $accs = $(classFinder + accordionItem);
        $accs.length && ($accs.each(function () {
            var $item = $(this);
            $item.hasClass(itemActive) ? $item.addClass(itemActive) : $item.find(classFinder + itemContent).hide();
        }), $(classFinder + itemTitle).on("click", function (e) {
            var $link = $(this),
                $item = $link.parents(classFinder + accordionItem),
                $acc = $item.parents(classFinder + accordionType);
            $item.hasClass(itemActive) ? $acc.hasClass(toogleType) ? ($item.removeClass(itemActive), $link.next(classFinder + itemContent).slideUp("fast")) : ($acc.find(classFinder + accordionItem).removeClass(itemActive), $acc.find(classFinder + itemContent).slideUp("fast")) : ($acc.hasClass(toogleType) || ($acc.find(classFinder + accordionItem).removeClass(itemActive), $acc.find(classFinder + itemContent).slideUp("fast")), $item.addClass(itemActive),
                    $link.next(classFinder + itemContent).slideToggle("fast")
                ),
                e.preventDefault();
            return false;
        }));
        if ($('.carousel').exists()) {
            RP.carouselRP();
        }
    };

    /* ---------------------------------------------------------------------------
     * TABS
     * --------------------------------------------------------------------------- */
    RP.tabs = function () {
        var $tabNavigation = $(".tabs-navigation a");
        if ($tabNavigation.exists()) {
            $tabNavigation.on("click", function (e) {
                $(this).tab("show"), e.preventDefault();
                return false;
            });
        }
    };

    /* ---------------------------------------------------------------------------
     * Animations
     * --------------------------------------------------------------------------- */
    RP.animations = function () {
        if (dataAnimation.exists() && $body.hasClass('device-lg') || $body.hasClass('device-md')) {
            dataAnimation.each(function () {
                $(this).addClass("animated");
                var $elem = $(this),
                    animationType = $elem.attr("data-animation") || "fadeIn",
                    animationDelay = $elem.attr("data-animation-delay") || 200,
                    animationDirection = ~animationType.indexOf("Out") ? "back" : "forward";
                if (animationDirection == "forward") {
                    $elem.appear(function () {
                        setTimeout(function () {
                            $elem.addClass(animationType + " visible");
                        }, animationDelay);
                    }, {
                        accX: 0,
                        accY: -120
                    }, 'easeInCubic');
                } else {
                    $elem.addClass("visible");
                    $elem.on("click", function () {
                        $elem.addClass(animationType);
                        return false;
                    });
                }
                if ($elem.parents('.demo-play-animations').length) {
                    $elem.on("click", function () {
                        $elem.removeClass(animationType);
                        setTimeout(function () {
                            $elem.addClass(animationType);
                        }, 50);
                        return false;
                    });
                }
            });
        }
    };

    /* ---------------------------------------------------------------------------
     * RESPONSIVE VIDEOS
     * --------------------------------------------------------------------------- */
    RP.resposniveVideos = function () {
        if ($().fitVids) {
            $("section, .content, .post-content, .ajax-quick-view,#slider:not(.revslider-wrap)").fitVids();
        }
    };

    /* ---------------------------------------------------------------------------
     * COUNTER NUMBERS
     * --------------------------------------------------------------------------- */
    RP.counters = function () {
        if ($counter.exists()) {
            $counter.each(function () {
                var $elem = $(this);
                $elem.appear(function () {
                    $elem.find('span').countTo();
                });
            });
        }
    };

    /* ---------------------------------------------------------------------------
     * COUNTDOWN TIMER
     * --------------------------------------------------------------------------- */
    RP.countdownTimer = function () {
        if ($countdownTimer.exists()) {
            setTimeout(function () {
                $('[data-countdown]').each(function () {
                    var $this = $(this),
                        finalDate = $(this).data('countdown');
                    $this.countdown(finalDate, function (event) {
                        $this.html(event.strftime('<div class="countdown-container"><div class="countdown-box"><div class="number">%-D</div><span>Day%!d</span></div>' + '<div class="countdown-box"><div class="number">%H</div><span>Hours</span></div>' + '<div class="countdown-box"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="countdown-box"><div class="number">%S</div><span>Seconds</span></div></div>'));

                    });
                });
            }, 300);
        }
    };

    /* ---------------------------------------------------------------------------
     * PROGRESS BARS
     * --------------------------------------------------------------------------- */
    /* RP.progressBar = function () {
        if ($progressBar.exists()) {
            $progressBar.each(function (i, elem) {
                var $elem = $(this),
                    percent = $elem.attr('data-percent') || "100",
                    delay = $elem.attr('data-delay') || "100",
                    type = $elem.attr('data-type') || "%";
                if (!$elem.hasClass('progress-animated')) {
                    $elem.css({
                        'width': '0%'
                    });
                }
                var progressBarRun = function () {
                    $elem.animate({
                        'width': percent + '%'
                    }, 'easeInOutCirc').addClass('progress-animated');
                };
                if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
                    $(elem).appear(function () {
                        setTimeout(function () {
                            progressBarRun();
                        }, delay);
                    });
                } else {
                    progressBarRun();

                }
            });
        }
    }; */
 
    /* ---------------------------------------------------------------------------
     * PRI CHARTS
     * --------------------------------------------------------------------------- */
    RP.pieChart = function () {
        if ($pieChart.exists()) {
            $pieChart.each(function () {
                var $elem = $(this),
                    pieChartSize = $elem.attr('data-size') || "160",
                    pieChartAnimate = $elem.attr('data-animate') || "2000",
                    pieChartWidth = $elem.attr('data-width') || "6",
                    pieChartColor = $elem.attr('data-color') || "#00c0e9",
                    pieChartTrackColor = $elem.attr('data-trackcolor') || "rgba(0,0,0,0.10)";
                $elem.find('span, i').css({
                    'width': pieChartSize + 'px',
                    'height': pieChartSize + 'px',
                    'line-height': pieChartSize + 'px'
                });
                $elem.appear(function () {
                    $elem.easyPieChart({
                        size: Number(pieChartSize),
                        animate: Number(pieChartAnimate),
                        trackColor: pieChartTrackColor,
                        lineWidth: Number(pieChartWidth),
                        barColor: pieChartColor,
                        scaleColor: false,
                        lineCap: 'square',
                        onStep: function (from, to, percent) {
                            $elem.find('span.percent').text(Math.round(percent));
                        }
                    });
                });
            });
        }
    };

    /* ---------------------------------------------------------------------------
     * GOOGLE MAPS
     * --------------------------------------------------------------------------- */
    RP.maps = function () {
        if ($map.exists()) {
            $map.each(function () {
                var $elem = $(this),
                    mapAddress = $elem.attr('data-map-address') ? $elem.attr('data-map-address') : "Melbourne, Australia",
                    mapType = $elem.attr('data-map-type') ? $elem.attr('data-map-type') : "ROADMAP",
                    mapZoom = $elem.attr('data-map-zoom') ? $elem.attr('data-map-zoom') : "14",
                    mapIcon = $elem.attr('data-map-icon') ? $elem.attr('data-map-icon') : "images/markers/marker2.png";
                var markers = [{
                    address: mapAddress,
                    html: mapAddress,
                    icon: {
                        image: mapIcon,
                        iconsize: [40, 63],
                        iconanchor: [18, 60],
                    },
                    }];
                $elem.gMap({
                    address: mapAddress,
                    maptype: mapType,
                    markers: markers,
                    zoom: Number(mapZoom),
                    doubleclickzoom: true,
                    controls: {
                        panControl: true,
                        zoomControl: true,
                        mapTypeControl: false,
                        scaleControl: true,
                        streetViewControl: false,
                        overviewMapControl: true
                    }
                });
            });
        }
    };

    /* ---------------------------------------------------------------------------
     * MASONRY ISOTOPE
     * --------------------------------------------------------------------------- */
    RP.masonryIsotope = function () {
        var $isotops = $(".isotope");
        $isotops.each(function () {
            var isotopeTime,
                $elem = $(this),
                defaultFilter = $elem.data("isotopeDefaultFilter") || 0,
                id = $elem.attr("id"),
                mode = $elem.attr('data-isotope-mode') || "masonry",
                columns = $elem.attr('data-isotope-col') || "4",
                $elemContainer = $elem,
                itemElement = $elem.attr('data-isotope-item') || ".isotope-item",
                itemElementSpace = $elem.attr('data-isotope-item-space') || 0;
            $elem.isotope({
                    filter: defaultFilter,
                    itemSelector: itemElement,
                    layoutMode: mode,
                    transitionDuration: '0.6s',
                    resizesContainer: true,
                    resizable: true,
                    animationOptions: {
                        duration: 400,
                        queue: !1
                    }
                }),
                $window.resize(function () {
                    $elemContainer.css('margin-right', '-' + itemElementSpace + '%');
                    if ($body.hasClass('device-sm') || $body.hasClass('device-xs')) {
                        itemWidth(2, $elemContainer, itemElement, itemElementSpace);
                    } else if ($body.hasClass('device-xxs')) {
                        itemWidth(1, $elemContainer, itemElement, itemElementSpace);
                    } else {
                        itemWidth(columns, $elemContainer, itemElement, itemElementSpace);
                    }
                    if (columns == 1 && $body.hasClass('device-sm') || columns == 1 && $body.hasClass('device-xs')) {
                        itemWidth(1, $elemContainer, itemElement, itemElementSpace);
                    }
                    clearTimeout(isotopeTime), isotopeTime = setTimeout(function () {
                        $elem.isotope("layout");
                    }, 300);
                });

            var $menu = $('[data-isotope-nav="' + id + '"]');
            $menu.length && $menu.find("li:not('.link-only')").on("click", function (e) {
                var $link = $(this);
                $(".filter-active-title").empty().append($link.text());
                if (!$link.hasClass("ptf-active")) {
                    var selector = $link.attr("data-filter");
                    $link.parents(".portfolio-filter").eq(0).find(".ptf-active").removeClass("ptf-active"), $link.addClass("ptf-active"), $elem.isotope({
                        filter: selector
                    });
                }
                e.preventDefault();
                return false;
            }), $window.resize();
        });

    };

    // Intellegent Grid
    var itemWidth = function (columns, $elemContainer, itemElement, itemElementSpace) {
        var $findElement = $elemContainer.find(itemElement);
        var $findElementLarge = $elemContainer.find(".large-item");
        var itemElementMargins = {
            "margin-right": itemElementSpace + "%",
            "margin-bottom": itemElementSpace + "%",
        };
        if (columns == 1) {
            $findElement.width('100%');
            $findElementLarge.width('100%');
        }
        if (columns == 2) {
            $findElement.width(50 - itemElementSpace + '%').css(itemElementMargins);
            $findElementLarge.width(50 - itemElementSpace + '%').css(itemElementMargins);
        }
        if (columns == 3) {
            $findElement.width(33.33 - itemElementSpace + '%').css(itemElementMargins);
            $findElementLarge.width(66.66 - itemElementSpace + '%').css(itemElementMargins);
        }
        if (columns == 4) {
            $findElement.width(25 - itemElementSpace + '%').css(itemElementMargins);
            $findElementLarge.width(50 - itemElementSpace + '%').css(itemElementMargins);
        }
        if (columns == 5) {
            $findElement.width(20 - itemElementSpace + '%').css(itemElementMargins);
            $findElementLarge.width(40 - itemElementSpace + '%').css(itemElementMargins);
        }
        if (columns == 6) {
            $findElement.width(16.666666 - itemElementSpace + '%').css(itemElementMargins);
            $findElementLarge.width(33.333333 - itemElementSpace + '%').css(itemElementMargins);
        }
    };

    /* ---------------------------------------------------------------------------
     * TOOLTIPS
     * --------------------------------------------------------------------------- */
    RP.tooltip = function () {
        var $tooltip = $('[data-toggle="tooltip"]');
        if ($tooltip.exists()) {
            $('[data-toggle="tooltip"]').tooltip();
        }
    };

    /* ---------------------------------------------------------------------------
     * POPOVER
     * --------------------------------------------------------------------------- */
    RP.popover = function () {
        var $popover = $('[data-toggle="popover"]');
        if ($popover.exists()) {
            $('[data-toggle="popover"]').popover({
                container: 'body',
                html: true
            });
        }
    };

    /* ---------------------------------------------------------------------------
     * LIGHTBOX
     * --------------------------------------------------------------------------- */
    RP.lightBoxRP = function () {
        if ($lightbox_image.exists()) {
            $lightbox_image.magnificPopup({
                type: 'image'
            });
        }
        if ($lightbox_gallery.exists()) {
            $lightbox_gallery.each(function () {
                $(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            });
        }
        if ($lightbox_iframe.exists()) {
            $lightbox_iframe.each(function () {
                $(this).magnificPopup({
                    type: 'iframe'
                });
            });
        }
        if ($lightbox_ajax.exists()) {
            $lightbox_ajax.each(function () {
                $(this).magnificPopup({
                    type: 'ajax',
                    callbacks: {
                        ajaxContentAdded: function (mfpResponse) {
                            RP.carouselRP();
                            RP.resposniveVideos();
                            RP.accordion();
                        }
                    }
                });
            });
        }
    }

    /* ---------------------------------------------------------------------------
     * FLICKR WIDGET
     * --------------------------------------------------------------------------- */
    RP.flickr_widget = function () {
        if ($flickr_widget.exists()) {
            $flickr_widget.each(function () {
                var $elem = $(this),
                    $flickrId = $elem.attr('data-flickr-id') || "52617155@N08",
                    $flickrImages = $elem.attr('data-flickr-images') || "9";
                $flickr_widget.jflickrfeed({
                    limit: $flickrImages,
                    qstrings: {
                        id: $flickrId
                    },
                    itemTemplate: '<a href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
                }, function () {
                    $elem.magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        gallery: {
                            enabled: true
                        }
                    });
                });
            });
        }
    }

    /* ---------------------------------------------------------------------------
     * YOUTUBE BACKGROUND PLAYER
     * --------------------------------------------------------------------------- */
    RP.youTubeBgPlayer = function () {
        if ($ytPlayer.exists()) {
            $ytPlayer.each(function () {
                var elem = $(this),
                    ytPlayerVideo = elem.attr('data-youtube-url') || null,
                    ytPlayerMute = elem.attr('data-youtube-mute') || false,
                    ytPlayerRatio = elem.attr('data-youtube-ratio') || '16/9',
                    ytPlayerQuality = elem.attr('data-youtube-quality') || 'hd720',
                    ytPlayerOpacity = elem.attr('data-youtube-opacity') || 1,
                    ytPlayerContainer = elem.attr('data-youtube-container') || 'self',
                    ytPlayerOptimize = elem.attr('data-youtube-optimize') || true,
                    ytPlayerLoop = elem.attr('data-youtube-loop') || true,
                    ytPlayerVolume = elem.attr('data-youtube-volume') || 1,
                    ytPlayerStart = elem.attr('data-youtube-start') || 0,
                    ytPlayerStop = elem.attr('data-youtube-stop') || 0,
                    ytPlayerAutoPlay = elem.attr('data-youtube-autoplay') || false,
                    ytPlayerFullScreen = elem.attr('data-youtube-fullscreen') || true,
                    ytPlayerControls = elem.attr('data-youtube-controls') || false,
                    ytPlayerLogo = elem.attr('data-youtube-controls') || false,
                    ytPlayerAutoPause = elem.attr('data-youtube-autopause') || false;
                elem.mb_YTPlayer({
                    videoURL: ytPlayerVideo,
                    mute: ytPlayerMute,
                    ratio: ytPlayerRatio,
                    quality: ytPlayerQuality,
                    opacity: ytPlayerOpacity,
                    containment: ytPlayerContainer,
                    optimizeDisplay: ytPlayerOptimize,
                    loop: ytPlayerLoop,
                    vol: ytPlayerVolume,
                    startAt: ytPlayerStart,
                    stopAt: ytPlayerStop,
                    autoPlay: ytPlayerAutoPlay,
                    realfullscreen: ytPlayerFullScreen,
                    showYTLogo: ytPlayerLogo,
                    showControls: ytPlayerControls
                });
                if (!ytPlayerAutoPlay) {
                    elem.find("#youtube-background-controls").addClass("video-is-playing");
                }
                elem.on("YTPReady", function () {
                    $("#youtube-background-controls").on("click", function () {
                        if (!$(this).hasClass("video-is-playing")) {
                            $(this).addClass("video-is-playing");
                            $ytPlayer.YTPPause();
                        } else {
                            $(this).removeClass("video-is-playing");
                            $ytPlayer.YTPPlay();
                        }
                        return false;
                    });
                    var elemContainerHeight = elem.height();
                    if (ytPlayerAutoPause) {
                        $window.on('scroll', function () {
                            if ($window.scrollTop() > elemContainerHeight) {
                                $("#youtube-background-controls").addClass("video-is-playing");
                                $ytPlayer.YTPPause();
                            }

                        });
                    }
                });
            });
        }
    }

    //----------------------------------------------------/
    // Mouse Scroll
    //----------------------------------------------------/
    RP.mouseScroll = function () {
        if ($body.hasClass('mouse-scroll') && $window.width() > 767) {
            var $offset = 0;
            if ($header.hasClass('header-transparent')) {
                $offset = -$header.height() - 20;
            }
            $.scrollify({
                section: "section",
                sectionName: "section-name",
                scrollSpeed: 1100,
                offset: $offset,
                scrollbars: true,
            });
        }
    }

    //Window load functions
    /* $window.load(function () {
        RP.progressBar(),
            RP.pieChart(),
            RP.masonryIsotope(),
            RP.carouselRP(),
            RP.animations(),
            RP.menuFix()
    }); */

    //Document ready functions
    $document.ready(
        RP.responsiveClasses(),
        RP.stickyHeader(),
        RP.logoStatus(),
        RP.verticalDotMenu(),
        RP.mouseScroll(),
        RP.screenSizeControl(),
        //RP.parallax(),
        RP.naTo(),
        RP.sidePanel(),
        RP.fullScreenPanel(),
        RP.textRotator(),
        RP.accordion(),
        RP.tabs(),
        RP.counters(),
        RP.countdownTimer(),
        RP.youTubeBgPlayer(),
        RP.maps(),
        RP.lightBoxRP(),
        RP.resposniveVideos(),
        RP.tooltip(),
        RP.popover(),
        RP.flickr_widget(),
        RP.goToTop(),
        RP.topBar()

    );

    //Document resize functions
    $window.resize(function () {
        RP.logoStatus(),
            RP.screenSizeControl(),
            RP.menuFix()
    });

    //Document scrool functions
    $window.scroll(function () {
        RP.goToTop()
    });
})(jQuery);