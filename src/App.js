import logo from './logo.svg';
import './App.css';
import Test from './component/Test';
import NoteTaker from './component/NoteTaker';
import Test2 from './component/Test2';


function App() {
  return (
    <div className="App">
      <>
        <Test2 />
        <NoteTaker />
        <Test />
      </>
    </div>
  );
}

export default App;
