import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes> 
      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<h1>Page not found!</h1>}/>
    </Routes>
    </>
  );
}

export default App;
