import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import Form from "./pages/form/Form";

const Shop = () => {
  return <div>I am outlet page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default App;
