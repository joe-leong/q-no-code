<script setup lang="ts">
import NotesEditor from '@/components/NotesEditor/NotesEditor.vue'
</script>

<template>
  <div class="notes">
    <NotesEditor />
  </div>
</template>

<style scoped>
.notes {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  flex: 1;
}
</style>
