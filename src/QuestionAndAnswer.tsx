import { Question } from './types';

type QuestionAndAnswerProps = {
  questionInfo: Question;
};

function QuestionAndAnswer({ questionInfo }: QuestionAndAnswerProps) {
  const { question, correctAnswer, incorrectAnswers } = questionInfo;

  

  return (
    null
  );
}

export default QuestionAndAnswer;