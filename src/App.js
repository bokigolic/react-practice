import logo from './logo.svg';
import './App.css';
import Test from './component/Test';
import NoteTaker from './component/NoteTaker';
import Test2 from './component/Test2';
import Note2 from './component/Note2';


function App() {
  return (
    <div className="App">
      <>
        <Note2 />
        <Test2 />
        <NoteTaker />
        <Test />
      </>
    </div>
  );
}

export default App;
