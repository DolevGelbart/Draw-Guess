import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamePage from "./Pages/GamePage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

const Navigation = () => {

  const onUserSelectionHandler = () =>{
    
  }

  return (
    <Router>
      <section>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/game" element={<GamePage onUserSelection={onUserSelectionHandler}/>} />
        </Routes>
      </section>
    </Router>
  );
};

export default Navigation;
