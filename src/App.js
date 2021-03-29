import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Countries from "./pages/Countries";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Foot from "./components/Foot";

function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/countries" component={Countries} />
        <Route path="/details/:name" component={Details} />
      </Switch>
      <Foot />
    </main>
  );
}

export default App;
