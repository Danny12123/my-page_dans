window.addEventListener('scroll', ()=>{
    let features = document.querySelector('.anim'); //this is the container element that will be animated
    let positionOfElement = features.getBoundingClientRect().top; //this is the position of the element features
    let windowPosition = window.innerHeight; //this is the position of the window
        console.log("1st position of element" + positionOfElement);
        console.log("1st position of window" + windowPosition);
    //now check if the position of the element and the window
    if (positionOfElement< windowPosition){
        features.classList.add('active')
        console.log("2st position of element" + positionOfElement);
        console.log("2st position of window" + windowPosition);


    }else {
        features.classList.remove('active');
        console.log("3st position of element" + positionOfElement);
        console.log("3st position of window" + windowPosition);
    }


});



//quiz

//Array of objects
const quiz = [
  {
    q: '____ is the act of arranging sounds in time though the elements of melody, harmony, rhythm, and timbre.',
    options: ['Guitar', 'Music', 'Nut', 'Neck'],
    answer: 1
  },
  {
    q: 'On a standard guitar, there are _________ which include the tuning posts to hold each string in place and tuning pegs that turn to adjust the tuning.____ is the act of arranging sounds in time though the elements of melody, harmony, rhythm, and timbre.',
    options: ['Guitar', 'Tuning Machine', 'string', 'Pegs'],
    answer: 1
  },
  {
    q: 'A _________ is a long, adjustable piece of metal that is mounted inside the neck and runs the length of the neck...',
    options: ['Truss Rod', 'Guitar', 'Nut', 'Neck'],
    answer: 0
  },
  {
    q: 'The _________ is the largest part of the guitar that is nearest to the string termination at the bridge.',
    options: ['Truss Rod', 'Guitar', 'Lower Bout', 'Neck'],
    answer: 2
  },
  {
    q: 'Which of this is the correct arrangment of the musical alphabet on the guitar.',
    options: ['B, C, F, E, A, G, D', 'A, B, C, D, E, F, G', 'B, D, E, G, F, A, C', 'G, F, E, D, C, B, A'],
    answer: 1
  },
  {
    q: "'Which of this sentences help's to memorize each name of the guitar string.'",
    options: ['Eevery Angry Dog Growls and Bites Eventually', 'God Blesses The God and The Elephants', "'Eddie Love's Dynamite Good Bey Eddie'", 'The Guitar Has Only Six Strings'],
    answer: 0
  },
  {
    q: '_____ are a half-steps up from a natural note.',
    options: ['Flat', 'Sharps', 'Intervals', 'Note'],
    answer: 1
  },
  {
    q: 'The shortest distance you can go on the guitar is_____',
    options: ['Flat', 'Whole step', 'Intervals', 'Half step'],
    answer: 3
  },
  {
    q: 'The distance between two note is called_____',
    options: ['Space', 'Whole step', 'Intervals', 'Gabe'],
    answer: 2
  },
  {
    q: 'Which of this Whole steps and half steps is correct in the musical alphabet.',
    options: ['BA C DE G F', 'A BC D EF G', 'G EF A BC D', 'GD E FA BC'],
    answer: 1
  }
]





const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const option = document.querySelector(".option-container");

let questonCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

// push the qusetion into availableQuestions Array
function setAvilableQuestions() {
  const totalQuestion = quiz.length;
  for (var i=0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i])
  }
  
}

function getNewQuestion() {
    //set question number
    questionNumber.innerHTML = "Question " + (questonCounter + 1) + " of " + quiz.length;

    // set question text
    //get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //get the position of "questionIndex" from the availbalequestion array;
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the "questionIndex" from the availbalequestion array; so that the question doses not repeat
    availableQuestions.splice(index1, 1);

    //set options
    //get the length of option
    const optionLen = currentQuestion.options.length;
    //push options into availbalequestion array;
    // for (var i=0; 1<optionLen; i++) {
    //     availableOptions.push(i)
    // }
    //create option in innerhtml
    // for (var i=0; i<optionLen; i++) {
    //     const option = document.createElement("div");
    //     // option.innerHTML + currentQuestion.options[i];
    //     // option.id = i;
    //     // option.className = "option";
    //     // optionContainer.appendChild(option);
    // }
    questonCounter++
}

function next() {
    if (questonCounter === quiz.length) {
        console.log("quiz over");
    }
    else {
        getNewQuestion();
    }
}


window.onload = function() {
    // first we will set all questions in availableQuestions array
    setAvilableQuestions();
    //second we will call getNewQeustion;
    getNewQuestion();
}



