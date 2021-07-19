$("ul li ul").hide();

//get the next ul
$(".menulink").click( function(){
	var thisMenu = $(this).next("ul");

	$("ul li ul").not(thisMenu).hide();

	// if (thisMenu.is(":visible")){
	// 	thisMenu.hide();
	// }
	// else{
	// 	thisMenu.show();
	// }      the line below is a good alternative

	thisMenu.toggle();
});