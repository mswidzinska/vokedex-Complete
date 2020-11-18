<template>
  <div id="app">
    <b-container fluid class="pokedex-container bgc-red">
      <b-row no-gutters>
        <b-col>
          <div class="h-350">
            <p>IMAGE</p>
          </div>
        </b-col>
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
                <p>ADVANCED SEARCH</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
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
import SearchPokemon from './components/SearchPokemon';
import SearchResults from './components/SearchResults';

export default {
  name: "App",
  components: {
    SearchPokemon,
    SearchResults,
  },
  beforeMount: function(){
    this.$store.dispatch('getAllPokemon')
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
