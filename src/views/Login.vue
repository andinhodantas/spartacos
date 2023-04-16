<script>
     import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <p>sssh</p>
        <h1>Aqui vai ter o formulario para entar na conta</h1>
        <RouterLink to="/cadastrarConta">nao tem conta crie uma</RouterLink>
        <button>
            <RouterLink to="/paginaInicial">Entrar</RouterLink>
        </button>
    </div>
</template>