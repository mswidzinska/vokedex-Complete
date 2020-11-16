<template>
  <div id="app">
    <b-container fluid class="pokedex-container bgc-red">
      <b-row no-gutters>
        <b-col>
          <div class="h-350">
            <p>IMAGE</p>
          </div>
        </b-col>
        <b-col>
          <b-row>
            <b-col>
              <div class="h-175">
                <p>SEARCH</p>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="h-175">
                <p>ADVANCED SEARCH</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col>
          <div class="h-350">
            <p>DETAILS</p>
          </div>
        </b-col>
        <b-col>
          <div class="h-350">
            <p>RESULTS</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
.pokedex-container {
  max-width: 1000px;
  max-height: 700px;
  margin-top: 100px;
}

.h-350 {
  height: 350px;
}

.h-175 {
  height: 175px;
}

.bgc-red {
  background-color: tomato;
}

</style>
