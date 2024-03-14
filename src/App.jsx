import './App.css';
import Input from './components/ui/Input/Input';
import CheckBox from './components/ui/CheckBox/CheckBox';

function App() {
  return (
    <div className="App">
      <Input placeholder={'Email'} />
      <CheckBox />
    </div>
  );
}

export default App;
