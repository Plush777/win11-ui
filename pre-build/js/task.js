$(function () {
    $('.taskCenter ul li:not(.windows)').on({
        "click": function (e) {
            const $this = $(this);
            const target = e.target.dataset.value;
            /* window가 0번째 순서를 차지하기 때문에 순서를 하나 빼줌. */
            const itemIndex = $this.closest('li.fixed').index() - 1;

            let activeArr = [0,0,0,0];
            
            for (let i = 0; i < activeArr.length; i++) {
                if (i === itemIndex) {
                    activeArr[i] = 1;
                }
            }
           

            console.log(activeArr);

            function taskClick() {
                $this.toggleClass('on').siblings('li').removeClass('on');
                $this.siblings().attr('data-active', 'false');

                if ($this.hasClass('on')) {
                    $(`#${target}`).addClass('open').removeClass('save');
                    $this.attr('data-active', 'true');
                } 
            }

            taskClick();
        }
    });

    $('.taskCenter ul li:not(.windows)').each(function () {
        if($(this).hasClass('on')){
            $(this).attr('data-active', 'true');
        } else {
            $(this).attr('data-active', 'false');
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