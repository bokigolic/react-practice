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


function App() {
  return (
    <div className="App">
      <>
      <Test4 />
      <CatFact />
        <Test3 />
        <RegistrationForm />
        <Note2 />
        <Test2 />
        <NoteTaker />
        <Test />
      </>
    </div>
  );
}

export default App;
