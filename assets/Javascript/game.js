
$(document).ready(function() {
    
  //global random number variable. 
var number = Math.floor(Math.random() * 100) + 1; 
var wins = 0;
var losses = 0 ; 

var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;

var gemTotal = 0;


function crystalNumber(crystal){
  
} Math.floor(Math.random() * 10) + 1;};

    // computer generated random number 
    $("#computer-choice").text(number);
   
    //random number generation for each crystal. 
    // all in divs in html.
    // each value must stay the same after first click. 


    $("#random-click-1").on("click", crystalNumber)
      console.log(crystalNumber);


    $("#random-click-2").on("click", crystalNumber)
    console.log(crystalNumber);

  
    $("#random-click-3").on("click", crystalNumber)
     console.log(crystalNumber);

    
  $("#random-click-4").on("click", crystalNumber)
    console.log(crystalNumber)
     

    
});