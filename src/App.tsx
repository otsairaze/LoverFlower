import "./App.css";
import { Catalog, Header, Navbar } from "./components";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <Header />
        <Catalog />
      </div>
    </div>
  );
}

export default App;
