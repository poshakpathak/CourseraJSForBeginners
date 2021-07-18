document.getElementById("convert").addEventListener("submit", function(event){
event.preventDefault();
var distance = document.getElementById("distance").value;
distance = parseFloat(distance)
var answer = document.getElementById("answer");
//see if distance is a number
if (distance){
	var conversion = (distance * 1.60344). toFixed(3);
	
	answer.innerHTML = `<h2> ${distance} miles converts to ${conversion} kilometers </h2>`;
} 
else{
	answer.innerHTML = '<h2> Please enter a number! </h2>'
}
});