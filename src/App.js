import "./App.css";
import Header from "./Header/Header";
import Row from "./Row/Row";
import requests from "./requests";
import About from "./About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App container">
      <Router>
        <Header headtitle="News at a glance" />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/headlines">
            <Row title="TOP HEADLINES" fetchUrl={requests.fetchTopHeadlines} />
          </Route>
          <Route exact path="/bussiness">
            <Row title="TOP BUSINESS" fetchUrl={requests.fetchTopBusiness} />
          </Route>
          <Route exact path="/entertainment">
            <Row
              title="TOP ENTERTAINMENT"
              fetchUrl={requests.fetchTopEntertainment}
            />
          </Route>
          <Route exact path="/health">
            <Row title="TOP HEALTH" fetchUrl={requests.fetchTopHealth} />
          </Route>
          <Route exact path="/science">
            <Row title="TOP SCIENCE" fetchUrl={requests.fetchTopScience} />
          </Route>
          <Route exact path="/sports">
            <Row title="TOP SPORTS" fetchUrl={requests.fetchTopSports} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
