import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SelectTemplateType from "./Components/SelectTemplateType";




const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selectTemplateType" element={<SelectTemplateType />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};
