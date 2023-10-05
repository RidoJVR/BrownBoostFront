import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUser } from "../components/Api/Users";
import { useRef } from 'react';
import "../../public/css/Register.css";

function StoreUser() {
  const formRef = useRef();
  const queryClient = useQueryClient();

  const addUser = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      console.log("Su publicación se creó exitosamente");
      queryClient.invalidateQueries("publishes");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataform = new FormData(e.target);
    const user = Object.fromEntries(dataform);
    addUser.mutate({ ...user });
    formRef.current.reset();
  };

  return (
    <div className="center-box"> {/* Contenedor para centrar */}
      <div className="form-box"> {/* Cuadro del formulario */}
        <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre(s): </label>
        <input type="text" id="name" name="name" /><br/>

        <label htmlFor="lastname">Apellidos: </label>
        <input type="text" id="lastname" name="lastname" /><br/>

        <label htmlFor="address">Direccion: </label>
        <input type="text" id="address" name="address" /><br/>

        <label htmlFor="email">Correo Electronico:</label>
        <input type="text" name="email" id="email" /><br/>

        <label htmlFor="phone">Telefono:</label>
        <input type="text" name="phone" id="phone" /><br/>

        <label htmlFor="password">Contraseña:</label>
        <input type="text" name="password" id="password" /><br/>

        <label htmlFor="password_confirmation">confirmar Contraseña:</label>
        <input type="text" name="password_confirmation" id="password_confirmation" /><br/>
s
          <button className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default StoreUser;
