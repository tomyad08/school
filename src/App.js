import Test from "./Pages/Test";
import Subjek from "./Pages/HalamanSubjek";
import MenuUtama from "./Pages/MenuUtama";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
      <BrowserRouter>
        <div className="bg-amber-100 -z-10">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<MenuUtama />} />
            <Route path="/subjek" element={<Subjek />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
