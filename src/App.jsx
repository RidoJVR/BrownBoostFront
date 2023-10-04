import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import IndexPublish from "./views/Publications/IndexPublish";
import ShowPublish from "./views/Publications/ShowPublish";
import StorePublish from "./views/Publications/StorePublish";
import UpdatePublish from "./views/Publications/UpdatePublish";

import { IndexUsers } from "./views/Users/IndexUsers";

import Register from "./views/Register";
import Login from "./views/Login";

import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import NavbarComponent from "./components/Inicio/Navbar";
import Inicio from "./components/Inicio/Inicio";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent/>
        <Routes>

          <Route path="/inicio" element={<Inicio />} />
          <Route path="/registro" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<IndexPublish />} />


          
          <Route path="/ver_publicacion" element={<ShowPublish />} />
          <Route path="/crear_publicacion" element={<StorePublish />} />
          <Route path="/editar_publicacion/:id" element={<UpdatePublish />} />

          <Route element={<ProtectedRoutes/>}>
          <Route path="/usuarios" element={<IndexUsers />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
