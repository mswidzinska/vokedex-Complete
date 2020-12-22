<template>
  <div>
    <b-container class="p-3 bg-secondary home-view rounded">
      <b-row>
        <div id="blue-ball" class="bg-primary rounded-circle m-4" />
        <div class="tiny-balls bg-danger rounded-circle mr-1 mt-4" />
        <div class="tiny-balls bg-warning rounded-circle mr-1 mt-4" />
        <div class="tiny-balls bg-success rounded-circle mr-1 mt-4" />
      </b-row>
      <b-row> </b-row>
      <b-row> </b-row>
    </b-container>
    <div>
      <p>Hello {{ name }}</p>
      <h1 v-if="red">Mike have a red ball</h1>
      <h1 v-else-if="green">Monika have a green ball</h1>
      <h1 v-else-if="yellow">Caren have a yellow ball</h1>
      <h1 v-else>Phil have no ball</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "Monika",
      red: false,
      green: true,
      yellow: false,
    };
  },
};
</script>

<style lang="scss">
#blue-ball {
  height: 70px;
  width: 70px;
  border: 10px solid lightgrey;
}

.tiny-balls {
  height: 20px;
  width: 20px;
  border: 1px solid black;
}

.home-view {
  border: 3px solid black;
}
</style>