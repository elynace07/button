
	var button = document.getElementById("on_off");

   button.addEventListener("click", changeText);


   function changeText(){

	button.value = (button.value == "ON") ? "OFF" : "ON";


   }



var box = document.getElementById("box");

   box.addEventListener("mouseover", function(){


     if (button.value == "ON"){

       box.style.background = "green";

     }

   });


   box.addEventListener("mouseout", function(){

     if (button.value == "ON"){

       box.style.background = "red";

     }

   });
	