<template>
  <b-container class="p-3 bg-secondary">
    <b-row>
      <ImagePokemon />
      <Search />
    </b-row>
    <b-row class="h-350"> <!-- Still ugly hope we can solve it soon -->
      <PokemonDetails />
      <SearchResults />
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import ImagePokemon from '../components/ImagePokemon';
import SearchResults from '../components/SearchResults';
import Search from '../components/Search/Search';
import PokemonDetails from '../components/PokemonDetails';
export default {
  name: "Home",
  data() {
    return {
      darkTheme: false,
    };
  },
  components: {
    ImagePokemon,
    Search,
    SearchResults,
    PokemonDetails,
  },
  beforeMount: function(){
    this.$store.dispatch('getAllPokemon')
    if(this.$route.params.pokemon){
      this.$store.dispatch('getPokemonDetails', `https://pokeapi.co/api/v2/pokemon/${this.$route.params.pokemon}`)
    }
  },
  methods: {
    ...mapActions([
      'filterPokemon',
    ]),
}
};
</script>
