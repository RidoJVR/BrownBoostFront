import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePublish, getAllPublishes } from "../../components/Api/Publications";
import { useQuery } from "@tanstack/react-query";
import "../../../public/css/Publish.css";
import { Link } from 'react-router-dom'

function IndexPublish() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: publishes,
    isError,
    error,
  } = useQuery({
    queryKey: ["publishes"],
    queryFn: getAllPublishes,
    select: (publishes) => publishes.sort((a, b) => b.id - a.id),
  });

  const destroyPublish = useMutation({
    mutationFn: deletePublish,
    onSuccess: () => {
      queryClient.invalidateQueries('publishes');
    },
  });

  if (isLoading) return <div>Loading....</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container-pub">
      <div className="table-title">
        <h3>Data Table</h3>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Nombre</th>
            <th className="text-left">Descripcion</th>
            <th className="text-left">Precio</th>
            <th className="text-left">Opciones</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {publishes.map((publish) => (
            <tr key={publish.id}>
              <td className="text-left">{publish.title}</td>
              <td className="text-left">{publish.description}</td>
              <td className="text-left">{publish.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    destroyPublish.mutate(publish.id);
                  }}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    // Coloca aquí la lógica para editar
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="boton">
        <Link to="/crear_publicacion" className="btn btn-success create-button">
          Crear
        </Link>
      </div>
    </div>
  );
}

export default IndexPublish;
