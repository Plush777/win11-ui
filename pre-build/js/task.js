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
            } 
            
            else if($(this).hasClass('edge')){
                $('.browser.edge').toggleClass('open').removeClass('save');

                if($('.browser').hasClass('open')){
                    $('.taskCenter ul li.edge').addClass('on').removeClass('appSave');
                } else {
                    $('.taskCenter ul li.edge').removeClass('on').addClass('appSave');
                }
            }
        }
    });

    $(document).on('click','.taskCenter ul li',function(){
        if($(this).hasClass('discord')){
            $('.browser.discord').toggleClass('open').removeClass('save');
            if($('.browser').hasClass('open')){
                $('.taskCenter ul li.discord').addClass('on').removeClass('appSave');
            } else {
                $('.taskCenter ul li.discord').removeClass('on').addClass('appSave');
            }
        } else if($(this).hasClass('vsc')){
            $('.browser.vsc').toggleClass('open').removeClass('save');
            if($('.browser').hasClass('open')){
                $('.taskCenter ul li.vsc').addClass('on').removeClass('appSave');
            } else {
                $('.taskCenter ul li.vsc').removeClass('on').addClass('appSave');
            }
        } else if($(this).hasClass('notePad')){
            $('.windowApp.notePad').toggleClass('open').removeClass('save');
            if($('.windowApp').hasClass('open')){
                $('.taskCenter ul li.notePad').addClass('on').removeClass('appSave');
            } else {
                $('.taskCenter ul li.notePad').removeClass('on').addClass('appSave');
            }
        } else if($(this).hasClass('setting')){
            $('.windowApp.setting').toggleClass('open').removeClass('save').removeClass('close');
            if($('.windowApp').hasClass('open')){
                $('.taskCenter ul li.setting').addClass('on').removeClass('appSave');
            } else {
                $('.taskCenter ul li.setting').removeClass('on').addClass('appSave');
            }
        }
    });

    $('.windows').on({
        "click": function(){
            $('.activeMenu').toggleClass('active');
            $(this).toggleClass('on');
        }
    });
})