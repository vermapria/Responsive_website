import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import SiteRouter from "./router/SiteRouter";

function App() {
  return (
    <>
      <Navigation />
      <SiteRouter />
    </>
  );
}

export default App;
