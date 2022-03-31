import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Config from './pages/Config';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
