import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import NoteTaker from './component/NoteTaker';
import Test2 from './component/Test2';
import Note2 from './component/Note2';
import RegistrationForm from './component/RegistrationForm';
import Test3 from './component/Test3';
import CatFact from './component/CatFact';
import Test4 from './component/Test4';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';


function App() {
  return (
    <div className="App">
      <>

        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/notetaker" element={<NoteTaker />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/note2" element={<Note2 />} />
            <Route path="/registrationform" element={<RegistrationForm />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/catfact" element={<CatFact />} />
            <Route path="/test4" element={<Test4 />} />

          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
