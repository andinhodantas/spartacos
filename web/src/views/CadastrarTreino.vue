<script>
import { RouterLink } from "vue-router";
import { cadastrarTreino } from "../api";

export default {
  data() {
    return {
      nomeTreino: "",
      id: null,
    };
  },

  methods: {
    async cadastrar() {
      try {
        this.id = localStorage.getItem("idUsuario");
        const treino = await cadastrarTreino(this.nomeTreino, this.id);
        if (treino.status == 200) {
          window.location.href = "/cadastrarExercicio";
          alert("Treino cadastrado");
        }
      } catch (erro) {
        alert("Dados invalidos");
      }
    },
    async voltar() {
      this.$router.go(-1);
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
    <div>
      <header>
        <div class="cabecalho">
          <RouterLink to="/paginaInicial"
            ><button class="voltar">
              <i class="fa fa-arrow-left"></i></button
          ></RouterLink>
          <img src="../../public/logo.svg" alt="" class="logo" />
          <button @click="logout" class="voltar">sair</button>
        </div>
      </header>
      <menu class="imgCardTreino">
        <img src="../../public/imgTreino.svg" alt="" />
        <!-- imagem de fundo -->
      </menu>
    </div>
    <form>
      <h3>Cadastrar treino</h3>
      <hr />
      <div class="select-treino">
        <label for="nome_treino">Nome do treino:</label>
        <input type="text" v-model="nomeTreino" placeholder="______________________" />
      </div>

      <button @click="cadastrar" class="cadastrar">cadastrar treino</button>
    </form>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Itim&family=Lemon&display=swap");

.cabecalho {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  display: flex;
  /* gap: 3rem; */
  /* grid-gap: 3rem; */
  justify-content: space-between;
  
}
header {
  height: 5rem;
  left: 0px;
  top: 93px;
  border-bottom: 1.5px solid #ffffff;
}
header img {
  height: 3rem;
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
  font-family: "Itim";
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
.select-treino input {
  border-radius: 0.7rem;
  text-align: center;
}

label {
  font-family: "Itim";
  font-size: 1.2rem;
  line-height: 2rem;
  color: #e6e2e2;
  font-weight: 400;
  margin-left: 0.8rem;
}

/* select {
    width: 11rem;
    height: 1.8rem;
    border-radius: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
} */

menu img {
  height: 20rem;
  margin: 0 auto;
}

.cadastrar {
  background-color: #e5e2e2;
  border: 0;
  border-radius: 0.5rem;
  width: 75%;
  display: flex;
  justify-content: center;
  margin: 2.2rem auto;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  text-decoration: none;
  font-family: "Itim";
  font-style: normal;
  font-weight: 200;
  font-size: 1.5rem;
  color: #525151;
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
.logo {
  height: 4.5rem;
}
</style>
