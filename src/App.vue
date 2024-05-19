<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import LeftPanel from './components/LeftPanel.vue'
import CenterPanel from './components/CenterPanel.vue'
import RightPanel from './components/RightPanel.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="h-full flex flex-col justify-between">
    <TheHeader />
    <div class="flex flex-row grow">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
      <TheFooter />
  </div>
</template>

<style scoped>
</style>
