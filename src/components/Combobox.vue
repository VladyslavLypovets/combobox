<template>
  <div class="combobox">
    <div class="selected-container">
      <VTextField
        v-model="search"
        @update:modelValue="searchUpdateHandle"
        class="v-combobox"
        :hide-details="true"
        :placeholder="placeholder"
      >
        <template #default>
          <div class="current" @click.stop @mousedown.stop>
            <v-chip-group multiple filter :modelValue="selectedIndexes" @update:modelValue="vChipSelectHandle">
              <VueDraggable ref="el" :modelValue="modelValue" @update:modelValue="update">
                <v-chip
                  v-for="(item, index) in modelValue"
                  class="me-1"
                  :key="`${item.id}-${index}`"
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
import { Item } from '../items';
import { VueDraggable } from 'vue-draggable-plus';
import { ref, computed, defineEmits } from 'vue';


const props = defineProps({
  placeholder: { type: String, default: 'Type to search' },
  items: { type: Array as () => Item[], default: () => [] },
  modelValue: { type: Array as () => Item[], required: true },
});
const emit = defineEmits(['update:modelValue']);

const menu = ref(false);
const search = ref('');
const filteredItems = ref<Item[]>([]);
const selectedIndexes = ref<number[]>([])

const select = (item: Item) => {
  if (isItemSelected(item.id)) {
    removeItem(item.id);
  } else {
    emit('update:modelValue', [
      ...props.modelValue,
      item
    ]); 
  }
};

const vChipSelectHandle = (indexes: number[]) => {
  let time = props.modelValue.map(item => ({ ...item, selected: false }));
  indexes.forEach(index => time[index].selected = true);
  update(time);
};

const removeItem = (id: number) => {
  emit('update:modelValue', props.modelValue.filter(item => item.id !== id));
};

const isItemSelected = (id: number) => {
  return props.modelValue.find(item => item.id === id);
};

const closeHandle = (id: number) => {
  removeItem(id);
};

const searchUpdateHandle = () => {
  const searchStr = search.value.toLocaleLowerCase()
  filteredItems.value = props.items.filter(item => {
    const isMatchTitle = item.title.toLocaleLowerCase().includes(searchStr);
    const isMatchWithTags = !!item.tags?.find(tag => tag.toLocaleLowerCase().includes(searchStr));
    return isMatchTitle || isMatchWithTags;
  });
};

const computedItems = computed(() => {
  return search.value
    ? filteredItems.value
    : props.items;
});

const update = (input: Item[]) => {
  selectedIndexes.value = input.reduce((acc, item, index) => {
    if (item.selected) {
      return [...acc, index]
    }
    return acc
  }, [] as number[])
  emit('update:modelValue', input);
}
</script>

<style lang="scss">
</style>
