let dinosaur = document.querySelectorAll(".dragon").length;

for(let i = 0; dinosaur; i++){
	document.querySelectorAll(".dragon")[i].addEventListener("click", function(){
		let buttonInnerHTML = this.innerHTML;
		
		switch(buttonInnerHTML){
		  case "w":
		  let treks = new Audio("sounds/treks.mp3");
		  treks.play();
		  break;
		  
		  case "a":
		  let spin = new Audio("sounds/spin.mp3");
		  spin.play();
		  break;
		  
		  case "s":
		  let ptero = new Audio("sounds/ptero.mp3");
		  ptero.play();
		  break;
		  
		  case "d":
		  let dugovrati = new Audio("sounds/dugovrati.mp3");
		  dugovrati.play();
		  break;
		  
		  case "e":
		  let dragon = new Audio("sounds/dragon.mp3");
		  dragon.play();
		  break;
		  
		  default: console.log(buttonInnerHTML);
		}
	})
}

