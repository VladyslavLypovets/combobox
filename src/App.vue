<template>
  <v-app>
    <v-main>
      <div class="container my-2">
        <Combobox />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Combobox from '@/components/Combobox.vue'

</script>

<style lang="scss">
.container {
  width: 1240px;
  margin: 0 auto;
}
</style>