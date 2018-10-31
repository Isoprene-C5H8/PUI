$(document).ready(function() {
	// The default do not show item cards
	$(".items-in-cart").hide();
		// 第一步把detail page 的数组信息传过来
			// 数组里面要加入名称
			// 点击add to cart按钮传输数据并跳转页面
	// Get the list of items from local storage
	var list = [];
	list = (JSON.parse(localStorage.getItem("itemSelections")));
	// console.log(item);
	// selections = [itemName, quantity, price, totalPrice, glazing];
		// 第二步识别是否已有同名card

			// 如果没有，增加新card
			$(".empty-alert").append(".items-in-cart");

			// $(".items-in-cart").each(function(n) {
   //          	$(this).attr("id", "item" + n);
   //   		 });

			$(".items-in-cart").show();
			$(".qty").text(list[0][1]);
			$(".glazing").text(list[0][4]);
			$(".item-price").text(list[0][3]);

			// count total price in cart
			var sum = 0;
			$(".item-price").each(function(){
			    sum += parseFloat($(this).text()); 
			});
			$(".total-price").text("$"+sum);

			// Click on the delete button
			$(".deletebtn").click(function(){
				$(".items-in-cart").remove();
				// item = 0;
				// Refresh the total price when click delete button
				sum -= $(this).siblings(".item-price-block").children(".item-price").text(); 
				console.log($(this).siblings(".item-price-block").children(".item-price").text());
				console.log(sum);
				$(".total-price").text("$"+sum);
			});
			// console.log(sum);
			if(sum == 0){
				$(".empty-alert").show();
			};
				// 根据数组信息显示card三项内容
				// 
			// 如果已有，更改已有card的数量和总价
		//第三步，计算total price并显示


});