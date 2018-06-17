$(document).ready(function(){
	/* slider */
	$('.carousel').slick({
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	})
	/* fancy */
	$('.slick-cloned').removeAttr('data-fancybox');
	$("[data-fancybox='gallery']").fancybox({
		beforeShow: function() {
			var fancy_fix = $(this).attr("src");
	        $("img[src='"+fancy_fix+"']").hide();
	    },
	    afterShow: function() {
	        var fancy_fix = $(this).attr("src");
	        $("img[src='"+fancy_fix+"']").show();
	    }
	});
	$(".slick-arrow").text("");
	function side_menu(){
		if ($("#nav-icon1").hasClass("open")){
			$("#nav-icon1, .mobile_menu, .mobile_menu__mask").removeClass('open');
			$("body").removeClass('fixed');
		}else{
			$("#nav-icon1, .mobile_menu, .mobile_menu__mask").addClass('open');
			$("body").addClass('fixed');
		}
	};
	/* anchors */
    $(".anchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    /* hamburger */
	$('#nav-icon1, .mobile_menu__mask, .mobile_menu a').click(function(){
		side_menu();
	});
	/* light menu */
	$(document).scroll(function(){ 
		var current_pos = $(document).scrollTop();
		var a_list = ".header_menu a";
		if(window.matchMedia('(max-width:650px)').matches){
			a_list = ".mobile_menu a";
		}
		$(a_list).each(function(){
			var menu_id = ($(this).attr("href"));
			var section_pos = Math.round($("section"+menu_id).position().top);
			if( current_pos ==  $(document).height() - $(window).height() ){
				$(".anchor").removeClass("active");
				$(".anchor[href='#whyWe']").addClass("active");
			}else if (current_pos >= section_pos-50){
				$(".anchor").removeClass("active");
				$(this).addClass("active");
			}else if( current_pos <= $("section.about").position().top - 100 ){
				$(".anchor").removeClass("active");
			}
		})
	})
	/* modal service */
	$(".service_block").click(function(){
		$(this).children(".service_modal").children(".service_modal_container").children(".service_modal__title").text($(this).children("p").text());
		$(this).children(".service_modal").show();
		$(".modal_mask").show();
	});
	$(".modal_mask, .close_modal").click(function(event){
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
		$(".service_modal, .modal_mask").hide();
	});
	/* scheme */
	$(document).scroll(function(){
		var current_pos = $(document).scrollTop();
		var scheme_pos = $(".scheme").position().top;
		var sc_id = 1;
		if (current_pos > scheme_pos-500){
			var timerId = setTimeout(function tick() {
				$(".scheme_block:nth-child("+sc_id+")").addClass("active");
				sc_id++;
			  timerId = setTimeout(tick, 600);
			}, 0);
		}	
	})	
});