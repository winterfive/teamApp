<template>
  <div>
    <div class="container">
      <div class="sameLine">
        <h2>Player Name</h2>
        <p class="playerAge">17</p>
      </div>
      <div class="sameLine">
        <p>male</p>
        <p>TX</p>
        <p>active</p>
        <button>Edit Player</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Card"
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
