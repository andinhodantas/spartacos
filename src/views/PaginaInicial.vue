<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="pagina" >
    <header>
      <div class="cabecalho">
        <img src="../../public/iconeMenu.svg" alt="">
        <img src="../../public/logo.svg" alt="" class="logo"/>
        <img src="../../public/iconeperfil.svg" alt="">
      </div>
    </header>
    <menu>
      <img src="../../public/imgTreino.svg" alt="">
      <br>
    <button><RouterLink to="/treino">Meus Treinos</RouterLink></button>
    <br />
    <button><RouterLink to="/cadastrarTreino">Criar Treino</RouterLink></button>
    
    </menu>
  </div>
</template>

<style scoped>
@media(max-width:500px){
  .pagina{
    margin: none;
    
  }
}
.pagina{
  width: 22.5rem;
  margin: 0 auto;
  background-color: black;
  height: 100vh;
}
.cabecalho {
  margin: 0 auto;  
  text-align: center;
  display: flex;
  gap: 3rem;
}
header {
  height: 5rem;
  left: 0px;
  top: 93px;

border-bottom: 1.5px solid #FFFFFF;
}
header img{
  
  height: 3rem;
}
.logo{
  height: 4.5rem;
}
menu img{
  height: 20rem;
}
button{
  background-color: #525151;
  
  width: 250px;
  height: 51px;
  left: 55px;
  top: 420px;
  border-radius: 8px;
  margin: 1rem 1rem;
  
}
a{
  color: #e5e2e2;
  text-decoration: none;
  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  
  
}

</style>