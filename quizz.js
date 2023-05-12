var trueButton=document.getElementById('true-btn')
    var falseButton=document.getElementById('false-btn')
    var questionElement = document.getElementById('question');
    var score = 0;
    var questionId = 0;
    var questions = [
      { id:0,
        question: "Arif Alvi is the current president of Pakistan?" ,
        answer: 'true'
      },
      {id:1,
        question: "Michael Schumacher is from Spain?",
        answer: 'false'
      },
      {id:2,
        question: "KAMAZ is a car mark?",
        answer: 'true'
      },
      {id:3,
        question: "Titanic is a French movie?",
        answer: 'false'
      },
      {id:4,
        question: "Water is H2O?",
        answer: 'true'
      }
    ];
    questionElement.innerHTML = questions[0].question;
    function displayQuestion() {
        if (questionId === questions.length) {
          $("#quiz-container").hide();
          $("#result").text("You scored " + score + " out of " + questions.length);
          return;
        }
        var question = questions[questionId].question;
        $("#question").text(question);
      }
      function checkAnswer(bool) {
        if (questions[questionId]&&questions[questionId].answer === bool) {
                score++;
                questionId++
                console.log( $('#x').text(),"val")
                $('#x').text(score)
                if (questionId < questions.length) $("#question").text(questions[questionId].question)
                else console.log("hi")
                console.log("questions[questionId]",questions[questionId])
                console.log('id',questionId)
                console.log("increase score",score)
           return score
        }
        if(questions[questionId]&&questions[questionId].answer !== bool){
        console.log('id',questionId)
        questionId++
      if (questionId < questions.length) $("#question").text(questions[questionId].question)
      else console.log("hi")
        // $("#question").text(questions[questionId].question);
        console.log(" NOT increase score",score)
        console.log("questions[questionId]",questions[questionId])
                 console.log("score",score)
                 console.log("questionId",questionId)
        return score
        }
    }
trueButton.addEventListener('click',function(e){
    console.log(e.target.value)
    checkAnswer(e.target.value)
})
falseButton.addEventListener("click",function(e){
    console.log(e.target.value)
    checkAnswer(e.target.value)
})