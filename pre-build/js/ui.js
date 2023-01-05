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

    $('.powerList ul li:nth-child(2)').on({
        'click': function(){
            startFullScreen(document.documentElement);
        }
    });

    $('.windowY').mCustomScrollbar({
        scrollbarPosition:'outside',
        axis:"y",
        setTop: "0",
        advanced: {
            autoExpandHorizontalScroll: true
        }
    });
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