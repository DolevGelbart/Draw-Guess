import React, { useState, useRef, useMemo } from "react";
import CanvasDraw from "react-canvas-draw";
import { postDraw } from "../api/game";
import randomWord from "random-words";

export const Drawer = (props) => {
  const drawRef = useRef();
  const [selectedWord, setSelectedWord] = useState("");
  const [pointsForGuess, setPointsForGuess] = useState(0);
 // const [draw, setDraw] = useState();
  const [doneDraw, setDoneDraw] = useState(false);

  var easyWord = useMemo(
    () => randomWord({ exactly: 1, minLength: 3, maxLength: 4 })[0],
    []
  );
  var mediumWord = useMemo(() => randomWord({ exactly: 1, Length: 5 })[0], []);
  var hardWord = useMemo(() => randomWord({ exactly: 1, minLength: 6 })[0], []);

  const saveDrawHandler = () => {
    const saveDraw = drawRef.current.canvasContainer.childNodes[1].toDataURL();
   // setDraw(saveDraw);
    setDoneDraw(true);
    drawRef.current.clear();
    postDraw(props.gameId,saveDraw, selectedWord);
    drawRef.current.clear();
  };

  return (
    <div>
      {!selectedWord && (
        <div>
          <h1>Please choose a word:</h1>
          <button
            value={easyWord}
            onClick={() => {
              setSelectedWord(easyWord); //1 point
              setPointsForGuess(1);
            }}
          >
            Easy: {easyWord}
          </button>
          <button
            onClick={() => {
              setSelectedWord(mediumWord); //3 points
              setPointsForGuess(3);
            }}
          >
            Medium: {mediumWord}
          </button>
          <button
            onClick={() => {
              setSelectedWord(hardWord, 5); //5 points
              setPointsForGuess(5);
            }}
          >
            Hard: {hardWord}
          </button>
        </div>
      )}
      {selectedWord && (
        <div>
          {!doneDraw && (
            <div>
              <h2>
                {selectedWord}
                <p> </p>
                {pointsForGuess}
              </h2>
              <CanvasDraw brushRadius={3} ref={drawRef} />
              <button onClick={saveDrawHandler}>Done</button>
            </div>
          )}
        </div>
      )}
      {doneDraw && (
        <div>
          <p>Waiting for other player's move</p>
        </div>
      )}
    </div>
  );
};
