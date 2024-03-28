<template>
    <div>
      <h1>Page du film {{ movie.titre }}</h1>
      <p>Description: {{ movie.description }}</p>
      <p>Date de sortie: {{ movie.date_de_sortie }}</p>
      <p>Réalisateur: {{ movie.realisateur }}</p>
      <p>Acteurs: {{ movie.acteurs.join(', ') }}</p>
      <p>Genre: {{ movie.genre.join(', ') }}</p>
    </div>
  </template>
  <script>
  import moviesData from '~/static/movies.json';
  
  export default {
    data() {
      return {
        movie: null
      };
    },
    async created() {
      // Récupérer l'ID du film à partir de la route
      const movieId = this.$route.params.id;
  
      // Rechercher le film correspondant dans la liste de films
      this.movie = moviesData.find(movie => movie.id === parseInt(movieId));
    }
  }
  </script>