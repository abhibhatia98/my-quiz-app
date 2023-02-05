import './App.css';
import Navbar from './component/Navbar';
import Blogs from './pages/BlogsList'
import AboutUs from './pages/AboutUs'
import FreeQuiz from './pages/FreeQuiz'
import BlogItem from './pages/BlogItem'
import Blog from './pages/Blog'

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
          <Route exact path="/">
            <h1>Helo Home page </h1>
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/freeQuiz">
            <FreeQuiz />
          </Route>
          <Route exact path="/blog/:id">
            <Blog/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
