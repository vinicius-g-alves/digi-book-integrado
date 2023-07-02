import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";

const Rotas = () => {
  const makeLayout = (element) => {
    return <MainLayout children={element} />;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={makeLayout(<Home />)} />
        <Route path="/info/:name" element={makeLayout(<Details />)} />
      </Routes>
    </Router>
  );
};

export default Rotas;
