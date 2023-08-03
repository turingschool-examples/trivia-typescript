import { Question } from './types';
import arrayShuffle from 'array-shuffle';

interface QuestionAndAnswerProps {
  questionInfo: Question;
  setScore: (score: number | ((prevScore: number) => number)) => void;
};

function QuestionAndAnswer({ questionInfo, setScore }: QuestionAndAnswerProps) {
  const { question, correctAnswer, incorrectAnswers } = questionInfo;

  const possibleAnswers = arrayShuffle([...incorrectAnswers, correctAnswer]);

  const answerElements = possibleAnswers.map(answer => {
    return <button 
              className="btn-answer" 
              onClick={() => evaluateGuess(answer)} 
              key={answer}>
                {answer}
            </button>;
  })

  function evaluateGuess(answer: string) {
    if (answer === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    } else {
      setScore(prevScore => prevScore - 1);
    }
  }

  return (
    <main className="qa-container">
      <p>{question}</p>

      {answerElements}
    </main>
  );
}

export default QuestionAndAnswer;