$(document).ready(function() {

	var quantity = null;
	var price = $(".price").text();
	var totalPrice = null;
	var glazing = null;

	$(".Qty-options").click(function(){
  		//问题在于第二次点的时候无法写入quantity,把var price挪出去就解决了
  		//之前quantity一直无法写入，把$(this).val();换成text就行了
  		quantity = $(this).text();
  		
  		//localStorage.setItem("savedQty", JSON.stringify("1"));
  		$(".item-picture-detail").attr("src", "i/01-Original.jpg");
  		

  		totalPrice = price * quantity;
  		//alert(price+" "+quantity+" "+totalPrice);
  		//alert 对于debug很有用
  		$(".item-price").text("$"+totalPrice);
  		
  		$(this).addClass("Border");
  		$(this).siblings().removeClass("Border");
  	});

  	$(".Glazing-options").click(function(){
  		//
  		glazing = $(this).text();
  		//这里的Border css改变突然不能用了？很奇怪
  		//把css代码挪到后面就突然可以了
		$(this).addClass("Border");
		//每次用css修改器都会提示少）， 不懂
		//$(this).css("border":"6px");
  		$(this).siblings().removeClass("Border");
  		//alert(glazing);
  	});

  	var selections = [quantity, price, totalPrice, glazing];
  	localStorage.setItem("item-selections", JSON.stringify(selections));

});