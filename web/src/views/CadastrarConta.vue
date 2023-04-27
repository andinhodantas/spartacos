<script>
    import { RouterLink } from 'vue-router'
</script>

<template>
<div class="pagina">
    <div class="img-backgroung">
        <form>
            <h3>Cadastra-se</h3>

            <div class="input-container">
                <input type="text" placeholder="Nome" value="" >
                <img src="../../public/User.svg" alt="">
                <!-- <i class="fa fa-envelope" style="font-size:24px;color: darkgray;"></i> -->
                
            </div>

            <div class="input-container">
                <input type="email" value="" placeholder="Email">
                <img src="../../public/Secured Letter.svg" alt="">
                <!-- <i class="fa fa-envelope" style="font-size:24px;color: darkgray;"></i> -->
            </div>

            <div class="input-container">
                <input type="password" value="" placeholder="Senha">
                <img src="../../public/Lock.svg" alt="">
            </div>
            <div></div>

            <div id="button-entrar">
                
                    <RouterLink to="/"><button type="button">Cadastre-se</button></RouterLink>
                
            </div>

            <div id="link-criar-conta">
                <RouterLink id="criar-conta" to="/">Já possui cadastro? <span id="conta">Login</span></RouterLink>
                <br>
       <!-- kskks -->
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
        font-size: 2rem;
        text-align: center;
    }

    input {
        width: 80%;
        height: 1.8rem;
        border-radius: 0.5rem;
        position: relative;
        margin-left: 1rem;
        opacity: 70%;
        text-align: center;
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
        left: 2.5rem;
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
        width: 120%;
        border-radius: 0.5rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }

    a button{
        text-decoration: none;
        font-size: 1.3rem;
        color: #686868;
    }

    #link-criar-conta {
        
        margin-top: 0.2rem;
        text-align: center;
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
