import './App.css';
import Navbar from './component/Navbar';
import Blogs from './pages/Blogs'
import AboutUs from './pages/AboutUs'
import FreeQuiz from './pages/FreeQuiz'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch >
        <Route exact path="/about">
            <AboutUs/>
          </Route>
          <Route exact path="/blogs">
            <Blogs/>
          </Route>
          <Route exact path="/freeQuiz">
            <FreeQuiz/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
