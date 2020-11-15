<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="pokemon in allPokemon" :key="pokemon.name">
          {{ pokemon.name }}
        </li>
    </ul>
  </div>
</template>

<script>
import {getAllPokemon} from '../services/pokeApi'
export default {
  name: "HelloWorld",
  beforeMount: async function () {
    let allPokemon =  await getAllPokemon();
    if(allPokemon.results){
      this.allPokemon = allPokemon.results;
    } else {
      console.warn('no pokemon found!');
    }
    
  },
  data: ()=>{return {
    allPokemon: []
  }},
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
