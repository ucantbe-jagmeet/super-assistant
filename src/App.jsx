import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Landing } from "../pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
