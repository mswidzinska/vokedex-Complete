<template>
  <div class="p-3">
    <b-card v-for="pokemon in getFirstThreeFilteredPokemon" :key="pokemon.name" no-body class="d-flex flex-row p-3 mb-1 pokemon-result">
      <div class="search-result-image mr-3"></div>
      <h3 class="mr-3">{{ pokemon.name }}</h3>
      <h3>{{ pokemon.name }}</h3>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchResults',
  data() {
    return {
      searchResults: [
          {
              number: '#001',
              name: 'Bulbasaur'
          },
          {
              number: '#004',
              name: 'Charmander'
          },
          {
              number: '#007',
              name: 'Squirtle'
          }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getFirstThreeFilteredPokemon',
    ])
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-result-image {
    width: 40px;
    height: 40px;
    background-color: yellow;
}

.pokemon-result:hover {
  background-color: lightgray;
  cursor: pointer;
}
</style>
