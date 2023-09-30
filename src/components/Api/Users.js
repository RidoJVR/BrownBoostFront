import axios from "axios";

const baseURLApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const postUser = (user) =>
  baseURLApi.post("registro", user);

export const getallusers =  async () => {
    const data = await baseURLApi.get("usuarios");
    return data.data;
}

