<template>
  <b-col>
    <div class="d-flex justify-content-center" v-if="getSelectedPokemon.sprites">
      <b-card 
        :img-src="getSelectedPokemon.sprites.other.dream_world.front_default"
        img-alt="Image"
        img-top
        img-height="200px"
        img-width="200px"
        class="bg-primary text-center px-5 pt-3">
        <p>{{getSelectedPokemon.name}}</p>
      </b-card>
    </div>
    <div class="d-flex justify-content-center" v-else>
      <b-card class="bg-primary text-center p-0">
        <p class=" p-5">
            please select your pokemon
        </p>
      </b-card>
    </div>
  </b-col>
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
