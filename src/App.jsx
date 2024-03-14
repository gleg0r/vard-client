import './App.css';
import { Routes, Route } from 'react-router-dom';
import Input from './components/ui/Input/Input';
import CheckBox from './components/ui/CheckBox/CheckBox';

function App() {
  return (
    <div className="App">
      <Input placeholder={'Email'} />
      <Routes>
        <Route>
          <Route />
        </Route>
      </Routes>
      <CheckBox />
    </div>
  );
}

export default App;
