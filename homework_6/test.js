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

	// The default displays are 1 and sugar milk
	$("#Qty-1").addClass("Qty-options-border");
	$("#gla-sugar").addClass("Glazing-options-border");

	// Effects when change quantities
	$(".Qty-options").click(function(){
		//问题在于第二次点的时候无法写入quantity,把var price挪出去就解决了
  		//之前quantity一直无法写入，把$(this).val();换成text就行了
  		quantity = ($(this).text());
  		
  		//localStorage.setItem("savedQty", JSON.stringify("1"));
  		
  		
  		// Count the total price for this item
  		totalPrice = price * quantity;
  		//alert(price+" "+quantity+" "+totalPrice);
  		//alert 对于debug很有用
  		//$(".item-price").text("$"+totalPrice);
  		//border不一样宽导致换行
  		$(this).addClass("Qty-options-border");
  		$(this).siblings().removeClass("Qty-options-border");
  		$(this).siblings().addClass("Qty-options");
  		selections = [itemName, quantity, price, totalPrice, glazing];
  		// localStorage.setItem("itemSelections", JSON.stringify(selections));
  		// var test = JSON.parse(localStorage.getItem("itemSelections"));
  		//alert("qty"+test[0]+" price"+test[1]+" total"+test[2]+" gla"+test[3]);
  		// console.log(test);
	});

	// Effects when change glazings
  	$(".Glazing-options").click(function(){
  		//
  		glazing = $(this).text();
  		//这里的border css改变突然不能用了？很奇怪
  		//把css代码挪到后面就突然可以了
		$(this).addClass("Glazing-options-border");
		//每次用css修改器都会提示少）， 不懂
		//$(this).css("border":"6px");
  		$(this).siblings().removeClass("Glazing-options-border");
  		$(this).siblings().addClass("Glazing-options");
  		// Change the displayed picture based on flavors
  		// 这里需要改！
  		$(".item-picture-detail").attr("src", "i/04-GlutenFree.jpg");
  		//alert(glazing);
  		selections = [itemName, quantity, price, totalPrice, glazing];
  		//alert("qty"+test[0]+" price"+test[1]+" total"+test[2]+" gla"+test[3]);
  		// console.log(selections);
  	});

  	//If click on the ADD TO CART button
  	$(".AddToCart-button").click(function(){
  		// Save the selections into local storage
  		localStorage.setItem("itemSelections", JSON.stringify(selections));
  		console.log(JSON.parse(localStorage.getItem("itemSelections")));
  		// console.log(selections);
  		// Show a confirmation of what has been saved into the shopping cart
  		var goToCart = confirm(selections[1]+" "+selections[4]+" "+selections[0]+" Cinnamon rolls have been add to the cart.\nThe total price is "+selections[3]+"\nDo you want to go to the shopping cart?");
  		if (goToCart== true){
  			window.open("BBBS-Cart.html"); 
  		}
	});


});