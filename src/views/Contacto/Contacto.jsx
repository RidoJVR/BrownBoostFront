import React, { useState } from "react";
import { postContacto } from "../../components/Api/Contacto";

function Contacto() {
  const [formData, setFormData] = useState({
    Nombre: "",
    Telefono: "",
    Correo: "",
    Mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postContacto(formData); // Utiliza la función postContacto para enviar los datos
      console.log(response);
      if (response.status === 200) {
        console.log("Mensaje enviado con éxito");
        // Puedes mostrar un mensaje de confirmación aquí
      } else {
        console.error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje", error);
    }
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nombre">Nombre:</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Telefono">Teléfono:</label>
          <input
            type="text"
            id="Telefono"
            name="Telefono"
            value={formData.Telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Correo">Correo Electrónico:</label>
          <input
            type="email"
            id="Correo"
            name="Correo"
            value={formData.Correo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Mensaje">Mensaje:</label>
          <textarea
            id="Mensaje"
            name="Mensaje"
            value={formData.Mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
