import axios from "axios";

const baseURLApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Debes incluir "/contacto" en las solicitudes individuales
});

export const postContacto = (contacto) =>
  baseURLApi.post("/contacto/contacto", contacto);
