import "./App.css";
import { Catalog, Header, Navbar } from "./components";
import PopularSwiper from "./components/PopularSwiper/PopularSwiper";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <Header />
        <Catalog />
        <PopularSwiper />
      </div>
    </div>
  );
}

export default App;
