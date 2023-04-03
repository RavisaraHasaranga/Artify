const quizData = [
  {
    question: "Which is the tallest building in the world?",
    a: "Burj Khalifa",
    b: "Shanghai Tower",
    c: "Abraj Al Bait Clock Tower",
    d: "One World Trade Center",
    correct: "a",
    user: "",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    a: "China",
    b: "Japan",
    c: "South Korea",
    d: "Vietnam",
    correct: "b",
    user: "",
  },
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Brisbane",
    correct: "c",
    user: "",
  },
  {
    question: "Which country is famous for the Angkor Wat temple complex?",
    a: "Vietnam",
    b: "Cambodia",
    c: "Thailand",
    d: "Myanmar",
    correct: "b",
    user: "",
  },
  {
    question: "What is the currency of Brazil?",
    a: "Peso",
    b: "Dollar",
    c: "Real",
    d: "Euro",
    correct: "c",
    user: "",
  },
  {
    question: "What is the highest mountain in Africa?",
    a: "Mount Kilimanjaro",
    b: "Mount Everest",
    c: "Mount Fuji",
    d: "Mount Aconcagua",
    correct: "a",
    user: "",
  },
  {
    question: "Which city is known as the 'Eternal City'?",
    a: "Paris",
    b: "Rome",
    c: "Athens",
    d: "Vienna",
    correct: "b",
    user: "",
  },
  {
    question:
      "What is the famous canal that connects the Atlantic and Pacific oceans?",
    a: "Suez Canal",
    b: "Panama Canal",
    c: "Kiel Canal",
    d: "Cape Cod Canal",
    correct: "b",
    user: "",
  },
  {
    question:
      "Which country is known for the famous safari destination 'Masai Mara'?",
    a: "Kenya",
    b: "Tanzania",
    c: "Uganda",
    d: "Zimbabwe",
    correct: "a",
    user: "",
  },
  {
    question: "What is the famous structure located in Agra, India?",
    a: "The Eiffel Tower",
    b: "The Taj Mahal",
    c: "The Great Wall",
    d: "The Colosseum",
    correct: "b",
    user: "",
  },
];
data = [];
const answerEls = document.querySelectorAll(".answer"); // get all the answer elements
const questionEl = document.getElementById("question"); // get the question element

const timeText = document.querySelector(".timer .timer_left_txt"); // get the time text element
const timeCount = document.querySelector(".timer .timer_sec"); // get the time count element

const a_text = document.getElementById("a_text"); // get the answer text element
const b_text = document.getElementById("b_text"); // get the answer text element
const c_text = document.getElementById("c_text"); // get the answer text element
const d_text = document.getElementById("d_text"); // get the answer text element
const submitBtn = document.getElementById("submit"); // get the submit button element

const timeValue = performance.now(); // get the time value
let score = 0; // set the score to 0
let myTimer; // set the timer to null
let count; // set the count to null
let incremental = 0; // set the incremental to 0

startTimer(60, 0);
loadQuestion();

function generator() {
  while (true) {
    const random = Math.floor(Math.random() * quizData.length);
    if (data.includes(random) === false) {
      data.push(random);
      count = random;
      incremental += 1;
      return random;
    }
  }
}

function loadQuestion() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });

  const question = generator();
  console.log(question);

  const currentQuizData = quizData[question];
  console.log(currentQuizData);

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function startTimer(time, trigger) {
  if (trigger === 0) {
    myTimer = setInterval(timer, 1000);
    function timer() {
      timeCount.textContent = time;
      time--;
      if (time < 9) {
        let addZero = timeCount.textContent;
        timeCount.textContent = "0" + addZero;
      }
      if (time < 0) {
        timeText.textContent = "Time Out";
        clearInterval(myTimer);
        return update("60", score);
      }
    }
  } else if (trigger === 1) {
    const timeTaken = Math.round((performance.now() - timeValue) / 1000);
    clearInterval(myTimer);
    return update(timeTaken, score);
  }
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (incremental < 10) {
    if (answer) {
      quizData[count].user = answer;
      if (answer === quizData[count].correct) {
        score += 1;
      }
      loadQuestion();
    }
  } else {
    if (answer) {
      quizData[count].user = answer;
      if (answer === quizData[count].correct) {
        score += 1;
      }
    }

    return startTimer(0, 1);
  }
});
console.log(score);

function update(time, scores) {
  document.getElementsByClassName("quiz-container")[0].style.display = "none";
  const parent = document.getElementsByClassName("result-container")[0];

  const timeRow = document.createElement("div");
  timeRow.classList.add("item");
  let scoreTitle;
  console.log(scores);

  if (scores == 10) {
    scoreTitle = "Congratulations !! ";
  } else if (scores < 8 && scores > 4) {
    scoreTitle = "Good Job !";
  } else if (scores < 5 && scores > 0) {
    scoreTitle = "Keep it Up ! ";
  } else {
    scoreTitle = "Try Again ! ";
  }
  timeRow.innerHTML = `<div class='headerTitle'>
        <span>${scoreTitle}</span>
        <span>Results : ${scores}/10 marks.</span>
        <span>You took ${time} seconds to finish the quiz</span>
    </div>`;

  parent.append(timeRow);

  for (let i = 0; i < quizData.length; i++) {
    const quizRow = document.createElement("div");
    quizRow.classList.add("item");

    const question = quizData[i].question;
    const correctAnswer = quizData[i].correct;
    const userAnswer = quizData[i].user;
    let userClass;

    if (userAnswer === correctAnswer) {
      userClass = "correct";
    } else {
      userClass = "incorrect";
    }

    quizRow.innerHTML = `<div class='questions'}>
                    <h3>${question}</h3>
                   
                    <div class='questionAnswers'>
                        <div class='answers'>
                            <span>
                                Your Answer :
                            </span>
                            <span class='correctTag'>
                                ${userAnswer ? userAnswer : "Time Out"}
                                ${
                                  userClass === "correct"
                                    ? `<span class='correct'>&#10003</span>`
                                    : ""
                                }
                                ${
                                  userClass === "incorrect"
                                    ? `<span class='incorrect'>&#10060</span>`
                                    : ""
                                }
                            </span>
                        </div>
                        <div class='answers'>
                            <span>
                                Correct Answer :
                            </span>
                            <span>
                               ${correctAnswer}
                            </span>
                        </div>
                    </div>
                </div>`;
    parent.append(quizRow);
  }
  const homeRow = document.createElement("div");
  homeRow.classList.add("item");
  homeRow.innerHTML = `
          <button class="refresh" onclick="window.location='../../pages/student3/quiz.html'">Back to home</button>`;
  parent.append(homeRow);
  document.getElementsByClassName("result-container")[0].style.display = "flex";
}
