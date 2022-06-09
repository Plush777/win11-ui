$(function(){
    $('.fixedAppList ul li').on({
        "click": function(){

            switch ($(this).attr('class')) {
                case 'discord':
                    $('.browser.discord').toggleClass('open').removeClass('close');
                    
                    if($(this).hasClass('discord')){
                        if($('.browser').hasClass('open')){
                            $('.taskCenter ul li.discord').addClass('on').removeClass('appSave');
                            $('.taskCenter ul li:last-child').after(`<li class="discord on new"><i class="icon"></i></li>`)
                        } else {
                            $('.taskCenter ul li.discord').removeClass('on').addClass('appSave');
                        }
                    }

                    if($('.browser.discord').hasClass('open')){
                        $('.taskCenter ul li.discord').addClass('on vib transY0').removeClass('hid none');
                    }

                    break;

                case 'notePad':
                    $('.windowApp.notePad').toggleClass('open').removeClass('close');
                    
                    if($(this).hasClass('notePad')){
                        if($('.windowApp').hasClass('open')){
                            $('.taskCenter ul li.notePad').addClass('on').removeClass('appSave');
                            $('.taskCenter ul li:last-child').after(`<li class="notePad on new"><i class="icon"></i></li>`)
                        } else {
                            $('.taskCenter ul li.notePad').removeClass('on').addClass('appSave');
                        }
                    }

                    if($('.windowApp.notePad').hasClass('open')){
                        $('.taskCenter ul li.notePad').addClass('on vib transY0').removeClass('hid none');
                    }
                    
                    break;
            }

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