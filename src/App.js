import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/bundesländer">
          <Bundesländer />
        </Route>
        <Route path="/landkreise">
          <Landkreise />
        </Route>
        <Route path="/impfungen">
          <Impfungen />
        </Route>
        <Route path="/about">
          <About />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
