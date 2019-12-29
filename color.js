var squares = document.querySelectorAll(".squares");
var k = document.querySelector("#color");
var s1 = "";
var pickedcolor = "";
var text = document.querySelector(".txt");
var h1 = document.querySelector("#hh1");
var reset = document.querySelector(".abc");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");
var numofsquares = 6;



easy.addEventListener("click" , function(){
	
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numofsquares = 3;
	
	for(var i = 0;i<numofsquares;i++){
	squares[i].style.backgroundColor = gettcolor();

}
	
	for(var i = 3;i<6;i++){
		squares[i].style.display = "none";	
	}
	
	k.textContent = squares[parseInt(Math.random()*numofsquares)].style.backgroundColor;

    pickedcolor = k.textContent;

    
    for(var i = 0;i<numofsquares;i++){
	squares[i].addEventListener("click" , function(){
		if(pickedcolor === this.style.backgroundColor){
			changecolor(pickedcolor,numofsquares);
			reset.textContent = "Play Again!";
			h1.style.backgroundColor = pickedcolor;
			text.textContent = "Correct";
		}else{
			text.textContent = "Try Again";
			this.style.backgroundColor = "#232323";

		}
	});
	
}

});

hard.addEventListener("click" , function(){
   easy.classList.remove("selected");
   hard.classList.add("selected");
   numofsquares = 6;
  for(var i = 0;i<6;i++){
squares[i].style.backgroundColor = gettcolor();
squares[i].style.display = "block";
}
pickedcolor = squares[parseInt(Math.random()*6)].style.backgroundColor;

k.textContent = pickedcolor;

for(var i = 0;i<6;i++){
	squares[i].addEventListener("click" , function(){
		if(pickedcolor === this.style.backgroundColor){
			changecolor(pickedcolor ,6 );
			reset.textContent = "Play Again!";
			h1.style.backgroundColor = pickedcolor;
			text.textContent = "Correct";
		}else{
			text.textContent = "Try Again";
			this.style.backgroundColor = "#232323";

		}
	});
	
}
});




reset.addEventListener("click" , function(){
	if(numofsquares === 6){
		easy.classList.remove("selected");
    	hard.classList.add("selected");	
	}else if (numofsquares === 3){
		hard.classList.remove("selected");
    	easy.classList.add("selected");	
	}
	
	h1.style.backgroundColor = "steelblue";
   for(var i = 0;i<numofsquares;i++){
   	squares[i].style.backgroundColor = gettcolor(); 
   }

    k.textContent =  squares[parseInt(Math.random()*6)].style.backgroundColor;
    pickedcolor = k.textContent;
    text.textContent = "";

});


for(var i = 0;i<6;i++){
squares[i].style.backgroundColor = gettcolor();

}
pickedcolor = squares[parseInt(Math.random()*6)].style.backgroundColor;

k.textContent = pickedcolor;

 



for(var i = 0;i<6;i++){
	squares[i].addEventListener("click" , function(){
		if(pickedcolor === this.style.backgroundColor){
			changecolor(pickedcolor,6 );
			reset.textContent = "Play Again!";
			h1.style.backgroundColor = pickedcolor;
			text.textContent = "Correct";
		}else{
			text.textContent = "Try Again";
			this.style.backgroundColor = "#232323";

		}
	});
	
}







function gettcolor(){
var a1 = parseInt(Math.random()*256);
var a2 = parseInt(Math.random()*256);
var a3 = parseInt(Math.random()*256);
s1 = "RGB(" + a1 + ", " + a2 + ", " + a3 + ")";
return s1;
}

function changecolor(color,k){
	for(var i = 0;i<k;i++){
		squares[i].style.backgroundColor = color;
	}
}

