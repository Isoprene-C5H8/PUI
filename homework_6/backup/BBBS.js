$(document).ready(function() {

   /**$(".Qty-options").click(function(){
   		
   		//$(this).css("border","3px solid #2C2726");
   		$(this).toggleClass("Border");
   		
   	});**/
   	function setQty (){
   		qty = $(this).val();
   	}
   
	// get the savedAnimal in local storage if one exists
  var qty = JSON.parse(localStorage.getItem("savedQty"));

  //use a boolean to keep track of whether you have saved an animal
  var hasSavedQty = false;

   	if (qty === null) 
  {
    //if there is no saved animal, we generate one
    qty = "1";
  } 
  else 
  {
    //if there is a saved animal, the button should display Clear Animal text
    $(".Qty-options").addClass("Border");

    //change the boolean to note that this animal has been saved
    hasSavedQty = true;
  }
 	 // get the savedAnimal in local storage if one exists
  	/**var Qty = JSON.parse(localStorage.getItem("Qty"));**/
  	
  	$("#Qty-1").click(function(){
  		qty = "1";
  		localStorage.setItem("savedQty", JSON.stringify("1"));
  		$(".item-picture-detail").attr("src", "i/01-Original.jpg");
  		//$(".item-price").text("$2.99");
  		$(this).addClass("Border");
  		$(this).siblings().removeClass("Border");
  	});

  	$("#Qty-3").click(function(){
  		qty = "3";
  		localStorage.setItem("savedQty", JSON.stringify("3"));
  		$(".item-picture-detail").attr("src", "i/Background-image.jpg");
  		//$(".item-price").text("$8.97");
  		$(this).addClass("Border");
  		$(this).siblings().removeClass("Border");
  	});


	

    /**var QtySelection = JSON.parse(localStorage.getItem("Qty"));
    var GlazingSelection = JSON.parse(localStorage.getItem("Glazing"));
    var Selections = [QtySelection, GlazingSelection];
 	localStorage.setItem("Details-to-cart", JSON.stringify(Selections));

 	function Original(Qty, Glazing){
 		this.Qty = null;
 		this.Glazing = null;
 	}
 	var Selections = JSON.parse(localStorage.getItem("savedSelections"));
 	//use a boolean to keep track of whether you have saved an animal
  	var hasSavedSelections = false;

  	  //check if the saved animal exists in local storage
	  if (Selections === null) 
	  {
	    
	  } 
	  else 
	  {
	    $(".item-picture-detail").attr("src", "i/01-Original.jpg");
  		$(".item-price").text("$2.99");
  		$(this).addClass("Border");
  		$(this).siblings().removeClass("Border");
	    //change the boolean to note that this animal has been saved
	    hasSavedSelections = true;
	  }


	var qty = null

	function changeQty
	function addItemCart(){
	 	var qty = 
	}**/



});