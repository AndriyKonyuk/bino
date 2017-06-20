$(document).ready(function(){
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    $(function() {
        var videos  = $(".video");

        videos.on("click", function(){
            var elm = $(this),
                conts   = elm.contents(),
                le      = conts.length,
                ifr     = null;

            for(var i = 0; i<le; i++){
                if(conts[i].nodeType == 8) ifr = conts[i].textContent;
            }

            elm.addClass("player").html(ifr);
            elm.off("click");
        });
    });

    $('#menu_button').click(function () {
        $('.main-header_navigation').fadeToggle(1000).toggleClass('active');
    });

    $(".carousel").swiperight(function() {
        $(this).carousel('prev');
    });
    $(".carousel").swipeleft(function() {
        $(this).carousel('next');
    });


});