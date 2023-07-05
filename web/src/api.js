import axios from "axios";
import { checkToken } from "../autenticacao";

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
 
const cadastrarTreino = async (nomeTreino, id) => {
    const bearerToken = 'Bearer ' + checkToken()

    return await api.post('/cadastrarTreino', {
        treino: nomeTreino,
        id: id
    },
    {
        headers: {
                Authorization: bearerToken
            }
    }
    )
}
const cadastrarExercicio = async (treino, nome, carga, rep, serie) => {
    const bearerToken = 'Bearer ' + checkToken()

    const idUser = localStorage.getItem("idUsuario")

    return await api.post('/cadastrarExercicio', {
        treino: treino,
	    nome: nome,
	    carga: carga,
	    rep: rep,
	    serie: serie,
	    idUsuario: idUser
    },
    {
        headers: {
                Authorization: bearerToken
            }
        })
}

const listarTreinos = async () => {
    const bearerToken = 'Bearer ' + checkToken()
    return api.get('/listarTreinos', {
        headers: {
            Authorization: bearerToken
        }
    })
}



export{
    cadastrarUsuario,
    fazerLogin,
    cadastrarTreino,
    cadastrarExercicio,
    listarTreinos
}