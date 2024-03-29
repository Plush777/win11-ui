$(function(){
    $('#discordApp').on({
        "click": function(){
            $('#discord').toggleClass('open').removeClass('close');

            if($('#discord').hasClass('open')){
                $('#taskDiscord').addClass('on').removeClass('appSave');
                $('.taskCenter ul li:last-child').after(`<li id="taskDiscord" class="on new"><i class="icon"></i></li>`)
            }
        }
    });

    $('#notePadApp').on({
        "click": function(){
            $('#notePad').toggleClass('open').removeClass('close');
            
            if($('#notePad').hasClass('open')){
                $('#taskNotePad').addClass('on').removeClass('appSave');
                $('.taskCenter ul li:last-child').after(`<li id="taskNotePad" class="on new"><i class="icon"></i></li>`)
            } 
        }
    });


    $('.fixedAppList ul li').on({
        "click": function(){
            $('.windows').removeClass('on');
            $('.activeMenu').removeClass('active');
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

    $('.power').on({
        "click": function () {
            $('.powerList').toggleClass('active');
            if($('.powerList').hasClass('active')){
                $('.power').addClass('poeNone');
            } else {
                $('.power').removeClass('poeNone');
            }
        }
    });

    $(document).on({
        "click": function (e) {
            if($(e.target).closest('.powerList').length === 0 && $(e.target).closest('.power').length === 0){
                $('.powerList').removeClass('active');
                $('.power').removeClass('poeNone');
            }
        }
    });

    $('.powerList ul li:nth-child(2)').on({
        "click": function () {
            $('.endBg').addClass('active');
            setTimeout(() => {
                $('.endBg').removeClass('active').addClass('black');
                $('.appBg,.pc,.taskBar').addClass('dn');
            }, 4500);
        }
    })
});