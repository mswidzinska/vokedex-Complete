<template>
  <b-container class="p-3 bg-secondary">
    <b-row>
      <ImagePokemon />
      <Search />
    </b-row>
    <b-row class="h-350"> <!-- Still ugly hope we can solve it soon -->
      <b-col class="border-left border-bottom border-dark p-3">
        <!-- When this becomes a component move b-coll with it! -->
        <p>DETAILS</p>
      </b-col>
      <SearchResults />
    </b-row>
  </b-container>
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

<style lang="scss">
  $secondary: #D50A2C;

  // Bootstrap and its default variables
  @import '../node_modules/bootstrap/scss/bootstrap';
  // BootstrapVue and its default variables
  @import '../node_modules/bootstrap-vue/src/index.scss';

  .h-350 {
    min-height: 350px;
  }
</style>
