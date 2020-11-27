<template>
  <b-col class="border-left border-bottom border-dark p-3">
      <b-card v-if="getSelectedPokemon.name" class="bg-dark text-success">
        <!-- Work in Progress -->
        <p class="m-0">Name: {{getSelectedPokemon.name}}</p>
        <p>Number: {{getSelectedPokemon.id}}</p>
        <p>Height: {{getSelectedPokemon.height}}</p>
        <p>Weight: {{getSelectedPokemon.weight}}</p>
        <p>Type:</p>
        <ul>
          <li v-for="pokemon in getSelectedPokemon.types" :key="pokemon.index" >{{ pokemon.type.name }}</li>
        </ul>
        <p>Abilities:</p>
        <ul>
          <li v-for="pokemon in getSelectedPokemon.abilities" :key="pokemon.index" >{{ pokemon.ability.name }}</li>
        </ul>
      </b-card>
  </b-col>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PokemonDetails',
  computed: {
    ...mapGetters([
      'getSelectedPokemon',
    ]),
  },
};
</script>
