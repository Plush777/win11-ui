$(function(){
    $('.appList li').on({
        "click": function(){
            $(this).toggleClass('hover').siblings().removeClass('hover');
        }
    });

    $('.appList li').on({
        "dblclick": function(){
            $('.browser').removeClass('save');
        }
    });
    
    $('#alChrome').on({
        "dblclick": function(){
            $('#chrome').toggleClass('open').removeClass('close');
            $('#chrome').hasClass('open') && $('#taskChrome').addClass('on');
        }
    });

    $('#alEdge').on({
        "dblclick": function(){
            $('#edge').toggleClass('open').removeClass('close');
            $('#edge').hasClass('open') && $('#taskEdge').addClass('on');
        }
    });

    $('#alVsc').on({
        "dblclick": function(){
            $('#vsc').toggleClass('open').removeClass('close');

            if($('#vsc').hasClass('open')){
                $('.taskCenter ul li:last-child').after(`<li id="taskVsc" class="on new"><i class="icon"></i></li>`);
                $('#taskVsc').addClass('transY0 fadeIn');
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
});