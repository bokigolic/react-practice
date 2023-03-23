import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/Home';
import Counter from './component/Counter';
import NoteTaker from './component/NoteTaker';
import Test2 from './component/Test2';
import Note2 from './component/Note2';
import RegistrationForm from './component/RegistrationForm';
import Test3 from './component/Test3';
import CatFact from './component/CatFact';
import Test4 from './component/Test4';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <div className="form">
            <Link to="/counter"><button>Counter</button></Link>
            <Link to="/notetaker"><button>NoteTaker</button></Link>
            <Link to="/test2"><button>Test2</button></Link>
            <Link to="/note2"><button>Note2</button></Link>
            <Link to="/registrationform"><button>RegistrationForm</button></Link>
            <Link to="/test3"><button>Test3</button></Link>
            <Link to="/catfact"><button>CatFact</button></Link>
            <Link to="/test4"><button>Test4</button></Link>
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

            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
