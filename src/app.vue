<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
:root {
  --primary-color: #279eff;
  --text-color: #3a3a3a;
  --background-color: #ffffff;
  --background-color-2: #f2f3f4;
}

* {
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  min-height: 100dvh;
}

.app-layout {
  height: 100dvh;
  overflow: hidden;
}

body {
  @apply p-0 m-0;
  background-color: var(--background-color-2);
}

body:has(.slide-in-leave-active) .page-enter-active,
body:has(.slide-in-enter-active) .page-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.4s;
}

.slide-in-enter-active,
.slide-in-leave-active {
  @apply absolute inset-x-0 z-50;
}
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translate(100%, 0);
}

.page-enter-active,
.page-leave-active {
  @apply absolute inset-x-0 z-0;
}
body:has(.slide-in-leave-active) .page-enter-from,
body:has(.slide-in-enter-active) .page-leave-to {
  transform: translate(-50%, 0);
}
</style>
