import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from './Components/Students';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Students />} />
          </Routes>
    </Router>
  );
}

export default App;
