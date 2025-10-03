import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return(
    <Router>
      <Routes>
         <Route path= "/" element={< Dashboard/>} />  {/*temporary only will remove later */}

        <Route path= "/" element={<Login />} />
        <Route path= "/Dashboard" element={< Dashboard/>} />

      </Routes>
    </Router>
  )
}

export default App;
