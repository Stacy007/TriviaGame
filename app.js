//this is the start button. timer needs to be set up here
//function start(){
    
//}
//this should check anwsers to Q's


//$("#check").on("click", "#check", function() {

  //  alert("Your new score is: ");
 
//  });

//function check(){
    $(".quizBody").on("click", ".button", function() {
   // document.getElementById("quiz").innerHTML = "hello";
    

    var question1 =document.quiz.question1.value;
    //var a1 = $("input[name='question1']:checked"). val();
    var question2 =document.quiz.question2.value;
    var question3 =document.quiz.question3.value;
    var correct = 0;

    console.log("yep");

    if (question1 === "Gryffindor") {
        correct++;
    }

    if (question2 == "Crookshanks") {
        correct++;
    }

    if (question3 == "Seeker") {
        correct++;
    }
    console.log("yep");

    var messages = ["Your a Squib", "Is that the best you could do?", "Your a fantastic wizard!"];

    var range;

    if (correct < 1 ) {
        range = 0;
    }

    if (correct > 0 && correct <3) {
        range = 1;
    }

    if (correct > 2) {
        range = 2;
    }
    console.log("yep");

    document.getElementById("allDone").style.visibility = "visible";

    document.getElementById("message").innerHTML = message[range];

    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct."; 
    console.log("yep");
});