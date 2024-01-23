import './app.scss'
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/home/Home"
import Watch from './pages/watch/Watch';
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <Fragment>
      <Routes>
          <Route index element={<Home />} />
          <Route path="watch" element={<Watch />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
