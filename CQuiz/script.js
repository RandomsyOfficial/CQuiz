// Logic script(configure quiz Only)
const quiz = [
  {
    question: "What is 2 + 2?",
    answers: [2, 3, 4, 5],
    correct: 4
  },
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Paris", "Rome", "Madrid"],
    correct: "Paris"
  },
  {
    question: "Which language runs in the browser?",
    answers: ["Python", "C++", "JavaScript", "Java"],
    correct: "JavaScript"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("result").innerText = "";

  // Show question
  const q = quiz[currentQuestion];
  document.getElementById("question").innerText = q.question;

  // Clear old answers
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  // Create new buttons
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(answer) {
  const q = quiz[currentQuestion];
  if (answer === q.correct) {
    score++;
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText =
      "❌ Wrong! Correct answer: " + q.correct;
  }

  currentQuestion++;
  if (currentQuestion < quiz.length) {
    setTimeout(loadQuestion, 1000); // wait 1 second then load next
  } else {
    document.getElementById("question").innerText = "Quiz Finished!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").innerText = "";
    document.getElementById("score").innerText =
      "Final Score: " + score + "/" + quiz.length;
  }
}

// Start quiz
loadQuestion();
