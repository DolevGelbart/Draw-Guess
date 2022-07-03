import { useState } from "react";

export const Guesser = (props) => {
  const [userGuess, setUserGuess] = useState("");
  const [isCorrectGuess, setIsCurrectGuess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userGuessHandler = (event) => {
    setUserGuess(event.target.value);
  };

  const submitHandler = () => {
    if (props.value) {
      setIsCurrectGuess(userGuess === props.value.word);
      setErrorMessage("Wrong, try again!");
      setUserGuess("");
    }
  };
  console.log({
    props,userGuess
  })
  return (
    <div>
      {!isCorrectGuess && (
        <div>
          <h1>Guess the drawing</h1>
          <p>{errorMessage}</p>
          <input type="text" value={userGuess} onChange={userGuessHandler} />
          <button onClick={submitHandler}>Check Answer</button>
          <div>
            {props.value && props.value.draw && <img src={props.value.draw} />}
          </div>
        </div>
      )}
      {isCorrectGuess && <h4>Correct! the word is: {props.value.word} </h4>}
    </div>
  );
};
