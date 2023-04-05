const quizData = [
  {
    question:
      "What artist is known for the sculptures, The Thinker, The Kiss, and The Gates of Hell?",
    a: "Donatello",
    b: "Gian Lorenzo Bernini",
    c: "Auguste Rodin",
    correct: "c",
    user: "",
  },
  {
    question:
      "What type of paint commonly used in fine art is the slowest to dry?",
    a: "Acrylic",
    b: "Watercolours",
    c: "Oil",
    correct: "c",
    user: "",
  },
  {
    question:
      "What is the largest museum of fine art as defined by available gallery space?",
    a: "The Louvre",
    b: "The Hermitage",
    c: "Metropolitan Museum of Art",
    correct: "a",
    user: "",
  },
  {
    question: "Which famous painter made “The Last Supper”?",
    a: "The Louvre",
    b: "Leonardo da Vinci",
    c: "Jackson Pollock",
    correct: "b",
    user: "",
  },
  {
    question: "Who painted the “Mona Lisa”?",
    a: "The Louvre",
    b: "Leonardo da Vinci",
    c: "Jackson Pollock",
    correct: "b",
    user: "",
  },
  {
    question: "What is the most visited museum in the world?",
    a: "Museé de Louvre, Paris",
    b: "Musée d’Orsay",
    c: "Grand Palais",
    correct: "a",
    user: "",
  },
  {
    question: "Who invented the color wheel in 1706?",
    a: "Michelangelo",
    b: "Sir Isaac Newton.",
    c: "Thomas Edison",
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
const submitBtn = document.getElementById("submit"); // get the submit button element

const questionList = document.getElementById("question-list");

const timeValue = performance.now(); // get the time value
let score = 0; // set the score to 0
let myTimer; // set the timer to null
let count; // set the count to null
let incremental = 0; // set the incremental to 0
function start() {
  startTimer(60, 0);
  loadQuestion();
  submitBtn.style.display = "block";
}

function loadQuestion() {
  let count = 0;

  quizData.forEach((question) => {
    questionList.innerHTML += `<div class="quiz-header">
            <h2 id="question">${question.question}</h2>
            <ul>
                <li>
                    <input type="radio" id="a${count}" name="answer${count}" class="${count}" value="a" onclick="setSelectedValue(${count}, 'a')" />
                    <label id="a_text" for="a${count}">${question.a}</label>
                </li>
                <li>
                    <input type="radio" id="b${count}" name="answer${count}" class="${count}" value="b" onclick="setSelectedValue(${count}, 'b')" />
                    <label id="b_text" for="b${count}">${question.b}</label>
                </li>
                <li>
                    <input type="radio" id="c${count}" name="answer${count}" class="${count}" value="c" onclick="setSelectedValue(${count}, 'c')" />
                    <label id="c_text" for="c${count}">${question.c}</label>
                </li>
            </ul>
        </div>`;

    count++; // increment the counter
  });
}

const setSelectedValue = (count, value) => {
  console.log(count);
  console.log(value);
  quizData[count].user = value;
};

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
        setScore();
        timeText.textContent = "Time Out";
        clearInterval(myTimer);
        return update("60", score);
      }
    }
  } else if (trigger === 1) {
    setScore();
    const timeTaken = Math.round((performance.now() - timeValue) / 1000);
    clearInterval(myTimer);
    return update(timeTaken, score);
  }
}

const setScore = () => {
  quizData.forEach((q) => {
    if (q.user === q.correct) {
      score++;
    }
  });
};

const submit = () => {
  incremental = 0;
  quizData.forEach((q) => {
    if (q.user !== "") {
      incremental++;
    }
  });
  if (incremental < 7) {
    alert("Please answer all the questions");
    return;
  } else {
    return startTimer(0, 1);
  }
};

function update(time, scores) {
  document.getElementsByClassName("quiz-container")[0].style.display = "none";
  const parent = document.getElementsByClassName("result-container")[0];

  const timeRow = document.createElement("div");
  timeRow.classList.add("item");
  let scoreTitle;
  console.log(scores);

  if (scores == 7) {
    scoreTitle = "Congratulations !! ";
  } else if (scores < 7 && scores > 3) {
    scoreTitle = "Good Job !";
  } else if (scores < 4 && scores > 0) {
    scoreTitle = "Keep it Up ! ";
  } else {
    scoreTitle = "Try Again ! ";
  }
  timeRow.innerHTML = `<div class='headerTitle'>
        <span>${scoreTitle}</span>
        <span>Results : ${scores}/7 marks.</span>
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
