var convertType = "miles";
var heading = document.querySelector("h1");
var intro = document.querySelector("p");
var answerDiv = document.getElementById("answer");
var form = document.getElementById("convert");

document.addEventListener("keydown", function(event){

	var key = event.code;

	if (key === "KeyK"){
		convertType = "kilometers";

		//change the heading
		heading.innerHTML = "Kilometers to Miles Converter";
		//change the intro paragraph
		intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles."
		// change the value of convertType variable

	}
	else if (key === "KeyM"){
		//change the heading
		heading.innerHTML = "miles to kilometers converter";
		//change the intro paragraph
		intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
		// change the value of convertType variable

	}

});

form.addEventListener("submit", function(event){

	event.preventDefault();
	var distance = parseFloat(document.getElementById("distance").value);

	if (distance){
		//Convert M to K 1.683944
		//Convert K to M 0.621371
		if (convertType === "miles"){

			var converted = (distance * 1.683944).toFixed(3);
			answer.innerHTML = `${distance} mile converts to ${converted} kilometers`

		} else {

			var converted = (distance * 0.621371).toFixed(3);
			answer.innerHTML = `${distance} kilometers converts to ${converted} miles`

		}

	} else {
		answer.innerHTML = "<h2> Please enter a valid number </h2>"
	}


});