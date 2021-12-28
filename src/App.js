import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from "./components/Links";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/features";
import LoginComponent from "./components/Login";
import SignupComponent from "./components/Signup";
import Shell from "./components/Shell";

function App() {
  return (
    <Shell>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <main>
              <Hero />
              <Features />
            </main>
          </Route>
          <Route path="/login">
            <main>
              <LoginComponent />
            </main>
          </Route>
          <Route path="/signup">
            <main>
              <SignupComponent />
            </main>
          </Route>
          <Route path="/:username">
            <div className="p-m-4">
              <Links />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Shell>
  );
}

export default App;
