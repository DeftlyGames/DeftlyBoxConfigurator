<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import LeftPanel from "./components/LeftPanel.vue";
import CenterPanel from "./components/CenterPanel.vue";
import RightPanel from "./components/RightPanel.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="flex h-full flex-col justify-between">
    <div class="flex-none basis-16">
      <TheHeader />
    </div>
    <div class="flex flex-grow flex-row">
      <div class="flex-none basis-1/5">
        <LeftPanel />
      </div>
      <div class="flex-grow basis-3/5">
        <CenterPanel />
      </div>
      <div class="flex-none basis-1/5">
        <RightPanel />
      </div>
    </div>
    <div class="flex-none basis-16">
      <TheFooter />
    </div>
  </div>
</template>

<style scoped></style>
