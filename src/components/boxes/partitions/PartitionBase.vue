<template>
  <img
    class="absolute max-w-none"
    draggable="false"
    :style="{
      height: '146.5mm',
      transform: `translate(-50%, -50%) translate(0.25px, 0.25px) translate(${style.positionX}mm, ${style.positionY}mm) rotate(${props.rotation}deg)`,
      backfaceVisibility: 'hidden',
      outline: '1px solid transparent',
      willChange: 'transform',
      opacity: opacity,
    }"
    :src="props.imagePath"
    @click="onClick"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  />
</template>

<script setup lang="ts">
import { reactive, computed, defineProps, defineEmits, ref } from "vue";

const props = defineProps<{
  slotX: number;
  slotY: number;
  rotation: number;
  imagePath: string;
  partitionSpacing: number;
  use: boolean;
}>();

const imageUrl = new URL(
  "/src/assets/partitions/${props.imagePath}.svg",
  import.meta.url,
);

const emit = defineEmits<{
  (event: "update:use", value: boolean): void;
}>();

const style = reactive({
  positionX: (props.slotX - 2) * props.partitionSpacing,
  positionY: (props.slotY - 2) * props.partitionSpacing,
});

const mouseOver = ref(0);

const opacity = computed(() => (props.use ? 1 : mouseOver.value));

const onClick = () => {
  emit("update:use", !props.use);
};

const onMouseOver = () => {
  mouseOver.value = 0.5;
};

const onMouseLeave = () => {
  mouseOver.value = 0;
};
</script>
