import React, { useState } from "react";
import "./App.css";

const questions = [
  { question: "Коя е столицата на Франция?", options: ["Берлин", "Мадрид", "Париж", "Рим"], correct: 2 },
  { question: "Колко е 5 + 3?", options: ["5", "8", "10", "15"], correct: 1 },
  { question: "Кой е създателят на Facebook?", options: ["Бил Гейтс", "Марк Зукърбърг", "Илон Мъск", "Стийв Джобс"], correct: 1 },
  { question: "Коя е столицата на Германия?", options: ["Берлин", "Лондон", "Москва", "Париж"], correct: 0 },
  { question: "Колко е 7 * 6?", options: ["42", "36", "40", "48"], correct: 0 },
  { question: "Кой е най-високият планински връх?", options: ["Килиманджаро", "Еверест", "Монблан", "Аконкагуа"], correct: 1 },
  { question: "Какво е химичният символ на водорода?", options: ["O", "H", "He", "N"], correct: 1 },
  { question: "Кой е написал 'Под игото'?", options: ["Иван Вазов", "Христо Ботев", "Пейо Яворов", "Елин Пелин"], correct: 0 },
  { question: "Колко континента има на Земята?", options: ["5", "6", "7", "8"], correct: 2 },
  { question: "Каква е валутата на Япония?", options: ["Юан", "Йена", "Вон", "Рупия"], correct: 1 }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      if (index === questions[currentQuestion].correct) {
        setCorrectAnswer(index);
        setScore(score + 100);
        if (currentQuestion + 1 < questions.length) {
          setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setCorrectAnswer(null);
          }, 1000);
        } else {
          setGameOver(true);
        }
      } else {
        setTimeout(() => {
          setScore((prevScore) => Math.max(prevScore - 50, 0));
          setCurrentQuestion(currentQuestion > 0 ? Math.floor(Math.random() * currentQuestion) : 0);
          setSelectedAnswer(null);
        }, 1000);
      }
    }, 1000);
  };

  return (
    <div className="game-container">
      <img
        src="https://bugwire.de/wp-content/uploads/2020/10/WWTBAM_Germany_Logo11.png"
        alt="Game Logo"
        className="game-logo"
      />
      <div className="content">
        {gameOver ? (
          <h2 className="win-message">Herzlichen Glückwunsch! Du gewinnst {score} €!</h2>
        ) : (
          <>
            <div className="question-box">
              <h2>{questions[currentQuestion].question}</h2>
            </div>
            <div className="answers">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`answer-btn ${
                    selectedAnswer === index
                    ? index === questions[currentQuestion].correct
                      ? "correct"
                      : "wrong"
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <h3 className="score">Summe: {score} €</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
