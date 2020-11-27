<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>

<style lang="scss">
  $secondary: #D50A2C;
  // Bootstrap and its default variables
  @import '../node_modules/bootstrap/scss/bootstrap';
  // BootstrapVue and its default variables
  @import '../node_modules/bootstrap-vue/src/index.scss';
  // Google font Press Start 2P
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  .h-350 {
    min-height: 350px;
  }
  * {
    font-family: 'Press Start 2P', cursive;
    font-size: 0.75rem;
  }
  h3 {
    font-size: 1rem;
    text-transform: uppercase;
  }
</style>
