<template>
  <div class="p-3">
    <b-card v-for="pokemon in getFirstFourFilteredPokemon" :key="pokemon.name" no-body class="d-flex flex-row p-3 mb-1 pokemon-result">
      <div class="search-result-image mr-3"></div>
      <h3 class="mr-3">{{ pokemon.name }}</h3>
      <h3>{{ pokemon.name }}</h3>
    </b-card>
    <button @click="getPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/')">BUTTON</button>
    <p>{{ getSelectedPokemon }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchResults',
  computed: {
    ...mapGetters([
      'getFirstFourFilteredPokemon',
      'getSelectedPokemon',
    ]),
  },
  methods: {
    ...mapActions([
      'getPokemonDetails',
    ]),
    handleClick() {
      this.$store.dispatch('getAllPokemon', 'https://pokeapi.co/api/v2/pokemon/1/');
      console.log(this.getSelectedPokemon);
    },
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
