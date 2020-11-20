<template>

    <div v-if="getSelectedPokemon.sprites">
      <img :src="getSelectedPokemon.sprites.other.dream_world.front_default" />
    </div>
    <div v-else>
      Please select a pokemon
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ImagePokemon',
    computed: {
        ...mapGetters([
            'getSelectedPokemon',
        ])
    }
}
</script>
