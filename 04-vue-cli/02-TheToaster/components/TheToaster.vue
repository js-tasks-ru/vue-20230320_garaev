<template>
  <div class="toasts">
    <UiToast v-for="toast in toasts" :key="toast.id" :toast="toast" @close="remove()" />
  </div>
</template>

<script>
import UiToast from './UiToast.vue';
/**@todo переписать под composition API lang TS */
export default {
  name: 'TheToaster',

  components: { UiToast },
  data() {
    return {
      id: 0,
      toasts: [],
    };
  },
  methods: {
    success(msg) {
      this.toasts.push({
        id: ++this.id,
        message: msg,
        statusClass: 'toast_success',
        icon: 'check-circle',
      });
    },
    error(msg) {
      this.toasts.push({
        id: ++this.id,
        message: msg,
        statusClass: 'toast_error',
        icon: 'alert-circle',
      });
    },
    remove() {
      this.toasts.shift();
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast_success {
  color: var(--green);
}

.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
