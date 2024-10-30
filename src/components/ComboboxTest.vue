<template>
    <v-combobox
        v-model="select"
        :items="items"
        label="I use a scoped slot"
        :closable-chips="true"
        multiple
    >
        <template v-slot:selection="{ item, parent }">
            <VueDraggable v-model="select">
                <v-chip
                    draggable
                    :key="item.id"
                    :closable="true"
                    @mousedown.stop
                    @click="chipClick(parent)"
                >
                    {{ item.title }}
                </v-chip>
            </VueDraggable>
        </template>
    </v-combobox>
</template>

<script setup>
import {items as data} from './items';
import { VueDraggable } from 'vue-draggable-plus'
import { ref } from 'vue';

const items = ref(data)
const select = ref([])

const chipClick = (parent) => {
    console.log(parent)
}

</script>