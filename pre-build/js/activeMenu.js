$(function(){
    $('.fixedAppList ul li').on({
        "click": function(){
            if($(this).hasClass('discord')){
                $('.browser.discord').toggleClass('open').removeClass('close');
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