<template>
  <div id="app">
    <b-container fluid class="pokedex-container bgc-red">
      <b-row no-gutters>
        <b-col>
          <div class="h-350">
            <ImagePokemon></ImagePokemon>
          </div>
        </b-col>
        <Search />
      </b-row>
      <b-row no-gutters>
        <b-col>
          <div class="h-350">
            <p>DETAILS</p>
          </div>
        </b-col>
        <b-col>
          <div class="h-350">
            <SearchResults />
          </div>
        </b-col>
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
  height: 350px;
}

.h-175 {
  height: 175px;
}
/* these stylings we can do by changeing bootstrap variables see: https://bootstrap-vue.org/docs/reference/theming#generating-custom-themes */
.bgc-red {
  background-color: #D50A2C;
}

</style>
