import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});


export const checkToken = () => {
    return localStorage.getItem('token')
}

export const validarToken = async (token) => {
    const bearerToken = 'Bearer ' + token
    
    return await api.post('validarToken', {}, {
        headers: {
            'Authorization': bearerToken
        }
    })
}