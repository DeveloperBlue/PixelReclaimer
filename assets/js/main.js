$(document).ready(function(){
	
	var pixelCount = 0;
	
	$(".btn-submit-barcode").click(function(){
		
		$(".scanner_input").val("");
		
		pixelCount = pixelCount + 12;
		
		$(".pixel-p").text(pixelCount + "px");
		
	})
	
	$(".col-xl-3").click(function(){
		if (!($(this).hasClass("filled-px")) && (pixelCount > 0)){
			
			if ($(this).hasClass("filled-px-b")){
				$(this).removeClass("filled-px-b");
			}
			
			pixelCount = pixelCount - 1;
			
			$(".pixel-p").text(pixelCount + "px");
		
			$(this).addClass("filled-px");
		}
	})

})