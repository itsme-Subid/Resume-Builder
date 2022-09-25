import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let title = "resume-builder";
  let tabs = ["home", "about", "contact"];
  let colors = [
    "#403030",
    "#00010d",
    "#122031",
    "#262621",
    "#1b4140",
    "#0d2029",
    "#122640",
    "#0d1117",
    "#262626",
  ];
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={<Header title={title} tabs={tabs} colors={colors} />}
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
