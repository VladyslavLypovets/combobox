<template>
  <v-app>
    <v-main>
      <div class="container my-2">
        <Combobox
          :items="items"
          v-model="value"
          @update:modelValue="updateModelValueHandler"
          placeholder="Type to search:"
        />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Combobox from '@/components/Combobox.vue'
import { ref } from 'vue'
import {items as data} from './items'

const value = ref([])
const items = ref(data)
const updateModelValueHandler = () => {
  console.log(value.value)
}

</script>

<style lang="scss">
.container {
  width: 1240px;
  margin: 0 auto;
}
</style>