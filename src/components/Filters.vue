<template>
    <div class="filters">
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
    </div>
</template>

<script>
export default {
    name: "Filters"    
}
</script>

<style lang="scss" scoped>
    .filters {
        background-color: #daf6ac;
        width: 100%;
    }

</style>


