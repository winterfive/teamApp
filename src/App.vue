<template>
  <div id="app">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import axios from 'axios';

export default {
  name: "app",
  components: {
    Card
  },
  data: function() {
    return {
      playerArray: null
    }
  },
  created() {
    axios.get(`https://dii-test.s3.amazonaws.com/players.json`)
    .then(response => {
      this.playerArray = response.data
      console.log(this.playerArray[3].name)
    })
    .catch(e => {
      console.log("get error: " + e)
    })
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
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
