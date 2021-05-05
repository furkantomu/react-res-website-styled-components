import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
