import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './pages/signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Item from './pages/item';
import UpdateItem from './pages/updateItem';
import CreateItem from './pages/createItem'
import { ToastContainer } from 'react-toastify';



function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Routes>   
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="/create" element={<CreateItem />}></Route>
        <Route path="/update/:id" element={<UpdateItem />}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div>
  )
}

export default App
