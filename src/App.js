import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boutique from "./pages/Boutique";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/boutique" component={Boutique} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
