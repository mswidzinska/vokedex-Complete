<template>
  <b-col>
    <b-card
      v-for="pokemon in getFirstFourFilteredPokemon" :key="pokemon.name"
      no-body
      class="d-flex flex-row justify-content-center p-4 mb-1 bg-warning pokemon-result"
      @click="getPokemonDetails(pokemon.url)"
    >
      <h3>{{ pokemon.name }}</h3>
    </b-card>
  </b-col>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchResults',
  computed: {
    ...mapGetters([
      'getFirstFourFilteredPokemon',
    ]),
  },
  methods: {
    ...mapActions([
      'getPokemonDetails',
    ]),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pokemon-result:hover {
    background-color: lightgray !important;
    cursor: pointer;
  }
</style>
