$(function(){
    Date.prototype.amPm = function() {
        let getAmPm = this.getHours() < 12 ? '오전' : '오후';
        return getAmPm ;
    }

    let today = new Date();
    let amPm = today.amPm();
    let getHours = today.getHours();
    let getMinutes = today.getMinutes(); 
    let getYear = today.getFullYear();
    let getMonth = today.getMonth() + 1;
    let getDate = today.getDate();
    getHours = getHours % 12;
    getHours = getHours ? getHours : 12;
    let getYmd = getYear+"-"+(("00"+getMonth.toString()).slice(-2))+"-"+(("00"+getDate.toString()).slice(-2));

    document.getElementById('ampm').innerHTML = amPm;
    document.getElementById('time').innerHTML = getHours + ':' + getMinutes.toString().padStart(2, '0');
    document.getElementById('date').innerHTML = getYmd;

    $('.windows').on({
        "click": function(){
            $('.activeMenu').toggleClass('active');
            $(this).toggleClass('on');
        }
    });

    $(document).on({
        "click": function (e) {
            if($(e.target).closest('.activeMenu').length === 0 && $(e.target).closest('.windows').length === 0){
                $('.activeMenu').removeClass('active');
                $('.windows').removeClass('on');
            }
        }
    });

    $('.appList li').on({
        "click": function(e){
            $(this).toggleClass('hover').siblings().removeClass('hover');
           
        }
    });

    $(document).on({
        "click": function(e){
            if($(e.target).closest('.appList li').length === 0){
                $('.appList li').removeClass('hover');
            }
        }
    });

    $('#urlInput').on({
        "propertychange paste keyup": function(){
            let url = this.value;
            $(this).attr('value', url);
        },
        "keydown": function(e){
            if(e.keyCode === 13){
                let url = this.value;
                let searchUrl = 'https://www.google.com/?igu=1/search?q=' + url;
                $('#chromeFrame').attr('src', searchUrl);
            }
        }
    });

    $('.appList li.chrome').on({
        "dblclick": function(){
            $('.browser.chrome').toggleClass('open').removeClass('close');
            $('.browser').removeClass('save');
            if($('.browser.chrome').hasClass('open')){
                $('.taskCenter ul li.chrome').addClass('on');
            }
        }
    });

    $('.appList li.vsc').on({
        "dblclick": function(){
            $('.browser.vsc').toggleClass('open').removeClass('close');
            $('.browser').removeClass('save');
            if($('.browser.vsc').hasClass('open')){
                $('.taskCenter ul li.vsc').addClass('on');
            }
        }
    })

    $('.taskCenter ul li.chrome').on({
        "click": function(){
            $('.browser.chrome').toggleClass('open').removeClass('save');
            if($('.browser').hasClass('open')){
                $('.taskCenter ul li.chrome').addClass('on').removeClass('appSave');
            } else {
                $('.taskCenter ul li.chrome').removeClass('on').addClass('appSave');
            }
        }
    });

    $('.tabClose,.btnBrowserClose').on({
        "click": function(){
            $('.browser').removeClass('open').addClass('close');
            $('.taskCenter ul li.chrome').removeClass('on appSave');
        }
    });

    $('.btnReduction').on({
        "click": function(){
            $('.browser').addClass('save').removeClass('open');
            $('.taskCenter ul li.chrome').removeClass('on').addClass('appSave');
        }
    })

    $('.browserTabList li').on({
        "mouseup": function(e){
            if(e.which == 2){
                $('.browser').removeClass('open').addClass('close');
            }
        }
    });

    $('.bookMarkList ul li.velog').on({
        "click": function(){
            $('#chromeFrame').attr('src', 'https://velog.io/@sky');
        }
    });

    $('.bookMarkList ul li.github').on({
        "click": function(){
            $('#chromeFrame').attr('src', 'https://github.com/Plush777/win11-ui');
        }
    });

    $('.bookMarkList ul li.mySite01').on({
        "click": function(){
            $('#chromeFrame').attr('src', 'https://plush777.github.io/component-css/');
        }
    });

    $('.btnExp').on({
        "click": function(){
            $('.browser').toggleClass('minilize').css({'top': '0', 'left': '0'});
        }
    });

    $('.ui-drag').draggable({
        containment: 'window',
        cancel: '.dragCancel',
        start: function(){
            $(this).css('transition', 'none');
        },
        stop: function(){
            $(this).css('transition', 'all .25s cubic-bezier(.85,.14,.14,.85)');
        }
    });

    $('.resizable').resizable({
        containment: '#App',
        handles: 'n, e, s, w, ne, se, sw, nw',
        alsoResize: '#chromeFrame',
        minWidth: 500,
        start: function(){
            $(this).css('transition', 'none');
            $('.commonFrame').css('transition', 'none');
            $('.ui-resizable-e').css('width','50px');
        },
        stop: function(){
            $(this).css('transition', 'all .25s cubic-bezier(.85,.14,.14,.85)');
            $('.commonFrame').css('transition', 'all .25s cubic-bezier(.85,.14,.14,.85)');
            $('.ui-resizable-e').css('width','7px');
        }
    });
});