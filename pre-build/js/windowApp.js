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

    $('.windowApp.setting .topArea .right .browserControlArea .appReduction').on({
        "click": function(){
            $('.taskCenter ul li.setting').removeClass('on').addClass('appSave');
            $('.windowApp.setting').addClass('save').removeClass('open');
        }
    });

    $('.appSearch.type02').on({
        "focus": function(){
            $(this).closest('.searchArea').addClass('focus');
        },
        "blur": function(){
            $(this).closest('.searchArea').removeClass('focus');
        }
    });

    $('.tabList li').on({
        "click": function(){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).closest('.tabNav').parents('.leftArea').siblings('.rightArea').find('.tabCont')
            .eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
        }
    });
})