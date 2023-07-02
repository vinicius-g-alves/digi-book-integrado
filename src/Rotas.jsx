import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListingPokemons from "./pages/AllPokemons";
import Home from "./pages/Home";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
