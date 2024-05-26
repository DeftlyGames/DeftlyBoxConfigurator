<template>
  <PartitionBase
    :slotX="props.position"
    :slotY="2"
    :rotation="0"
    :imagePath="partitionImage"
    :partitionSpacing="23.75"
    :use="props.use"
    @update:use="emit('update:use', $event)"
  >
  </PartitionBase>
</template>

<script setup lang="ts">
import partitionImage from "@/assets/partitions/half/b.svg";
import PartitionBase from "./PartitionBase.vue";

const props = defineProps<{
  position: number;
  use: boolean;
}>();

const emit = defineEmits<{
  (event: "update:use", value: boolean): void;
}>();
</script>
