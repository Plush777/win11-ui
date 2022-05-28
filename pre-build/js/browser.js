$(function(){
    $('.tabClose,.btnBrowserClose').on({
        "click": function(){
            $('.browser').removeClass('open').addClass('close');
            $('.taskCenter ul li').removeClass('on appSave vib');
            $('.taskCenter ul li.new').addClass('none').removeClass('transY0');
        }
    });

    $('.browser.chrome .topArea .right .browserControlArea .btnReduction').on({
        "click": function(){
            $('.taskCenter ul li.chrome').removeClass('on').addClass('appSave');
            $('.browser.chrome').addClass('save').removeClass('open');
        }
    });

    $('.browser.vsc .topArea .right .browserControlArea .btnReduction').on({
        "click": function(){
            $('.taskCenter ul li.vsc').removeClass('on').addClass('appSave');
            $('.browser.vsc').addClass('save').removeClass('open');
        }
    })

    $('.browserTabList li').on({
        "mouseup": function(e){
            if(e.which == 2){
                $('.browser').removeClass('open').addClass('close');
            }
        }
    });

    $('.btnExp').on({
        "click": function(){
            $('.browser').toggleClass('minilize').css({'top': '0', 'left': '0'});
        }
    });

    $('.bookMarkList ul li').on({
        "click": function(){
            if($(this).hasClass('velog')){
                $('#chromeFrame').attr('src', 'https://velog.io/@sky');
            } else if($(this).hasClass('github')){
                $('#chromeFrame').attr('src', 'https://github.com/Plush777/win11-ui');
            } else if($(this).hasClass('mySite01')){
                $('#chromeFrame').attr('src', 'https://plush777.github.io/component-css/');
            }
        }
    });
})