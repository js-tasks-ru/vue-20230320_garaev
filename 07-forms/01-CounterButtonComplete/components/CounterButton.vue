<template>
  <button @click="click">{{ counts }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  data() {
    return {
      counts: 0,
    };
  },
  watch: {
    count: {
      deep: true,
      immediate: true,
      handler() {
        this.counts = this.count;
      },
    },
  },
  methods: {
    click() {
      this.$emit('update:count', ++this.counts);
    },
  },
};
</script>
