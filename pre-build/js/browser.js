$(function(){
    $('.tabClose,.btnBrowserClose').on({
        "click": function(){
            $(this).closest('.browser').removeClass('open').addClass('close');
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

    $('.btnReduction').on({
        "click": function(){
            if($(this).closest('.browser').hasClass('chrome')){
                $('.taskCenter ul li.chrome').removeClass('on').addClass('appSave');
                $('.browser.chrome').addClass('save').removeClass('open');
            } else if($(this).closest('.browser').hasClass('edge')){
                $('.taskCenter ul li.edge').removeClass('on').addClass('appSave');
                $('.browser.edge').addClass('save').removeClass('open');
            } else if($(this).closest('.browser').hasClass('discord')){
                $('.taskCenter ul li.discord').removeClass('on').addClass('appSave');
                $('.browser.discord').addClass('save').removeClass('open');
            } else if($(this).closest('.browser').hasClass('vsc')){
                $('.taskCenter ul li.vsc').removeClass('on').addClass('appSave');
                $('.browser.vsc').addClass('save').removeClass('open');
            }
        }
    });

    $('.browserTabList li').on({
        "mouseup": function(e){
            if(e.which == 2){
                $('.browser').removeClass('open').addClass('close');
                $('.taskCenter ul li').removeClass('on appSave vib');
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
                $('#chromeFrame,#edgeFrame').attr('src', 'https://velog.io/@sky');
            } else if($(this).hasClass('github')){
                $('#chromeFrame,#edgeFrame').attr('src', 'https://github.com/Plush777/win11-ui');
            } else if($(this).hasClass('mySite01')){
                $('#chromeFrame,#edgeFrame').attr('src', 'https://plush777.github.io/component-css/');
            }
        }
    });

    $('.btnPrev').on({
        "click": function(){
            $('.ieMode').addClass('disabled').removeClass('active');
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
                    $('.ieMode').addClass('active').removeClass('disabled');
                }
            }
        }
    });

    if(edgeFrameSrc == 'https://www.bing.com/'){
        $('.btnPrev,.btnNext').addClass('disabled');
    }

    $('.btnRefresh').on({
        "click": function(){
            $('#edgeFrame').attr('src',$('#edgeFrame').attr('src'));
        }
    });

    $('.btnHome').on({
        "click": function(){
            $('.ieMode').addClass('disabled').removeClass('active');
            $('#edgeFrame').attr('src', 'https://www.bing.com/');
            if(!$('btnPrev').hasClass('disabled')){
                $('.btnPrev').addClass('disabled');
            }
            $('#edgeInput').val('');
        }
    });

    $('#edgeFrame').bind('load', function(){
        $('#frameLoading').remove();
        console.log('로딩완료')
    });
})