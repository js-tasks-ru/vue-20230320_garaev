import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupIndex from './components/Meetup/MeetupIndex.js';

export default defineComponent({
  name: 'App',

  components: {
    MeetupIndex,
  },
  template: `<MeetupIndex />`,
});
