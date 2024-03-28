<template>
    <div>
        <h1>HOME PAGE INDEX.VUE</h1>
        <div v-if="movies">
            <ul>
                <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
              <!--   <li v-for="movie in movies" :key="movie.titre">
                    <h2>{{ movie.titre }}</h2>
                    <p>{{ movie.description }}</p>
                    <p>Date de sortie: {{ movie.date_de_sortie }}</p>
                    <p>Réalisateur: {{ movie.realisateur }}</p>
                    <p>Acteurs: {{ movie.acteurs.join(', ') }}</p>
                    <p>Genre: {{ movie.genre.join(', ') }}</p>
                </li> -->
            </ul>
        </div>
        <div v-else>
            <p>Aucun film trouvé.</p>
        </div>
    </div>
</template>

<script>
import moviesData from '~/static/movies.json';

import MovieCard from '~/components/MovieCard.vue'; 

export default {
  components: {
    MovieCard,  
  },
  data(){
    return {
      movies: moviesData
    };
  }
}
</script>
