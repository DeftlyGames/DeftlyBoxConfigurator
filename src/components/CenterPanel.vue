<template>
  <div class="p-2 flex flex-col size-full">
    <div class="basis-8 flex-none">
      Zoom
    </div>
    <div
      class="flex-grow overflow-hidden border-solid border-2 border-slate-300 rounded-md relative"
      @wheel="onMouseWheel"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @mouseleave="onMouseLeave" 
      @pointermove="onPointerMove"
    >
      <div class="size-full" :style="{ transform: `translate(${containerStyle.positionX }px, ${containerStyle.positionY }px) scale(${containerStyle.scale}) translate(50%, 50%)` }">
          <img alt="Box Quad Top View" class="max-w-none absolute" draggable="false" style="width: 145.5mm; height: 145.5mm; transform: translate(-50%, -50%) translate(0mm, 0mm);" src="../assets/boxes/top/q.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, reactive } from 'vue'

  var leftPointerDown = false
  var pointerPosX = 0
  var pointerPosY = 0
  var positionX = 0
  var positionY = 0
  var scale = 1
  var lastAnimationTime = 0
  var animationFrameRequest: number | undefined = undefined

  const containerStyle = reactive({
    scale: 1,
    positionX: 0,
    positionY: 0,
  })

  onMounted(() => {
    window.requestAnimationFrame(update)
  })

  onUnmounted(() => {
    if (animationFrameRequest) {
      window.cancelAnimationFrame(animationFrameRequest)
    }
  })

  function onMouseWheel (ev: WheelEvent) {
  scale += ev.deltaY * -0.005
  scale = clamp(scale, 0.5, 2)
  ev.stopPropagation()
  ev.preventDefault()
  }

  function onPointerDown (ev: MouseEvent) {
    if (ev.button === 0) {
      leftPointerDown = true;
      pointerPosX = ev.x
      pointerPosY = ev.y
    }
    ev.stopPropagation()
    ev.preventDefault()
  }

  function onPointerUp (ev: MouseEvent)  {
    mouseUp(ev)
  }

  function onMouseLeave (ev: MouseEvent) {
    mouseUp(ev)
  }

  function mouseUp (ev: MouseEvent) {
    if (leftPointerDown && ev.button === 0) {
      leftPointerDown = false
      ev.stopPropagation()
      ev.preventDefault()
    }
  }

  function onPointerMove (ev: MouseEvent) {
    if (!leftPointerDown) {
      return;
    }

    var deltaX = ev.x - pointerPosX
    var deltaY = ev.y - pointerPosY

    pointerPosX = ev.x
    pointerPosY = ev.y

    positionX += deltaX
    positionY += deltaY
    
    ev.stopPropagation()
    ev.preventDefault()
  }

  function update(time: DOMHighResTimeStamp) {
    var dt = (time - lastAnimationTime) / 1000
    lastAnimationTime = time

    containerStyle.scale = ease(containerStyle.scale, scale, 10, dt)

    containerStyle.positionX = ease(containerStyle.positionX, positionX, 20, dt)
    containerStyle.positionY = ease(containerStyle.positionY, positionY, 20, dt)
    
    animationFrameRequest = window.requestAnimationFrame(update)
  }

  function clamp(num: number, lower: number, upper: number) {
    return Math.min(Math.max(num, lower), upper);
  }

  function ease(from: number, to: number, rate: number, dt: number) {
    if (Math.abs(to - from) < 1e-3) {
        return to
    }

    let delta = (to - from) * rate * dt;
    return from + delta
  }
</script>