import React from "react";
import { useNavigate } from "react-router";
import { postConnect } from "../../../api/game";
//import { useState } from "react";

const WelcomePage = () => {
  // const [page, setPage] = useState(<ChoosingPage/>);
  const navigate = useNavigate();
  async function startGame() {
    const gameData = await postConnect();
    const role = gameData.players === 1 ? "drawing" : "guessing";
    navigate(`/game?gameId=${gameData.gameId}&role=${role}`);
  }

  return (
    <div>
      <h1>WelcomePage</h1>   
      <button
        onClick={() => {
          startGame();
        }}
      >
        Play game!
      </button>
    </div>
  );
};
export default WelcomePage;
