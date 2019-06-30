<template>
  <div>
    <div class="container">
      <div class="sameLine">
        <h2>{{ this.playerName }}</h2>
        <p class="playerAge" color="blue lighten-4">{{ this.playerAge }}</p>
      </div>
      <div class="sameLine">
        <p>{{ this.playerGender }}</p>
        <p>{{ this.playerState }}</p>
        <p>{{ this.playerStatus }}</p>
        <v-btn small dark color="blue lighten-1">Edit Player</v-btn>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    playerName: String,
    playerAge: Number,
    playerGender: String,
    playerState: String,
    playerStatus: String
  }
};
</script>

<style scoped lang="scss">

$bg-color: #313eab;
$text-color: white;
$circle-color: #f6d4ac;

 .container {
   background-color: $bg-color;
   display: flex;
   flex-direction: column;
   color: $text-color;
   width: 350px;
   margin: 3px;
   padding: 15px;
   border-radius: 5px;
 }

 .sameLine {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
 }

 p {
   margin: 0.3em;
 }

 v-btn {
   width: 80px;
   border-radius: 5px;
 }

 .playerAge {
   background-color: #1A237E;
   font-size: 1.2em;
   font-weight: bold;
   width: 40px;
   height: 40px;
   border-radius: 80px;
   color: white;
   line-height: 2.4;
 }
</style>
