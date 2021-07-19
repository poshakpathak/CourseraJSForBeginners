const submenu = document.querySelectorAll("ul li ul");

function hideSubMenus(){
	for (let i = 0; i < submenu.length; i++){

	submenu[i].className = "hide-menu";
}


}

hideSubMenus();

const menuLinks = document.querySelectorAll(".menulink");

for (let i = 0; i < menuLinks.length; i++){

	menuLinks[i].addEventListener("click", function(event){
		event.preventDefault();

		const thisMenu = this.parentNode.querySelector("ul");

		
		console.log(thisMenu.innerHTML);

		if (thisMenu.classList.contains("hide-menu")){

			hideSubMenus();

			thisMenu.className = "show-menu";
		}
		else{
			thisMenu.className = "hide-menu";
		}

	})

}