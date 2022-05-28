import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as routes from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route exact={true} path={routes.HOME} element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
