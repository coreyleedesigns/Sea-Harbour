
// Common JS for all pages:

	$("#main_menu").height($(window).height());

    $("#main_nav").click(function(){
		var $this = $(this);
		
        $("#main_menu").fadeIn();
		
		if($this.hasClass("is_opened")){
			$("#main_menu a.menu_close").trigger( "click" );
			$this.removeClass("is_opened");
			$("html").css("overflow","auto");
		} else{
			$this.addClass("is_opened");
			$("html").css("overflow","hidden");
		}
    });
	
    $("a.menu_close").click(function(){
		
		//if($(this).parent().parent().attr("id") == "main_menu"){
		if($(this).parent().attr("id") == "main_menu"){	
			$("#main_nav").removeClass("is_opened");
			//$(this).parent().parent("#main_menu").fadeOut();
			$(this).parent("#main_menu").fadeOut();
			$("html").css("overflow","auto");
		} else {
			$(this).parent().fadeOut();
		}
    }); 
	
	$( window ).resize(function() {
		$("#main_menu").height($(window).height());
	}); //end resize
	
	
