import "./App.css";
import "./index.css";
import "./Style/landingPage.css";
import Home from "./Pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Produkdetailsepatu from "./Pages/Produkdetailsepatu";
import Produkdetailsendal from "./Pages/Produkdetailsendal";
import Paymentsepatu from "./Pages/Paymentsepatu";
import Paymentsendal from "./Pages/Paymentsendal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/produk-detail-sepatu/:id"
            element={<Produkdetailsepatu />}
          />
          <Route
            path="/produk-detail-sendal/:id"
            element={<Produkdetailsendal />}
          />
          <Route
            path="/produk-detail-sepatu/:id/paymentsepatu"
            element={<Paymentsepatu />}
          />
          <Route
            path="/produk-detail-sendal/:id/paymentsendal"
            element={<Paymentsendal />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
