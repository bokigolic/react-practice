import logo from './logo.svg';
import './App.css';
import Test from './component/Test';
import NoteTaker from './component/NoteTaker';
import Test2 from './component/Test2';
import Note2 from './component/Note2';
import RegistrationForm from './component/RegistrationForm';
import Test3 from './component/Test3';
import CatFact from './component/CatFact';
import Test4 from './component/Test4';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/notetaker" element={<NoteTaker />} />
            {/*
            <Route path="/" element={<Test2 />} />
            <Route path="/" element={<Note2 />} />
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/" element={<Test3 />} />
            <Route path="/" element={<CatFact />} />
            <Route path="/" element={<Test4 />} />
            */}
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
