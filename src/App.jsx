import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import IndexPublish from "./views/Publications/IndexPublish";
import ShowPublish from "./views/Publications/ShowPublish";
import StorePublish from "./views/Publications/StorePublish";
import UpdatePublish from "./views/Publications/UpdatePublish";

import IndexComments from "./components/Comments/IndexComments";
import StoreComment from "./components/Comments/StoreComments";

import PagInicio from './components/Inicio/PagInicio';

import { IndexUsers } from "./views/Users/IndexUsers";

import Register from "./views/Register";
import Login from "./views/Login";

import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/registro" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<IndexPublish />} />

          
          <Route path="/ver_publicacion" element={<ShowPublish />} />
          <Route path="/crear_publicacion" element={<StorePublish />} />
          <Route path="/editar_publicacion/:id" element={<UpdatePublish />} />

          <Route path="/comentarios" element={<IndexComments/>}/>
          <Route path="/crear_comentarios" element={<StoreComment/>}/>

          <Route element={<ProtectedRoutes/>}>
          <Route path="/usuarios" element={<IndexUsers />} />
          </Route>

          <Route path='/inicio' element={<PagInicio/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
