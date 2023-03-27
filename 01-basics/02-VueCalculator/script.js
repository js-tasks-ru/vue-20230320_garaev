import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = {
  data() {
    return {
      a: 0,
      b: 0,
      arithmetic: 'sum',
    };
  },
  computed: {
    result() {
      if (this.arithmetic === 'sum') {
        return this.a + this.b;
      }
      if (this.arithmetic === 'subtract') {
        return this.a - this.b;
      }
      if (this.arithmetic === 'multiply') {
        return this.a * this.b;
      }
      if (this.arithmetic === 'divide') {
        return this.a / this.b;
      }
    },
  },
};
const app = createApp(App);
app.mount('#app');
