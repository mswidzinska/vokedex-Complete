<template>
  <div>
    <!-- .prevent is a nice trick to prevent the default -->
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group
        id="searchInputGroup"
        label="Search Pokemon:"
        label-for="searchInput"
        description="Just type the pokemon name in here"
      >
        <b-form-input
          id="searchInput"
          v-model="query"
          type="text"
          required
          placeholder="Something like: Charmender"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'SearchPokemon',
  data() {
    return {
      query: '',
      advanced: {
        useAdvanced: false,
        seasons:{
          s1: false,
        },
      },
    }
  },
  methods: {
    onSubmit() {
      this.$emit('new-search-query', {query: this.query, advanced: this.advanced})
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
