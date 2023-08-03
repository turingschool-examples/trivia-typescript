import React, { useState } from 'react';
import './App.css';

import { Question } from './types';
import QuestionAndAnswer from './QuestionAndAnswer';

function App() {
  const [questionInfo, setQuestionInfo] = useState<Question | null>(null);
  const [score, setScore] = useState<number>(0);
  
  function getTriviaQuestion(): void {
    fetch("https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Something happened with the trivia GET request.");
      })
      .then(triviaQuestion => {
        const rawQuestion = triviaQuestion.results[0];

        const questionInfo = {
          category: rawQuestion.category,
          type: rawQuestion.type,
          difficulty: rawQuestion.difficulty,
          question: rawQuestion.question,
          correctAnswer: rawQuestion.correct_answer,
          incorrectAnswers: rawQuestion.incorrect_answers
        }

        setQuestionInfo(questionInfo);
      })
      .catch(err => console.error(err));
  };
  
  return (
    <div className="App">
      <h1>Trivia with TS</h1>

      <h3>Current Score: {score}</h3>

      <button onClick={getTriviaQuestion}>Quiz Me!</button>
  
      {questionInfo && <QuestionAndAnswer questionInfo={questionInfo} setScore={setScore} />}
    </div>
  );
}

export default App;
