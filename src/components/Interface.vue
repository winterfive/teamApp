<!-- TODOS

- center filter container
- clear v-selects on click of 'filter playes' btn
- enable 'edit player' btn

-->

<template>
  <div>
    <div class="filterContainer">
      <div>
        <h2>Player Manager</h2>
      </div>
      <div class="selectContainer">
        <v-select
          :items="this.ages"
          label="Age"
          box
          v-on:click="filterArray('age', $event)"
        ></v-select>
        <v-select 
          :items="this.genders"
          label="Gender"
          box
          v-on:click="filterArray('gender', $event)"
        ></v-select>
        <v-select 
          :items="this.locations"
          label="Location"
          box
          v-on:click="filterArray('state', $event)"
        ></v-select>
        <v-select 
          :items="this.status"
          label="Status"
          box
          v-on:click="filterArray('status', $event)"
        ></v-select>
        <!-- Filtering btns -->
        <v-btn class="filterBtn" v-if="!isFiltered" @click="this.filterArray" small dark color="blue lighten-1">Filter Players</v-btn>
        <v-btn class="filterBtn" v-else @click="this.clearFilteredArray" small dark color="blue lighten-1">Show All Players</v-btn>
      </div>
    </div>
    <!-- Player Cards -->
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
    <!-- Repeated code here but I'm leaning towards the ship part of "build and ship", go go go! -->
      <Card v-show="isFiltered" v-for="player in this.filteredPlayerArray" 
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
  </div>
</template>

<script>
let testArray = [];
let lowAge = 0;
let highAge = 17;

import Card from "./Card.vue";
import axios from 'axios';

export default {
  name: "app",
  components: {
    Card
  },
  data: function() {
    return {
      ages: [],    
      filteredPlayerArray: null,     
      genders: [ "Female", "Male", "Cis/Trans"],
      isFiltered: false,
      locations: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
      playerArray: null,
      previousKey: "",
      status: [ "active", "inactive"]
    }
  },
  created: function() {
    for(var i = lowAge; i <= highAge; i++) {
      this.ages.push(i);
    }
  },
  methods: {
    filterArray(key, event) {
      console.log("key: " + key);
      console.log("value: " + event);

        // TODO Working on this method

        //this.filtersToUse.push("'key':'event'")
        event.preventDefault()

        this.isFiltered = true;
    }, 
    clearFilteredArray() {
      this.isFiltered = false;
      this.filteredPlayerArray = [];
    } 
  },
  mounted: function() {
    axios.get(`https://dii-test.s3.amazonaws.com/players.json`)
    .then(response => {
      this.playerArray = response.data
    })
    .catch(e => {
      console.log("get error: " + e)
    });    
  },
};

</script>

<style lang="scss" scoped>

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

.filterBtn {
  width: 140px;
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
  width: 60px;
}

</style>
