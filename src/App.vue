<template>
  <v-app id="app">
    <Interface/>
  </v-app>
</template>

<script>
  let testArray = [];
  let lowAge = 0;
  let highAge = 17;

  export default {
    name: "app",
    components: {
      Interface
    }
  };
</script>

<style lang="scss">

  #app {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color:  #daf6ac;
    display: flex;
    align-items: center;
  }

</style>
