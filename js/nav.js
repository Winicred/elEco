$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $('.sidebar').show("200")
        } else {
            $('.sidebar').hide("100")
        }
    })
    $.scrollTo = $.fn.scrollTo = function (y, options) {
        if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
        options = $.extend({}, {
            gap: {
                y: 0
            },
            animation: {
                easing: 'swing',
                duration: 200,
                complete: $.noop,
                step: $.noop
            }
        }, options);
        return this.each(function () {
            var elem = $(this);
            elem.stop().animate({
                scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
            }, options.animation);
        });
    };
    var aChildren = $("nav li").children();
    var aArray = [];
    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function () {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top;
            var divHeight = $(theID).height();
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("name-active");
            } else {
                $("a[href='" + theID + "']").removeClass("name-active");
            }
        }
        if (windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("name-active")) {
                var navActiveCurrent = $(".name-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("name-active");
                $("nav li:last-child a").addClass("name-active");
            }
        }
    });
});
