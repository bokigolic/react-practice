import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home';
import Counter from './component/Counter';
import NoteTaker from './component/NoteTaker';
import Calculator from './component/Calculator';
import Note2 from './component/Note2';
import RegistrationForm from './component/RegistrationForm';
import Test3 from './component/Test3';
import CatFact from './component/CatFact';
import Test4 from './component/Test4';
import './App.css'
import Footer from "./Footer";
import ColorClick from "./component/ColorClick";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="form">
          <Link to="/counter"><button className="button-6" role="button">Counter</button></Link>
          <Link to="/notetaker"><button className="button-6" role="button">NoteTaker</button></Link>
          <Link to="/calculator"><button className="button-6" role="button">Calculator</button></Link>
          <Link to="/note2"><button className="button-6" role="button">Note2</button></Link>
          <Link to="/registrationform"><button className="button-6" role="button">RegistrationForm</button></Link>
          <Link to="/test3"><button className="button-6" role="button">Test3</button></Link>
          <Link to="/catfact"><button className="button-6" role="button">CatFact</button></Link>
          <Link to="/test4"><button className="button-6" role="button">Test4</button></Link>
          <Link to="/color"><button className="button-6" role="button">Color</button></Link>
         
          <div className="projekti">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/notetaker" element={<NoteTaker />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/note2" element={<Note2 />} />
              <Route path="/registrationform" element={<RegistrationForm />} />
              <Route path="/test3" element={<Test3 />} />
              <Route path="/catfact" element={<CatFact />} />
              <Route path="/test4" element={<Test4 />} />
              <Route path="/color" element={<ColorClick />} />
            </Routes>
          </div>

        </div>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
