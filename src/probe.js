import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Коя е столицата на Франция?",
    options: ["Берлин", "Мадрид", "Париж", "Рим"],
    correct: 2,
  },
  {
    question: "Колко е 5 + 3?",
    options: ["5", "8", "10", "15"],
    correct: 1,
  },
  {
    question: "Кой е създателят на Facebook?",
    options: ["Бил Гейтс", "Марк Зукърбърг", "Илон Мъск", "Стийв Джобс"],
    correct: 1,
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      if (index === questions[currentQuestion].correct) {
        setCorrectAnswer(index);
        setScore(score + 100);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setCorrectAnswer(null);
        }, 1000);
      } else {
        setCorrectAnswer(questions[currentQuestion].correct);
        setTimeout(() => {
          setCurrentQuestion(Math.floor(Math.random() * currentQuestion));
          setSelectedAnswer(null);
          setCorrectAnswer(null);
        }, 1000);
      }
    }, 1000);
  };

  return (
    <div className="game-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Wer_wird_Millionär%3F_Logo.svg/800px-Wer_wird_Millionär%3F_Logo.svg.png"
        alt="Game Logo"
        className="game-logo"
      />
      <div className="question-box">
        <h2>{questions[currentQuestion].question}</h2>
      </div>
      <div className="answers">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`answer-btn ${
              selectedAnswer === index
                ? "selected"
                : correctAnswer === index
                ? "correct"
                : selectedAnswer !== null && selectedAnswer === index
                ? "wrong"
                : ""
            }`}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <h3 className="score">Сума: {score} €</h3>
    </div>
  );
};

export default App;
