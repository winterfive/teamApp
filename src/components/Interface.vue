<!-- TODOS

- center filter container
- clear v-selects on click of 'filter players' btn
- enable 'edit player' btn
- add dark red background for inactive players

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
          v-on:click="handleClick('age', $event)"
        ></v-select>
        <v-select 
          :items="this.genders"
          label="Gender"
          box
          v-on:click="handleClick('gender', $event)"
        ></v-select>
        <v-select 
          :items="this.locations"
          label="Location"
          box
          v-on:click="handleClick('state', $event)"
        ></v-select>
        <v-select 
          :items="this.status"
          label="Status"
          box
          v-on:click="handleClick('status', $event)"
        ></v-select>
        <!-- Filtering btns -->
        <v-btn class="filterBtn" v-if="!isFiltered" @click="filterArray" small dark color="blue lighten-1">Filter Players</v-btn>
        <v-btn class="filterBtn" v-else @click="clearFilteredArray" small dark color="blue lighten-1">Show All Players</v-btn>
      </div>
    </div>
    <!-- Player Cards -->
    <div class="cardContainer">
      <Card 
        v-for="player in this.playerArray"
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
let lowAge = 0;
let highAge = 17;
let states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

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
      allPlayersArray: null,   
      filteredPlayerArray: null,
      filters: [],    
      genders: [ "Female", "Male", "Cis/Trans"],
      isFiltered: false,
      locations: states,
      playerArray: null,      
      status: [ "active", "inactive"]
    }
  },
  created: function() {
    for(var i = lowAge; i <= highAge; i++) {
      this.ages.push(i);
    }
  },
  methods: {
    handleClick(key, $event) {      
      console.log("key: " + key);
      console.log("value: " + $event.target); 
      event.preventDefault()     

      // TODO Working on this method
    }, 
    clearFilteredArray() {
      this.isFiltered = false;
      this.filteredPlayerArray = [];
    },
    filterArray() {
      // Filter allPlayersArray using filters [] to create filteredPlayerArray
      //this.filters.push("'key':'event'")  
      this.isFiltered = true;
      this.playerArray = this.filteredPlayerArray;
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
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;  
  width: 90%;
}

.filterBtn {
  width: 140px;
}

h2 {
  margin: 10px 0;
}

.selectContainer {  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  width: 100%;
}

.v-select {
  margin: 3px;
  width: 60px;
}

</style>
