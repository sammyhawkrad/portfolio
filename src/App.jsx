import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {

  return (
    <>
      <NavBar />
        <Outlet />
        <ScrollToAnchor />
      <Footer />
    </>
  );
}

export default App;
