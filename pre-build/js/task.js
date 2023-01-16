$(function () {
    $('.taskCenter ul li:not(.windows)').on({
        "click": function (e) {
            const _this = $(this);
            const target = e.target.dataset.value;

            function taskClick() {
                _this.toggleClass('on').siblings('li').removeClass('on');

                if (_this.hasClass('on')) {
                    $(`#${target}`).addClass('open').removeClass('save');
                } 

                
            }

            taskClick();
        }
    });

    $(document).on('click', '#taskDiscord', function (){
        $('#discord').toggleClass('open').removeClass('save');
    });

    $(document).on('click', '#taskVsc', function (){
        $('#vsc').toggleClass('open').removeClass('save');
    });

    $(document).on('click', '#taskNotePad', function (){
        $('#notePad').toggleClass('open').removeClass('save');
    });

    $('.windows').on({
        "click": function () {
            $('.activeMenu').toggleClass('active');
            $(this).toggleClass('on');
        }
    });
})