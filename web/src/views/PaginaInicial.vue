<script>
import { RouterLink } from "vue-router";

export default {
  methods: {
    async voltar() {
      window.history.back();
    },
    async logout() {
      localStorage.removeItem("token");
      location.href = "/";
    },
  },
};
</script>

<template>
  <div class="pagina">
    <header>
      <div class="cabecalho">
        <button @click="voltar" class="voltar">
          <i class="fa fa-arrow-left"></i>
        </button>
        <img src="../../public/logo.svg" alt="" class="logo" />
        <button @click="logout" class="voltar">sair</button>
      </div>
    </header>
    <menu>
      <img src="../../public/imgTreino.svg" alt="" />
      <br />
      <RouterLink to="/treino"><button class="botao">Meus Treinos</button></RouterLink>
      <br />
      <RouterLink to="/cadastrarTreino"
        ><button class="botao">Criar Treino</button></RouterLink
      >
      <br />
      <RouterLink to="/cadastrarExercicio"
        ><button class="botao">Criar Exercícios</button></RouterLink
      >
    </menu>
  </div>
</template>

<style scoped>
@media (max-width: 500px) {
  .pagina {
    margin: none;
  }
}
.pagina {
  width: 22.5rem;
  margin: 0 auto;
  background-color: black;
  height: 100vh;
}
.cabecalho {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  display: flex;
  /* gap: 3rem; */
  /* grid-gap: 3rem; */
  justify-content: space-between;
  
}header {
  height: 5rem;
  left: 0px;
  top: 93px;

  border-bottom: 1.5px solid #ffffff;
}
header img {
  height: 3rem;
}
.logo {
  height: 4.5rem;
}
menu img {
  height: 15rem;
  margin-left: 1rem;
}
.botao {
  background-color: #525151;

  width: 250px;
  height: 51px;
  /* padding: 22px 125px 22px 125px; */
  left: 55px;
  top: 420px;
  border-radius: 8px;
  margin: 1rem 1rem;
  color: #e5e2e2;
  text-decoration: none;
  font-family: "Itim";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
}
.voltar {
  margin: 1rem 0.5rem;
  width: 60px;
  color: #525151;
  height: 40px;
  border-radius: 0.8rem;
  font-size: 1.2rem;
}
.foto {
  margin: 1rem 0;
}
i {
  font-size: 25px;
}
</style>
