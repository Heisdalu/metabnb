import HomePage from "./pages/HomePage/HomePage";
import Place from "./pages/Places/Place";
import { Routes, Route } from "react-router-dom";
import Connect from "./components/ConnectWallet/Connect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/place-to-stay" element={<Place />} />
      </Routes>
      <Connect />
    </div>
  );
}

export default App;
