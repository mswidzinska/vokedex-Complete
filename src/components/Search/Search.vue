<template>
  <b-col>
    <b-row>
      <b-col>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <SearchPokemon v-model="query"/>
          <AdvancedSearch v-model="advanced" />
          <div class="d-flex justify-content-between pt-2">
            <div class="d-flex">
              <div class="tiny-balls bg-danger rounded-circle m-2" />
              <div class="tiny-balls bg-success rounded-circle m-2" />
            </div>
            <div>
              <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </div>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex'
import SearchPokemon from './SearchPokemon';
import AdvancedSearch from './AdvancedSearch';
export default {
  name: 'Search',
    components: {
    SearchPokemon,
    AdvancedSearch,
  },
  data() {
    return {
      query: this.$route.params.query,
      advanced: {
        useAdvanced: false,
        seasons:{
          s1: false,
        },
      },
    }
  },
  beforeMount: function(){
    if(this.$route.params.query){
      this.filterPokemon({query: this.query, advanced: this.advanced})
    }
  },
  methods: {
    ...mapActions([
      'filterPokemon',
    ]),
    onSubmit() {
      this.filterPokemon({query: this.query, advanced: this.advanced})
    },
    onReset() {
      this.query = '';
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
