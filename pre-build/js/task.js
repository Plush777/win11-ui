$(function () {
    $('.taskCenter ul li').on({
        "click": function () {
            if($(this).siblings('li').hasClass('on')){
                $(this).siblings('li').removeClass('on').addClass('appSave');
                return;
            }

            function taskClick() {
                $(this).addClass('on').siblings().removeClass('on');
            }
            
            taskClick();

            if($('#edge').hasClass('open')){
                $('#taskEdge').addClass('appSave');
            } else if($('#chrome').hasClass('open')){
                $('#taskChrome').addClass('appSave');
            } else if($('setting').hasClass('open')){
                $('#taskSetting').addClass('appSave');
            }
        }
    });

    $('#taskChrome').on({
        "click": function () {
            $('#chrome').toggleClass('open').removeClass('save');
            
            if($('#chrome').hasClass('open')){
                $(this).addClass('on').removeClass('appSave');
            } else {
                $(this).removeClass('on').addClass('appSave');
            }
        }
    });

    $('#taskEdge').on({
        "click": function () {
            $('#edge').toggleClass('open').removeClass('save');

            if($('#edge').hasClass('open')){
                $(this).addClass('on').removeClass('appSave');
            } else {
                $(this).removeClass('on').addClass('appSave');
            }
        }
    });

    $(document).on('click', '#taskDiscord', function (){
        $('#discord').toggleClass('open').removeClass('save');

        if($('#discord').hasClass('open')){
            $('#taskDiscord').addClass('on').removeClass('appSave');
        } else {
            $('#taskDiscord').removeClass('on').addClass('appSave');
        }
    });

    $(document).on('click', '#taskVsc', function (){
        $('#vsc').toggleClass('open').removeClass('save');

        if($('#vsc').hasClass('open')){
            $('#taskVsc').addClass('on').removeClass('appSave');
        } else {
            $('#taskVsc').removeClass('on').addClass('appSave');
        }
    });

    $(document).on('click', '#taskNotePad', function (){
        $('#notePad').toggleClass('open').removeClass('save');

        if($('#notePad').hasClass('open')){
            $('#taskNotePad').addClass('on').removeClass('appSave');
        } else {
            $('#taskNotePad').removeClass('on').addClass('appSave');
        }
    });

    $(document).on('click', '#taskSetting', function (){
        $('#setting').toggleClass('open').removeClass('save');

        if($('#setting').hasClass('open')){
            $('#taskSetting').addClass('on').removeClass('appSave');
        } else {
            $('#taskSetting').removeClass('on').addClass('appSave');
        }
    });

    $('.windows').on({
        "click": function () {
            $('.activeMenu').toggleClass('active');
            $(this).toggleClass('on');
        }
    });
})