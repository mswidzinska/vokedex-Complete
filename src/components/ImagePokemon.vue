<template>
    <div>{{ getSelectedPokemon.sprites.other.dream_world.front_default }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ImagePokemon',
    beforeMount() {
        this.$store.dispatch('getPokemonDetails', 'https://pokeapi.co/api/v2/pokemon/39/');
    },
    computed: {
        ...mapGetters([
            'getSelectedPokemon',
        ])
    }
}
</script>
