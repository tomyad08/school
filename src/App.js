import Test from "./Pages/Test";
import Subjek from "./Pages/HalamanSubjek";
import MenuUtama from "./Pages/MenuUtama";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <div
      className="relative bg-amber-100 -z-20"
      style={{ fontFamily: "'Varela Round', sans-serif" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<MenuUtama />} />
          <Route path="/subjek" element={<Subjek />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
