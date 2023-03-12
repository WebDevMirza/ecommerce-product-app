import "./assets/styles/app.css";
import Header from "./components/Header";
import ProductDesc from "./components/ProductDesc";
import ProductImg from "./components/ProductImg";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="wrapper-d product">
          <div className="product-img">
            <ProductImg />
          </div>
          <div className="product-desc">
            <ProductDesc />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
