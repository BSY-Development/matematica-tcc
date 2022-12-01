import Home from "./pages/Home";
import PrimeiroGrau from "./pages/PrimeiroGrau";
import SegundoGrau from "./pages/SegundoGrau";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/primeiro" element={ <PrimeiroGrau /> } />
      <Route exact path="/segundo" element={ <SegundoGrau /> } />
    </Routes>
  );
}

export default App;
