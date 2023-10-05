//import "../../../pubic/css/Modal.css"

function Modal({ show, onCLose, onSubmit}){
    if (!show) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        onClose();
    };

    return (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <h2>Crear Publicación</h2>
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
        </div>
      );
}

export default Modal;