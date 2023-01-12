$(function(){
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

    $('#edgeInput').on({
        "propertychange paste keyup": function(){
            let url = this.value;
            $(this).attr('value', url);
        },
        "keydown": function(e){
            let url = this.value;
            let edgeSearchUrl = 'https://www.bing.com/search?q=' + url;
           
            if(e.keyCode === 13){
                $('#edgeFrame').attr('src', edgeSearchUrl);
                if($(this).val() != ''){
                    $(this).val(edgeSearchUrl);
                } 
            }
        }
    });

    $('.ui-drag').draggable({
        containment: 'window',
        cancel: '.dragCancel',
        start: function(event,ui){
            const openClass = ui.helper[0].classList[7];
            const minilizeClass = ui.helper[0].classList[9];

            $(this).css({
                'transform': 'none',
                'transition': 'none'
            });

            if($(this).hasClass(openClass)){
                $(this).addClass('minilize');
                $(this).css('transition', 'all .25s cubic-bezier(.85,.14,.14,.85)');
            } 
            
            if($(this).hasClass(openClass) && $(this).hasClass(minilizeClass)){
                $(this).css({
                    'transform': 'none',
                    'transition': 'none'
                });
            }

            console.log(ui.helper);

        },
        stop: function(){
            $(this).css('transition', 'all .25s cubic-bezier(.85,.14,.14,.85)');
        }
    });

    $('.resizable').resizable({
        containment: '#app',
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

    $('.powerList ul li:nth-child(2)').on({
        'click': function(){
            startFullScreen(document.documentElement);
        }
    });

    $('.windowY').mCustomScrollbar({
        scrollbarPosition:'outside',
        scrollButtons: {enable: true},
        axis:"y",
        setTop: "0",
        advanced: {
            autoExpandHorizontalScroll: true
        }
    });

    $('.windowScrollbar.windowY .mCSB_scrollTools_vertical').on({
        'mouseenter' :function(){
            $(this).addClass('op1');
        },
        'mouseleave' :function(){
            $(this).removeClass('op1');
        }
    });

    $('.windowApp,.browser').on({
        'click': function () {
            $(this).css('z-index', 1000);

            $('.windowApp,.browser,.browser .commonFrame').not($(this).closest('.windowApp,.browser')).each(function () {
                let currentZindex = $(this).css('z-index');
                currentZindex = parseInt(currentZindex);
                currentZindex === 1000 && $(this).css('z-index', currentZindex - 10);
            });
        }
    });

    $('.tabList li').on({
        'click': function(){
            let mcsbTop = $('.mCSB_container').css('top');
            console.log(mcsbTop);

            if(mcsbTop !== 0){
               $('.mCSB_container').css('top', 0);
            }
        }
    });

    $('.btnSwitch').on({
        'click': function(){
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                $(this).siblings('.state').text('켬');
            } else {
                $(this).siblings('.state').text('끔');
            }
        }
    });

    $('.selectWrap .selectArea .btnArea').on({
        'click': function(){
            $(this).prev('.select').toggleClass('active');
        }
    });

    $('#edge,#taskEdge').attr('data-value', 'edge');
    $('#chrome,#taskChrome').attr('data-value', 'chrome');
    $('#file,#taskFile').attr('data-value', 'file');
    $('#setting,#taskSetting').attr('data-value', 'setting');
    $('#discord,#taskDiscord').attr('data-value', 'discord');
    $('#notePad,#taskNotePad').attr('data-value', 'notePad');
    $('#vsc,#taskVsc').attr('data-value', 'vsc');
});

function startFullScreen(element){		
    if(element.requestFullScreen) {			
        element.requestFullScreen();		
    } else if(element.webkitRequestFullScreen){			
        element.webkitRequestFullScreen();		
    } else if(element.mozRequestFullScreen){		
        element.mozRequestFullScreen();		
    }
}