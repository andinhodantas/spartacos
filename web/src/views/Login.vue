<script>
     import { RouterLink } from 'vue-router'
     import { fazerLogin } from '../api';

     export default {
         data(){
             return{
                email: '',
                senha: ''
             }
         },

         methods: {
            async login(){

                try {
                    const loginUser = await fazerLogin(this.email, this.senha)
                    if(loginUser.status == 200){

                        // salvar o token no localstorage
                        localStorage.setItem('token', loginUser.data.token)

                        // salvar o id desse usuario tbm para que eu possa
                        // pegar informaçoes a respeito dele
                        localStorage.setItem('idUsuario', loginUser.data.idUsuarioLogado)

                        window.location.href="/paginaInicial"
                    }
                }
               
                catch (erro) {
                    alert(erro)
                }

            }
         },

         mounted(){
          
         }
         
         
     }
</script>

<template>
<div class="pagina">
    <div class="img-backgroung">
        <form>
            <h3>Login</h3>
            <div class="input-container">
                <input v-model="email" type="email" placeholder="Email">
                <img src="../../public/Secured Letter.svg" alt="">
                <!-- <i class="fa fa-envelope" style="font-size:24px;color: darkgray;"></i> -->
                
            </div>

            <div class="input-container">
                <input v-model="senha" type="password" placeholder="Senha">
                <img src="../../public/Lock.svg" alt="">
                
            </div>
            <div></div>

            <div id="button-entrar">
                
                    <button 
                    @click="login"
                    type="button">Entrar</button>
                
            </div>

            <div id="link-criar-conta">
                <RouterLink id="criar-conta" to="/cadastrarConta">Não tem uma conta? <span id="conta">Crie uma</span></RouterLink>
            </div>
       </form>
    </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lemon&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Itim&family=Lemon&display=swap');
    
    form {
        width: 90%;
        position: absolute;
        margin: 13rem auto;
    }
    
    h3 {
        font-family: 'Lemon', cursive;
        font-weight: 500;
        /* color: #941111; */
        background-image: linear-gradient(to bottom, #be0000, #c20303, #000000);
        background-clip: text;
        -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */

        /* Terceiro passo: apagar o texto, deixando apenas o fundo atrás dele */
        -webkit-text-fill-color: transparent;
        font-size: 2.3rem;
        text-align: center;
    }

    input {
        width: 80%;
        height: 1.8rem;
        border-radius: 0.5rem;
        position: relative;
       margin-left:1.3rem ;
       opacity: 70%;
       color: #000000;
       text-align:center;
       font-size: 1.3rem;
    }

    .input-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
    ::placeholder {
        font-family: 'Itim', cursive;
        color: #686868;
        font-size: 1.5rem;
        position: absolute;
        left: 2rem;
        
    }

    img {
        position: absolute;
        left: 2.8rem;
        padding-top: 0.4rem;
        width: 1.4rem;
    }

    #button-entrar {
        display: flex;
        justify-content: center;
    }
    button {
        width: 150%;
        border-radius: 0.5rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        text-decoration: none;
        font-size: 1.3rem;
        color: #686868;
    }

    

    #link-criar-conta {
        text-align: center;
        margin-top: 0.2rem;
        text-decoration: none;
    }

    #criar-conta {
        color: #FFFFFF;
        font-size: 1rem;
    }

    #conta {
        color: #E91818;
        font-size: 1rem;
    }
</style>
