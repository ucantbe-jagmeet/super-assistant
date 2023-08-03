import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Landing, Edit, Preview } from "../pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Home />}>
          <Route path="/edit" element={<Edit />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
