import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
