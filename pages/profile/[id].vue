<template>
    <div>
      <h1>PROFILE OF USER :</h1>
      <h2 v-if="profile">{{ profile.nom }}</h2>
      <h2 v-if="profile">{{ profile.age }}</h2>
      <h2 v-if="profile">{{ profile.ville }}</h2>
      <h2 v-if="profile">{{ profile.email }}</h2>
      <p v-else>Profile not found.</p>
    </div>
  </template>
<script>
import profiledata from '~/static/profiles.json';
  
  export default {
    data() {
      return {
        profile: null
      };
    },
   async created() {
    const profileID = this.$route.params.id;
    this.profile = profiledata.find(profile => profile.id === profileID);
   }
}

</script>
