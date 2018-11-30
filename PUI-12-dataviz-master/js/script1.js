//----- Part 1
d3.select("#myChart")
	.append(“svg”)
	.attr(“width”, 50)
	.attr(“height”, 50)
	.append(“circle”)
	.attr(“cx”, 25)
	.attr(“cy”, 25)
	.attr(“r”, 25)
	.attr(“fill”, “red”);
d3.select("svg")
	.append("circle")
	.attr("cx",80)
	.attr("cy",80)
	.attr("r",25)
	.attr("fill","yesllow");
