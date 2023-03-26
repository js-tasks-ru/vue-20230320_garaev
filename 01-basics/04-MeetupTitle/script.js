import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  data() {
    return {
      meetupId: 1,
      meetups: '',
    };
  },
  watch: {
    meetupId: {
      handler(id) {
        fetchMeetupById(id).then((meetup) => {
          this.meetups = meetup.title;
        });
      },
      immediate: true,
    },
  },
});

const app = createApp(App);
app.mount('#app');

window.app = app;
