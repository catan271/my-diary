<template>
  <nuxt-link class="flex-1 relative select-none h-full" to="/dairy/create">
    <div
      class="absolute z-50 h-72 w-72 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-solid border-white overflow-hidden shadow-[0_0_4px_1px_rgba(0,0,0,0.12)]"
    >
      <div class="flex justify-center items-center rounded-full h-full w-full bg-[var(--primary-color)] shadow-[inset_0_0_4px_1px_rgba(0,0,0,0.2)]">
        <nuxt-img src="/images/ic/ic_add_diary.png" height="32" width="32" />
      </div>
    </div>
  </nuxt-link>
</template>
