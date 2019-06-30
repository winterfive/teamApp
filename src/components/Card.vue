<template>
  <div>
    <div class="container">
      <div class="sameLine">
        <h2>{{ this.playerName }}</h2>
        <p class="playerAge">{{ this.playerAge }}</p>
      </div>
      <div class="sameLine">
        <p>{{ this.playerGender }}</p>
        <p>{{ this.playerState }}</p>
        <p>{{ this.playerStatus }}</p>
        <button>Edit Player</button>
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
 }

 .sameLine {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
 }

 p {
   margin: 0.3em;
 }

 button {
   width: 80px;
   border-radius: 5px;
 }

 .playerAge {
   background-color: $circle-color;
   width: 40px;
   height: 40px;
   border-radius: 80px;
   color: black;
   line-height: 2.4;
 }
</style>
