import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
import { postUser } from "../components/Api/Users";
import { Link } from "react-router-dom";

function StoreUser() {
  const queryClient = useQueryClient();

  const addUser = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      console.log("Su publicacion se creo exitosamente");
      queryClient.invalidateQueries("publishes");
    },
  });

//   const UpdatePublishMutation = useMutation({
//     mutationFn: putPublish,
//     onSuccess: () => {
//       queryClient.invalidateQueries("publishes");
//     },
//   });

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataform = new FormData(e.target);
    const user = Object.fromEntries(dataform);

    addUser.mutate({
      ...user
    });
  };

//   const {
//     isLoading,
//     data: publishes,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["publishes"],
//     queryFn: getAllPublishes,
//     select: (publishes) => publishes.sort((a, b) => b.id - a.id),
//   });

//   if (isLoading) return <div>Loading....</div>;
//   else if (isError) return <div>Erro: {error.message}</div>;

// $table->string('name');
//             $table->string('lastname');
//             $table->string('address');
//             $table->string('email')->unique();
//             $table->string('phone');
//             $table->string('password');

  return (
    <div>
      <form onSubmit={handleSubmit}>

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

        <button className="btn btn-primary">Guardar</button>
        <Link to="/inicio" className="btn btn-success">Inicio</Link>

        {/* <div className="container table-responsive py-5">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {publishes.map((publish) => (
                <tr key={publish.id}>
                  <td>1</td>
                  <td className="text-left">{publish.title}</td>
                  <td className="text-left">{publish.description}</td>
                  <td className="text-left">{publish.price}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={publish.id}
                      checked={publish.instock}
                      onChange={(e) => {
                        UpdatePublishMutation.mutate({
                          ...publish,
                          instock: e.target.checked,
                        });
                      }}
                    />
                    <label htmlFor={publish.id}>En Existencia</label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </form>
    </div>
  );
}

export default StoreUser;
