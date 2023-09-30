import axios from "axios";

const apiurl = axios.create({
    url: "http://127.0.0.1:8000/api/inventario/1",
});

export const getallinventario = async () => {
    const data = await apiurl.get('/');
    return data.data;

}