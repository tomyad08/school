import Test from "./Pages/Test";
import Subjek from "./Pages/HalamanSubjek";
import MenuUtama from "./Pages/MenuUtama";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import InfoPage from "./Pages/InfoPage";
import HalamanTest from "./Components/Test.jsx/HalamanTest";

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
            <Route path="/info" element={<InfoPage />} />
            <Route path="/test-page" element={<HalamanTest />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
