<script lang="ts">
export default {};
</script>

<template>
  <div class="default-layout relative">
    <div class="page flex-1 overflow-y-scroll">
      <slot />
    </div>
    <app-layout-bottom-bar />
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  background-color: var(--background-color);
}
</style>
