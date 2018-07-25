var random = ""
var wins = 0;
var losses = 0 ; 


    //displays var number in my computer choice div.
    $(document).ready(function(){


    for(var i = 0; i < 4; i++){
// for loop runs this function 4 times.
      var randomNumber = Math.floor(Math.random()* 12);

      var crystal = $("<div>");
          crystal.attr("class",'crystal');
          crystal.append(randomNumber);
      //creates a div 4 times for the variable crystal.
      
      $(".crystals").append(crystal);
    }
    
    
  
  });
  