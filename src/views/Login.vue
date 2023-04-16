<script>
     import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="img-backgroung">
        <form>
            <h3>Login</h3>
            <div class="input-container">
                <input type="email" value="">
                <!-- <img src="../../public/Secured Letter.svg" alt=""> -->
                <i class="fa fa-envelope" style="font-size:24px;color: darkgray;"></i>
                <span>Email</span>
            </div>

            <div class="input-container">
                <input type="password" value="">
                <img src="../../public/Lock.svg" alt="">
                <span>Senha</span>
            </div>

            <button type="button">
                <RouterLink to="/paginaInicial">Entrar</RouterLink>
            </button>
            <RouterLink to="/cadastrarConta">nao tem uma conta? crie uma</RouterLink>
        
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
        color: red;
        font-size: 2.8rem;
        text-align: center;
    }

    input {
        width: 80%;
        height: 1.7rem;
        border-radius: 1rem;
    }
    span {
        font-family: 'Itim', cursive;
        color: darkgray;
    }
</style>
