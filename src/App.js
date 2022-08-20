import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Selectedlist from "./components/selectedbreed";
import topten from "./components/topten";
// import { addcat, getcatDetails } from "./features/createslice";
// import { useSelector, useDispatch } from "react-redux/es/exports";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="selectedBreed" element={<Selectedlist />}/>
        <Route path="" element={<topten />}/>
      </Routes>
    </>
  );
}

export default App;
