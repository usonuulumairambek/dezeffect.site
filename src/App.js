import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cleaning from "./components/cleaning/Cleaning";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Form from "./components/form/Form";
import Services from "./components/Services/Services";
import Price from "./components/price/Price";

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
            <Route path="/contacts" element={<Form />} />
            <Route path="/services" element={<Services />} />
            <Route path="/price" element={<Price />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
