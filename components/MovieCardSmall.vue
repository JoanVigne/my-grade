<template>
    <NuxtLink :to="`/content/${movie.id}`">
  <li class="movie-card">
    <h2>{{ movie.titre }}</h2>
    <p>Date de sortie: {{ movie.date_de_sortie }}</p>
    <p>Réalisateur: {{ movie.realisateur }}</p>
    <p>Acteurs: {{ movie.acteurs.join(', ') }}</p>
    <p>Genre: {{ movie.genre.join(', ') }}</p>
  </li>
</NuxtLink>
</template>   

<script>
export default {
props: {
  movie: {
    type: Object,
    required: true
  }
}
}
</script>


<style scoped>
.movie-card {
background-color: #f0f0f0;
padding: 20px;
margin-bottom: 20px;
width: 300px;
}
</style>