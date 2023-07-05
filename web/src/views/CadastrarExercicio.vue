<script>
import { RouterLink } from "vue-router";
import {cadastrarExercicio, listarTreinos} from'../api'
export default {
    data(){
        return{
            nomeExercicio:'',
            series:'',
            repeticoes:'',
            carga:'',

            // exebir exercios
            treinos: null
        }
    },
    methods: {
          async cadastrarExercicios(){

                try {    
                    const exercicio = await cadastrarExercicio(this.nomeExercicio,this.series,this.repeticoes,this.carga)
                    console.log(exercicio)
                }

                catch (erro) {
                    alert('deu errado')
                }
            },
          async listar() {
            const list = await listarTreinos()
            this.treinos = list.data
          }
        },
        mounted(){
          this.listar()
        }
    }

</script>

<template>
  <div class="pagina">
    <div>
      <header>
        <div class="cabecalho">
          <img src="../../public/iconeMenu.svg" alt="" />
          <img id="logo" src="../../public/logo.svg" alt="" />
          <img src="../../public/iconeperfil.svg" alt="" />
        </div>
      </header>
      <menu class="imgCardTreino">
               <img src="../../public/imgTreino.svg" alt="">
            <!-- imagem de fundo -->
           </menu>
    </div>
    <form>
      <h3>Cadastrar exercício</h3>
      <hr />
      
      <div class="formulario">

        <div class="input-container">
          <label for="id_nome_treino">Nome do treino: </label>
          <select>
            <option 
              v-for="treino in treinos"
               :key="treino.nome" 
               :value="treino.nome">
                {{ treino.nome }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="id_nome_exe">Nome do execício: </label>
          <input type="text" id="id_nome_exe" v-model="nomeExercicio" />
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

      <button
      @click="cadastrarExercicios">
        
        <RouterLink   to="/cadastrarExercicio">Cadastrar exercicio</RouterLink>
      </button>
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
  margin:  0 5rem;
  font-size: 1.3rem;
  margin: 0 2rem ;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

form select {
  border: 0;
  border-radius: 0.5rem;
  position: relative;
  margin:  0 5rem;
  font-size: 1.3rem;
  margin: 0 2rem ;
  text-align: center;
  width: 74%;
  padding: 0.1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

input:focus, select:focus {
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
h4{
    
width: 183px;
height: 19px;
left: 39px;
top: 360px;

font-family: 'Itim';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-align: center;

color: #E6E2E2;

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

/* select {
  width: 11rem;
  height: 1.8rem;
  border-radius: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
} */

button {
  background-color: #e5e2e2;
  border: 0;
  border-radius: 0.5rem;
  width: 75%;
  display: flex;
  justify-content: center;
  margin: 1.5rem auto;
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
menu img{
  height: 13%;
  margin: 0 2rem;
}
</style>