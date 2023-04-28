import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    });


const cadastrarUsuario = async (nome, email, senha) => {
    return await api.post('/cadastrarUsuario', {
        nome: nome,
        email: email,
        senha: senha
    })
}


const fazerLogin = async (email, senha) => {
    return await api.post('/login', {
        email: email,
        senha: senha
    })
}

const cadastrarTreino = async (nomeTreino) => {
    return await api.post('/cadastrarTreino', {
        treino: nomeTreino 
    })
}



export{
    cadastrarUsuario,
    fazerLogin,
    cadastrarTreino
}