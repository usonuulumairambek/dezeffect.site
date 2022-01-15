import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cleaning from "./components/cleaning/Cleaning";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <switch>
          <Route path="/cleaning">
            
          </Route>
        </switch> */}
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/cleaning" element={<Cleaning />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
