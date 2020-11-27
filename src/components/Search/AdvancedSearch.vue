<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-2">
      <b-card-header header-tag="header" class="p-0" role="tab">
        <b-button block @click="advanced.useAdvanced = !advanced.useAdvanced" variant="primary">Advanced</b-button>
      </b-card-header>
      <b-collapse id="advancedAccordion" v-model="advanced.useAdvanced" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-form-checkbox
            id="checkSeasonOne"
            v-model="advanced.seasons.s1"
            name="checkSeasonOne"
            v-bind:value="true"
            v-bind:unchecked-value="false"
            v-on:input="onInput"
          >
            only S1
          </b-form-checkbox>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'AdvancedSearch',
  props: ['value'],
  data() {
    return {
      advanced: {
        useAdvanced: false,
        seasons:{
          s1: false,
        },
      },
    }
  },
  methods: {
    onInput() {
      this.$emit('input', this.advanced)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
