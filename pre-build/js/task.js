$(function(){
    $('.taskCenter ul li').on({
        "click": function(){
            if($(this).hasClass('chrome')){
                $('.browser.chrome').toggleClass('open').removeClass('save');
                if($('.browser').hasClass('open')){
                    $('.taskCenter ul li.chrome').addClass('on').removeClass('appSave');
                } else {
                    $('.taskCenter ul li.chrome').removeClass('on').addClass('appSave');
                }
            } else if($(this).hasClass('vsc')){
                $('.browser.vsc').toggleClass('open').removeClass('save');
                if($('.browser').hasClass('open')){
                    $('.taskCenter ul li.vsc').addClass('on').removeClass('appSave');
                } else {
                    $('.taskCenter ul li.vsc').removeClass('on').addClass('appSave');
                }
            } 
        }
    });
})