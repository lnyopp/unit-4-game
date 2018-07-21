//global random number variable. 
var number = Math.floor(Math.random() * 100) + 1; 
var wins = 0;
var losses = 0 ; 
// this array is for totaling random gem guesses. 
var gemTotal = [];



$(document).ready(function() {
    
    // computer generated random number 
    $("#computer-choice").text(number);
   
    //random number generation for gems

    $("#random-click-1").on("click", function gemOne() {

      // ... we generate a random number
      var random = Math.floor(Math.random() * 10) + 1;
        
    //unsure what method to use here...

    //this prints directly into the "random-number-1" div.
    // $("#random-number-1").text(random);
    // });
    

    //created 4 divs (1 for each cystal)
    // created 4 additional divs to associate random number with each crystal
    
    // unsure how to get this number to be fixed, 

    
});