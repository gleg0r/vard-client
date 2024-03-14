import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import LayoutMain from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<AuthPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
