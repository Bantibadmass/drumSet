
//EventListener

//EventListener is something which takes to inputs first is click and secound any function u want without parenthesis. It mean is that when u click on the
//button or something on which u have selected that will call that function.


function Touch(){

var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
}

var numberOfDrum= document.querySelectorAll(".drum").length;
for (var x = 0; x<=6 ; x++) {
document .querySelectorAll(".drum")[x].addEventListener("click", Touch)  // Here we have used .drum because we have

document.addEventListener("keypress",function(event){
  makeSound(event.key)
  buttonAnimation(event.key);
});

 }

function makeSound(key){

    switch (key) {
      case "w":
      var tom1=new Audio('sounds/tom-1.mp3');  // This is the way u can add sound in your website.
      tom1.play();
        break;

        case "a":
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "d":
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "j":
        var crash=new Audio('sounds/crash.mp3');
        crash.play();
        break;

        case "k":
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        case "l":
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
        break;

      default:console.log(buttonInnerHTML);

    }

}

function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+ currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
} , 100);
}
//How can we take input as a function
// Function add(num1, num2){
//   return num1+num2;
// }
// Function multiply(num1, num2){
//   return num1*num2;
// }
// Function divide(num1, num2){
//   return num1/num2;
// }
// Function subtract(num1, num2){
//   return num1-num2;
// }
//
// Function Calculator(num1,num2,operator){
//   return operator(num1,num2)                // Here we have call function under function.
// }

//
// //Constructor
// Function HouseKeeper(Experience,Name,Cleaning){  //This is a type of Constructer and this way you can create
//   this.Experience=Experience;
//   this.Name=Name;                          //Every time when we need a new HouseKeeper we can call it.
//   this.Cleaning=Cleaning;
// }
//
//
// //This is the way of calling the function.
// var HouseKeeper1=new HouseKeeper(5,Rakesh,Bathroom);   //Here we have created the first HouseKeeper
// var HouseKeeper2=new HouseKeeper(6,Ramesh,Raju);   // Here is Secound one.
