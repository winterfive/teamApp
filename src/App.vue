<template>
  <v-app id="app">
    <div class="filterContainer">
      <div>
        <h2>Player Manager</h2>
      </div>
      <div class="selectContainer">
        <v-select
        :items="this.ages"
        label="Age"
        box
        ></v-select>
        <v-select 
        :items="this.genders"
        label="Gender"
        box
        ></v-select>
        <v-select 
        :items="this.locations"
        label="Location"
        box
        ></v-select>
        <v-select 
        :items="this.status"
        label="Status"
        box
        ></v-select>
        <v-btn small dark color="blue lighten-1">Filter Players</v-btn>
      </div>
    </div>
    <div class="cardContainer">
      <Card v-show="!isFiltered" v-for="player in this.playerArray" 
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
      <Card v-show="isFiltered" v-for="player in this.filteredArray" 
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
import axios from 'axios';

export default {
  name: "app",
  components: {
    Card
  },
  data: function() {
    return {
      ages: [ "0 - 4", "5 - 7", "7 - 10", "11 - 14", "14 - 17"],      
      filteredArray: null,
      filtersToUse: [],      
      genders: [ "Female", "Male", "Cis/Trans"],
      isFiltered: false,
      locations: [],
      playerArray: null,
      status: [ "active", "inactive"]
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
  },
  methods: {
    filterArray() {
      let filteredArray = this.playerArray.filter(findAge);
    }    
  },
  findAge(age) {
    return player.age === 6;
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

.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.filterContainer {
  width: 90%;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  align-items: center;
}

h2 {
  margin: 10px 0;
}

.selectContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
}

.v-select {
  margin: 3px;
}
</style>
