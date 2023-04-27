<script>
     import { RouterLink } from 'vue-router'
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
    <div class="menu">
        <div>
            <h1>Meus treinos</h1>
        </div>
        <div class="card">
            <h1>Treino A:</h1>
            <table>
                <tr>
                    <th>Exercicio</th>
                    <th>Séries</th>
                    <th>Repetições</th>
                    <th>Carga</th>
                </tr>
                <tr>
                    <td>Supino reto</td>
                    <td>3</td>
                    <td>15</td>
                    <td>15kg</td>
                </tr>
                <tr>
                    <td>Crossover</td>
                    <td>3</td>
                    <td>15</td>
                    <td>15kg</td>
                </tr>
                <tr>
                    <td>Puley</td>
                    <td>2</td>
                    <td>12</td>
                    <td>20kg</td>
                </tr>
            </table>

        </div>
        <div class="card">
            <h1>Treino B:</h1>
            <table>
                <tr>
                    <th>Exercicio</th>
                    <th>Séries</th>
                    <th>Repetições</th>
                    <th>Carga</th>
                </tr>
                <tr>
                    <td>Leg press</td>
                    <td>3</td>
                    <td>15</td>
                    <td>30kg</td>
                </tr>
                <tr>
                    <td>Adutor</td>
                    <td>3</td>
                    <td>15</td>
                    <td>25kg</td>
                </tr>
                <tr>
                    <td>Cadeira extensora</td>
                    <td>2</td>
                    <td>12</td>
                    <td>20kg</td>
                </tr>
            </table>

        </div>
        <div class="card">
            <h1>Treino c:</h1>
            <table>
                <tr>
                    <th>Exercicio</th>
                    <th>Séries</th>
                    <th>Repetições</th>
                    <th>Carga</th>
                </tr>
                <tr>
                    <td>Triceps Francês</td>
                    <td>3</td>
                    <td>15</td>
                    <td>30kg</td>
                </tr>
                <tr>
                    <td>Banco Scott</td>
                    <td>3</td>
                    <td>15</td>
                    <td>25kg</td>
                </tr>
                <tr>
                    <td>Triceps Testa</td>
                    <td>3</td>
                    <td>10</td>
                    <td>20kg</td>
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