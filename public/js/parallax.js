!function(a){a("section").hasClass("parallax")&&(a("section.parallax").data("type","background"),a("section.parallax").data("speed","3")),a(document).ready(function(){$window=a(window),a("section.parallax").each(function(){var o=a(this);a(window).scroll(function(){var n=-((a(window).scrollTop()-o.offset().top)/o.data("speed")),t="50% "+n+"px";o.css({backgroundPosition:t})})})})}(jQuery);