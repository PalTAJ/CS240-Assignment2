d3.json("mydata.json",function(data){
	var canvas = d3.select("body").append("svg")
		.attr("width",600)
		.attr("height",800)
		.attr("style", "outline: thin solid black;");
	canvas.selectAll("rect")
		.data(data)
		.enter()
			.append("rect")
			.attr("width",function(d){return d.age*7;})
			.attr("height",28)
			.attr("y",function(d,i){return i*30-(-140);})
			.attr("x",function(d,i){return 2.9*88})
			.attr("fill","blue");
			
	canvas.selectAll("text")
		.data(data)
		.enter()
			.append("text")
			.attr("fill","gold")
			.attr("y",function(d,i){return i*30+24-(-10);})
			.attr("x",function(d,i){return 3*88})
			.text(function(d,i){return "student "+(i+1)+": "+d.age})
			
			
			
	})
