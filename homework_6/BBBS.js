$(function(){

   $(".Qty-options").click(function(){
   		
   		//$(this).css("border","3px solid #2C2726");
   		$(this).toggleClass("Border");
   		
   	});

   
	

 	 // get the savedAnimal in local storage if one exists
  	/**var Qty = JSON.parse(localStorage.getItem("Qty"));**/

  	$("#Qty-1").click(function(){
  		localStorage.setItem("Qty", JSON.stringify("1"));
  		$(".item-picture-detail").attr("src", "i/01-Original.jpg");
  		$(".item-price").text("$2.99");
  	});

  	$("#Qty-3").click(function(){
  		localStorage.setItem("Qty", JSON.stringify("3"));
  		$(".item-picture-detail").attr("src", "i/Background-image.jpg");
  		$(".item-price").text("$8.97");
  	});
	
   
 
});