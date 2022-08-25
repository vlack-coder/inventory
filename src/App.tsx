import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResourceLayout from "./Components/Layouts/ResourceLayout";
import SingleResource from "./Pages/SingleResource";
import Home from "./Pages/Home";
import ManageTypes from "./Pages/ManageTypes";
import AppLayout from "./Components/Layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="mtypes" element={<ManageTypes />} />
            <Route path="types" element={<ResourceLayout />}>
              <Route path=":type" element={<SingleResource />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
