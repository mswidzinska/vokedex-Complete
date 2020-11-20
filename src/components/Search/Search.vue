<template>
  
          <b-col>
          <b-row>
            <b-col>
              <div class="h-175">
                <SearchPokemon v-on:new-search-query="filterPokemon($event)" />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="h-175">
                <AdvancedSearch />
              </div>
            </b-col>
          </b-row>
        </b-col>
  
  
  
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
