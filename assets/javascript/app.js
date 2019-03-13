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
	document.getElementById("quiz").innerHTML = "<img src = \' assets/images/burgerStack.png \'>" + "have a stack of burgers for your effort";

}
















/*
console.log("hello")
function createQuiz(questions, quizContainer, resultsContainer,submitButton){
	function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++){
        answers = [];

        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                    + '<input type = "radio" name="question' + i +'" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '<label>'
            );
        }

        output.push(
            '<div class = "question">' + questions[i].question + '<div>'
            + '<div class ="answers">' + answers.join('')+ '</div>'
        );
    }

    quizContainer.innerHTML = output.join('');
}
function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
    showQuestions(questions,quizContainer);

    submitButton.onClick = function(){
        showResults(questions,quizContainer,resultsContainer);
    }
}
var myQuestions = [
	{
		question: "What fast food restaurant is credited with introducing the first modern-day drive-thru window?",
		answers: {
			a: 'Wendy\'s',
			b: 'Burger King',
            c: 'Sonic',
            d: 'McDonald\'s',
		},
		correctAnswer: 'a'
	},
	{
		question: "Which of the following fast food restaurants was founded first?",
		answers: {
			a: 'Burger King',
			b: 'In-N-Out Burger',
            c: 'Whataburger',
            d: 'McDonald\'s',
		},
		correctAnswer: 'b'
    },
    {
		question: "What did McDonald's restaurants first introduce in 1968?",
		answers: {
			a: 'Big Mac',
			b: 'Ronald McDonald',
            c: 'Egg McMuffin',
            d: 'Happy Meal',
		},
		correctAnswer: 'a'
    },
    {
		question: "What fast food restaurant boasts that you can \"Have it your way\"?",
		answers: {
			a: 'Papa John\'s',
			b: 'El Pollo Loco',
            c: 'Burger King',
            d: 'Subway',
		},
		correctAnswer: 'c'
    },
    {
		question: "How many herbs and spices make up the secret blend used on Colonel Harland Sanders' most famous creation: his Original KFC Recipe?",
		answers: {
			a: '13',
			b: '9',
            c: '11',
            d: '7',
		},
		correctAnswer: 'c'
    },
    {
		question: "What fast food restaurant calls itself \"The Last Great Hamburger Stand\"?",
		answers: {
			a: 'Five Guys Famous Burgers and Fries',
			b: 'Shake Shack',
            c: 'Sonic Drive-in',
            d: 'Fatburger',
		},
		correctAnswer: 'd'
    },
    {
		question: "What taco shop's menu features items such as \"The Democrat\", \"The Republican\", and \"The Independent\"?",
		answers: {
			a: 'Chronic Tacos',
			b: 'Fuzzy\'s Tacos',
            c: 'Torchy\'s Tacos',
            d: 'Velvet Tacos',
		},
		correctAnswer: 'c'
    },
    {
		question: "What was the first fast food restaurant in China?",
		answers: {
			a: 'Panda Express',
			b: 'Pizza Hut',
            c: 'McDonald\'s',
            d: 'KFC',
		},
		correctAnswer: 'd'
    },
    {
		question: "The Famous Star is the signature burger of what fast food restaurant?",
		answers: {
			a: 'Carl\'s JR',
			b: 'Shake Shack',
            c: 'Burger Street',
            d: 'Dairy Queen',
		},
		correctAnswer: 'a'
    },
    {
		question: "What was the first fast food restaurant to offer a complete \"lite\" menu?",
		answers: {
			a: 'Krispy Kreme',
			b: 'Subway',
            c: 'Arby\'s',
            d: 'Taco Bell',
		},
		correctAnswer: 'c'
    }
];

showQuestions(questions, quizContainer);


submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

createQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

*/