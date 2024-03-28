<template>
    <div>
        <h1>HOME PAGE INDEX.VUE</h1>
        <div v-if="profiles"><ul>

      <li v-for="profile in profiles" :key="profile.id">
        <NuxtLink :to="`/profile/${profile.id}`">
        {{ profile.nom }}
    </NuxtLink></li>


    </ul>

        </div>
        <div v-else>
            <p>no profiles displayed</p>
        </div>

        <div v-if="movies" class="container-movies">
            <ul>
                <MovieCardSmall v-for="movie in movies" :key="movie.id" :movie="movie" />
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
import profileData from '~/static/profiles.json';

import MovieCardSmall from '~/components/MovieCardSmall.vue'; 

export default {
  components: {
    MovieCardSmall,  
  },
  data(){
    return {
      movies: moviesData,
      profiles: profileData
    };
  }
}
// 


</script>


<style scoped>
.container-movies ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

</style>