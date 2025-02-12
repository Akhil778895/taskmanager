import {BrowserRouter, Route, Routes} from "react-router-dom"
//import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"
import TaskManager from "./pages/TaskManger"
//import { Home } from "./pages/Home"

export const App = () => {
  return(<>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/task" element = {<TaskManager/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>

    </BrowserRouter>
  </>)
}