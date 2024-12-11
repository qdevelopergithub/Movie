import AddNewMovie from "./components/addNewMovie/AddNewMovie";
import EditfFrom from "./components/editSection/EditfFrom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addMovie" element={<AddNewMovie />} />
        <Route path="/editMovie" element={<EditfFrom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
