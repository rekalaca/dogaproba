import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Folap from "./pages/Folap";
import Haromszogek from "./pages/Haromszogek";
import Osztaly from "./pages/Osztaly";
import Error from "./pages/Error";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Folap />} />
          <Route path="Haromszogek" element={<Haromszogek />} />
          <Route path="Osztaly" element={<Osztaly />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
