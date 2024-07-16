import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:10000",
    withCredentials: true 
});

const apis = {
    getMba: () => api.get('/mabastikom'),
    getMbaByNim: (nim) => api.get(`mabastikom/${nim}`),
    create: (mabaBr) => api.post('/mabastikom', mabaBr),
    update: (nim, mabaBr) => api.put(`/mabastikom/${nim}`, mabaBr),
    delete: (nim) => api.delete(`/mabastikom/${nim}`)
};

export default apis;
