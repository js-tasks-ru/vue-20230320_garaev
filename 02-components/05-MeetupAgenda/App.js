import { defineComponent } from 'vue';
import PageMeetups from './components/PageMeetups';

export default defineComponent({
  name: 'App',

  components: {
    PageMeetups,
  },

  template: `<PageMeetups />`,
});
