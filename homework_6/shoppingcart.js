$(document).ready(function() {
	// The default do not show item cards
	$(".items-in-cart").hide();
		// 第一步把detail page 的数组信息传过来
			// 数组里面要加入名称
			// 点击add to cart按钮传输数据并跳转页面
	var item = JSON.parse(localStorage.getItem("itemSelections"));
	console.log(item);
	// selections = [itemName, quantity, price, totalPrice, glazing];
		// 第二步识别是否已有同名card
			// 如果没有，增加新card
			$(".items-in-cart").show();
			$(".qty").text(item[1]);
			$(".glazing").text(item[4]);
			$(".item-price").text(item[3]);
			var itemPrice = item[3];
			$(".deletebtn").click(function(){
				$(".items-in-cart").remove();
			});

			// count total price in cart

			var sum = 0;
			$(".item-price").each(function(){
			    sum += parseFloat($(this).text()); 
			});
			$(".total-price").text("$"+sum);
				// 根据数组信息显示card三项内容
				// 
			// 如果已有，更改已有card的数量和总价
		//第三步，计算total price并显示


});