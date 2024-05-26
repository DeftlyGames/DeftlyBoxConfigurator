<template>
  <img
    alt="Box Quad Top View"
    class="absolute max-w-none"
    draggable="false"
    :style="{
      height: '146.5mm',
      transform: `translate(-50%, -50%)`,
      backfaceVisibility: 'hidden',
      outline: '1px solid transparent',
      transformStyle: 'flat',
      willChange: 'transform',
    }"
    src="@/assets/boxes/top/q.svg"
  />

  <HalfA
    v-for="(item, i) in usedSlots.a"
    :position="i"
    :use="item"
    @update:use="onUseAUpdate(i, $event)"
  ></HalfA>

  <HalfB
    v-for="(item, i) in usedSlots.b"
    :position="i"
    :use="item"
    @update:use="onUseBUpdate(i, $event)"
  ></HalfB>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import HalfA from "./partitions/HalfA.vue";
import HalfB from "./partitions/HalfB.vue";

const position = 3; // Example position value
const use = ref(true); // Initialize the use state

const usedSlots = reactive({
  a: [false, true, false, true, false],
  b: [false, true, false, true, false],
});

function onUseAUpdate(position: number, newValue: boolean) {
  usedSlots.a[position] = newValue;
}

function onUseBUpdate(position: number, newValue: boolean) {
  usedSlots.b[position] = newValue;
}
</script>
