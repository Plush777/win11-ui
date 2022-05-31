$(function(){
    $('.fixedAppList ul li').on({
        "click": function(){
            if($(this).hasClass('discord')){
                $('.browser.discord').toggleClass('open').removeClass('close');
                if($('.browser').hasClass('open')){
                    $('.taskCenter ul li.discord').addClass('on').removeClass('appSave');
                    $('.taskCenter ul li:last-child').after(`<li class="discord on new"><i class="icon"></i></li>`)
                } else {
                    $('.taskCenter ul li.discord').removeClass('on').addClass('appSave');
                }
                if($('.browser.discord').hasClass('open')){
                    $('.taskCenter ul li.discord').addClass('on vib transY0').removeClass('hid none');
                }
            }
            $('.windows').removeClass('on');
            $('.activeMenu').removeClass('active');
        }
    });

    $(document).on({
        "click": function (e) {
            if($(e.target).closest('.activeMenu').length === 0 && $(e.target).closest('.windows').length === 0){
                $('.activeMenu').removeClass('active');
                $('.windows').removeClass('on');
            }
        }
    });
});