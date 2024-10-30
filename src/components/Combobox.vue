<template>
  <div class="combobox">
    <div
      class="selected-container"
    >
      <VTextField
        v-model="search"
        @update:modelValue="searchUpdateHandle"
        class="v-combobox"
        :hide-details="true"
        placeholder="Type to search"
      >
        <template #default>
          <div class="current" @click.stop @mousedown.stop>
            <v-chip-group multiple filter @update:modelValue="vChipSelectHandle">
              <VueDraggable ref="el" v-model="selectedList">
                  <v-chip
                    v-for="item in selectedList"
                    class="me-1"
                    :key="item.id"
                    :closable="true"
                    label
                    :draggable="true"
                    @click:close="() => closeHandle(item.id)"
                  >
                    {{ item.title }}
                  </v-chip>
              </VueDraggable>
            </v-chip-group>
          </div>
        </template>
        <template #append-inner>
          <v-icon class="cursor-pointer" left>mdi-menu-down</v-icon>
        </template>
      </VTextField>
      
    </div>
    <v-menu
      activator="parent"
      :close-on-content-click="false"
      :max-height="320"
      v-model="menu"
      v-if="computedItems.length"
    >
        <v-list>
          <v-list-item
            v-for="item in computedItems"
            :key="item.id"
            :value="item.id"
            @click="select(item)"
          >
            <template #title>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>
          </v-list-item>
        </v-list>
      </v-menu>
  </div>
</template>

<script lang="ts" setup>
import {Item, items as data} from './items';
import { VueDraggable } from 'vue-draggable-plus'
import { ref, computed } from 'vue';

const props = defineProps(['foo'])
const items = ref(data)
let selectedList = ref<Array<Item>>([])
const menu = ref(false)
const search = ref('')
const filteredItems = ref<Array<Item>>([])


const select = (item: Item) => {
  if (isItemSelected(item.id)) {
    removeItem(item.id)
  } else {
    selectedList.value.push({...item,})
  }
}

const vChipSelectHandle = (indexes: number[]) => {
  selectedList.value = selectedList.value.map(item => ({...item, selected: false}))
  indexes.forEach(index => selectedList.value[index].selected = true)
}

const removeItem = (id: number) => {
  selectedList.value = selectedList.value.filter(item => item.id !== id)
}

const isItemSelected = (id: number) => {
  return selectedList.value.find(item => item.id === id)
}

const closeHandle = (id: number) => {
  removeItem(id)
}

const searchUpdateHandle = () => {
  filteredItems.value = items.value.filter(item => {
    const isMatchTitle = item.title.includes(search.value)
    const isMatchWithTags = !!item.tags?.find(tag => tag.includes(search.value))
    return isMatchTitle || isMatchWithTags
  })
  console.log('filteredItems - ', filteredItems.value)
}

const computedItems = computed(() => {
  return search.value
    ? filteredItems.value
    : items.value
})



</script>

<style lang="scss">
</style>