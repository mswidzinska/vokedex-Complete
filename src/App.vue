<template>
  <div id="app">
    <b-container fluid class="pokedex-container bgc-red">
      <b-row>
        <ImagePokemon />
        <Search />
      </b-row>
      <b-row class="h-350"> <!-- Still ugly hope we can solve it soon -->
        <b-col>
          <!-- When this becomes a component move b-coll with it! -->
          <p>DETAILS</p>
        </b-col>
        <SearchResults />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ImagePokemon from './components/ImagePokemon';
import SearchResults from './components/SearchResults';
import Search from './components/Search/Search'

export default {
  name: "App",
  components: {
    ImagePokemon,
    Search,
    SearchResults
  },
  beforeMount: function(){
    this.$store.dispatch('getAllPokemon'), URL
  },
  methods: {
    ...mapActions([
      'filterPokemon',
    ]),
}
};
</script>

<style>
.pokedex-container {
  max-width: 1000px;
  max-height: 700px;
  margin-top: 100px;
}

.h-350 {
  min-height: 350px;
}
/* these stylings we can do by changeing bootstrap variables see: https://bootstrap-vue.org/docs/reference/theming#generating-custom-themes */
.bgc-red {
  background-color: #D50A2C;
}

</style>
