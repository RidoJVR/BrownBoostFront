import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReviews, getReviews, putReviews } from "../Api/reviews";
import { useQuery } from "@tanstack/react-query";

function StoreComment() {
  const queryClient = useQueryClient();

  const addPublish = useMutation({
    mutationFn: postReviews,
    onSuccess: () => {
      console.log("Su comentario se publico exitosamente");
      queryClient.invalidateQueries("comments");
    },
  });

  const UpdatePublishMutation = useMutation({
    mutationFn: putReviews,
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataform = new FormData(e.target);
    const publish = Object.fromEntries(dataform);

    addPublish.mutate({ 
      ...publish,
      instock: true,
    });
  };

  const {
    isLoading,
    data: publishes,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: getReviews,
    select: (publishes) => publishes.sort((a, b) => b.id - a.id),
  });

  if (isLoading) return <div>Loading....</div>;
  else if (isError) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Titulo:</label>
        <input type="text" id="comment" name="comment" />

        <label htmlFor="qualifitation">Descripcion</label>
        <input type="double" id="qualification" name="qualification" />

        <button className="btn btn-primary">Guardar</button>

        <div className="container table-responsive py-5">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">comentario</th>
                <th scope="col">calificacion</th>
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
        </div>
      </form>
    </div>
  );
}

export default StoreComment;
