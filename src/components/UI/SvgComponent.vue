<script setup>
import { ref, shallowRef } from 'vue'
// eslint-disable-file
const props = defineProps({
  svg: {
    type: [Object],
    required: true
  },
  size: {
    type: String,
    default: '24'
  },
  weight: {
    type: String,
    default: '1'
  }
})
const size = ref(props.size)
const weight = ref(props.weight)
const svg = shallowRef(props.svg)
</script>
<template>
  <div>
    <component
      :is="svg"
      :width="size"
      :height="size"
      :stroke-width="weight"
    ></component>
  </div>
</template>
