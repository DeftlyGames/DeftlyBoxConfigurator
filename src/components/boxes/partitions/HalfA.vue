<template>
  <PartitionBase
    :slotX="2"
    :slotY="props.position"
    :rotation="90"
    :imagePath="partitionImage"
    :partitionSpacing="23.75"
    :use="props.use"
    @update:use="emit('update:use', $event)"
  >
  </PartitionBase>
</template>

<script setup lang="ts">
import partitionImage from "@/assets/partitions/half/a.svg";
import PartitionBase from "./PartitionBase.vue";

const props = defineProps<{
  position: number;
  use: boolean;
}>();

const emit = defineEmits<{
  (event: "update:use", value: boolean): void;
}>();
</script>
