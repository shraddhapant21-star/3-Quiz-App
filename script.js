const questions = [
  {
    question: "What is the capital of Japan",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "Who wrote Romeo and Juliet?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
    ],
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxigen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: 5, correct: false },
      { text: 6, correct: false },
      { text: 7, correct: true },
      { text: 8, correct: false },
    ],
  },
  {
    question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "Brazil", correct: false },
      { text: "UK", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Gold", correct: false },
      { text: "Dimond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    question: "How many degrees are there in a right angle?",
    answers: [
      { text: "90°", correct: true },
      { text: "45°", correct: false },
      { text: "180°", correct: false },
      { text: "360°", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Ganga", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Claude Monet", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: 6, correct: false },
      { text: 7, correct: false },
      { text: 8, correct: true },
      { text: 9, correct: false },
    ],
  },
  {
    question: "Which is the smallest prime number?",
    answers: [
      { text: 1, correct: false },
      { text: 2, correct: true },
      { text: 3, correct: false },
      { text: 5, correct: false },
    ],
  },
  {
    question: "How many days are there in a leap year?",
    answers: [
      { text: 366, correct: true },
      { text: 364, correct: false },
      { text: 365, correct: false },
      { text: 367, correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progressBar");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextBtn.style.display = "none";
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
  }
  button.disabled = true;
})
const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
progressBar.style.width = progress + "%";

  nextBtn.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`
  nextBtn.textContent = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextBtn(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextBtn.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextBtn();
  }else{
    startQuiz();
  }
})
startQuiz();
