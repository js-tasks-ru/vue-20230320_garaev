import { defineComponent } from 'vue';
import MeetupIndex from './components/MeetupIndex.js';

export default defineComponent({
  name: 'App',

  components: {
    MeetupIndex,
  },

  template: `<MeetupIndex />`,
});
