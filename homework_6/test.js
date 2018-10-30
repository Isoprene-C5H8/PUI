$(document).ready(function() {

	var itemName = $("item-name").text();
	//有一个初始值，
	var quantity = null;
	var price = parseFloat($(".price").text());
	var totalPrice = null;
	var glazing = "Sugar Milk";
	var selections = [quantity, price, totalPrice, glazing];

	function changeQty(){
		//问题在于第二次点的时候无法写入quantity,把var price挪出去就解决了
  		//之前quantity一直无法写入，把$(this).val();换成text就行了
  		quantity = parseInt($(this).text());
  		
  		//localStorage.setItem("savedQty", JSON.stringify("1"));
  		//$(".item-picture-detail").attr("src", "i/01-Original.jpg");
  		

  		totalPrice = price * quantity;
  		//alert(price+" "+quantity+" "+totalPrice);
  		//alert 对于debug很有用
  		//$(".item-price").text("$"+totalPrice);
  		//border不一样宽导致换行
  		$(this).addClass("Qty-options-border");
  		$(this).siblings().removeClass("Qty-options-border");
  		$(this).siblings().addClass("Qty-options");
  		selections = [quantity, price, totalPrice, glazing];
  		localStorage.setItem("itemSelections", JSON.stringify(selections));
  		// var test = JSON.parse(localStorage.getItem("itemSelections"));
  		//alert("qty"+test[0]+" price"+test[1]+" total"+test[2]+" gla"+test[3]);
  		console.log(JSON.parse(localStorage.getItem("itemSelections")));
	};

	$(".Qty-options").click(function(){
		changeQty();
	});

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
  		//alert(glazing);
  		selections = [quantity, price, totalPrice, glazing];
  		//alert("qty"+test[0]+" price"+test[1]+" total"+test[2]+" gla"+test[3]);
  		console.log(selections);
  	});

  	
  	localStorage.setItem("itemSelections", JSON.stringify("selections"));
  	var test = JSON.parse(localStorage.getItem("itemSelections"));
  	// console.log(test);
  	// alert("qty"+test[0]+" price"+test[1]+" total"+test[2]+" gla"+test[3]);

});