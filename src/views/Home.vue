<template>
  <b-container
    class="p-5 home-view rounded"
    :key="darkTheme"
    :style="{ backgroundColor: theme }"
    >
    <b-row class="mb-3">
      <div id="blue-ball" class="bg-primary rounded-circle m-4" @click="switchTheme()" />
      <div class="tiny-balls bg-danger rounded-circle mr-1 mt-4" />
      <div class="tiny-balls bg-warning rounded-circle mr-1 mt-4" />
      <div class="tiny-balls bg-success rounded-circle mr-1 mt-4" />
    </b-row>
    <b-row class="h-50">
      <ImagePokemon />
      <Search />
    </b-row>
    <b-row class="h-50">
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
  computed: {
    theme() {
      if (this.darkTheme) {
        return '#343a40';
      }
      return '#D50A2C';
    }
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
    switchTheme() {
      this.darkTheme = !this.darkTheme;
    }
}
};
</script>

<style lang="scss">
#blue-ball {
  height: 70px;
  width: 70px;
  border: 10px solid lightgrey;
}

#blue-ball:hover {
  cursor: pointer;
}

.tiny-balls {
  height: 20px;
  width: 20px;
  border: 1px solid black;
}

.home-view {
  border: 3px solid black;
  height: 800px;
}
</style>