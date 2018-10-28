$(document).ready(function(){
	
	var pixelCount = 0;
	var currentColor = {
		r : 255,
		g : 0,
		b : 0
	}
	
	$(".btn-submit-barcode").click(function(){
		
		$(".scanner_input").val("");
		
		pixelCount = pixelCount + 12;
		
		$(".pixel-p").text(pixelCount + "px");
		
	})
	
	$(".col-xl-3").click(function(){
		if ((!($(this).hasClass("my-pixel"))) && (pixelCount > 0)){
			
			if ($(this).hasClass("filled-px-b")){
				$(this).removeClass("filled-px-b");
			}
			if ($(this).hasClass("filled-px")){
				$(this).removeClass("filled-px");
			}
			
			$(this).addClass("my-pixel");
			
			console.log("CurrentColor: ", currentColor);
			$(this).css("background-color", "rgba(" + currentColor.r + "," + currentColor.g + "," + currentColor.b + ", 0.4)");
			
			pixelCount = pixelCount - 1;
			
			$(".pixel-p").text(pixelCount + "px");
		
			// $(this).addClass("filled-px");
		}
	})
	
	$(".color-selector").change(function(){
		console.log($(this).val());
		$(".pixel-block").css("background-color", $(this).val());
		
		currentColor = hexToRgb($(this).val());
	})
	
	$(".pixel-block").css("background-color", $(".color-selector").val());

})

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}