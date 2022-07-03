import React from "react";
import { useLocation } from "react-router-dom";
import { Drawer } from "../Drawer";
import { Guesser } from "../Guesser";
import { getPlayers, getDraw } from "../../api/game";
import { useQuery } from "react-query";

function useQueryParams() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const GamePage = (props) => {
  //const [drawing,setDrawing]=useState("");
  const params = useQueryParams();
  const role = params.get("role");
  const gameId = params.get("gameId");
  const { data } = useQuery("players", () => getPlayers(gameId), {
    refetchInterval: 2000,
  });
  const { data:drawData } = useQuery("data", () => getDraw(gameId), {
    refetchInterval: 2000,
  });
  

  return (
    <div>
      {data && data.players === 1 && <div>waiting</div>}
      {data && data.players === 2 && role === "drawing" && <Drawer gameId={gameId}/>}
      {data && data.players === 2 && role === "guessing" && <Guesser value={drawData}/>}
    </div>
  );
};

export default GamePage;
