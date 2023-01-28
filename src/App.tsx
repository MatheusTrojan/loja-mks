import Footer from "./components/Footer";
import { GlobalStyle } from "./components/GlobalStyle";
import { Header } from "./components/Header";
import Product from "./components/Product";

function App() {

  return (
    <>
      <GlobalStyle />

      <Header />
      <Product />

      <Footer />
    </>
  );
};

export default App;
