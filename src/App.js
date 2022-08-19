import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import toplist from "./components/topten";
// import { addcat, getcatDetails } from "./features/createslice";
// import { useSelector, useDispatch } from "react-redux/es/exports";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="toptencats" element={<toplist />}/>
      </Routes>
    </>
  );
}

export default App;
