<script>
     import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="img-backgroung">
        <form>
            <h3>Login</h3>
            <div class="input-container">
                <input type="email" value="">
                <img src="../../public/Secured Letter.svg" alt="">
                <!-- <i class="fa fa-envelope" style="font-size:24px;color: darkgray;"></i> -->
                <span class="label">Email</span>
            </div>

            <div class="input-container">
                <input type="password" value="">
                <img src="../../public/Lock.svg" alt="">
                <span class="label">Senha</span>
            </div>
            <div></div>

            <div id="button-entrar">
                <button type="button">
                    <RouterLink to="/paginaInicial">Entrar</RouterLink>
                </button>
            </div>

            <div id="link-criar-conta">
                <RouterLink id="criar-conta" to="/cadastrarConta">nao tem uma conta? <span id="conta">crie uma</span></RouterLink>
            </div>
       </form>
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
        color: #941111;
        font-size: 2.3rem;
        text-align: center;
    }

    input {
        width: 80%;
        height: 1.8rem;
        border-radius: 0.5rem;
        position: relative;
    }

    .input-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
    .label {
        font-family: 'Itim', cursive;
        color: #686868;
        font-size: 1.5rem;
        position: absolute;
        left: 4.8rem;
        padding-top: 0.2rem;
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
        width: 60%;
        border-radius: 0.5rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }

    a {
        text-decoration: none;
        font-size: 1.3rem;
        color: #686868;
    }

    #link-criar-conta {
        margin-left: 23vw;
        margin-top: 0.2rem;
        /* text-align: center; */
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
