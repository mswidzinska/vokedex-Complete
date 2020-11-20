<template>
  <div>

    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-form-checkbox
              id="advanced"
              v-model="advanced.useAdvanced"
              name="advanced"
              v-bind:value="true"
              v-bind:unchecked-value="false"
            >
              use advanced
            </b-form-checkbox>
            <b-form-checkbox
              id="checkSeasonOne"
              v-model="advanced.seasons.s1"
              name="checkSeasonOne"
              v-bind:value="true"
              v-bind:unchecked-value="false"
            >
              only S1
            </b-form-checkbox>
          </b-card-body>
        </b-collapse>
      </b-card>

    </div>







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
