const questionArray = [
    {
      question:
        'What is the most widely consumed beverage in the world after water?',
      answers: ['Coffee', 'Coke', 'Tea', 'Wine'],
      correctAnswer: 'Tea'
    },
    {
      question:
        'What is the art of reading tea leaves called?',
      answers: ['Choreography', 'Stenography', 'Calligraphy',
        'Tasseography'],
      correctAnswer: 'Tasseography'
    },
    {
      question:
        'How many tiny leaves it takes to make just one pound of tea?',
      answers: ['10', '902', '420', '2000'],
      correctAnswer: '2000'
    },
    {
      question:
        'What is the ideal steeping time for black tea?',
      answers: ['30-50 minutes', '3-5 hours', '3-5 minutes',
        '30-50 seconds'],
      correctAnswer: '3-5 minutes'
    },
    {
      question:
        'Why is tea good for you?',
      answers: ['It has caffeine', 'It has antioxidants', 'It has omega 3', 'It has cholesterol'],
      correctAnswer: 'It has antioxidants'
    },
    {
      question:
        'What kind of tea is considered to be a “superfood”?',
      answers: ['Ice tea', 'Bubble tea', 'Black tea', 'Green tea'],
      correctAnswer: 'Green tea'
    },
    {
      question:
        'How many cups of tea does United Kingdom consume per year?',
      answers: ['62 cups', '62 000 cups', '62 million cups',
        '62 billion cups'],
      correctAnswer: '62 billion cups'
    },
    {
      question:
        'What is the world’s best-selling tea brand?',
      answers: ['Teavana', 'Tazo', 'Lipton', 'Starbucks'],
      correctAnswer: 'Lipton'
    },
    {
      question:
        'Which one is the largest nation of tea drinkers per capita?',
      answers: ['United States', 'China', 'Ireland',
        'United Kingdom'],
      correctAnswer: 'Ireland'
    },
    {
      question:
        'Which country is the world’s largest producer of tea?',
      answers: ['China', 'India', 'United Kingdom', 'Kyrgyzstan'],
      correctAnswer: 'China'
    }
  ];
  
  // let questionsCount = questionsArray.length;
  let questionNum = 0;
  let score = 0;
  
  function generateQuiz() {
  
    if (questionNum < questionArray.length) {
      return `<div class="question-${questionNum}">
      <form>
      <fieldset>
      <legend><h3>${questionArray[questionNum].question}</h3></legend>
      <label class="answerOption">
      <input type="radio" value="${questionArray[questionNum]
          .answers[0]}" name="answer" required>
      <span>${questionArray[questionNum].answers[0]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${questionArray[questionNum]
          .answers[1]}" name="answer" required>
      <span>${questionArray[questionNum].answers[1]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${questionArray[questionNum]
          .answers[2]}" name="answer" required>
      <span>${questionArray[questionNum].answers[2]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${questionArray[questionNum]
          .answers[3]}" name="answer" required>
      <span>${questionArray[questionNum].answers[3]}</span>
      </label>
      <button type="submit" class="submitButton">Submit</button>
      </fieldset>
      </form>
      </div>`;
    }
    else {
      renderResults();
      relaunchQuiz();
      $('.questionNum').text(10);
    }
  }
  
  //start the quiz by clicking the start button
  function launchQuiz() {
    $('.quizStart').on('click', '.startButton', function (event) {
      $('.quizStart').remove();
      $('.quizDocument').css('display', 'block');
      $('.questionNum').text(1);
    });
  }
  
  function renderQuestion() {
    $('.quizDocument').html(generateQuiz());
  }
  
  //Display questions
  function displayQuestion() {
    questionNum++;
    $('.questionNum').text(questionNum + 1);
  }
  
  //Display scores
  function generateScore() {
    score++;
  }
  //Reqirements: Let user choose an answer and submit the answer.
  /*What happens if the answer is correct?
  What happens if the answer is wrong?
  How do you go to the next questions?
  What if you are at the last question?*/
  function userChooseAnswer() {
    $('form').on('submit', function (e) {
      e.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val();
      let correctAnswer = `${questionArray[questionNum].correctAnswer}`;
      if (answer === correctAnswer) {
        selected.parent().addClass('correct');
        ifAnswerCorrect();
      } else {
        selected.parent().addClass('wrong');
        ifAnswerIncorrect();
      }
    });
  }
  
  function rightAnswer() {
    let correctAnswer = `${questionArray[questionNum].correctAnswer}`;
    $('.quizDocument').html(
      `<div class="correctFeedback"></div><h4>Correct! Take a sip with your pinkie up!</h4><button type=button class="nextButton">Next</button></div>`
    );
  }
  
  function wrongAnswer() {
    let correctAnswer = `${questionArray[questionNum].correctAnswer}`;
    $('.quizDocument').html(
      `<div class="correctFeedback"></div><h4>Wrong! Take a sip with your pinkie down. <br>The correct answer is <span>"${correctAnswer}"</span></h4><button type=button class="nextButton">Next</button></div>`
    );
  }
  
  function ifAnswerCorrect() {
    rightAnswer();
    updateScore();
  }
  
  function ifAnswerIncorrect() {
    wrongAnswer();
  }
  
  function updateScore() {
    generateScore();
    $('.score').text(score);
  }
  
  //function when the user clicks the NEXT button
  function nextQuestion() {
    $('main').on('click', '.nextButton', function (event) {
      displayQuestion();
      renderQuestion();
      userChooseAnswer();
    });
  }
  
  
  //function to display results
  
  function renderResults() {
    if (score >= 8) {
      $('.quizDocument').html(
        `<div class="results correctFeedback">
      <h3>Good job! Your are a real tea sommelier! Let's have a tea party!</h3>
          <p>Your score is ${score} out of 10</p>
          <button class="restartButton">Restart Quiz</button></div>`
      );
    } else if (score < 8 && score >= 5) {
      $('.quizDocument').html(
        `<div class="results correctFeedback">
              <h3>You are an avarage tea sommelier. Keep exploring.</h3>
              <p>Your score is ${score} out of 10</p>
              <button class="restartButton">Restart Quiz</button></div>`
      );
    } else {
      $('.quizDocument').html(
        `<div class="results correctFeedback">
              <h3>You don't know much about tea, must be a coffee drinker.</h3>
              <p>You only got ${score} out of 10</p>
              <button class="restartButton">Sip and Restart</button></div>`
      );
    }
  }
  
  
  //function for restarting the quiz
  
  function relaunchQuiz() {
    $('main').on('click', '.restartButton', function (event) {
      location.reload();
    });
  }
  
  
  function renderQuiz() {
    launchQuiz();
    renderQuestion();
    userChooseAnswer();
    nextQuestion();
  }
  
  $(renderQuiz);