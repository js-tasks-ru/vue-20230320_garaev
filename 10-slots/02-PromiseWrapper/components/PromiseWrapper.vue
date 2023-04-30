<template>
  <slot :name="items.name" v-bind="items.data" />
</template>

<script>
export default {
  name: 'PromiseWrapper',

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },
  data() {
    return {
      state: null,
      result: null,
      error: null,
    };
  },
  computed: {
    items() {
      return {
        name: this.state,
        data: {
          result: this.result,
          error: this.error,
        },
      };
    },
  },
  watch: {
    promise: {
      immediate: true,
      handler() {
        this.state = 'pending';
        this.promise
          .then((res) => {
            this.state = 'fulfilled';
            this.result = res;
          })
          .catch((error) => {
            this.state = 'rejected';
            this.error = error;
          });
      },
    },
  },
};
</script>
