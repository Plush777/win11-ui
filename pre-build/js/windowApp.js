$(function(){
    $('.appClose').on({
        "click": function(){
            $('.windowApp').removeClass('open').addClass('close');
            $('.taskCenter ul li').removeClass('on appSave vib');
            $('.taskCenter ul li.new').removeClass('transY0');
            if($('.windowApp').hasClass('notePad')){
                $('.taskCenter ul li.notePad').remove();
            }
        }
    });

    $('.windowApp.notePad .topArea .right .browserControlArea .appReduction').on({
        "click": function(){
            $('.taskCenter ul li.notePad').removeClass('on').addClass('appSave');
            $('.windowApp.notePad').addClass('save').removeClass('open');
        }
    });
})