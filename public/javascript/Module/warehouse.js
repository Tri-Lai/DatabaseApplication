import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.0/+esm';
const port = 3000;
const API_URL = `http://localhost:${port}`;
const warehouse = {
    async create(user_credential, query) {
    const response = await axios.post(`${API_URL}/warehouse/create`, {
        user_credential: user_credential,
        query: query
    });
    return response;
    },
    async search(user_credential, query) {
    const response = await axios.post(`${API_URL}/warehouse/search`, {
        user_credential: user_credential,
        query: query
    });
    return response;
    },
    async findAll(user_credential, query) {
    const response = await axios.post(`${API_URL}/warehouse/findAll`, {
        user_credential: user_credential,
        query: query
    });
    return response;
    },
    async update(user_credential, query) {
    const response = await axios.post(`${API_URL}/warehouse/update`, {
        user_credential: user_credential,
        query: query
    });
    return response;
    },
    async delete(user_credential, query) {
        const response = await axios.post(`${API_URL}/warehouse/delete`, {
            user_credential: user_credential,
            query: query
        }); 
        return response.data;
    },
    
};
export default warehouse;
