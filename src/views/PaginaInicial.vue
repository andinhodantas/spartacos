<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="box">
    <header>
      <div class="cabecalho">
        <img src="../../public/iconeMenu.svg" alt="">
        <img src="../../public/logo.svg" alt="" />
        <img src="../../public/iconeperfil.svg" alt="">
      </div>
    </header>
    <menu>
    <RouterLink to="/cadastrarTreino">criar treino</RouterLink>
    <br />
    <RouterLink to="/treino">treino</RouterLink>
    </menu>
  </div>
</template>

<style scoped>
.cabecalho {
  margin: 0 auto;  
  text-align: center;
  display: flex;
  gap: 30px;
  
}

</style>