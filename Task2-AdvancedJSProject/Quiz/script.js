const questions = [
  { q: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup Language"], answer: 0 },
  { q: "Which CSS property controls text size?", options: ["font-style", "text-size", "font-size"], answer: 2 },
  { q: "Which language is used for web apps?", options: ["Python", "JavaScript", "C++"], answer: 1 }
];

let index = 0, score = 0;

function loadQuestion() {
  document.getElementById("question").textContent = questions[index].q;
  let opts = document.getElementById("options");
  opts.innerHTML = "";

  questions[index].options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    opts.appendChild(btn);
  });
}

function checkAnswer(i) {
  if(i === questions[index].answer) score++;
  index++;
  if(index < questions.length) loadQuestion();
  else document.getElementById("quiz").innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

window.onload = loadQuestion;
