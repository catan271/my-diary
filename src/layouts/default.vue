<script lang="ts">
export default {};
</script>

<template>
  <div class="app-layout m-auto max-w-800 h-screen flex flex-col relative">
    <slot />
    <app-layout-bottom-bar />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  background-color: var(--background-color);
}
</style>
