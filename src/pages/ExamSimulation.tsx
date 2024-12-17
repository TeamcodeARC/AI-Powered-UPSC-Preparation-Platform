// File: src/pages/ExamSimulation.tsx
import React, { useState } from "react";

const ExamSimulation: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "New Delhi",
    },
    {
      question: "Who is known as the Father of the Indian Constitution?",
      options: [
        "Mahatma Gandhi",
        "Dr. B.R. Ambedkar",
        "Jawaharlal Nehru",
        "Subhash Chandra Bose",
      ],
      answer: "Dr. B.R. Ambedkar",
    },
    // Add more questions as needed
  ];

  const handleOptionClick = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetExam = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="exam-simulation">
      <h1>Exam Simulation</h1>
      {!completed ? (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-section">
          <h2>Exam Completed!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
          <button onClick={resetExam} className="retry-button">
            Retry Exam
          </button>
        </div>
      )}
    </div>
  );
};

export default ExamSimulation;
