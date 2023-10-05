// import '../../../public/css/Publish.css'
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
import { postcomment } from "../../components/Api/Publications";
import {useState} from 'react';
import "../../../public/css/Publish.css";

function ShowPublish() {

  const queryClient = useQueryClient();

  const [showForm, setShowForm] = useState(false);

  const addUser = useMutation({
    mutationFn: postcomment,
    onSuccess: () => {
      console.log("Su publicacion se creo exitosamente");
      queryClient.invalidateQueries("comment");
    },
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    const dataform = new FormData(e.target);
    const comment = Object.fromEntries(dataform);

    addUser.mutate({
      ...comment
    });
  };


  return (
    <div>
      <div className="blog-card spring-fever">
        <div className="title-content">
          <h3>
            <a href="#">BronwnBost</a>
          </h3>
          <div className="intro">
            <a href="#">El poder en una mordida</a>{" "}
          </div>
        </div>
        
        
        <div className="gradient-overlay"></div>

        <div className="color-overlay"></div>
      </div>

      {showForm ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Comentario: </label>
            <input type="text" id="comment" name="comment" />
            <br />

            <label htmlFor="qualification">Calificación: </label>
            <input type="text" id="qualification" name="qualification" />
            <br />

            <button className="btn btn-primary">Guardar</button>
          </form>
        </div>
      ) : (
        <div className="boton-comentario">
        <button className="btn btn-success" onClick={() => setShowForm(true)}>
          Crear Publicación
        </button>
        </div>
      )}
    </div>
  );
}

export default ShowPublish;
