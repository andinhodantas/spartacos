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
        <img src="../../public/iconeMenu.svg" alt="">
        <img src="../../public/logo.svg" alt="" class="logo"/>
        <img src="../../public/iconeperfil.svg" alt="">
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
    

</style>
