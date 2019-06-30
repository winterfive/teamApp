<template>
  <v-app id="app">
    <Filters/>
    <div class="cardContainer">
      <Card v-for="player in this.playerArray" 
        class="row" 
        :key="player.index" 
        :playerName="player.name"
        :playerAge="player.age"
        :playerGender="player.gender"
        :playerState="player.state"
        :playerStatus="player.status">
          {{ playerName }}
          {{ playerAge }}
          {{ playerGender }}
          {{ playerState }}
          {{ playerStatus }}
      </Card>
    </div>
  </v-app>
</template>

<script>
import Card from "./components/Card.vue";
import Filters from "./components/Filters.vue";
import axios from 'axios';

export default {
  name: "app",
  components: {
    Card,
    Filters
  },
  data: function() {
    return {
      playerArray: null,
      isFiltered: false
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
  background-color:  #daf6ac;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
