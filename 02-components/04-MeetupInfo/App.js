import { defineComponent } from 'vue';
import PageMeetups from './components/PageMeetups.js';

export default defineComponent({
  name: 'App',

  components: {
    PageMeetups,
  },

  template: `<PageMeetups />`,
});
