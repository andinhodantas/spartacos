import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    });

const testar = async()=>{
    const teste = await api.get('/usuario/validar')
    console.log(teste)
    
} 
export{
    testar
}