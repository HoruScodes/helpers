import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:username">
          <div className="p-m-4">
            <Links />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
