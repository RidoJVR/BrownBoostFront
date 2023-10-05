import React, { useState } from "react";

function ContactForm() {
  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Manejar el envío del formulario (no hace nada)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar código para enviar los datos a un servidor o realizar otras acciones si es necesario
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
