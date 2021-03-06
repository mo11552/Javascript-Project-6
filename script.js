var myQuestions = [
  {
    question: 'What is the capital of New York?',
    answers: {
      a: 'Manhattan',
      b: 'Albany',
      c: 'Buffalo',
      d: 'Brooklyn'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Which country is the city Florence in?',
    answers: {
      a: 'France',
      b: 'Mexico',
      c: 'Russia',
      d: 'Italy'
    },
    correctAnswer: 'd'
  },
  {
    question: 'Who is the founder of the company Tesla?',
    answers: {
      a: 'Elon Musk',
      b: 'Jeff Besos',
      c: 'Bill Gates',
      d: 'Donald Trump'
    },
    correctAnswer: 'a'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function showQuestions(questions, quizContainer) {
  // we'll need a place to store the output and the answer choices
  var output = [];
  var answers;

  // for each question...
  for(var i=0; i<myQuestions.length; i++){
      
    // first reset the list of answers
    answers = [];

    // for each available answer...
    for(letter in myQuestions[i].answers){

      // ...add an html radio button
      answers.push(
        '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
          + letter + ': '
          + myQuestions[i].answers[letter]
        + '</label>'
      );
    }

    // add this question and its answers to the output
    output.push(
      '<div class="question">' + myQuestions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
    );
  }

  // finally combine our output list into one string of html and put it on the page
  quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer){
    
  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');
    
  // keep track of user's answers
  var userAnswer = '';
  var numCorrect = 0;
    
  // for each question...
  for(var i=0; i<myQuestions.length; i++){

    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
    // if answer is correct
    if(userAnswer===myQuestions[i].correctAnswer){
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
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length + ' ' + 'The answers are b, d and a. ';
}

// show questions right away
showQuestions(myQuestions, quizContainer);
  
// on submit, show results
submitButton.onclick = function(){
  showResults(myQuestions, quizContainer, resultsContainer);
}
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  showQuestions();
  showResults();
  submitButton();
}