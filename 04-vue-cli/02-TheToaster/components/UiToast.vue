<template>
  <div class="toast" :class="toast.statusClass">
    <UiIcon class="toast__icon" :icon="toast.icon" />
    <span>{{ toast.message }}</span>
  </div>
</template>

<script setup lang="ts">
import UiIcon from './UiIcon.vue';
import { onMounted } from 'vue';

const props = defineProps<{
  toast: {
    message: string;
    statusClass: string;
    icon: string;
  };
}>();

const emit = defineEmits(['close']);

onMounted(() => {
  setTimeout(() => emit('close'), 5000);
});
</script>

<style>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}
.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}
</style>
