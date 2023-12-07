import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Routing from "./Routing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
