<template>
  <div>
    hi
  </div>
</template>

<script>
export default {
  name: 'AdvancedSearch',
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
