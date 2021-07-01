import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ['rock', 'paper', 'scissors'];

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]; //Math.floor rounds the number down
    setComputerChoice(randomChoice);
  }

  useEffect(() => {
    {
      switch(userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          setResult('YOU WIN!')
          break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('YOU LOSE')
          break
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
          setResult('IT\'S A DRAW!')
        break
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div>
      <h1>User choice is: {userChoice}</h1>
      <h1>Computer choice is: {computerChoice}</h1>
      {/* <button onClick={() => handleClick('Rock')}>Rock</button>
      <button onClick={() => handleClick('Paper')}>Paper</button>
      <button onClick={() => handleClick('Scissors')}>Scissors</button>} */}
      {choices.map((choice, index) => 
        <button key={index} onClick={() => handleClick(choice)}>{choice}</button>
        )}
        <h1>{result}</h1>
    </div>
  );
}

export default App;
