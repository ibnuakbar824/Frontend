import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import State from "./Pages/State";
import EventHandling from "./Pages/EventHandling";
import UseEffect from "./Pages/UseEffect";
import UpdateState from "./componen/UpdateState";
import Animasi from "./componen/Animasi";
import FetchApi from "./componen/FetchApi";
import ReactContext from "./Pages/ReactContext";
import GetMaba from "./componen/Admind/GetMaba";
import CreateMaba from "./componen/Admind/CreateMaba";



function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/State" element={<State/>}/>
      <Route path="/EventHandling" element={<EventHandling/>}/>
      <Route path="/UseEffect" element={<UseEffect/>}/>
      <Route path="/UpdateState" element={<UpdateState/>}/>
      <Route path="/Animasi" element={<Animasi/>}/>
      <Route path="/FetchApi" element={<FetchApi/>}/>
      <Route path="/ReactContext" element={<ReactContext/>}/>
      <Route path="/GetMaba" element={<GetMaba/>}/>
      <Route path="/CreateMaba" element={<CreateMaba/>}/>

    </Routes>
   );
}
export default App;