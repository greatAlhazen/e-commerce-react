import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import Register from "./pages/register/register";

const Shop = () => {
  return <div>I am outlet page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
