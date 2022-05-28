$(function(){
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