import "antd/dist/antd.min.css";
import MenuAtd from "./components/Menu/MenuAtd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Page/HomePage/HomePage";
import AboutPage from "./components/Page/AboutPage/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <MenuAtd />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
