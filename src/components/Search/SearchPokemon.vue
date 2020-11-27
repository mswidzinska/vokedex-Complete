<template>
  <div>
    <b-form-group
      id="searchInputGroup"
      label="Search Pokemon:"
      label-for="searchInput"
    >
    <b-form-input
      id="searchInput"
      :value="value"
      v-on:input="$emit('input', $event)"
      type="text"
      placeholder="Something like: Charmander"
    ></b-form-input>
  </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'SearchPokemon',
  props: ['value'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
