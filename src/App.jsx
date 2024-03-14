import './App.css';
import { Routes, Route } from 'react-router-dom';
import Input from './components/ui/Input/Input';

function App() {
  return (
    <div className="App">
      <Input placeholder={'Email'} />
      <Routes>
        <Route>
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
