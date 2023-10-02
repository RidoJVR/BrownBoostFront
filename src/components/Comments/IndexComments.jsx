import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReviews, getReviews } from "../Api/reviews";
import { useQuery } from "@tanstack/react-query";
import "../../../public/css/Publish.css";
import {Link} from 'react-router-dom'

function IndexComments() {

  const queryClient = useQueryClient()

  const {
    isLoading,
    data: reviews,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: getReviews,
    select: (reviews) => reviews.sort((a, b) => b.id - a.id),
  });

  const destroyPublish = useMutation({
    mutationFn: deleteReviews,
    onSuccess: ()=>{
      queryClient.invalidateQueries('publishes')
    }
  });

  if (isLoading) return <div>Loading....</div>;
  else if (isError) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <div> 
        <Link to="/crear_publicacion" className="btn btn-success">Crear</Link>
      </div>
      <div className="table-title">
        <h3>Comments Table</h3>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Comentario</th>
            <th className="text-left">Calificacion</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {reviews.map((publish) => (
            <tr key={publish.id}>
              <td className="text-left">{reviews.title}</td>
              <td className="text-left">{reviews.b}</td>
              <td className="text-left">{reviews.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    destroyPublish.mutate(publish.id);
                  }}
                >
                  Elimnar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IndexComments;
