import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - is ... ',
    variants: ['application', 'independent and reusable bits of code', 'node module'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'special HTML attribute',
      'function',
      'syntax extension to JavaScript',
    ],
    correct: 2,
  },
  {
    title: 'What is PHP?',
    variants: [
      'elephant',
      'programming language',
      'server',
    ],
    correct: 1,
  },
  {
    title: 'What is CSS?',
    variants: [
      'style sheet language',
      'game engine',
      'computer science solution',
    ],
    correct: 0,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You'we got {correct} correct answers from {questions.length}</h2>
      <a href="/">
        <button>Try again?</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        { question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct} />}
    </div>
  );
}

export default App;
