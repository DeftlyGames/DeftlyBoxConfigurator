<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import LeftPanel from './components/LeftPanel.vue'
import CenterPanel from './components/CenterPanel.vue'
import RightPanel from './components/RightPanel.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="h-full flex flex-col justify-between">
    <div class="basis-16 flex-none">
      <TheHeader />
    </div>
    <div class="flex flex-row flex-grow">
      <div class="basis-1/5 flex-none">
        <LeftPanel />
      </div>
      <div class="basis-3/5 flex-grow">
        <CenterPanel />
      </div>
      <div class="basis-1/5 flex-none">
        <RightPanel />
      </div>
    </div>
    <div class="basis-16 flex-none">
      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
</style>
