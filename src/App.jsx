import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Landing, Edit, Preview, ErrorPage, Hero } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Home />}>
          <Route path="/hero" element={<Hero />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/preview" element={<Preview />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
