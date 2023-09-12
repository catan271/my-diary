<script lang="ts">
export default {};
</script>

<template>
  <div class="slide-in-layout min-h-full">
    <div class="header">
      <div @click="$router.go(-1)">
        <nuxt-img src="/images/ic/ic_common_close.png" height="24" width="24" />
      </div>
    </div>
    <div class="page flex flex-col">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.slide-in-layout {
  background-color: var(--background-color);
}
</style>
