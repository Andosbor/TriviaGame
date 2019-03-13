//create a start button underneath the title that loads the quiz and starts the timer
//create 10 questions with 4 answers per question
    //next to each answer, have a box to check that's linked with the other 3 boxes for the question
    //if user chooses correctly, record true and place in "correct" variable, if incorrect, record false and store in "incorrect" variable
//create a button at bottom of screen called submit
    //when clicked, change content below title to a results page showing how many correct and incorrect answers.


function startQuiz(){
	document.getElementById("quiz").style.visibility = "visible";
	document.getElementById("startQuiz").style.visibility = "hidden";
	document.getElementById("submit").style.visibility = "visible";

	var timeRemaining = 60;
	setTimeout(countdown, 1000);
//timer
	$('.timer').text(timeRemaining);
	function countdown(){
    if (timeRemaining === 0) {
			document.getElementById("quiz").innerHTML = "<img src = \' assets/images/NastyPatty.png \'>" + "You took so long that your burger spoiled.";
			document.getElementById("submit").style.visibility = "hidden";
			alert("Time's Up!");
			
    } else {
      timeRemaining--;
      $('.timer').text(timeRemaining);
      setTimeout(countdown, 1000);
		}
	}
}

function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;
	var wrong = 0;
	
		if (question1 == "Wendy's"){
			correct++;
		}
		else if (question1 != "Wendy's"){
			wrong++;
		}
		if (question2 == "In-N-Out Burger"){
			correct++;
		}
		else if (question2 != "In-N-Out Burger"){
			wrong++;
		}
		if (question3 == "Big Mac"){
			correct++;
		}
		else if (question3 != "Big Mac"){
			wrong++;
		}
		if (question4 == "Burger King"){
			correct++;
		}
		else if (question4 != "Burger King"){
			wrong++;
		}
		if (question5 == "11"){
			correct++;
		}
		else if (question5 != "11"){
			wrong++;
		}
		if (question6 == "Fatburger"){
			correct++;
		}
		else if (question6 != "Fatburger"){
			wrong++;
		}
		if (question7 == "Torchy's Tacos"){
			correct++;
		}
		else if (question7 != "Torchy's Tacos"){
			wrong++;
		}
		if (question8 == "KFC"){
			correct++;
		}
		else if (question8 != "KFC"){
			wrong++;
		}
		if (question9 == "Carl's JR"){
			correct++;
		}
		else if (question9 != "Carl's JR"){
			wrong++;
		}
		if (question10 == "Arby's"){
			correct++;
		}
		else if (question10 != "Arby's"){
			wrong++;
		}
		console.log(correct);

		
		
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").style.visibility = "visible";
	
		

	//document.getElementById("message").innerHTML = messages[range];
	
	document.getElementById("number_correct").innerHTML ="All Done!" + "<br>"+ "You got " + correct + " correct.";
	document.getElementById("number_wrong").innerHTML ="You got " + wrong + " incorrect.";
	document.getElementById("submit").style.visibility = "hidden";
	document.getElementById("quiz").innerHTML = "<img src = \' assets/images/burgerStack.png \'>" + "have a stack of burgers for your effort";

}






