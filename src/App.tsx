import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import ResLayout from "./Components/ResLayout";
import SingleRes from "./Components/SingleRes";
import Home from "./Pages/Home";
import ManageTypes from "./Pages/ManageTypes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mtypes" element={<ManageTypes />} />
            <Route path="types" element={<ResLayout />}>
              <Route path=":type" element={<SingleRes />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
