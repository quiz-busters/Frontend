import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <>
    <Routes> 
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<h1>Page not found!</h1>}/>
    </Routes>
    </>
  );
}

export default App;
