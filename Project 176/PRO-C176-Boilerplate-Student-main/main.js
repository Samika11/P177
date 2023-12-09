var gameOver=false  
$(".clickable").click(function () {
    var correctGuess=false; 
    //Get the id of the button clicked 
    let id = $(this).attr("id"); 
    //Get the life 
    var life = parseInt($("#life").text()) 
    //Loop through all the letters 
    for (var i = 0; i < randomlord.word.length; i++) { 
        //Check if the character matches the id of the button 
        if (randolford.word.charAt(1).toLowerCase()==id) { 
            //Check if the life is still left and blank is is empty/already filled 
            if (life > 0 && ($(".fill_blanks").eq(1).html() == "_" || $(".fill blanks").eq(1).html()== id)) 
            
                $(".fill_blanks").eq(1).html(id); 
                correctGuess = true; 
                
                //Check if the word guess is complete 
                if ($("blanks").text() === randomWord.word.toLowerCase()) { 
                    $("#result").text("You Win!")
                    correctGuess= true; 
                    gameOver=true
                }
            }
        }
    })