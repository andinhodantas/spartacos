<script>
     import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="pagina">
        <div >
            <header>
                <div class="cabecalho">
                    <img src="../../public/iconeMenu.svg" alt="">
                    <img src="../../public/logo.svg" alt="" />
                    <img src="../../public/iconeperfil.svg" alt="">
                </div>
            </header>
           <menu class="imgCardTreino">
               <img src="../../public/imgTreino.svg" alt="">
            <!-- imagem de fundo -->
           </menu>
        </div>
        <form>
            <h3>Cadastrar treino</h3>
            <hr>
            <div class="select-treino">
                <label for="nome_trino">Nome do treino:</label>
                <input type="text" value="" placeholder="______________________">
            </div>

            <button>
                <RouterLink to="/cadastrarExercicio">cadastrar exercicio</RouterLink>
            </button>
        </form>
       
    </div>
</template>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Itim&family=Lemon&display=swap');
 
    .cabecalho {
        margin: 0 auto;  
        width: 100%;
        text-align: center;
        display: flex;
        /* gap: 3rem; */
        /* grid-gap: 3rem; */
        justify-content: space-between;
        border-bottom: 0.1rem solid #ffffff98 ;
}

form {
    background-color: #525151;
    width: 95%;
    margin: auto;  
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.5rem;
}

h3 {
    color: #e5e2e2da;
    font-family: 'Itim';
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 0.6rem;
}

hr {
    border: 1px solid #e5e2e273;
    background-color: #e5e2e273;
    height: -1px;
    width: 58%;
    margin-top: -1rem;
    border-radius: 0.5rem;
}


.select-treino {
    display: flex;
    height: auto;
    align-items: center;
    margin-top: 2rem;
    grid-gap: 0.5rem;
}
.select-treino input{
    border-radius: 0.7rem;
    text-align: center;
}

label {
    font-family: 'Itim';
    font-size: 1.2rem;
    line-height: 2rem;
    color: #E6E2E2;
    font-weight: 400;
    margin-left: 0.8rem;
}

select {
    width: 11rem;
    height: 1.8rem;
    border-radius: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
}
menu img{
  height: 20rem;
}

button {
    background-color: #E5E2E2;
    border: 0;
    border-radius: 0.5rem;
    width: 75%;
    display: flex;
    justify-content: center;
    margin: 2.2rem auto;
    padding-bottom: 0.4rem;
    padding-top: 0.4rem;
}

a {
    text-decoration: none;
    font-family: 'Itim';
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    color: #525151;
}


</style>