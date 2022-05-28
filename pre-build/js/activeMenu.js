$(function(){
    $('.fixedAppList ul li').on({
        "click": function(){
            if($(this).hasClass('discord')){
                $('.browser.discord').toggleClass('open').removeClass('close');
            }
        }
    })
});