<script lang="ts">
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<template>
  <div class="bottom-bar w-full h-56 flex items-center">
    <btn-nav img="/images/ic/ic_menu_timeline.png" to="/diary" />
    <btn-nav img="/images/ic/ic_menu_calendar.png" to="/calendar" />
    <btn-add />
    <btn-nav img="/images/ic/ic_menu_chart.png" to="/review" />
    <btn-nav img="/images/ic/ic_menu_mine.png" to="/settings" />
  </div>
</template>

<style lang="scss" scoped>
.bottom-bar {
  background-color: var(--background-color);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);

  .v-btn__layout {
    @apply rounded-full;
  }
}
</style>
