$(document).ready(function() {

	// Define all values, the default value are quantity 1 and sugar milk glazing
		// Get the item name for sacing to cart
		var itemName = $(".item-name").text();
		// The default quantity is 1
		var quantity = 1;
		// Get the item price for save to cart
		var price = parseFloat($(".price").text());
		var totalPrice = price * quantity;
		// The default glazing is sugar milk
		var glazing = "Sugar Milk";
		// Define an array to store all item informations for the cart
		var selections = [itemName, quantity, price, totalPrice, glazing];
		var list = [];

	// The default displays are 1 and sugar milk
	$("#Qty-1").addClass("Qty-options-border");
	$("#gla-sugar").addClass("Glazing-options-border");

	// Effects when change quantities
	$(".Qty-options").click(function(){
      // redefine quantity
  		quantity = ($(this).text());  		
  		// Count the total price for this item
  		totalPrice = price * quantity;
      // change the appearance of buttons
  		$(this).addClass("Qty-options-border");
  		$(this).siblings().removeClass("Qty-options-border");
  		$(this).siblings().addClass("Qty-options");
  		selections = [itemName, quantity, price, totalPrice, glazing];
	});

	// Effects when change glazings
  	$(".Glazing-options").click(function(){
      // redefine glazing
  		glazing = $(this).text();
      // change the appearance of buttons
		  $(this).addClass("Glazing-options-border");
  		$(this).siblings().removeClass("Glazing-options-border");
  		$(this).siblings().addClass("Glazing-options");
  		// Change the displayed picture based on flavors
  		$(".item-picture-detail").attr("src", "../Assets/04-GlutenFree.jpg");
  		//alert(glazing);
  		selections = [itemName, quantity, price, totalPrice, glazing];
  		//alert("qty"+test[0]+" price"+test[1]+" total"+test[2]+" gla"+test[3]);
  		// console.log(selections);
  	});

  	//If click on the ADD TO CART button
  	$(".AddToCart-button").click(function(){

  		// Save the selections into local storage
  		list.push(selections);
  		localStorage.setItem("itemSelections", JSON.stringify(list));
  		
  		// Show a confirmation of what has been saved into the shopping cart
  		var goToCart = confirm(selections[1]+" "+selections[4]+" "+selections[0]+" Cinnamon rolls have been add to the cart.\nThe total price is "+selections[3]+"\nDo you want to go to the shopping cart?");
  		if (goToCart == true){
  			window.open("../HTML/BBBS-Cart.html"); 
  		}
	});

  	// click on cart icon to go to the cart
	$("#Cart-icon").click(function(){
		window.open("../HTML/BBBS-Cart.html");
	});


});