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
  .h-350 {
    min-height: 350px;
  }
</style>
