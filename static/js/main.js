
!function(t){"use strict";var n=t(window);function e(){var a,e;a=t(".full-screen"),e=n.height(),a.css("min-height",e),a=t("header").height(),e=t(".screen-height"),a=n.height()-a,e.css("height",a)}t("#preloader").fadeOut("normall",function(){t(this).remove()}),n.on("scroll",function(){var a=n.scrollTop(),e=t(".navbar-brand img"),o=t(".navbar-brand.logodefault img");a<=175?(t("header").removeClass("scrollHeader").addClass("fixedHeader"),e.attr("src","img/logos/logo-inner.png")):(t("header").removeClass("fixedHeader").addClass("scrollHeader"),e.attr("src","img/logos/logo.png")),o.attr("src","img/logos/logo.png")}),n.on("scroll",function(){500<t(this).scrollTop()?t(".scroll-to-top").fadeIn(400):t(".scroll-to-top").fadeOut(400)}),t(".scroll-to-top").on("click",function(a){a.preventDefault(),t("html, body").animate({scrollTop:0},600)}),t(".parallax,.bg-img").each(function(a){t(this).attr("data-background")&&t(this).css("background-image","url("+t(this).data("background")+")")}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),t(".story-video").magnificPopup({delegate:".video",type:"iframe"}),t(".source-modal").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:160}),n.resize(function(a){setTimeout(function(){e()},500),a.preventDefault()}),0!==t(".copy-clipboard").length&&(new ClipboardJS(".copy-clipboard"),t(".copy-clipboard").on("click",function(){var a=t(this);a.text();a.text("Copied"),setTimeout(function(){a.text("Copy")},2e3)})),t(".vision-wrapper").on("mouseenter",function(a){var e=t(this).data("background");t(".vision-changebg").animate({opacity:.9},50,function(){t(".vision-changebg").css("background-image","url("+e+")")}),t(".vision-changebg").delay(50).animate({opacity:.9},50)}),e(),t(document).ready(function(){t(".testimonial-carousel3").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,nav:!1,dots:!1,thumbs:!1,thumbsPrerendered:!1,center:!1,margin:50,items:1}),t(".vision-changebg").owlCarousel({loop:!0,responsiveClass:!0,center:!1,nav:!0,navText:["<span class='fa-solid fa-arrow-left-long'></span>","<span class='fa-solid fa-arrow-right-long'></span>"],dots:!1,autoplay:!1,autoplayTimeout:5e3,margin:0,smartSpeed:900,responsive:{0:{items:1},576:{items:2},992:{items:4,loop:!1,nav:!1}}}),t(".portfolio-block").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,nav:!0,navText:["<span class='fa-solid fa-arrow-left-long'></span>","<span class='fa-solid fa-arrow-right-long'></span>"],dots:!1,center:!0,margin:30,responsive:{0:{items:1,margin:0,nav:!1},576:{items:1,margin:0,nav:!1},768:{items:2},992:{items:3},1400:{items:2}}}),t(".client-carousel").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,nav:!1,dots:!1,center:!1,margin:30,responsive:{0:{items:1},481:{items:2},768:{items:3},992:{items:4},1200:{items:6}}}),t(".slider-fade1").owlCarousel({items:1,loop:!0,dots:!0,margin:0,nav:!1,navText:["<span class='fas fa-chevron-left'></span>","<span class='fas fa-chevron-right'></span>"],autoplay:!0,smartSpeed:1500,mouseDrag:!1,animateIn:"fadeIn",animateOut:"fadeOut"}),t(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!1,margin:0,autoplay:!0,smartSpeed:500}),t(".slider-fade1").on("changed.owl.carousel",function(a){a=a.item.index-2;t("span").removeClass("animated fadeInUp"),t("h1").removeClass("animated fadeInUp"),t("p").removeClass("animated fadeInUp"),t("a").removeClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(a).find("span").addClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(a).find("h1").addClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(a).find("p").addClass("animated fadeInUp"),t(".owl-item").not(".cloned").eq(a).find("a").addClass("animated fadeInUp")}),t(".countup").counterUp({delay:25,time:2e3}),t(".countdown").countdown({date:"01 Sep 2026 00:01:00",format:"on"}),t(".current-year").text((new Date).getFullYear())}),n.on("load",function(){var e=t(".portfolio-gallery-isotope").isotope({});t(".filtering").on("click","span",function(){var a=t(this).attr("data-filter");e.isotope({filter:a})}),t(".filtering").on("click","span",function(){t(this).addClass("active").siblings().removeClass("active")}),t(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),t(".portfolio-link").on("click",a=>{a.stopPropagation()})})}(jQuery);