<template>
  <div id="app">
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
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

#app {
  @apply m-auto max-w-800 h-full overflow-hidden shadow relative;
  height: 100dvh;

  > * {
    @apply h-full w-full overflow-hidden flex flex-col shadow;
  }
}

body {
  @apply p-0 m-0 overflow-hidden;
  background-color: var(--background-color-2);
}

body:has(.slide-in-leave-active) .page-enter-active,
body:has(.slide-in-enter-active) .page-leave-active,
body:has(.slide-in-leave-active) .layout-enter-active,
body:has(.slide-in-enter-active) .layout-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.5s;
}

.slide-in-enter-active,
.slide-in-leave-active {
  @apply absolute inset-x-0 z-50;
}
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translate(100%, 0);
}

.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  @apply absolute inset-x-0 z-0;
}
body:has(.slide-in-leave-active) .page-enter-from,
body:has(.slide-in-enter-active) .page-leave-to,
body:has(.slide-in-leave-active) .layout-enter-from,
body:has(.slide-in-enter-active) .layout-leave-to {
  transform: translate(-30%, 0);
}
</style>
