import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.0/+esm';
const port = 3000;
const API_URL = `http://localhost:${port}`;
const category = {
    async search(query) {
        console.log(query);
        const response = await axios.post(`${API_URL}/category/search`, query);
        return response;
    },
    async findAll(user_credential, query) {
    const response = await axios.post(`${API_URL}/warehouse/findAll`, {
        user_credential: user_credential,
        query: query
    });
    return response;
    },
    async update(category) {
        const response = await axios.post(`${API_URL}/category/update`, category);
        return response;
    },
    async delete(category) {
        const response = await axios.post(`${API_URL}/category/delete`, category); 
        return response;
    },
    async create(category) {
        const response = await axios.post(`${API_URL}/category/create`, category); 
        return response;
    },
    async searchByName(query) {
        const response = await axios.post(`${API_URL}/category/searchByName`, query); 
        return response;
    },
};
export default category;
