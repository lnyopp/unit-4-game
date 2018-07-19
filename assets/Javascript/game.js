//global random number variable. 
var number = Math.floor(Math.random() * 100) + 1;
var wins = 0
var losses = 0  


//Gem divs & number generation
$(document).ready(function() {

    $("#computer-choice").text(number);
    
    $("#random-click-1").on("click", function() {

      // ... we generate a random number
      var random = Math.floor(Math.random() * 10) + 1;
        
    //
    $("#random-number-1").text(random);
    });

    $("#random-click-2").on("click", function() {

        // ... we generate a random number(local)
        var random = Math.floor(Math.random() * 10) + 1;
          
      //
      $("#random-number-2").text(random);
      });
    
      $("#random-click-3").on("click", function() {

        // ... we generate a random number
        var random = Math.floor(Math.random() * 10) + 1;
          
      //
      $("#random-number-3").text(random);
      });
    
      $("#random-click-4").on("click", function() {

        // ... we generate a random number
        var random = Math.floor(Math.random() * 10) + 1;
          
      //
      $("#random-number-4").text(random);
      });
});