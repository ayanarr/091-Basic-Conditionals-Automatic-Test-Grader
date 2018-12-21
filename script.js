// English Section: Let's do this together!
$("#englishButton").click(function(){
    var englishInput = $("#english").val();
    
    //Write an if/else conditional statement to check if the englishInput is correct (the answer should be Mon.). Use the following 2 lines of jQuery to correspond with the right answer or any wrong answer.
        $("#englishDiv").append("Correct!");
        $("#englishDiv").append("Wrong! Try again.");  
        if(  englishInput ==="Mon" ){
            alert("Correct");
    }else{alert("Wrong");
        
        
   } 

});


// Math section
$("#mathButton").click(function(){
    var mathInput = $("#math").val();

    //Write an if/else conditional statement to check if the mathInput is correct (the answer should be 30). Use the following 2 lines of jQuery to correspond with the right answer or any wrong answer.
        $("#mathDiv").append("Correct!");
        $("#mathDiv").append("Wrong! Try again.");
         if(  mathInput ==="30" ){
            alert("Correct");
    }else{alert("Wrong");
    }        
        
});

// Social Studies section
$("#ssButton").click(function(){
    var ssInput = $("#socialStudies").val();
$("ssDiv").append("Correct");
$("ssDiv").append("Wrong! Try again.");
 if( ssInput  ==="Albany" ){
            alert("Correct");
    }else{alert("Wrong");
    }        

});

// Science section
$("#scienceButton").click(function(){
    var scienceInput = $("#science").val();
    $("scienceDiv").append("Correct");
$("scienceDiv").append("Wrong! Try again.");
 if( scienceInput  ==="solid" ){
            alert("Correct");
    }else{alert("Wrong");
    }        
});    
$("#spanishButton").click(function(){
    var spanishInput = $("#spanish").val();
    $("spanishDiv").append("Correct");
$("spanishDiv").append("Wrong! Try again.");
 if( spanishInput  ==="hola" ){
            alert("Correct");
    }else{alert("Wrong");
    }        
});
$("gradebutton");
var number = 5;
if(number ===5) {
       alert("A");
} else {alert(">100");
}

 
