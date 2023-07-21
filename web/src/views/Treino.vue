<script>
import { listarExercicios } from '../api';

export default {
  data() {
    return {
      exercicios: null,
    };
  },
  methods: {
    async exibirExercios() {
      try {
        const idUsuario = localStorage.getItem("idUsuario");
        const response = await listarExercicios(idUsuario);
        this.exercicios = response.data;
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    },
    async voltar(){
      this.$router.go(-1);
      },

      

async  logout(){
  localStorage.removeItem('token')
  location.href = "/";
}
  },
  
  mounted() {
    this.exibirExercios();
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
        <img src="../../public/logo.svg" alt="" class="logo"/>
        <button @click="logout" class="voltar">
          sair 
        </button>
      </div>
    </header>
    <div class="menu">
    <div>
      <h1>Meus treinos</h1>
        </div>
        <div v-for="treino in exercicios" :key="treino.Nome_Treino" class="card">
          <h1>{{ treino.Nome_Treino }}</h1>
          <table>
            <tr>
              <th>Exercicio</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Carga</th>
            </tr>
            <tr v-for="(exercicio, index) in treino.Nomes_Exercicios.split(',')" :key="index">
              <td>{{ exercicio }}</td>
              <td>{{ treino.Series.split(',')[index] }}</td>
              <td>{{ treino.Repeticoes.split(',')[index] }}</td>
              <td>{{ treino.Cargas.split(',')[index] }}</td>
            </tr>
          </table>
        </div>
      </div>
  </div>
</template>
<style scoped>
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

border-bottom: 1.5px solid #FFFFFF;
}
header img{
  
  height: 3rem;
}
.logo{
  height: 4.5rem;
}
.menu{
    color: #e5e2e2;
    font-family: 'Itim';
    font-style: normal;
}
.menu div:nth-child(1){
    
    background-color:#525151 ;
    border-radius:0.2rem ;
    text-align: center;
    
    width: 13rem;
    margin: 0 auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
}
.menu h1{
    
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    
}
.menu div.card{
    border-radius: 0.2rem;
    background-color:#525151 ;
    padding: 0;
} 

table{
    margin: 0 auto;
}
th{
    padding:0  0.7rem;
}
td{
    padding: 0.2rem 1rem;
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
.foto{
  margin:1rem 0;
}
i{
    font-size:25px;
}
    

</style>
