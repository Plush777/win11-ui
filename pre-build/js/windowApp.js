$(function(){
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