<template>
  <div>
    <SearchPokemon v-on:new-search-query="filterPokemon($event)" />
    <AdvancedSearch />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SearchPokemon from './SearchPokemon';
import AdvancedSearch from './AdvancedSearch';
export default {
  name: 'Search',
    components: {
    SearchPokemon,
    AdvancedSearch,
  },
  data() {
    return {
      query: '',
      advanced: {
        useAdvanced: false,
        seasons:{
          s1: false,
        },
      },
    }
  },
  methods: {
    ...mapActions([
      'filterPokemon',
    ]),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
