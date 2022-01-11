import "./App.css";
import Benefits from "./components/benefits/Benefits";
import Destroy from "./components/destroy/Destroy";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__content">
        <Main />
        <Destroy />
        <h2 className="app__benefits">Наши преимущества:</h2>
        <Benefits />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
