<template>

    <div v-if="getSelectedPokemon.sprites">{{ getSelectedPokemon.sprites.other.dream_world.front_default }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ImagePokemon',
    beforeCreate() {
        this.$store.dispatch('getPokemonDetails', 'https://pokeapi.co/api/v2/pokemon/39/');
    },
    computed: {
        ...mapGetters([
            'getSelectedPokemon',
        ])
    }
}
</script>
