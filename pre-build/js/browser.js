$(function(){
    $('.tabClose,.btnBrowserClose').on({
        "click": function(){
            $('.browser').removeClass('open').addClass('close');
            $('.taskCenter ul li').removeClass('on appSave vib');
            $('.taskCenter ul li.new').removeClass('transY0');
            if($('.browser').hasClass('vsc')){
                $('.taskCenter ul li.vsc').remove();
            } 
            if($('.browser').hasClass('discord')){
                $('.taskCenter ul li.discord').remove();
            }
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

    $('.btnPrev').on({
        "click": function(e){
            if(!$(this).hasClass('disabled')){
                $('#edgeFrame').attr('src', 'https://www.bing.com/');
                $('#edgeInput').val('');
                $(this).addClass('disabled');
            } else {
                $('#edgeFrame').attr('src', $(this).attr('data-url'));
            }
        }
    });

    let edgeFrameValue = this.value;
    let edgeFrameSrc = 'https://www.bing.com/';

    $('#edgeInput').on({
        "keydown": function(e){
            if(e.keyCode === 13){
                if($('#edgeInput').attr('src','https://www.bing.com/search?q=') + edgeFrameValue){
                    $('.btnPrev').removeClass('disabled');
                }
            }
        }
    });

    if(edgeFrameSrc == 'https://www.bing.com/'){
        $('.btnPrev,.btnNext').addClass('disabled');
    }
})