<script setup lang="ts">
const props = defineProps({
  img: String,
  to: String,
});
</script>

<script lang="ts">
export default {};
</script>

<template>
  <nuxt-link :to="to" class="flex-1 relative select-none h-full flex">
    <div class="h-full absolute inset-y-0 -inset-x-20 flex justify-center items-center overflow-hidden">
      <div
        class="h-84 w-84 absolute rounded-full flex justify-center items-center text-[var(--primary-color)]"
        v-ripple
      >
        <nuxt-img :src="img" alt="" height="22" width="22" />
      </div>
    </div>
  </nuxt-link>
</template>
