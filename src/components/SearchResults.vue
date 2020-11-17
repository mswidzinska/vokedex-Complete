<template>
  <div class="p-3">
    <b-card v-for="pokemon in searchResults" :key="pokemon" no-body class="d-flex flex-row p-3 mb-1">
      <div class="search-result-image mr-3"></div>
      <h3 class="mr-3">{{ pokemon.number }}</h3>
      <h3>{{ pokemon.name }}</h3>
    </b-card>
  </div>
</template>

<script>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-result-image {
    width: 40px;
    height: 40px;
    background-color: yellow;
}
</style>
