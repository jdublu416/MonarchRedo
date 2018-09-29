import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
