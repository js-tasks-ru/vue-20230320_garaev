import { createApp } from './vendor/vue.esm-browser.js';
// Создайте Vue приложение

const App = {
  data() {
    return {
      count: 0,
    };
  },
};

const app = createApp(App);
app.mount('#app');
