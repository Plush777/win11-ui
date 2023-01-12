$(function () {
    $('.tabClose,.btnClose').on({
        "click": function () {
            $(this).closest('.browser,.windowApp').removeClass('open').addClass('close');
            $('.taskCenter ul li').removeClass('on appSave vib');
            $('.taskCenter ul li.new').removeClass('transY0');
            $('.taskCenter ul li.new').remove();
            
            setTimeout(() => {
                $(this).closest('.browser,.windowApp').removeClass('minilize');
            }, 1000);
        }
    });

    $.fn.hasAttr = function(name) {  
        return this.attr(name) !== undefined;
     };

    $('.btnReduction').on({
        "click": function () {
            const browser = $(this).closest('.browser');
            const windowApp = $(this).parents('.windowApp');

            browser.addClass('save').removeClass('open');
            windowApp.addClass('save').removeClass('open');

            if(browser.hasAttr('data-value','edge')){
                $('#taskEdge').removeClass('on').addClass('appSave');
            } 
            
            if(browser.hasAttr('data-value','chrome')){
                $('#taskChrome').removeClass('on').addClass('appSave');
            } 
            
            if(browser.hasAttr('data-value','discord')){
                $('#taskDiscord').removeClass('on').addClass('appSave');
            } 
            
            if(browser.hasAttr('data-value','vsc')){
                $('#taskVsc').removeClass('on').addClass('appSave');
            } 
            
            if(windowApp.hasAttr('data-value','notePad')){
                $('#taskNotePad').removeClass('on').addClass('appSave');
            } 
            
            if(windowApp.hasAttr('data-value','setting')){
                $('#taskSetting').removeClass('on').addClass('appSave');
            }
        }
    });

    $('.browserTabList li').on({
        "mouseup": function (e) {
            if (e.which == 2) {
                $('.browser').removeClass('open').addClass('close');
                $('.taskCenter ul li').removeClass('on appSave vib');
            }
        }
    });

    $('.btnExp').on({
        "click": function () {
            $(this).closest('.browser,.windowApp').toggleClass('minilize');
            if($(this).closest('.windowApp.setting')){
                $(this).closest('.topArea').next('.contArea').toggleClass('minilizeType');
            } else {
                $(this).closest('.topArea').next('.contArea').removeClass('minilizeType');
            }
        }
    });

    $('.bookMarkList ul li').on({
        "click": function () {
            if ($(this).hasClass('velog')) {
                $('#chromeFrame,#edgeFrame').attr('src', 'https://velog.io/@sky');
            } else if ($(this).hasClass('github')) {
                $('#chromeFrame,#edgeFrame').attr('src', 'https://github.com/Plush777/win11-ui');
            } else if ($(this).hasClass('mySite01')) {
                $('#chromeFrame,#edgeFrame').attr('src', 'https://plush777.github.io/component-css/');
            }
        }
    });

    $('.btnPrev').on({
        "click": function () {
            $('.ieMode').addClass('disabled').removeClass('active');
            if (!$(this).hasClass('disabled')) {
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
        "keydown": function (e) {
            if (e.keyCode === 13) {
                if ($('#edgeInput').attr('src', 'https://www.bing.com/search?q=') + edgeFrameValue) {
                    $('.btnPrev').removeClass('disabled');
                    $('.ieMode').addClass('active').removeClass('disabled');
                }
            }
        }
    });

    if (edgeFrameSrc == 'https://www.bing.com/') {
        $('.btnPrev,.btnNext').addClass('disabled');
    }

    $('.btnRefresh').on({
        "click": function () {
            $('#edgeFrame').attr('src', $('#edgeFrame').attr('src'));
        }
    });

    $('.btnHome').on({
        "click": function () {
            $('.ieMode').addClass('disabled').removeClass('active');
            $('#edgeFrame').attr('src', 'https://www.bing.com/');
            if (!$('btnPrev').hasClass('disabled')) {
                $('.btnPrev').addClass('disabled');
            }
            $('#edgeInput').val('');
        }
    });

    $('#edgeFrame').bind('load', function () {
        $('#frameLoading').remove();
        console.log('로딩완료')
    });
})