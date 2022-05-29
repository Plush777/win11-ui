$(function(){
    $('.appList li').on({
        "click": function(){
            $(this).toggleClass('hover').siblings().removeClass('hover');
        }
    });

    $('.appList li').on({
        "dblclick": function(){
            if($(this).hasClass('chrome')){
                $('.browser.chrome').toggleClass('open').removeClass('close');
                $('.browser').removeClass('save');
                if($('.browser.chrome').hasClass('open')){
                    $('.taskCenter ul li.chrome').addClass('on');
                }
            } else if($(this).hasClass('vsc')){
                $('.browser.vsc').toggleClass('open').removeClass('close');
                $('.browser').removeClass('save');
                if($('.browser.vsc').hasClass('open')){
                    $('.taskCenter ul li.vsc').addClass('on vib').removeClass('hid');
                }
                
            } else if($(this).hasClass('edge')){
                $('.browser.edge').toggleClass('open').removeClass('close');
                $('.browser').removeClass('save');
                if($('.browser.edge').hasClass('open')){
                    $('.taskCenter ul li.edge').addClass('on vib').removeClass('hid');
                }
            }
            if($('.browser.vsc').hasClass('open')){
                $('.taskCenter ul li.new').addClass('transY0').removeClass('none');
            } 
        }
    });

    $(document).on({
        "click": function(e){
            if($(e.target).closest('.appList li').length === 0){
                $('.appList li').removeClass('hover');
            }
        }
    });
});