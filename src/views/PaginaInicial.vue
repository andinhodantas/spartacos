<script>
     import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <h1>Aqui vai ter o botao de criar treino e ver treino</h1>
        <RouterLink to="/cadastrarTreino">criar treino</RouterLink>
        <br>
        <RouterLink to="/treino">treino</RouterLink>
    </div>
</template>