<script>
import { RouterLink } from "vue-router";
import { cadastrarExercicio, listarTreinos } from "../api";
export default {
  data() {
    return {
      nomeTreino: "",
      nomeExercicio: "",
      series: "",
      repeticoes: "",
      carga: "",

      // exebir exercios
      treinos: null,
    };
  },
  methods: {
    async voltar() {
      this.$router.go(-1);
    },
    async cadastrarExercicios() {
      try {
        const exercicio = await cadastrarExercicio(
          this.nomeTreino,
          this.nomeExercicio,
          this.repeticoes,
          this.series
        );

        if (
          (exercicio.status == 201 && this.nomeTreino,
          this.nomeExercicio,
          this.carga,
          this.repeticoes,
          this.series)
        ) {
          location.href = "/treino";
          var resultado = confirm(
            "Exercicio cadastrado \n Quer adicionar mais algum exercicio?"
          );
          if (resultado) {
            console.log("entrou aqui");
            location.href = "/cadastrarExercicio";
          }
        } else {
          alert("Preencha todos os campos corretamente e tente novamente");
        }
      } catch (erro) {
        alert("Esse exercício já foi cadastrado nesse treino!");
      }
    },
    async listar() {
      const list = await listarTreinos();
      this.treinos = list.data;
    },
    async logout() {
      localStorage.removeItem("token");
      location.href = "/";
    },
  },
  mounted() {
    this.listar();
  },
};
</script>

<template>
  <div class="pagina">
    <div>
      <header>
        <div class="cabecalho">
          <RouterLink to="/paginaInicial">
            <button class="voltar">
              <i class="fa fa-arrow-left"></i></button
          ></RouterLink>
          <img id="logo" src="../../public/logo.svg" alt="" />
          <button @click="logout" class="voltar">sair</button>
        </div>
      </header>
      <menu class="imgCardTreino">
        <img src="../../public/imgTreino.svg" alt="" />
        <!-- imagem de fundo -->
      </menu>
    </div>
    <form>
      <h3>Cadastrar exercício</h3>
      <hr />

      <div class="formulario">
        <div class="input-container">
          <label for="id_nome_treino">Nome do treino: </label>
          <select v-model="nomeTreino">
            <option v-for="treino in treinos" :key="treino.nome" :value="treino.nome">
              {{ treino.nome }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="id_nome_exe">Nome do execício: </label>
          <input type="text" id="id_nome_exe" v-model="nomeExercicio" requerid />
        </div>

        <div class="input-container">
          <label for="id_n_series">Número de séries: </label>
          <input type="number" id="id_n_series" v-model="series" />
        </div>

        <div class="input-container">
          <label for="id_repeticoes">Repetições: </label>
          <input type="number" id="id_repeticoes" v-model="repeticoes" />
        </div>

        <div class="input-container">
          <label for="id_carga">Carga: </label>
          <input type="text" id="id_carga" v-model="carga" />
        </div>
      </div>

      <button @click="cadastrarExercicios" class="cadastrar">Cadastrar exercicio</button>
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
  justify-content: space-between;
  border-bottom: 1.5px solid #ffffff;
}

.cabecalho img {
  /* width: 3rem; */
  height: 3rem;
  margin-bottom: 0.6rem;
}

#logo {
  height: 4.5rem;
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

form input {
  border: 0;
  border-radius: 0.5rem;
  position: relative;
  margin: 0 5rem;
  font-size: 1.3rem;
  margin: 0 2rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

form select {
  border: 0;
  border-radius: 0.5rem;
  position: relative;
  margin: 0 5rem;
  font-size: 1.3rem;
  margin: 0 2rem;
  text-align: center;
  width: 74%;
  padding: 0.1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

input:focus,
select:focus {
  box-shadow: 1px 1px 15px 1px;
  border: 1px solid #52515150;
  outline: 0;
}

h3 {
  color: #e5e2e2da;
  font-family: "Itim";
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 0.6rem;
}
h4 {
  width: 183px;
  height: 19px;
  left: 39px;
  top: 360px;

  font-family: "Itim";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #e6e2e2;
}

hr {
  border: 1px solid #e5e2e273;
  background-color: #e5e2e273;
  height: -1px;
  width: 72%;
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

label {
  font-family: "Itim";
  font-size: 1.6rem;
  line-height: 2rem;
  color: #e6e2e2;
  font-weight: 400;
  margin-left: 0.8rem;
}

.cadastrar {
  background-color: #e5e2e2;
  border: 0;
  border-radius: 0.5rem;
  width: 75%;
  display: flex;
  justify-content: center;
  margin: 1.5rem auto;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  text-decoration: none;
  font-family: "Itim";
  font-style: normal;
  font-weight: 200;
  font-size: 1.5rem;
  color: #525151;
}
.input-container {
  margin-left: 0.8rem;
}

menu img {
  height: 13%;
  margin: 0 3rem;
}
.voltar {
  margin: 1rem 0.5rem;
  width: 60px;
  color: #525151;
  height: 40px;
  border-radius: 0.8rem;
  font-size: 1.2rem;
}
i {
  font-size: 25px;
}
.foto {
  margin: 1rem 0;
}
</style>
