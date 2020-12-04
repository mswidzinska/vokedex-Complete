<template>
  <b-col>
      <b-card v-if="getSelectedPokemon.name" class="bg-success">
        <!-- Work in Progress -->
        <div class="d-flex justify-content-between">
          <h3>{{getSelectedPokemon.name}}</h3>
          <h3>No. {{getSelectedPokemon.id}}</h3>
        </div>
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
