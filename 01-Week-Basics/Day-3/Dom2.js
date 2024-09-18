// var button = document.querySelector("button");
/*var isRed = false;
button.addEventListener("click", function () {
    // document.body.style.backgroundColor = isRed ? "white" : "red";;

    if(isRed){
        document.body.style.backgroundColor = "white";
    }
    else{
        document.body.style.backgroundColor = "red";
    }
    isRed = !isRed; //Toggles the variable
})*/




/*
button.addEventListener("click", function () {  

  document.body.classList.toggle("red");  
})*/

//MouseEvent
// var firstElement = document.querySelector("li");
// firstElement.addEventListener("mouseover", function () {
// this.style.color = "blue";


// })
//  firstElement.addEventListener("mouseout", function () {
// this.style.color = "black";
//  })

var elements = document.querySelectorAll("li");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function () {
        this.style.color = "blue";
    });
    elements[i].addEventListener("mouseout", function () {
        this.classList.toggle("myClass")
    });
}
